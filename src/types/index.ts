export type PilarId = 'educacao' | 'respeito' | 'disciplina' | 'cuidado';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  competencia?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  youtubeId: string;
  channel: string;
  duration: string;
  description: string;
  debateQuestions: string[];
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  tags: string[];
}

export interface StoryDilemma {
  id: string;
  title: string;
  context: string;
  dilemma: string;
  options: {
    text: string;
    consequence: string;
    isPositive: boolean;
  }[];
  pedagogicalTip: string;
}

export interface BibliotecaItem {
  id: string;
  title: string;
  category: 'Educação' | 'Respeito' | 'Disciplina' | 'Meio Ambiente' | 'Direitos Humanos' | 'Cultura de Paz' | 'Convivência Escolar';
  type: 'Livro' | 'Vídeo' | 'Artigo' | 'Podcast';
  description: string;
  ageGroup: '11-13 anos' | '13-15 anos' | 'Para todos' | 'Educadores' | '11-15 anos';
  readingTime: string;
  url: string;
  authorOrSource: string;
  color: string;
}

export interface QuestaoBanco {
  id: string;
  num: number;
  tema: 'Educação e Escola' | 'Respeito e Convivência' | 'Disciplina e Autonomia' | 'Meio Ambiente e Patrimônio' | 'Direitos, Deveres e BNCC' | 'Cultura de Paz e Cidadania';
  tipo: 'Objetiva' | 'Verdadeiro/Falso' | 'Situação-problema' | 'Interpretação' | 'Reflexão';
  enunciado: string;
  opcoes?: string[];
  respostaCorreta: string;
  comentário: string;
  competenciaBNCC: string;
  faixaEtaria: string;
}

export interface PlanoAula {
  id: string;
  title: string;
  duration: string;
  gradeLevel: string;
  theme: string;
  objectives: string[];
  bnccCompetencies: string[];
  socioemotionalCompetencies: string[];
  materials: string[];
  stepByStep: {
    stage: string;
    time: string;
    description: string;
  }[];
  evaluationRubric: {
    criterion: string;
    excellent: string;
    satisfactory: string;
    needsImprovement: string;
  }[];
}

export interface DinamicaGrupo {
  id: string;
  title: string;
  objective: string;
  duration: string;
  groupSize: string;
  instructions: string[];
  reflectionQuestions: string[];
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  iconName: string;
  color: string;
  category: PilarId | 'geral';
  unlocked: boolean;
  unlockedAt?: string;
  progressRequired: string;
}

export interface UserProgress {
  studentName: string;
  schoolName: string;
  gradeClass: string;
  completedQuizzes: Record<string, { score: number; total: number; completedAt: string }>;
  completedMissions: string[];
  completedTools: string[];
  savedReflections: { id: string; prompt: string; userNote: string; date: string }[];
  favoriteQuestions: string[];
  unlockedBadges: string[];
  totalPoints: number;
  theme: 'light' | 'dark' | 'pastel';
}

export interface SearchResultItem {
  id: string;
  title: string;
  snippet: string;
  category: string;
  urlPath: string;
  type: 'Pilar' | 'FAQ' | 'Biblioteca' | 'Banco de Questões' | 'Reflexão' | 'Professor';
}
