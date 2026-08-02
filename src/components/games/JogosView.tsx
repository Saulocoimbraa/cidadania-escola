import React, { useState, useEffect } from 'react';
import {
  Gamepad2,
  Sparkles,
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowLeft,
  HelpCircle,
  Clock,
  Zap,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SpeechButton } from '../common/SpeechButton';

interface JogosViewProps {
  onNavigate: (view: string) => void;
  onCompleteQuiz: (score: number, total: number) => void;
}

// 1. Jogo da Memória cards
interface MemoryCard {
  id: number;
  pairId: number;
  text: string;
  category: string;
  color: string;
}

const MEMORY_PAIRS = [
  { pairId: 1, text: 'Protagonismo Juvenil', partner: 'O estudante como autor do clima escolar', category: 'Educação', color: '#1976D2' },
  { pairId: 2, text: 'Cultura de Paz', partner: 'Resolução de conflitos pelo diálogo sem violência', category: 'Respeito', color: '#7E57C2' },
  { pairId: 3, text: 'Ciberbullying', partner: 'Agressões e ofensas cometidas na internet', category: 'Segurança', color: '#E53935' },
  { pairId: 4, text: 'Autonomia', partner: 'Capacidade de organizar estudos e metas', category: 'Disciplina', color: '#FB8C00' },
  { pairId: 5, text: 'Patrimônio Público', partner: 'Bens da escola que pertencem a todos nós', category: 'Cuidado', color: '#43A047' },
  { pairId: 6, text: 'Empatia', partner: 'Colocar-se no lugar do outro para acolher', category: 'Respeito', color: '#8E24AA' }
];

// 2. Verdadeiro ou Falso (Blitz)
const BLITZ_QUESTIONS = [
  {
    id: 1,
    statement: 'O material e os móveis da escola são de propriedade apenas do diretor da escola.',
    isTrue: false,
    explanation: 'Falso! A escola pública e seus bens são um patrimônio coletivo pago por toda a sociedade.'
  },
  {
    id: 2,
    statement: 'Compartilhar figurinhas constrangedoras de um colega no grupo da sala é ciberbullying.',
    isTrue: true,
    explanation: 'Verdadeiro! Expor e humilhar colegas no ambiente digital é ciberbullying e causa graves danos.'
  },
  {
    id: 3,
    statement: 'Disciplina na escola significa não poder conversar em nenhum momento.',
    isTrue: false,
    explanation: 'Falso! Disciplina é autonomia para estudar no momento certo e aproveitar o lazer nos intervalos.'
  },
  {
    id: 4,
    statement: 'Gentileza gera gentileza: cumprimentar professores e colegas transforma o dia de todos.',
    isTrue: true,
    explanation: 'Verdadeiro! Atitudes simples de gentileza criam um clima escolar seguro e feliz.'
  },
  {
    id: 5,
    statement: 'O Grêmio Estudantil é um espaço onde os alunos podem propor melhorias para a escola.',
    isTrue: true,
    explanation: 'Verdadeiro! É um direito e uma forma democrática de protagonismo juvenil.'
  }
];

export const JogosView: React.FC<JogosViewProps> = ({ onNavigate, onCompleteQuiz }) => {
  const [activeGame, setActiveGame] = useState<'memoria' | 'blitz' | 'forca'>('memoria');

  // Memory Game State
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  // Blitz State
  const [blitzIndex, setBlitzIndex] = useState(0);
  const [blitzScore, setBlitzScore] = useState(0);
  const [blitzAnswered, setBlitzAnswered] = useState<boolean | null>(null);
  const [blitzDone, setBlitzDone] = useState(false);

  // Forca / Palavra Secreta State
  const [secretWordObj, setSecretWordObj] = useState({
    word: 'CIDADANIA',
    tip: 'Conjunto de direitos e deveres que nos permite viver em sociedade de forma digna e justa.'
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // Setup memory cards
  useEffect(() => {
    resetMemoryGame();
  }, []);

  const resetMemoryGame = () => {
    const deck: MemoryCard[] = [];
    MEMORY_PAIRS.forEach((item, idx) => {
      deck.push({
        id: idx * 2,
        pairId: item.pairId,
        text: item.text,
        category: item.category,
        color: item.color
      });
      deck.push({
        id: idx * 2 + 1,
        pairId: item.pairId,
        text: item.partner,
        category: item.category,
        color: item.color
      });
    });
    // Shuffle
    deck.sort(() => Math.random() - 0.5);
    setCards(deck);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  };

  const handleCardClick = (id: number) => {
    if (flipped.length === 2 || flipped.includes(id) || matched.includes(id)) return;

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(prev => prev + 1);
      const c1 = cards.find(c => c.id === newFlipped[0]);
      const c2 = cards.find(c => c.id === newFlipped[1]);
      if (c1 && c2 && c1.pairId === c2.pairId) {
        setMatched(prev => [...prev, c1.id, c2.id]);
        setFlipped([]);
        if (matched.length + 2 === cards.length) {
          confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
          onCompleteQuiz(cards.length / 2, cards.length / 2);
        }
      } else {
        setTimeout(() => setFlipped([]), 1200);
      }
    }
  };

  const handleBlitzAnswer = (choice: boolean) => {
    if (blitzAnswered !== null) return;
    const currentQ = BLITZ_QUESTIONS[blitzIndex];
    const correct = choice === currentQ.isTrue;
    if (correct) setBlitzScore(prev => prev + 10);
    setBlitzAnswered(correct);
  };

  const handleNextBlitz = () => {
    if (blitzIndex + 1 < BLITZ_QUESTIONS.length) {
      setBlitzIndex(prev => prev + 1);
      setBlitzAnswered(null);
    } else {
      setBlitzDone(true);
      confetti({ particleCount: 80, spread: 60 });
      onCompleteQuiz(blitzScore / 10, BLITZ_QUESTIONS.length);
    }
  };

  const resetBlitz = () => {
    setBlitzIndex(0);
    setBlitzScore(0);
    setBlitzAnswered(null);
    setBlitzDone(false);
  };

  const resetForca = () => {
    const wordsList = [
      { word: 'CIDADANIA', tip: 'Direitos e deveres de cada pessoa em sociedade.' },
      { word: 'EMPATIA', tip: 'Capacidade de se colocar no lugar do outro com respeito.' },
      { word: 'PROTAGONISMO', tip: 'Quando o jovem é autor e participa ativamente de sua escola.' },
      { word: 'RESPEITO', tip: 'Atitude fundamental no combate ao bullying.' },
      { word: 'PATRIMONIO', tip: 'Conjunto de bens da escola públicos que pertencem a todos.' }
    ];
    const picked = wordsList[Math.floor(Math.random() * wordsList.length)];
    setSecretWordObj(picked);
    setGuessedLetters([]);
  };

  const handleGuessLetter = (l: string) => {
    if (guessedLetters.includes(l)) return;
    setGuessedLetters(prev => [...prev, l]);
  };

  const isForcaWon = secretWordObj.word.split('').every(l => guessedLetters.includes(l));
  const wrongGuesses = guessedLetters.filter(l => !secretWordObj.word.includes(l)).length;

  useEffect(() => {
    if (isForcaWon && guessedLetters.length > 0) {
      confetti({ particleCount: 70, spread: 60 });
      onCompleteQuiz(5, 5);
    }
  }, [isForcaWon]);

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Back button */}
      <div>
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-orange-600 dark:text-orange-400 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar para o Início</span>
        </button>
      </div>

      {/* Hero Arcade */}
      <section className="rounded-3xl bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 text-white p-6 sm:p-12 shadow-xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider mb-4">
            <Gamepad2 className="h-4 w-4" />
            <span>Arcade da Cidadania • Aprender Brincando</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">
            Jogos Educativos de Cidadania na Escola
          </h1>

          <p className="text-base sm:text-lg text-orange-100 leading-relaxed mb-6">
            Desafie sua memória, responda ao quiz relâmpago Verdadeiro ou Falso e descubra a Palavra Secreta da BNCC para acumular pontos no portal!
          </p>

          <SpeechButton
            text="Arcade da Cidadania. Escolha entre o Jogo da Memória dos Pilares, o Quiz Relâmpago Verdadeiro ou Falso e o desafio da Palavra Secreta."
            label="Ouvir Instruções dos Jogos"
            size="md"
            variant="white"
          />
        </div>
      </section>

      {/* Game Switcher Tabs */}
      <section className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => setActiveGame('memoria')}
          className={`px-6 py-3 rounded-2xl font-black text-sm sm:text-base transition-all shadow-sm flex items-center gap-2 ${
            activeGame === 'memoria'
              ? 'bg-orange-500 text-white scale-105'
              : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
          }`}
        >
          <span>🧠 Jogo da Memória Cidadã</span>
        </button>

        <button
          onClick={() => setActiveGame('blitz')}
          className={`px-6 py-3 rounded-2xl font-black text-sm sm:text-base transition-all shadow-sm flex items-center gap-2 ${
            activeGame === 'blitz'
              ? 'bg-orange-500 text-white scale-105'
              : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
          }`}
        >
          <Zap className="h-4 w-4 text-amber-300" />
          <span>⚡ Blitz Verdadeiro ou Falso</span>
        </button>

        <button
          onClick={() => setActiveGame('forca')}
          className={`px-6 py-3 rounded-2xl font-black text-sm sm:text-base transition-all shadow-sm flex items-center gap-2 ${
            activeGame === 'forca'
              ? 'bg-orange-500 text-white scale-105'
              : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
          }`}
        >
          <span>🔍 Palavra Secreta da Cidadania</span>
        </button>
      </section>

      {/* 1. JOGO DA MEMÓRIA */}
      {activeGame === 'memoria' && (
        <section className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                Jogo da Memória: Conecte o Termo ao Seu Significado
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Movimentos feitos: <strong>{moves}</strong> • Pares encontrados: <strong>{matched.length / 2}</strong> de {MEMORY_PAIRS.length}
              </p>
            </div>

            <button
              onClick={resetMemoryGame}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 font-bold text-xs text-slate-700 dark:text-slate-200 transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Reiniciar Jogo</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {cards.map(card => {
              const isFlipped = flipped.includes(card.id) || matched.includes(card.id);
              const isMatched = matched.includes(card.id);

              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => handleCardClick(card.id)}
                  className={`h-36 sm:h-44 rounded-2xl p-4 text-left font-bold transition-all duration-300 flex flex-col justify-between border-2 shadow-sm ${
                    isFlipped
                      ? 'bg-slate-900 text-white border-slate-800 dark:bg-slate-800'
                      : 'bg-gradient-to-tr from-orange-500 to-amber-500 text-white border-orange-400 hover:scale-105'
                  } ${isMatched ? 'opacity-80 border-green-500 bg-green-900/60' : ''}`}
                >
                  {isFlipped ? (
                    <>
                      <span
                        className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full self-start text-white"
                        style={{ backgroundColor: card.color }}
                      >
                        {card.category}
                      </span>
                      <span className="text-xs sm:text-sm leading-snug">{card.text}</span>
                      <span className="text-[10px] text-slate-400 self-end">
                        {isMatched ? '✓ Par Cidadão!' : 'Par #0' + card.pairId}
                      </span>
                    </>
                  ) : (
                    <div className="h-full w-full flex flex-col items-center justify-center text-center">
                      <Gamepad2 className="h-8 w-8 mb-2 opacity-80" />
                      <span className="text-xs font-black uppercase tracking-wider">Cidadania</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* 2. BLITZ VERDADEIRO OU FALSO */}
      {activeGame === 'blitz' && (
        <section className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm max-w-3xl mx-auto">
          {!blitzDone ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span>Pergunta {blitzIndex + 1} de {BLITZ_QUESTIONS.length}</span>
                <span className="text-orange-600 font-black">Pontuação: {blitzScore} pts</span>
              </div>

              <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-500 transition-all"
                  style={{ width: `${((blitzIndex + 1) / BLITZ_QUESTIONS.length) * 100}%` }}
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-relaxed">
                "{BLITZ_QUESTIONS[blitzIndex].statement}"
              </h3>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <button
                  type="button"
                  disabled={blitzAnswered !== null}
                  onClick={() => handleBlitzAnswer(true)}
                  className={`p-6 rounded-2xl font-black text-base sm:text-lg border-2 transition-all flex items-center justify-center gap-2 ${
                    blitzAnswered === true
                      ? 'bg-green-500 text-white border-green-600 shadow-md'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-green-500 text-slate-900 dark:text-white'
                  }`}
                >
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                  <span>VERDADEIRO</span>
                </button>

                <button
                  type="button"
                  disabled={blitzAnswered !== null}
                  onClick={() => handleBlitzAnswer(false)}
                  className={`p-6 rounded-2xl font-black text-base sm:text-lg border-2 transition-all flex items-center justify-center gap-2 ${
                    blitzAnswered === false
                      ? 'bg-amber-500 text-white border-amber-600 shadow-md'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-red-500 text-slate-900 dark:text-white'
                  }`}
                >
                  <XCircle className="h-6 w-6 text-red-500" />
                  <span>FALSO</span>
                </button>
              </div>

              {blitzAnswered !== null && (
                <div className="p-5 rounded-2xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800 space-y-3 animate-fadeIn">
                  <div className="font-bold text-sm text-orange-900 dark:text-orange-200">
                    💡 Explicação Pedagógica:
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {BLITZ_QUESTIONS[blitzIndex].explanation}
                  </p>
                  <button
                    type="button"
                    onClick={handleNextBlitz}
                    className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-sm transition-colors"
                  >
                    {blitzIndex + 1 < BLITZ_QUESTIONS.length ? 'Próxima Afirmação →' : 'Ver Resultado Final 🎉'}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8 space-y-6 animate-fadeIn">
              <Award className="mx-auto h-16 w-16 text-amber-500 animate-bounce" />
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Parabéns, Blitz Concluída!
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                Você conquistou <strong>{blitzScore} de {BLITZ_QUESTIONS.length * 10} pontos</strong> no desafio relâmpago de cidadania!
              </p>
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={resetBlitz}
                  className="px-6 py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-sm transition-colors"
                >
                  Jogar Blitz Novamente
                </button>
                <button
                  onClick={() => onNavigate('conquistas')}
                  className="px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold text-sm transition-colors"
                >
                  Ver Certificado PDF →
                </button>
              </div>
            </div>
          )}
        </section>
      )}

      {/* 3. PALAVRA SECRETA (FORCA EDUCATIVA) */}
      {activeGame === 'forca' && (
        <section className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm max-w-3xl mx-auto space-y-8">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                Palavra Secreta da Cidadania
              </h3>
              <p className="text-xs text-slate-500">
                Tentativas incorretas: <strong>{wrongGuesses} / 6</strong>
              </p>
            </div>
            <button
              onClick={resetForca}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 font-bold text-xs text-slate-700 dark:text-slate-200 transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Nova Palavra</span>
            </button>
          </div>

          {/* Dica da Palavra */}
          <div className="p-4 rounded-2xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900/50 text-xs sm:text-sm font-semibold text-orange-900 dark:text-orange-200">
            💡 <strong>Dica BNCC: </strong> {secretWordObj.tip}
          </div>

          {/* Palavra com letras ou traços */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-6">
            {secretWordObj.word.split('').map((letter, i) => {
              const show = guessedLetters.includes(letter) || isForcaWon;
              return (
                <div
                  key={i}
                  className="h-12 sm:h-16 w-10 sm:w-12 rounded-xl bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center text-xl sm:text-3xl font-black text-slate-900 dark:text-white"
                >
                  {show ? letter : '_'}
                </div>
              );
            })}
          </div>

          {/* Teclado do Alfabeto */}
          {!isForcaWon && wrongGuesses < 6 ? (
            <div className="grid grid-cols-7 sm:grid-cols-9 gap-1.5 sm:gap-2">
              {alphabet.map(l => {
                const used = guessedLetters.includes(l);
                const isRight = secretWordObj.word.includes(l);
                return (
                  <button
                    key={l}
                    disabled={used}
                    onClick={() => handleGuessLetter(l)}
                    className={`h-10 sm:h-12 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                      !used
                        ? 'bg-slate-100 hover:bg-orange-500 hover:text-white dark:bg-slate-800 dark:hover:bg-orange-500 text-slate-800 dark:text-slate-200'
                        : isRight
                        ? 'bg-green-600 text-white opacity-80'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-400 opacity-40'
                    }`}
                  >
                    {l}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-4 space-y-4 animate-fadeIn">
              <h4 className="text-xl font-black text-slate-900 dark:text-white">
                {isForcaWon
                  ? '🎉 Excelente! Você descobriu a Palavra Secreta!'
                  : `Ah não! A palavra era ${secretWordObj.word}.`}
              </h4>
              <button
                onClick={resetForca}
                className="px-6 py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-sm transition-colors"
              >
                Jogar Outra Palavra →
              </button>
            </div>
          )}
        </section>
      )}
    </div>
  );
};
