import React, { useState } from 'react';
import { SponsoredBadge } from '../ads/SponsoredBadge';

interface SponsoredPodcastProps {
  title?: string;
  sponsorName?: string;
  durationSeconds?: number;
  description?: string;
}

export const SponsoredPodcast: React.FC<SponsoredPodcastProps> = ({
  title = 'Épisode Audio Sponsorisé : Le Futur de la Connectivité Satellite en Afrique Centrale',
  sponsorName = 'STARLINK RDC & VODACOM',
  durationSeconds = 75,
  description = 'Dans cette capsule audio exclusive de 75 secondes, découvrez l’impact de la couverture satellite haut débit pour les zones enclavées du Kasaï et de l’Équateur.',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(25);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-slate-900 text-white p-5 sm:p-6 my-6 font-sans border-l-4 border-amber-500 rounded-r shadow-lg space-y-4">
      <div className="flex items-center justify-between">
        <SponsoredBadge label="Podcast Sponsorisé" sponsorName={sponsorName} />
        <span className="text-[10px] font-mono text-amber-400">
          Durée : {durationSeconds}s
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Play/Pause Audio Button */}
        <button
          onClick={togglePlay}
          className="bg-amber-500 hover:bg-amber-600 text-slate-950 w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-md transition-transform active:scale-95 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[28px]">
            {isPlaying ? 'pause' : 'play_arrow'}
          </span>
        </button>

        {/* Audio Details & Waveform track */}
        <div className="w-full space-y-2">
          <h4 className="font-serif font-black text-base text-white">
            {title}
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            {description}
          </p>

          {/* Scrub bar simulation */}
          <div className="space-y-1">
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden cursor-pointer">
              <div
                className="bg-amber-500 h-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>0:18</span>
              <span>1:15</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
