import React, { useState } from 'react';
import { FactCheck } from '../types';

interface VeriteFactCheckProps {
  factChecks: FactCheck[];
  onOpenSubmitModal: () => void;
}

export const VeriteFactCheck: React.FC<VeriteFactCheckProps> = ({
  factChecks,
  onOpenSubmitModal,
}) => {
  const getBadgeStyle = (verdict: string) => {
    switch (verdict) {
      case 'Faux':
        return 'bg-secondary text-white';
      case 'Trompeur':
        return 'bg-amber-600 text-white';
      case 'Vrai':
        return 'bg-emerald-700 text-white';
      case 'Exagéré':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-primary text-white';
    }
  };

  return (
    <section className="bg-surface border-t-4 border-secondary p-lg mb-xxl rounded-xs shadow-xs">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md mb-lg border-b border-outline-variant pb-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[24px]">verified</span>
            <h2 className="text-[24px] font-extrabold uppercase font-headline tracking-tight text-primary">
              FACTIS Vérité · Fact-Checking
            </h2>
          </div>
          <p className="text-[13px] text-on-surface-variant mt-1">
            Cellule d’investigation, d’analyse de désinformation et de vérification des faits en sources ouvertes.
          </p>
        </div>

        <button
          onClick={onOpenSubmitModal}
          className="bg-primary text-white font-bold text-[12px] uppercase px-4 py-2 hover:bg-secondary transition-colors shrink-0 flex items-center gap-2 cursor-pointer shadow-xs"
        >
          <span className="material-symbols-outlined text-[18px]">send</span>
          Soumettre une affirmation
        </button>
      </div>

      {/* Grid of Fact Checks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        {factChecks.map((fc) => (
          <div
            key={fc.id}
            className="bg-white border border-outline-variant p-md flex flex-col justify-between hover:border-secondary transition-all shadow-xs group"
          >
            <div>
              <span className={`inline-block text-[11px] font-black uppercase px-2.5 py-0.5 mb-md tracking-wider ${getBadgeStyle(fc.verdict)}`}>
                Verdict : {fc.verdict}
              </span>
              <h3 className="font-serif font-bold text-[16px] leading-snug text-primary group-hover:text-secondary transition-colors mb-sm">
                {fc.claim}
              </h3>
              <p className="text-[13px] text-on-surface-variant line-clamp-3 mb-md">
                {fc.excerpt}
              </p>
            </div>

            <div className="border-t border-outline-variant/60 pt-sm text-[11px] font-semibold text-on-surface-variant/80 flex justify-between items-center">
              <span>Source : {fc.source}</span>
              <span>{fc.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
