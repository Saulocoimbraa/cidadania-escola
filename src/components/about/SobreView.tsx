import React from 'react';
import {
  BookOpen,
  ArrowLeft,
  Users,
  Award,
  Sparkles,
  GraduationCap,
  HeartHandshake,
  Compass,
  Sprout,
  CheckCircle2,
  Heart
} from 'lucide-react';
import { SpeechButton } from '../common/SpeechButton';
import reginaPhoto from '../../img/regina.jpg';
import deisePhoto from '../../img/deise.jpg';
import sauloPhoto from '../../img/saulo.jpg';

interface SobreViewProps {
  onNavigate: (view: string) => void;
}

export const SobreView: React.FC<SobreViewProps> = ({ onNavigate }) => {
  const authors = [
    {
      name: 'Regina Santos',
      role: 'Idealização & Coordenação Pedagógica',
      photo: reginaPhoto,
      badgeColor: '#1976D2',
      biography: 'Educadora apaixonada pelo desenvolvimento humano e cidadão no ambiente escolar, Regina Santos atua na idealização pedagógica do projeto Cidadania na Escola, integrando práticas socioemocionais e princípios da BNCC para fortalecer o protagonismo juvenil, a empatia e a construção de valores éticos entre estudantes do Ensino Fundamental.'
    },
    {
      name: 'Deise Marroquim',
      role: 'Gestão Educacional & Mediação Escolar',
      photo: deisePhoto,
      badgeColor: '#7E57C2',
      biography: 'Especialista em gestão educacional e mediação de conflitos escolares, Deise Marroquim dedica sua trajetória à criação de ambientes de aprendizagem acolhedores e inclusivos, focando no combate ao bullying, na promoção da cultura de paz e no fortalecimento do diálogo transformador entre alunos, professores e a comunidade escolar.'
    },
    {
      name: 'Saulo Coimbra',
      role: 'Metodologia & Inovação Educacional',
      photo: sauloPhoto,
      badgeColor: '#FB8C00',
      biography: 'Educador e entusiasta de tecnologias educacionais aplicadas à cidadania, Saulo Coimbra atua na estruturação metodológica e interativa do projeto Cidadania na Escola, unindo inovação digital, games educativos e conteúdos acessíveis para engajar adolescentes na vivência prática dos seus direitos, deveres e autonomia.'
    }
  ];

  const projectPillars = [
    {
      id: 'educacao',
      title: 'Educação',
      icon: GraduationCap,
      color: '#1976D2',
      description: 'Protagonismo juvenil, desenvolvimento do raciocínio crítico, projetos de vida e valorização do conhecimento como ferramenta de transformação social.'
    },
    {
      id: 'respeito',
      title: 'Respeito',
      icon: HeartHandshake,
      color: '#7E57C2',
      description: 'Empatia na prática, combate permanente ao bullying e ciberbullying, valorização da diversidade cultural e promoção da cultura de paz nas escolas.'
    },
    {
      id: 'disciplina',
      title: 'Disciplina',
      icon: Compass,
      color: '#FB8C00',
      description: 'Autonomia consciente, autorregulação dos estudos, hábitos saudáveis para corpo e mente e superação da procrastinação.'
    },
    {
      id: 'cuidado',
      title: 'Cuidado & Patrimônio',
      icon: Sprout,
      color: '#43A047',
      description: 'Zelo pelo bem público escolar, responsabilidade socioambiental, economia de recursos e solidariedade com os colegas e funcionários.'
    }
  ];

  return (
    <div className="space-y-12 animate-fadeIn">
      {/* Botão de Voltar */}
      <div>
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar para o Início</span>
        </button>
      </div>

      {/* Hero Banner do Projeto */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-12 shadow-2xl">
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/10">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span>Sobre a Iniciativa</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Projeto Cidadania na Escola
          </h1>

          <p className="text-base sm:text-xl text-blue-100 leading-relaxed font-medium">
            Uma proposta pedagógica e interativa voltada para estudantes do Ensino Fundamental (11 a 15 anos), unindo tecnologia, reflexão ética e desenvolvimento socioemocional para construir escolas mais acolhedoras e cidadãs.
          </p>

          <div className="pt-2">
            <SpeechButton
              text="Projeto Cidadania na Escola. Uma iniciativa pedagógica interativa idealizada para promover a formação cidadã, o respeito mútuo, a autonomia nos estudos e o zelo pelo patrimônio escolar entre adolescentes do Ensino Fundamental."
              label="Ouvir Apresentação do Projeto"
              size="md"
            />
          </div>
        </div>

        {/* Círculos Decorativos no fundo */}
        <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute right-1/3 -top-16 w-60 h-60 rounded-full bg-purple-500/10 blur-2xl pointer-events-none" />
      </section>

      {/* Apresentação do Projeto */}
      <section className="space-y-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
            <BookOpen className="h-7 w-7 text-[#1976D2]" />
            Apresentação do Projeto
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            O <strong>Cidadania na Escola</strong> nasceu da necessidade de conectar os direitos e deveres dos estudantes ao seu cotidiano real. Mais do que transmitir regras, o portal busca despertar a consciência crítica, o respeito à diversidade e o protagonismo jovem por meio de uma linguagem acessível e recursos pedagógicos dinâmicos.
          </p>
        </div>

        {/* Destaques / Objetivos Pedagógicos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-100 dark:border-slate-800 shadow-sm space-y-3">
            <div className="h-10 w-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-[#1976D2] flex items-center justify-center font-bold">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Alinhado à BNCC</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Integra as 10 Competências Gerais da Educação Básica, com foco em responsabilidade, empatia, autoconhecimento, cultura digital e argumentação.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-purple-100 dark:border-slate-800 shadow-sm space-y-3">
            <div className="h-10 w-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-[#7E57C2] flex items-center justify-center font-bold">
              <HeartHandshake className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Formação Humana</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Estimula a empatia, o acolhimento a novos colegas, o diálogo reflexivo e a resolução pacífica de conflitos dentro e fora da sala de aula.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-100 dark:border-slate-800 shadow-sm space-y-3">
            <div className="h-10 w-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-[#FB8C00] flex items-center justify-center font-bold">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Aprendizagem Ativa</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Oferece quizzes interativos, dilemas morais com escolhas orientadas, arcade pedagógico e certificado de conquista para motivar os alunos.
            </p>
          </div>
        </div>

        {/* Pilares do Projeto */}
        <div className="space-y-4 pt-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Estrutura dos 4 Pilares</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projectPillars.map(pilar => {
              const IconComponent = pilar.icon;
              return (
                <div
                  key={pilar.id}
                  onClick={() => onNavigate(pilar.id)}
                  className="group cursor-pointer p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 shadow-sm hover:shadow-md transition-all space-y-3"
                >
                  <div
                    className="h-10 w-10 rounded-xl flex items-center justify-center text-white font-bold transition-transform group-hover:scale-110"
                    style={{ backgroundColor: pilar.color }}
                  >
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {pilar.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pilar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="border-slate-200 dark:border-slate-800" />

      {/* Seção dos Autores */}
      <section className="space-y-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-950/80 px-3.5 py-1.5 text-xs font-bold text-[#1976D2] dark:text-blue-300 uppercase tracking-wider mb-3">
            <Users className="h-4 w-4" />
            <span>Equipe Criadora</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Autores & Idealizadores
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Conheça os profissionais responsáveis pelo planejamento pedagógico, conteúdo e estruturação interativa do projeto Cidadania na Escola.
          </p>
        </div>

        {/* Cards dos Autores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {authors.map((author, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200/80 dark:border-slate-800 p-6 shadow-lg hover:shadow-xl transition-all group hover:-translate-y-1"
            >
              <div className="space-y-5">
                {/* Foto com moldura estilizada */}
                <div className="relative mx-auto w-36 h-36 rounded-full overflow-hidden border-4 shadow-md group-hover:scale-105 transition-transform" style={{ borderColor: author.badgeColor }}>
                  <img
                    src={author.photo}
                    alt={author.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback visual com iniciais se a imagem falhar
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center text-white font-black text-3xl hidden"
                    style={{ backgroundColor: author.badgeColor }}
                  >
                    {author.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>

                {/* Dados e Nome */}
                <div className="text-center space-y-1">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {author.name}
                  </h3>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-white shadow-xs"
                    style={{ backgroundColor: author.badgeColor }}
                  >
                    {author.role}
                  </span>
                </div>

                {/* Mini Biografia em Parágrafo Único */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                    {author.biography}
                  </p>
                </div>
              </div>

              {/* Tag de compromisso pedagógico */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-1.5 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                <span>Autor(a) da Cartilha Cidadania</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seção Call-to-Action / Navegação */}
      <section className="rounded-3xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            Pronto para explorar o conteúdo da cartilha?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Navegue pelos 4 pilares da cidadania, teste seus conhecimentos nos quizzes e acesse materiais exclusivos para educadores.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('educacao')}
            className="px-5 py-2.5 rounded-xl bg-[#1976D2] hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md transition-all"
          >
            Começar pelo Pilar Educação
          </button>
          <button
            onClick={() => onNavigate('professor')}
            className="px-5 py-2.5 rounded-xl bg-[#7E57C2] hover:bg-purple-700 text-white text-xs sm:text-sm font-bold shadow-md transition-all"
          >
            Área do Professor
          </button>
          <button
            onClick={() => onNavigate('biblioteca')}
            className="px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold transition-all"
          >
            Biblioteca Digital
          </button>
        </div>
      </section>
    </div>
  );
};
