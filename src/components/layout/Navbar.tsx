import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  Award,
  Sun,
  Moon,
  Sparkles,
  Gamepad2,
  GraduationCap,
  HeartHandshake,
  Compass,
  Sprout,
  HelpCircle,
  Menu,
  X,
  FileText,
  UserCheck,
  Palette
} from 'lucide-react';
import { PilarId } from '../../types';
import { ThemeMode } from '../../hooks/useTheme';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenSearch: () => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
  progressPercentage: number;
  badgesCount: number;
  totalPoints: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenSearch,
  theme,
  onToggleTheme,
  progressPercentage,
  badgesCount,
  totalPoints
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pillarsDropdownOpen, setPillarsDropdownOpen] = useState(false);

  const pillarsList = [
    { id: 'educacao', title: 'Educação', icon: GraduationCap, color: '#1976D2' },
    { id: 'respeito', title: 'Respeito', icon: HeartHandshake, color: '#7E57C2' },
    { id: 'disciplina', title: 'Disciplina', icon: Compass, color: '#FB8C00' },
    { id: 'cuidado', title: 'Cuidado & Escola', icon: Sprout, color: '#43A047' }
  ];

  const handleNav = (view: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    setPillarsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-slate-900 border-b-4 border-[#1976D2] dark:border-blue-500 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1976D2] text-white font-black text-2xl shadow-sm group-hover:scale-105 transition-transform">
              C
            </div>
            <div>
              <span className="block font-black text-lg sm:text-xl tracking-tight text-[#1976D2] dark:text-blue-400 leading-tight uppercase">
                Cidadania na Escola
              </span>
              <span className="block text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                11 a 15 anos • Cartilha Interativa
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 font-bold text-xs uppercase tracking-widest text-[#555] dark:text-slate-300">
            <button
              onClick={() => handleNav('home')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                currentView === 'home'
                  ? 'text-[#1976D2] dark:text-blue-400 font-black bg-[#1976D2]/10 dark:bg-blue-500/10'
                  : 'hover:text-[#1976D2] dark:hover:text-blue-400'
              }`}
            >
              Início
            </button>

            {/* Pilares Dropdown */}
            <div className="relative" onMouseLeave={() => setPillarsDropdownOpen(false)}>
              <button
                onMouseEnter={() => setPillarsDropdownOpen(true)}
                onClick={() => setPillarsDropdownOpen(!pillarsDropdownOpen)}
                className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 ${
                  ['educacao', 'respeito', 'disciplina', 'cuidado'].includes(currentView)
                    ? 'text-[#1976D2] dark:text-blue-400 font-black bg-[#1976D2]/10 dark:bg-blue-500/10'
                    : 'hover:text-[#1976D2] dark:hover:text-blue-400'
                }`}
              >
                <span>Os 4 Pilares</span>
                <span className="text-[10px]">▼</span>
              </button>

              {pillarsDropdownOpen && (
                <div className="absolute left-0 top-full mt-1 w-60 rounded-2xl bg-white dark:bg-slate-800 p-2 shadow-2xl border-2 border-[#1976D2]/30 dark:border-slate-700 space-y-1 animate-fadeIn">
                  {pillarsList.map(p => {
                    const IconComp = p.icon;
                    return (
                      <button
                        key={p.id}
                        onClick={() => handleNav(p.id)}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-colors"
                      >
                        <span className="h-7 w-7 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: p.color }}>
                          <IconComp className="h-4 w-4" />
                        </span>
                        <span>{p.title}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav('biblioteca')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                currentView === 'biblioteca'
                  ? 'text-[#1976D2] dark:text-blue-400 font-black bg-[#1976D2]/10 dark:bg-blue-500/10'
                  : 'hover:text-[#1976D2] dark:hover:text-blue-400'
              }`}
            >
              Biblioteca
            </button>

            <button
              onClick={() => handleNav('jogos')}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                currentView === 'jogos'
                  ? 'text-[#FB8C00] dark:text-orange-400 font-black bg-[#FB8C00]/10 dark:bg-orange-500/10'
                  : 'hover:text-[#FB8C00] dark:hover:text-orange-400'
              }`}
            >
              <Gamepad2 className="h-4 w-4 text-[#FB8C00]" />
              <span>Jogos</span>
            </button>

            <button
              onClick={() => handleNav('reflexao')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                currentView === 'reflexao'
                  ? 'text-[#1976D2] dark:text-blue-400 font-black bg-[#1976D2]/10 dark:bg-blue-500/10'
                  : 'hover:text-[#1976D2] dark:hover:text-blue-400'
              }`}
            >
              Reflexão
            </button>

            <button
              onClick={() => handleNav('faq-geral')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                currentView === 'faq-geral'
                  ? 'text-[#1976D2] dark:text-blue-400 font-black bg-[#1976D2]/10 dark:bg-blue-500/10'
                  : 'hover:text-[#1976D2] dark:hover:text-blue-400'
              }`}
            >
              FAQ
            </button>

            <button
              onClick={() => handleNav('sobre')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                currentView === 'sobre'
                  ? 'text-[#1976D2] dark:text-blue-400 font-black bg-[#1976D2]/10 dark:bg-blue-500/10'
                  : 'hover:text-[#1976D2] dark:hover:text-blue-400'
              }`}
            >
              Sobre
            </button>

            <button
              onClick={() => handleNav('professor')}
              className="px-3.5 py-1.5 bg-[#7E57C2] text-white rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-[#673AB7] shadow-sm transition-all flex items-center gap-1.5"
            >
              <UserCheck className="h-3.5 w-3.5" />
              <span>Área do Professor</span>
            </button>
          </nav>

          {/* Utility Buttons: Search, Theme, Progress Badge */}
          <div className="flex items-center gap-2">
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              aria-label="Buscar no portal"
              title="Busca inteligente"
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
            >
              <Search className="h-4 w-4" />
              <span className="hidden md:inline">Buscar...</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label="Alternar tema (claro, escuro ou pastel)"
              title={`Tema atual: ${theme}`}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors flex items-center justify-center"
            >
              {theme === 'light' && <Moon className="h-4 w-4 text-slate-700" />}
              {theme === 'dark' && <Palette className="h-4 w-4 text-amber-400" />}
              {theme === 'pastel' && <Sun className="h-4 w-4 text-orange-500" />}
            </button>

            {/* Achievements/Certificate Badge */}
            <button
              onClick={() => handleNav('conquistas')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold text-xs shadow-sm hover:scale-105 transition-all"
            >
              <Award className="h-4 w-4" />
              <span className="hidden sm:inline">Conquistas</span>
              <span className="bg-white/20 px-1.5 py-0.5 rounded-full">{badgesCount}</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Persistent Student Progress Bar under Navbar */}
        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-1">
          <div
            className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 transition-all duration-700"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-6 space-y-2 shadow-2xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {pillarsList.map(p => {
              const IconComp = p.icon;
              return (
                <button
                  key={p.id}
                  onClick={() => handleNav(p.id)}
                  className="flex items-center gap-2 p-3 rounded-2xl text-white font-bold text-xs shadow-sm"
                  style={{ backgroundColor: p.color }}
                >
                  <IconComp className="h-4 w-4" />
                  <span>{p.title}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => handleNav('home')}
            className="w-full text-left px-4 py-3 rounded-xl font-bold text-sm text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            🏠 Início (Home)
          </button>
          <button
            onClick={() => handleNav('biblioteca')}
            className="w-full text-left px-4 py-3 rounded-xl font-bold text-sm text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            📚 Biblioteca "Aprenda Mais"
          </button>
          <button
            onClick={() => handleNav('jogos')}
            className="w-full text-left px-4 py-3 rounded-xl font-bold text-sm text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2"
          >
            <Gamepad2 className="h-4 w-4 text-orange-500" />
            <span>Jogos & Quiz (Arcade)</span>
          </button>
          <button
            onClick={() => handleNav('reflexao')}
            className="w-full text-left px-4 py-3 rounded-xl font-bold text-sm text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            💭 Espaço de Reflexão
          </button>
          <button
            onClick={() => handleNav('faq-geral')}
            className="w-full text-left px-4 py-3 rounded-xl font-bold text-sm text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            ❓ Perguntas Frequentes (FAQ)
          </button>
          <button
            onClick={() => handleNav('sobre')}
            className="w-full text-left px-4 py-3 rounded-xl font-bold text-sm text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            ℹ️ Sobre o Projeto & Autores
          </button>
          <button
            onClick={() => handleNav('professor')}
            className="w-full text-left px-4 py-3 rounded-xl font-bold text-sm text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-950/30 border border-purple-200 dark:border-purple-800"
          >
            👨‍🏫 Área do Professor & Aulas
          </button>
          <button
            onClick={() => handleNav('banco-questoes')}
            className="w-full text-left px-4 py-3 rounded-xl font-bold text-sm text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-950/30 border border-purple-200 dark:border-purple-800"
          >
            📝 Banco de Questões (150+ BNCC)
          </button>
          <button
            onClick={() => handleNav('conquistas')}
            className="w-full text-left px-4 py-3 rounded-xl font-bold text-sm text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30 border border-amber-200 dark:border-amber-800"
          >
            🎖️ Conquistas & Certificado PDF
          </button>
        </div>
      )}
    </header>
  );
};
