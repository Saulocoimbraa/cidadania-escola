import React, { useState } from 'react';
import {
  Award,
  Download,
  CheckCircle2,
  Lock,
  Sparkles,
  User,
  GraduationCap,
  HeartHandshake,
  Compass,
  Sprout,
  ArrowLeft,
  Share2,
  BookOpen
} from 'lucide-react';
import jsPDF from 'jspdf';
import { ALL_BADGES } from '../../data/badgesData';
import { SpeechButton } from '../common/SpeechButton';

interface ConquistasViewProps {
  onNavigate: (view: string) => void;
  earnedBadges: string[];
  totalPoints: number;
  progressPercentage: number;
}

export const ConquistasView: React.FC<ConquistasViewProps> = ({
  onNavigate,
  earnedBadges,
  totalPoints,
  progressPercentage
}) => {
  const [studentName, setStudentName] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [gradeYear, setGradeYear] = useState('8º ano');
  const [generatingPdf, setGeneratingPdf] = useState(false);
  const [pdfSuccess, setPdfSuccess] = useState(false);

  const handleGeneratePDF = () => {
    if (!studentName.trim()) {
      alert('Por favor, digite seu nome completo para emitir o certificado!');
      return;
    }

    setGeneratingPdf(true);
    try {
      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const width = doc.internal.pageSize.getWidth();
      const height = doc.internal.pageSize.getHeight();

      // Border Outer
      doc.setDrawColor(25, 118, 210); // #1976D2
      doc.setLineWidth(3);
      doc.rect(8, 8, width - 16, height - 16);

      // Border Inner
      doc.setDrawColor(251, 140, 0); // #FB8C00
      doc.setLineWidth(1);
      doc.rect(12, 12, width - 24, height - 24);

      // Header Brand
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(25, 118, 210);
      doc.text('PORTAL EDUCACIONAL CIDADANIA NA ESCOLA', width / 2, 26, { align: 'center' });
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text('ENSINO FUNDAMENTAL - ANOS FINAIS (11 A 15 ANOS) • CARTILHA INTERATIVA', width / 2, 32, { align: 'center' });

      // Title Certificate
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(30);
      doc.setTextColor(30, 41, 59);
      doc.text('CERTIFICADO JOVEM CIDADÃO', width / 2, 54, { align: 'center' });

      // Body text
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(14);
      doc.setTextColor(71, 85, 105);
      doc.text('Certificamos com honra que', width / 2, 75, { align: 'center' });

      // Student Name
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(24);
      doc.setTextColor(25, 118, 210);
      doc.text(studentName.toUpperCase(), width / 2, 90, { align: 'center' });

      // School context line
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(13);
      doc.setTextColor(51, 65, 85);
      const schoolText = schoolName ? `da escola ${schoolName} (${gradeYear})` : `estudante do Ensino Fundamental (${gradeYear})`;
      const line1 = `${schoolText}, participou ativamente das atividades pedagógicas, reflexões,`;
      const line2 = `desafios interativos e missões dos 4 Pilares da cartilha "Cidadania na Escola":`;
      doc.text(line1, width / 2, 106, { align: 'center' });
      doc.text(line2, width / 2, 114, { align: 'center' });

      // Pillars Pills
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(25, 118, 210);
      doc.text('• EDUCAÇÃO & PROTAGONISMO', 40, 132);
      doc.setTextColor(126, 87, 194);
      doc.text('• RESPEITO & CULTURA DE PAZ', 150, 132);
      doc.setTextColor(251, 140, 0);
      doc.text('• DISCIPLINA & AUTONOMIA', 40, 142);
      doc.setTextColor(67, 160, 71);
      doc.text('• CUIDADO & PATRIMÔNIO PÚBLICO', 150, 142);

      // Date & Progress
      const today = new Date().toLocaleDateString('pt-BR');
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(11);
      doc.setTextColor(100, 114, 130);
      doc.text(`Data de emissão: ${today}  •  Pontuação Acumulada: ${totalPoints} pts  •  Medalhas Conquistadas: ${earnedBadges.length} de ${ALL_BADGES.length}`, width / 2, 162, { align: 'center' });

      // Signatures line
      doc.setDrawColor(150, 150, 150);
      doc.setLineWidth(0.5);
      doc.line(50, 184, 120, 184);
      doc.line(170, 184, 240, 184);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(30, 41, 59);
      doc.text('Professor(a) / Coordenação Pedagógica', 85, 189, { align: 'center' });
      doc.text('Coordenação Cidadania na Escola', 205, 189, { align: 'center' });

      // Footer
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(120, 120, 120);
      doc.text('Referências pedagógicas: MEC • BNCC • UNICEF • UNESCO • Nova Escola • SaferNet • Instituto Ayrton Senna', width / 2, 199, { align: 'center' });

      // Save PDF
      doc.save(`Certificado_Jovem_Cidadao_${studentName.replace(/\s+/g, '_')}.pdf`);
      setPdfSuccess(true);
      setTimeout(() => setPdfSuccess(false), 4000);
    } catch (err) {
      console.error('Erro ao gerar PDF:', err);
      alert('Ocorreu um erro ao gerar seu certificado em PDF. Verifique os campos e tente novamente.');
    } finally {
      setGeneratingPdf(false);
    }
  };

  return (
    <div className="space-y-12 animate-fadeIn">
      {/* Back button */}
      <div>
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar para o Início</span>
        </button>
      </div>

      {/* Hero Conquistas */}
      <section className="rounded-3xl bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 text-white p-6 sm:p-12 shadow-xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="h-4 w-4" />
            <span>Sala de Troféus & Certificação PDF</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">
            Suas Conquistas & Diploma Jovem Cidadão
          </h1>

          <p className="text-base sm:text-lg text-amber-100 leading-relaxed mb-6">
            Acompanhe seu histórico de medalhas no portal, veja sua pontuação acumulada e gere o seu certificado oficial em PDF pronto para imprimir e compartilhar com sua família e professores!
          </p>

          <SpeechButton
            text={`Você já conquistou ${earnedBadges.length} de ${ALL_BADGES.length} medalhas e acumulou ${totalPoints} pontos. Digite seu nome abaixo para emitir o certificado Jovem Cidadão em PDF.`}
            label="Ouvir Resumo de Conquistas"
            size="md"
            variant="white"
          />
        </div>
      </section>

      {/* Painel de Pontuação Geral */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
          <div className="text-3xl sm:text-4xl font-black text-amber-500 mb-1">
            {earnedBadges.length} / {ALL_BADGES.length}
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Medalhas Desbloqueadas
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
          <div className="text-3xl sm:text-4xl font-black text-orange-500 mb-1">
            {totalPoints} pts
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Pontuação Cidadã Acumulada
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
          <div className="text-3xl sm:text-4xl font-black text-blue-600 mb-1">
            {progressPercentage}%
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Progresso Geral da Cartilha
          </div>
        </div>
      </section>

      {/* EMISSÃO DE CERTIFICADO JOVEM CIDADÃO EM PDF */}
      <section className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 p-6 sm:p-10 shadow-lg">
        <div className="max-w-2xl mx-auto space-y-6 text-center sm:text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Documento Oficial de Conclusão
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Emitir Certificado em PDF
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Preencha os dados abaixo para baixar seu diploma com selo de autenticidade da cartilha "Cidadania na Escola".
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                Seu Nome Completo *
              </label>
              <input
                type="text"
                value={studentName}
                onChange={e => setStudentName(e.target.value)}
                placeholder="Ex: Maria Clara Santos Silva"
                className="w-full rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                Nome da sua Escola (Opcional)
              </label>
              <input
                type="text"
                value={schoolName}
                onChange={e => setSchoolName(e.target.value)}
                placeholder="Ex: E.M. Darcy Ribeiro"
                className="w-full rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                Ano Escolar / Turma
              </label>
              <select
                value={gradeYear}
                onChange={e => setGradeYear(e.target.value)}
                className="w-full rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 text-sm font-bold text-slate-700 dark:text-slate-200"
              >
                <option value="6º ano">6º ano</option>
                <option value="7º ano">7º ano</option>
                <option value="8º ano">8º ano</option>
                <option value="9º ano">9º ano</option>
                <option value="Ensino Fundamental - Anos Finais">Ensino Fundamental - Anos Finais (Geral)</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="button"
                onClick={handleGeneratePDF}
                disabled={generatingPdf || !studentName.trim()}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 disabled:opacity-50 text-white font-extrabold text-sm shadow-md transition-all"
              >
                <Download className="h-4 w-4" />
                <span>{generatingPdf ? 'Gerando Certificado...' : 'Baixar Certificado PDF'}</span>
              </button>
            </div>
          </div>

          {pdfSuccess && (
            <div className="p-4 rounded-2xl bg-green-50 dark:bg-green-950/30 border border-green-200 text-green-800 dark:text-green-300 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 animate-fadeIn">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Certificado PDF gerado e baixado com sucesso! Parabéns pela sua dedicação!</span>
            </div>
          )}
        </div>
      </section>

      {/* Galeria de Medalhas da Cartilha */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            Medalhas de Cidadania Disponíveis
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Conclua os quizzes e missões para desbloquear todos os brasões honorários da cartilha!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_BADGES.map(badge => {
            const isUnlocked = earnedBadges.includes(badge.id);

            return (
              <div
                key={badge.id}
                className={`rounded-3xl border-2 p-6 transition-all flex flex-col justify-between ${
                  isUnlocked
                    ? 'bg-white dark:bg-slate-900 border-amber-400 shadow-md'
                    : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`h-14 w-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm ${
                        isUnlocked ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'
                      }`}
                    >
                      {isUnlocked ? '🎖️' : '🔒'}
                    </span>

                    <span
                      className={`text-[11px] font-extrabold uppercase px-3 py-1 rounded-full ${
                        isUnlocked
                          ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300'
                          : 'bg-slate-200 text-slate-500 dark:bg-slate-700'
                      }`}
                    >
                      {isUnlocked ? '✓ Desbloqueada' : 'Bloqueada'}
                    </span>
                  </div>

                  <h3 className="font-black text-lg text-slate-900 dark:text-white mb-1">
                    {badge.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4">
                    {badge.description}
                  </p>
                </div>

                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span>Critério: {badge.progressRequired}</span>
                  <SpeechButton text={`${badge.title}: ${badge.description}. Critério: ${badge.progressRequired}`} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
