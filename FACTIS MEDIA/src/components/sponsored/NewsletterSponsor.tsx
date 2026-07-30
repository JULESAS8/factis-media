import React, { useState } from 'react';
import { SponsoredBadge } from '../ads/SponsoredBadge';

interface NewsletterSponsorProps {
  title?: string;
  sponsorName?: string;
  sponsorLogoUrl?: string;
}

export const NewsletterSponsor: React.FC<NewsletterSponsorProps> = ({
  title = 'Newsletter Quotidienne L’Économie Congolaise',
  sponsorName = 'RAWBANK RDC',
  sponsorLogoUrl = 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=200&q=80',
}) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
    }
  };

  return (
    <div className="bg-slate-900 text-white p-6 my-6 font-sans border border-slate-800 shadow-xl space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">📩</span>
          <h3 className="font-serif font-black text-base text-white">
            {title}
          </h3>
        </div>
        <SponsoredBadge label="Encart Sponsorisé" sponsorName={sponsorName} />
      </div>

      <p className="text-xs text-slate-300 leading-relaxed">
        Chaque matin à 07h00, recevez le résumé synthétique des 5 actualités financières et économiques incontournables de la RDC, sponsorisé par <strong className="text-amber-400">{sponsorName}</strong>.
      </p>

      {/* Analytics stats banner */}
      <div className="grid grid-cols-3 gap-2 bg-slate-950 p-3 rounded border border-slate-800 text-center font-mono">
        <div>
          <span className="block text-amber-400 font-bold text-sm">48 500+</span>
          <span className="text-[9px] text-slate-400 uppercase">Abonnés actifs</span>
        </div>
        <div>
          <span className="block text-emerald-400 font-bold text-sm">42.8 %</span>
          <span className="text-[9px] text-slate-400 uppercase">Taux d'ouverture</span>
        </div>
        <div>
          <span className="block text-cyan-400 font-bold text-sm">Quotidiens</span>
          <span className="text-[9px] text-slate-400 uppercase">Fréquence</span>
        </div>
      </div>

      {isSubscribed ? (
        <div className="bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs p-3 rounded text-center font-bold">
          ✓ Vous êtes inscrit à la newsletter sponsorisée par {sponsorName} !
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            required
            placeholder="Saisissez votre e-mail professionnel"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white text-slate-900 text-xs font-medium px-4 py-2.5 rounded focus:outline-none w-full"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded shrink-0 transition-colors cursor-pointer"
          >
            S'ABONNER
          </button>
        </form>
      )}
    </div>
  );
};
