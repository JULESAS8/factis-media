import React from 'react';
import { Article } from '../types';
import { InArticleAd } from './ads/InArticleAd';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-md bg-black/75 backdrop-blur-xs animate-fadeIn font-sans">
      <div className="relative bg-white text-on-background w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xs shadow-2xl border border-outline-variant">
        {/* Sticky Modal Header */}
        <div className="sticky top-0 bg-primary text-white p-md flex justify-between items-center z-10 border-b border-white/10">
          <span className="bg-secondary text-white text-[11px] font-black uppercase px-2.5 py-0.5 tracking-wider">
            {article.category}
          </span>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/10 rounded-full text-white cursor-pointer"
            aria-label="Fermer"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-lg md:p-xl space-y-md">
          <h1 className="font-serif font-extrabold text-[26px] sm:text-[34px] leading-tight text-primary">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-md text-[12px] font-bold text-on-surface-variant border-y border-outline-variant py-2">
            <span>Par {article.author || 'La Rédaction FACTIS'}</span>
            <span>•</span>
            <span>{article.date}</span>
            {article.readTime && (
              <>
                <span>•</span>
                <span className="text-secondary font-black">Temps de lecture : {article.readTime}</span>
              </>
            )}
          </div>

          <div className="aspect-video overflow-hidden bg-surface rounded-xs">
            <img
              src={article.imageUrl}
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="font-semibold text-[16px] text-primary leading-relaxed bg-surface p-md border-l-4 border-secondary font-serif italic">
            {article.excerpt}
          </p>

          {/* Article Body with Native In-Article Ad after 2nd Paragraph */}
          <div className="space-y-md text-[15px] leading-relaxed text-on-background/90 pt-sm font-sans">
            <p>
              {article.content ||
                `Analyse exclusive réalisée par l’unité d’investigation FACTIS MEDIA. Notre rédaction traite l'information avec indépendance, rigueur et réactivité.`}
            </p>
            <p>
              Les données territoriales et géopolitiques présentées sont recoupées avec nos réseaux d’observateurs locaux, les rapports des organismes sous-régionaux et les sources diplomatiques accréditées.
            </p>

            {/* In-Article Ad Slot 5 (Inserted after 2nd paragraph) */}
            <InArticleAd
              id="modal-in-article-1"
              brandName="RAWBANK & VODACOM"
              title="Abonnez-vous aux alertes SMS Bourse et Économie de FACTIS"
              sponsorDescription="Recevez les indices de change du franc congolais en temps réel sur votre mobile Vodacom ou Orange."
              ctaText="S'abonner aux alertes SMS"
            />

            <p>
              Les perspectives à court et moyen terme s'articulent autour de la stabilité monétaire et de la relance des partenariats sous-régionaux en Afrique Centrale.
            </p>
            <p>
              FACTIS MEDIA continue de suivre de près l'évolution des négociations sectorielles pour vous apporter des analyses indépendantes et documentées.
            </p>
          </div>

          {/* Social Share & Actions */}
          <div className="border-t border-outline-variant pt-md flex justify-between items-center">
            <span className="text-[12px] font-bold text-on-surface-variant">FACTIS © 2026 - Tous droits réservés</span>
            <button
              onClick={() => alert('Article partagé sur les réseaux sociaux !')}
              className="bg-primary text-white text-[12px] font-bold uppercase px-4 py-2 hover:bg-secondary transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">share</span>
              Partager l'article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
