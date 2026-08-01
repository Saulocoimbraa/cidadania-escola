/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { useProgress } from './hooks/useProgress';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SearchModal } from './components/layout/SearchModal';
import { BadgeModal } from './components/common/BadgeModal';

// Views
import { HomeView } from './components/home/HomeView';
import { EducacaoView } from './components/pillars/EducacaoView';
import { RespeitoView } from './components/pillars/RespeitoView';
import { DisciplinaView } from './components/pillars/DisciplinaView';
import { CuidadoView } from './components/pillars/CuidadoView';
import { BibliotecaView } from './components/library/BibliotecaView';
import { JogosView } from './components/games/JogosView';
import { ReflexaoView } from './components/reflection/ReflexaoView';
import { FaqGeralView } from './components/faq/FaqGeralView';
import { AreaProfessorView } from './components/teacher/AreaProfessorView';
import { BancoQuestoesView } from './components/teacher/BancoQuestoesView';
import { ConquistasView } from './components/certificate/ConquistasView';
import { SobreView } from './components/about/SobreView';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const {
    progress,
    completedMissions,
    toggleMission,
    completeQuiz,
    newUnlockedBadge,
    clearNewBadge,
    earnedBadges,
    totalPoints,
    progressPercentage
  } = useProgress();

  const [currentView, setCurrentView] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '');
    const validViews = [
      'home',
      'educacao',
      'respeito',
      'disciplina',
      'cuidado',
      'biblioteca',
      'jogos',
      'reflexao',
      'faq-geral',
      'professor',
      'banco-questoes',
      'conquistas',
      'sobre'
    ];
    return validViews.includes(hash) ? hash : 'home';
  });

  const [searchModalOpen, setSearchModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setCurrentView(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.location.hash = `#${view}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    switch (currentView) {
      case 'educacao':
        return (
          <EducacaoView
            onNavigate={handleNavigate}
            onCompleteQuiz={(score, total) => completeQuiz('educacao', score, total)}
          />
        );
      case 'respeito':
        return (
          <RespeitoView
            onNavigate={handleNavigate}
            onCompleteQuiz={(score, total) => completeQuiz('respeito', score, total)}
          />
        );
      case 'disciplina':
        return (
          <DisciplinaView
            onNavigate={handleNavigate}
            onCompleteQuiz={(score, total) => completeQuiz('disciplina', score, total)}
          />
        );
      case 'cuidado':
        return (
          <CuidadoView
            onNavigate={handleNavigate}
            completedMissions={completedMissions}
            onToggleMission={toggleMission}
            onCompleteQuiz={(score, total) => completeQuiz('cuidado', score, total)}
          />
        );
      case 'biblioteca':
        return <BibliotecaView onNavigate={handleNavigate} />;
      case 'jogos':
        return (
          <JogosView
            onNavigate={handleNavigate}
            onCompleteQuiz={(score, total) => completeQuiz('jogos', score, total)}
          />
        );
      case 'reflexao':
        return <ReflexaoView onNavigate={handleNavigate} />;
      case 'faq-geral':
        return <FaqGeralView onNavigate={handleNavigate} />;
      case 'professor':
        return <AreaProfessorView onNavigate={handleNavigate} />;
      case 'banco-questoes':
        return <BancoQuestoesView onNavigate={handleNavigate} />;
      case 'conquistas':
        return (
          <ConquistasView
            onNavigate={handleNavigate}
            earnedBadges={earnedBadges}
            totalPoints={totalPoints}
            progressPercentage={progressPercentage}
          />
        );
      case 'sobre':
        return <SobreView onNavigate={handleNavigate} />;
      case 'home':
      default:
        return (
          <HomeView
            onNavigate={handleNavigate}
            progressPercentage={progressPercentage}
            badgesCount={earnedBadges.length}
            totalPoints={totalPoints}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors font-sans selection:bg-blue-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchModalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
        progressPercentage={progressPercentage}
        badgesCount={earnedBadges.length}
        totalPoints={totalPoints}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {renderView()}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Unlocked Badge Celebration Modal */}
      <BadgeModal
        badge={newUnlockedBadge}
        onClose={clearNewBadge}
      />
    </div>
  );
}
