export interface QuestaoBNCC {
  id: string;
  pillar: 'Educação' | 'Respeito' | 'Disciplina' | 'Cuidado';
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  question: string;
  bnccCode: string;
  answerKey: string; // Ex: 'B'
  options: string[]; // Sempre 4 opções
}

export const BANCO_QUESTOES_BNCC: QuestaoBNCC[] = [
  // Educação
  {
    id: 'bq-bncc-01',
    pillar: 'Educação',
    difficulty: 'Fácil',
    question: 'Sobre o papel do estudante no Ensino Fundamental (11 a 15 anos), qual atitude reflete o protagonismo juvenil conforme as diretrizes da BNCC?',
    bnccCode: 'BNCC-CG10',
    answerKey: 'B',
    options: [
      'Executar tarefas escolares de forma passiva, sem opinar sobre a realidade escolar.',
      'Desenvolver autonomia, curiosidade intelectual, senso crítico e colaborar na comunidade escolar.',
      'Estudar apenas as disciplinas de que gosta, ignorando o restante do currículo.',
      'Transferir para os pais toda a responsabilidade pelo seu próprio aprendizado.'
    ]
  },
  {
    id: 'bq-bncc-02',
    pillar: 'Educação',
    difficulty: 'Médio',
    question: 'Ao planejar seu Projeto de Vida na escola, qual o principal benefício da organização do tempo e definição de metas?',
    bnccCode: 'BNCC-CG06',
    answerKey: 'C',
    options: [
      'Reduzir as horas de lazer e focar unicamente nas avaliações bimestrais.',
      'Delegar a organização das atividades escolares para os colegas de grupo.',
      'Equilibrar momentos de estudo, descanso e lazer de forma autônoma e produtiva.',
      'Evitar a realização de trabalhos em equipe para não ter divergências de opinião.'
    ]
  },
  // Respeito
  {
    id: 'bq-bncc-03',
    pillar: 'Respeito',
    difficulty: 'Fácil',
    question: 'Qual a conduta recomendada pela SaferNet e pela cartilha cidadã ao presenciar agressões e humilhações em um grupo de mensagens da turma?',
    bnccCode: 'BNCC-CG05',
    answerKey: 'C',
    options: [
      'Compartilhar os prints em outras redes sociais para expor o agressor publicamente.',
      'Permanecer em silêncio absoluto para evitar conflitos ou retaliações com os colegas.',
      'Não interagir com a agressão, tirar prints comprobatórios, acolher a vítima e avisar um adulto.',
      'Entrar na discussão utilizando ofensas semelhantes para defender quem foi atacado.'
    ]
  },
  {
    id: 'bq-bncc-04',
    pillar: 'Respeito',
    difficulty: 'Médio',
    question: 'O que diferencia fundamentalmente uma brincadeira descontraída de uma prática sistemática de bullying escolar?',
    bnccCode: 'BNCC-CG09',
    answerKey: 'A',
    options: [
      'O sentimento mútuo: se um dos envolvidos está constrangido ou triste, deixa de ser brincadeira.',
      'O local onde a conversa acontece ou o horário em que o diálogo é realizado.',
      'A aprovação silenciosa dos colegas que estão assistindo à situação sem intervir.',
      'O nível de popularidade de quem inicia a interação em sala de aula.'
    ]
  },
  {
    id: 'bq-bncc-05',
    pillar: 'Respeito',
    difficulty: 'Difícil',
    question: 'Como a escuta empática e a Comunicação Não-Violenta (CNV) contribuem para a resolução de desentendimentos na escola?',
    bnccCode: 'BNCC-CG07',
    answerKey: 'D',
    options: [
      'Obrigando uma das partes a abrir mão de suas opiniões para evitar o debate.',
      'Acelerando a punição dos envolvidos na diretoria sem a necessidade de conversa.',
      'Impedindo que novas ideias sejam sugeridas durante a realização de trabalhos coletivos.',
      'Permitindo expressar necessidades e sentimentos de forma honesta, sem julgamentos agressivos.'
    ]
  },
  // Disciplina
  {
    id: 'bq-bncc-06',
    pillar: 'Disciplina',
    difficulty: 'Fácil',
    question: 'Do ponto de vista da autogestão escolar, qual a definição mais precisa para o termo "autodisciplina"?',
    bnccCode: 'BNCC-CG08',
    answerKey: 'B',
    options: [
      'Obedecer de forma automática a todas as instruções externas sem questionar.',
      'Desenvolver a capacidade de gerenciar o próprio comportamento e tempo para atingir objetivos.',
      'Passar madrugadas inteiras estudando na véspera de provas importantes.',
      'Realizar as tarefas escolares apenas quando há promessa de prêmios ou notas extras.'
    ]
  },
  {
    id: 'bq-bncc-07',
    pillar: 'Disciplina',
    difficulty: 'Médio',
    question: 'Qual das estratégias abaixo é recomendada para combater a procrastinação e manter o foco nos estudos diários?',
    bnccCode: 'BNCC-CG01',
    answerKey: 'A',
    options: [
      'Dividir as tarefas complexas em etapas menores e programar intervalos curtos de descanso.',
      'Estudar na cama com o celular ao lado recebendo notificações das redes sociais.',
      'Evitar a realização de pausas para concluir todo o conteúdo de uma única vez.',
      'Estudar apenas nos minutos que antecedem a entrada do professor na sala de aula.'
    ]
  },
  // Cuidado
  {
    id: 'bq-bncc-08',
    pillar: 'Cuidado',
    difficulty: 'Fácil',
    question: 'Por que zelar pela conservação física do prédio, das carteiras e dos banheiros da escola é considerado um dever cidadão?',
    bnccCode: 'BNCC-CG10',
    answerKey: 'D',
    options: [
      'Porque a prefeitura e a direção escolar cobram taxas adicionais por danos causados.',
      'Porque os alunos que danificarem os objetos são proibidos de frequentar a biblioteca.',
      'Porque o desgaste natural deve ser reparado exclusivamente pelos funcionários da limpeza.',
      'Porque a escola pública é um patrimônio coletivo construído e mantido pelos impostos de toda a sociedade.'
    ]
  },
  {
    id: 'bq-bncc-09',
    pillar: 'Cuidado',
    difficulty: 'Médio',
    question: 'Qual das seguintes práticas reflete a sustentabilidade ambiental no cotidiano da comunidade escolar?',
    bnccCode: 'BNCC-CG07',
    answerKey: 'A',
    options: [
      'Separar resíduos recicláveis, evitar desperdício de água nos bebedouros e apagar as luzes ao sair.',
      'Deixar torneiras parcialmente abertas para facilitar a lavagem das mãos dos próximos alunos.',
      'Descartar embalagens plásticas e papéis nas salas de aula para posterior recolhimento.',
      'Utilizar copos descartáveis em vez de garrafas reutilizáveis para economizar água da pia.'
    ]
  },
  {
    id: 'bq-bncc-10',
    pillar: 'Cuidado',
    difficulty: 'Difícil',
    question: 'Como a atitude de respeito e colaboração com os funcionários da escola impacta a convivência coletiva?',
    bnccCode: 'BNCC-CG09',
    answerKey: 'C',
    options: [
      'Garante vantagens acadêmicas e privilégios na entrega de tarefas e trabalhos.',
      'Diminui as responsabilidades disciplinares do estudante perante as normas da escola.',
      'Fortalece um ambiente de respeito mútuo, segurança emocional e pertencimento comunitário.',
      'Isenta o estudante de participar das atividades de preservação ambiental da escola.'
    ]
  }
];

export const BANCO_QUESTOES = BANCO_QUESTOES_BNCC.map((q, idx) => ({
  id: q.id,
  num: idx + 1,
  tema: q.pillar,
  tipo: 'Objetiva',
  enunciado: q.question,
  opcoes: q.options,
  respostaCorreta: q.answerKey,
  comentário: `Questão alinhada ao código ${q.bnccCode} da BNCC.`,
  competenciaBNCC: q.bnccCode,
  faixaEtaria: '11-15 anos'
}));

