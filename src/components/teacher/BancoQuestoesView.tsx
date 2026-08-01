import React, { useState, useMemo } from 'react';
import {
  FileText,
  Search,
  Filter,
  Eye,
  EyeOff,
  Copy,
  Printer,
  CheckCircle2,
  BookOpen,
  ArrowLeft,
  Download,
  Share2
} from 'lucide-react';
import { BANCO_QUESTOES_BNCC } from '../../data/bancoQuestoesData';
import { SpeechButton } from '../common/SpeechButton';

interface BancoQuestoesViewProps {
  onNavigate: (view: string) => void;
}

export const BancoQuestoesView: React.FC<BancoQuestoesViewProps> = ({ onNavigate }) => {
  const [selectedPillar, setSelectedPillar] = useState('Todos');
  const [selectedYear, setSelectedYear] = useState('Todos');
  const [selectedDifficulty, setSelectedDifficulty] = useState('Todos');
  const [selectedType, setSelectedType] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAnswerKey, setShowAnswerKey] = useState<Record<string, boolean>>({});
  const [showAllAnswers, setShowAllAnswers] = useState(false);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const pillarsList = ['Todos', 'Educação', 'Respeito', 'Disciplina', 'Cuidado', 'Geral'];
  const yearsList = ['Todos', '6º ano', '7º ano', '8º ano', '9º ano'];
  const diffsList = ['Todos', 'Fácil', 'Médio', 'Difícil'];
  const typesList = ['Todos', 'objetiva', 'dissertativa', 'situacao-problema'];

  const filteredQuestions = useMemo(() => {
    return BANCO_QUESTOES_BNCC.filter(q => {
      const matchPillar = selectedPillar === 'Todos' || q.pillar === selectedPillar;
      const matchYear = selectedYear === 'Todos' || q.yearGroup === selectedYear;
      const matchDiff = selectedDifficulty === 'Todos' || q.difficulty === selectedDifficulty;
      const matchType = selectedType === 'Todos' || q.type === selectedType;
      const term = searchQuery.toLowerCase().trim();
      const matchSearch =
        !term ||
        q.question.toLowerCase().includes(term) ||
        q.bnccCode.toLowerCase().includes(term) ||
        q.answerKey.toLowerCase().includes(term);
      return matchPillar && matchYear && matchDiff && matchType && matchSearch;
    });
  }, [selectedPillar, selectedYear, selectedDifficulty, selectedType, searchQuery]);

  const toggleAnswer = (id: string) => {
    setShowAnswerKey(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopyQuestion = (q: typeof BANCO_QUESTOES_BNCC[0]) => {
    const text = `QUESTÃO BNCC - Pilar ${q.pillar} (${q.yearGroup} - ${q.bnccCode})
Enunciado: ${q.question}
${q.options ? '\nOpções:\n' + q.options.map((o, i) => `${String.fromCharCode(65 + i)}) ${o}`).join('\n') : ''}
\nGabarito/Chave de Resposta: ${q.answerKey}`;

    navigator.clipboard.writeText(text);
    setCopySuccess(q.id);
    setTimeout(() => setCopySuccess(null), 2500);
  };

  const handlePrintList = () => {
    window.print();
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Back button */}
      <div>
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-purple-600 dark:text-purple-400 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar para o Início</span>
        </button>
      </div>

      {/* Hero Banco de Questões */}
      <section className="rounded-3xl bg-gradient-to-r from-purple-800 via-indigo-800 to-slate-900 text-white p-6 sm:p-12 shadow-xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider mb-4">
            <FileText className="h-4 w-4" />
            <span>Sala dos Professores • 150+ Questões BNCC</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">
            Banco de Questões de Cidadania & BNCC
          </h1>

          <p className="text-base sm:text-lg text-purple-100 leading-relaxed mb-6">
            Mais de 150 questões objetivas, dissertativas e situações-problema alinhadas às competências gerais da BNCC e aos pilares da cartilha. Filtre, copie enunciados ou imprima listas de avaliação em PDF.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowAllAnswers(!showAllAnswers)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 font-bold text-xs transition-colors"
            >
              {showAllAnswers ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              <span>{showAllAnswers ? 'Ocultar Todos os Gabaritos' : 'Exibir Todos os Gabaritos'}</span>
            </button>

            <button
              onClick={handlePrintList}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 font-extrabold text-xs shadow-sm transition-colors"
            >
              <Printer className="h-4 w-4" />
              <span>Imprimir Lista / Gerar PDF</span>
            </button>
          </div>
        </div>
      </section>

      {/* Filtros da BNCC */}
      <section className="space-y-4">
        <div className="relative max-w-lg">
          <Search className="absolute left-4 top-3.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Pesquise por código BNCC, palavra do enunciado ou tema..."
            className="w-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 pl-11 pr-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 shadow-sm"
          />
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Pilar */}
          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Pilar:</label>
            <select
              value={selectedPillar}
              onChange={e => setSelectedPillar(e.target.value)}
              className="w-full rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2.5 text-xs font-bold text-slate-700 dark:text-slate-200"
            >
              {pillarsList.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          {/* Ano Escolar */}
          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Ano Escolar:</label>
            <select
              value={selectedYear}
              onChange={e => setSelectedYear(e.target.value)}
              className="w-full rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2.5 text-xs font-bold text-slate-700 dark:text-slate-200"
            >
              {yearsList.map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>

          {/* Dificuldade */}
          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Dificuldade:</label>
            <select
              value={selectedDifficulty}
              onChange={e => setSelectedDifficulty(e.target.value)}
              className="w-full rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2.5 text-xs font-bold text-slate-700 dark:text-slate-200"
            >
              {diffsList.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Tipo de questão */}
          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Tipo de Questão:</label>
            <select
              value={selectedType}
              onChange={e => setSelectedType(e.target.value)}
              className="w-full rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2.5 text-xs font-bold text-slate-700 dark:text-slate-200"
            >
              {typesList.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Resultados de Questões */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>Exibindo <strong>{filteredQuestions.length}</strong> de {BANCO_QUESTOES_BNCC.length} questões</span>
          <span>BNCC • Cidadania na Escola</span>
        </div>

        {filteredQuestions.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
            <FileText className="mx-auto h-12 w-12 text-slate-300 mb-3" />
            <h3 className="font-bold text-lg text-slate-700 dark:text-slate-300">
              Nenhuma questão encontrada com estes filtros
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Tente redefinir o pilar ou o ano escolar para "Todos".
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredQuestions.map((q, idx) => {
              const showKey = showAllAnswers || showAnswerKey[q.id];
              const isCopied = copySuccess === q.id;

              return (
                <div
                  key={q.id}
                  className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-4"
                >
                  {/* Header do Questão */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                        Q#{idx + 1} • {q.pillar}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        {q.bnccCode}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {q.yearGroup} • {q.difficulty} • {q.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <SpeechButton text={`Questão de cidadania BNCC: ${q.question}`} />

                      <button
                        type="button"
                        onClick={() => handleCopyQuestion(q)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-colors"
                      >
                        {isCopied ? <CheckCircle2 className="h-3.5 w-3.5 text-green-600" /> : <Copy className="h-3.5 w-3.5" />}
                        <span>{isCopied ? 'Copiado!' : 'Copiar'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => toggleAnswer(q.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/40 text-xs font-bold text-purple-700 dark:text-purple-300 transition-colors"
                      >
                        {showKey ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                        <span>{showKey ? 'Ocultar Gabarito' : 'Gabarito'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Enunciado */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
                    {q.question}
                  </h3>

                  {/* Opções (se objetiva) */}
                  {q.options && (
                    <div className="space-y-2 pl-2">
                      {q.options.map((opt, oIdx) => (
                        <div
                          key={oIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                        >
                          <span className="font-bold text-slate-400">
                            {String.fromCharCode(65 + oIdx)})
                          </span>
                          <span>{opt}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Gabarito / Chave de Resposta Docente */}
                  {showKey && (
                    <div className="mt-4 p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 space-y-1 animate-fadeIn">
                      <div className="font-extrabold text-xs text-purple-900 dark:text-purple-300 uppercase tracking-wider">
                        📝 Gabarito / Chave de Avaliação Docente ({q.bnccCode}):
                      </div>
                      <p className="text-xs sm:text-sm text-purple-900 dark:text-purple-200">
                        {q.answerKey}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};
