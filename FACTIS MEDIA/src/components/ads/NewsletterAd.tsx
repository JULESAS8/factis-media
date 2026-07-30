import React from 'react';
import { SponsoredBadge } from './SponsoredBadge';

interface NewsletterAdProps {
  sponsorName?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  ctaText?: string;
  ctaLink?: string;
}

export const NewsletterAd: React.FC<NewsletterAdProps> = ({
  sponsorName = 'BANQUE COMMERCIALE DU CONGO (EQUITY BCDC)',
  title = 'Découvrez la solution de crédit PME à taux bonifié pour l’agro-business',
  description = 'Accompagnement financier sur-mesure pour les entrepreneurs et coopératives agricoles en RDC. Jusqu’à 100 000 USD de financement immédiat.',
  imageUrl = 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
  ctaText = 'Simuler mon prêt',
  ctaLink = '#',
}) => {
  return (
    <div className="bg-amber-50/70 border border-amber-200/80 p-4 sm:p-5 my-4 font-sans rounded-none shadow-2xs">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-amber-200/60">
        <SponsoredBadge label="Publicité Newsletter" sponsorName={sponsorName} />
        <span className="text-[10px] text-amber-800 font-bold uppercase tracking-wider">
          PARTENAIRE OFFICIEL
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
        <div className="sm:col-span-4 overflow-hidden border border-amber-200 aspect-video bg-slate-900">
          <img
            src={imageUrl}
            alt={title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="sm:col-span-8 space-y-2">
          <h4 className="font-serif font-black text-sm text-slate-900 leading-snug">
            {title}
          </h4>
          <p className="text-xs text-slate-700 leading-relaxed">
            {description}
          </p>
          <div>
            <a
              href={ctaLink}
              onClick={(e) => {
                e.preventDefault();
                alert(`[Newsletter Ad] Clic vers: ${sponsorName}`);
              }}
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded transition-colors cursor-pointer shadow-2xs"
            >
              {ctaText} →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
