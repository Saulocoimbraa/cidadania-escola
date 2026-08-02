import React from 'react';
import {
  GraduationCap,
  HeartHandshake,
  Compass,
  Sprout,
  ArrowRight,
  BookOpen,
  Award,
  Sparkles,
  Gamepad2,
  HelpCircle,
  MessageCircle,
  UserCheck,
  CheckCircle2,
  Play
} from 'lucide-react';
import { ALL_PILLARS } from '../../data/cartilhaData';
import { SpeechButton } from '../common/SpeechButton';
import bgMain from '../../img/bg-main.jpg';
import imgEducacao from '../../img/edu.png';
import imgRespeito from '../../img/respeito.png';
import imgDisciplina from '../../img/disciplina.png';
import imgCuidado from '../../img/cuidado.png';

interface HomeViewProps {
  onNavigate: (view: string) => void;
  progressPercentage: number;
  badgesCount: number;
  totalPoints: number;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  progressPercentage,
  badgesCount,
  totalPoints
}) => {
  const iconsMap: Record<string, React.ElementType> = {
    GraduationCap,
    HeartHandshake,
    Compass,
    Sprout
  };

  // Imagem de fundo dos cartões dos pilares
  // Para ativar: importe o PNG e substitua undefined pelo caminho, ex: `url(${imgEducacao})`
  // import imgEducacao from '../../img/pillar-educacao.png'; (adicionar no topo do arquivo)
  const pillarBgImage: { [key: string]: string | undefined } = {
    educacao: undefined,
    respeito: undefined,
    disciplina: undefined,
    cuidado: undefined,
  };

  return (
    <div className="space-y-12 sm:space-y-16 animate-fadeIn">
      {/* 1. Hero Banner Principal (Bold Typography Theme) */}
      <section
        className="relative overflow-hidden rounded-3xl border-4 border-[#1976D2] dark:border-blue-500 p-6 sm:p-12 shadow-xl bg-white dark:bg-slate-900"
        style={{ backgroundImage: `url(${bgMain})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Overlay para garantir leitura do texto */}
        <div className="absolute inset-0 bg-white/85 dark:bg-slate-900/90 z-0 pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="bg-[#FB8C00] text-white text-xs font-bold px-3.5 py-1.5 rounded-full w-fit uppercase tracking-wider shadow-sm">
            Ensino Fundamental - Anos Finais • 11 a 15 anos
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.9] text-[#1D1D1D] dark:text-white tracking-tight">
            TRANSFORME <br />
            <span className="text-[#1976D2] dark:text-blue-400">SUA ESCOLA</span>
          </h1>

          <p className="text-lg text-slate-700 dark:text-slate-300 font-bold max-w-xl leading-relaxed">
            Uma plataforma interativa, gamificada e acolhedora baseada na cartilha <strong>"Cidadania na Escola"</strong>. Descubra seus direitos e deveres, combata o bullying, desenvolva sua autonomia e transforme sua comunidade escolar!
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('educacao')}
              className="bg-[#43A047] text-white px-8 py-4 rounded-xl font-bold text-lg sm:text-xl shadow-[0_6px_0_#2E7D32] hover:translate-y-1 hover:shadow-none transition-all uppercase tracking-wider"
            >
              COMEÇAR AGORA
            </button>

            <button
              onClick={() => onNavigate('jogos')}
              className="border-2 border-[#1976D2] dark:border-blue-400 text-[#1976D2] dark:text-blue-400 px-6 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-[#1976D2]/10 transition-all uppercase tracking-wider"
            >
              VER CARTILHA & JOGOS
            </button>

            <SpeechButton
              text="Bem-vindo à Cidadania na Escola: Seu espaço de conhecimento e transformação. Uma plataforma interativa, gamificada e acolhedora baseada na cartilha Cidadania na Escola. Explore os quatro pilares: Educação, Respeito, Disciplina e Cuidado com a Escola."
              label="Ouvir Apresentação"
              size="md"
            />
          </div>

          {/* Progress Widget matching Design HTML */}
          <div className="mt-8 bg-[#F0F4F8] dark:bg-slate-800/80 p-5 rounded-2xl border-2 border-[#E1E8ED] dark:border-slate-700 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 bg-[#1976D2] flex items-center justify-center text-white text-xs font-bold">✓</div>
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 bg-[#43A047] flex items-center justify-center text-white text-xs font-bold">★</div>
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 bg-[#7E57C2] flex items-center justify-center text-white text-xs font-bold">♥</div>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">STATUS DO ESTUDANTE</p>
                <p className="font-black text-[#1D1D1D] dark:text-white text-sm sm:text-base">Cartilha Interativa • Cidadania Ativa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Objetivos da Cartilha (Bold Typography Theme) */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-black text-[#1D1D1D] dark:text-white mb-3 tracking-tight">
          POR QUE FALAR DE CIDADANIA NA ESCOLA?
        </h2>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-semibold max-w-2xl mx-auto mb-8">
          A escola é a sua comunidade! Aqui não aprendemos apenas matérias no caderno, mas também a conviver com empatia, respeitar a diversidade, argumentar sem agredir e cuidar dos bens que pertencem a todos nós.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-[#E1E8ED] dark:border-slate-800 shadow-sm hover:border-[#1976D2] transition-colors">
            <div className="h-11 w-11 rounded-xl bg-[#E3F2FD] dark:bg-blue-950 text-[#1976D2] dark:text-blue-400 flex items-center justify-center font-black text-lg mb-4 border border-[#1976D2]/20">
              01
            </div>
            <h3 className="font-black text-base text-[#1D1D1D] dark:text-white mb-2 uppercase tracking-wide">PROTAGONISMO JUVENIL</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
              Você não é apenas um ouvinte: suas ideias têm força para mudar o clima da sala de aula.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-[#E1E8ED] dark:border-slate-800 shadow-sm hover:border-[#7E57C2] transition-colors">
            <div className="h-11 w-11 rounded-xl bg-[#F3E5F5] dark:bg-purple-950 text-[#7E57C2] dark:text-purple-400 flex items-center justify-center font-black text-lg mb-4 border border-[#7E57C2]/20">
              02
            </div>
            <h3 className="font-black text-base text-[#1D1D1D] dark:text-white mb-2 uppercase tracking-wide">CULTURA DE PAZ</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
              Combate diário ao bullying e ao ciberbullying através da empatia e da escuta mútua.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-[#E1E8ED] dark:border-slate-800 shadow-sm hover:border-[#43A047] transition-colors">
            <div className="h-11 w-11 rounded-xl bg-[#E8F5E9] dark:bg-green-950 text-[#43A047] dark:text-green-400 flex items-center justify-center font-black text-lg mb-4 border border-[#43A047]/20">
              03
            </div>
            <h3 className="font-black text-base text-[#1D1D1D] dark:text-white mb-2 uppercase tracking-wide">PATRIMÔNIO & VIDA</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
              O que é público é nosso! Sustentabilidade e zelo com nossa segunda casa.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Os Quatro Pilares da Cartilha (Cartões Principais) */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Conteúdo Central
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Os 4 Pilares da Cidadania na Escola
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Clique em cada pilar para acessar a cartilha completa, vídeos, dilemas e desafios!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ALL_PILLARS.map(pillar => {
            const IconComponent = iconsMap[pillar.badgeIcon] || BookOpen;

            // Map pillar to Design HTML colors and border-b-8
            const isEducacao = pillar.id === 'educacao';
            const isRespeito = pillar.id === 'respeito';
            const isDisciplina = pillar.id === 'disciplina';
            const isCuidado = pillar.id === 'cuidado';

            const bgClass = isEducacao
              ? 'bg-[#E8F5E9] dark:bg-slate-900/90 border-[#43A047]'
              : isRespeito
                ? 'bg-[#FFF3E0] dark:bg-slate-900/90 border-[#FB8C00]'
                : isDisciplina
                  ? 'bg-[#F3E5F5] dark:bg-slate-900/90 border-[#7E57C2]'
                  : 'bg-[#E3F2FD] dark:bg-slate-900/90 border-[#1976D2]';

            const titleColorClass = isEducacao
              ? 'text-[#2E7D32] dark:text-green-400'
              : isRespeito
                ? 'text-[#EF6C00] dark:text-orange-400'
                : isDisciplina
                  ? 'text-[#5E35B1] dark:text-purple-400'
                  : 'text-[#1565C0] dark:text-blue-400';

            return (
              <div
                key={pillar.id}
                onClick={() => onNavigate(pillar.id)}
                className={`group relative overflow-hidden rounded-3xl ${bgClass} border-2 border-b-8 p-8 pr-36 sm:pr-44 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer flex flex-col justify-between`}
              >
                {/* Imagem decorativa do pilar */}
                {isEducacao && (
                  <img src={imgEducacao} alt="Personagem Educação" className="absolute bottom-0 right-0 h-full max-h-52 sm:max-h-64 w-auto object-contain object-bottom pointer-events-none select-none z-0 opacity-95" />
                )}
                {isRespeito && (
                  <img src={imgRespeito} alt="Personagem Respeito" className="absolute bottom-0 right-0 h-full max-h-52 sm:max-h-64 w-auto object-contain object-bottom pointer-events-none select-none z-0 opacity-95" />
                )}
                {isDisciplina && (
                  <img src={imgDisciplina} alt="Personagem Disciplina" className="absolute bottom-0 right-0 h-full max-h-52 sm:max-h-64 w-auto object-contain object-bottom pointer-events-none select-none z-0 opacity-95" />
                )}
                {isCuidado && (
                  <img src={imgCuidado} alt="Personagem Cuidado" className="absolute bottom-0 right-0 h-full max-h-52 sm:max-h-64 w-auto object-contain object-bottom pointer-events-none select-none z-0 opacity-95" />
                )}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-md group-hover:scale-110 transition-transform font-black"
                      style={{ backgroundColor: pillar.color }}
                    >
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <span
                      className="text-xs font-black px-3 py-1 rounded-full text-white tracking-wide uppercase"
                      style={{ backgroundColor: pillar.color }}
                    >
                      Pilar {ALL_PILLARS.indexOf(pillar) + 1}
                    </span>
                  </div>

                  <h3 className={`text-2xl sm:text-3xl font-black ${titleColorClass} mb-2 tracking-tight`}>
                    {pillar.title.toUpperCase()}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-bold leading-relaxed mb-6">
                    {pillar.subtitle}
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between pt-4 border-t border-slate-300/60 dark:border-slate-800">
                  <span className="text-xs font-extrabold text-slate-600 dark:text-slate-400 flex items-center gap-1.5 uppercase tracking-wider">
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                    Cartilha • FAQ • Vídeos • Quiz
                  </span>

                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-black group-hover:translate-x-1 transition-transform uppercase tracking-wider"
                    style={{ color: pillar.color }}
                  >
                    <span>Explorar Pilar</span>
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Student Progress Dashboard Bar (Bold Typography Theme) */}
      <section className="rounded-3xl bg-[#1D1D1D] dark:bg-slate-900 border-4 border-[#1976D2] dark:border-blue-500 text-white p-6 sm:p-10 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Award className="h-3.5 w-3.5" />
              <span>Seu Progresso no Portal</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black">
              Você já concluiu {progressPercentage}% das atividades cidadãs!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Conquiste medalhas nos quizzes de Educação, Respeito, Disciplina e Cuidado para emitir seu <strong>Certificado Jovem Cidadão</strong> em PDF.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-center px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-black text-amber-400">{badgesCount} / 5</div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-300">Medalhas</div>
            </div>

            <button
              onClick={() => onNavigate('conquistas')}
              className="rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 px-6 py-3.5 font-bold text-slate-900 shadow-lg hover:scale-105 transition-transform whitespace-nowrap"
            >
              Ver Conquistas & Diploma →
            </button>
          </div>
        </div>
      </section>

      {/* 5. Acesso Rápido a Seções Interativas */}
      <section>
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6 text-center sm:text-left">
          Mais Recursos Interativos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            onClick={() => onNavigate('biblioteca')}
            className="group p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between"
          >
            <div>
              <div className="h-10 w-10 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center font-bold mb-3">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                Biblioteca "Aprenda Mais"
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Livros, vídeos, artigos e podcasts por faixa etária (11-15 anos).
              </p>
            </div>
            <span className="text-xs font-bold text-blue-600 mt-4 inline-flex items-center gap-1">
              Acessar Biblioteca →
            </span>
          </button>

          <button
            onClick={() => onNavigate('jogos')}
            className="group p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between"
          >
            <div>
              <div className="h-10 w-10 rounded-2xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center font-bold mb-3">
                <Gamepad2 className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-orange-600 transition-colors">
                Arcade da Cidadania
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Caça-palavras, quiz, jogo da memória e blitz de cidadania.
              </p>
            </div>
            <span className="text-xs font-bold text-orange-600 mt-4 inline-flex items-center gap-1">
              Jogar Agora →
            </span>
          </button>

          <button
            onClick={() => onNavigate('reflexao')}
            className="group p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between"
          >
            <div>
              <div className="h-10 w-10 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center font-bold mb-3">
                <MessageCircle className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-purple-600 transition-colors">
                Espaço "Pense Sobre Isso"
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Reflexões diárias e diário pessoal de cidadania para estudantes.
              </p>
            </div>
            <span className="text-xs font-bold text-purple-600 mt-4 inline-flex items-center gap-1">
              Refletir Agora →
            </span>
          </button>

          <button
            onClick={() => onNavigate('professor')}
            className="group p-5 rounded-3xl bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between"
          >
            <div>
              <div className="h-10 w-10 rounded-2xl bg-purple-600 text-white flex items-center justify-center font-bold mb-3">
                <UserCheck className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base text-purple-900 dark:text-purple-200 group-hover:text-purple-600 transition-colors">
                Sala dos Professores
              </h3>
              <p className="text-xs text-purple-700 dark:text-purple-300 mt-1">
                Planos de aula BNCC, rubricas de avaliação, debates e 40 questões.
              </p>
            </div>
            <span className="text-xs font-bold text-purple-700 dark:text-purple-300 mt-4 inline-flex items-center gap-1">
              Área Docente →
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};
