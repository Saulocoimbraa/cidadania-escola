import { BibliotecaItem } from '../types';

export const BIBLIOTECA_ITEMS: BibliotecaItem[] = [
  // Educação
  {
    id: 'bib-1',
    title: 'O Pequeno Príncipe e a Jornada do Conhecimento',
    category: 'Educação',
    type: 'Livro',
    description: 'Um clássico da literatura mundial que ensina sobre curiosidade, afeto, valorizar perguntas e a essência do aprendizado.',
    ageGroup: '11-13 anos',
    readingTime: '90 min (Leitura)',
    url: 'https://www.sesirs.org.br/sites/default/files/paragraph--files/o_pequeno_principe_-_antoine_de_saint-exupery_1.pdf',
    authorOrSource: 'Antoine de Saint-Exupéry / Editora',
    color: '#1976D2'
  },
  {
    id: 'bib-2',
    title: 'Clube de Protagonismo: O Guia do Estudante',
    category: 'Educação',
    type: 'Livro',
    description: 'Clube de Protagonismo é um espaço de aprendizagem autônoma organizado pelos próprios alunos dentro da escola, focado no desenvolvimento de habilidades, na socialização e na escolha livre de temas de interesse juvenil, contando com a supervisão de um professor orientador.',
    ageGroup: '11-15 anos',
    readingTime: '10 min de leitura',
    url: 'https://portal.educacao.pe.gov.br/wp-content/uploads/2025/02/CLUBE-DE-PROTAGONISMO-ESTUDANTES.pdf',
    authorOrSource: 'Sec. de Educação de Pernambuco / SEDE',
    color: '#1976D2'
  },
  {
    id: 'bib-3',
    title: 'As incríveis formas como a leitura molda o cérebro humano',
    category: 'Educação',
    type: 'Vídeo',
    description: 'A leitura não é uma habilidade com a qual nascemos: são circuitos cerebrais que a humanidade levou milhares de anos para desenvolver e aperfeiçoar. Quem explica isso é a neurocientista Maryanne Wolf, autora do livro “O Cérebro Leitor” (editora Contexto), em entrevista à BBC News Brasil.',
    ageGroup: 'Para todos',
    readingTime: '11 min de vídeo',
    url: 'https://www.youtube.com/watch?v=sSIZ34D9qC8',
    authorOrSource: 'Canal BBC News Brasil / Neurociência',
    color: '#1976D2'
  },
  // Respeito
  {
    id: 'bib-4',
    title: 'Extraordinário (Wonder): Lições de Empatia e Diversidade',
    category: 'Respeito',
    type: 'Livro',
    description: 'A inspiradora história de Auggie Pullman, um menino que enfrenta o preconceito e mostra o poder revolucionário da gentileza.',
    ageGroup: '11-15 anos',
    readingTime: 'Livro / Filme (110 min)',
    url: 'https://www.google.com/search?q=Livro+Extraordinario+RJ+Palacio+resumo+educativo',
    authorOrSource: 'R. J. Palacio',
    color: '#7E57C2'
  },
  {
    id: 'bib-5',
    title: 'Ciberbullying: saiba como identificar e como agir.',
    category: 'Respeito',
    type: 'Artigo',
    description: 'Orientações sobre como identificar e denunciar o ciber bullying. O material aborda como se proteger de ofensas, boatos e outros ataques virtuais, além de apresentar os canais oficiais para denúncia.',
    ageGroup: 'Para todos',
    readingTime: '10 min de leitura',
    url: 'https://new.safernet.org.br/content/ciberbullying-saiba-como-identificar-e-como-agir',
    authorOrSource: 'SaferNet Brasil / Ministério da Justiça',
    color: '#7E57C2'
  },
  {
    id: 'bib-6',
    title: 'Podcast Jovens Contra o Racismo e a Discriminação',
    category: 'Respeito',
    type: 'Podcast',
    description: 'Episódios em áudio com depoimentos de estudantes e professores sobre como valorizar a cultura afro-brasileira, indígena e a diversidade na escola.',
    ageGroup: '13-15 anos',
    readingTime: '25 min de áudio',
    url: 'https://www.unicef.org/brazil/busca?q=jovens+contra+o+racismo',
    authorOrSource: 'UNICEF Brasil / Juventude Ativa',
    color: '#7E57C2'
  },
  // Disciplina
  {
    id: 'bib-7',
    title: 'Hábitos Atômicos para Estudantes',
    category: 'Disciplina',
    type: 'Livro',
    description: 'Como pequenas mudanças diárias na rotina de estudos de 15 minutos transformam completamente suas notas e confiança na escola.',
    ageGroup: '13-15 anos',
    readingTime: '45 min (Resumo Prático)',
    url: 'https://institutoayrtonsenna.org.br/busca?q=rotina+de+estudos+habitos',
    authorOrSource: 'James Clear (Adaptação Jovem)',
    color: '#FB8C00'
  },
  {
    id: 'bib-8',
    title: 'O Poder da Pausa: Técnica Pomodoro Explicada para Adolescentes',
    category: 'Disciplina',
    type: 'Artigo',
    description: 'Passo a passo visual para usar o cronômetro sem ansiedade e evitar o cansaço mental nos dias de provas e trabalhos em grupo.',
    ageGroup: 'Para todos',
    readingTime: '6 min de leitura',
    url: 'https://novaescola.org.br/busca?q=tecnica+pomodoro+estudos',
    authorOrSource: 'Nova Escola / Aprendizagem Autônoma',
    color: '#FB8C00'
  },
  // Meio Ambiente
  {
    id: 'bib-9',
    title: 'Cartilha Escolas Sustentáveis: Patrimônio e Natureza',
    category: 'Meio Ambiente',
    type: 'Livro',
    description: 'Como implementar coleta seletiva, horta comunitária e redução de desperdício de merenda, água e energia no Ensino Fundamental.',
    ageGroup: 'Para todos',
    readingTime: '15 min de leitura',
    url: 'https://www.unesco.org/pt/search?text=escolas+sustentaveis',
    authorOrSource: 'UNESCO / Ministério da Educação',
    color: '#43A047'
  },
  {
    id: 'bib-10',
    title: 'Planeta Menos1Lixo | Para onde vai nosso lixo? | EP1',
    category: 'Meio Ambiente',
    type: 'Vídeo',
    description: 'No episódio de estreia de Planeta Menos1Lixo, Dandara, Max e Zezeu encaram um desafio real: falar sobre o que ninguém quer ver: o lixo. Com a mentoria de Fe Cortez, eles mergulham nos bastidores do descarte e descobrem o que realmente acontece quando jogamos algo "fora".',
    ageGroup: '11-13 anos',
    readingTime: '14 min de vídeo',
    url: 'https://youtu.be/WEojCY7QQz8?si=Qd-B6D4E0x2FUZDB',
    authorOrSource: 'MENOS 1 LIXO / Educação Ambiental',
    color: '#43A047'
  },
  // Direitos Humanos
  {
    id: 'bib-11',
    title: 'Declaração Universal dos Direitos Humanos Ilustrada para Jovens',
    category: 'Direitos Humanos',
    type: 'Livro',
    description: 'Os 30 artigos fundamentais da dignidade humana ilustrados e comentados de forma acessível para estudantes de 11 a 15 anos.',
    ageGroup: 'Para todos',
    readingTime: '20 min de leitura',
    url: 'https://www.unicef.org/brazil/declaracao-universal-dos-direitos-humanos',
    authorOrSource: 'UNICEF / ONU Brasil',
    color: '#1E88E5'
  },
  {
    id: 'bib-12',
    title: 'Plenarinho',
    category: 'Direitos Humanos',
    type: 'Livro',
    description: 'O Plenarinho é o programa oficial de educação para a democracia da Câmara dos Deputados do Brasil, voltado para o público infantojuvenil (crianças de 7 a 14 anos), além de pais e educadores',
    ageGroup: '11-15 anos',
    readingTime: '30 min de leitura',
    url: 'https://plenarinho.leg.br',
    authorOrSource: 'Plenarinho / Câmara dos Deputados',
    color: '#1E88E5'
  },
  // Cultura de Paz
  {
    id: 'bib-13',
    title: 'Comunicação Não-Violenta (CNV) em Sala de Aula',
    category: 'Cultura de Paz',
    type: 'Artigo',
    description: 'Como resolver desentendimentos entre colegas sem gritar, sem ofender e encontrando acordos onde todos ganhem.',
    ageGroup: '13-15 anos',
    readingTime: '9 min de leitura',
    url: 'https://novaescola.org.br/busca?q=comunicacao+nao+violenta',
    authorOrSource: 'Instituto Palas Athena / Cultura de Paz',
    color: '#E91E63'
  },
  {
    id: 'bib-14',
    title: 'Malala e o Direito à Escola para Todas as Meninas',
    category: 'Cultura de Paz',
    type: 'Livro',
    description: 'A trajetória de Malala Yousafzai em defesa da paz e do direito à educação como a arma mais poderosa do mundo.',
    ageGroup: '11-15 anos',
    readingTime: 'Livro (120 min)',
    url: 'https://www.unicef.org/brazil/busca?q=malala+educacao',
    authorOrSource: 'Malala Yousafzai / Edição Jovem',
    color: '#E91E63'
  },
  // Convivência Escolar
  {
    id: 'bib-15',
    title: 'Grêmio Estudantil e Mediação de Conflitos: Manual Prático',
    category: 'Convivência Escolar',
    type: 'Artigo',
    description: 'Como os estudantes podem criar círculos de conversa, assembleias e projetos esportivos e culturais para melhorar o clima na escola.',
    ageGroup: 'Para todos',
    readingTime: '12 min de leitura',
    url: 'https://www.gov.br/mec/pt-br/busca?SearchableText=gremio+estudantil',
    authorOrSource: 'Ministério da Educação (MEC)',
    color: '#00897B'
  },
  {
    id: 'bib-16',
    title: 'Podcast Convivência Nota 10: Vozes dos Alunos e Professores',
    category: 'Convivência Escolar',
    type: 'Podcast',
    description: 'Entrevistas curtas inspiradoras com turmas que transformaram o ambiente escolar vencendo o bullying e cuidando do patrimônio.',
    ageGroup: 'Para todos',
    readingTime: '18 min de áudio',
    url: 'https://www.futura.org.br/busca?q=convivencia+escolar',
    authorOrSource: 'Canal Futura / Juventude Cidadã',
    color: '#00897B'
  }
];

export const BIBLIOTECA_CATEGORIES: BibliotecaItem['category'][] = [
  'Educação',
  'Respeito',
  'Disciplina',
  'Meio Ambiente',
  'Direitos Humanos',
  'Cultura de Paz',
  'Convivência Escolar'
];
