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
    url: 'https://www.google.com/search?q=O+Pequeno+Principe+leitura+livro+pdf+dominio+publico',
    authorOrSource: 'Antoine de Saint-Exupéry / Editora',
    color: '#1976D2'
  },
  {
    id: 'bib-2',
    title: 'Protagonismo Juvenil: Como Fazer a Diferença na Escola',
    category: 'Educação',
    type: 'Artigo',
    description: 'Guia prático da Nova Escola sobre grêmios estudantis, assembleias de classe e como dar voz aos estudantes no Ensino Fundamental - Anos Finais.',
    ageGroup: '13-15 anos',
    readingTime: '8 min de leitura',
    url: 'https://novaescola.org.br/busca?q=protagonismo+juvenil+gremio+estudantil',
    authorOrSource: 'Portal Nova Escola / MEC',
    color: '#1976D2'
  },
  {
    id: 'bib-3',
    title: 'Como o Cérebro Aprende? Dicas de Neurociência para Jovens',
    category: 'Educação',
    type: 'Vídeo',
    description: 'Vídeo educativo animado explicando a formação das sinapses, a importância de dormir e como o esforço contínuo fortalece a inteligência.',
    ageGroup: 'Para todos',
    readingTime: '12 min de vídeo',
    url: 'https://www.youtube.com/results?search_query=como+o+cerebro+aprende+neurociencia+canal+futura',
    authorOrSource: 'Canal Futura / Neurociência na Escola',
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
    title: 'Guia Jovem SaferNet: Como Identificar e Denunciar o Ciberbullying',
    category: 'Respeito',
    type: 'Artigo',
    description: 'Manual com orientações seguras sobre redes sociais, privacidade, prints, bloqueios e respeito digital para adolescentes.',
    ageGroup: 'Para todos',
    readingTime: '10 min de leitura',
    url: 'https://new.safernet.org.br',
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
    title: 'Vídeo: Para Onde Vai o Lixo da Sua Escola?',
    category: 'Meio Ambiente',
    type: 'Vídeo',
    description: 'Documentário curto e interativo mostrando a rota da reciclagem e como o cuidado com o pátio e com o patrimônio protege a cidade.',
    ageGroup: '11-13 anos',
    readingTime: '8 min de vídeo',
    url: 'https://www.futura.org.br/busca?q=lixo+reciclagem+escola',
    authorOrSource: 'Canal Futura / Educação Ambiental',
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
    title: 'Estatuto da Criança e do Adolescente (ECA) em Quadrinhos',
    category: 'Direitos Humanos',
    type: 'Livro',
    description: 'Conheça seus direitos à cidadania, à escola, ao lazer e ao respeito, além de compreender seus deveres com a coletividade.',
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
