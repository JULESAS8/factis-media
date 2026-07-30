import React, { useState, useEffect, useRef } from 'react';

export interface AdSlotProps {
  id: string;
  emplacement: string;
  largeur?: number | string;
  hauteur?: number | string;
  responsive?: boolean;
  sticky?: boolean;
  lazyLoad?: boolean;
  collapseIfEmpty?: boolean;
  className?: string;
  provider?: 'GAM' | 'AdSense' | 'Prebid' | 'Amazon TAM' | 'AdInserter' | 'House';
  brandName?: string;
  customImage?: string;
  targetUrl?: string;
  categoryContext?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({
  id,
  emplacement,
  largeur = '100%',
  hauteur = 90,
  responsive = true,
  sticky = false,
  lazyLoad = true,
  collapseIfEmpty = false,
  className = '',
  provider = 'GAM',
  brandName,
  customImage,
  targetUrl = '#',
}) => {
  const [isVisible, setIsVisible] = useState(!lazyLoad);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const slotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lazyLoad) {
      setIsLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Simulate server ad fetch delay without causing layout shift
          setTimeout(() => {
            setIsLoaded(true);
          }, 300);
          observer.disconnect();
        }
      },
      { rootMargin: '150px' }
    );

    if (slotRef.current) {
      observer.observe(slotRef.current);
    }

    return () => observer.disconnect();
  }, [lazyLoad]);

  if (collapseIfEmpty && isEmpty) {
    return null;
  }

  // Predefined default mock creative banners if custom image not provided
  const getMockCreative = () => {
    if (customImage) return customImage;
    if (emplacement.toLowerCase().includes('header') || hauteur === 90) {
      return 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80';
    }
    if (hauteur === 600 || emplacement.toLowerCase().includes('skyscraper')) {
      return 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=600&q=80';
    }
    return 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80';
  };

  const creativeImage = getMockCreative();
  const sponsorTitle = brandName || (emplacement.includes('header') ? 'Partenaire Média Offi' : 'Annonceur Média');

  return (
    <div
      ref={slotRef}
      id={`ad-slot-${id}`}
      data-ad-emplacement={emplacement}
      data-ad-provider={provider}
      className={`ad-slot-container relative my-3 transition-all duration-300 font-sans ${
        sticky ? 'sticky top-4 z-20' : ''
      } ${className}`}
      style={{
        width: typeof largeur === 'number' ? `${largeur}px` : largeur,
        minHeight: typeof hauteur === 'number' ? `${hauteur}px` : hauteur,
      }}
    >
      {/* Label Badge */}
      <div className="flex items-center justify-between pb-1 px-1">
        <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
          PUBLICITÉ • {provider}
        </span>
        <span className="text-[9px] text-slate-400 font-mono hidden sm:inline">
          Slot: {emplacement} ({largeur}x{hauteur})
        </span>
      </div>

      {/* Main Banner Box with Skeleton Placeholder to guarantee CLS < 0.1 */}
      <div
        className="relative overflow-hidden bg-slate-100 border border-slate-200 rounded-sm shadow-2xs group cursor-pointer"
        style={{ minHeight: typeof hauteur === 'number' ? `${hauteur}px` : hauteur }}
      >
        {!isLoaded ? (
          /* Skeleton Loader / Aspect ratio reservation */
          <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 animate-pulse flex flex-col items-center justify-center p-4 text-center">
            <span className="material-symbols-outlined text-slate-300 text-3xl mb-1">
              campaign
            </span>
            <span className="text-[11px] font-semibold text-slate-400">
              Chargement de l'annonce ({emplacement})...
            </span>
          </div>
        ) : (
          /* Ad Creative Render */
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full relative group"
            onClick={(e) => {
              if (targetUrl === '#') {
                e.preventDefault();
                alert(`[Ad Manager] Clic enregistré sur la campagne: ${sponsorTitle} (${emplacement})`);
              }
            }}
          >
            <div className="relative w-full h-full flex items-center justify-between bg-slate-900 text-white overflow-hidden">
              <img
                src={creativeImage}
                alt="Publicité Partenaire"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent p-4 sm:p-5 flex flex-col justify-center">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 mb-1">
                  OFFRE SPÉCIALE • {sponsorTitle}
                </span>
                <h4 className="font-serif font-bold text-sm sm:text-base text-white line-clamp-1">
                  Découvrez nos offres premium exclusives pour la RDC
                </h4>
                <div className="mt-2 flex items-center gap-2">
                  <span className="bg-red-600 hover:bg-red-700 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-sm shadow-2xs transition-colors">
                    En Savoir Plus
                  </span>
                  <span className="text-[10px] text-slate-300 underline font-medium hidden sm:inline">
                    Sponsorisé par {sponsorTitle}
                  </span>
                </div>
              </div>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};
