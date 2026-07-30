import React, { useState } from 'react';
import { Article } from '../types';
import { SidebarSkyscraper } from './ads/SidebarSkyscraper';

interface CategoryDetailViewProps {
  categoryName: string;
  onArticleClick: (article: Article) => void;
}

export const CategoryDetailView: React.FC<CategoryDetailViewProps> = ({
  categoryName,
  onArticleClick,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Normalize category display name
  const displayCatName = categoryName.toUpperCase();

  // Helper article click generator
  const handleArtClick = (
    title: string,
    category: string,
    imageUrl: string,
    excerpt: string,
    readTime?: string
  ) => {
    onArticleClick({
      id: 'cat-detail-' + Math.random().toString(36).substr(2, 9),
      title,
      category,
      imageUrl,
      excerpt,
      date: '28 Juillet 2026',
      timeAgo: 'il y a 2h',
      author: 'La Rédaction',
      readTime: readTime || '4 min',
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  // Main Category Articles matching the screenshot
  const leadArticle = {
    category: displayCatName === 'ÉCONOMIE' || displayCatName === 'ECONOMIE' ? 'ÉCONOMIE' : displayCatName,
    title: `Essence à 2 640 francs à Kinshasa, 4 205 à l'Est : qui prend quoi sur chaque litre`,
    excerpt: `L'essence est fixée à 2 640 francs le litre à Kinshasa et 4 205 à l'Est. Sur ce prix, taxes et parafiscalité pèsent environ 58 %. Et l'État emprunte quand...`,
    guideTag: "Guides citadins et locaux",
    author: "LA RÉDACTION",
    date: "28 JUILLET 2026",
    imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
  };

  const articleList = [
    {
      id: 1,
      category: displayCatName === 'POLITIQUE' ? 'POLITIQUE' : 'ÉCONOMIE',
      title: "350 millions de dollars à récupérer : l'État lance le recouvrement forcé des créances du FPI",
      excerpt: "Le Fonds de promotion de l'industrie attend 350 millions de dollars de débiteurs privés, certaines créances vieilles de vingt ans. Saisies, interdiction...",
      author: "LA RÉDACTION",
      date: "28 JUILLET 2026",
      readTime: "4 MIN",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAv0shYBw5soGisS1uOTZt_HXeJG-l4_TWn16fyLPrbB_L086OtyL2WbkOKv3adT5ku8c4iMA8EL94y-lObvHzuaDRqybs438vrMGmhTnOxwygpOQ60S5madcCYi1SH4Vuq-cP-EDLbGJXSA62T7sx8vG-V8DN9uLnHKpWt6Fava-FbRPThD8qAWyb8zwyCKU3GCcGPOt_AyX43r4zHTUV3lwRPI8a9Jy8SEsu-FhV8X9LkUaVah7lhzw",
    },
    {
      id: 2,
      category: "DOSSIERS SPÉCIAUX",
      isSpecial: true,
      title: "Le mythe du pays le plus riche du monde : qui a inventé les 24 000 milliards sur la RDC",
      excerpt: "Le sous-sol congolais vaudrait 24 000 milliards de dollars. Le chiffre vient d'un article de magazine publié en 2010, sans étude géologique. Ce que...",
      author: "LA RÉDACTION",
      date: "28 JUILLET 2026",
      readTime: "6 MIN",
      imageUrl: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      category: "BANQUES ET FINANCES",
      title: "Budget 2027 : la RDC peut-elle concilier dépenses sécuritaires, masse salariale et investissements sociaux ?",
      excerpt: "Le lancement des conférences budgétaires en vue de l'élaboration du projet de loi de finances 2027 a été reporté au 29 juillet. Au-delà de ce...",
      author: "RÉDACTION KINSHASA",
      date: "28 JUILLET 2026",
      readTime: "3 MIN",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      category: "ÉCONOMIE",
      title: "Croissance à 5,5 %, inflation à 2,5 % : ce que le FMI a écrit sur l'économie congolaise",
      excerpt: "La mission du FMI de mai 2026 décrit une croissance au-dessus de 5,5 %, une inflation à 2,5 %, 8,8 milliards de réserves, et un...",
      author: "LA RÉDACTION",
      date: "28 JUILLET 2026",
      readTime: "5 MIN",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCS_fVx_QoASkLH5qAgaOaAJNFZkS_M-8aNp77xa-1e2kNEImRTYzUtWLVZN3TIur9roz-jGAez4VsNuI6bnN81zbqxrk5aAaV01_ZLN7fcyPoAMbzrDdF0aOC3-fcKDvC5xQJvBMpqHemonTEVrbSLtBOQ7ey3avCvar6LkUTHAHDb_MbNc-NETSuSiSD-zBc-nwSW-vaJWCulzksYdUFPLS60YmqPJ_J4oY34Ki81M9z55AQJ4LWuqw",
    },
    {
      id: 5,
      category: "BTP & INFRASTRUCTURES",
      title: "RDC : Bemba inspecte les chantiers des aéroports de Bunia, Lubumbashi et Kananga",
      excerpt: "Le Vice-Premier ministre, ministre des Transports, Voies de communication et Désenclavement, Jean-Pierre Bemba, a effectué, lundi 27 juillet 2026, une...",
      author: "RÉDACTION KINSHASA",
      date: "28 JUILLET 2026",
      readTime: "2 MIN",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuChPem1hR3mrMAqDQ9HiZDA4lJ8VWYawyivJ63pc4LA1KqGw2Jbtna3CLPbiwMwkM7aYSkYMaWwjD-3R_39-MRjYiraXKaQ5GpxdO5-h4OUsNtnPL_spQ63TMIluwrUlTJvD6vggb8c5OtcUJ-byrfWLF4FZt5qqi4XCnIHBUqltkgvuIvADNowAeEsptlXYLN00JoKmXtGMg-cb1fpl5H3RW7xnmimWkkchy18Al17V1iVUz4f3GiuhA",
    },
    {
      id: 6,
      category: "ÉCONOMIE",
      title: "L'IGF veut surveiller en permanence tous les flux financiers du pays : la nouvelle ambition présentée à Tshisekedi",
      excerpt: "Le 23 juillet, à la Cité de l'Union africaine, Félix Tshisekedi a reçu le chef de service de l'Inspection générale des finances, Christophe Bitasimwa...",
      author: "LA RÉDACTION",
      date: "28 JUILLET 2026",
      readTime: "5 MIN",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Right Sidebar Data
  const dernieresNouvelles = [
    {
      time: "22:59",
      cat: "SOCIÉTÉ",
      title: "« Elle avait fui la guerre de Goma, elle est morte à Kinshasa » : le tragique décès de Prisca Banza qui émeut la capitale",
    },
    {
      time: "22:16",
      cat: "POLITIQUE",
      title: "Loi référendaire en RDC : ce que disent, article par article, les treize dispositions réservées par la Cour",
    },
    {
      time: "16:23",
      cat: "POLITIQUE",
      title: "Loi référendaire validée en RDC : ce que la décision de la Cour change, et les scénarios qui s'ouvrent",
    },
    {
      time: "16:08",
      cat: "POLITIQUE",
      title: "RDC: La Cour constitutionnelle déclare la loi sur le Référendum conforme à la Constitution, sous réserve de 13 articles",
    },
    {
      time: "15:54",
      cat: "MUSIQUE",
      title: "La musique congolaise rapporte, mais ses auteurs ne touchent presque rien",
    },
  ];

  const plusLus = [
    {
      num: 1,
      title: "Accord trouvé entre la Majorité et le Rassemblement : Kabila reste au pouvoir, un nouveau gouvernement arrive !",
    },
    {
      num: 2,
      title: "Les autorités de la RDC ont réussi à faire peur au Coronavirus",
    },
    {
      num: 3,
      title: "« Que Dieu pardonne nos péchés » : les nuits torrides, la chicha, les « deals » et les réseaux sexuels de Kinshasa",
    },
    {
      num: 4,
      title: "Le plan B de la CENCO : « les Nations Unies vont gérer le pays », confie un proche des catholiques !",
    },
    {
      num: 5,
      title: "RDC : Le parlement européen demande au Président Joseph Kabila de démissionner le 20 décembre 2016",
    },
  ];

  const aNePasManquer = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=300&q=80",
      title: "RDC : Kinshasa autorise le déploiement d'un contingent militaire angolais dans l'Est",
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=300&q=80",
      title: "RDC : La résurrection « préfabriquée » de Vital Kamerhe",
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=300&q=80",
      title: "RDC : Tony Mwaba accuse Jules Alingete de tenir « des réunions en catimini pour déstabiliser » l'EPST",
    },
  ];

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80";
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto space-y-6 font-sans">
      {/* ==========================================
          MAIN FEATURED LEAD ARTICLE (HERO)
         ========================================== */}
      <div className="bg-white border border-slate-200 p-4 sm:p-6 rounded-none shadow-2xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Photo (7 cols) */}
          <div 
            className="lg:col-span-7 overflow-hidden bg-slate-900 border border-slate-200 cursor-pointer group relative min-h-[260px] sm:min-h-[340px]"
            onClick={() => handleArtClick(leadArticle.title, leadArticle.category, leadArticle.imageUrl, leadArticle.excerpt)}
          >
            <img 
              src={leadArticle.imageUrl} 
              alt={leadArticle.title}
              onError={handleImgError}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
            />
          </div>

          {/* Right Text Content (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-[#0284c7] font-black text-[12px] uppercase tracking-wider block">
                {leadArticle.category}
              </span>

              <h1 
                className="font-serif font-black text-[22px] sm:text-[28px] leading-tight text-slate-900 hover:text-red-600 transition-colors cursor-pointer"
                onClick={() => handleArtClick(leadArticle.title, leadArticle.category, leadArticle.imageUrl, leadArticle.excerpt)}
              >
                {leadArticle.title}
              </h1>

              <p className="text-[13px] text-slate-600 leading-relaxed font-normal">
                {leadArticle.excerpt}{" "}
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded ml-1 cursor-pointer hover:bg-slate-200">
                  <span>📖</span> {leadArticle.guideTag}
                </span>
              </p>
            </div>

            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider pt-2 border-t border-slate-100">
              <span className="text-slate-800">{leadArticle.author}</span> <span className="text-slate-300">|</span> <span>{leadArticle.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          MAIN TWO-COLUMN GRID (LEFT 8/12, RIGHT 4/12)
         ========================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: ARTICLE LIST (8 COLS) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white border border-slate-200 p-4 sm:p-6 rounded-none shadow-2xs divide-y divide-slate-200">
            {articleList.map((item, idx) => (
              <React.Fragment key={item.id}>
                <div 
                  className="py-5 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center group cursor-pointer"
                  onClick={() => handleArtClick(item.title, item.category, item.imageUrl, item.excerpt, item.readTime)}
                >
                  {/* Left Text details (8 cols) */}
                  <div className="sm:col-span-8 space-y-2 pr-0 sm:pr-2">
                    <span className={`text-[11px] font-extrabold uppercase tracking-wider block ${
                      item.isSpecial ? 'text-[#0284c7]' : 'text-[#0284c7]'
                    }`}>
                      {item.category}
                    </span>

                    <h3 className="font-serif font-extrabold text-[17px] sm:text-[19px] leading-tight text-slate-900 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-[12px] text-slate-600 line-clamp-3 leading-relaxed">
                      {item.excerpt}
                    </p>

                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider pt-1 flex items-center gap-1.5">
                      <span>{item.author}</span>
                      <span className="text-slate-300">•</span>
                      <span>{item.date}</span>
                      <span className="text-slate-300">•</span>
                      <span>{item.readTime}</span>
                    </div>
                  </div>

                  {/* Right Thumbnail Image (4 cols) */}
                  <div className="sm:col-span-4 overflow-hidden bg-slate-100 border border-slate-200 aspect-[16/10] shrink-0">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title}
                      onError={handleImgError}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

              </React.Fragment>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 text-[13px] font-bold rounded-2xs flex items-center justify-center transition-all cursor-pointer ${
                  currentPage === page
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {page}
              </button>
            ))}
            <span className="text-slate-400 font-bold px-1">...</span>
            <button
              onClick={() => setCurrentPage(180)}
              className={`w-11 h-9 text-[13px] font-bold rounded-2xs flex items-center justify-center transition-all cursor-pointer ${
                currentPage === 180
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              180
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 180))}
              className="w-9 h-9 bg-white border border-slate-300 text-slate-700 font-bold text-[13px] rounded-2xs flex items-center justify-center hover:bg-slate-100 transition-all cursor-pointer"
              title="Page suivante"
            >
              →
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: SIDEBAR WIDGETS (4 COLS) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Widget 1: DERNIÈRES NOUVELLES */}
          <div className="bg-white border border-slate-200 rounded-none shadow-2xs overflow-hidden">
            <div className="bg-[#e11d48] text-white px-4 py-2.5 flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-ping" />
              <h3 className="font-sans font-black text-[12px] sm:text-[13px] uppercase tracking-wider">
                DERNIÈRES NOUVELLES
              </h3>
            </div>
            <div className="p-4 divide-y divide-slate-100">
              {dernieresNouvelles.map((news, idx) => (
                <div 
                  key={idx} 
                  className="py-3 first:pt-0 last:pb-0 space-y-1 group cursor-pointer"
                  onClick={() => handleArtClick(news.title, news.cat, "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80", news.title)}
                >
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase">
                    <span className="text-red-600 font-sans">{news.time}</span>
                    <span className="text-slate-700 font-sans">{news.cat}</span>
                  </div>
                  <p className="font-sans font-semibold text-[12px] text-slate-900 leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
                    {news.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Widget 2: PLUS LUS */}
          <div className="bg-white border border-slate-200 rounded-none shadow-2xs overflow-hidden">
            <div className="bg-[#0056b3] text-white px-4 py-2.5 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">trending_up</span>
              <h3 className="font-sans font-black text-[12px] sm:text-[13px] uppercase tracking-wider">
                PLUS LUS
              </h3>
            </div>
            <div className="p-4 space-y-4">
              {plusLus.map((item) => (
                <div 
                  key={item.num} 
                  className="flex items-start gap-3 group cursor-pointer pb-3 border-b border-slate-100 last:border-b-0 last:pb-0"
                  onClick={() => handleArtClick(item.title, displayCatName, "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80", item.title)}
                >
                  <span className="text-[24px] font-black font-sans text-[#0056b3] leading-none shrink-0 w-5">
                    {item.num}
                  </span>
                  <p className="font-sans font-bold text-[12px] text-slate-900 leading-snug group-hover:text-red-600 transition-colors line-clamp-3">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Widget 3: NEWSLETTER */}
          <div className="bg-[#0f172a] text-white p-5 space-y-3 rounded-none shadow-2xs border border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-[16px]">✉️</span>
              <h3 className="font-serif font-black text-[15px] uppercase tracking-wide text-white">
                NEWSLETTER <span className="capitalize">{categoryName}</span>
              </h3>
            </div>
            <p className="text-[12px] text-slate-300 leading-relaxed font-sans">
              Chaque matin, l'essentiel de l'actualité de {categoryName.toLowerCase()} congolaise.
            </p>

            {subscribed ? (
              <div className="bg-emerald-900/60 border border-emerald-500/40 text-emerald-200 p-3 text-[12px] font-bold rounded-2xs text-center">
                ✓ Merci ! Vous êtes bien inscrit à la newsletter {categoryName}.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex items-stretch gap-2">
                <input
                  type="email"
                  required
                  placeholder="Votre e-mail"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="bg-white text-slate-900 text-[12px] font-medium px-3 py-2 border-0 focus:outline-none w-full placeholder-slate-400"
                />
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-black text-[11px] uppercase tracking-wider px-4 py-2 shrink-0 transition-colors cursor-pointer"
                >
                  S'INSCRIRE
                </button>
              </form>
            )}
          </div>

          {/* Widget 4: À NE PAS MANQUER */}
          <div className="bg-white border border-slate-200 rounded-none shadow-2xs overflow-hidden">
            <div className="bg-[#0f172a] text-white px-4 py-2.5 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">visibility</span>
              <h3 className="font-sans font-black text-[12px] sm:text-[13px] uppercase tracking-wider">
                À NE PAS MANQUER
              </h3>
            </div>
            <div className="p-4 space-y-3.5">
              {aNePasManquer.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-center gap-3 group cursor-pointer pb-3 border-b border-slate-100 last:border-b-0 last:pb-0"
                  onClick={() => handleArtClick(item.title, displayCatName, item.imageUrl, item.title)}
                >
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    onError={handleImgError}
                    referrerPolicy="no-referrer"
                    className="w-16 h-12 object-cover shrink-0 border border-slate-200"
                  />
                  <p className="font-sans font-bold text-[12px] text-slate-900 leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Ad Slot 4: Sidebar Skyscraper (300x600 sticky -> 300x250) */}
          <SidebarSkyscraper brandName="AIRTEL 5G RDC" />

        </div>

      </div>
    </div>
  );
};
