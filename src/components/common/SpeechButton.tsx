import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useSpeech } from '../../hooks/useSpeech';

interface SpeechButtonProps {
  text: string;
  label?: string;
  className?: string;
  size?: 'sm' | 'md';
}

export const SpeechButton: React.FC<SpeechButtonProps> = ({
  text,
  label = 'Ouvir',
  className = '',
  size = 'sm'
}) => {
  const { supported, isSpeaking, currentText, speak, stopSpeaking } = useSpeech();

  if (!supported) return null;

  const isCurrentTextSpeaking = isSpeaking && currentText === text;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isCurrentTextSpeaking) {
      stopSpeaking();
    } else {
      speak(text);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isCurrentTextSpeaking ? 'Parar leitura em voz alta' : 'Ouvir texto em voz alta'}
      title={isCurrentTextSpeaking ? 'Parar leitura' : 'Ouvir texto'}
      className={`inline-flex items-center gap-1.5 rounded-full font-extrabold uppercase tracking-wider transition-all ${
        isCurrentTextSpeaking
          ? 'bg-[#1976D2] text-white shadow-sm animate-pulse'
          : 'bg-[#1976D2]/10 hover:bg-[#1976D2]/20 text-[#1976D2] dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-blue-400'
      } ${
        size === 'sm' ? 'px-3 py-1 text-[11px]' : 'px-4 py-1.5 text-xs'
      } ${className}`}
    >
      {isCurrentTextSpeaking ? (
        <>
          <VolumeX className="w-3.5 h-3.5" />
          <span>Parar áudio</span>
        </>
      ) : (
        <>
          <Volume2 className="w-3.5 h-3.5" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
};
