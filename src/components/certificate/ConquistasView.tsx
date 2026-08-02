import React, { useState } from 'react';
import {
  Award,
  Download,
  CheckCircle2,
  Lock,
  GraduationCap,
  HeartHandshake,
  Compass,
  Sprout,
  Crown,
  ArrowLeft,
  Trophy,
  Star
} from 'lucide-react';
import jsPDF from 'jspdf';
import { ALL_BADGES } from '../../data/badgesData';
import { SpeechButton } from '../common/SpeechButton';
import { BadgeTier } from '../../types';
import certificadoTemplate from '../../img/certificado_template.png';

interface ConquistasViewProps {
  onNavigate: (view: string) => void;
  earnedBadges: { id: string; title: string; description: string; color: string; category: string }[];
  totalPoints: number;
  progressPercentage: number;
  badgeTiers?: Record<string, BadgeTier>;
  completedQuizzes?: Record<string, { score: number; total: number }>;
}

// ─── Configuração visual dos tiers ─────────────────────────────────────────
const TIER_CONFIG: Record<BadgeTier, {
  label: string;
  emoji: string;
  bg: string;
  border: string;
  text: string;
  badge: string;
}> = {
  bronze: {
    label: 'Bronze',
    emoji: '🥉',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    border: 'border-amber-400',
    text: 'text-amber-700 dark:text-amber-400',
    badge: 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300'
  },
  prata: {
    label: 'Prata',
    emoji: '🥈',
    bg: 'bg-slate-50 dark:bg-slate-800/60',
    border: 'border-slate-400',
    text: 'text-slate-600 dark:text-slate-300',
    badge: 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200'
  },
  ouro: {
    label: 'Ouro',
    emoji: '🥇',
    bg: 'bg-yellow-50 dark:bg-yellow-950/20',
    border: 'border-yellow-400',
    text: 'text-yellow-700 dark:text-yellow-400',
    badge: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300'
  }
};

// ─── Ícones por pilar ───────────────────────────────────────────────────────
const PILLAR_ICONS: Record<string, React.ElementType> = {
  'badge-educacao': GraduationCap,
  'badge-respeito': HeartHandshake,
  'badge-disciplina': Compass,
  'badge-cuidado': Sprout,
  'badge-lider': Crown
};

// ─── Instruções de como ganhar cada brasão ─────────────────────────────────
const HOW_TO_EARN: Record<string, { action: string; nav: string; navLabel: string }> = {
  'badge-educacao':   { action: 'Faça o Quiz de Educação e acerte ≥ 60%.',   nav: 'educacao',   navLabel: 'Ir para Educação' },
  'badge-respeito':   { action: 'Faça o Quiz de Respeito e acerte ≥ 60%.',   nav: 'respeito',   navLabel: 'Ir para Respeito' },
  'badge-disciplina': { action: 'Faça o Quiz de Disciplina e acerte ≥ 60%.', nav: 'disciplina', navLabel: 'Ir para Disciplina' },
  'badge-cuidado':    { action: 'Faça o Quiz de Cuidado e acerte ≥ 60%.',    nav: 'cuidado',    navLabel: 'Ir para Cuidado' },
  'badge-lider':      { action: 'Conquiste os 4 brasões de pilar.',           nav: 'educacao',   navLabel: 'Começar pelos Pilares' }
};

export const ConquistasView: React.FC<ConquistasViewProps> = ({
  onNavigate,
  earnedBadges,
  totalPoints,
  progressPercentage,
  badgeTiers = {},
  completedQuizzes = {}
}) => {
  const [studentName, setStudentName] = useState('');
  const [generatingPdf, setGeneratingPdf] = useState(false);
  const [pdfSuccess, setPdfSuccess] = useState(false);

  const earnedIds = new Set(earnedBadges.map(b => b.id));

  // Percentual por pilar
  const getPillarPct = (pillarKey: string): number | null => {
    const q = completedQuizzes[pillarKey];
    if (!q) return null;
    return Math.round((q.score / q.total) * 100);
  };

  // ─── Geração do PDF baseado no template ───────────────────────────────────
  const handleGeneratePDF = () => {
    if (!studentName.trim()) {
      alert('Por favor, digite seu nome completo para emitir o certificado!');
      return;
    }
    setGeneratingPdf(true);

    const img = new Image();
    img.src = certificadoTemplate;

    img.onload = () => {
      try {
        const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
        const W = doc.internal.pageSize.getWidth();   // 297mm
        const H = doc.internal.pageSize.getHeight();  // 210mm

        // 1. Desenhar o template de fundo
        doc.addImage(img, 'PNG', 0, 0, W, H);

        // 2. Escrever o Nome do estudante (acima da linha preta do template)
        // Usamos uma fonte bonita e elegante, tamanho 24
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(24);
        doc.setTextColor(25, 118, 210); // Azul chamativo (#1976D2)
        const nameText = studentName.trim().toUpperCase();
        // A linha preta no template fica em torno de Y = 111. Vamos posicionar o texto logo acima dela.
        doc.text(nameText, W / 2, 108, { align: 'center' });

        // 3. Escrever as Conquistas (abaixo do texto do pilar e acima de "Juntos, construimos...")
        // Espaço livre no template fica entre Y = 135 e Y = 160.
        const earnedBadgesForPdf = ALL_BADGES.filter(b => earnedIds.has(b.id));
        if (earnedBadgesForPdf.length > 0) {
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(11);
          doc.setTextColor(80, 80, 80);
          doc.text('CONQUISTAS DESBLOQUEADAS:', W / 2, 142, { align: 'center' });

          const chips = earnedBadgesForPdf.map(b => {
            const tier = badgeTiers[b.id];
            const tierEmoji = tier === 'ouro' ? '🥇' : tier === 'prata' ? '🥈' : tier === 'bronze' ? '🥉' : '★';
            const tierName = tier ? ` (${tier.toUpperCase()})` : '';
            return `${tierEmoji} ${b.title}${tierName}`;
          });

          doc.setFont('helvetica', 'normal');
          doc.setFontSize(10);
          doc.setTextColor(50, 50, 50);
          
          const chipsLine1 = chips.slice(0, 3).join('   •   ');
          const chipsLine2 = chips.slice(3).join('   •   ');
          doc.text(chipsLine1, W / 2, 150, { align: 'center' });
          if (chipsLine2) {
            doc.text(chipsLine2, W / 2, 156, { align: 'center' });
          }
        }

        // 4. Escrever a Data de hoje por cima de "Data: ___/___/____" no rodapé
        // No template, "Data:" fica na parte inferior esquerda. Y = 188.
        const today = new Date().toLocaleDateString('pt-BR');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.setTextColor(50, 50, 50);
        doc.text(today, 84, 187, { align: 'center' });

        doc.save(`Certificado_Estudante_Cidadao_${studentName.replace(/\s+/g, '_')}.pdf`);
        setPdfSuccess(true);
        setTimeout(() => setPdfSuccess(false), 4000);
      } catch (err) {
        console.error('Erro ao gerar PDF:', err);
        alert('Ocorreu um erro ao gerar o certificado. Tente novamente.');
      } finally {
        setGeneratingPdf(false);
      }
    };

    img.onerror = (err) => {
      console.error('Erro ao carregar a imagem do template:', err);
      alert('Não foi possível carregar a imagem do template do certificado.');
      setGeneratingPdf(false);
    };
  };

  return (
    <div className="space-y-12 animate-fadeIn">
      {/* Back */}
      <div>
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar para o Início</span>
        </button>
      </div>

      {/* Hero */}
      <section className="rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white p-6 sm:p-12 shadow-xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider mb-4">
            <Trophy className="h-4 w-4" />
            <span>Sala de Troféus &amp; Certificação</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">
            Suas Conquistas &amp; Diploma
          </h1>
          <p className="text-base sm:text-lg text-amber-100 leading-relaxed mb-6">
            Complete os quizzes dos 4 pilares para conquistar seus brasões e emitir o Certificado Estudante Cidadão em PDF!
          </p>
          <SpeechButton
            text={`Você conquistou ${earnedBadges.length} de ${ALL_BADGES.length} brasões e acumulou ${totalPoints} pontos. Faça os quizzes dos 4 pilares para desbloquear todos os brasões e emitir seu certificado.`}
            label="Ouvir Resumo"
            size="md"
            variant="white"
          />
        </div>
      </section>

      {/* Painel de Pontuação */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
          <div className="text-3xl sm:text-4xl font-black text-amber-500 mb-1">
            {earnedBadges.length} / {ALL_BADGES.length}
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Brasões Desbloqueados</div>
        </div>
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
          <div className="text-3xl sm:text-4xl font-black text-orange-500 mb-1">{totalPoints} pts</div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Pontuação Acumulada</div>
        </div>
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
          <div className="text-3xl sm:text-4xl font-black text-blue-600 mb-1">{progressPercentage}%</div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Progresso Geral</div>
        </div>
      </section>

      {/* ── Galeria de Brasões ────────────────────────────────────────────── */}
      <section className="space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Seus Brasões
          </span>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            Brasões de Cidadania
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Cada brasão tem três tiers: 🥉 Bronze (≥60%) · 🥈 Prata (≥80%) · 🥇 Ouro (≥90%). Faça o quiz e melhore sua nota!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ALL_BADGES.map(badge => {
            const isUnlocked = earnedIds.has(badge.id);
            const tier = badgeTiers[badge.id] as BadgeTier | undefined;
            const tierCfg = tier ? TIER_CONFIG[tier] : null;
            const IconComponent = PILLAR_ICONS[badge.id] || Award;
            const howTo = HOW_TO_EARN[badge.id];

            // Percentual do quiz para pilares
            const pillarKey = badge.id.replace('badge-', '');
            const pct = badge.category !== 'geral' ? getPillarPct(pillarKey) : null;

            // Badge especial Líder
            const isLider = badge.id === 'badge-lider';

            return (
              <div
                key={badge.id}
                className={`rounded-3xl border-2 p-6 transition-all flex flex-col justify-between ${
                  isUnlocked
                    ? `${tierCfg?.bg ?? 'bg-white dark:bg-slate-900'} ${tierCfg?.border ?? 'border-amber-400'} shadow-md`
                    : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800'
                } ${isLider && isUnlocked ? 'ring-2 ring-yellow-400 ring-offset-2' : ''}`}
              >
                <div>
                  {/* Topo: ícone + status */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`h-14 w-14 rounded-2xl flex items-center justify-center shadow-sm ${
                        isUnlocked ? 'text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'
                      }`}
                      style={isUnlocked ? { backgroundColor: badge.color } : undefined}
                    >
                      {isUnlocked
                        ? <IconComponent className="h-7 w-7" />
                        : <Lock className="h-6 w-6" />
                      }
                    </div>

                    {isUnlocked && tier ? (
                      <span className={`text-xs font-extrabold uppercase px-3 py-1 rounded-full ${tierCfg?.badge}`}>
                        {TIER_CONFIG[tier].emoji} {TIER_CONFIG[tier].label}
                      </span>
                    ) : isUnlocked ? (
                      <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-amber-100 text-amber-800">
                        ✓ Conquistado
                      </span>
                    ) : (
                      <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-400">
                        Bloqueado
                      </span>
                    )}
                  </div>

                  {/* Nome */}
                  <h3 className={`font-black text-lg mb-1 ${isUnlocked ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
                    {badge.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                    {badge.description}
                  </p>

                  {/* Barra de progresso do quiz (só para pilares) */}
                  {pct !== null && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-xs font-bold mb-1">
                        <span className="text-slate-500">Sua nota no quiz:</span>
                        <span style={{ color: badge.color }}>{pct}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{ width: `${pct}%`, backgroundColor: badge.color }}
                        />
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                        <span>🥉 60%</span>
                        <span>🥈 80%</span>
                        <span>🥇 90%</span>
                      </div>
                    </div>
                  )}

                  {/* Tiers disponíveis para pilares */}
                  {badge.category !== 'geral' && (
                    <div className="flex gap-1.5 flex-wrap mb-4">
                      {(['bronze', 'prata', 'ouro'] as BadgeTier[]).map(t => (
                        <span
                          key={t}
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                            tier === t
                              ? TIER_CONFIG[t].badge + ' border-transparent'
                              : 'border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500'
                          }`}
                        >
                          {TIER_CONFIG[t].emoji} {TIER_CONFIG[t].label}
                          {t === 'bronze' ? ' ≥60%' : t === 'prata' ? ' ≥80%' : ' ≥90%'}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Rodapé: como ganhar + botão ir */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  {!isUnlocked && howTo && (
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs text-slate-500 dark:text-slate-400 flex-1">
                        👉 {howTo.action}
                      </p>
                      <button
                        onClick={() => onNavigate(howTo.nav)}
                        className="text-xs font-bold px-3 py-1.5 rounded-xl text-white whitespace-nowrap transition-transform hover:scale-105"
                        style={{ backgroundColor: badge.color }}
                      >
                        {howTo.navLabel} →
                      </button>
                    </div>
                  )}
                  {isUnlocked && pct !== null && pct < 90 && (
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs text-slate-500 dark:text-slate-400 flex-1">
                        🔁 Refaça o quiz para subir de tier!
                      </p>
                      <button
                        onClick={() => onNavigate(badge.category as string)}
                        className="text-xs font-bold px-3 py-1.5 rounded-xl text-white whitespace-nowrap transition-transform hover:scale-105"
                        style={{ backgroundColor: badge.color }}
                      >
                        Melhorar →
                      </button>
                    </div>
                  )}
                  {isUnlocked && (pct === null || pct >= 90) && (
                    <div className="flex items-center gap-1.5 text-xs font-bold text-green-600 dark:text-green-400">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>{isLider ? 'Você é um Líder da Cidadania! 🎉' : 'Nível máximo atingido!'}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Emissão do Certificado ────────────────────────────────────────── */}
      <section className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 p-6 sm:p-10 shadow-lg">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Preview do template */}
          <div className="text-center">
            <img
              src={certificadoTemplate}
              alt="Modelo do Certificado Estudante Cidadão"
              className="w-full max-w-lg mx-auto rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-md mb-4"
            />
          </div>

          <div className="text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Documento Oficial de Conclusão
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Emitir Certificado em PDF
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Digite seu nome e baixe o certificado com seus brasões conquistados, fiel ao modelo acima.
            </p>
          </div>

          {/* Formulário simplificado: só nome */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                Seu Nome Completo *
              </label>
              <input
                type="text"
                value={studentName}
                onChange={e => setStudentName(e.target.value)}
                placeholder="Ex: Maria Clara Santos Silva"
                className="w-full rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                onKeyDown={e => e.key === 'Enter' && handleGeneratePDF()}
              />
            </div>

            <button
              type="button"
              onClick={handleGeneratePDF}
              disabled={generatingPdf || !studentName.trim()}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-extrabold text-base shadow-md transition-all hover:shadow-lg hover:scale-[1.02]"
            >
              <Download className="h-5 w-5" />
              <span>{generatingPdf ? 'Gerando Certificado...' : 'Baixar Certificado PDF'}</span>
            </button>
          </div>

          {pdfSuccess && (
            <div className="p-4 rounded-2xl bg-green-50 dark:bg-green-950/30 border border-green-200 text-green-800 dark:text-green-300 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 animate-fadeIn">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Certificado gerado e baixado com sucesso! Parabéns, Estudante Cidadão! 🎉</span>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
