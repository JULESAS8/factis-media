import React from 'react';
import { SponsoredBadge } from './SponsoredBadge';

interface InArticleAdProps {
  id?: string;
  brandName?: string;
  title?: string;
  sponsorDescription?: string;
  imageUrl?: string;
  ctaText?: string;
}

export const InArticleAd: React.FC<InArticleAdProps> = ({
  id = 'in-article-1',
  brandName = 'RAWBANK & VODACOM',
  title = 'Solution de paiement IllicoCash pour entreprises et particuliers en RDC',
  sponsorDescription = 'Ouvrez votre compte professionnel en 5 minutes avec Rawbank et bénéficiez de frais réduits sur tous vos virements interbancaires en RDC.',
  imageUrl = 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
  ctaText = 'Découvrir IllicoCash',
}) => {
  return (
    <div
      id={`in-article-ad-${id}`}
      className="my-8 p-5 sm:p-6 bg-white border border-slate-200 rounded-lg shadow-sm hover:border-slate-300 transition-all font-sans relative overflow-hidden group"
    >
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
        <SponsoredBadge label="Sponsorisé" sponsorName={brandName} />
        <span className="text-[10px] text-slate-400 font-mono">Annonce In-Article</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
        {/* Left Thumbnail */}
        <div className="sm:col-span-5 overflow-hidden rounded-md border border-slate-100 aspect-video bg-slate-900">
          <img
            src={imageUrl}
            alt={title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Info */}
        <div className="sm:col-span-7 space-y-2">
          <span className="text-[11px] font-black text-amber-600 uppercase tracking-widest block">
            {brandName}
          </span>
          <h4 className="font-serif font-extrabold text-base sm:text-lg text-slate-900 leading-snug group-hover:text-red-600 transition-colors">
            {title}
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            {sponsorDescription}
          </p>
          <div className="pt-2">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert(`Redirection vers l'offre sponsorisée de ${brandName}`);
              }}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-[11px] uppercase tracking-wider px-4 py-2 rounded shadow-2xs transition-all"
            >
              <span>{ctaText}</span>
              <span className="material-symbols-outlined text-[14px]">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
