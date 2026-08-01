import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Video,
  FileText,
  Headphones,
  ExternalLink,
  Search,
  Filter,
  Clock,
  UserCheck,
  ArrowLeft,
  Sparkles
} from 'lucide-react';
import { BIBLIOTECA_ITEMS, BIBLIOTECA_CATEGORIES } from '../../data/bibliotecaData';
import { SpeechButton } from '../common/SpeechButton';

interface BibliotecaViewProps {
  onNavigate: (view: string) => void;
}

export const BibliotecaView: React.FC<BibliotecaViewProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedType, setSelectedType] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const typesList = ['Todos', 'Livro', 'Vídeo', 'Artigo', 'Podcast'];

  const filteredItems = useMemo(() => {
    return BIBLIOTECA_ITEMS.filter(item => {
      const matchCat = selectedCategory === 'Todos' || item.category === selectedCategory;
      const matchType = selectedType === 'Todos' || item.type === selectedType;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.authorOrSource.toLowerCase().includes(q);
      return matchCat && matchType && matchSearch;
    });
  }, [selectedCategory, selectedType, searchQuery]);

  const typeIconMap: Record<string, React.ElementType> = {
    Livro: BookOpen,
    Vídeo: Video,
    Artigo: FileText,
    Podcast: Headphones
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

      {/* Header da Biblioteca */}
      <section className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white p-6 sm:p-12 shadow-xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="h-4 w-4" />
            <span>Biblioteca Cidadã • Aprenda Mais</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">
            Biblioteca Aprenda Mais: Livros, Vídeos, Artigos e Podcasts
          </h1>

          <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-6">
            Aprofunde seus estudos sobre Cidadania, Cultura de Paz, Meio Ambiente e Direitos Humanos com curadoria especial para estudantes de 11 a 15 anos e professores.
          </p>

          <SpeechButton
            text="Biblioteca Aprenda Mais: Livros, vídeos, artigos e podcasts com curadoria especial para estudantes de 11 a 15 anos e educadores."
            label="Ouvir Introdução da Biblioteca"
            size="md"
          />
        </div>
      </section>

      {/* Barra de Filtros & Busca */}
      <section className="space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-3.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Pesquise por título, autor, assunto ou faixa etária..."
              className="w-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 pl-11 pr-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-sm"
            />
          </div>

          {/* Abas de Tipos (Livros, Vídeos...) */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl text-xs font-bold">
            {typesList.map(t => (
              <button
                key={t}
                onClick={() => setSelectedType(t)}
                className={`px-3 py-2 rounded-xl transition-colors ${
                  selectedType === t
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Abas de Categorias */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('Todos')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-colors ${
              selectedCategory === 'Todos'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50'
            }`}
          >
            🌟 Todas as Categorias
          </button>

          {BIBLIOTECA_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid de Itens da Biblioteca */}
      <section>
        <div className="flex items-center justify-between mb-4 text-xs text-slate-500 dark:text-slate-400">
          <span>Exibindo <strong>{filteredItems.length}</strong> de {BIBLIOTECA_ITEMS.length} referências</span>
          <span>Filtro ativo: {selectedCategory} • {selectedType}</span>
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
            <BookOpen className="mx-auto h-12 w-12 text-slate-300 mb-3" />
            <h3 className="font-bold text-lg text-slate-700 dark:text-slate-300">
              Nenhum material encontrado
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Tente selecionar outra categoria ou remover os filtros de pesquisa.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => {
              const IconComp = typeIconMap[item.type] || BookOpen;

              return (
                <div
                  key={item.id}
                  className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Categoria + Tipo */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                        <IconComp className="h-3.5 w-3.5" />
                        {item.type}
                      </span>
                    </div>

                    <h3 className="font-black text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                      {item.title}
                    </h3>

                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                      Fonte/Autor: {item.authorOrSource}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    {/* Faixa Etária e Tempo */}
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800 mb-4">
                      <span className="flex items-center gap-1 font-semibold text-green-700 dark:text-green-400">
                        <UserCheck className="h-3.5 w-3.5" />
                        {item.ageGroup}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {item.readingTime}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <SpeechButton
                        text={`${item.title}. Categoria: ${item.category}. ${item.description}`}
                      />
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs text-white shadow-sm hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: item.color }}
                      >
                        <span>Acessar Material</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Nota de transparência sobre os links externos */}
      <section className="rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 p-4 sm:p-6 text-amber-900 dark:text-amber-200 text-xs sm:text-sm flex items-start gap-3">
        <Sparkles className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-bold text-amber-950 dark:text-amber-100">
            Transparência & Acesso às Fontes
          </h4>
          <p className="leading-relaxed">
            Os links externos desta biblioteca direcionam para os portais de busca e páginas oficiais das instituições parceiras (UNICEF, Nova Escola, Canal Futura, SaferNet, UNESCO, MEC, Plenarinho, etc.). Materiais específicos podem requerer pesquisa interna no portal de origem.
          </p>
        </div>
      </section>
    </div>
  );
};
