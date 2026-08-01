import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, HelpCircle, FileText, ArrowRight, Sparkles } from 'lucide-react';
import { SearchResultItem } from '../../types';
import { ALL_PILLARS } from '../../data/cartilhaData';
import { FAQ_GERAL } from '../../data/faqData';
import { BIBLIOTECA_ITEMS } from '../../data/bibliotecaData';
import { BANCO_QUESTOES } from '../../data/bancoQuestoesData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: string, subId?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResultItem[]>([]);

  useEffect(() => {
    if (!query.trim() || query.length < 2) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase().trim();
    const found: SearchResultItem[] = [];

    // Search in Pillars (cartilha content and FAQs)
    ALL_PILLARS.forEach(pillar => {
      if (pillar.title.toLowerCase().includes(q) || pillar.subtitle.toLowerCase().includes(q)) {
        found.push({
          id: `pillar-${pillar.id}`,
          title: `Cartilha: ${pillar.title}`,
          snippet: pillar.subtitle,
          category: 'Pilar da Cartilha',
          urlPath: pillar.id,
          type: 'Pilar'
        });
      }
      pillar.faqs.forEach((faq, i) => {
        if (faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q)) {
          found.push({
            id: `faq-p-${pillar.id}-${i}`,
            title: faq.question,
            snippet: faq.answer.substring(0, 110) + '...',
            category: `FAQ ${pillar.title}`,
            urlPath: pillar.id,
            type: 'FAQ'
          });
        }
      });
    });

    // Search in General FAQs
    FAQ_GERAL.forEach(faq => {
      if (faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q)) {
        found.push({
          id: faq.id,
          title: faq.question,
          snippet: faq.answer.substring(0, 110) + '...',
          category: faq.category,
          urlPath: 'faq-geral',
          type: 'FAQ'
        });
      }
    });

    // Search in Library
    BIBLIOTECA_ITEMS.forEach(item => {
      if (item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)) {
        found.push({
          id: item.id,
          title: `${item.type}: ${item.title}`,
          snippet: item.description,
          category: `Biblioteca • ${item.category}`,
          urlPath: 'biblioteca',
          type: 'Biblioteca'
        });
      }
    });

    // Search in Question Bank
    BANCO_QUESTOES.forEach(qItem => {
      if (qItem.enunciado.toLowerCase().includes(q) || qItem.comentário.toLowerCase().includes(q)) {
        found.push({
          id: qItem.id,
          title: `Questão BNCC #${qItem.num} - ${qItem.tema}`,
          snippet: qItem.enunciado.substring(0, 110) + '...',
          category: qItem.competenciaBNCC,
          urlPath: 'banco-questoes',
          type: 'Banco de Questões'
        });
      }
    });

    setResults(found.slice(0, 12));
  }, [query]);

  if (!isOpen) return null;

  const handleSelect = (item: SearchResultItem) => {
    onNavigate(item.urlPath);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm p-4 pt-16 sm:pt-24 animate-fadeIn">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800">
        {/* Search Input Header */}
        <div className="flex items-center gap-3 p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800">
          <Search className="h-5 w-5 text-slate-400 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Pesquise por respeito, BNCC, bullying, vídeos, questões..."
            autoFocus
            className="w-full bg-transparent text-base font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs font-semibold text-slate-400 hover:text-slate-600 px-2 py-1 rounded-lg"
            >
              Limpar
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Fechar busca"
            className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {query.trim().length < 2 ? (
            <div className="py-8 text-center text-slate-400 text-sm">
              <Sparkles className="mx-auto h-8 w-8 mb-2 opacity-50" />
              Digite pelo menos 2 letras para buscar nos conteúdos da cartilha, biblioteca e banco de questões.
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-slate-500 text-sm">
              Nenhum resultado encontrado para "{query}". Tente palavras como "escola", "respeito" ou "bullying".
            </div>
          ) : (
            results.map(item => (
              <button
                key={item.id}
                onClick={() => handleSelect(item)}
                className="w-full text-left p-3.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700 flex items-start justify-between gap-3 group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2.5 py-0.5 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400">
                      • {item.type}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {item.snippet}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600 flex-shrink-0 self-center" />
              </button>
            ))
          )}
        </div>

        {/* Search Modal Footer */}
        <div className="p-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>Dica: Use as setas e toque para acessar a seção</span>
          <span>{results.length} resultado(s)</span>
        </div>
      </div>
    </div>
  );
};
