import { useState, useEffect, useCallback } from 'react';
import { UserProgress, BadgeTier } from '../types';
import { ALL_BADGES } from '../data/badgesData';
import confetti from 'canvas-confetti';

const STORAGE_KEY = 'cidadania_na_escola_progress_v2';

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
  badgeTiers: {},
  totalPoints: 0,
  theme: 'light'
};

/** Calcula o tier com base no percentual (0-1) */
function calcTier(pct: number): BadgeTier | null {
  if (pct >= 0.9) return 'ouro';
  if (pct >= 0.8) return 'prata';
  if (pct >= 0.6) return 'bronze';
  return null;
}

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      // Tentar chave nova
      let saved = localStorage.getItem(STORAGE_KEY);
      // Migração: se não tiver chave nova, tenta a antiga
      if (!saved) {
        saved = localStorage.getItem('cidadania_na_escola_progress_v1');
      }
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...defaultProgress, ...parsed, badgeTiers: parsed.badgeTiers ?? {} };
      }
    } catch (e) {
      console.error('Erro ao ler progresso do LocalStorage', e);
    }
    return defaultProgress;
  });

  const [newlyUnlockedBadge, setNewlyUnlockedBadge] = useState<string | null>(null);

  function triggerCelebration() {
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#1976D2', '#7E57C2', '#FB8C00', '#43A047', '#FBC02D']
      });
    } catch (e) {
      // safe fallback
    }
  }

  const saveProgress = useCallback((newProgress: UserProgress) => {
    // Usar a lista anterior (não a nova) para checar se já foi desbloqueado
    const prevUnlocked = new Set(newProgress.unlockedBadges || []);
    const updatedBadges = [...(newProgress.unlockedBadges || [])];
    const updatedTiers: Record<string, BadgeTier> = { ...(newProgress.badgeTiers || {}) };

    let latestBadgeUnlocked: string | null = null;

    // Pilar → badge-id mapeamento
    const pillarBadgeMap: { pilar: string; badgeId: string }[] = [
      { pilar: 'educacao',  badgeId: 'badge-educacao'  },
      { pilar: 'respeito',  badgeId: 'badge-respeito'  },
      { pilar: 'disciplina',badgeId: 'badge-disciplina' },
      { pilar: 'cuidado',   badgeId: 'badge-cuidado'   },
    ];

    for (const { pilar, badgeId } of pillarBadgeMap) {
      const quiz = newProgress.completedQuizzes[pilar];
      if (!quiz) continue;
      const pct = quiz.score / quiz.total;
      const tier = calcTier(pct);
      if (!tier) continue;

      // Tiers em ordem crescente
      const tierOrder: BadgeTier[] = ['bronze', 'prata', 'ouro'];
      const currentTier = updatedTiers[badgeId];
      const currentTierIndex = currentTier ? tierOrder.indexOf(currentTier) : -1;
      const newTierIndex = tierOrder.indexOf(tier);

      // Atualizar tier se subiu de nível
      if (newTierIndex > currentTierIndex) {
        updatedTiers[badgeId] = tier;
      }

      // Desbloquear brasão se ainda não está na lista
      if (!prevUnlocked.has(badgeId)) {
        updatedBadges.push(badgeId);
        latestBadgeUnlocked = badgeId;
        triggerCelebration();
      }
    }

    // Badge Líder da Cidadania: conquistar os 4 pilares
    const pilarBadgeIds = ['badge-educacao', 'badge-respeito', 'badge-disciplina', 'badge-cuidado'];
    const has4 = pilarBadgeIds.every(b => updatedBadges.includes(b));
    if (has4 && !updatedBadges.includes('badge-lider')) {
      updatedBadges.push('badge-lider');
      latestBadgeUnlocked = 'badge-lider';
      triggerCelebration();
    }

    // Só mostrar o modal para o badge mais recente desta operação
    if (latestBadgeUnlocked) {
      setNewlyUnlockedBadge(latestBadgeUnlocked);
    }

    const toSave: UserProgress = {
      ...newProgress,
      unlockedBadges: Array.from(new Set(updatedBadges)),
      badgeTiers: updatedTiers
    };

    setProgress(toSave);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch (e) {
      console.error('Erro ao salvar no LocalStorage', e);
    }
  }, []);

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

  // Progresso geral: 4 quizzes completados = 100%
  const calculateOverallPercentage = useCallback(() => {
    const pilares = ['educacao', 'respeito', 'disciplina', 'cuidado'];
    const done = pilares.filter(p => {
      const q = progress.completedQuizzes[p];
      return q && q.score / q.total >= 0.6;
    }).length;
    return Math.round((done / pilares.length) * 100);
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
    badgeTiers: progress.badgeTiers || {},
    totalPoints: progress.totalPoints || 0,
    progressPercentage: calculateOverallPercentage(),
    saveReflectionNote,
    toggleFavoriteQuestion,
    resetProgress,
    updateStudentInfo,
    calculateOverallPercentage
  };
}
