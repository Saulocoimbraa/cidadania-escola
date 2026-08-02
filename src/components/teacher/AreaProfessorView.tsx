import React, { useState } from 'react';
import {
  UserCheck,
  BookOpen,
  FileText,
  Clock,
  Award,
  Users,
  CheckCircle2,
  HelpCircle,
  ArrowLeft,
  Sparkles,
  Download,
  Share2
} from 'lucide-react';
import {
  LESSON_PLANS,
  TEACHING_RUBRICS,
  INTERDISCIPLINARY_PROJECTS,
  DEBATE_GUIDES,
  SCHOOL_USAGE_GUIDE
} from '../../data/areaProfessorData';
import { SpeechButton } from '../common/SpeechButton';

interface AreaProfessorViewProps {
  onNavigate: (view: string) => void;
}

export const AreaProfessorView: React.FC<AreaProfessorViewProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'planos' | 'rubricas' | 'projetos' | 'debates' | 'guia'>('planos');

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

      {/* Hero Header Professor */}
      <section className="rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-12 shadow-xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider mb-4">
            <UserCheck className="h-4 w-4" />
            <span>Sala dos Professores • Alinhado à BNCC</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">
            Área do Professor & Planos de Aula BNCC
          </h1>

          <p className="text-base sm:text-lg text-purple-100 leading-relaxed mb-6">
            Recursos pedagógicos prontos para sala de aula: Planos de aula da cartilha com códigos BNCC, rubricas de avaliação socioemocional, roteiros para rodas de debate e projetos interdisciplinares.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('banco-questoes')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-extrabold text-sm shadow-md hover:scale-105 transition-transform"
            >
              <span>Acessar Banco de Questões (40) →</span>
            </button>

            <SpeechButton
              text="Área do Professor: Planos de aula BNCC, rubricas de avaliação socioemocional, roteiros de debate e sugestões de projetos interdisciplinares."
              label="Ouvir Resumo Docente"
              size="md"
              variant="white"
            />
          </div>
        </div>
      </section>

      {/* Abas Pedagógicas */}
      <section className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
        <button
          onClick={() => setActiveTab('planos')}
          className={`px-5 py-3 rounded-2xl font-bold text-sm transition-all ${
            activeTab === 'planos'
              ? 'bg-purple-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
          }`}
        >
          📋 Planos de Aula ({LESSON_PLANS.length})
        </button>

        <button
          onClick={() => setActiveTab('rubricas')}
          className={`px-5 py-3 rounded-2xl font-bold text-sm transition-all ${
            activeTab === 'rubricas'
              ? 'bg-purple-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
          }`}
        >
          📊 Rubricas de Avaliação ({TEACHING_RUBRICS.length})
        </button>

        <button
          onClick={() => setActiveTab('projetos')}
          className={`px-5 py-3 rounded-2xl font-bold text-sm transition-all ${
            activeTab === 'projetos'
              ? 'bg-purple-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
          }`}
        >
          🌱 Projetos Interdisciplinares ({INTERDISCIPLINARY_PROJECTS.length})
        </button>

        <button
          onClick={() => setActiveTab('debates')}
          className={`px-5 py-3 rounded-2xl font-bold text-sm transition-all ${
            activeTab === 'debates'
              ? 'bg-purple-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
          }`}
        >
          🗣️ Roteiros de Debate ({DEBATE_GUIDES.length})
        </button>

        <button
          onClick={() => setActiveTab('guia')}
          className={`px-5 py-3 rounded-2xl font-bold text-sm transition-all ${
            activeTab === 'guia'
              ? 'bg-purple-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
          }`}
        >
          🏫 Guia de Uso na Escola
        </button>
      </section>

      {/* 1. TAB: PLANOS DE AULA */}
      {activeTab === 'planos' && (
        <section className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {LESSON_PLANS.map(plan => (
              <div
                key={plan.id}
                className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full uppercase">
                      Pilar: {plan.pillar}
                    </span>
                    <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {plan.duration}
                      </span>
                      <span>{plan.ageGroup}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">
                    {plan.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {plan.overview}
                  </p>

                  {/* Códigos BNCC */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    {plan.bnccCodes.map(code => (
                      <span
                        key={code}
                        className="text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300"
                      >
                        {code}
                      </span>
                    ))}
                  </div>

                  {/* Objetivos */}
                  <div className="space-y-2 mb-4">
                    <h4 className="font-extrabold text-xs uppercase text-slate-500">
                      Objetivos de Aprendizagem:
                    </h4>
                    <ul className="space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      {plan.objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dinâmica Prática */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                    <h5 className="font-extrabold text-xs uppercase text-purple-700 dark:text-purple-300">
                      Dinâmica da Aula:
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      {plan.activityDetails}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                  <span>Avaliação: {plan.evaluationMethod}</span>
                  <SpeechButton text={`${plan.title}. BNCC: ${plan.bnccCodes.join(', ')}. ${plan.overview}`} />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 2. TAB: RUBRICAS DE AVALIAÇÃO */}
      {activeTab === 'rubricas' && (
        <section className="space-y-6 animate-fadeIn">
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Utilize estas rubricas de observação para avaliar o desenvolvimento socioemocional, a autonomia e o respeito de cada aluno.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TEACHING_RUBRICS.map(rubric => (
              <div
                key={rubric.id}
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full">
                    {rubric.dimension}
                  </span>
                  <SpeechButton text={`${rubric.dimension}. ${rubric.description}`} />
                </div>

                <h3 className="font-black text-lg text-slate-900 dark:text-white">
                  {rubric.dimension}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {rubric.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="p-3 rounded-xl bg-green-50 dark:bg-green-950/30 text-xs">
                    <strong className="text-green-800 dark:text-green-300">🟢 Avançado / Autônomo: </strong>
                    {rubric.levels.advanced}
                  </div>
                  <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 text-xs">
                    <strong className="text-amber-800 dark:text-amber-300">🟡 Em Desenvolvimento: </strong>
                    {rubric.levels.developing}
                  </div>
                  <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/30 text-xs">
                    <strong className="text-red-800 dark:text-red-300">🔴 Precisa de Apoio: </strong>
                    {rubric.levels.needsSupport}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. TAB: PROJETOS INTERDISCIPLINARES */}
      {activeTab === 'projetos' && (
        <section className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INTERDISCIPLINARY_PROJECTS.map(proj => (
              <div
                key={proj.id}
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
                    Disciplinas: {proj.subjects.join(', ')}
                  </span>
                  <SpeechButton text={`${proj.title}. ${proj.description}`} />
                </div>

                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  {proj.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {proj.description}
                </p>
                <div className="p-4 rounded-2xl bg-purple-50 dark:bg-slate-800/60 border border-purple-100 dark:border-slate-700">
                  <span className="font-extrabold text-xs uppercase text-purple-700 dark:text-purple-300 block mb-1">
                    🎯 Produto Final do Aluno:
                  </span>
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    {proj.finalProduct}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. TAB: ROTEIROS DE DEBATE */}
      {activeTab === 'debates' && (
        <section className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DEBATE_GUIDES.map(deb => (
              <div
                key={deb.id}
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full">
                    {deb.topic}
                  </span>
                  <SpeechButton text={`${deb.title}. Questões provocativas: ${deb.guidingQuestions.join('; ')}`} />
                </div>

                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  {deb.title}
                </h3>

                <div className="space-y-2">
                  <h4 className="font-bold text-xs uppercase text-slate-500">
                    Perguntas Norteadoras para a Turma:
                  </h4>
                  <ul className="space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {deb.guidingQuestions.map((q, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-orange-500 font-bold">•</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. TAB: GUIA DE USO NO PORTAL NA ESCOLA */}
      {activeTab === 'guia' && (
        <section className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-6 animate-fadeIn max-w-4xl mx-auto">
          <h3 className="text-2xl font-black text-slate-900 dark:text-white">
            Como implementar o portal "Cidadania na Escola" na sua escola
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {SCHOOL_USAGE_GUIDE.introduction}
          </p>

          <div className="space-y-4 pt-4">
            {SCHOOL_USAGE_GUIDE.steps.map(step => (
              <div key={step.step} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800">
                <span className="h-8 w-8 rounded-xl bg-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0">
                  {step.step}
                </span>
                <div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
