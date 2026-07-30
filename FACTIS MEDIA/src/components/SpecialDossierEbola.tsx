import React, { useState } from 'react';
import { Article, EbolaSnapshot } from '../types';

interface SpecialDossierEbolaProps {
  data: EbolaSnapshot;
  onArticleClick: (article: Article) => void;
}

export const SpecialDossierEbola: React.FC<SpecialDossierEbolaProps> = ({
  data,
  onArticleClick,
}) => {
  const [scrubIndex, setScrubIndex] = useState(data.series.length - 1);
  const [chartMode, setChartMode] = useState<'cumul' | 'nouveaux'>('cumul');
  const [showCfr, setShowCfr] = useState(false);
  const [hoveredProvince, setHoveredProvince] = useState<{ name: string; cas: number } | null>(null);

  const currentPoint = data.series[scrubIndex] || data.series[data.series.length - 1];
  const previousPoint = scrubIndex > 0 ? data.series[scrubIndex - 1] : null;

  const deltaCas = previousPoint ? currentPoint.cas - previousPoint.cas : 0;
  const cfrPercentage = ((currentPoint.deces / currentPoint.cas) * 100).toFixed(1);

  return (
    <section className="bg-white border border-outline-variant p-md md:p-lg mb-xxl rounded-xs shadow-xs">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-md border-b border-outline-variant mb-md">
        <div className="flex items-center gap-2">
          <span className="bg-secondary text-white text-[11px] font-black uppercase tracking-widest px-2.5 py-1">
            Data story · Santé
          </span>
          <span className="text-secondary font-bold text-[12px] flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-secondary rounded-full animate-ping"></span>
            Épidémie en cours
          </span>
        </div>
        <span className="text-[11px] font-semibold text-on-surface-variant">
          MAJ INSP · Bilan au {currentPoint.date}
        </span>
      </div>

      {/* Main Grid: Data Controls + SVG Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
        {/* Left Data Column (7/12) */}
        <div className="lg:col-span-7 space-y-md">
          {/* Scrub Slider Bar */}
          <div className="flex items-center gap-md bg-surface p-sm border border-outline-variant">
            <span className="text-[12px] font-bold text-primary shrink-0">Bilan au</span>
            <input
              type="range"
              min={0}
              max={data.series.length - 1}
              value={scrubIndex}
              onChange={(e) => setScrubIndex(Number(e.target.value))}
              className="w-full accent-secondary cursor-pointer"
            />
            <span className="font-serif font-extrabold text-[15px] text-primary shrink-0 font-sofia">
              {currentPoint.date}
            </span>
          </div>

          {/* Key Metrics Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-sm">
            <div className="bg-surface border border-outline-variant p-sm text-center">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase">Cas confirmés</span>
              <div className="font-serif font-extrabold text-[22px] sm:text-[26px] text-secondary font-sofia leading-tight">
                {currentPoint.cas.toLocaleString('fr-FR')}
              </div>
              <span className="text-[10px] text-on-surface-variant block">
                {deltaCas > 0 ? `+${deltaCas} recensés` : 'Dernier point'}
              </span>
            </div>

            <div className="bg-surface border border-outline-variant p-sm text-center">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase">Décès</span>
              <div className="font-serif font-extrabold text-[22px] sm:text-[26px] text-secondary font-sofia leading-tight">
                {currentPoint.deces.toLocaleString('fr-FR')}
              </div>
              <span className="text-[10px] text-on-surface-variant block">confirmés</span>
            </div>

            <div className="bg-surface border border-outline-variant p-sm text-center">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase">Létalité (CFR)</span>
              <div className="font-serif font-extrabold text-[22px] sm:text-[26px] text-primary font-sofia leading-tight">
                {cfrPercentage}%
              </div>
              <span className="text-[10px] text-on-surface-variant block">moyenne nationale</span>
            </div>

            <div className="bg-surface border border-outline-variant p-sm text-center">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase">Ituri (Épicentre)</span>
              <div className="font-serif font-extrabold text-[22px] sm:text-[26px] text-primary font-sofia leading-tight">
                {Math.round(data.ituriShare * 100)}%
              </div>
              <span className="text-[10px] text-on-surface-variant block">des cas totaux</span>
            </div>
          </div>

          {/* Chart Controls & Visualization Bar */}
          <div className="flex flex-wrap items-center justify-between gap-sm pt-xs">
            <div className="inline-flex border border-outline-variant bg-white rounded-xs overflow-hidden text-[12px] font-bold">
              <button
                onClick={() => setChartMode('cumul')}
                className={`px-3 py-1 cursor-pointer ${
                  chartMode === 'cumul' ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface'
                }`}
              >
                Cumul
              </button>
              <button
                onClick={() => setChartMode('nouveaux')}
                className={`px-3 py-1 cursor-pointer ${
                  chartMode === 'nouveaux' ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface'
                }`}
              >
                Nouveaux cas
              </button>
            </div>

            <button
              onClick={() => setShowCfr(!showCfr)}
              className={`text-[12px] font-bold border px-3 py-1 rounded-xs transition-colors cursor-pointer ${
                showCfr ? 'border-secondary text-secondary bg-secondary/5' : 'border-outline-variant text-on-surface-variant'
              }`}
            >
              {showCfr ? 'Masquer la courbe de létalité' : 'Afficher la létalité %'}
            </button>
          </div>

          {/* CSS Data Bars Simulation */}
          <div className="bg-surface p-md border border-outline-variant space-y-sm">
            <div className="text-[11px] font-bold uppercase text-on-surface-variant mb-xs flex justify-between">
              <span>Évolution récente ({chartMode === 'cumul' ? 'Cas cumulés' : 'Nouveaux cas'})</span>
              {showCfr && <span className="text-secondary font-black">Létalité: {cfrPercentage}%</span>}
            </div>

            <div className="flex items-end gap-1.5 h-32 pt-2 border-b border-outline-variant px-1">
              {data.series.map((pt, i) => {
                const heightPercent = (pt.cas / 3500) * 100;
                const isSelected = i === scrubIndex;
                return (
                  <div
                    key={pt.date}
                    onClick={() => setScrubIndex(i)}
                    className="flex-1 flex flex-col items-center group cursor-pointer"
                  >
                    <div
                      style={{ height: `${Math.max(10, heightPercent)}%` }}
                      className={`w-full transition-all duration-300 ${
                        isSelected ? 'bg-secondary' : 'bg-blue-accent/70 group-hover:bg-blue-accent'
                      }`}
                    ></div>
                    <span className={`text-[9px] font-bold mt-1 ${isSelected ? 'text-secondary font-black' : 'text-on-surface-variant'}`}>
                      {pt.date}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="text-[10px] text-on-surface-variant italic">
              Source officielle: {data.source}
            </p>
          </div>
        </div>

        {/* Right Map & Province Distribution Column (5/12) */}
        <div className="lg:col-span-5 space-y-md border-t lg:border-t-0 lg:border-l border-outline-variant pt-md lg:pt-0 pl-0 lg:pl-lg">
          <div>
            <h4 className="font-bold text-[15px] text-primary">Provinces touchées &amp; Épicentre</h4>
            <span className="text-[11px] text-on-surface-variant block mb-sm">
              Survolez la carte pour voir les détails par zone
            </span>

            {/* Interactive SVG RDC Map */}
            <div className="relative bg-surface p-sm border border-outline-variant rounded-xs">
              <svg viewBox="0 0 300 220" className="w-full h-48 drop-shadow-xs">
                {/* Simplified SVG Provinces */}
                <path
                  d="M40,130 L25,100 L40,80 L75,70 L95,50 L120,60 L130,45 L150,60 L150,85 L130,105 L120,130 Z"
                  fill="#E9E4DB" stroke="#FFF" strokeWidth="1.5"
                />
                <path
                  d="M120,130 L130,105 L150,85 L150,60 L175,70 L185,95 L175,130 L150,150 L120,150 Z"
                  fill="#E9E4DB" stroke="#FFF" strokeWidth="1.5"
                />
                {/* Ituri - Épicentre */}
                <path
                  d="M185,30 L150,35 L150,60 L175,70 L205,50 L215,25 L200,10 Z"
                  fill="#D72638" stroke="#FFF" strokeWidth="2"
                  className="cursor-pointer hover:opacity-85 transition-opacity"
                  onMouseEnter={() => setHoveredProvince({ name: 'Ituri (Épicentre)', cas: 2901 })}
                  onMouseLeave={() => setHoveredProvince(null)}
                />
                {/* Nord-Kivu */}
                <path
                  d="M185,95 L175,70 L150,60 L150,35 L185,30 L205,50 L210,85 Z"
                  fill="#E7B7B0" stroke="#FFF" strokeWidth="1.5"
                  className="cursor-pointer hover:opacity-85 transition-opacity"
                  onMouseEnter={() => setHoveredProvince({ name: 'Nord-Kivu', cas: 314 })}
                  onMouseLeave={() => setHoveredProvince(null)}
                />
                {/* Sud-Kivu */}
                <path
                  d="M175,130 L185,95 L210,85 L220,115 L205,145 L185,140 Z"
                  fill="#E7B7B0" stroke="#FFF" strokeWidth="1.5"
                  className="cursor-pointer hover:opacity-85 transition-opacity"
                  onMouseEnter={() => setHoveredProvince({ name: 'Sud-Kivu', cas: 3 })}
                  onMouseLeave={() => setHoveredProvince(null)}
                />
                {/* Epicenter Marker Dot */}
                <circle cx="192" cy="38" r="4" fill="#F7D618" className="animate-ping" />
                <circle cx="192" cy="38" r="4" fill="#F7D618" />
                <text x="198" y="41" fill="#191C1E" fontSize="9" fontWeight="bold">Bunia</text>
              </svg>

              {/* Hover Tooltip display */}
              {hoveredProvince ? (
                <div className="absolute top-2 left-2 bg-primary text-white text-[11px] font-bold px-2.5 py-1 rounded-xs shadow-md">
                  {hoveredProvince.name} : {hoveredProvince.cas.toLocaleString('fr-FR')} cas
                </div>
              ) : (
                <div className="text-[10px] text-on-surface-variant text-center mt-1">
                  Épicentre actif: Ituri (Bunia &amp; Nia-Nia)
                </div>
              )}
            </div>
          </div>

          {/* Regional Distribution Progress Bars */}
          <div className="space-y-xs pt-xs">
            <h5 className="font-bold text-[13px] text-primary">Répartition des cas par province</h5>
            {data.repartition.map((prov) => (
              <div key={prov.prov} className="space-y-0.5">
                <div className="flex justify-between text-[11px] font-semibold">
                  <span>{prov.prov}</span>
                  <span className="text-on-surface-variant font-sofia">
                    {prov.cas.toLocaleString('fr-FR')} ({(prov.part * 100).toFixed(1)}%)
                  </span>
                </div>
                <div className="w-full bg-outline-variant/60 h-2 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${prov.part * 100}%` }}
                    className="bg-secondary h-full rounded-full"
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-sm">
            <button
              onClick={() => onArticleClick({
                id: 'ebola-doc',
                category: 'Santé & Riposte',
                title: 'Ebola en RDC : 3 262 cas et 1 437 décès confirmés au 26 juillet',
                author: 'La Rédaction',
                date: '28 Juillet 2026',
                imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_Zhq5aO7R1takTKifKOjDYOa_tlYtHeDYAE1jYP9LnkZ9DETmFtInhbOXYFRzZzshULBV5p1NvNaTpDc5dSGaOCx2rvub5syeO1u8TQ5yCOIbJx2yZdgYKPHiRLi8fuL2G6X25V0Kj1zRo4fidQvwdln3R0bV0Jc8LmqhuiKJCctJvoirzbbRAkNmLRXjRLej7LoOPRQ-lePNQ66f-dcQGu8dF1Yl1GaNiZWtKci1y9jJ3eJrkuY5WQ',
                excerpt: 'Le rapport INSP n°073 passe en revue la logistique sanitaire et l\'approvisionnement en vaccins.'
              })}
              className="w-full text-center bg-secondary text-white font-black text-[12px] uppercase py-2 tracking-widest hover:bg-secondary-dark transition-colors cursor-pointer"
            >
              Suivre tout le dossier Ebola →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
