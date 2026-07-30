import React from 'react';
import { Article } from '../types';
import { EnContinuFeed } from './EnContinuFeed';

interface HeroBoardProps {
  mainHero: Article;
  leftArticles: Article[];
  filInfo: Article[];
  stories?: any[];
  onArticleClick: (article: Article) => void;
}

export const HeroBoard: React.FC<HeroBoardProps> = ({
  mainHero,
  leftArticles,
  filInfo,
  onArticleClick,
}) => {
  return (
    <div className="space-y-xl mb-xxl">
      {/* Top 3-Column Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg lg:gap-xl">
        {/* LEFT COLUMN (3/12) */}
        <div className="lg:col-span-3 space-y-lg border-b lg:border-b-0 lg:border-r border-outline-variant pr-0 lg:pr-lg">
          {/* Left Featured Card */}
          {leftArticles[0] && (
            <div 
              className="group cursor-pointer pb-md border-b border-outline-variant"
              onClick={() => onArticleClick(leftArticles[0])}
            >
              <div className="aspect-video overflow-hidden mb-sm bg-primary relative">
                <img 
                  src={leftArticles[0].imageUrl} 
                  alt={leftArticles[0].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                />
                <span className="absolute bottom-2 left-2 bg-secondary text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5">
                  {leftArticles[0].kicker || 'Dossiers'}
                </span>
              </div>
              <span className="text-secondary text-[11px] font-black uppercase tracking-widest block mb-xs">
                {leftArticles[0].category}
              </span>
              <h3 className="font-serif font-bold text-[17px] leading-snug group-hover:text-secondary transition-colors text-primary">
                {leftArticles[0].title}
              </h3>
            </div>
          )}

          {/* Left Tribune / Opinion Block */}
          {leftArticles[1] && (
            <div 
              className="group cursor-pointer pb-md border-b border-outline-variant bg-surface p-md rounded-xs border-l-4 border-secondary"
              onClick={() => onArticleClick(leftArticles[1])}
            >
              <div className="flex items-center justify-between mb-xs">
                <span className="text-[10px] font-black uppercase tracking-widest text-secondary">
                  {leftArticles[1].formatBadge || 'OPINION'}
                </span>
                <span className="text-[11px] font-bold text-on-surface-variant">
                  {leftArticles[1].timeAgo}
                </span>
              </div>
              <h4 className="font-serif font-bold text-[15px] leading-snug group-hover:text-secondary transition-colors text-primary">
                {leftArticles[1].title}
              </h4>
              <p className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant mt-sm">
                Par {leftArticles[1].author || 'La Rédaction'}
              </p>
            </div>
          )}

          {/* Left Grand Angle Block */}
          {leftArticles[2] && (
            <div 
              className="group cursor-pointer"
              onClick={() => onArticleClick(leftArticles[2])}
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-outline-variant/60 px-2 py-0.5 inline-block mb-xs">
                {leftArticles[2].formatBadge || 'GRAND ANGLE'}
              </span>
              <h4 className="font-serif font-bold text-[15px] leading-snug group-hover:text-secondary transition-colors text-primary">
                {leftArticles[2].title}
              </h4>
              <p className="text-[12px] text-on-surface-variant line-clamp-2 mt-xs">
                {leftArticles[2].excerpt}
              </p>
            </div>
          )}
        </div>

        {/* CENTER COLUMN: Main Hero "La Une" (6/12) */}
        <div className="lg:col-span-6 space-y-md border-b lg:border-b-0 lg:border-r border-outline-variant pr-0 lg:pr-lg">
          <article 
            className="relative h-[380px] sm:h-[460px] group overflow-hidden bg-primary cursor-pointer rounded-lg shadow-xl"
            onClick={() => onArticleClick(mainHero)}
          >
            <img 
              src={mainHero.imageUrl} 
              alt={mainHero.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
            {/* Soft gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-secondary text-[12px] font-black uppercase tracking-widest bg-white/90 px-3 py-1 rounded-sm shadow-sm backdrop-blur-sm">
                  {mainHero.category}
                </span>
                {mainHero.kicker && (
                  <span className="text-white text-[12px] font-bold bg-secondary px-3 py-1 rounded-sm uppercase tracking-wider shadow-sm">
                    {mainHero.kicker}
                  </span>
                )}
              </div>
              <h2 className="font-serif font-black text-3xl sm:text-4xl text-white leading-tight mb-3 drop-shadow-md group-hover:text-gold transition-colors">
                {mainHero.title}
              </h2>
              <p className="text-white/80 text-[13px] sm:text-[14px] line-clamp-2 mb-md hidden sm:block">
                {mainHero.excerpt}
              </p>
              <div className="flex items-center gap-md text-white/70 text-[12px] font-bold uppercase tracking-wider">
                <span>Par {mainHero.author || 'David Hall'}</span>
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                <span>{mainHero.date}</span>
              </div>
            </div>
          </article>

          {/* 2 Strip Cards below main hero */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-md pt-xs">
            <div 
              className="flex gap-md items-center group cursor-pointer bg-surface p-sm border border-outline-variant hover:border-secondary transition-colors"
              onClick={() => onArticleClick({
                id: 'strip-1',
                category: 'Politique',
                title: 'Loi référendaire validée en RDC : ce que la décision de la Cour change',
                author: 'La Rédaction',
                date: '28 Juillet 2026',
                imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdaDs7lhIH4fozL49uipD-23Bm_qyXF6WU-9vMaqSAkpCBFzxcKdtAbq9SUYFrFdYJnkZD3AeNfmW4RwBALuPEh4tiwz4OOQ9L-erhF4FClpek-yXR2XlJZA2MXbFiiE_GYdSa0xAfC9JSfWZWl2vtBPPCTFDMBfuFkn8NhYP89f9po8KcxYFtLPGHJKRudJxIyEwaMs7lexxfgBDqwKCfvR0vlya0Z3ivuBc0SvnRPYBtB9LYRVHxWQ',
                excerpt: 'Les scénarios institutionnels qui s\'ouvrent après l\'avis de conformité sous réserve.'
              })}
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdaDs7lhIH4fozL49uipD-23Bm_qyXF6WU-9vMaqSAkpCBFzxcKdtAbq9SUYFrFdYJnkZD3AeNfmW4RwBALuPEh4tiwz4OOQ9L-erhF4FClpek-yXR2XlJZA2MXbFiiE_GYdSa0xAfC9JSfWZWl2vtBPPCTFDMBfuFkn8NhYP89f9po8KcxYFtLPGHJKRudJxIyEwaMs7lexxfgBDqwKCfvR0vlya0Z3ivuBc0SvnRPYBtB9LYRVHxWQ" 
                alt="Loi" 
                referrerPolicy="no-referrer"
                className="w-20 h-16 object-cover shrink-0"
              />
              <div>
                <span className="text-secondary text-[9px] font-black uppercase">ANALYSE</span>
                <h4 className="text-[13px] font-bold leading-tight text-primary group-hover:text-secondary line-clamp-2">
                  Loi référendaire validée en RDC : ce que la décision change.
                </h4>
              </div>
            </div>

            <div 
              className="flex gap-md items-center group cursor-pointer bg-surface p-sm border border-outline-variant hover:border-secondary transition-colors"
              onClick={() => onArticleClick({
                id: 'strip-2',
                category: 'Économie',
                title: 'Essence à 2 640 francs à Kinshasa, 4 205 à l\'Est : qui prend quoi sur le litre',
                author: 'David Hall',
                date: '28 Juillet 2026',
                imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS_fVx_QoASkLH5qAgaOaAJNFZkS_M-8aNp77xa-1e2kNEImRTYzUtWLVZN3TIur9roz-jGAez4VsNuI6bnN81zbqxrk5aAaV01_ZLN7fcyPoAMbzrDdF0aOC3-fcKDvC5xQJvBMpqHemonTEVrbSLtBOQ7ey3avCvar6LkUTHAHDb_MbNc-NETSuSiSD-zBc-nwSW-vaJWCulzksYdUFPLS60YmqPJ_J4oY34Ki81M9z55AQJ4LWuqw',
                excerpt: 'Structure des prix du carburant et disparités tarifaires Est-Ouest.'
              })}
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS_fVx_QoASkLH5qAgaOaAJNFZkS_M-8aNp77xa-1e2kNEImRTYzUtWLVZN3TIur9roz-jGAez4VsNuI6bnN81zbqxrk5aAaV01_ZLN7fcyPoAMbzrDdF0aOC3-fcKDvC5xQJvBMpqHemonTEVrbSLtBOQ7ey3avCvar6LkUTHAHDb_MbNc-NETSuSiSD-zBc-nwSW-vaJWCulzksYdUFPLS60YmqPJ_J4oY34Ki81M9z55AQJ4LWuqw" 
                alt="Carburant" 
                referrerPolicy="no-referrer"
                className="w-20 h-16 object-cover shrink-0"
              />
              <div>
                <span className="text-secondary text-[9px] font-black uppercase">ENQUÊTE</span>
                <h4 className="text-[13px] font-bold leading-tight text-primary group-hover:text-secondary line-clamp-2">
                  Essence à 2 640 F à Kinshasa, 4 205 à l'Est : qui prend quoi.
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Fil Info / En continu Feed (3/12) */}
        <div className="lg:col-span-3">
          <EnContinuFeed filInfo={filInfo} onArticleClick={onArticleClick} />
        </div>
      </div>
    </div>
  );
};
