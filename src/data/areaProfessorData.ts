import { PlanoAula, DinamicaGrupo } from '../types';

export const LESSON_PLANS = [
  {
    id: 'plan-1',
    pillar: 'Educação',
    title: 'Protagonismo Juvenil e Cidadania na Escola',
    overview: 'Desenvolvimento do senso de pertencimento e responsabilidade com o espaço escolar e a comunidade.',
    duration: '2 aulas (100 min)',
    ageGroup: '11 a 15 anos (6º ao 9º ano)',
    bnccCodes: ['EF69LP01', 'EF69LP13', 'BNCC-CG10'],
    objectives: [
      'Compreender a relação entre direitos e deveres no ambiente escolar.',
      'Identificar o papel do estudante como agente transformador da escola.',
      'Elaborar propostas coletivas de melhoria para a convivência.'
    ],
    activityDetails: 'Divisão da turma em 4 grupos (um por pilar da cartilha), leitura dirigida e debate no formato de Assembleia Cidadã.',
    evaluationMethod: 'Participação ativa nas discussões e entrega da proposta do grupo.'
  },
  {
    id: 'plan-2',
    pillar: 'Respeito',
    title: 'Combate ao Bullying e Ciberbullying: Empatia na Prática',
    overview: 'Análise de casos reais e dilemas éticos digitais para fortalecer a cultura de paz na escola.',
    duration: '2 aulas (100 min)',
    ageGroup: '12 a 15 anos (7º ao 9º ano)',
    bnccCodes: ['EF67EF03', 'EF08HI02', 'BNCC-CG09', 'BNCC-CG05'],
    objectives: [
      'Diferenciar brincadeiras de situações de humilhação e bullying.',
      'Aprender o protocolo cidadão de não viralizar nem omitir em casos de ciberbullying.',
      'Construir o Pacto de Convivência Digital da turma.'
    ],
    activityDetails: 'Análise de histórias interativas do portal, votação anônima sobre condutas e confecção do mural do Pacto de Respeito.',
    evaluationMethod: 'Rubrica de empatia e adesão ao Pacto de Convivência.'
  },
  {
    id: 'plan-3',
    pillar: 'Disciplina',
    title: 'Autonomia, Gestão do Tempo e Projeto de Vida',
    overview: 'Estratégias científicas e práticas para superar a procrastinação e organizar a rotina de estudos.',
    duration: '1 aula (50 min)',
    ageGroup: '11 a 15 anos',
    bnccCodes: ['BNCC-CG08', 'BNCC-CG06'],
    objectives: [
      'Aprender técnicas de foco e pausa (Pomodoro e metas diárias).',
      'Refletir sobre o uso equilibrado de redes sociais e jogos.',
      'Elaborar um cronograma personalizado de estudos.'
    ],
    activityDetails: 'Oficina de planejamento semanal usando a matriz de prioridades e simulação do cronômetro de estudos.',
    evaluationMethod: 'Plano semanal individual preenchido.'
  },
  {
    id: 'plan-4',
    pillar: 'Cuidado',
    title: 'Guardiões do Patrimônio e Meio Ambiente Escolar',
    overview: 'Mobilização prática para preservar a infraestrutura da escola e adotar hábitos sustentáveis.',
    duration: '2 aulas (100 min)',
    ageGroup: '11 a 15 anos',
    bnccCodes: ['EF07GE12', 'EF09CI13', 'BNCC-CG07'],
    objectives: [
      'Mapear pontos de desperdício de água e energia no colégio.',
      'Compreender o patrimônio público como bem comum de todos.',
      'Iniciar projeto de reciclagem ou horta comunitária.'
    ],
    activityDetails: 'Expedição investigativa pelo perímetro da escola e elaboração de cartazes informativos.',
    evaluationMethod: 'Apresentação do relatório de conservação e sinalização de lixeiras.'
  }
];

export const TEACHING_RUBRICS = [
  {
    id: 'rub-1',
    dimension: 'Empatia e Respeito à Diversidade',
    description: 'Capacidade de escutar o colega sem julgar e acolher opiniões ou culturas diferentes.',
    levels: {
      advanced: 'Escuta ativamente, defende colegas em situação de isolamento e promove a inclusão em trabalhos de grupo.',
      developing: 'Respeita as regras de convivência, mas necessita de mediação em momentos de discordância de opiniões.',
      needsSupport: 'Tende a interromper colegas, usa apelidos depreciativos ou recusa trabalhar com certos grupos.'
    }
  },
  {
    id: 'rub-2',
    dimension: 'Autonomia e Responsabilidade Escolar',
    description: 'Comprometimento com entregas, gestão do próprio tempo de estudo e zelo com materiais.',
    levels: {
      advanced: 'Realiza tarefas com antecedência, organiza materiais com primor e busca sanar dúvidas de forma proativa.',
      developing: 'Cumpre com prazos quando lembrado por professores ou responsáveis; necessita de incentivo para manter foco.',
      needsSupport: 'Constantemente atrasa tarefas, perde prazos e demonstra resistência a organizar a rotina.'
    }
  },
  {
    id: 'rub-3',
    dimension: 'Engajamento Cidadão e Cuidados com o Coletivo',
    description: 'Postura de cuidado com o patrimônio da escola (carteiras, banheiros, livros) e meio ambiente.',
    levels: {
      advanced: 'Identifica necessidades da escola, incentiva os pares a economizar recursos e cuida do patrimônio voluntariamente.',
      developing: 'Mantém sua mesa limpa e recolhe seu lixo quando solicitado.',
      needsSupport: 'Risca carteiras, descuida dos banheiros ou joga lixo no chão sem se importar com a coletividade.'
    }
  }
];

export const INTERDISCIPLINARY_PROJECTS = [
  {
    id: 'proj-1',
    title: 'Guardiões do Meio Ambiente e da Sustentabilidade Escolar',
    subjects: ['Ciências', 'Geografia', 'Língua Portuguesa'],
    description: 'Mapeamento do consumo de água, energia e resíduos da escola com intervenções artísticas e criação de composteira.',
    finalProduct: 'Exposição de maquetes sustentáveis, pontos de reciclagem ativos e apresentação de dados para a comunidade.'
  },
  {
    id: 'proj-2',
    title: 'Rádio Recreio Cidadão & Podcast da Turma',
    subjects: ['Língua Portuguesa', 'Artes', 'História'],
    description: 'Produção de vinhetas, entrevistas sobre profissões, dicas de estudos e mensagens contra o bullying para tocar no recreio.',
    finalProduct: 'Episódios semanais gravados e transmitidos nos alto-falantes e canal da escola.'
  },
  {
    id: 'proj-3',
    title: 'Feira de Ideias: Minha Escola, Meu Projeto de Vida',
    subjects: ['Matemática', 'Ensino Religioso/Socioemocional', 'Inovação'],
    description: 'Pesquisa sobre carreiras, orçamento pessoal, objetivos de vida e propostas de empreendedorismo social para o bairro.',
    finalProduct: 'Estandes interativos apresentados para pais, professores e estudantes da rede municipal.'
  }
];

export const DEBATE_GUIDES = [
  {
    id: 'deb-1',
    topic: 'Redes Sociais, Privacidade e Bullying Digital',
    title: 'Onde Termina a Brincadeira e Começa o Crime Digital?',
    guidingQuestions: [
      'Por que fotos ou figurinhas engraçadas podem se tornar formas de violência psicológica?',
      'Qual a responsabilidade de quem recebe uma piada ofensiva em um grupo de WhatsApp e só envia emojis de risada?',
      'Como a escola e as famílias podem construir regras saudáveis para o uso de celulares?'
    ]
  },
  {
    id: 'deb-2',
    topic: 'Patrimônio Público e Cidadania Financeira',
    title: 'De Quem É a Carteira da Sala de Aula?',
    guidingQuestions: [
      'De onde vem o dinheiro usado para comprar mesas, computadores e merenda escolar?',
      'Por que quebrar ou riscar uma parede da escola prejudica diretamente o estudante e seus familiares?',
      'Que atitudes podemos tomar diariamente para que a nossa escola seja mais bonita e acolhedora?'
    ]
  }
];

export const SCHOOL_USAGE_GUIDE = {
  introduction: 'O portal "Cidadania na Escola" foi estruturado para ser um aliado dinâmico do professor e da equipe gestora no desenvolvimento das 10 Competências Gerais da BNCC.',
  steps: [
    {
      step: 1,
      title: 'Acolhimento e Diagnóstico',
      description: 'Apresente os 4 pilares na primeira semana de aula usando a cartilha e os vídeos curtos para engajar os estudantes.'
    },
    {
      step: 2,
      title: 'Missões e Gamificação',
      description: 'Incentive a realização do Quiz de cada pilar e das missões de cuidado com a escola para desbloquear selos digitais.'
    },
    {
      step: 3,
      title: 'Avaliação Socioemocional',
      description: 'Aplique as rubricas de avaliação e utilize o Banco de Questões BNCC para elaborar provas e trabalhos com critérios claros.'
    }
  ]
};

// Aliases para compatibilidade retroativa
export const PLANOS_AULA_DATA: PlanoAula[] = LESSON_PLANS.map((p, i) => ({
  id: p.id,
  title: p.title,
  duration: p.duration,
  gradeLevel: p.ageGroup,
  theme: p.pillar,
  objectives: p.objectives,
  bnccCompetencies: p.bnccCodes,
  socioemotionalCompetencies: ['Empatia', 'Autonomia', 'Cidadania'],
  materials: ['Cartilha Cidadania na Escola', 'Projetor', 'Folhas de papel'],
  stepByStep: [
    { stage: 'Sensibilização', time: '15 min', description: p.overview },
    { stage: 'Atividade Prática', time: '35 min', description: p.activityDetails }
  ],
  evaluationRubric: [
    { criterion: 'Participação', excellent: 'Excelente', satisfactory: 'Satisfatório', needsImprovement: 'Precisa de apoio' }
  ]
}));

export const DINAMICAS_DATA: DinamicaGrupo[] = DEBATE_GUIDES.map(d => ({
  id: d.id,
  title: d.title,
  objective: d.topic,
  duration: '30 min',
  groupSize: 'Toda a turma',
  instructions: d.guidingQuestions,
  reflectionQuestions: d.guidingQuestions
}));

export const PROJETOS_ESCOLARES = INTERDISCIPLINARY_PROJECTS.map(p => ({
  id: p.id,
  title: p.title,
  theme: p.subjects.join(', '),
  duration: '3 semanas',
  description: p.description,
  bnccTag: 'BNCC Competências Gerais'
}));
