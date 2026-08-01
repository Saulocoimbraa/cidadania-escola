import React from 'react';
import { Award, X, Sparkles, Trophy } from 'lucide-react';
import { Badge } from '../../types';

interface BadgeModalProps {
  badge: Badge | null;
  onClose: () => void;
}

export const BadgeModal: React.FC<BadgeModalProps> = ({ badge, onClose }) => {
  if (!badge) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white dark:bg-slate-900 p-6 text-center shadow-2xl border-4 border-yellow-400">
        <button
          onClick={onClose}
          aria-label="Fechar modal de conquista"
          className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 shadow-inner animate-bounce">
          <Award className="h-10 w-10" />
        </div>

        <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">
          <Sparkles className="h-3.5 w-3.5" />
          Medalha Conquistada!
        </div>

        <h3 className="mb-2 text-2xl font-black text-slate-900 dark:text-white">
          {badge.title}
        </h3>

        <p className="mb-6 text-sm text-slate-600 dark:text-slate-300">
          {badge.description}
        </p>

        <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-4 text-xs text-slate-500 dark:text-slate-400 mb-6 border border-slate-100 dark:border-slate-700">
          <span className="font-semibold text-slate-700 dark:text-slate-200">Como você conquistou: </span>
          {badge.progressRequired}
        </div>

        <button
          onClick={onClose}
          className="w-full rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 px-6 py-3 font-bold text-white shadow-lg shadow-amber-500/25 hover:from-yellow-600 hover:to-amber-700 transition-transform active:scale-95"
        >
          Continuar Aprendendo
        </button>
      </div>
    </div>
  );
};
