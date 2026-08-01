import React, { useState, useMemo } from 'react';
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  Tag,
  ArrowLeft,
  Sparkles
} from 'lucide-react';
import { FAQ_GERAL, FAQ_CATEGORIES } from '../../data/faqData';
import { SpeechButton } from '../common/SpeechButton';

interface FaqGeralViewProps {
  onNavigate: (view: string) => void;
}

export const FaqGeralView: React.FC<FaqGeralViewProps> = ({ onNavigate }) => {
  const [selectedCat, setSelectedCat] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<string | null>('faq-g-1');

  const filteredFaqs = useMemo(() => {
    return FAQ_GERAL.filter(faq => {
      const matchCat = selectedCat === 'Todos' || faq.category === selectedCat;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q) ||
        faq.tags.some(t => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [selectedCat, searchQuery]);

  const toggleAccordion = (id: string) => {
    setOpenIndex(prev => (prev === id ? null : id));
  };

  return (
    <div className="space-y-10 animate-fadeIn">
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

      {/* Header FAQ */}
      <section className="rounded-3xl bg-gradient-to-r from-blue-800 via-indigo-800 to-slate-900 text-white p-6 sm:p-12 shadow-xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="h-4 w-4" />
            <span>Tire Todas as Dúvidas</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">
            Perguntas Frequentes Geral (FAQ Cidadania)
          </h1>

          <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-6">
            Pesquise suas dúvidas sobre Educação, Respeito, Disciplina, Escola, Bullying, Convivência, Direitos, Deveres e Sustentabilidade.
          </p>

          <SpeechButton
            text="Perguntas Frequentes Geral do Portal Cidadania na Escola. Tire suas dúvidas sobre direitos e deveres dos estudantes, convivência, respeito e autonomia."
            label="Ouvir Introdução do FAQ"
            size="md"
          />
        </div>
      </section>

      {/* Filtros e Pesquisa */}
      <section className="space-y-4">
        <div className="relative max-w-lg">
          <Search className="absolute left-4 top-3.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Pesquise por palavra-chave (ex: nota, celular, respeito, lixo)..."
            className="w-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 pl-11 pr-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-sm"
          />
        </div>

        {/* Abas de Categorias */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {FAQ_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-colors ${
                selectedCat === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Lista de Perguntas (Accordions) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
          <span>Exibindo <strong>{filteredFaqs.length}</strong> pergunta(s)</span>
          <span>Categoria: {selectedCat}</span>
        </div>

        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
            <HelpCircle className="mx-auto h-12 w-12 text-slate-300 mb-3" />
            <h3 className="font-bold text-lg text-slate-700 dark:text-slate-300">
              Nenhuma pergunta encontrada
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Tente outra palavra na barra de busca ou selecione "Todos".
            </p>
          </div>
        ) : (
          filteredFaqs.map(faq => {
            const isOpen = openIndex === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-base sm:text-lg text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full flex-shrink-0">
                      {faq.category}
                    </span>
                    <span>{faq.question}</span>
                  </div>

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
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 leading-relaxed animate-fadeIn">
                    <p className="mb-4">{faq.answer}</p>
                    <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                      <Tag className="h-3.5 w-3.5 text-slate-400" />
                      {faq.tags.map(t => (
                        <span
                          key={t}
                          className="text-[11px] font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </section>
    </div>
  );
};
