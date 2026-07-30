import React from 'react';
import { Article } from '../types';

interface EnContinuFeedProps {
  filInfo: Article[];
  onArticleClick: (article: Article) => void;
}

export const EnContinuFeed: React.FC<EnContinuFeedProps> = ({ filInfo, onArticleClick }) => {
  return (
    <div className="flex flex-col bg-white border border-slate-200 rounded-none shadow-xs overflow-hidden">
      {/* Red Header Banner */}
      <div className="bg-[#cc0000] text-white px-3.5 py-2.5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-white inline-block animate-pulse"></span>
          <span className="font-extrabold text-[15px] tracking-wider uppercase font-sans">
            EN CONTINU
          </span>
        </div>
        <span className="font-extrabold text-[12px] tracking-wider uppercase opacity-95">
          29 JUILLET
        </span>
      </div>

      {/* Scrollable Timeline Area */}
      <div className="p-3 bg-slate-50/60 max-h-[580px] sm:max-h-[640px] overflow-y-auto space-y-5 relative scrollbar-thin scrollbar-thumb-slate-300">
        {/* Continuous Vertical Line */}
        <div className="absolute left-[24px] top-4 bottom-4 w-[1.5px] bg-slate-200 pointer-events-none" />

        {filInfo.map((item, index) => {
          const hour = item.timelineHour || item.timeAgo || '16h';
          const variant = item.cardVariant || (index === 0 ? 'highlightDark' : index % 2 === 0 ? 'dark' : 'light');

          return (
            <div key={item.id || index} className="relative z-10 flex gap-2 sm:gap-3 items-start group">
              {/* Timeline Left Column (Dot + Hour) */}
              <div className="w-10 shrink-0 flex flex-col items-center pt-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 ring-4 ring-white shrink-0 shadow-xs mb-1" />
                <span className="text-[11px] font-black text-slate-500 font-mono tracking-tight">
                  {hour}
                </span>
              </div>

              {/* Card Container */}
              <div className="flex-1 min-w-0">
                {/* Variant 1: Highlighted Dark Card with Red Border Frame (Image 1) */}
                {variant === 'highlightDark' && (
                  <div 
                    onClick={() => onArticleClick(item)}
                    className="p-1 rounded-2xl border-2 border-[#cc0000] bg-white shadow-md cursor-pointer group/card hover:scale-[1.01] transition-transform duration-200"
                  >
                    <div className="bg-[#0b132b] rounded-xl overflow-hidden p-3.5 space-y-2.5 text-white">
                      {/* Thumbnail */}
                      <div className="aspect-[16/10] overflow-hidden rounded-lg bg-slate-900">
                        <img 
                          src={item.imageUrl} 
                          alt={item.title} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Category */}
                      <span className="text-[11px] font-black uppercase tracking-wider text-slate-300 block">
                        {item.category}
                      </span>

                      {/* Title */}
                      <h3 className="font-serif font-extrabold text-[16px] sm:text-[18px] leading-snug text-white group-hover/card:text-red-400 transition-colors">
                        {item.title}
                      </h3>

                      {/* Excerpt */}
                      {item.excerpt && (
                        <p className="text-[12px] text-slate-300 leading-relaxed line-clamp-3">
                          {item.excerpt}
                        </p>
                      )}

                      {/* Circle Arrow Action Button */}
                      <div className="pt-1 flex justify-start">
                        <div className="w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center text-slate-200 group-hover/card:bg-white group-hover/card:border-white group-hover/card:text-[#0b132b] transition-all">
                          <span className="text-[16px] font-bold">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Variant 2: Light Theme Card (Image 2) */}
                {variant === 'light' && (
                  <div 
                    onClick={() => onArticleClick(item)}
                    className="bg-white border border-slate-200 rounded-xl overflow-hidden p-3.5 space-y-2.5 shadow-xs hover:shadow-md cursor-pointer group/card hover:scale-[1.01] transition-all duration-200"
                  >
                    {/* Thumbnail */}
                    <div className="aspect-[16/10] overflow-hidden rounded-lg bg-slate-100">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Category */}
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#cc0000] block">
                      {item.category}
                    </span>

                    {/* Title */}
                    <h3 className="font-serif font-extrabold text-[16px] sm:text-[18px] leading-snug text-[#b91c1c] group-hover/card:underline">
                      {item.title}
                    </h3>

                    {/* Excerpt */}
                    {item.excerpt && (
                      <p className="text-[12px] text-slate-600 leading-relaxed line-clamp-3">
                        {item.excerpt}
                      </p>
                    )}

                    {/* Circle Arrow Action Button */}
                    <div className="pt-1 flex justify-start">
                      <div className="w-8 h-8 rounded-full border border-[#cc0000] text-[#cc0000] flex items-center justify-center group-hover/card:bg-[#cc0000] group-hover/card:text-white transition-all">
                        <span className="text-[16px] font-bold">→</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Variant 3: Standard Dark Card (Image 3) */}
                {variant === 'dark' && (
                  <div 
                    onClick={() => onArticleClick(item)}
                    className="bg-[#0b132b] border border-slate-800 rounded-xl overflow-hidden p-3.5 space-y-2.5 shadow-md cursor-pointer group/card hover:scale-[1.01] transition-all duration-200 text-white"
                  >
                    {/* Thumbnail */}
                    <div className="aspect-[16/10] overflow-hidden rounded-lg bg-slate-900">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Category */}
                    <span className="text-[11px] font-black uppercase tracking-wider text-slate-300 block">
                      {item.category}
                    </span>

                    {/* Title */}
                    <h3 className="font-serif font-extrabold text-[16px] sm:text-[18px] leading-snug text-white group-hover/card:text-red-400 transition-colors">
                      {item.title}
                    </h3>

                    {/* Excerpt */}
                    {item.excerpt && (
                      <p className="text-[12px] text-slate-300 leading-relaxed line-clamp-3">
                        {item.excerpt}
                      </p>
                    )}

                    {/* Circle Arrow Action Button */}
                    <div className="pt-1 flex justify-start">
                      <div className="w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center text-slate-200 group-hover/card:bg-white group-hover/card:border-white group-hover/card:text-[#0b132b] transition-all">
                        <span className="text-[16px] font-bold">→</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Button */}
      <div className="p-3 bg-white border-t border-slate-200 shrink-0">
        <button 
          onClick={() => alert('Fil d\'actualités en continu complet')}
          className="w-full bg-white border border-slate-300 text-[#0b132b] font-black text-[12px] uppercase tracking-wider py-2.5 rounded-md hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-2xs flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>VOIR TOUT LE FIL</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
};
