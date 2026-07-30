import React, { useState } from 'react';
import { ProvinceExetat } from '../types';

interface ExetatWidgetProps {
  provinces: ProvinceExetat[];
}

export const ExetatWidget: React.FC<ExetatWidgetProps> = ({ provinces }) => {
  const [selectedWave, setSelectedWave] = useState<number>(3);
  const [hoveredProv, setHoveredProv] = useState<ProvinceExetat | null>(null);

  const waves = [
    { date: '27 juin', n: '4', status: 'done' },
    { date: '29 juin', n: '7', status: 'done' },
    { date: '1er juil', n: '10', status: 'done' },
    { date: '3 juillet', n: '12', status: 'active' },
    { date: 'À venir', n: '9', status: 'todo' },
  ];

  const declaredCount = provinces.filter((p) => p.proc).length;

  return (
    <section className="bg-white border border-outline-variant p-md md:p-lg mb-xxl rounded-xs shadow-xs">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center pb-md border-b border-outline-variant mb-md gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-secondary text-white text-[11px] font-black uppercase tracking-widest px-2 py-0.5 flex items-center gap-1">
            <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
            En Direct
          </span>
          <h2 className="text-[18px] font-extrabold uppercase font-headline text-primary">
            Exétat 2026, la proclamation
          </h2>
        </div>
        <span className="text-[12px] font-bold text-on-surface-variant">
          Dernière vague · 10 Juillet 2026
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
        {/* Left Map View (6/12) */}
        <div className="lg:col-span-6 bg-surface p-md border border-outline-variant rounded-xs relative">
          <div className="flex justify-between items-center mb-sm">
            <h4 className="font-bold text-[14px] text-primary">Carte des 26 Provinces</h4>
            <div className="flex gap-md text-[11px] font-bold">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 bg-blue-accent rounded-xs"></span> Proclamée
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 bg-outline-variant rounded-xs"></span> En attente
              </span>
            </div>
          </div>

          {/* Interactive Province List Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 h-64 overflow-y-auto pr-1">
            {provinces.map((prov) => (
              <div
                key={prov.name}
                onMouseEnter={() => setHoveredProv(prov)}
                onMouseLeave={() => setHoveredProv(null)}
                className={`p-2 border text-[11px] font-bold rounded-xs cursor-pointer transition-all ${
                  prov.proc
                    ? 'bg-blue-accent/10 border-blue-accent/30 text-primary hover:bg-blue-accent hover:text-white'
                    : 'bg-outline-variant/30 border-outline-variant text-on-surface-variant opacity-60'
                }`}
              >
                <div className="truncate">{prov.name}</div>
                <div className="text-[9px] font-normal opacity-80">
                  {prov.proc ? prov.date : 'En attente'}
                </div>
              </div>
            ))}
          </div>

          {hoveredProv && (
            <div className="mt-2 p-2 bg-primary text-white text-[11px] font-bold rounded-xs flex justify-between items-center">
              <span>{hoveredProv.name}</span>
              <span className="text-gold">{hoveredProv.best || (hoveredProv.proc ? 'Proclamée' : 'En attente')}</span>
            </div>
          )}
        </div>

        {/* Right Stats & Waves Frise (6/12) */}
        <div className="lg:col-span-6 space-y-md flex flex-col justify-between">
          {/* 4 Stats Cards */}
          <div className="grid grid-cols-2 gap-sm">
            <div className="bg-surface p-sm border border-outline-variant">
              <div className="font-sofia font-extrabold text-[22px] text-primary">1 082 742</div>
              <div className="text-[10px] font-bold uppercase text-on-surface-variant">Candidats · 59e édition</div>
            </div>

            <div className="bg-blue-accent/5 p-sm border border-blue-accent/30">
              <div className="font-sofia font-extrabold text-[22px] text-blue-accent">{declaredCount} / 26</div>
              <div className="text-[10px] font-bold uppercase text-primary">Provinces proclamées</div>
            </div>

            <div className="bg-surface p-sm border border-outline-variant">
              <div className="font-sofia font-extrabold text-[22px] text-primary">
                <span className="border-b-2 border-gold font-bold">44,6 %</span>
              </div>
              <div className="text-[10px] font-bold uppercase text-on-surface-variant">Part des filles (national)</div>
            </div>

            <div className="bg-surface p-sm border border-outline-variant">
              <div className="font-sofia font-extrabold text-[22px] text-primary">3 267</div>
              <div className="text-[10px] font-bold uppercase text-on-surface-variant">Centres d'examen</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div>
            <div className="flex justify-between text-[11px] font-bold text-on-surface-variant mb-1">
              <span>Provinces administratives proclamées</span>
              <span>{declaredCount} / 26 (96.2%)</span>
            </div>
            <div className="w-full bg-surface border border-outline-variant h-2.5 overflow-hidden">
              <div
                style={{ width: `${(declaredCount / 26) * 100}%` }}
                className="bg-blue-accent h-full"
              ></div>
            </div>
          </div>

          {/* Waves Frise */}
          <div className="border-t border-outline-variant pt-sm">
            <h5 className="font-bold text-[12px] text-primary mb-sm uppercase">Les vagues de proclamation</h5>
            <div className="grid grid-cols-5 gap-1 text-center">
              {waves.map((w, idx) => {
                const isSelected = selectedWave === idx;
                return (
                  <button
                    key={w.date}
                    onClick={() => setSelectedWave(idx)}
                    className={`p-1 border text-[11px] font-bold rounded-xs transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-blue-accent text-white border-blue-accent'
                        : w.status === 'done'
                          ? 'bg-surface border-blue-accent/30 text-blue-accent'
                          : 'bg-surface border-outline-variant text-on-surface-variant opacity-70'
                    }`}
                  >
                    <div>{w.date}</div>
                    <div className="text-[10px] opacity-80">{w.n} prov.</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Immersion Spotlight Banner */}
      <div className="mt-md bg-blue-accent/5 border-l-4 border-blue-accent p-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md">
        <div>
          <span className="text-blue-accent text-[10px] font-black uppercase tracking-widest block mb-1">
            À LA UNE · IMMERSION
          </span>
          <h3 className="font-headline font-extrabold text-[18px] text-primary">
            Kinshasa-Tshangu : 88 % de réussite en Latin-Philosophie
          </h3>
          <p className="text-[13px] text-on-surface-variant mt-1">
            Le Kinshasa populaire de l'Est ouvre la proclamation et place la filière littéraire au sommet.
          </p>
        </div>

        <button
          onClick={() => alert('Lecture de l\'immersion Kinshasa-Tshangu Exétat 2026')}
          className="bg-blue-accent text-white font-bold text-[12px] uppercase px-4 py-2 hover:bg-primary transition-colors shrink-0 cursor-pointer"
        >
          Lire l'immersion →
        </button>
      </div>
    </section>
  );
};
