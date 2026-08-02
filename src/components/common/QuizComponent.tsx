import React, { useState } from 'react';
import { QuizQuestion } from '../../types';
import { CheckCircle2, XCircle, HelpCircle, RotateCcw, Award, Sparkles, BookOpen } from 'lucide-react';
import { SpeechButton } from './SpeechButton';

interface QuizComponentProps {
  pillarId: string;
  pillarTitle: string;
  color: string;
  questions: QuizQuestion[];
  onComplete: (score: number, total: number) => void;
}

export const QuizComponent: React.FC<QuizComponentProps> = ({
  pillarId,
  pillarTitle,
  color,
  questions,
  onComplete
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [answersHistory, setAnswersHistory] = useState<boolean[]>([]);

  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === currentQuestion.correctIndex;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setAnswersHistory(prev => [...prev, isCorrect]);
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
      onComplete(score, questions.length);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsCompleted(false);
    setAnswersHistory([]);
  };

  if (isCompleted) {
    const finalScore = score;
    const percentage = Math.round((finalScore / questions.length) * 100);

    return (
      <div className="rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl border border-slate-100 dark:border-slate-800 text-center animate-fadeIn">
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600">
          <Award className="h-10 w-10" />
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
          Resultado do Desafio: {pillarTitle}
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          {percentage >= 60
            ? '🎉 Parabéns! Você demonstrou excelente compreensão da cidadania escolar e ganhou pontos!'
            : '📚 Bom esforço! Revise os pontos da cartilha e tente novamente para conquistar a medalha!'}
        </p>

        {/* Visual Stats Chart */}
        <div className="mb-8 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 max-w-sm mx-auto">
          <div className="text-4xl font-black mb-1" style={{ color }}>
            {finalScore} / {questions.length}
          </div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">
            Aproveitamento Geral ({percentage}%)
          </div>

          {/* Graphical Bar */}
          <div className="w-full h-4 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mb-4">
            <div
              className="h-full transition-all duration-1000 ease-out rounded-full"
              style={{
                width: `${percentage}%`,
                backgroundColor: color
              }}
            />
          </div>

          <div className="flex justify-between text-xs font-medium text-slate-600 dark:text-slate-400">
            <span>Acertos: {answersHistory.filter(Boolean).length}</span>
            <span>Erros: {answersHistory.filter(b => !b).length}</span>
          </div>
        </div>

        <button
          onClick={handleRestart}
          className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-bold text-white shadow-md hover:opacity-95 transition-all"
          style={{ backgroundColor: color }}
        >
          <RotateCcw className="h-4 w-4" />
          Tentar Novamente
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl border border-slate-100 dark:border-slate-800">
      {/* Quiz Header & Progress */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <span
            className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-1 text-white"
            style={{ backgroundColor: color }}
          >
            Quiz de Cidadania
          </span>
          <h4 className="text-lg font-bold text-slate-800 dark:text-white">
            Questão {currentIndex + 1} de {questions.length}
          </h4>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-between">
          <SpeechButton text={`${currentQuestion.question}. ${currentQuestion.options.join('. ')}`} />
          <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">
            Pontos: {score * 20}
          </div>
        </div>
      </div>

      {/* Question Text */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-relaxed mb-3">
          {currentQuestion.question}
        </h3>
        {currentQuestion.competencia && (
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
            <BookOpen className="h-3.5 w-3.5" />
            {currentQuestion.competencia}
          </div>
        )}
      </div>

      {/* Options List */}
      <div className="space-y-3 mb-6">
        {currentQuestion.options.map((option, idx) => {
          let optionClass =
            'w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-3 font-medium text-sm sm:text-base ';

          if (!isAnswered) {
            optionClass +=
              'border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200';
          } else if (idx === currentQuestion.correctIndex) {
            optionClass +=
              'border-green-500 bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-300 font-semibold';
          } else if (idx === selectedOption) {
            optionClass += 'border-red-500 bg-red-50 dark:bg-red-950/30 text-red-800 dark:text-red-300';
          } else {
            optionClass += 'border-slate-100 dark:border-slate-800 opacity-60 text-slate-500';
          }

          return (
            <button
              key={idx}
              type="button"
              disabled={isAnswered}
              onClick={() => handleSelectOption(idx)}
              className={optionClass}
            >
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-xs text-slate-600 dark:text-slate-300">
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="flex-1">{option}</span>
              {isAnswered && idx === currentQuestion.correctIndex && (
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
              )}
              {isAnswered && idx === selectedOption && idx !== currentQuestion.correctIndex && (
                <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Feedback & Explanation Box */}
      {isAnswered && (
        <div className="mb-6 p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 animate-fadeIn">
          <div className="flex items-center gap-2 font-bold text-sm text-blue-900 dark:text-blue-300 mb-1">
            <Sparkles className="h-4 w-4 text-blue-600" />
            Comentário Pedagógico:
          </div>
          <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
            {currentQuestion.explanation}
          </p>
        </div>
      )}

      {/* Next Button */}
      {isAnswered && (
        <div className="flex justify-end">
          <button
            onClick={handleNextQuestion}
            className="px-6 py-3 rounded-xl font-bold text-white shadow-md hover:opacity-95 transition-all"
            style={{ backgroundColor: color }}
          >
            {currentIndex + 1 < questions.length ? 'Próxima Questão →' : 'Ver Meu Resultado 🎉'}
          </button>
        </div>
      )}
    </div>
  );
};
