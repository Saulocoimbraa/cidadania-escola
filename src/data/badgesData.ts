import { Badge } from '../types';

/**
 * 5 brasões no total:
 * - 4 brasões de pilar (educacao, respeito, disciplina, cuidado)
 *   → tier bronze (≥60%), prata (≥80%), ouro (≥90%) conforme percentual do quiz
 * - 1 brasão especial "Líder da Cidadania" ao conquistar os 4 pilares
 *
 * Critério único e claro: fazer o quiz de cada pilar e tirar a nota.
 */
export const ALL_BADGES: Badge[] = [
  {
    id: 'badge-educacao',
    title: 'Brasão da Educação',
    description: 'Completou o Quiz de Educação e demonstrou compromisso com o conhecimento e o protagonismo juvenil!',
    iconName: 'GraduationCap',
    color: '#1976D2',
    category: 'educacao',
    unlocked: false,
    progressRequired: 'Faça o Quiz de Educação e acerte ≥60% das questões.'
  },
  {
    id: 'badge-respeito',
    title: 'Brasão do Respeito',
    description: 'Completou o Quiz de Respeito e demonstrou empatia no combate ao bullying e na cultura de paz!',
    iconName: 'HeartHandshake',
    color: '#7E57C2',
    category: 'respeito',
    unlocked: false,
    progressRequired: 'Faça o Quiz de Respeito e acerte ≥60% das questões.'
  },
  {
    id: 'badge-disciplina',
    title: 'Brasão da Disciplina',
    description: 'Completou o Quiz de Disciplina e demonstrou autonomia, organização e constância nos seus objetivos!',
    iconName: 'Compass',
    color: '#FB8C00',
    category: 'disciplina',
    unlocked: false,
    progressRequired: 'Faça o Quiz de Disciplina e acerte ≥60% das questões.'
  },
  {
    id: 'badge-cuidado',
    title: 'Brasão do Cuidado',
    description: 'Completou o Quiz de Cuidado e demonstrou compromisso com o patrimônio público e o meio ambiente!',
    iconName: 'Sprout',
    color: '#43A047',
    category: 'cuidado',
    unlocked: false,
    progressRequired: 'Faça o Quiz de Cuidado e acerte ≥60% das questões.'
  },
  {
    id: 'badge-lider',
    title: 'Líder da Cidadania',
    description: 'Conquistou os 4 brasões dos pilares! Você é um verdadeiro Estudante Cidadão!',
    iconName: 'Crown',
    color: '#FBC02D',
    category: 'geral',
    unlocked: false,
    progressRequired: 'Conquiste os 4 brasões de pilar (Educação, Respeito, Disciplina e Cuidado).'
  }
];
