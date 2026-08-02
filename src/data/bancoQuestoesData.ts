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
  // ==========================================
  // 📚 TEMA 1: EDUCAÇÃO (10 Questões)
  // ==========================================
  {
    id: 'bq-edu-01',
    pillar: 'Educação',
    difficulty: 'Fácil',
    question: 'Sobre o papel do estudante no Ensino Fundamental, qual atitude reflete o protagonismo juvenil conforme as diretrizes da BNCC?',
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
    id: 'bq-edu-02',
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
  {
    id: 'bq-edu-03',
    pillar: 'Educação',
    difficulty: 'Fácil',
    question: 'Por que a participação ativa no Grêmio Estudantil é uma forma de exercício de cidadania na escola?',
    bnccCode: 'BNCC-CG10',
    answerKey: 'A',
    options: [
      'Permite propor melhorias e debater democraticamente soluções para a escola.',
      'Isenta os membros eleitos de realizarem as provas e tarefas cotidianas.',
      'Serve apenas para organizar eventos festivos, sem impacto pedagógico real.',
      'Dá poder aos estudantes para punirem os funcionários e professores.'
    ]
  },
  {
    id: 'bq-edu-04',
    pillar: 'Educação',
    difficulty: 'Médio',
    question: 'Qual a diferença fundamental entre "decorar" e "aprender" no contexto do desenvolvimento escolar?',
    bnccCode: 'BNCC-CG01',
    answerKey: 'D',
    options: [
      'Decorar gera conhecimento permanente, enquanto aprender é esquecido após a avaliação.',
      'Não há diferença prática, pois ambas as formas buscam apenas obter a nota mínima.',
      'Decorar exige mais raciocínio lógico e criatividade do que aprender.',
      'Aprender envolve compreender o porquê das coisas e conseguir aplicar na vida real.'
    ]
  },
  {
    id: 'bq-edu-05',
    pillar: 'Educação',
    difficulty: 'Fácil',
    question: 'Quando um estudante enfrenta dificuldade em compreender um conteúdo, qual atitude é mais construtiva?',
    bnccCode: 'BNCC-CG08',
    answerKey: 'B',
    options: [
      'Copiar as respostas de um colega ou pesquisar gabaritos sem tentar resolver.',
      'Pedir ajuda ao professor, tirar dúvidas em aula e criar uma rotina de revisão.',
      'Desistir da matéria e focar apenas naquelas em que já possui facilidade.',
      'Faltar às aulas daquela disciplina para evitar o sentimento de dificuldade.'
    ]
  },
  {
    id: 'bq-edu-06',
    pillar: 'Educação',
    difficulty: 'Médio',
    question: 'Qual opção descreve a competência geral da BNCC voltada ao Pensamento Científico, Crítico e Criativo?',
    bnccCode: 'BNCC-CG02',
    answerKey: 'A',
    options: [
      'Investigar causas, elaborar hipóteses e testar soluções baseadas em evidências.',
      'Aceitar informações prontas de fontes digitais sem verificar sua veracidade.',
      'Memorizar conceitos teóricos apenas para repeti-los idênticos nas avaliações.',
      'Evitar novas abordagens ou ideias que possam contradizer os saberes tradicionais.'
    ]
  },
  {
    id: 'bq-edu-07',
    pillar: 'Educação',
    difficulty: 'Fácil',
    question: 'Como a leitura frequente de livros, artigos e contos ajuda no projeto de vida do adolescente?',
    bnccCode: 'BNCC-CG03',
    answerKey: 'C',
    options: [
      'Limita a imaginação do estudante ao impor visões já escritas por terceiros.',
      'Substitui totalmente a necessidade de interações práticas e debates em grupo.',
      'Amplia o vocabulário, melhora a redação e desenvolve a interpretação da realidade.',
      'É útil unicamente para passar em exames específicos de literatura do ano.'
    ]
  },
  {
    id: 'bq-edu-08',
    pillar: 'Educação',
    difficulty: 'Médio',
    question: 'No contexto da BNCC, qual a real importância de aprender a "aprender a aprender"?',
    bnccCode: 'BNCC-CG01',
    answerKey: 'B',
    options: [
      'Depender sempre de orientações presenciais constantes de um professor.',
      'Desenvolver ferramentas internas para continuar buscando conhecimentos com autonomia.',
      'Descobrir formas rápidas de obter a aprovação escolar com o menor esforço mental.',
      'Concentrar todo o aprendizado na infância, dispensando estudos futuros.'
    ]
  },
  {
    id: 'bq-edu-09',
    pillar: 'Educação',
    difficulty: 'Fácil',
    question: 'Como as avaliações de aprendizagem devem ser compreendidas e aproveitadas pelos estudantes?',
    bnccCode: 'BNCC-CG08',
    answerKey: 'D',
    options: [
      'Como um castigo escolar feito para classificar quem é o melhor da sala.',
      'Como um obstáculo mecânico sem qualquer relação com a vida profissional futura.',
      'Como a única métrica definitiva de valor pessoal e inteligência do indivíduo.',
      'Como um diagnóstico para identificar o que foi assimilado e onde é preciso melhorar.'
    ]
  },
  {
    id: 'bq-edu-10',
    pillar: 'Educação',
    difficulty: 'Difícil',
    question: 'Por que o desenvolvimento da argumentação fundamentada é essencial para a vida cidadã?',
    bnccCode: 'BNCC-CG07',
    answerKey: 'A',
    options: [
      'Permite defender opiniões com dados confiáveis e com respeito à visão alheia.',
      'Serve para impor as vontades do indivíduo e vencer todas as discussões em grupo.',
      'Reduz a necessidade de estudar, já que o aluno ganha facilidade em convencer os outros.',
      'É uma habilidade necessária exclusivamente para quem deseja seguir a área jurídica.'
    ]
  },

  // ==========================================
  // 🤝 TEMA 2: RESPEITO (10 Questões)
  // ==========================================
  {
    id: 'bq-resp-01',
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
    id: 'bq-resp-02',
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
    id: 'bq-resp-03',
    pillar: 'Respeito',
    difficulty: 'Difícil',
    question: 'Como a escuta empática e a Comunicação Não-Violenta (CNV) contribuem para a resolução de desentendimentos na escola?',
    bnccCode: 'BNCC-CG09',
    answerKey: 'D',
    options: [
      'Obrigando uma das partes a abrir mão de suas opiniões para evitar o debate.',
      'Acelerando a punição dos envolvidos na diretoria sem a necessidade de conversa.',
      'Impedindo que novas ideias sejam sugeridas durante a realização de trabalhos coletivos.',
      'Permitindo expressar necessidades e sentimentos de forma honesta, sem julgamentos agressivos.'
    ]
  },
  {
    id: 'bq-resp-04',
    pillar: 'Respeito',
    difficulty: 'Fácil',
    question: 'O que caracteriza a prática da empatia no cotidiano das relações escolares?',
    bnccCode: 'BNCC-CG09',
    answerKey: 'B',
    options: [
      'Concordar com tudo o que os colegas fazem, mesmo quando as atitudes estão incorretas.',
      'Tentar compreender a perspectiva do outro e agir de modo a acolhê-lo e respeitá-lo.',
      'Fazer as tarefas dos outros estudantes para ser aceito no grupo de amigos.',
      'Ignorar as dificuldades de colegas com quem não possuímos afinidade direta.'
    ]
  },
  {
    id: 'bq-resp-05',
    pillar: 'Respeito',
    difficulty: 'Fácil',
    question: 'Ao receber uma imagem que ridiculariza um colega de sala no celular, qual a atitude ética esperada?',
    bnccCode: 'BNCC-CG05',
    answerKey: 'B',
    options: [
      'Compartilhar apenas com os amigos mais próximos em modo privado.',
      'Apagar a imagem, não repassar e conscientizar quem enviou sobre o impacto disso.',
      'Publicar o conteúdo em suas redes sociais demonstrando seu repúdio.',
      'Ignorar o fato e deixar salvo para uso futuro caso haja desavenças.'
    ]
  },
  {
    id: 'bq-resp-06',
    pillar: 'Respeito',
    difficulty: 'Médio',
    question: 'Qual a importância de valorizar a diversidade cultural e étnico-racial dentro do ambiente escolar?',
    bnccCode: 'BNCC-CG03',
    answerKey: 'A',
    options: [
      'Enriquecer o aprendizado coletivo e promover um espaço livre de discriminações.',
      'Atender apenas a uma exigência burocrática das diretrizes curriculares nacionais.',
      'Auxiliar a separação dos alunos em grupos de afinidade por origem de nascimento.',
      'Facilitar o relaxamento das normas de conduta geral nas aulas de história.'
    ]
  },
  {
    id: 'bq-resp-07',
    pillar: 'Respeito',
    difficulty: 'Médio',
    question: 'O que caracteriza a ocorrência de ciberbullying em comparação ao bullying presencial tradicional?',
    bnccCode: 'BNCC-CG05',
    answerKey: 'D',
    options: [
      'É menos prejudicial por ocorrer em redes virtuais sem agressão física direta.',
      'Atinge poucas pessoas por necessitar de conexão contínua à internet.',
      'Não afeta o rendimento escolar por ocorrer fora das dependências do colégio.',
      'Propaga-se com extrema rapidez pela rede e pode persistir a qualquer hora do dia.'
    ]
  },
  {
    id: 'bq-resp-08',
    pillar: 'Respeito',
    difficulty: 'Médio',
    question: 'Diante de uma opinião muito diferente da sua em um debate em sala de aula, qual a postura cidadã adequada?',
    bnccCode: 'BNCC-CG07',
    answerKey: 'C',
    options: [
      'Interromper a fala do colega imediatamente com críticas irônicas.',
      'Recusar-se a participar do mesmo grupo de estudos que o colega.',
      'Ouvir com respeito e argumentar fundamentando suas próprias ideias com fatos.',
      'Fazer comentários negativos com outros colegas para isolar quem discordou.'
    ]
  },
  {
    id: 'bq-resp-09',
    pillar: 'Respeito',
    difficulty: 'Fácil',
    question: 'Como o preconceito linguístico costuma se manifestar de forma prejudicial na escola?',
    bnccCode: 'BNCC-CG09',
    answerKey: 'A',
    options: [
      'Ao ridicularizar ou discriminar colegas por conta de seus sotaques ou variações regionais.',
      'Ao sugerir correções gramaticais construtivas durante a elaboração de trabalhos.',
      'Ao incentivar a leitura coletiva de obras clássicas da língua portuguesa.',
      'Ao ensinar as convenções formais de escrita exigidas nos exames oficiais.'
    ]
  },
  {
    id: 'bq-resp-10',
    pillar: 'Respeito',
    difficulty: 'Médio',
    question: 'Por que a garantia de um convívio pacífico é fundamental para a qualidade do aprendizado?',
    bnccCode: 'BNCC-CG08',
    answerKey: 'B',
    options: [
      'Porque evita a existência de opiniões divergentes ou debates calorosos.',
      'Porque a segurança emocional e o respeito mútuo permitem maior concentração nos estudos.',
      'Porque padroniza o comportamento de todos os alunos de forma idêntica.',
      'Porque reduz a necessidade de intervenção pedagógica da equipe diretiva.'
    ]
  },

  // ==========================================
  // 🧭 TEMA 3: DISCIPLINA (10 Questões)
  // ==========================================
  {
    id: 'bq-disc-01',
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
    id: 'bq-disc-02',
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
  {
    id: 'bq-disc-03',
    pillar: 'Disciplina',
    difficulty: 'Médio',
    question: 'Por que a gestão de tempo em blocos (como na técnica Pomodoro) é benéfica para a rotina do adolescente?',
    bnccCode: 'BNCC-CG08',
    answerKey: 'D',
    options: [
      'Exige que o estudante permaneça focado sem realizar pausas recreativas ao longo do dia.',
      'Exclui a necessidade de planejar revisões periódicas antes dos testes bimestrais.',
      'Atua como um substituto automático da atenção e do esforço em sala de aula.',
      'Auxilia a manter elevados níveis de concentração e evita o esgotamento mental.'
    ]
  },
  {
    id: 'bq-disc-04',
    pillar: 'Disciplina',
    difficulty: 'Fácil',
    question: 'Qual a principal vantagem de manter hábitos de estudos diários constantes em vez de acumular para a véspera?',
    bnccCode: 'BNCC-CG01',
    answerKey: 'C',
    options: [
      'Aumenta o estresse e a ansiedade nas datas de avaliações institucionais.',
      'É um método necessário exclusivamente para estudantes com baixo rendimento escolar.',
      'Facilita a consolidação da memória de longo prazo e reduz a pressão das provas.',
      'Elimina todo o tempo livre disponível para lazer nos finais de semana.'
    ]
  },
  {
    id: 'bq-disc-05',
    pillar: 'Disciplina',
    difficulty: 'Médio',
    question: 'Como a manutenção de 8 a 9 horas regulares de sono diário interfere no desempenho escolar?',
    bnccCode: 'BNCC-CG08',
    answerKey: 'A',
    options: [
      'Favorece a fixação do conteúdo estudado, o foco nas aulas e a regulação emocional.',
      'Não apresenta influência direta no aprendizado do aluno no dia seguinte.',
      'Provoca relaxamento excessivo, dificultando o raciocínio rápido em avaliações.',
      'Diminui as horas úteis do estudante, prejudicando o cronograma de estudos.'
    ]
  },
  {
    id: 'bq-disc-06',
    pillar: 'Disciplina',
    difficulty: 'Fácil',
    question: 'Para evitar dispersões e focar na explicação do professor, qual postura com relação ao celular é a mais recomendada?',
    bnccCode: 'BNCC-CG08',
    answerKey: 'B',
    options: [
      'Digitar respostas com agilidade mantendo o aparelho sob o caderno na carteira.',
      'Mantê-lo guardado na mochila, desligado ou em modo silencioso durante a aula.',
      'Deixá-lo sobre a carteira com a tela virada para baixo para checar se houver alertas.',
      'Pedir constantes saídas ao banheiro para responder mensagens acumuladas.'
    ]
  },
  {
    id: 'bq-disc-07',
    pillar: 'Disciplina',
    difficulty: 'Médio',
    question: 'Ao planejar as etapas de um trabalho escolar em grupo que deve ser entregue em duas semanas, o que é ideal?',
    bnccCode: 'BNCC-CG06',
    answerKey: 'C',
    options: [
      'Iniciar a pesquisa e a confecção do trabalho apenas na véspera do prazo.',
      'Dividir o conteúdo e deixar que cada membro execute suas partes sem prazos específicos.',
      'Estabelecer metas progressivas e verificar o andamento com reuniões rápidas.',
      'Centralizar todo o trabalho em um único aluno e apenas colocar o nome dos demais.'
    ]
  },
  {
    id: 'bq-disc-08',
    pillar: 'Disciplina',
    difficulty: 'Fácil',
    question: 'O que representa o desenvolvimento de autonomia nos estudos por parte do estudante?',
    bnccCode: 'BNCC-CG10',
    answerKey: 'A',
    options: [
      'Reconhecer seu ritmo, organizar seu local de estudos e materiais de forma ativa.',
      'Depender de familiares para organizar sua agenda diária e separar o material.',
      'Limitar as sessões de estudo apenas aos momentos em que não houver opções de lazer.',
      'Memorizar roteiros prontos de estudo sem adaptá-los à sua realidade pessoal.'
    ]
  },
  {
    id: 'bq-disc-09',
    pillar: 'Disciplina',
    difficulty: 'Médio',
    question: 'Como o conceito de resiliência auxilia o estudante ao se deparar com um resultado insatisfatório em uma prova?',
    bnccCode: 'BNCC-CG08',
    answerKey: 'D',
    options: [
      'Incentivando a ignorar o resultado para proteger sua autoestima de críticas.',
      'Motivando contestações agressivas com o docente acerca dos critérios avaliativos.',
      'Buscando justificar o resultado culpando fatores externos ou os colegas da turma.',
      'Estimulando a identificação dos erros e a revisão de métodos de estudo utilizados.'
    ]
  },
  {
    id: 'bq-disc-10',
    pillar: 'Disciplina',
    difficulty: 'Fácil',
    question: 'Por que a manutenção da organização física do estojo, cadernos e área de estudos beneficia o aprendizado?',
    bnccCode: 'BNCC-CG08',
    answerKey: 'C',
    options: [
      'Funciona apenas como critério de avaliação de comportamento do bimestre.',
      'Inibe o desenvolvimento de pensamentos artísticos e criativos no aluno.',
      'Poupa tempo na localização de tarefas e diminui distrações no momento de concentração.',
      'Substitui o papel das explicações orais dos professores em sala.'
    ]
  },

  // ==========================================
  // 🌱 TEMA 4: CUIDADO (10 Questões)
  // ==========================================
  {
    id: 'bq-cuid-01',
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
    id: 'bq-cuid-02',
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
    id: 'bq-cuid-03',
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
  },
  {
    id: 'bq-cuid-04',
    pillar: 'Cuidado',
    difficulty: 'Fácil',
    question: 'Qual a postura correta relacionada ao consumo consciente e combate ao desperdício na merenda escolar?',
    bnccCode: 'BNCC-CG10',
    answerKey: 'B',
    options: [
      'Recusar-se a se alimentar da merenda fornecida para poupar as provisões da escola.',
      'Servir-se apenas da quantidade que irá consumir, evitando o descarte de sobras.',
      'Exigir diariamente alterações no cardápio de acordo com suas preferências pessoais.',
      'Trazer embalagens plásticas volumosas para descartar no refeitório após as refeições.'
    ]
  },
  {
    id: 'bq-cuid-05',
    pillar: 'Cuidado',
    difficulty: 'Fácil',
    question: 'Ao presenciar um colega jogando lixo na quadra ou pátio escolar, qual conduta demonstra cidadania ativa?',
    bnccCode: 'BNCC-CG09',
    answerKey: 'C',
    options: [
      'Chamar a atenção dele de forma ríspida para expô-lo diante dos demais alunos.',
      'Manter-se alheio ao ocorrido, pois o recolhimento é de encargo dos auxiliares de pátio.',
      'Orientá-lo de maneira cordial sobre as lixeiras ou recolher o resíduo demonstrando zelo.',
      'Descartar resíduos próprios no chão para igualar-se à postura do colega de turma.'
    ]
  },
  {
    id: 'bq-cuid-06',
    pillar: 'Cuidado',
    difficulty: 'Médio',
    question: 'Qual a importância de realizar mutirões de horta, compostagem ou jardinagem na escola?',
    bnccCode: 'BNCC-CG07',
    answerKey: 'A',
    options: [
      'Despertar a consciência ambiental de preservação e aproximar os alunos da prática sustentável.',
      'Substituir as cargas horárias obrigatórias de componentes científicos teóricos.',
      'Gerar lucros comerciais para cobrir gastos operacionais regulares da diretoria.',
      'Atuar apenas como pretexto recreativo, sem qualquer pretensão de formação cidadã.'
    ]
  },
  {
    id: 'bq-cuid-07',
    pillar: 'Cuidado',
    difficulty: 'Fácil',
    question: 'Por que ações de economia de água e luz na escola são consideradas práticas de cidadania global?',
    bnccCode: 'BNCC-CG07',
    answerKey: 'B',
    options: [
      'Porque preparam a escola para atuar sem fornecimento elétrico regular no futuro.',
      'Porque diminuem o impacto ambiental do consumo e poupam verbas públicas de custeio.',
      'Porque diminuem a taxa de impostos que as famílias dos alunos pagam.',
      'Porque são regras administrativas que não geram repercussão na vida fora da escola.'
    ]
  },
  {
    id: 'bq-cuid-08',
    pillar: 'Cuidado',
    difficulty: 'Médio',
    question: 'O que representa o sentimento de pertencimento do estudante para com sua escola?',
    bnccCode: 'BNCC-CG10',
    answerKey: 'D',
    options: [
      'Acreditar que tem controle e posse individual sobre as salas e os móveis do colégio.',
      'Frequentar a escola como um dever puramente burocrático e sem importância pessoal.',
      'Solicitar a anulação de normas disciplinares em prol de preferências exclusivas.',
      'Reconhecer a escola como parte de sua vida e comunidade, zelando por ela com orgulho.'
    ]
  },
  {
    id: 'bq-cuid-09',
    pillar: 'Cuidado',
    difficulty: 'Fácil',
    question: 'Como ações solidárias simples podem ser incorporadas à rotina da sala de aula?',
    bnccCode: 'BNCC-CG09',
    answerKey: 'A',
    options: [
      'Oferecendo explicações de apoio a colegas com dúvidas ou convidando alunos isolados para o grupo.',
      'Oferecendo ajuda financeira para que outros realizem avaliações bimestrais em seu lugar.',
      'Permitindo o empréstimo de materiais pessoais apenas sob cobrança de favores ou bens.',
      'Relatando à equipe pedagógica todas as conversas informais que ocorrem em sala.'
    ]
  },
  {
    id: 'bq-cuid-10',
    pillar: 'Cuidado',
    difficulty: 'Médio',
    question: 'Ao identificar atos de vandalismo ou pichações em banheiros ou muros da escola, qual a conduta esperada?',
    bnccCode: 'BNCC-CG10',
    answerKey: 'B',
    options: [
      'Realizar novos desenhos sobrepostos para demonstrar desagrado da imagem anterior.',
      'Notificar a coordenação e propor projetos coletivos de pintura ou embelezamento com a turma.',
      'Divulgar em mídias sociais em tom de brincadeira, ridicularizando o espaço público.',
      'Manter segredo sobre o ocorrido para evitar associação com a equipe pedagógica.'
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
