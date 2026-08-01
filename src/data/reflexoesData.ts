export interface ReflexaoPrompt {
  id: string;
  quote: string;
  category: 'Convivência' | 'Autonomia' | 'Patrimônio' | 'Respeito' | 'Cidadania';
  question: string;
  placeholder: string;
}

export const REFLEXOES_DATA: ReflexaoPrompt[] = [
  {
    id: 'ref-1',
    quote: 'Você gostaria de ser tratado da forma como trata seus colegas?',
    category: 'Respeito',
    question: 'Pense nas palavras, brincadeiras e atitudes que você teve hoje. Se alguém fizesse o mesmo com você, você se sentiria valorizado ou machucado?',
    placeholder: 'Escreva sua reflexão pessoal sobre como suas palavras impactam a turma...'
  },
  {
    id: 'ref-2',
    quote: 'Como pequenas atitudes mudam uma escola?',
    category: 'Cidadania',
    question: 'Um sorriso para o porteiro, um papel recolhido do chão ou um conselho dado a um amigo podem parecer pouca coisa. Qual foi a atitude mais bonita que você viu nesta semana?',
    placeholder: 'Descreva uma pequena atitude que você pode fazer amanhã...'
  },
  {
    id: 'ref-3',
    quote: 'Você faz diferença na sua turma?',
    category: 'Convivência',
    question: 'Ser um líder cidadão não é mandar em ninguém; é ser aquela pessoa que traz paz, ajuda a resolver brigas e colabora com os professores.',
    placeholder: 'De que forma você quer ser lembrado pelos seus colegas da escola?'
  },
  {
    id: 'ref-4',
    quote: 'O que você faz quando ninguém está olhando?',
    category: 'Autonomia',
    question: 'Cidadania e ética verdadeira são quando fazemos o certo mesmo quando o professor não está cobrando. Como está sua honestidade nas pequenas coisas?',
    placeholder: 'Como você pratica a autodisciplina no seu dia a dia?'
  },
  {
    id: 'ref-5',
    quote: 'A escola pública pertence a você e às futuras gerações',
    category: 'Patrimônio',
    question: 'Daqui a 10 anos, outros adolescentes sentarão na mesma carteira onde você está agora. O que você gostaria de deixar como herança para eles?',
    placeholder: 'Reflita sobre o cuidado com as carteiras, os livros e o verde da escola...'
  },
  {
    id: 'ref-6',
    quote: 'Por que o diálogo é mais forte do que o grito?',
    category: 'Convivência',
    question: 'Em um mundo onde as pessoas desaprendem a ouvir, quem tem argumentos calmos, embasados e educados é quem realmente transforma opiniões.',
    placeholder: 'Descreva uma situação em que conversar com calma resolveu um problema...'
  }
];
