import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  BookOpen,
  Edit3,
  Save,
  Trash2,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
  Quote,
  Share2
} from 'lucide-react';
import { REFLEXOES_DATA } from '../../data/reflexoesData';
import { SpeechButton } from '../common/SpeechButton';

interface ReflexaoViewProps {
  onNavigate: (view: string) => void;
  onSaveReflection?: (promptId: string, promptText: string, userNote: string) => void;
}

interface SavedNote {
  promptId: string;
  text: string;
  date: string;
}

export const ReflexaoView: React.FC<ReflexaoViewProps> = ({ onNavigate, onSaveReflection }) => {
  const [selectedCat, setSelectedCat] = useState('Todos');
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('cidadania_diario_reflexao');
      if (saved) {
        setNotes(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Erro ao carregar diário:', e);
    }
  }, []);

  const handleSaveNote = (promptId: string, promptText: string) => {
    try {
      const noteText = notes[promptId] || '';
      if (!noteText.trim()) {
        alert('Por favor, escreva alguma reflexão antes de salvar!');
        return;
      }
      const updated = { ...notes };
      localStorage.setItem('cidadania_diario_reflexao', JSON.stringify(updated));
      
      if (onSaveReflection) {
        onSaveReflection(promptId, promptText, noteText);
      }

      setSaveSuccess(promptId);
      setTimeout(() => setSaveSuccess(null), 3000);
    } catch (e) {
      console.error('Erro ao salvar nota:', e);
    }
  };

  const handleNoteChange = (promptId: string, value: string) => {
    setNotes(prev => ({ ...prev, [promptId]: value }));
  };

  const categories = ['Todos', 'Empatia', 'Uso de Telas', 'Autonomia', 'Convivência', 'Escola'];

  const filteredPrompts = REFLEXOES_DATA.filter(item => {
    if (selectedCat === 'Todos') return true;
    return item.category.toLowerCase().includes(selectedCat.toLowerCase());
  });

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

      {/* Hero Header Reflexão */}
      <section className="rounded-3xl bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-800 text-white p-6 sm:p-12 shadow-xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquare className="h-4 w-4" />
            <span>Espaço Pense Sobre Isso</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">
            Seu Diário de Cidadania & Reflexão
          </h1>

          <p className="text-base sm:text-lg text-purple-100 leading-relaxed mb-6">
            Pequenos textos e perguntas provocativas inspiradas na cartilha <strong>"Cidadania na Escola"</strong>. Escreva seus pensamentos no diário interativo: eles ficam salvos com segurança no seu navegador!
          </p>

          <SpeechButton
            text="Espaço Pense Sobre Isso: Seu Diário de Cidadania e Reflexão. Leia textos reflexivos da cartilha e responda às perguntas provocativas sobre empatia, uso responsável de telas e autonomia."
            label="Ouvir Introdução do Espaço"
            size="md"
          />
        </div>
      </section>

      {/* Abas de Categorias */}
      <section>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-colors ${
                selectedCat === cat
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50'
              }`}
            >
              💭 {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Cards de Reflexão com Diário */}
      <section className="space-y-8">
        {filteredPrompts.map(prompt => {
          const noteValue = notes[prompt.id] || '';
          const isSaved = saveSuccess === prompt.id;

          return (
            <div
              key={prompt.id}
              className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6"
            >
              {/* Header Reflexão */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full">
                  Tema: {prompt.category}
                </span>
                <SpeechButton
                  text={`Citação: ${prompt.quote}. Pergunta: ${prompt.question}`}
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-snug">
                "{prompt.quote}"
              </h3>

              {/* Texto Citação Cartilha */}
              <div className="p-5 rounded-2xl bg-purple-50/70 dark:bg-slate-800/60 border border-purple-100 dark:border-slate-700 text-sm sm:text-base text-purple-950 dark:text-purple-200 italic leading-relaxed flex items-start gap-3">
                <Quote className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>Reflexão Cidadã — Cartilha Cidadania na Escola</span>
              </div>

              {/* Pergunta Provocativa */}
              <div className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                🤔 {prompt.question}
              </div>

              {/* Área de Diário do Estudante */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400">
                  Sua Resposta e Reflexão Pessoal (Salva no seu navegador):
                </label>
                <textarea
                  rows={4}
                  value={noteValue}
                  onChange={e => handleNoteChange(prompt.id, e.target.value)}
                  placeholder="Escreva aqui sua opinião, o que você faria na sua escola ou um relato de experiência..."
                  className="w-full rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors"
                />

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    {noteValue.length} caracteres
                  </span>

                  <div className="flex items-center gap-2">
                    {isSaved && (
                      <span className="text-xs font-bold text-green-600 dark:text-green-400 flex items-center gap-1 animate-fadeIn">
                        <CheckCircle2 className="h-4 w-4" />
                        Salvo no seu Diário!
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={() => handleSaveNote(prompt.id, prompt.question)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-sm transition-colors"
                    >
                      <Save className="h-3.5 w-3.5" />
                      <span>Salvar Reflexão</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
