import React, { useState } from 'react';
import { SponsoredBadge } from '../ads/SponsoredBadge';

interface BrandedVideoProps {
  title?: string;
  sponsorName?: string;
  videoThumbnail?: string;
  videoUrl?: string;
  ctaText?: string;
}

export const BrandedVideo: React.FC<BrandedVideoProps> = ({
  title = 'Documentaire : La révolution de la Fintech et du paiement mobile en RDC',
  sponsorName = 'ORANGE MONEY & AIRTEL MONEY',
  videoThumbnail = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80',
  ctaText = 'En savoir plus sur les API Money',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full bg-slate-950 text-white rounded-none p-4 sm:p-6 my-6 font-sans border border-slate-800 shadow-xl">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
        <SponsoredBadge label="Vidéo Branded Content" sponsorName={sponsorName} />
        <span className="text-[10px] text-slate-400 font-mono">Format 1920 × 1080 HD</span>
      </div>

      <div className="relative aspect-video bg-black rounded overflow-hidden group shadow-2xl border border-slate-800">
        {!isPlaying ? (
          <div className="relative w-full h-full">
            <img
              src={videoThumbnail}
              alt={title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent p-6 flex flex-col justify-between">
              {/* Top Sponsor Badge */}
              <div className="self-start bg-slate-900/90 backdrop-blur text-amber-400 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded border border-amber-500/30">
                PRODUIT PAR {sponsorName}
              </div>

              {/* Center Big Play Button */}
              <button
                onClick={() => setIsPlaying(true)}
                className="self-center bg-red-600 hover:bg-red-700 text-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 cursor-pointer"
                aria-label="Lancer la vidéo"
              >
                <span className="material-symbols-outlined text-[36px] sm:text-[48px] ml-1">
                  play_arrow
                </span>
              </button>

              {/* Bottom Title & Description */}
              <div className="space-y-1">
                <h3 className="font-serif font-black text-lg sm:text-2xl text-white">
                  {title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 font-sans">
                  Découvrez comment les solutions de paiement dématérialisé transforment les transactions commerciales à Kinshasa, Lubumbashi et Goma.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center p-6 text-center">
            <div className="animate-spin text-amber-400 text-4xl mb-2">⏳</div>
            <p className="text-sm font-bold text-white mb-4">
              Lecture de la vidéo sponsorisée par {sponsorName}...
            </p>
            <button
              onClick={() => setIsPlaying(false)}
              className="bg-slate-800 hover:bg-slate-700 text-xs font-bold px-4 py-2 rounded text-slate-300"
            >
              Fermer le lecteur vidéo
            </button>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/80">
        <span className="text-xs text-slate-400">
          Durée : 3 min 45s • Qualité 1080p
        </span>
        <button
          onClick={() => alert(`Redirection vers la page partenaire: ${sponsorName}`)}
          className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded transition-colors cursor-pointer"
        >
          {ctaText} →
        </button>
      </div>
    </div>
  );
};
