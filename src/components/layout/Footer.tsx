import React from 'react';
import { ShieldAlert, ExternalLink, Heart, BookOpen, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#1D1D1D] text-slate-300 pt-8 pb-10 border-t-4 border-[#1976D2] mt-16 shadow-lg">
      {/* Bold Typography Reflection Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 mb-8 border-b border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 px-6 rounded-2xl bg-white/5 border border-white/10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[#FB8C00] font-black text-sm uppercase tracking-tighter">Pense sobre isso:</span>
            <p className="italic font-bold text-gray-200 text-sm">
              "Você gostaria de ser tratado da forma como trata seus colegas?"
            </p>
          </div>
          <button
            onClick={() => onNavigate('reflexao')}
            className="text-xs font-bold text-[#1976D2] dark:text-blue-400 hover:underline uppercase tracking-wider whitespace-nowrap"
          >
            Ver Mais Reflexões →
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Sobre */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-black text-lg">
              <BookOpen className="h-6 w-6 text-blue-500" />
              <span>Cidadania na Escola</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Portal educacional interativo fundamentado na cartilha <strong>"Cidadania na Escola"</strong>, idealizado para estudantes do Ensino Fundamental - Anos Finais (11 a 15 anos), educadores e famílias.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('conquistas')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xs shadow-md hover:opacity-90 transition-opacity"
              >
                <Award className="h-3.5 w-3.5" />
                <span>Emitir Certificado Jovem Cidadão</span>
              </button>
            </div>
          </div>

          {/* Col 2: Pilares da Cartilha */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Os 4 Pilares
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => onNavigate('educacao')} className="hover:text-blue-400 transition-colors">
                  📚 Educação & Protagonismo
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('respeito')} className="hover:text-purple-400 transition-colors">
                  🤝 Respeito & Combate ao Bullying
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('disciplina')} className="hover:text-orange-400 transition-colors">
                  🧭 Disciplina & Autonomia
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cuidado')} className="hover:text-green-400 transition-colors">
                  🌱 Cuidado com a Escola e Pessoas
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Seções Especiais */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Explorar
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => onNavigate('sobre')} className="hover:text-blue-400 transition-colors font-semibold">
                  ℹ️ Sobre o Projeto & Autores
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('biblioteca')} className="hover:text-blue-400 transition-colors">
                  📖 Biblioteca "Aprenda Mais"
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('jogos')} className="hover:text-orange-400 transition-colors">
                  🎮 Arcade & Jogos Educativos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('reflexao')} className="hover:text-blue-400 transition-colors">
                  💭 Espaço de Reflexão
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq-geral')} className="hover:text-blue-400 transition-colors">
                  ❓ Perguntas Frequentes Geral
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('professor')} className="hover:text-purple-400 transition-colors font-semibold">
                  👨‍🏫 Área do Professor & Rubricas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('banco-questoes')} className="hover:text-purple-400 transition-colors font-semibold">
                  📝 Banco de Questões (BNCC)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Apoio & Denúncia Segura (SaferNet / Disque 100) */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <ShieldAlert className="h-4 w-4 text-amber-500" />
              Canais de Proteção
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Sofreu ou presenciou ciberbullying ou violência escolar? Você não está sozinho!
            </p>
            <div className="space-y-2">
              <a
                href="https://new.safernet.org.br/denuncie"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-white font-bold transition-colors"
              >
                <span>SaferNet - Denúncia Segura</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <div className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-900/60 text-xs text-amber-300">
                <strong>Disque 100:</strong> Direitos Humanos e proteção à infância/adolescência (gratuito e anônimo).
              </div>
            </div>
          </div>
        </div>

        {/* Footer Credits */}
        <div className="pt-8 border-t border-slate-800 text-center sm:flex sm:items-center sm:justify-between text-xs text-slate-400 gap-4">
          <div>
            <p className="font-bold text-slate-300">
              © 2026 Cidadania na Escola • CGDE - GRE Metropolitana Norte
            </p>
            <p className="text-[11px] text-slate-400 mt-1">
              Desenvolvido e idealizado por: <strong>Regina Santos</strong>, <strong>Deise Marroquim</strong> e <strong>Saulo Coimbra</strong>
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 mt-4 sm:mt-0">
            <span className="flex items-center gap-1 text-slate-400">
              Desenvolvido com <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500 inline" /> para a educação pública
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
