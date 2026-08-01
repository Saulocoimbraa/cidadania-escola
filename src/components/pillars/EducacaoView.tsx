import React, { useState } from 'react';
import {
  GraduationCap,
  HelpCircle,
  Play,
  BookOpen,
  ExternalLink,
  Sparkles,
  Award,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Quote
} from 'lucide-react';
import { EDUCAO_PILLAR } from '../../data/cartilhaData';
import { QuizComponent } from '../common/QuizComponent';
import { VideoEmbedModal } from '../common/VideoEmbedModal';
import { SpeechButton } from '../common/SpeechButton';

interface EducacaoViewProps {
  onNavigate: (view: string) => void;
  onCompleteQuiz: (score: number, total: number) => void;
}

export const EducacaoView: React.FC<EducacaoViewProps> = ({
  onNavigate,
  onCompleteQuiz
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const pillar = EDUCAO_PILLAR;

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => (prev === index ? null : index));
  };

  return (
    <div className="space-y-12 animate-fadeIn">
      {/* Back button */}
      <div>
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar para o Início</span>
        </button>
      </div>

      {/* Hero Header do Pilar Educação (Bold Typography Theme) */}
      <section
        className="relative overflow-hidden rounded-3xl p-6 sm:p-12 text-white shadow-xl border-4 border-[#1976D2]"
        style={{ backgroundColor: pillar.color }}
      >
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
            <GraduationCap className="h-4 w-4" />
            <span>Pilar 1 • Cartilha Cidadania na Escola</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black mb-4 leading-tight uppercase tracking-tight">
            {pillar.title}: O Poder de Aprender e Transformar
          </h1>

          <p className="text-base sm:text-lg text-blue-100 font-bold leading-relaxed mb-6">
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

      {/* Seção "Para Refletir" (Texto reflexivo em destaque) */}
      <section className="rounded-2xl bg-[#E8F5E9] dark:bg-slate-900 border-2 border-[#E1E8ED] dark:border-slate-800 border-l-8 border-l-[#43A047] p-6 sm:p-8 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="hidden sm:flex h-12 w-12 rounded-2xl bg-[#43A047] text-white items-center justify-center flex-shrink-0 font-black">
            <Quote className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-[#2E7D32] dark:text-green-400">
                Para Refletir • Ensino Fundamental - Anos Finais
              </span>
              <SpeechButton
                text="Aprender não significa apenas tirar boas notas. Aprender é desenvolver habilidades para resolver problemas, trabalhar em equipe e transformar a realidade."
              />
            </div>
            <p className="text-lg sm:text-xl font-black text-[#1D1D1D] dark:text-white leading-relaxed italic">
              "Aprender não significa apenas tirar boas notas. Aprender é desenvolver habilidades para resolver problemas, trabalhar em equipe e transformar a realidade."
            </p>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
              — Cartilha Cidadania na Escola
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo da Cartilha (3 seções) */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white">
          Conteúdo da Cartilha: Educação & Cidadania
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillar.cartilhaSections.map((sec, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="h-9 w-9 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold text-sm">
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
                <div className="mt-4 p-3.5 rounded-2xl bg-blue-50/70 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700 text-xs font-semibold text-blue-900 dark:text-blue-300 italic">
                  "{sec.highlightQuote}"
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Perguntas Frequentes (FAQ com Accordion) */}
      <section className="rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Tire Suas Dúvidas
            </span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Perguntas Frequentes sobre Educação
            </h2>
          </div>
          <HelpCircle className="h-6 w-6 text-blue-500 hidden sm:block" />
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
                      <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
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

      {/* Vídeos Sugeridos (YouTube com perguntas para debate) */}
      <section>
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Multimídia & Sala de Aula
          </span>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            Vídeos Sugeridos para Debate
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Assista aos vídeos selecionados para a faixa etária de 11 a 15 anos e responda às perguntas de reflexão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillar.videos.map(vid => (
            <VideoEmbedModal key={vid.id} video={vid} color={pillar.color} />
          ))}
        </div>
      </section>

      {/* Desafio / Quiz da Educação */}
      <section id="quiz-section">
        <div className="mb-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Desafio da Cidadania: Educação
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Responda ao quiz interativo, verifique o comentário pedagógico e conquiste a medalha "Campeão da Educação"!
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

      {/* Saiba Mais / Referências Confiáveis */}
      <section className="rounded-3xl bg-slate-100 dark:bg-slate-800/60 p-6 sm:p-8">
        <h3 className="font-black text-lg text-slate-900 dark:text-white mb-4">
          Saiba Mais: Referências Bibliográficas & Instituições Confiáveis
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillar.saibaMais.map((ref, i) => (
            <a
              key={i}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {ref.name}
                  </span>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-600" />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {ref.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};
