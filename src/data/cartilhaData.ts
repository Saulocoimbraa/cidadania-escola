import { QuizQuestion, VideoItem, StoryDilemma } from '../types';

export interface PillarContent {
  id: 'educacao' | 'respeito' | 'disciplina' | 'cuidado';
  title: string;
  subtitle: string;
  color: string;
  badgeIcon: string;
  heroImage: string;
  introduction: string;
  cartilhaSections: {
    title: string;
    content: string;
    highlightQuote?: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  reflectionQuote?: string;
  reflectionAuthor?: string;
  videos: VideoItem[];
  saibaMais: {
    name: string;
    description: string;
    url: string;
  }[];
  quiz: QuizQuestion[];
  stories?: StoryDilemma[];
  missions?: {
    id: string;
    text: string;
    tip: string;
  }[];
}

export const EDUCAO_PILLAR: PillarContent = {
  id: 'educacao',
  title: 'Educação',
  subtitle: 'O caminho do conhecimento, do protagonismo e da transformação pessoal',
  color: '#1976D2',
  badgeIcon: 'GraduationCap',
  heroImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
  introduction: 'A escola é o espaço onde você descobre o mundo, conhece seus direitos, desenvolve seus talentos e aprende a pensar com liberdade. Educação não é só matéria de livro: é a chave para o seu projeto de vida e para transformar sua comunidade.',
  cartilhaSections: [
    {
      title: '1. O poder de aprender a aprender',
      content: 'No Ensino Fundamental - Anos Finais, você deixa de ser apenas um espectador da aula para ser protagonista. Estudar desenvolve o raciocínio lógico, a criatividade, a capacidade de comunicação e a autonomia para tomar decisões responsáveis.',
      highlightQuote: 'Aprender não significa apenas tirar boas notas. Aprender é desenvolver habilidades para resolver problemas, trabalhar em equipe e transformar a realidade.'
    },
    {
      title: '2. Direitos e deveres do estudante cidadão',
      content: 'Todo estudante tem direito a uma educação de qualidade, acolhedora e livre de violência. Da mesma forma, tem o dever de participar das aulas, respeitar os professores, colaborar com os colegas e zelar pelo ambiente escolar.',
      highlightQuote: 'Cidadania se pratica na escola em cada escolha: quando tiramos dúvidas, quando escutamos o outro e quando cuidamos do nosso espaço comum.'
    },
    {
      title: '3. Protagonismo Juvenil e Projeto de Vida',
      content: 'O protagonista é aquele que não espera as coisas acontecerem, mas ajuda a construir soluções. Seja no grêmio estudantil, nos trabalhos em grupo ou em projetos científicos, sua voz tem valor e força para mudar sua escola.'
    }
  ],
  faqs: [
    {
      question: 'Por que estudar é importante?',
      answer: 'Estudar amplia seus horizontes, permite compreender o funcionamento da sociedade e das tecnologias, dá segurança para opinar e abre portas para suas futuras escolhas profissionais e pessoais.'
    },
    {
      question: 'O que acontece quando falto às aulas?',
      answer: 'Além de perder o conteúdo que os professores preparam, a falta contínua prejudica o vínculo com a turma, o ritmo de aprendizagem e pode comprometer seu ano letivo por infrequência.'
    },
    {
      question: 'Como posso estudar melhor?',
      answer: 'Crie um local tranquilo para estudar, evite distrações com o celular nos momentos de leitura, faça resumos com suas próprias palavras e nunca deixe para tirar dúvidas apenas na véspera de prova.'
    },
    {
      question: 'Como aprender quando tenho dificuldade?',
      answer: 'Ninguém aprende tudo no mesmo ritmo! Peça ajuda ao professor, forme duplas de estudo com colegas, assista a vídeoaulas educativas e tente praticar com exercícios em etapas simples.'
    },
    {
      question: 'Qual a diferença entre decorar e aprender?',
      answer: 'Decorar é memorizar sem entender, esquecendo tudo dias depois. Aprender é compreender o porquê das coisas, conseguindo aplicar aquele conhecimento na sua vida real e em novos problemas.'
    },
    {
      question: 'Como organizar meu tempo?',
      answer: 'Use um calendário ou agenda. Reserve 30 a 45 minutos por dia para revisar o que viu na escola e fazer tarefas, alternando com pausas de descanso.'
    }
  ],
  reflectionQuote: 'A educação não transforma o mundo. Educação muda as pessoas. Pessoas transformam o mundo.',
  reflectionAuthor: 'Paulo Freire',
  videos: [
    {
      id: 'v-edu-1',
      title: 'Por que a Escola é importante para o seu futuro?',
      youtubeId: 'L_LUpnjgPso',
      channel: 'Canal Futura',
      duration: '4:15',
      description: 'Vídeo animado explicando como a educação básica impacta as oportunidades e o desenvolvimento pessoal do adolescente.',
      debateQuestions: [
        'Qual o papel da escola no seu projeto de vida para os próximos 5 anos?',
        'Como você pode ajudar um colega que está desmotivado com os estudos?'
      ]
    },
    {
      id: 'v-edu-2',
      title: 'Protagonismo Juvenil na Escola',
      youtubeId: 'sBws8MSXN7A',
      channel: 'Nova Escola / MEC',
      duration: '5:30',
      description: 'Como estudantes do Ensino Fundamental - Anos Finais podem participar ativamente das melhorias na escola.',
      debateQuestions: [
        'O que você mudaria hoje na sua escola com a colaboração da sua turma?',
        'O que significa ser protagonista na prática?'
      ]
    }
  ],
  saibaMais: [
    { name: 'O Pequeno Príncipe (PDF)', description: 'Clássico literário que ensina sobre curiosidade, afeto, valorizar perguntas e a essência do aprendizado.', url: 'https://www.sesirs.org.br/sites/default/files/paragraph--files/o_pequeno_principe_-_antoine_de_saint-exupery_1.pdf' },
    { name: 'Clube de Protagonismo', description: 'Guia do estudante para criação de espaços de aprendizagem autônomos na escola.', url: 'https://portal.educacao.pe.gov.br/wp-content/uploads/2025/02/CLUBE-DE-PROTAGONISMO-ESTUDANTES.pdf' },
    { name: 'As incríveis formas como a leitura molda o cérebro humano', description: 'A leitura não é uma habilidade com a qual nascemos: são circuitos cerebrais que a humanidade levou milhares de anos para desenvolver e aperfeiçoar.', url: 'https://www.youtube.com/watch?v=sSIZ34D9qC8' }
  ],
  quiz: [
    {
      id: 'q-edu-1',
      question: 'O que caracteriza o protagonismo juvenil no ambiente escolar?',
      options: [
        'Esperar que apenas o diretor resolva todos os problemas da escola.',
        'Participar ativamente com ideias, respeito, diálogo e cooperação com professores e colegas.',
        'Não fazer tarefas de casa para ter mais tempo de descanso.',
        'Estudar apenas nas semanas de avaliação.'
      ],
      correctIndex: 1,
      explanation: 'O protagonismo juvenil acontece quando o estudante assume um papel ativo, colaborativo e responsável no seu aprendizado e na convivência escolar.',
      competencia: 'BNCC Competência Geral 10 - Responsabilidade e Cidadania'
    },
    {
      id: 'q-edu-2',
      question: 'Qual a principal diferença entre "decorar" e "aprender"?',
      options: [
        'Decorar demora mais tempo que aprender.',
        'Aprender significa compreender os conceitos e saber aplicá-los na vida, enquanto decorar é apenas memorizar temporariamente.',
        'Aprender só é possível lendo livros impressos.',
        'Não há diferença, ambas são iguais.'
      ],
      correctIndex: 1,
      explanation: 'Aprender gera conhecimento duradouro e pensamento crítico, enquanto decorar é uma memorização mecânica que se perde com facilidade.',
      competencia: 'BNCC Competência Geral 1 - Conhecimento'
    },
    {
      id: 'q-edu-3',
      question: 'Quando um aluno tem dificuldade em uma matéria, qual é a atitude cidadã mais saudável?',
      options: [
        'Desistir da matéria e parar de ir às aulas.',
        'Esconder a dúvida por vergonha dos colegas.',
        'Pedir ajuda ao professor, conversar com colegas e organizar uma rotina de estudos.',
        'Copiar as respostas da prova do colega do lado.'
      ],
      correctIndex: 2,
      explanation: 'A cidadania e a autorregulação envolvem reconhecer dificuldades com humildade e buscar apoio com os professores e colegas.',
      competencia: 'BNCC Competência Geral 8 - Autoconhecimento e Autocuidado'
    },
    {
      id: 'q-edu-4',
      question: 'Por que o direito à educação está ligado aos deveres do estudante?',
      options: [
        'Porque a escola pública é paga por todos os cidadãos através dos impostos e precisa de compromisso de todos para funcionar bem.',
        'Porque direitos e deveres não têm nenhuma relação.',
        'Porque quem tem deveres não tem direitos.',
        'Porque o estudante só tem direitos dentro da sala de aula.'
      ],
      correctIndex: 0,
      explanation: 'A cidadania é um equilíbrio entre usufruir de direitos fundamentais e cumprir deveres de respeito, zelo e cooperação na coletividade.',
      competencia: 'BNCC Competência Geral 10 - Responsabilidade e Cidadania'
    },
    {
      id: 'q-edu-5',
      question: 'Como a organização do tempo ajuda no rendimento escolar?',
      options: [
        'Impedindo o estudante de ter tempo livre para lazer.',
        'Evitando o estresse de última hora, equilibrando estudos, descanso e convívio familiar.',
        'Fazendo o estudante passar 12 horas por dia estudando sem parar.',
        'Obrigando a estudar apenas nas férias.'
      ],
      correctIndex: 1,
      explanation: 'A organização do tempo traz autonomia, menos ansiedade e mais eficiência no aprendizado, sobrando tempo para lazer e amizades.',
      competencia: 'BNCC Competência Geral 6 - Trabalho e Projeto de Vida'
    }
  ]
};

export const RESPEITO_PILLAR: PillarContent = {
  id: 'respeito',
  title: 'Respeito',
  subtitle: 'Convivência pacífica, empatia, diversidade e cultura de paz na escola',
  color: '#7E57C2',
  badgeIcon: 'HeartHandshake',
  heroImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
  introduction: 'A escola é um microcosmo da sociedade. Aqui encontramos pessoas de diferentes origens, credos, gostos e ideias. O respeito não significa concordar com tudo, mas reconhecer a dignidade e os direitos de cada ser humano.',
  cartilhaSections: [
    {
      title: '1. O que é Respeito e Empatia?',
      content: 'Respeitar é tratar o outro como você gostaria de ser tratado. Empatia é a capacidade de se colocar no lugar da outra pessoa, sentindo o impacto das nossas palavras e atitudes antes de agir.',
      highlightQuote: 'Nossas diferenças nos tornam únicos; o respeito mutuo nos torna uma comunidade.'
    },
    {
      title: '2. Combate ao Bullying e ao Ciberbullying',
      content: 'Bullying não é brincadeira! É toda agressão física, verbal, psicológica ou virtual repetida contra alguém. Rir, filmar, espalhar boatos no WhatsApp ou calar diante de agressões também fere a convivência pacífica.',
      highlightQuote: 'Brincadeira é só quando todos se divertem. Se alguém está sofrendo, é hora de parar e acolher.'
    },
    {
      title: '3. Diversidade e Direitos Humanos na Escola',
      content: 'Uma escola cidadã celebra a diversidade cultural, racial, religiosa e de ideias. Combater o preconceito, o racismo e a discriminação é dever de todos os alunos, professores e funcionários.'
    }
  ],
  faqs: [
    {
      question: 'O que é respeito?',
      answer: 'Respeito é o reconhecimento de que toda pessoa tem valor, sentimentos, direitos e dignidade, independentemente de sua aparência, opinião, etnia ou condição social.'
    },
    {
      question: 'O que é bullying?',
      answer: 'É a violência intencional e repetitiva contra um colega que não consegue se defender sozinho, causando dor, isolamento, medo e tristeza.'
    },
    {
      question: 'Como agir quando vejo alguém sofrendo bullying?',
      answer: 'Não ria nem compartilhe vídeos! Apoie o colega agredido, diga que ele não está sozinho e avise imediatamente um professor, coordenador ou responsável de confiança.'
    },
    {
      question: 'O que fazer quando sou desrespeitado?',
      answer: 'Mantenha a calma, imponha limites com firmeza dizendo "Não gostei disso", evite revidar com agressão e procure ajuda da equipe pedagógica da sua escola.'
    },
    {
      question: 'Como respeitar pessoas diferentes?',
      answer: 'Ouvindo com atenção sem julgar, aprendendo sobre outras culturas e lembrando que a diversidade é o que torna o mundo interessante e rico em ideias.'
    }
  ],
  reflectionQuote: 'Sempre que você olhar para alguém, lembre-se de que ali existe uma história inteira que você ainda não conhece.',
  reflectionAuthor: 'Cartilha Cidadania na Escola',
  videos: [
    {
      id: 'v-resp-1',
      title: 'Empatia: O que significa se colocar no lugar do outro?',
      youtubeId: '1Evwgu369Jw',
      channel: 'UNICEF Brasil',
      duration: '3:45',
      description: 'Como a empatia constrói laços fortes e combate o isolamento escolar.',
      debateQuestions: [
        'Você já presenciou alguém sofrendo por uma "brincadeira" de mau gosto?',
        'O que muda na sala de aula quando praticamos a escuta atenta?'
      ]
    },
    {
      id: 'v-resp-2',
      title: 'Bullying não é brincadeira: Ciberbullying e Internet Segura',
      youtubeId: 'y-u7qL9iL1k',
      channel: 'SaferNet Brasil',
      duration: '4:50',
      description: 'Os impactos das mensagens nas redes sociais e como ser um cidadão ético no mundo digital.',
      debateQuestions: [
        'Por que o ciberbullying pode machucar tanto quanto agressões presenciais?',
        'O que fazer se um grupo de chat começar a atacar um colega da turma?'
      ]
    }
  ],
  saibaMais: [
    { name: 'SaferNet Brasil', description: 'Central nacional de segurança digital e combate ao ciberbullying.', url: 'https://new.safernet.org.br' },
    { name: 'UNICEF - Chega de Bullying', description: 'Campanha de prevenção à violência nas escolas brasileiras.', url: 'https://www.unicef.org/brazil' },
    { name: 'Canal Futura', description: 'Séries educativas sobre Direitos Humanos e convivência cidadã.', url: 'https://www.futura.org.br' }
  ],
  stories: [
    {
      id: 's-dilem-1',
      title: 'O Grupo de WhatsApp da Turma',
      context: 'Lucas tem 13 anos. Durante a noite, um colega enviou uma figurinha humilhante zoando o cabelo de Rafael no grupo de WhatsApp da turma. Vários alunos começaram a mandar risadas.',
      dilemma: 'O que você faria se estivesse no lugar de Lucas?',
      options: [
        {
          text: 'Riria também para não ser excluído pelo grupo dos populares.',
          consequence: 'Você reforça o ciberbullying. Rafael se sentirá humilhado, excluído e com medo de ir para a escola no dia seguinte.',
          isPositive: false
        },
        {
          text: 'Ficaria em silêncio sem comentar nada, achando que não é problema seu.',
          consequence: 'O silêncio acaba ajudando os agressores, pois quem sofre bullying sente que ninguém se importa com ele.',
          isPositive: false
        },
        {
          text: 'Enviaria uma mensagem privada de apoio a Rafael e falaria no grupo: "Galera, isso não tem graça, vamos respeitar". Depois alertaria a coordenação.',
          consequence: 'Excelente atitude! Você demonstra empatia, liderança cidadã e ajuda a interromper a cadeia de humilhação na escola.',
          isPositive: true
        }
      ],
      pedagogicalTip: 'O espectador tem um poder enorme: quando um ou dois colegas dizem "não teve graça", o bullying perde força imediatamente.'
    },
    {
      id: 's-dilem-2',
      title: 'O Colega Novo na Sala',
      context: 'Mariana chegou no meio do ano vinda de outra cidade com um sotaque diferente. Na hora do intervalo, ela ficou sentada sozinha no pátio enquanto todos conversavam.',
      dilemma: 'Qual é a melhor atitude de acolhimento para Mariana?',
      options: [
        {
          text: 'Ir até ela, se apresentar com um sorriso, mostrar a escola e convidá-la para sentar com o seu grupo no recreio.',
          consequence: 'Perfeito! Atitudes simples de acolhimento transformam a adaptação de um novo estudante e criam amizades verdadeiras.',
          isPositive: true
        },
        {
          text: 'Fazer comentários sobre o sotaque dela com outros colegas.',
          consequence: 'Isso gera preconceito e faz com que a aluna se sinta rejeitada na nova escola.',
          isPositive: false
        }
      ],
      pedagogicalTip: 'Acolher quem chega é um dos gestos mais nobres de cidadania e hospitalidade que podemos ter.'
    }
  ],
  quiz: [
    {
      id: 'q-resp-1',
      question: 'O que diferencia uma brincadeira saudável do bullying?',
      options: [
        'O bullying acontece só na internet.',
        'Na brincadeira saudável todos se divertem e se sentem bem; no bullying há humilhação, dor e repetição contra alguém.',
        'Brincadeiras entre amigos podem humilhar sem problemas.',
        'O bullying acontece apenas entre adultos.'
      ],
      correctIndex: 1,
      explanation: 'O critério fundamental é o bem-estar mútuo: se alguém está sofrendo ou se sentindo constrangido, não é brincadeira.',
      competencia: 'BNCC Competência Geral 9 - Empatia e Cooperação'
    },
    {
      id: 'q-resp-2',
      question: 'Qual o papel de quem assiste a um episódio de bullying sem fazer nada?',
      options: [
        'Não tem responsabilidade nenhuma.',
        'O silêncio dos espectadores acaba incentivando o agressor, pois ele se sente aprovado pelo grupo.',
        'Está correto, pois não se deve meter na vida dos outros.',
        'É sempre punido com expulsão imediata.'
      ],
      correctIndex: 1,
      explanation: 'Em situações de violência escolar, o espectador ativo (aquele que busca ajuda ou não concorda) é essencial para acabar com o bullying.',
      competencia: 'BNCC Competência Geral 9 - Empatia e Cooperação'
    },
    {
      id: 'q-resp-3',
      question: 'O que é empatia no dia a dia da escola?',
      options: [
        'Concordar com tudo o que os colegas dizem, mesmo que seja errado.',
        'A capacidade de compreender e se colocar no lugar do outro, acolhendo seus sentimentos.',
        'Fazer tarefas pelos outros para ganhar popularidade.',
        'Ignorar colegas que pensam diferente de você.'
      ],
      correctIndex: 1,
      explanation: 'Empatia é a ponte socioemocional que nos permite conviver em harmonia, respeitando as emoções e experiências de cada pessoa.',
      competencia: 'BNCC Competência Geral 9 - Empatia e Cooperação'
    },
    {
      id: 'q-resp-4',
      question: 'Como lidar de forma cidadã com ideias diferentes das suas em um debate escolar?',
      options: [
        'Gritando para provar que você tem razão.',
        'Ouvindo com respeito os argumentos do colega e argumentando com fatos e educação sem ofender a pessoa.',
        'Saindo da sala de aula com raiva.',
        'Proibindo o colega de falar.'
      ],
      correctIndex: 1,
      explanation: 'A cidadania democrática se constrói através do diálogo argumentativo e do respeito à divergência de opiniões.',
      competencia: 'BNCC Competência Geral 7 - Argumentação'
    },
    {
      id: 'q-resp-5',
      question: 'O que é ciberbullying?',
      options: [
        'Um jogo de videogame para celular.',
        'O uso da internet, redes sociais ou mensagens para intimidar, expor ou agredir pessoas publicamente.',
        'Aulas de informática na escola.',
        'Um software de proteção antivírus.'
      ],
      correctIndex: 1,
      explanation: 'Ciberbullying é a violência psicológica nos meios digitais e deixa marcas profundas, pois as agressões se espalham rapidamente na rede.',
      competencia: 'BNCC Competência Geral 5 - Cultura Digital e Ética'
    }
  ]
};

export const DISCIPLINA_PILLAR: PillarContent = {
  id: 'disciplina',
  title: 'Disciplina',
  subtitle: 'Autonomia, organização, constância e a liberdade para alcançar seus objetivos',
  color: '#FB8C00',
  badgeIcon: 'Compass',
  heroImage: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
  introduction: 'Disciplina não é castigo nem obediência cega! Disciplina é a ponte entre seus sonhos e suas realizações. É aprender a gerenciar seu tempo, suas escolhas e seus esforços para ter verdadeira liberdade no futuro.',
  cartilhaSections: [
    {
      title: '1. Disciplina gera liberdade',
      content: 'Quando você se organiza, faz suas tarefas no tempo certo e mantém hábitos saudáveis, ganha tempo livre sem culpa. A pessoa indisciplinada acaba escrava do atraso, do estresse e do medo das provas.',
      highlightQuote: 'Disciplina é escolher entre o que você quer agora e o que você mais quer na sua vida.'
    },
    {
      title: '2. Vencendo a Procrastinação e o Celular',
      content: 'Procrastinar é deixar o importante para depois por causa de distrações passageiras. Aprender a fazer pausas conscientes nas redes sociais e manter o foco nos estudos é uma habilidade de ouro do século XXI.',
      highlightQuote: 'Pequenos passos constantes valem mil vezes mais do que tentar fazer tudo na última hora.'
    },
    {
      title: '3. Rotina saudável para o cérebro e o corpo',
      content: 'Dormir bem (8 a 9 horas), beber água, praticar esportes e alimentar-se direito são atitudes de cidadania com o seu próprio corpo que melhoram a memória, o humor e a disposição escolar.'
    }
  ],
  faqs: [
    {
      question: 'O que significa disciplina?',
      answer: 'Significa constância, organização pessoal e capacidade de cumprir aquilo com que você se comprometeu consigo mesmo e com os outros.'
    },
    {
      question: 'Disciplina é castigo?',
      answer: 'De jeito nenhum! Castigo vem de fora; disciplina vem de dentro (autodisciplina) como uma ferramenta para você realizar seus projetos.'
    },
    {
      question: 'Como criar uma rotina?',
      answer: 'Comece devagar: fixe horários regulares para acordar, ir à escola, fazer almoço, estudar 40 minutos e ter seu momento de lazer.'
    },
    {
      question: 'Como vencer a procrastinação?',
      answer: 'Use a regra dos 5 minutos: comece a tarefa dizendo "vou fazer só 5 minutos". Em 80% das vezes, o cérebro engrena e você termina sem perceber!'
    },
    {
      question: 'Como organizar meus estudos?',
      answer: 'Tenha uma lista de prioridades diárias, use marcadores coloridos, anote prazos num calendário e evite acumular matérias no final do bimestre.'
    }
  ],
  reflectionQuote: 'A liberdade não é fazer o que dá vontade na hora. Liberdade verdadeira é ter autonomia para ser o autor da sua própria história.',
  reflectionAuthor: 'Cartilha Cidadania na Escola',
  videos: [
    {
      id: 'v-disc-1',
      title: 'Como organizar os estudos e vencer a Procrastinação',
      youtubeId: 'ILq710A8_NE',
      channel: 'Nova Escola',
      duration: '5:10',
      description: 'Dicas práticas de gestão de tempo e neurociência adaptadas para estudantes de 11 a 15 anos.',
      debateQuestions: [
        'Qual é a sua maior distração quando tenta fazer a lição de casa?',
        'Como o método Pomodoro ou pequenas pausas podem ajudar no foco?'
      ]
    },
    {
      id: 'v-disc-2',
      title: 'Hábitos positivos e o Poder da Constância',
      youtubeId: 'W8r-tXPrn_k',
      channel: 'Canal Futura',
      duration: '4:20',
      description: 'Por que fazer um pouco todos os dias é muito mais fácil do que deixar tudo para a véspera.',
      debateQuestions: [
        'Cite um hábito positivo que você quer implementar esta semana.',
        'Como a disciplina melhora nossa convivência familiar?'
      ]
    }
  ],
  saibaMais: [
    { name: 'BNCC - Competência 8 e 10', description: 'Autogestão, autonomia e projeto de vida na Educação Básica.', url: 'https://www.gov.br/mec' },
    { name: 'Instituto Ayrton Senna - Autonomia', description: 'Estudos sobre autorregulação e aprendizado para adolescentes.', url: 'https://institutoayrtonsenna.org.br' }
  ],
  quiz: [
    {
      id: 'q-disc-1',
      question: 'Por que dizemos que "Disciplina gera liberdade"?',
      options: [
        'Porque quem é disciplinado não precisa estudar nunca mais.',
        'Porque ao se organizar e cumprir suas tarefas no tempo certo, você conquista tempo livre com tranquilidade e autonomia.',
        'Porque disciplina significa obedecer sem fazer perguntas.',
        'Porque pessoas disciplinadas não têm lazer.'
      ],
      correctIndex: 1,
      explanation: 'A autodisciplina evita o acúmulo de tarefas e o estresse, permitindo que você aproveite seus momentos de lazer com paz mental.',
      competencia: 'BNCC Competência Geral 8 - Autoconhecimento e Autocuidado'
    },
    {
      id: 'q-disc-2',
      question: 'O que é procrastinação?',
      options: [
        'Uma técnica de estudo avançada.',
        'O hábito de adiar tarefas importantes por causa de distrações passageiras.',
        'Um esporte praticado na escola.',
        'A capacidade de acordar cedo.'
      ],
      correctIndex: 1,
      explanation: 'A procrastinação gera ansiedade e correria na última hora. Pequenas metas diárias ajudam a superá-la.',
      competencia: 'BNCC Competência Geral 6 - Trabalho e Projeto de Vida'
    },
    {
      id: 'q-disc-3',
      question: 'Qual técnica prática ajuda muito a manter o foco nos estudos em casa?',
      options: [
        'Deixar a televisão ligada e o celular tocando notificações ao lado do caderno.',
        'Estudar deitado na cama no escuro.',
        'Estudar em intervalos programados (ex: 30 minutos focados e 5 de pausa) num ambiente iluminado.',
        'Não fazer pausas durante 6 horas seguidas.'
      ],
      correctIndex: 2,
      explanation: 'O cérebro aprende muito melhor quando alternamos períodos de concentração intensa com pausas curtas de descanso.',
      competencia: 'BNCC Competência Geral 1 - Conhecimento'
    },
    {
      id: 'q-disc-4',
      question: 'Qual a importância de uma boa noite de sono (8 a 9 horas) para o estudante?',
      options: [
        'Nenhuma, dormir pouco deixa o cérebro mais esperto.',
        'O sono fixa na memória o que foi aprendido durante o dia, regula o humor e fortalece a imunidade.',
        'Serve apenas para passar o tempo.',
        'Quem dorme bem tira notas mais baixas.'
      ],
      correctIndex: 1,
      explanation: 'A neurociência comprova que a consolidação das memórias de estudo e o bem-estar emocional dependem diretamente de um sono de qualidade.',
      competencia: 'BNCC Competência Geral 8 - Autoconhecimento e Autocuidado'
    },
    {
      id: 'q-disc-5',
      question: 'Quem é responsável por organizar os seus materiais escolares e horários no Ensino Fundamental - Anos Finais?',
      options: [
        'Exclusivamente meus pais ou responsáveis.',
        'O estudante, com o apoio da família, desenvolvendo autonomia e responsabilidade pessoal.',
        'Apenas os professores.',
        'Ninguém.'
      ],
      correctIndex: 1,
      explanation: 'A partir dos 11 anos, desenvolver o protagonismo no cuidado com sua própria rotina é uma etapa essencial do amadurecimento.',
      competencia: 'BNCC Competência Geral 10 - Responsabilidade e Cidadania'
    }
  ]
};

export const CUIDADO_PILLAR: PillarContent = {
  id: 'cuidado',
  title: 'Cuidado com a Escola e com as Pessoas',
  subtitle: 'Sustentabilidade, patrimônio público, solidariedade e pertencimento à comunidade',
  color: '#43A047',
  badgeIcon: 'Sprout',
  heroImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  introduction: 'A escola pública é de todos nós! Ela foi construída e é mantida com o trabalho e os impostos das nossas famílias e de toda a sociedade. Cuidar das carteiras, da água, da luz e, principalmente, das pessoas ao nosso redor é a essência da cidadania.',
  cartilhaSections: [
    {
      title: '1. Patrimônio Público: A escola é sua casa coletiva',
      content: 'Pichações, quebra de cadeiras, desperdício de merenda e lixo no chão prejudicam você mesmo e seus colegas. Quando cuidamos da escola, criamos um ambiente agradável, digno e seguro para estudar.',
      highlightQuote: 'O que é público não é "de ninguém"; o que é público é de TODOS NÓS.'
    },
    {
      title: '2. Sustentabilidade, Água e Energia na Escola',
      content: 'Pequenos gestos diários fazem uma diferença gigantesca no planeta: fechar a torneira do bebedouro após usar, apagar as luzes das salas vazias, separar o lixo reciclável e cuidar do pátio e do verde.',
      highlightQuote: 'O meio ambiente escolar começa na sua carteira e se estende a todo o planeta.'
    },
    {
      title: '3. Solidariedade, Acolhimento e Cultura de Paz',
      content: 'Cuidar das pessoas significa estender a mão para quem precisa, ajudar o colega que faltou por doença, respeitar os funcionários (merendeiras, zeladores, porteiros, secretários, professores) com gratidão e gentileza.'
    }
  ],
  faqs: [
    {
      question: 'Por que cuidar da escola?',
      answer: 'Porque um ambiente limpo, bonito e conservado melhora o ânimo de toda a comunidade escolar, além de ser um patrimônio construído pela nossa própria sociedade.'
    },
    {
      question: 'Quem paga pelos materiais públicos e merenda da escola?',
      answer: 'Todos os cidadãos! O dinheiro público vem dos impostos pagos em cada alimento, roupa ou serviço que nossos pais e famílias consomem. Desperdiçar é jogar fora o dinheiro da comunidade.'
    },
    {
      question: 'Como economizar água na escola?',
      answer: 'Fechando bem as torneiras, não brincando de desperdiçar água no bebedouro ou banheiro e avisando a zeladoria caso veja algum vazamento.'
    },
    {
      question: 'Como economizar energia elétrica?',
      answer: 'Desligando ventiladores e luzes quando a turma sair para o recreio ou educação física e aproveitando ao máximo a iluminação natural das janelas.'
    },
    {
      question: 'Como ajudar os colegas no dia a dia?',
      answer: 'Compartilhando anotações com quem faltou, ajudando na explicação de uma dúvida sem humilhar e oferecendo companhia no intervalo a quem estiver sozinho.'
    }
  ],
  reflectionQuote: 'Gentileza gera gentileza. Quando você cuida da escola e das pessoas, a escola cuida de você.',
  reflectionAuthor: 'Profeta Gentileza / Cartilha Cidadania na Escola',
  videos: [
    {
      id: 'v-cuid-1',
      title: 'Patrimônio Público e Cidadania: A Escola é Nossa!',
      youtubeId: 'Z9Y24_3nC5o',
      channel: 'Canal Futura',
      duration: '4:40',
      description: 'Como o cuidado com os bens públicos reflete a consciência cidadã de um povo.',
      debateQuestions: [
        'Por que algumas pessoas têm a falsa ideia de que "o que é público pode estragar"?',
        'Como valorizar o trabalho dos zeladores e funcionários da escola?'
      ]
    },
    {
      id: 'v-cuid-2',
      title: 'Sustentabilidade e Meio Ambiente na Escola',
      youtubeId: 'p2ZzP3U2E4U',
      channel: 'UNESCO / MEC',
      duration: '5:15',
      description: 'Como iniciativas de coleta seletiva e hortas escolares mudam a consciência dos alunos.',
      debateQuestions: [
        'Qual ação sustentável poderíamos começar na nossa escola este mês?',
        'Qual o papel da juventude na proteção do meio ambiente?'
      ]
    }
  ],
  saibaMais: [
    { name: 'UNESCO - Educação para o Desenvolvimento Sustentável', description: 'Diretrizes mundiais da UNESCO para escolas sustentáveis e cidadãs.', url: 'https://www.unesco.org/pt' },
    { name: 'MEC - Programa Escola Sustentável', description: 'Ações de sustentabilidade e preservação do patrimônio.', url: 'https://www.gov.br/mec' },
    { name: 'UNICEF Brasil - Meio Ambiente e Clima', description: 'O protagonismo jovem na proteção ambiental.', url: 'https://www.unicef.org/brazil' }
  ],
  missions: [
    {
      id: 'mis-1',
      text: 'Jogar todo o lixo nas lixeiras corretas hoje (e ajudar a recolher o que estiver no pátio)',
      tip: 'Um simples papel no chão faz diferença na limpeza coletiva da escola.'
    },
    {
      id: 'mis-2',
      text: 'Ajudar um colega em uma dúvida de matéria ou que tenha faltado à aula',
      tip: 'A solidariedade intelectual fortalece toda a turma!'
    },
    {
      id: 'mis-3',
      text: 'Verificar e fechar torneiras pingando no banheiro ou bebedouro',
      tip: 'Cada gota economizada preserva nosso recurso mais precioso.'
    },
    {
      id: 'mis-4',
      text: 'Agradecer com gentileza e respeito a um funcionário da escola (porteiro, merendeira, zelador ou professor)',
      tip: 'O reconhecimento do trabalho do outro engrandece a convivência.'
    },
    {
      id: 'mis-5',
      text: 'Cuidar da sua carteira e deixar a sala limpa e organizada ao final do turno',
      tip: 'Deixar o ambiente melhor do que você encontrou é marca do jovem cidadão.'
    }
  ],
  quiz: [
    {
      id: 'q-cuid-1',
      question: 'Quem é o dono do patrimônio da escola pública (prédio, cadeiras, biblioteca, quadra)?',
      options: [
        'Apenas o diretor da escola.',
        'Ninguém.',
        'Todos os cidadãos da sociedade, pois é construído com recursos públicos de todos.',
        'Somente a prefeitura.'
      ],
      correctIndex: 2,
      explanation: 'O patrimônio público pertence à coletividade. Danificar a escola é danificar um bem que serve a você, aos seus irmãos e amigos.',
      competencia: 'BNCC Competência Geral 10 - Responsabilidade e Cidadania'
    },
    {
      id: 'q-cuid-2',
      question: 'Por que economizar água e energia na escola é uma atitude de cidadania?',
      options: [
        'Porque preserva os recursos naturais da Terra e economiza recursos públicos que podem ser investidos em educação.',
        'Porque a água da escola nunca acaba.',
        'Porque energia elétrica é de graça para as escolas.',
        'Para a escola ficar no escuro.'
      ],
      correctIndex: 0,
      explanation: 'A sustentabilidade é um dever socioambiental com o presente e o futuro da humanidade.',
      competencia: 'BNCC Competência Geral 7 - Argumentação e Sustentabilidade'
    },
    {
      id: 'q-cuid-3',
      question: 'Como um estudante pode praticar a solidariedade e a cultura de paz com os funcionários da escola?',
      options: [
        'Tratando com superioridade ou ignorando quem trabalha na limpeza ou portaria.',
        'Cumprimentando com respeito, agradecendo pelos serviços e mantendo os ambientes limpos.',
        'Exigindo que façam tarefas pessoais por ele.',
        'Nunca falando com eles.'
      ],
      correctIndex: 1,
      explanation: 'Todas as pessoas que trabalham na escola merecem respeito, reconhecimento e colaboração diária.',
      competencia: 'BNCC Competência Geral 9 - Empatia e Cooperação'
    },
    {
      id: 'q-cuid-4',
      question: 'O que fazer ao encontrar uma torneira aberta ou vazando no banheiro escolar?',
      options: [
        'Deixar aberta e ir embora.',
        'Fechar a torneira com cuidado e avisar um funcionário se houver defeito.',
        'Abrir ainda mais para ver a água correr.',
        'Culpar os colegas sem tentar fechar.'
      ],
      correctIndex: 1,
      explanation: 'O cidadão ativo toma iniciativa de proteger o ambiente onde vive sem precisar esperar ordens.',
      competencia: 'BNCC Competência Geral 10 - Responsabilidade e Cidadania'
    },
    {
      id: 'q-cuid-5',
      question: 'O que significa ter sentimento de pertencimento com a escola?',
      options: [
        'Achar que a escola é apenas um lugar obrigatório e chato.',
        'Reconhecer que a escola é parte da sua vida e comunidade, cuidando dela com orgulho e carinho.',
        'Ir à escola apenas nos dias de festa.',
        'Achar que você é dono exclusivo da sala de aula.'
      ],
      correctIndex: 1,
      explanation: 'O pertencimento transforma a escola num verdadeiro centro comunitário de cultura, paz e progresso.',
      competencia: 'BNCC Competência Geral 3 - Repertório Cultural e Comunidade'
    }
  ]
};

export const ALL_PILLARS = [EDUCAO_PILLAR, RESPEITO_PILLAR, DISCIPLINA_PILLAR, CUIDADO_PILLAR];
