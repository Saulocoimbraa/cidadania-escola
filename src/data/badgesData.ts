import { Badge } from '../types';

export const ALL_BADGES: Badge[] = [
  {
    id: 'badge-educacao',
    title: 'Campeão da Educação',
    description: 'Completou o Quiz de Educação e explorou como a escola transforma o projeto de vida!',
    iconName: 'GraduationCap',
    color: '#1976D2',
    category: 'educacao',
    unlocked: false,
    progressRequired: 'Concluir o quiz da página Educação com pelo menos 60% de acertos.'
  },
  {
    id: 'badge-respeito',
    title: 'Aluno Respeitoso',
    description: 'Participou das histórias de dilema ético e demonstrou empatia no combate ao bullying!',
    iconName: 'HeartHandshake',
    color: '#7E57C2',
    category: 'respeito',
    unlocked: false,
    progressRequired: 'Concluir o quiz da página Respeito com pelo menos 60% de acertos.'
  },
  {
    id: 'badge-disciplina',
    title: 'Mestre da Autonomia',
    description: 'Utilizou as ferramentas de organização diária e completou o desafio de Disciplina!',
    iconName: 'Compass',
    color: '#FB8C00',
    category: 'disciplina',
    unlocked: false,
    progressRequired: 'Concluir o quiz da página Disciplina e usar a Lista de Tarefas.'
  },
  {
    id: 'badge-cuidado',
    title: 'Guardião da Escola',
    description: 'Cumpriu missões semanais de cuidado com o patrimônio, sustentabilidade e meio ambiente!',
    iconName: 'Sprout',
    color: '#43A047',
    category: 'cuidado',
    unlocked: false,
    progressRequired: 'Concluir as Missões da Semana da página Cuidado com a Escola.'
  },
  {
    id: 'badge-solidario',
    title: 'Amigo Solidário',
    description: 'Refletiu no espaço "Pense Sobre Isso" sobre como ajudar seus colegas com gentileza!',
    iconName: 'Users',
    color: '#E91E63',
    category: 'geral',
    unlocked: false,
    progressRequired: 'Registrar ao menos 1 reflexão no diário cidadão da plataforma.'
  },
  {
    id: 'badge-lider',
    title: 'Líder da Cidadania',
    description: 'Concluiu todas as atividades dos 4 pilares e conquistou seu Diploma Jovem Cidadão!',
    iconName: 'Crown',
    color: '#FBC02D',
    category: 'geral',
    unlocked: false,
    progressRequired: 'Conquistar as quatro medalhas dos pilares da cartilha!'
  }
];
