import { useState, useEffect, useCallback } from 'react';
import { UserProgress } from '../types';
import { ALL_BADGES } from '../data/badgesData';
import confetti from 'canvas-confetti';

const STORAGE_KEY = 'cidadania_na_escola_progress_v1';

const defaultProgress: UserProgress = {
  studentName: 'Jovem Cidadão',
  schoolName: 'Minha Escola',
  gradeClass: '8º Ano',
  completedQuizzes: {},
  completedMissions: [],
  completedTools: [],
  savedReflections: [],
  favoriteQuestions: [],
  unlockedBadges: [],
  totalPoints: 0,
  theme: 'light'
};

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...defaultProgress, ...parsed };
      }
    } catch (e) {
      console.error('Erro ao ler progresso do LocalStorage', e);
    }
    return defaultProgress;
  });

  const [newlyUnlockedBadge, setNewlyUnlockedBadge] = useState<string | null>(null);

  // Helper to save to local storage and check badge unlocking
  const saveProgress = useCallback((newProgress: UserProgress) => {
    const prevUnlocked = new Set(newProgress.unlockedBadges || []);
    const updatedBadges = [...(newProgress.unlockedBadges || [])];

    // Check conditions for badges
    // 1. Campeão da Educação
    const eduQuiz = newProgress.completedQuizzes['educacao'];
    if (eduQuiz && eduQuiz.score / eduQuiz.total >= 0.6 && !prevUnlocked.has('badge-educacao')) {
      updatedBadges.push('badge-educacao');
      setNewlyUnlockedBadge('badge-educacao');
      triggerCelebration();
    }
    // 2. Aluno Respeitoso
    const respQuiz = newProgress.completedQuizzes['respeito'];
    if (respQuiz && respQuiz.score / respQuiz.total >= 0.6 && !prevUnlocked.has('badge-respeito')) {
      updatedBadges.push('badge-respeito');
      setNewlyUnlockedBadge('badge-respeito');
      triggerCelebration();
    }
    // 3. Mestre da Autonomia (Disciplina)
    const discQuiz = newProgress.completedQuizzes['disciplina'];
    if (discQuiz && discQuiz.score / discQuiz.total >= 0.6 && !prevUnlocked.has('badge-disciplina')) {
      updatedBadges.push('badge-disciplina');
      setNewlyUnlockedBadge('badge-disciplina');
      triggerCelebration();
    }
    // 4. Guardião da Escola (Cuidado / Missões)
    const cuidQuiz = newProgress.completedQuizzes['cuidado'];
    const missionsCount = (newProgress.completedMissions || []).length;
    if ((missionsCount >= 3 || (cuidQuiz && cuidQuiz.score / cuidQuiz.total >= 0.6)) && !prevUnlocked.has('badge-cuidado')) {
      updatedBadges.push('badge-cuidado');
      setNewlyUnlockedBadge('badge-cuidado');
      triggerCelebration();
    }
    // 5. Amigo Solidário (Reflexões)
    if ((newProgress.savedReflections || []).length >= 1 && !prevUnlocked.has('badge-solidario')) {
      updatedBadges.push('badge-solidario');
      setNewlyUnlockedBadge('badge-solidario');
      triggerCelebration();
    }
    // 6. Líder da Cidadania (Todos os 4 pilares)
    const has4 = ['badge-educacao', 'badge-respeito', 'badge-disciplina', 'badge-cuidado'].every(b =>
      updatedBadges.includes(b)
    );
    if (has4 && !updatedBadges.includes('badge-lider')) {
      updatedBadges.push('badge-lider');
      setNewlyUnlockedBadge('badge-lider');
      triggerCelebration();
    }

    const toSave: UserProgress = {
      ...newProgress,
      unlockedBadges: Array.from(new Set(updatedBadges))
    };

    setProgress(toSave);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch (e) {
      console.error('Erro ao salvar no LocalStorage', e);
    }
  }, []);

  function triggerCelebration() {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#1976D2', '#7E57C2', '#FB8C00', '#43A047', '#FBC02D']
      });
    } catch (e) {
      // safe fallback
    }
  }

  const updateStudentInfo = useCallback((name: string, school: string, gradeClass: string) => {
    saveProgress({
      ...progress,
      studentName: name,
      schoolName: school,
      gradeClass: gradeClass
    });
  }, [progress, saveProgress]);

  const recordQuizCompletion = useCallback((pillarId: string, score: number, total: number) => {
    const pointsEarned = score * 20;
    saveProgress({
      ...progress,
      completedQuizzes: {
        ...progress.completedQuizzes,
        [pillarId]: { score, total, completedAt: new Date().toISOString() }
      },
      totalPoints: progress.totalPoints + pointsEarned
    });
  }, [progress, saveProgress]);

  const toggleMission = useCallback((missionId: string) => {
    const current = progress.completedMissions || [];
    const exists = current.includes(missionId);
    const updated = exists ? current.filter(id => id !== missionId) : [...current, missionId];
    saveProgress({
      ...progress,
      completedMissions: updated,
      totalPoints: exists ? progress.totalPoints : progress.totalPoints + 15
    });
  }, [progress, saveProgress]);

  const saveReflectionNote = useCallback((promptId: string, promptText: string, userNote: string) => {
    const newEntry = {
      id: promptId,
      prompt: promptText,
      userNote,
      date: new Date().toLocaleDateString('pt-BR')
    };
    const existing = progress.savedReflections || [];
    saveProgress({
      ...progress,
      savedReflections: [newEntry, ...existing],
      totalPoints: progress.totalPoints + 25
    });
  }, [progress, saveProgress]);

  const toggleFavoriteQuestion = useCallback((questionId: string) => {
    const current = progress.favoriteQuestions || [];
    const exists = current.includes(questionId);
    const updated = exists ? current.filter(id => id !== questionId) : [...current, questionId];
    saveProgress({
      ...progress,
      favoriteQuestions: updated
    });
  }, [progress, saveProgress]);

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  // Calculate overall completion percentage (out of 100%)
  const calculateOverallPercentage = useCallback(() => {
    let completedSteps = 0;
    const totalSteps = 10;
    // 4 pillar quizzes
    if (progress.completedQuizzes['educacao']) completedSteps += 2;
    if (progress.completedQuizzes['respeito']) completedSteps += 2;
    if (progress.completedQuizzes['disciplina']) completedSteps += 2;
    if (progress.completedQuizzes['cuidado']) completedSteps += 2;
    // missions or reflections
    if ((progress.completedMissions || []).length >= 3) completedSteps += 1;
    if ((progress.savedReflections || []).length >= 1) completedSteps += 1;

    return Math.min(100, Math.round((completedSteps / totalSteps) * 100));
  }, [progress]);

  const closeBadgeModal = () => setNewlyUnlockedBadge(null);

  const getBadgeDetails = (badgeId: string) => {
    return ALL_BADGES.find(b => b.id === badgeId) || null;
  };

  const earnedBadges = ALL_BADGES.filter(b => (progress.unlockedBadges || []).includes(b.id));
  const newUnlockedBadge = getBadgeDetails(newlyUnlockedBadge || '');

  return {
    progress,
    completedMissions: progress.completedMissions || [],
    toggleMission,
    completeQuiz: recordQuizCompletion,
    recordQuizCompletion,
    newUnlockedBadge,
    clearNewBadge: closeBadgeModal,
    newlyUnlockedBadge,
    closeBadgeModal,
    getBadgeDetails,
    earnedBadges,
    totalPoints: progress.totalPoints || 0,
    progressPercentage: calculateOverallPercentage(),
    saveReflectionNote,
    toggleFavoriteQuestion,
    resetProgress,
    updateStudentInfo,
    calculateOverallPercentage
  };
}
