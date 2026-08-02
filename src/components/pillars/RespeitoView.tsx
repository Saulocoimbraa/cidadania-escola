import React, { useState } from 'react';
import {
  HeartHandshake,
  HelpCircle,
  ShieldAlert,
  Sparkles,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  XCircle,
  MessageSquare
} from 'lucide-react';
import { RESPEITO_PILLAR } from '../../data/cartilhaData';
import { QuizComponent } from '../common/QuizComponent';
import { VideoEmbedModal } from '../common/VideoEmbedModal';
import { SpeechButton } from '../common/SpeechButton';
import { PillarNavigation } from '../common/PillarNavigation';

interface RespeitoViewProps {
  onNavigate: (view: string) => void;
  onCompleteQuiz: (score: number, total: number) => void;
}

export const RespeitoView: React.FC<RespeitoViewProps> = ({
  onNavigate,
  onCompleteQuiz
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [dilemmaChoices, setDilemmaChoices] = useState<Record<string, number>>({});
  const pillar = RESPEITO_PILLAR;

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => (prev === index ? null : index));
  };

  const handleSelectDilemma = (storyId: string, optionIndex: number) => {
    setDilemmaChoices(prev => ({ ...prev, [storyId]: optionIndex }));
  };

  return (
    <div className="space-y-12 animate-fadeIn">
      {/* Navegação entre Pilares (topo) */}
      <PillarNavigation currentPillarId="respeito" onNavigate={onNavigate} position="top" />

      {/* Hero Header do Pilar Respeito (Bold Typography Theme) */}
      <section
        className="relative overflow-hidden rounded-3xl p-6 sm:p-12 text-white shadow-xl border-4 border-[#1976D2]"
        style={{ backgroundColor: pillar.color }}
      >
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
            <HeartHandshake className="h-4 w-4" />
            <span>Pilar 2 • Cartilha Cidadania na Escola</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black mb-4 leading-tight uppercase tracking-tight">
            {pillar.title}: Empatia, Diversidade e Cultura de Paz
          </h1>

          <p className="text-base sm:text-lg text-purple-100 font-bold leading-relaxed mb-6">
            {pillar.introduction}
          </p>

          <div className="flex items-center gap-3">
            <SpeechButton
              text={`${pillar.title}: ${pillar.introduction}. ${pillar.cartilhaSections.map(s => s.title + ': ' + s.content).join(' ')}`}
              label="Ouvir Cartilha Completa"
              size="md"
              variant="white"
            />
          </div>
        </div>
      </section>

      {/* Seção "Para Refletir" em destaque */}
      <section className="rounded-2xl bg-[#FFF3E0] dark:bg-slate-900 border-2 border-[#E1E8ED] dark:border-slate-800 border-l-8 border-l-[#FB8C00] p-6 sm:p-8 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#EF6C00] dark:text-orange-400">
              Citação Cidadã • Ensino Fundamental - Anos Finais
            </span>
            <p className="text-lg sm:text-xl font-black text-[#1D1D1D] dark:text-white leading-relaxed italic">
              "Sempre que você olhar para alguém, lembre-se de que ali existe uma história inteira que você ainda não conhece."
            </p>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
              — Cartilha Cidadania na Escola
            </p>
          </div>
          <SpeechButton
            text="Sempre que você olhar para alguém, lembre-se de que ali existe uma história inteira que você ainda não conhece."
          />
        </div>
      </section>

      {/* Conteúdo da Cartilha */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white">
          Conteúdo da Cartilha: Respeito & Empatia
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillar.cartilhaSections.map((sec, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="h-9 w-9 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 flex items-center justify-center font-bold text-sm">
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
                <div className="mt-4 p-3.5 rounded-2xl bg-purple-50/70 dark:bg-slate-800/60 border border-purple-100 dark:border-slate-700 text-xs font-semibold text-purple-900 dark:text-purple-300 italic">
                  "{sec.highlightQuote}"
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* HISTÓRIAS PARA PENSAR (Dilemas Éticos Interativos) */}
      <section className="space-y-6">
        <div className="text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            Dilemas Escolares Interativos
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Histórias para Pensar: O que você faria?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Leia os casos fictícios inspirados na rotina das escolas e escolha sua atitude. Veja a consequência socioemocional!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {pillar.stories?.map(story => {
            const selectedIdx = dilemmaChoices[story.id];

            return (
              <div
                key={story.id}
                className="rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-md border-2 border-slate-100 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full uppercase">
                      Caso Escolar
                    </span>
                    <SpeechButton
                      text={`${story.title}: ${story.context}. ${story.dilemma}`}
                    />
                  </div>

                  <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">
                    {story.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                    {story.context}
                  </p>

                  <div className="font-extrabold text-base text-purple-700 dark:text-purple-300 mb-4 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    <span>{story.dilemma}</span>
                  </div>

                  {/* Opções de Escolha */}
                  <div className="space-y-3 mb-6">
                    {story.options.map((opt, idx) => {
                      const isSelected = selectedIdx === idx;
                      let btnClass =
                        'w-full text-left p-4 rounded-2xl border-2 transition-all text-xs sm:text-sm font-medium flex items-start gap-3 ';

                      if (selectedIdx === undefined) {
                        btnClass += 'border-slate-200 dark:border-slate-700 hover:border-purple-500 hover:bg-purple-50/50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200';
                      } else if (isSelected) {
                        btnClass += opt.isPositive
                          ? 'border-green-500 bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-300 font-bold'
                          : 'border-amber-500 bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 font-bold';
                      } else {
                        btnClass += 'border-slate-100 dark:border-slate-800 opacity-60 text-slate-500';
                      }

                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSelectDilemma(story.id, idx)}
                          className={btnClass}
                        >
                          <span className="h-6 w-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {idx + 1}
                          </span>
                          <span className="flex-1">{opt.text}</span>
                          {isSelected && opt.isPositive && (
                            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                          )}
                          {isSelected && !opt.isPositive && (
                            <XCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Feedback da escolha */}
                {selectedIdx !== undefined && (
                  <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/50 space-y-2 animate-fadeIn">
                    <div className="font-bold text-xs text-purple-900 dark:text-purple-300 flex items-center gap-1.5">
                      <Sparkles className="h-4 w-4 text-purple-600" />
                      Análise Socioemocional & BNCC:
                    </div>
                    <p className="text-xs sm:text-sm text-purple-800 dark:text-purple-200">
                      <strong>Consequência: </strong>
                      {story.options[selectedIdx].consequence}
                    </p>
                    <p className="text-xs text-purple-600 dark:text-purple-300 pt-1 border-t border-purple-200 dark:border-purple-800 italic">
                      <strong>Dica da cartilha: </strong>
                      {story.pedagogicalTip}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Perguntas Frequentes sobre Respeito */}
      <section className="rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Diálogo e Direitos
            </span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Perguntas Frequentes sobre Respeito e Bullying
            </h2>
          </div>
          <HelpCircle className="h-6 w-6 text-purple-500 hidden sm:block" />
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
                      <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" />
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

      {/* Vídeos de Respeito */}
      <section>
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            Multimídia & Convivência
          </span>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            Vídeos Sugeridos: Empatia e Ciberbullying
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Assista e debata em sala com sua turma ou família.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillar.videos.map(vid => (
            <VideoEmbedModal key={vid.id} video={vid} color={pillar.color} />
          ))}
        </div>
      </section>

      {/* Quiz de Respeito (5 perguntas) */}
      <section id="quiz-section">
        <div className="mb-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Desafio da Cidadania: Respeito (5 Questões)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Teste seus conhecimentos sobre combate ao bullying e empatia para ganhar a medalha "Aluno Respeitoso"!
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

      {/* Leitura Complementar (UNICEF, SaferNet, Nova Escola) */}
      <section className="rounded-3xl bg-slate-100 dark:bg-slate-800/60 p-6 sm:p-8">
        <h3 className="font-black text-lg text-slate-900 dark:text-white mb-4">
          Leitura Complementar & Apoio de Segurança
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {pillar.saibaMais.map((ref, i) => (
            <a
              key={i}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-purple-500 transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-purple-600 transition-colors">
                    {ref.name}
                  </span>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-purple-600" />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {ref.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Navegação entre Pilares (rodapé) */}
      <PillarNavigation currentPillarId="respeito" onNavigate={onNavigate} position="bottom" />
    </div>
  );
};
