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
  ArrowLeft
} from 'lucide-react';
import { BANCO_QUESTOES_BNCC } from '../../data/bancoQuestoesData';
import { SpeechButton } from '../common/SpeechButton';

interface BancoQuestoesViewProps {
  onNavigate: (view: string) => void;
}

export const BancoQuestoesView: React.FC<BancoQuestoesViewProps> = ({ onNavigate }) => {
  const [selectedPillar, setSelectedPillar] = useState('Todos');
  const [showAnswerKey, setShowAnswerKey] = useState<Record<string, boolean>>({});
  const [showAllAnswers, setShowAllAnswers] = useState(false);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const pillarsList = ['Todos', 'Educação', 'Respeito', 'Disciplina', 'Cuidado'];

  const filteredQuestions = useMemo(() => {
    return BANCO_QUESTOES_BNCC.filter(q => {
      return selectedPillar === 'Todos' || q.pillar === selectedPillar;
    });
  }, [selectedPillar]);

  const toggleAnswer = (id: string) => {
    setShowAnswerKey(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopyQuestion = (q: typeof BANCO_QUESTOES_BNCC[0]) => {
    const text = `QUESTÃO BNCC - Pilar ${q.pillar} (${q.bnccCode})
Enunciado: ${q.question}
Opções:
${q.options.map((o, i) => `${String.fromCharCode(65 + i)}) ${o}`).join('\n')}
\nGabarito/Chave de Resposta: alternativa ${q.answerKey}`;

    navigator.clipboard.writeText(text);
    setCopySuccess(q.id);
    setTimeout(() => setCopySuccess(null), 2500);
  };

  const handlePrintList = () => {
    window.print();
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Injeção de estilo customizado para Impressão */}
      <style>{`
        @media print {
          /* Esconder tudo exceto a área de impressão */
          body * {
            visibility: hidden;
          }
          #print-section, #print-section * {
            visibility: visible;
          }
          #print-section {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white !important;
            color: black !important;
          }
          /* Garantir diagramação perfeita sem cortes */
          .print-question-card {
            page-break-inside: avoid;
            break-inside: avoid;
            margin-bottom: 2rem !important;
            padding-bottom: 1.5rem !important;
            border-bottom: 1px dashed #ccc !important;
          }
          .print-header {
            display: block !important;
            margin-bottom: 2.5rem !important;
            border-bottom: 2px solid black !important;
            padding-bottom: 1rem !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      {/* Voltar (Escondido na impressão por classe nativa ou CSS) */}
      <div className="no-print">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-purple-600 dark:text-purple-400 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar para o Início</span>
        </button>
      </div>

      {/* Hero Banco de Questões (no-print) */}
      <section className="no-print rounded-3xl bg-gradient-to-r from-purple-800 via-indigo-800 to-slate-900 text-white p-6 sm:p-12 shadow-xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider mb-4">
            <FileText className="h-4 w-4" />
            <span>Sala dos Professores • 10 Questões BNCC</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">
            Banco de Questões de Cidadania & BNCC
          </h1>

          <p className="text-base sm:text-lg text-purple-100 leading-relaxed mb-6">
            Banco de questões estruturado com 10 questões de múltipla escolha (4 alternativas cada) alinhadas às competências gerais da BNCC e organizadas pelos pilares do projeto.
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

      {/* Filtro Exclusivo por Tema (no-print) */}
      <section className="no-print p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm">
          <Filter className="h-4 w-4" />
          <span>Filtro por Tema</span>
        </div>
        <div className="max-w-xs">
          <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Selecionar Tema / Pilar:</label>
          <select
            value={selectedPillar}
            onChange={e => setSelectedPillar(e.target.value)}
            className="w-full rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-purple-500"
          >
            {pillarsList.map(p => (
              <option key={p} value={p}>
                {p === 'Todos' ? 'Todos os Temas' : `Pilar: ${p}`}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Área Principal de Exibição e Impressão */}
      <div id="print-section" className="space-y-6">
        
        {/* Cabeçalho exclusivo para Impressão */}
        <div className="hidden print-header space-y-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold uppercase tracking-wide">Avaliação Escolar: Cidadania na Escola</h1>
            <p className="text-sm text-gray-600">Questões de Múltipla Escolha • Alinhadas à BNCC</p>
          </div>
          <div className="grid grid-cols-2 gap-4 border-2 border-black p-4 rounded-lg text-sm mt-4">
            <div><strong>Nome do Estudante:</strong> __________________________________________________</div>
            <div><strong>Data:</strong> ____/____/________</div>
            <div><strong>Turma / Ano:</strong> __________________</div>
            <div><strong>Tema Avaliado:</strong> {selectedPillar === 'Todos' ? 'Todos os Temas da Cartilha' : `Pilar: ${selectedPillar}`}</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 no-print">
          <span>Exibindo <strong>{filteredQuestions.length}</strong> de {BANCO_QUESTOES_BNCC.length} questões</span>
          <span>BNCC • Cidadania na Escola</span>
        </div>

        {filteredQuestions.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 no-print">
            <FileText className="mx-auto h-12 w-12 text-slate-300 mb-3" />
            <h3 className="font-bold text-lg text-slate-700 dark:text-slate-300">
              Nenhuma questão cadastrada para este tema
            </h3>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredQuestions.map((q, idx) => {
              const showKey = showAllAnswers || showAnswerKey[q.id];
              const isCopied = copySuccess === q.id;

              return (
                <div
                  key={q.id}
                  className="print-question-card rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-4"
                >
                  {/* Informações da Questão (ocultadas na impressão para manter limpo, exceto código e tema de apoio) */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3 no-print">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                        Q#{idx + 1} • {q.pillar}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        {q.bnccCode}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        Dificuldade: {q.difficulty}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <SpeechButton text={`Questão ${idx + 1}: ${q.question}`} />

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

                  {/* Enunciado da Questão */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
                    <span className="inline print:inline font-black mr-1 text-purple-600 dark:text-purple-400 print:text-black">
                      Questão {idx + 1}.
                    </span>
                    {q.question}
                    <span className="hidden print:inline text-xs font-bold ml-2 text-gray-500">({q.bnccCode})</span>
                  </h3>

                  {/* 4 Alternativas de Múltipla Escolha */}
                  <div className="space-y-3 pl-2">
                    {q.options.map((opt, oIdx) => (
                      <div
                        key={oIdx}
                        className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 print:text-black"
                      >
                        <span className="h-6 w-6 rounded-full border border-slate-300 dark:border-slate-600 print:border-black flex items-center justify-center font-bold text-xs bg-slate-50 dark:bg-slate-800 print:bg-white text-slate-500 dark:text-slate-400 print:text-black shrink-0">
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span className="pt-0.5">{opt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Gabarito (Escondido na impressão por padrão, a menos que selecionado no modo de impressão) */}
                  {showKey && (
                    <div className="mt-4 p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 print:border-black space-y-1 animate-fadeIn print:bg-white print:text-black">
                      <div className="font-extrabold text-xs text-purple-900 dark:text-purple-300 print:text-black uppercase tracking-wider">
                        📝 Gabarito / Chave Docente:
                      </div>
                      <p className="text-sm font-bold text-purple-900 dark:text-purple-200 print:text-black">
                        Alternativa Correta: {q.answerKey}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
