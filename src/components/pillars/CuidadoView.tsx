import React, { useState } from 'react';
import {
  Sprout,
  HelpCircle,
  CheckCircle2,
  Droplet,
  Zap,
  Trash2,
  Heart,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Quote
} from 'lucide-react';
import { CUIDADO_PILLAR } from '../../data/cartilhaData';
import { QuizComponent } from '../common/QuizComponent';
import { VideoEmbedModal } from '../common/VideoEmbedModal';
import { SpeechButton } from '../common/SpeechButton';

interface CuidadoViewProps {
  onNavigate: (view: string) => void;
  completedMissions: string[];
  onToggleMission: (missionId: string) => void;
  onCompleteQuiz: (score: number, total: number) => void;
}

export const CuidadoView: React.FC<CuidadoViewProps> = ({
  onNavigate,
  completedMissions,
  onToggleMission,
  onCompleteQuiz
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const pillar = CUIDADO_PILLAR;

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => (prev === index ? null : index));
  };

  return (
    <div className="space-y-12 animate-fadeIn">
      {/* Back button */}
      <div>
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-green-600 dark:text-green-400 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar para o Início</span>
        </button>
      </div>

      {/* Hero Header do Pilar Cuidado (Bold Typography Theme) */}
      <section
        className="relative overflow-hidden rounded-3xl p-6 sm:p-12 text-white shadow-xl border-4 border-[#1976D2]"
        style={{ backgroundColor: pillar.color }}
      >
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
            <Sprout className="h-4 w-4" />
            <span>Pilar 4 • Cartilha Cidadania na Escola</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black mb-4 leading-tight uppercase tracking-tight">
            {pillar.title}: Patrimônio Coletivo & Solidariedade
          </h1>

          <p className="text-base sm:text-lg text-green-100 font-bold leading-relaxed mb-6">
            {pillar.introduction}
          </p>

          <div className="flex items-center gap-3">
            <SpeechButton
              text={`${pillar.title}: ${pillar.introduction}. ${pillar.cartilhaSections.map(s => s.title + ': ' + s.content).join(' ')}`}
              label="Ouvir Cartilha Completa"
              size="md"
            />
          </div>
        </div>
      </section>

      {/* Seção Citação Destaque */}
      <section className="rounded-2xl bg-[#E3F2FD] dark:bg-slate-900 border-2 border-[#E1E8ED] dark:border-slate-800 border-l-8 border-l-[#1976D2] p-6 sm:p-8 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#1565C0] dark:text-blue-400">
              Pertencimento & Paz • Ensino Fundamental - Anos Finais
            </span>
            <p className="text-lg sm:text-xl font-black text-[#1D1D1D] dark:text-white leading-relaxed italic">
              "Gentileza gera gentileza. Quando você cuida da escola e das pessoas, a escola cuida de você. O que é público não é 'de ninguém'; o que é público é de TODOS NÓS."
            </p>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
              — Cartilha Cidadania na Escola
            </p>
          </div>
          <SpeechButton
            text="Gentileza gera gentileza. Quando você cuida da escola e das pessoas, a escola cuida de você. O que é público não é de ninguém; o que é público é de TODOS NÓS."
          />
        </div>
      </section>

      {/* Conteúdo da Cartilha */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white">
          Conteúdo da Cartilha: Cuidado & Sustentabilidade
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillar.cartilhaSections.map((sec, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="h-9 w-9 rounded-xl bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 flex items-center justify-center font-bold text-sm">
                    0{i + 1}
                  </span>
                  <SpeechButton text={`${sec.title}. ${sec.content}`} />
                </div>

                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">
                  {sec.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {sec.content}
                </p>
              </div>

              {sec.highlightQuote && (
                <div className="mt-4 p-3.5 rounded-2xl bg-green-50/70 dark:bg-slate-800/60 border border-green-100 dark:border-slate-700 text-xs font-semibold text-green-900 dark:text-green-300 italic">
                  "{sec.highlightQuote}"
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO MISSÕES DA SEMANA (Checklist Interativo com Medalha) */}
      <section className="rounded-3xl bg-gradient-to-br from-green-500 to-emerald-700 text-white p-6 sm:p-10 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
              <span>Desafio Prático na Escola</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black">
              Missões da Semana do Estudante Cidadão
            </h2>
            <p className="text-sm text-green-100 mt-1 max-w-2xl">
              Conclua pelo menos 3 missões desta semana na sua escola para conquistar a medalha <strong>"Guardião da Escola"</strong>!
            </p>
          </div>

          <div className="text-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20 flex-shrink-0">
            <div className="text-3xl font-black text-yellow-300">
              {completedMissions.length} / {pillar.missions?.length || 5}
            </div>
            <div className="text-xs uppercase font-bold tracking-wider text-white/80">
              Missões Cumpridas
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pillar.missions?.map(mission => {
            const isDone = completedMissions.includes(mission.id);
            return (
              <button
                key={mission.id}
                type="button"
                onClick={() => onToggleMission(mission.id)}
                className={`p-5 rounded-2xl text-left transition-all border flex items-start gap-4 ${
                  isDone
                    ? 'bg-white/90 text-slate-900 border-white shadow-lg scale-[1.01]'
                    : 'bg-white/15 text-white hover:bg-white/25 border-white/20'
                }`}
              >
                <div
                  className={`h-7 w-7 rounded-xl border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    isDone
                      ? 'bg-green-600 border-green-600 text-white'
                      : 'border-white/60 text-transparent'
                  }`}
                >
                  {isDone && <CheckCircle2 className="h-5 w-5" />}
                </div>
                <div>
                  <h4 className="font-bold text-base mb-1">{mission.text}</h4>
                  <p className={`text-xs ${isDone ? 'text-slate-600' : 'text-green-100'}`}>
                    💡 <strong>Dica da Cartilha:</strong> {mission.tip}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Perguntas Frequentes sobre Cuidado e Sustentabilidade */}
      <section className="rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400">
              Patrimônio & Meio Ambiente
            </span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Perguntas Frequentes sobre Cuidado com a Escola
            </h2>
          </div>
          <HelpCircle className="h-6 w-6 text-green-500 hidden sm:block" />
        </div>

        <div className="space-y-3">
          {pillar.faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50"
                >
                  <span>{faq.question}</span>
                  <div className="flex items-center gap-2">
                    <SpeechButton text={`${faq.question}: ${faq.answer}`} />
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-green-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-3 leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Vídeos de Cuidado & Sustentabilidade */}
      <section>
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400">
            Multimídia & Consciência Ambiental
          </span>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            Vídeos Sugeridos: Patrimônio Público e Solidariedade
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Assista aos vídeos e debata em grupo como sua turma pode cuidar do verde da escola.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillar.videos.map(vid => (
            <VideoEmbedModal key={vid.id} video={vid} color={pillar.color} />
          ))}
        </div>
      </section>

      {/* Quiz de Cuidado com a Escola (5 perguntas) */}
      <section id="quiz-section">
        <div className="mb-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Desafio da Cidadania: Patrimônio & Solidariedade
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Responda às 5 perguntas e conquiste pontos no portal!
          </p>
        </div>

        <QuizComponent
          pillarId={pillar.id}
          pillarTitle={pillar.title}
          color={pillar.color}
          questions={pillar.quiz}
          onComplete={onCompleteQuiz}
        />
      </section>
    </div>
  );
};
