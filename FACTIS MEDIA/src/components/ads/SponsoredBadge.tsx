import React from 'react';

interface SponsoredBadgeProps {
  label?: string;
  sponsorName?: string;
}

export const SponsoredBadge: React.FC<SponsoredBadgeProps> = ({
  label = 'Sponsorisé',
  sponsorName,
}) => {
  return (
    <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-900 border border-amber-200 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-2xs font-sans">
      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
      <span>{label}</span>
      {sponsorName && (
        <>
          <span className="text-amber-300">•</span>
          <span className="font-semibold text-slate-800">{sponsorName}</span>
        </>
      )}
    </span>
  );
};
