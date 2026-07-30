import React, { useState } from 'react';
import { SponsoredBadge } from '../ads/SponsoredBadge';

export interface SponsoredArticleData {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  author: string;
  category: string;
  sponsorName: string;
  sponsorLogoUrl: string;
  ctaText: string;
  ctaUrl: string;
  readTime: string;
  contentParagraphs: string[];
}

interface SponsoredArticleProps {
  article?: SponsoredArticleData;
  onBack?: () => void;
}

export const SponsoredArticle: React.FC<SponsoredArticleProps> = ({
  article,
  onBack,
}) => {
  const [hasLiked, setHasLiked] = useState(false);

  const defaultArticle: SponsoredArticleData = {
    id: 'sp-art-1',
    title: 'Transition Énergétique en RDC : Comment la BCDC et Equity investissent 200 millions $ dans l’énergie solaire à Lubumbashi',
    summary: 'Analyse exclusive du partenariat stratégique entre Equity BCDC et les développeurs solaires au Katanga pour alimenter 150 000 foyers et soutenir le secteur minier écoresponsable.',
    imageUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    author: 'Partenariat Éditorial',
    category: 'ÉCONOMIE & ENERGIE',
    sponsorName: 'EQUITY BCDC RDC',
    sponsorLogoUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=200&q=80',
    ctaText: 'Découvrir nos solutions de financement vert',
    ctaUrl: '#',
    readTime: '6 min (850 mots)',
    contentParagraphs: [
      `Le Haut-Katanga et le Lualaba connaissent une transformation industrielle sans précédent. Alors que la demande en électricité pour le traitement du cuivre et du cobalt augmente de 15 % par an, le réseau électrique traditionnel peine à répondre aux besoins constants. C'est dans ce contexte que la Banque Commerciale du Congo (Equity BCDC) a officialisé la mobilisation d'une ligne de crédit verte de 200 millions de dollars américains.`,
      `Ce programme ambitieux vise à financer l'installation de trois grands parcs photovoltaïques à proximité de Lubumbashi, Kolwezi et Likasi. Grâce à un ensoleillement moyen de 2 800 heures par an, ces infrastructures produiront plus de 180 Megawatts crête d'énergie renouvelable, permettant de réduire la dépendance aux générateurs diesel très polluants et coûteux.`,
      `Selon Celestin Mukeba, Directeur Général d'Equity BCDC : « Notre mission ne se limite pas à accorder des crédits bancaires. Nous voulons être le moteur de la transition énergétique en République Démocratique du Congo en offrant des taux bonifiés aux entreprises qui investissent dans les technologies à faible empreinte carbone. »`,
      `Outre le secteur industriel et minier, près de 30 % de la production énergétique sera redistribuée via des réseaux intelligents (mini-grids) aux ménages et petites entreprises locales. Plus de 400 emplois directs qualifiés seront créés pour la maintenance et la gestion technique de ces centrales sur les dix prochaines années.`,
      `En alignement avec la vision nationale de développement durable de la RDC et les objectifs internationaux de lutte contre le changement climatique, cette initiative démontre le rôle clé du secteur bancaire privé dans la modernisation des infrastructures africaines.`
    ]
  };

  const currentData = article || defaultArticle;

  return (
    <article className="max-w-4xl mx-auto bg-white border border-slate-200 shadow-sm p-6 sm:p-10 my-6 font-sans space-y-6">
      {/* Header Navigation */}
      {onBack && (
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-slate-600 hover:text-red-600 cursor-pointer transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span>Retour aux actualités</span>
        </button>
      )}

      {/* Top Sponsor Identification Banner */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src={currentData.sponsorLogoUrl}
            alt={currentData.sponsorName}
            referrerPolicy="no-referrer"
            className="w-10 h-10 object-cover rounded border border-amber-200"
          />
          <div>
            <SponsoredBadge label="Article Sponsorisé" sponsorName={currentData.sponsorName} />
            <p className="text-[11px] text-slate-600 font-medium mt-1">
              Ce contenu est produit en partenariat avec {currentData.sponsorName}
            </p>
          </div>
        </div>

        <a
          href={currentData.ctaUrl}
          onClick={(e) => {
            e.preventDefault();
            alert(`[Contenu Sponsorisé] Clic CTA vers: ${currentData.sponsorName}`);
          }}
          className="bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded shadow-2xs transition-colors cursor-pointer"
        >
          {currentData.ctaText} →
        </a>
      </div>

      {/* Category & Title */}
      <div className="space-y-3">
        <span className="text-xs font-black uppercase tracking-widest text-red-600 block">
          {currentData.category}
        </span>
        <h1 className="font-serif font-black text-2xl sm:text-4xl leading-tight text-slate-900">
          {currentData.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-serif leading-relaxed italic border-l-2 border-slate-300 pl-4">
          {currentData.summary}
        </p>

        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-2 border-b border-slate-100 pb-3">
          <span className="font-bold text-slate-800">{currentData.author}</span>
          <span>•</span>
          <span>{currentData.readTime}</span>
          <span>•</span>
          <span>Mis à jour le 28 Juillet 2026</span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="overflow-hidden rounded border border-slate-200 aspect-[16/9] bg-slate-900">
        <img
          src={currentData.imageUrl}
          alt={currentData.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Body */}
      <div className="space-y-5 text-slate-800 text-sm sm:text-base leading-relaxed font-sans">
        {currentData.contentParagraphs.map((paragraph, index) => (
          <p key={index} className="first-letter:text-3xl first-letter:font-serif first-letter:font-bold first-letter:text-slate-900">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Footer Call to Action Box */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded shadow-md space-y-4 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:space-y-0">
        <div className="space-y-1">
          <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
            PARTENAIRE EXCLUSIF
          </span>
          <h3 className="font-serif font-bold text-lg text-white">
            Besoin d’un financement pour vos projets écoresponsables ?
          </h3>
          <p className="text-xs text-slate-300">
            Contactez l'équipe {currentData.sponsorName} directement pour une étude de dossier rapide.
          </p>
        </div>

        <button
          onClick={() => alert(`Accès au formulaire de contact de ${currentData.sponsorName}`)}
          className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs uppercase tracking-widest px-6 py-3 rounded transition-colors cursor-pointer shrink-0"
        >
          PRENDRE CONTACT
        </button>
      </div>
    </article>
  );
};
