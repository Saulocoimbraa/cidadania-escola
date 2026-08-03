import React, { useState } from 'react';
import {
  Compass,
  HelpCircle,
  CheckSquare,
  Calendar as CalendarIcon,
  Clock,
  Plus,
  Trash2,
  CheckCircle2,
  ListTodo,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Quote
} from 'lucide-react';
import { DISCIPLINA_PILLAR } from '../../data/cartilhaData';
import { QuizComponent } from '../common/QuizComponent';
import { VideoEmbedModal } from '../common/VideoEmbedModal';
import { SpeechButton } from '../common/SpeechButton';
import { PillarNavigation } from '../common/PillarNavigation';

interface DisciplinaViewProps {
  onNavigate: (view: string) => void;
  onCompleteQuiz: (score: number, total: number) => void;
}

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
  priority: 'Alta' | 'Média' | 'Normal';
}

export const DisciplinaView: React.FC<DisciplinaViewProps> = ({
  onNavigate,
  onCompleteQuiz
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeToolTab, setActiveToolTab] = useState<'todo' | 'checklist' | 'calendar' | 'weekly'>('todo');
  const pillar = DISCIPLINA_PILLAR;

  // Interactive Todo List state
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: '1', text: 'Revisar anotações de Matemática por 25 minutos', completed: true, priority: 'Alta' },
    { id: '2', text: 'Fazer resumo do capítulo de História e grifar termos', completed: false, priority: 'Média' },
    { id: '3', text: 'Preparar mochila e uniforme para amanhã', completed: false, priority: 'Normal' }
  ]);
  const [newTodoText, setNewTodoText] = useState('');
  const [newTodoPriority, setNewTodoPriority] = useState<'Alta' | 'Média' | 'Normal'>('Média');

  // Daily Checklist state
  const [dailyHabits, setDailyHabits] = useState([
    { id: 'h1', text: 'Dormir no mínimo 8 horas à noite', checked: true },
    { id: 'h2', text: 'Tomar café da manhã antes da escola', checked: true },
    { id: 'h3', text: 'Evitar celular nos 30 minutos antes de estudar', checked: false },
    { id: 'h4', text: 'Beber água durante os intervalos de leitura', checked: true },
    { id: 'h5', text: 'Anotar dúvidas no caderno para perguntar ao professor', checked: false }
  ]);

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => (prev === index ? null : index));
  };

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;
    setTodos(prev => [
      { id: Date.now().toString(), text: newTodoText.trim(), completed: false, priority: newTodoPriority },
      ...prev
    ]);
    setNewTodoText('');
  };

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  const toggleHabit = (id: string) => {
    setDailyHabits(prev =>
      prev.map(h => (h.id === id ? { ...h, checked: !h.checked } : h))
    );
  };

  return (
    <div className="space-y-12 animate-fadeIn">
      {/* Navegação entre Pilares (topo) */}
      <PillarNavigation currentPillarId="disciplina" onNavigate={onNavigate} position="top" />

      {/* Hero Header do Pilar Disciplina (Bold Typography Theme) */}
      <section
        className="relative overflow-hidden rounded-3xl p-6 sm:p-12 text-white shadow-xl border-4 border-[#1976D2]"
        style={{ backgroundColor: pillar.color }}
      >
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
            <Compass className="h-4 w-4" />
            <span>Pilar 3 • Cartilha Cidadania na Escola</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black mb-4 leading-tight uppercase tracking-tight">
            {pillar.title}: Autonomia e Constância para Sua Liberdade
          </h1>

          <p className="text-base sm:text-lg text-orange-100 font-bold leading-relaxed mb-6">
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

      {/* Seção Reflexiva sobre Liberdade ("Texto curto mostrando que disciplina gera liberdade") */}
      <section className="rounded-2xl bg-[#F3E5F5] dark:bg-slate-900 border-2 border-[#E1E8ED] dark:border-slate-800 border-l-8 border-l-[#7E57C2] p-6 sm:p-8 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#5E35B1] dark:text-purple-400">
              Reflexão: Disciplina gera Liberdade • Ensino Fundamental - Anos Finais
            </span>
            <p className="text-lg sm:text-xl font-black text-[#1D1D1D] dark:text-white leading-relaxed italic">
              "A liberdade não é fazer o que dá vontade na hora. Liberdade verdadeira é ter autonomia para ser o autor da sua própria história. Quando você se organiza, cumpre suas tarefas e cuida de si, o tempo livre é seu para aproveitar com paz e tranquilidade."
            </p>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
              — Cartilha Cidadania na Escola
            </p>
          </div>
          <SpeechButton
            text="A liberdade não é fazer o que dá vontade na hora. Liberdade verdadeira é ter autonomia para ser o autor da sua própria história. Quando você se organiza, cumpre suas tarefas e cuida de si, o tempo livre é seu para aproveitar com paz e tranquilidade."
          />
        </div>
      </section>

      {/* Conteúdo da Cartilha */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white">
          Conteúdo da Cartilha: Disciplina & Projeto de Vida
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillar.cartilhaSections.map((sec, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="h-9 w-9 rounded-xl bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 flex items-center justify-center font-bold text-sm">
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
                <div className="mt-4 p-3.5 rounded-2xl bg-orange-50/70 dark:bg-slate-800/60 border border-orange-100 dark:border-slate-700 text-xs font-semibold text-orange-900 dark:text-orange-300 italic">
                  "{sec.highlightQuote}"
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FERRAMENTAS PRÁTICAS DE DISCIPLINA (Lista de Tarefas, Checklist, Calendário, Organizador) */}
      <section className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 p-6 sm:p-8 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
              Kit do Aluno Cidadão
            </span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Ferramentas de Autonomia e Organização
            </h2>
          </div>

          {/* Abas das Ferramentas */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl text-xs font-bold">
            <button
              onClick={() => setActiveToolTab('todo')}
              className={`px-3 py-2 rounded-xl transition-colors ${activeToolTab === 'todo'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700'
                }`}
            >
              📋 Lista de Tarefas
            </button>
            <button
              onClick={() => setActiveToolTab('checklist')}
              className={`px-3 py-2 rounded-xl transition-colors ${activeToolTab === 'checklist'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700'
                }`}
            >
              ✅ Checklist Diário
            </button>
            <button
              onClick={() => setActiveToolTab('weekly')}
              className={`px-3 py-2 rounded-xl transition-colors ${activeToolTab === 'weekly'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700'
                }`}
            >
              📅 Organizador Semanal
            </button>
            <button
              onClick={() => setActiveToolTab('calendar')}
              className={`px-3 py-2 rounded-xl transition-colors ${activeToolTab === 'calendar'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700'
                }`}
            >
              🗓️ Calendário Escolar
            </button>
          </div>
        </div>

        {/* Tab 1: Lista de Tarefas (Todo List Interativa) */}
        {activeToolTab === 'todo' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Anote suas lições, trabalhos e metas diárias. Concluir tarefas no tempo certo traz leveza para a sua semana!
              </p>
              <div className="text-xs font-bold text-orange-600 dark:text-orange-400">
                Concluídas: {todos.filter(t => t.completed).length} de {todos.length}
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleAddTodo} className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="text"
                value={newTodoText}
                onChange={e => setNewTodoText(e.target.value)}
                placeholder="Ex: Fazer exercícios de Ciências páginas 32 a 34..."
                className="flex-1 w-full rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
              />
              <select
                value={newTodoPriority}
                onChange={e => setNewTodoPriority(e.target.value as any)}
                className="w-full sm:w-auto rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3 text-xs font-bold text-slate-700 dark:text-slate-200"
              >
                <option value="Alta">🔴 Alta Prioridade</option>
                <option value="Média">🟡 Média</option>
                <option value="Normal">🟢 Normal</option>
              </select>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 text-sm shadow-sm transition-colors"
              >
                <Plus className="h-4 w-4" />
                <span>Adicionar</span>
              </button>
            </form>

            {/* Todos List */}
            <div className="space-y-2">
              {todos.map(todo => (
                <div
                  key={todo.id}
                  className={`flex items-center justify-between gap-3 p-4 rounded-2xl border transition-colors ${todo.completed
                      ? 'bg-slate-50 dark:bg-slate-800/40 border-slate-100 dark:border-slate-800 opacity-60 line-through'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleTodo(todo.id)}
                    className="flex items-center gap-3 text-left flex-1 font-medium text-sm text-slate-800 dark:text-slate-200"
                  >
                    <div
                      className={`h-5 w-5 rounded-lg border-2 flex items-center justify-center flex-shrink-0 ${todo.completed ? 'bg-orange-500 border-orange-500 text-white' : 'border-slate-300 dark:border-slate-600'
                        }`}
                    >
                      {todo.completed && <CheckCircle2 className="h-4 w-4" />}
                    </div>
                    <span>{todo.text}</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full ${todo.priority === 'Alta'
                          ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                          : todo.priority === 'Média'
                            ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
                            : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                        }`}
                    >
                      {todo.priority}
                    </span>
                    <button
                      type="button"
                      onClick={() => deleteTodo(todo.id)}
                      className="text-slate-400 hover:text-red-500 p-1 rounded-lg"
                      title="Remover"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Checklist Diário de Autonomia */}
        {activeToolTab === 'checklist' && (
          <div className="space-y-4 animate-fadeIn">
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Pequenos hábitos saudáveis praticados todos os dias fortalecem a sua memória e seu bem-estar na escola.
            </p>

            <div className="space-y-2">
              {dailyHabits.map(habit => (
                <button
                  key={habit.id}
                  type="button"
                  onClick={() => toggleHabit(habit.id)}
                  className={`w-full flex items-center gap-3 p-4 rounded-2xl border transition-colors text-left font-medium text-sm ${habit.checked
                      ? 'bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800 text-orange-900 dark:text-orange-200'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200'
                    }`}
                >
                  <div
                    className={`h-5 w-5 rounded-lg border-2 flex items-center justify-center flex-shrink-0 ${habit.checked ? 'bg-orange-500 border-orange-500 text-white' : 'border-slate-300 dark:border-slate-600'
                      }`}
                  >
                    {habit.checked && <CheckCircle2 className="h-4 w-4" />}
                  </div>
                  <span>{habit.text}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Organizador Semanal */}
        {activeToolTab === 'weekly' && (
          <div className="space-y-4 animate-fadeIn">
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-2">
              Distribua suas matérias e horários de estudo na semana para nunca acumular tudo no domingo à noite!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {[
                { day: 'Segunda', task: 'Português & Ciências (40 min)', tip: 'Revisão de aula' },
                { day: 'Terça', task: 'Matemática & Exercícios (45 min)', tip: 'Praticar contas' },
                { day: 'Quarta', task: 'História & Geografia (40 min)', tip: 'Grifar resumo' },
                { day: 'Quinta', task: 'Inglês & Leitura de Livro', tip: 'Vocabulário' },
                { day: 'Sexta', task: 'Revisão Semanal & Lazer!', tip: 'Parabéns!' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-extrabold uppercase text-orange-600 dark:text-orange-400">
                      {item.day}
                    </span>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-1 mb-2">
                      {item.task}
                    </h4>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-white dark:bg-slate-900 px-2 py-1 rounded-lg">
                    💡 {item.tip}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Calendário Escolar */}
        {activeToolTab === 'calendar' && (
          <div className="space-y-4 animate-fadeIn">
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Fique atento às principais datas e bimestres do ano letivo de 2026!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: '1º Bimestre', period: 'Fevereiro a Abril', highlight: 'Início do Grêmio Estudantil & Avaliações' },
                { title: '2º Bimestre', period: 'Maio a Julho', highlight: 'Feira de Ciências & Cidadania' },
                { title: '3º Bimestre', period: 'Agosto a Setembro', highlight: 'Semana da Pátria & Projetos Leitura' },
                { title: '4º Bimestre', period: 'Outubro a Dezembro', highlight: 'Culminância & Formatura Jovem' }
              ].map((bim, i) => (
                <div key={i} className="p-4 rounded-2xl bg-orange-50/60 dark:bg-slate-800 border border-orange-200 dark:border-slate-700">
                  <span className="text-xs font-extrabold text-orange-600 dark:text-orange-400">
                    {bim.period}
                  </span>
                  <h4 className="font-black text-base text-slate-900 dark:text-white mt-1">
                    {bim.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">
                    {bim.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Perguntas Frequentes sobre Disciplina */}
      <section className="rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
              Rotina & Foco
            </span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Perguntas Frequentes sobre Disciplina e Autonomia
            </h2>
          </div>
          <HelpCircle className="h-6 w-6 text-orange-500 hidden sm:block" />
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
                      <ChevronUp className="h-5 w-5 text-orange-600 flex-shrink-0" />
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

      {/* Vídeos de Disciplina */}
      <section>
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
            Multimídia & Estudo
          </span>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            Vídeos Sugeridos: Hábitos, Direitos e Deveres
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Assista nossas sugestões de vídeos e responda os questionamentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillar.videos.map(vid => (
            <VideoEmbedModal key={vid.id} video={vid} color={pillar.color} />
          ))}
        </div>
      </section>

      {/* Quiz de Disciplina */}
      <section id="quiz-section">
        <div className="mb-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Desafio da Cidadania: Disciplina (5 Questões)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Responda e conquiste a medalha "Mestre da Autonomia"!
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

      {/* Navegação entre Pilares (rodapé) */}
      <PillarNavigation currentPillarId="disciplina" onNavigate={onNavigate} position="bottom" />
    </div>
  );
};
