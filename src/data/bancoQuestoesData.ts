import { QuestaoBanco } from '../types';

export interface QuestaoBNCC {
  id: string;
  pillar: string;
  yearGroup: string;
  difficulty: string;
  type: string;
  question: string;
  bnccCode: string;
  answerKey: string;
  options?: string[];
}

export const BANCO_QUESTOES_BNCC: QuestaoBNCC[] = [
  // Educação
  {
    id: 'bq-bncc-01',
    pillar: 'Educação',
    yearGroup: '6º ano',
    difficulty: 'Fácil',
    type: 'objetiva',
    question: 'Sobre o papel do estudante no Ensino Fundamental - Anos Finais (11 a 15 anos), qual atitude melhor reflete o protagonismo juvenil de acordo com a BNCC?',
    bnccCode: 'BNCC-CG10',
    answerKey: 'B) Desenvolver autonomia, curiosidade intelectual, senso crítico e colaborar em decisões conjuntas da comunidade escolar.',
    options: [
      'Executar tarefas escolares de forma passiva, sem opinar sobre a realidade escolar.',
      'Desenvolver autonomia, curiosidade intelectual, senso crítico e colaborar em decisões conjuntas da comunidade escolar.',
      'Estudar apenas as disciplinas de que gosta, ignorando o restante do currículo.',
      'Transferir para a coordenação pedagógica toda a responsabilidade pelos conflitos de sala.'
    ]
  },
  {
    id: 'bq-bncc-02',
    pillar: 'Educação',
    yearGroup: '7º ano',
    difficulty: 'Médio',
    type: 'situacao-problema',
    question: 'Em uma turma do 7º ano, alguns alunos alegam que trabalhos em grupo geram desentendimentos e preferem fazer tudo sozinhos. Como o conceito de cidadania escolar justifica a realização de trabalhos em equipe?',
    bnccCode: 'BNCC-CG09',
    answerKey: 'O trabalho em grupo desenvolve cooperação, negociação, escuta empática e capacidade de resolver conflitos — habilidades essenciais para a cidadania e o futuro profissional.'
  },
  {
    id: 'bq-bncc-03',
    pillar: 'Educação',
    yearGroup: '8º ano',
    difficulty: 'Médio',
    type: 'dissertativa',
    question: 'Por que a prática do plágio ou cópia não autorizada de trabalhos da internet prejudica a formação autônoma e o projeto de vida do estudante?',
    bnccCode: 'EF69LP01',
    answerKey: 'O plágio impede o desenvolvimento da escrita autoral, do raciocínio crítico e da sintese de ideias, além de violar a ética acadêmica e o respeito aos direitos autorais.'
  },

  // Respeito
  {
    id: 'bq-bncc-04',
    pillar: 'Respeito',
    yearGroup: '6º ano',
    difficulty: 'Fácil',
    type: 'objetiva',
    question: 'Qual a conduta cidadã recomendada pela SaferNet e pela cartilha ao presenciar xingamentos ou exclusão em um grupo de chat da turma?',
    bnccCode: 'BNCC-CG05',
    answerKey: 'C) Não curtir, não compartilhar, salvar prints comprovantes, acolher quem foi agredido e buscar ajuda com adultos de confiança.',
    options: [
      'Compartilhar a conversa para expor quem xingou para toda a escola.',
      'Apagar o aplicativo e nunca contar para ninguém.',
      'Não curtir, não compartilhar, salvar prints comprovantes, acolher quem foi agredido e buscar ajuda com adultos de confiança.',
      'Xingar de volta com ofensas piores.'
    ]
  },
  {
    id: 'bq-bncc-05',
    pillar: 'Respeito',
    yearGroup: '7º ano',
    difficulty: 'Médio',
    type: 'situacao-problema',
    question: 'Durante o recreio, um grupo faz comentários depreciativos sobre o cabelo de um colega, alegando ser "apenas uma brincadeira". O que caracteriza essa conduta como discriminação e não brincadeira?',
    bnccCode: 'BNCC-CG09',
    answerKey: 'Em uma brincadeira saudável, todos se divertem. Quando há constrangimento, humilhação ou ataque a características pessoais e étnico-raciais, trata-se de preconceito e bullying.'
  },
  {
    id: 'bq-bncc-06',
    pillar: 'Respeito',
    yearGroup: '9º ano',
    difficulty: 'Difícil',
    type: 'dissertativa',
    question: 'Como a Comunicação Não-Violenta (CNV) pode ser utilizada para resolver conflitos de opinião entre estudantes sem recorrer a agressões verbais?',
    bnccCode: 'EF89LP04',
    answerKey: 'A CNV orienta a focar na observação dos fatos (sem julgamento), expressar os sentimentos provocados, identificar as necessidades de ambas as partes e fazer um pedido claro e negociado.'
  },

  // Disciplina
  {
    id: 'bq-bncc-07',
    pillar: 'Disciplina',
    yearGroup: '8º ano',
    difficulty: 'Fácil',
    type: 'objetiva',
    question: 'Do ponto de vista pedagógico e de saúde, qual o significado verdadeiro de "autodisciplina" para o estudante?',
    bnccCode: 'BNCC-CG08',
    answerKey: 'B) Ter capacidade de autorregulação, organizando tempo de estudo e descanso de forma consciente para alcançar seus objetivos.',
    options: [
      'Obedecer ceticamente sem entender as razões das regras.',
      'Ter capacidade de autorregulação, organizando tempo de estudo e descanso de forma consciente para alcançar seus objetivos.',
      'Estudar sem parar por 8 horas seguidas na véspera da prova.',
      'Fazer lição apenas quando sob ameaça de punições.'
    ]
  },
  {
    id: 'bq-bncc-08',
    pillar: 'Disciplina',
    yearGroup: '9º ano',
    difficulty: 'Médio',
    type: 'situacao-problema',
    question: 'Um estudante relata usar o celular até de madrugada jogando ou em redes sociais e no dia seguinte não consegue se concentrar na aula. Que plano de ação reflete autogestão?',
    bnccCode: 'BNCC-CG08',
    answerKey: 'Estabelecer limite de tela noturno (ex: desligar 1h antes de dormir), manter o celular longe da cama e criar uma rotina regular de sono de 8 horas.'
  },

  // Cuidado
  {
    id: 'bq-bncc-09',
    pillar: 'Cuidado',
    yearGroup: '6º ano',
    difficulty: 'Fácil',
    type: 'objetiva',
    question: 'A quem pertence o patrimônio físico da escola pública (carteiras, computadores, livros e banheiros)?',
    bnccCode: 'BNCC-CG10',
    answerKey: 'A) É um bem público coletivo sustentado por impostos da sociedade, cujo zelo e preservação pertencem a todos os estudantes e comunidade.',
    options: [
      'É um bem público coletivo sustentado por impostos da sociedade, cujo zelo e preservação pertencem a todos os estudantes e comunidade.',
      'Pertence unicamente ao diretor da escola.',
      'Por ser público, ninguém precisa cuidar.',
      'É de responsabilidade exclusiva dos funcionários de limpeza.'
    ]
  },
  {
    id: 'bq-bncc-10',
    pillar: 'Cuidado',
    yearGroup: '7º ano',
    difficulty: 'Médio',
    type: 'situacao-problema',
    question: 'Ao notar que torneiras do banheiro estão vazando água continuamente, qual a atitude do estudante comprometido com a sustentabilidade?',
    bnccCode: 'BNCC-CG07',
    answerKey: 'Comunicar imediatamente a equipe de manutenção/direção e conscientizar os colegas sobre o uso racional da água potável.'
  },

  // Geral
  {
    id: 'bq-bncc-11',
    pillar: 'Geral',
    yearGroup: '9º ano',
    difficulty: 'Difícil',
    type: 'dissertativa',
    question: 'Explique como o Estatuto da Criança e do Adolescente (ECA) articula os direitos fundamentais do jovem com seus deveres para com a sociedade e a escola.',
    bnccCode: 'BNCC-CG10',
    answerKey: 'O ECA estabelece que a criança e o adolescente são sujeitos de direitos (como educação de qualidade e proteção), e que o exercício pleno da cidadania requer o respeito aos direitos alheios e o cumprimento das normas democráticas.'
  }
];

export const BANCO_QUESTOES: QuestaoBanco[] = BANCO_QUESTOES_BNCC.map((q, idx) => ({
  id: q.id,
  num: idx + 1,
  tema: q.pillar === 'Educação' ? 'Educação e Escola'
      : q.pillar === 'Respeito' ? 'Respeito e Convivência'
      : q.pillar === 'Disciplina' ? 'Disciplina e Autonomia'
      : q.pillar === 'Cuidado' ? 'Meio Ambiente e Patrimônio'
      : 'Cultura de Paz e Cidadania',
  tipo: q.type === 'objetiva' ? 'Objetiva'
      : q.type === 'situacao-problema' ? 'Situação-problema'
      : 'Reflexão',
  enunciado: q.question,
  opcoes: q.options,
  respostaCorreta: q.answerKey,
  comentário: `Questão alinhada ao código ${q.bnccCode} da BNCC.`,
  competenciaBNCC: q.bnccCode,
  faixaEtaria: q.yearGroup
}));

export const TEMAS_BANCO: QuestaoBanco['tema'][] = [
  'Educação e Escola',
  'Respeito e Convivência',
  'Disciplina e Autonomia',
  'Meio Ambiente e Patrimônio',
  'Direitos, Deveres e BNCC',
  'Cultura de Paz e Cidadania'
];
