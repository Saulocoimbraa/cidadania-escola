import React, { useState } from 'react';
import { Play, HelpCircle, X, ExternalLink, ShieldCheck, MessageCircle } from 'lucide-react';
import { VideoItem } from '../../types';

interface VideoEmbedModalProps {
  video: VideoItem;
  color: string;
}

export const VideoEmbedModal: React.FC<VideoEmbedModalProps> = ({ video, color }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-2">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-xl text-white font-bold"
              style={{ backgroundColor: color }}
            >
              <Play className="h-4 w-4 fill-white" />
            </span>
            <div>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                {video.channel}
              </span>
              <div className="flex items-center gap-1 text-[11px] text-green-600 dark:text-green-400 font-medium">
                <ShieldCheck className="h-3 w-3" />
                Apropriado para 11 a 15 anos
              </div>
            </div>
          </div>
          <span className="text-xs font-semibold bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full text-slate-600 dark:text-slate-300">
            {video.duration}
          </span>
        </div>

        <h4 className="font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
          {video.title}
        </h4>

        <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
          {video.description}
        </p>

        {/* Debate Questions Preview */}
        {video.debateQuestions && video.debateQuestions.length > 0 && (
          <div className="mb-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
              <MessageCircle className="h-3.5 w-3.5 text-blue-600" />
              Pergunta para Debate em Aula:
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 italic">
              "{video.debateQuestions[0]}"
            </p>
          </div>
        )}

        <button
          onClick={() => setIsOpen(true)}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-2.5 font-bold text-xs text-white shadow-sm transition-all"
          style={{ backgroundColor: color }}
        >
          <Play className="h-3.5 w-3.5 fill-white" />
          Assistir & Debater em Aula
        </button>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white dark:bg-slate-900 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-white line-clamp-1">
                {video.title}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Fechar vídeo"
                className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Embed Frame */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                title={video.title}
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Debate Section in Modal */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900">
              <h4 className="font-bold text-sm text-slate-800 dark:text-white mb-2 flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-blue-600" />
                Roteiro de Perguntas para Reflexão ou Trabalho em Grupo:
              </h4>
              <ul className="space-y-2 mb-4">
                {video.debateQuestions.map((q, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2 bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="font-bold text-blue-600 flex-shrink-0">{i + 1}.</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white text-xs font-bold hover:bg-slate-300 transition-colors"
                >
                  Concluir e Voltar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
