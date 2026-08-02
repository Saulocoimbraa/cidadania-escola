import React from 'react';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';

interface PillarInfo {
  id: string;
  label: string;
  color: string;
}

const PILLAR_ORDER: PillarInfo[] = [
  { id: 'educacao',  label: 'Educação',  color: '#1976D2' },
  { id: 'respeito',  label: 'Respeito',  color: '#7E57C2' },
  { id: 'disciplina',label: 'Disciplina',color: '#FB8C00' },
  { id: 'cuidado',   label: 'Cuidado',   color: '#43A047' },
];

interface PillarNavigationProps {
  currentPillarId: string;
  onNavigate: (view: string) => void;
  /** Se true, exibe no topo (sem borda superior). Se false/omitido, exibe no rodapé. */
  position?: 'top' | 'bottom';
}

export const PillarNavigation: React.FC<PillarNavigationProps> = ({
  currentPillarId,
  onNavigate,
  position = 'bottom'
}) => {
  const currentIndex = PILLAR_ORDER.findIndex(p => p.id === currentPillarId);
  const prev = currentIndex > 0 ? PILLAR_ORDER[currentIndex - 1] : null;
  const next = currentIndex < PILLAR_ORDER.length - 1 ? PILLAR_ORDER[currentIndex + 1] : null;
  // Após o último pilar, o próximo é Conquistas
  const isLast = currentIndex === PILLAR_ORDER.length - 1;

  if (position === 'top') {
    return (
      <div className="flex items-center justify-between gap-2 flex-wrap">
        {prev ? (
          <button
            onClick={() => onNavigate(prev.id)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold hover:underline transition-colors"
            style={{ color: prev.color }}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{prev.label}</span>
          </button>
        ) : (
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 hover:underline"
          >
            <Home className="h-4 w-4" />
            <span>Início</span>
          </button>
        )}

        {/* Indicador de posição */}
        <div className="flex items-center gap-1.5">
          {PILLAR_ORDER.map((p, i) => (
            <button
              key={p.id}
              onClick={() => onNavigate(p.id)}
              title={p.label}
              className={`h-2 rounded-full transition-all ${i === currentIndex ? 'w-6' : 'w-2 opacity-40 hover:opacity-70'}`}
              style={{ backgroundColor: p.color }}
            />
          ))}
        </div>

        {next ? (
          <button
            onClick={() => onNavigate(next.id)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold hover:underline transition-colors"
            style={{ color: next.color }}
          >
            <span>{next.label}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={() => onNavigate('conquistas')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400 hover:underline"
          >
            <span>Conquistas</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }

  // Position = bottom: botões maiores com card
  return (
    <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 sm:p-6">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 text-center mb-4">
        Navegação entre Pilares
      </p>
      <div className="grid grid-cols-3 gap-3">
        {/* Anterior */}
        {prev ? (
          <button
            onClick={() => onNavigate(prev.id)}
            className="group flex flex-col items-start gap-1 p-3 sm:p-4 rounded-2xl border-2 hover:shadow-md transition-all text-left"
            style={{ borderColor: prev.color + '40' }}
          >
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Anterior</span>
            </div>
            <span className="font-black text-sm sm:text-base" style={{ color: prev.color }}>
              {prev.label}
            </span>
          </button>
        ) : (
          <button
            onClick={() => onNavigate('home')}
            className="group flex flex-col items-start gap-1 p-3 sm:p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:shadow-md transition-all text-left"
          >
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
              <Home className="h-3.5 w-3.5" />
              <span>Voltar</span>
            </div>
            <span className="font-black text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Início
            </span>
          </button>
        )}

        {/* Indicador central */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-1.5">
            {PILLAR_ORDER.map((p, i) => (
              <button
                key={p.id}
                onClick={() => onNavigate(p.id)}
                title={p.label}
                className={`h-2 rounded-full transition-all ${i === currentIndex ? 'w-5' : 'w-2 opacity-40 hover:opacity-70'}`}
                style={{ backgroundColor: p.color }}
              />
            ))}
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Pilar {currentIndex + 1} de {PILLAR_ORDER.length}
          </span>
        </div>

        {/* Próximo */}
        {next ? (
          <button
            onClick={() => onNavigate(next.id)}
            className="group flex flex-col items-end gap-1 p-3 sm:p-4 rounded-2xl border-2 hover:shadow-md transition-all text-right"
            style={{ borderColor: next.color + '40' }}
          >
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
              <span>Próximo</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
            <span className="font-black text-sm sm:text-base" style={{ color: next.color }}>
              {next.label}
            </span>
          </button>
        ) : (
          <button
            onClick={() => onNavigate('conquistas')}
            className="group flex flex-col items-end gap-1 p-3 sm:p-4 rounded-2xl border-2 border-amber-300 dark:border-amber-600/50 hover:shadow-md transition-all text-right bg-amber-50 dark:bg-amber-950/20"
          >
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600">
              <span>Ver</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
            <span className="font-black text-sm sm:text-base text-amber-600 dark:text-amber-400">
              Conquistas 🏆
            </span>
          </button>
        )}
      </div>
    </div>
  );
};
