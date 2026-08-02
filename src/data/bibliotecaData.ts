import { BibliotecaItem } from '../types';

export const BIBLIOTECA_ITEMS: BibliotecaItem[] = [
  // Educação
  {
    id: 'bib-1',
    title: 'Curtametragem: Vida de Maria',
    category: 'Educação',
    type: 'Vídeo',
    description: 'Vida Maria é um premiado curta-metragem brasileiro de animação em 3D, lançado em 2006 e dirigido pelo animador cearense Márcio Ramos',
    ageGroup: 'Para todos',
    readingTime: '9 min de vídeo',
    url: 'https://youtu.be/yFpoG_htum4?si=8DNkz2kcf0ZO_-i0',
    authorOrSource: 'Márcio Ramos',
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
    title: 'Curtametragem: O filho do Vizinho',
    category: 'Respeito',
    type: 'Vídeo',
    description: 'O curta metragem "O Filho do Vizinho" é um premiado curta-metragem brasileiro de ficção lançado em 2010, com direção, roteiro e montagem de Alex Vidigal. O filme aborda temas como infância, inclusão, amizade e diferentes perspectivas de mundo de forma leve e sensível.',
    ageGroup: 'Para todos',
    readingTime: '7 min de vídeo',
    url: 'https://youtu.be/I-UMVQ9uSIc?si=oLV5JG0w2Pucrips',
    authorOrSource: 'Alex Vidigal',
    color: '#7E57C2'
  },
  {
    id: 'bib-5',
    title: 'Cyberbullying: saiba como identificar e como agir.',
    category: 'Respeito',
    type: 'Artigo',
    description: 'Orientações sobre como identificar e denunciar o cyberbullying. O material aborda como se proteger de ofensas, boatos e outros ataques virtuais, além de apresentar os canais oficiais para denúncia.',
    ageGroup: 'Para todos',
    readingTime: '10 min de leitura',
    url: 'https://new.safernet.org.br/content/ciberbullying-saiba-como-identificar-e-como-agir',
    authorOrSource: 'SaferNet Brasil',
    color: '#7E57C2'
  },
  {
    id: 'bib-6',
    title: 'Podcast Reconhecer e Reparar',
    category: 'Respeito',
    type: 'Podcast',
    description: 'O podcast Reconhecer e Reparar, criado a partir do fórum Projeto Consciência Negra do Canal Futura, reúne organizações do movimento negro para debater o racismo estrutural no Brasil. O objetivo principal do projeto é discutir temas essenciais para a construção de uma sociedade mais justa e ativamente antirracista.',
    ageGroup: '13-15 anos',
    readingTime: '43 min de áudio',
    url: 'https://futura.frm.org.br/conteudo/midias-educativas/solucao/reconhecer-e-reparar',
    authorOrSource: 'Futura / SESI',
    color: '#7E57C2'
  },
  // Disciplina
  {
    id: 'bib-7',
    title: 'Como Fazer o BULLET JOURNAL mais simples de todos',
    category: 'Disciplina',
    type: 'Vídeo',
    description: 'No vídeo, a criadora de conteúdo Susane Ribeiro ensina uma abordagem prática e minimalista para montar um Bullet Journal. O objetivo é focar apenas no que é essencial: objetivos, hábitos e atividades da semana, sem a necessidade de gastar tempo com desenhos ou decorações complexas.',
    ageGroup: '11-15 anos',
    readingTime: '8 min (Resumo)',
    url: 'https://youtu.be/ORv60HxNzQo?si=2bD2Pdu4XCRpseZ-',
    authorOrSource: 'Susane Ribeiro',
    color: '#FB8C00'
  },
  {
    id: 'bib-8',
    title: 'Método Pomodoro: como funciona a técnica de estudos mais popular do mundo',
    category: 'Disciplina',
    type: 'Artigo',
    description: 'O método Pomodoro é uma técnica de gestão de tempo que consiste em dividir o trabalho em blocos de 25 minutos, separados por pausas de 5 minutos.',
    ageGroup: 'Para todos',
    readingTime: '6 min de leitura',
    url: 'https://www.cnnbrasil.com.br/educacao/metodo-pomodoro-como-funciona-a-tecnica-de-estudos-mais-popular-do-mundo/',
    authorOrSource: 'CNN Brasil / Método de Aprendizagem',
    color: '#FB8C00'
  },
  // Meio Ambiente
  {
    id: 'bib-9',
    title: 'Cartilha Escolas Sustentáveis: Patrimônio e Natureza',
    category: 'Meio Ambiente',
    type: 'Livro',
    description: 'Os desafios globais, como erradicação da fome, agricultura sustentável, saúde e bem-estar, educação de qualidade, acesso à agua potável e saneamento, cidades e comunidades sustentáveis, consumo e produção responsáveis, mudança climática global e preservação da vida na água e na terra, entre outros, exigem, mais do que nunca, uma mudança urgente em nosso estilo de vida, bem como uma transformação em nosso modo de pensar e agir.',
    ageGroup: 'Para todos',
    readingTime: '60 min de leitura',
    url: 'https://unesdoc.unesco.org/ark:/48223/pf0000375081.locale=en',
    authorOrSource: 'UNESCO / Sustentabilidade',
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
    url: 'https://novaescola.org.br/conteudo/18280/comunicacao-nao-violenta-o-que-e-como-aplica-la-no-dia-a-dia-escolar',
    authorOrSource: 'Nova Escola / Cultura de Paz',
    color: '#E91E63'
  },
  {
    id: 'bib-14',
    title: 'Malala: “A Educação para as meninas deve ser prioridade no Brasil”',
    category: 'Cultura de Paz',
    type: 'Artigo',
    description: 'Matéria sobre a participação da ativista paquistanesa Malala Yousafzai em debate sobre Educação e empoderamento feminino em São Paulo.',
    ageGroup: 'Para todos',
    readingTime: '6 min de leitura',
    url: 'https://novaescola.org.br/conteudo/12014/malala-a-educacao-para-as-meninas-deve-ser-prioridade-do-brasil',
    authorOrSource: 'Nova Escola',
    color: '#E91E63'
  },
  // Convivência Escolar
  {
    id: 'bib-15',
    title: 'Guia Grêmios e Participação Estudantil na Escola',
    category: 'Convivência Escolar',
    type: 'Livro',
    description: 'Como os estudantes podem criar grêmios e projetos para melhorar o clima na escola.',
    ageGroup: 'Para todos',
    readingTime: '1h 30min de leitura',
    url: 'https://campanha.org.br/gremios/guia-gremios-e-participacao-estudantil-na-escola/',
    authorOrSource: 'Campanha Nacional pelo Direito à Educação',
    color: '#00897B'
  },
  {
    id: 'bib-16',
    title: 'Desafio nas Escolas',
    category: 'Convivência Escolar',
    type: 'Vídeo',
    description: 'A série Desafio nas Escolas acompanha grupos de estudantes que precisam realizar grandes transformações em suas comunidades. Na quinta temporada, a turma do 8o ano da EMEF Heitor de Alencar Furtado, em São Paulo (SP), embarca em uma jornada para tirar do papel um sonho que pode mudar o destino de todos: um baile de formatura que celebre as conquistas do grupo e resgate a alegria de frequentar a escola.',
    ageGroup: '11-13 anos',
    readingTime: '20 min',
    url: 'https://futura.frm.org.br/conteudo/midias-educativas/noticia/nova-temporada-de-desafio-nas-escolas-estreia-no-canal-futura',
    authorOrSource: 'Canal Futura / Globoplay',
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
