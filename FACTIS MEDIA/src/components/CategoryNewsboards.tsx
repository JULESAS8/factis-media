import React, { useRef } from 'react';
import { Article } from '../types';

interface CategoryNewsboardsProps {
  onArticleClick: (article: Article) => void;
}

export const CategoryNewsboards: React.FC<CategoryNewsboardsProps> = ({ onArticleClick }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Helper article click handler
  const handleArtClick = (title: string, category: string, imageUrl: string, excerpt?: string) => {
    onArticleClick({
      id: 'cat-art-' + Math.random().toString(36).substr(2, 9),
      title,
      category,
      imageUrl,
      excerpt: excerpt || title,
      date: '28 Juillet 2026',
      timeAgo: 'il y a 4h',
      author: 'La Rédaction',
    });
  };

  return (
    <div className="space-y-8 mb-12 font-sans">
      
      {/* ==========================================
          SECTION 1: POLITIQUE
         ========================================== */}
      <section id="politique" className="bg-white border border-slate-200 p-3 sm:p-5 rounded-none shadow-xs space-y-4">
        {/* Title Header */}
        <div className="text-center space-y-1.5 border-b border-slate-200 pb-3">
          <h2 className="text-[34px] sm:text-[40px] font-black uppercase font-serif tracking-tight text-slate-900 leading-none">
            POLITIQUE
          </h2>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
            <a href="#diplomatie" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">DIPLOMATIE</a>
            <span>·</span>
            <a href="#elections" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">ÉLECTIONS</a>
            <span>·</span>
            <a href="#gouvernement" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">GOUVERNEMENT</a>
            <span>·</span>
            <a href="#parlement" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">PARLEMENT</a>
            <span>·</span>
            <a href="#partis" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">PARTIS &amp; COALITIONS</a>
            <span>·</span>
            <a href="#presidence" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">PRÉSIDENCE</a>
          </div>
        </div>

        {/* Top 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
          
          {/* Left Column (2 articles) */}
          <div className="lg:col-span-3 space-y-6 border-b lg:border-b-0 lg:border-r border-slate-100 pb-4 lg:pb-0 lg:pr-5">
            <div 
              className="group cursor-pointer space-y-2 p-3 hover:bg-slate-50 transition-colors rounded-lg border border-transparent hover:border-slate-100 hover:shadow-sm"
              onClick={() => handleArtClick(
                "Loi référendaire en RDC : ce que disent, article par article, les treize dispositions réservées par la Cour",
                "POLITIQUE",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuB_b3ekPwmxr03O0PKIbZ5RRGc2aiGoIeNpyGHIsoNw3goKO-MiztBpkgYnAh8JCBvlkFPkpCjbChBjNjy7s87m8bSOrwDVHwDTzTy3LB-d3rqnABZh68uWCH0-xfqqaqWHoYaDmrFGNzy0CkFCXip0CPVbGTO6rvmKr84fXjayIrK_EI0mOV3_cAFy8NySqJMtLSyESvoi3kA0Sp6MhJ3EdfR3KyCFtsfnRHUf6vLXpMyJALHgXkFh3w"
              )}
            >
              <span className="bg-primary text-white text-[10px] font-extrabold uppercase px-2 py-0.5 tracking-wider inline-block rounded-sm shadow-sm">
                DÉCRYPTAGE
              </span>
              <h3 className="font-serif font-bold text-[16px] sm:text-[18px] leading-snug text-slate-900 group-hover:text-secondary transition-colors">
                Loi référendaire en RDC : ce que disent, article par article, les treize dispositions réservées par la Cour
              </h3>
              <p className="text-[13px] text-slate-500 line-clamp-3 leading-relaxed">
                BETO a pu consulter la loi référendaire dans sa version adoptée, celle de quarante-cinq articles qui attend la promulgation du chef de l'État...
              </p>
              <div className="text-[11px] text-slate-400 font-bold uppercase pt-1">
                <span className="text-secondary">POLITIQUE</span> <span className="text-slate-300">|</span> 👤 LA RÉDACTION <span className="text-slate-300">|</span> 🕒 il y a 46 min
              </div>
            </div>

            <hr className="border-slate-100" />

            <div 
              className="group cursor-pointer space-y-2 p-3 hover:bg-slate-50 transition-colors rounded-lg border border-transparent hover:border-slate-100 hover:shadow-sm"
              onClick={() => handleArtClick(
                "Loi référendaire validée en RDC : ce que la décision de la Cour change, et les scénarios qui s'ouvrent",
                "POLITIQUE",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAdaDs7lhIH4fozL49uipD-23Bm_qyXF6WU-9vMaqSAkpCBFzxcKdtAbq9SUYFrFdYJnkZD3AeNfmW4RwBALuPEh4tiwz4OOQ9L-erhF4FClpek-yXR2XlJZA2MXbFiiE_GYdSa0xAfC9JSfWZWl2vtBPPCTFDMBfuFkn8NhYP89f9po8KcxYFtLPGHJKRudJxIyEwaMs7lexxfgBDqwKCfvR0vlya0Z3ivuBc0SvnRPYBtB9LYRVHxWQ"
              )}
            >
              <span className="bg-primary text-white text-[10px] font-extrabold uppercase px-2 py-0.5 tracking-wider inline-block rounded-sm shadow-sm">
                DÉCRYPTAGE
              </span>
              <h3 className="font-serif font-bold text-[16px] sm:text-[18px] leading-snug text-slate-900 group-hover:text-secondary transition-colors">
                Loi référendaire validée en RDC : ce que la décision de la Cour change, et les scénarios qui s'ouvrent
              </h3>
              <div className="text-[10px] text-slate-400 font-bold uppercase pt-0.5">
                <span className="text-red-600">POLITIQUE</span> <span className="text-slate-300">|</span> 👤 LA RÉDACTION <span className="text-slate-300">|</span> 🕒 il y a 6h
              </div>
            </div>
          </div>

          {/* Middle Column (Main Big Featured Article) */}
          <div className="lg:col-span-6 space-y-2">
            <div 
              className="group cursor-pointer space-y-2"
              onClick={() => handleArtClick(
                "RDC: La Cour constitutionnelle déclare la loi sur le Référendum conforme à la Constitution, sous réserve de 13 articles",
                "POLITIQUE",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuB_b3ekPwmxr03O0PKIbZ5RRGc2aiGoIeNpyGHIsoNw3goKO-MiztBpkgYnAh8JCBvlkFPkpCjbChBjNjy7s87m8bSOrwDVHwDTzTy3LB-d3rqnABZh68uWCH0-xfqqaqWHoYaDmrFGNzy0CkFCXip0CPVbGTO6rvmKr84fXjayIrK_EI0mOV3_cAFy8NySqJMtLSyESvoi3kA0Sp6MhJ3EdfR3KyCFtsfnRHUf6vLXpMyJALHgXkFh3w"
              )}
            >
              <div className="relative overflow-hidden bg-slate-900 border border-slate-200">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_b3ekPwmxr03O0PKIbZ5RRGc2aiGoIeNpyGHIsoNw3goKO-MiztBpkgYnAh8JCBvlkFPkpCjbChBjNjy7s87m8bSOrwDVHwDTzTy3LB-d3rqnABZh68uWCH0-xfqqaqWHoYaDmrFGNzy0CkFCXip0CPVbGTO6rvmKr84fXjayIrK_EI0mOV3_cAFy8NySqJMtLSyESvoi3kA0Sp6MhJ3EdfR3KyCFtsfnRHUf6vLXpMyJALHgXkFh3w" 
                  alt="Dieudonné Kamuleta Cour Constitutionnelle"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500 max-h-[340px]"
                />
                <div className="bg-black/85 text-white p-2 text-[11px] font-medium leading-snug">
                  Dieudonné Kamuleta, lors de l'audience publique du mercredi 15 janvier 2025, consacrée à l'examen du contentieux des résultats des législatives nationales de Yakoma et Masimanimba. Photo/Cour constitutionnelle
                </div>
              </div>

              <h2 className="font-serif font-black text-[20px] sm:text-[24px] leading-tight text-slate-900 group-hover:text-red-600 transition-colors">
                RDC: La Cour constitutionnelle déclare la loi sur le Référendum conforme à la Constitution, sous réserve de 13 articles
              </h2>

              <div className="text-[10px] text-slate-400 font-bold uppercase">
                <span className="text-red-600">POLITIQUE</span> <span className="text-slate-300">|</span> 👤 LA RÉDACTION <span className="text-slate-300">|</span> 🕒 il y a 6h
              </div>
            </div>
          </div>

          {/* Right Column (2 articles) */}
          <div className="lg:col-span-3 space-y-3 border-t lg:border-t-0 lg:border-l border-slate-200 pt-3 lg:pt-0 lg:pl-3.5">
            <div 
              className="group cursor-pointer space-y-1.5"
              onClick={() => handleArtClick(
                "Le spectaculaire retournement de veste de Bob Kabamba sur la révision constitutionnelle en RDC",
                "POLITIQUE",
                "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80"
              )}
            >
              <span className="bg-[#5B2C6F] text-white text-[9px] font-extrabold uppercase px-1.5 py-0.5 tracking-wider inline-block">
                DÉCRYPTAGE
              </span>
              <h3 className="font-serif font-bold text-[15px] sm:text-[17px] leading-snug text-slate-900 group-hover:text-red-600 transition-colors">
                Le spectaculaire retournement de veste de Bob Kabamba sur la révision constitutionnelle en RDC
              </h3>
              <p className="text-[12px] text-slate-500 line-clamp-3 leading-relaxed">
                Sur une même question, celle de savoir si la Constitution de 2006 convient encore à la RDC, le politologue Bob Kabamba a tenu...
              </p>
              <div className="text-[10px] text-slate-400 font-bold uppercase pt-0.5">
                👤 LA RÉDACTION <span className="text-slate-300">|</span> 🕒 il y a 7h
              </div>
            </div>

            <hr className="border-slate-200" />

            <div 
              className="group cursor-pointer space-y-1.5"
              onClick={() => handleArtClick(
                "Alpha Condé, l'invité qui n'apparaît sur aucune photo du dialogue congolais",
                "POLITIQUE",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAdaDs7lhIH4fozL49uipD-23Bm_qyXF6WU-9vMaqSAkpCBFzxcKdtAbq9SUYFrFdYJnkZD3AeNfmW4RwBALuPEh4tiwz4OOQ9L-erhF4FClpek-yXR2XlJZA2MXbFiiE_GYdSa0xAfC9JSfWZWl2vtBPPCTFDMBfuFkn8NhYP89f9po8KcxYFtLPGHJKRudJxIyEwaMs7lexxfgBDqwKCfvR0vlya0Z3ivuBc0SvnRPYBtB9LYRVHxWQ"
              )}
            >
              <span className="text-red-600 text-[10px] font-black uppercase tracking-wider block">
                ALPHA CONDÉ
              </span>
              <h3 className="font-serif font-bold text-[15px] sm:text-[17px] leading-snug text-slate-900 group-hover:text-red-600 transition-colors">
                Alpha Condé, l'invité qui n'apparaît sur aucune photo du dialogue congolais
              </h3>
              <p className="text-[12px] text-slate-500 line-clamp-3 leading-relaxed">
                L'ancien président guinéen participe aux consultations sur le dialogue national congolais et se trouvait à Kinshasa...
              </p>
              <div className="text-[10px] text-slate-400 font-bold uppercase pt-0.5">
                👤 LA RÉDACTION <span className="text-slate-300">|</span> 🕒 il y a 8h
              </div>
            </div>
          </div>

        </div>

        {/* Bottom 4-Card Grid */}
        <div className="pt-3.5 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* Card 1 */}
          <div 
            className="group cursor-pointer space-y-1.5"
            onClick={() => handleArtClick(
              "50 millions détournés : les révélations qui pèsent sur Constant Mutamba dans le procès...",
              "POLITIQUE",
              "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80"
            )}
          >
            <div className="aspect-[16/10] overflow-hidden bg-slate-100 border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80" 
                alt="Constant Mutamba"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-red-600 text-[10px] font-extrabold uppercase tracking-wider block">POLITIQUE</span>
            <h4 className="font-serif font-bold text-[14px] leading-tight text-slate-900 group-hover:text-red-600 transition-colors">
              50 millions détournés : les révélations qui pèsent sur Constant Mutamba dans le procès...
            </h4>
            <div className="text-[10px] text-slate-400 font-semibold uppercase">
              👤 LA RÉDACTION <span className="text-slate-300">|</span> 🕒 il y a 8h
            </div>
          </div>

          {/* Card 2 */}
          <div 
            className="group cursor-pointer space-y-1.5"
            onClick={() => handleArtClick(
              "Loi référendaire : la Cour constitutionnelle examine ce mardi la requête de Tshisekedi",
              "POLITIQUE",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuB_b3ekPwmxr03O0PKIbZ5RRGc2aiGoIeNpyGHIsoNw3goKO-MiztBpkgYnAh8JCBvlkFPkpCjbChBjNjy7s87m8bSOrwDVHwDTzTy3LB-d3rqnABZh68uWCH0-xfqqaqWHoYaDmrFGNzy0CkFCXip0CPVbGTO6rvmKr84fXjayIrK_EI0mOV3_cAFy8NySqJMtLSyESvoi3kA0Sp6MhJ3EdfR3KyCFtsfnRHUf6vLXpMyJALHgXkFh3w"
            )}
          >
            <div className="aspect-[16/10] overflow-hidden bg-slate-100 border border-slate-200">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_b3ekPwmxr03O0PKIbZ5RRGc2aiGoIeNpyGHIsoNw3goKO-MiztBpkgYnAh8JCBvlkFPkpCjbChBjNjy7s87m8bSOrwDVHwDTzTy3LB-d3rqnABZh68uWCH0-xfqqaqWHoYaDmrFGNzy0CkFCXip0CPVbGTO6rvmKr84fXjayIrK_EI0mOV3_cAFy8NySqJMtLSyESvoi3kA0Sp6MhJ3EdfR3KyCFtsfnRHUf6vLXpMyJALHgXkFh3w" 
                alt="Cour constitutionnelle examine"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-red-600 text-[10px] font-extrabold uppercase tracking-wider block">POLITIQUE</span>
            <h4 className="font-serif font-bold text-[14px] leading-tight text-slate-900 group-hover:text-red-600 transition-colors">
              Loi référendaire : la Cour constitutionnelle examine ce mardi la requête de Tshisekedi
            </h4>
            <div className="text-[10px] text-slate-400 font-semibold uppercase">
              👤 LA RÉDACTION <span className="text-slate-300">|</span> 🕒 il y a 9h
            </div>
          </div>

          {/* Card 3 */}
          <div 
            className="group cursor-pointer space-y-1.5"
            onClick={() => handleArtClick(
              "RDC : le gouvernement et la majorité parlementaire renforcent leur cadre de...",
              "GOUVERNEMENT",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuChPem1hR3mrMAqDQ9HiZDA4lJ8VWYawyivJ63pc4LA1KqGw2Jbtna3CLPbiwMwkM7aYSkYMaWwjD-3R_39-MRjYiraXKaQ5GpxdO5-h4OUsNtnPL_spQ63TMIluwrUlTJvD6vggb8c5OtcUJ-byrfWLF4FZt5qqi4XCnIHBUqltkgvuIvADNowAeEsptlXYLN00JoKmXtGMg-cb1fpl5H3RW7xnmimWkkchy18Al17V1iVUz4f3GiuhA"
            )}
          >
            <div className="aspect-[16/10] overflow-hidden bg-slate-100 border border-slate-200">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChPem1hR3mrMAqDQ9HiZDA4lJ8VWYawyivJ63pc4LA1KqGw2Jbtna3CLPbiwMwkM7aYSkYMaWwjD-3R_39-MRjYiraXKaQ5GpxdO5-h4OUsNtnPL_spQ63TMIluwrUlTJvD6vggb8c5OtcUJ-byrfWLF4FZt5qqi4XCnIHBUqltkgvuIvADNowAeEsptlXYLN00JoKmXtGMg-cb1fpl5H3RW7xnmimWkkchy18Al17V1iVUz4f3GiuhA" 
                alt="Gouvernement RDC"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-red-600 text-[10px] font-extrabold uppercase tracking-wider block">GOUVERNEMENT</span>
            <h4 className="font-serif font-bold text-[14px] leading-tight text-slate-900 group-hover:text-red-600 transition-colors">
              RDC : le gouvernement et la majorité parlementaire renforcent leur cadre de...
            </h4>
            <div className="text-[10px] text-slate-400 font-semibold uppercase">
              👤 RÉDACTION KINSHASA <span className="text-slate-300">|</span> 🕒 il y a 9h
            </div>
          </div>

          {/* Card 4 */}
          <div 
            className="group cursor-pointer space-y-1.5"
            onClick={() => handleArtClick(
              "Dialogue en RDC : ce qui a été acté le 17 juillet, et les quatre inconnues qui restent",
              "POLITIQUE",
              "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80"
            )}
          >
            <div className="aspect-[16/10] overflow-hidden bg-slate-100 border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80" 
                alt="Dialogue RDC"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="bg-[#5B2C6F] text-white text-[9px] font-extrabold uppercase px-1.5 py-0.5 tracking-wider inline-block">
              DÉCRYPTAGE
            </span>
            <h4 className="font-serif font-bold text-[14px] leading-tight text-red-600 group-hover:underline transition-colors">
              Dialogue en RDC : ce qui a été acté le 17 juillet, et les quatre inconnues qui restent
            </h4>
            <div className="text-[10px] text-slate-400 font-semibold uppercase">
              👤 LA RÉDACTION <span className="text-slate-300">|</span> 🕒 il y a 10h
            </div>
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 2: ECONOMIE
         ========================================== */}
      <section id="economie" className="bg-white border border-slate-200 p-3 sm:p-5 rounded-none shadow-xs space-y-4">
        {/* Title Header */}
        <div className="text-center space-y-1.5 border-b border-slate-200 pb-3">
          <h2 className="text-[34px] sm:text-[40px] font-black uppercase font-serif tracking-tight text-slate-900 leading-none">
            ECONOMIE
          </h2>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
            <a href="#agrobusiness" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">AGROBUSINESS</a>
            <span>·</span>
            <a href="#finances" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">BANQUES ET FINANCES</a>
            <span>·</span>
            <a href="#btp" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">BTP &amp; INFRASTRUCTURES</a>
            <span>·</span>
            <a href="#commerce" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">COMMERCE &amp; INDUSTRIE</a>
            <span>·</span>
            <a href="#energie" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">ÉNERGIE</a>
            <span>·</span>
            <a href="#mines" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">MINES &amp; RESSOURCES</a>
            <span>·</span>
            <a href="#telecoms" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">TELECOMS</a>
          </div>
        </div>

        {/* Top 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-1">
          
          {/* Left Column (2 articles) */}
          <div className="lg:col-span-3 space-y-3 border-b lg:border-b-0 lg:border-r border-slate-200 pb-3 lg:pb-0 lg:pr-3.5">
            <div 
              className="group cursor-pointer space-y-1.5"
              onClick={() => handleArtClick(
                "Essence à 2 640 francs à Kinshasa, 4 205 à l'Est : qui prend quoi sur chaque litre",
                "ÉCONOMIE",
                "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80"
              )}
            >
              <span className="bg-[#0e2a47] text-white text-[9px] font-extrabold uppercase px-1.5 py-0.5 tracking-wider inline-block">
                ENQUÊTE
              </span>
              <h3 className="font-serif font-bold text-[15px] sm:text-[17px] leading-snug text-slate-900 group-hover:text-red-600 transition-colors">
                Essence à 2 640 francs à Kinshasa, 4 205 à l'Est : qui prend quoi sur chaque litre
              </h3>
              <p className="text-[12px] text-slate-500 line-clamp-3 leading-relaxed">
                Une analyse détaillée de la structure des prix des carburants en RDC révèle les écarts majeurs entre la zone Ouest et la zone Est du pays...
              </p>
              <div className="text-[10px] text-slate-400 font-bold uppercase pt-0.5">
                <span className="text-red-600">ÉCONOMIE</span> <span className="text-slate-300">|</span> 👤 LA RÉDACTION <span className="text-slate-300">|</span> 🕒 il y a 2h
              </div>
            </div>

            <hr className="border-slate-200" />

            <div 
              className="group cursor-pointer space-y-1.5"
              onClick={() => handleArtClick(
                "Le mythe des 24 000 milliards de dollars : d'où vient ce chiffre souvent répété sur la RDC",
                "ÉCONOMIE",
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
              )}
            >
              <span className="bg-[#5B2C6F] text-white text-[9px] font-extrabold uppercase px-1.5 py-0.5 tracking-wider inline-block">
                DÉCRYPTAGE
              </span>
              <h3 className="font-serif font-bold text-[15px] sm:text-[16px] leading-snug text-slate-900 group-hover:text-red-600 transition-colors">
                Le mythe des 24 000 milliards de dollars : d'où vient ce chiffre souvent répété sur la RDC
              </h3>
              <div className="text-[10px] text-slate-400 font-bold uppercase pt-0.5">
                <span className="text-red-600">ÉCONOMIE</span> <span className="text-slate-300">|</span> 👤 LA RÉDACTION <span className="text-slate-300">|</span> 🕒 il y a 4h
              </div>
            </div>
          </div>

          {/* Middle Column (Main Big Featured Article) */}
          <div className="lg:col-span-6 space-y-2">
            <div 
              className="group cursor-pointer space-y-2"
              onClick={() => handleArtClick(
                "350 millions de dollars à récupérer : l'État lance le recouvrement forcé des créances du FPI",
                "FINANCES",
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
              )}
            >
              <div className="relative overflow-hidden bg-slate-900 border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80" 
                  alt="Fonds de Promotion de l'Industrie RDC"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500 max-h-[340px]"
                />
                <div className="bg-black/85 text-white p-2 text-[11px] font-medium leading-snug">
                  Siège du Fonds de Promotion de l'Industrie (FPI) à Kinshasa. L'audit révèle que 350 millions USD de créances restent impayées par des opérateurs privés. Photo/Factis Media
                </div>
              </div>

              <h2 className="font-serif font-black text-[20px] sm:text-[24px] leading-tight text-slate-900 group-hover:text-red-600 transition-colors">
                350 millions de dollars à récupérer : l'État lance le recouvrement forcé des créances du FPI
              </h2>

              <div className="text-[10px] text-slate-400 font-bold uppercase">
                <span className="text-red-600">FINANCES</span> <span className="text-slate-300">|</span> 👤 LA RÉDACTION <span className="text-slate-300">|</span> 🕒 il y a 1h
              </div>
            </div>
          </div>

          {/* Right Column (2 articles) */}
          <div className="lg:col-span-3 space-y-3 border-t lg:border-t-0 lg:border-l border-slate-200 pt-3 lg:pt-0 lg:pl-3.5">
            <div 
              className="group cursor-pointer space-y-1.5"
              onClick={() => handleArtClick(
                "Budget 2027 : la RDC peut-elle concilier dépenses sécuritaires, masse salariale et investissements ?",
                "ÉCONOMIE",
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
              )}
            >
              <span className="bg-[#5B2C6F] text-white text-[9px] font-extrabold uppercase px-1.5 py-0.5 tracking-wider inline-block">
                ANALYSE
              </span>
              <h3 className="font-serif font-bold text-[15px] sm:text-[17px] leading-snug text-slate-900 group-hover:text-red-600 transition-colors">
                Budget 2027 : la RDC peut-elle concilier dépenses sécuritaires, masse salariale et investissements ?
              </h3>
              <p className="text-[12px] text-slate-500 line-clamp-3 leading-relaxed">
                Face aux contraintes macroéconomiques et aux impératifs de la défense nationale, le ministère des Finances ajuste ses prévisions...
              </p>
              <div className="text-[10px] text-slate-400 font-bold uppercase pt-0.5">
                👤 LA RÉDACTION <span className="text-slate-300">|</span> 🕒 il y a 5h
              </div>
            </div>

            <hr className="border-slate-200" />

            <div 
              className="group cursor-pointer space-y-1.5"
              onClick={() => handleArtClick(
                "Croissance à 5,5 %, inflation stabilisée : ce que le FMI retient de l'économie congolaise",
                "ÉCONOMIE",
                "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
              )}
            >
              <span className="text-red-600 text-[10px] font-black uppercase tracking-wider block">
                RAPPORT FMI
              </span>
              <h3 className="font-serif font-bold text-[15px] sm:text-[17px] leading-snug text-slate-900 group-hover:text-red-600 transition-colors">
                Croissance à 5,5 %, inflation stabilisée : ce que le FMI retient de l'économie congolaise
              </h3>
              <p className="text-[12px] text-slate-500 line-clamp-3 leading-relaxed">
                La dernière mission du FMI à Kinshasa salue la tenue de la monnaie nationale tout en appelant à accélérer les réformes...
              </p>
              <div className="text-[10px] text-slate-400 font-bold uppercase pt-0.5">
                👤 LA RÉDACTION <span className="text-slate-300">|</span> 🕒 il y a 6h
              </div>
            </div>
          </div>

        </div>

        {/* Bottom 4-Card Grid */}
        <div className="pt-3.5 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* Card 1 */}
          <div 
            className="group cursor-pointer space-y-1.5"
            onClick={() => handleArtClick(
              "Quatre millions de logements manquants : pourquoi se loger coûte si cher à Kinshasa",
              "LOGEMENT",
              "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80"
            )}
          >
            <div className="aspect-[16/10] overflow-hidden bg-slate-100 border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80" 
                alt="Logements RDC"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-red-600 text-[10px] font-extrabold uppercase tracking-wider block">LOGEMENT</span>
            <h4 className="font-serif font-bold text-[14px] leading-tight text-slate-900 group-hover:text-red-600 transition-colors">
              Quatre millions de logements manquants : pourquoi se loger coûte si cher à Kinshasa
            </h4>
            <div className="text-[10px] text-slate-400 font-semibold uppercase">
              👤 LA RÉDACTION <span className="text-slate-300">|</span> 🕒 il y a 7h
            </div>
          </div>

          {/* Card 2 */}
          <div 
            className="group cursor-pointer space-y-1.5"
            onClick={() => handleArtClick(
              "22 milliards de barils annoncés, 234 millions encaissés : l'énigme des hydrocarbures en RDC",
              "PÉTROLE",
              "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80"
            )}
          >
            <div className="aspect-[16/10] overflow-hidden bg-slate-100 border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80" 
                alt="Pétrole congolais"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-red-600 text-[10px] font-extrabold uppercase tracking-wider block">PÉTROLE</span>
            <h4 className="font-serif font-bold text-[14px] leading-tight text-slate-900 group-hover:text-red-600 transition-colors">
              22 milliards de barils annoncés, 234 millions encaissés : l'énigme des hydrocarbures en RDC
            </h4>
            <div className="text-[10px] text-slate-400 font-semibold uppercase">
              👤 LA RÉDACTION <span className="text-slate-300">|</span> 🕒 il y a 8h
            </div>
          </div>

          {/* Card 3 */}
          <div 
            className="group cursor-pointer space-y-1.5"
            onClick={() => handleArtClick(
              "L'IGF renforce son contrôle permanent sur les régies financières et la Banque Centrale",
              "FINANCES",
              "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80"
            )}
          >
            <div className="aspect-[16/10] overflow-hidden bg-slate-100 border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80" 
                alt="IGF RDC"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-red-600 text-[10px] font-extrabold uppercase tracking-wider block">IGF &amp; FINANCES</span>
            <h4 className="font-serif font-bold text-[14px] leading-tight text-slate-900 group-hover:text-red-600 transition-colors">
              L'IGF renforce son contrôle permanent sur les régies financières et la Banque Centrale
            </h4>
            <div className="text-[10px] text-slate-400 font-semibold uppercase">
              👤 RÉDACTION KINSHASA <span className="text-slate-300">|</span> 🕒 il y a 9h
            </div>
          </div>

          {/* Card 4 */}
          <div 
            className="group cursor-pointer space-y-1.5"
            onClick={() => handleArtClick(
              "Filière du cobalt et du cuivre : réévaluation des redevances minières dans le Katanga",
              "MINES",
              "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
            )}
          >
            <div className="aspect-[16/10] overflow-hidden bg-slate-100 border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" 
                alt="Mines Katanga"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="bg-[#5B2C6F] text-white text-[9px] font-extrabold uppercase px-1.5 py-0.5 tracking-wider inline-block">
              DÉCRYPTAGE
            </span>
            <h4 className="font-serif font-bold text-[14px] leading-tight text-red-600 group-hover:underline transition-colors">
              Filière du cobalt et du cuivre : réévaluation des redevances minières dans le Katanga
            </h4>
            <div className="text-[10px] text-slate-400 font-semibold uppercase">
              👤 LA RÉDACTION <span className="text-slate-300">|</span> 🕒 il y a 10h
            </div>
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 3: SPORTS
         ========================================== */}
      <section id="sports" className="bg-white border border-slate-200 p-3 sm:p-5 rounded-none shadow-xs space-y-4">
        {/* Title Header */}
        <div className="text-center space-y-1.5 border-b border-slate-200 pb-3">
          <h2 className="text-[34px] sm:text-[40px] font-black uppercase font-serif tracking-tight text-slate-900 leading-none">
            SPORTS
          </h2>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
            <a href="#athletisme" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">ATHLÉTISME</a>
            <span>·</span>
            <a href="#basketball" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">BASKETBALL</a>
            <span>·</span>
            <a href="#boxe" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">BOXE</a>
            <span>·</span>
            <a href="#cyclisme" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">CYCLISME</a>
            <span>·</span>
            <a href="#football" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">FOOTBALL</a>
            <span>·</span>
            <a href="#jeux" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">JEUX &amp; COMPÉTITIONS</a>
            <span>·</span>
            <a href="#leopards" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">LÉOPARDS</a>
          </div>
        </div>

        {/* Top 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-1">
          
          {/* Left Column (2 articles) */}
          <div className="lg:col-span-3 space-y-3 border-b lg:border-b-0 lg:border-r border-slate-200 pb-3 lg:pb-0 lg:pr-3.5">
            <div 
              className="group cursor-pointer space-y-1.5"
              onClick={() => handleArtClick(
                "Léopards : après le Mondial, Lionel Mpasi appelle les binationaux à renforcer la RDC",
                "LÉOPARDS",
                "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80"
              )}
            >
              <span className="bg-[#5B2C6F] text-white text-[9px] font-extrabold uppercase px-1.5 py-0.5 tracking-wider inline-block">
                DÉCRYPTAGE
              </span>
              <h3 className="font-serif font-bold text-[15px] sm:text-[17px] leading-snug text-slate-900 group-hover:text-red-600 transition-colors">
                Léopards : après le Mondial, Lionel Mpasi appelle les binationaux à renforcer la RDC
              </h3>
              <p className="text-[12px] text-slate-500 line-clamp-3 leading-relaxed">
                Fort de l'expérience acquise sur la scène internationale, le gardien de but des Léopards lance un appel vibrant à la diaspora congolaise...
              </p>
              <div className="text-[10px] text-slate-400 font-bold uppercase pt-0.5">
                <span className="text-red-600">LÉOPARDS</span> <span className="text-slate-300">|</span> 👤 LA RÉDACTION <span className="text-slate-300">|</span> 🕒 il y a 2h
              </div>
            </div>

            <hr className="border-slate-200" />

            <div 
              className="group cursor-pointer space-y-1.5"
              onClick={() => handleArtClick(
                "Vinicius Junior : ce que l'on sait, et ce que l'on ignore, de son changement de visage",
                "FOOTBALL",
                "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
              )}
            >
              <span className="bg-[#5B2C6F] text-white text-[9px] font-extrabold uppercase px-1.5 py-0.5 tracking-wider inline-block">
                ANALYSE
              </span>
              <h3 className="font-serif font-bold text-[15px] sm:text-[16px] leading-snug text-slate-900 group-hover:text-red-600 transition-colors">
                Vinicius Junior : ce que l'on sait, et ce que l'on ignore, de son changement de visage
              </h3>
              <div className="text-[10px] text-slate-400 font-bold uppercase pt-0.5">
                <span className="text-red-600">FOOTBALL</span> <span className="text-slate-300">|</span> 👤 LA RÉDACTION <span className="text-slate-300">|</span> 🕒 il y a 4h
              </div>
            </div>
          </div>

          {/* Middle Column (Main Big Featured Article) */}
          <div className="lg:col-span-6 space-y-2">
            <div 
              className="group cursor-pointer space-y-2"
              onClick={() => handleArtClick(
                "Qui est Tegra Bolongo, l'attaquant d'origine congolaise de 15 ans que la Juventus a raflé à l'Inter",
                "MERCATO",
                "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
              )}
            >
              <div className="relative overflow-hidden bg-slate-900 border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80" 
                  alt="Tegra Bolongo Juventus"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500 max-h-[340px]"
                />
                <div className="bg-black/85 text-white p-2 text-[11px] font-medium leading-snug">
                  Tegra Bolongo, le jeune prodige d'origine congolaise recruté par le centre de formation de la Juventus de Turin. Photo/Factis Sports
                </div>
              </div>

              <h2 className="font-serif font-black text-[20px] sm:text-[24px] leading-tight text-slate-900 group-hover:text-red-600 transition-colors">
                Qui est Tegra Bolongo, l'attaquant d'origine congolaise de 15 ans que la Juventus a raflé à l'Inter
              </h2>

              <div className="text-[10px] text-slate-400 font-bold uppercase">
                <span className="text-red-600">MERCATO</span> <span className="text-slate-300">|</span> 👤 LA RÉDACTION <span className="text-slate-300">|</span> 🕒 il y a 1h
              </div>
            </div>
          </div>

          {/* Right Column (2 articles) */}
          <div className="lg:col-span-3 space-y-3 border-t lg:border-t-0 lg:border-l border-slate-200 pt-3 lg:pt-0 lg:pl-3.5">
            <div 
              className="group cursor-pointer space-y-1.5"
              onClick={() => handleArtClick(
                "Léopards : Lionel Mpasi révèle le code de discipline imposé par le sélectionneur",
                "LÉOPARDS",
                "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=600&q=80"
              )}
            >
              <span className="text-red-600 text-[10px] font-black uppercase tracking-wider block">
                RÉVÉLATION
              </span>
              <h3 className="font-serif font-bold text-[15px] sm:text-[17px] leading-snug text-slate-900 group-hover:text-red-600 transition-colors">
                Léopards : Lionel Mpasi révèle le code de discipline imposé par le sélectionneur
              </h3>
              <p className="text-[12px] text-slate-500 line-clamp-3 leading-relaxed">
                Règles strictes de rassemblement, gestion des téléphones et ponctualité : les coulisses du renouveau de l'équipe nationale...
              </p>
              <div className="text-[10px] text-slate-400 font-bold uppercase pt-0.5">
                👤 LA RÉDACTION <span className="text-slate-300">|</span> 🕒 il y a 5h
              </div>
            </div>

            <hr className="border-slate-200" />

            <div 
              className="group cursor-pointer space-y-1.5"
              onClick={() => handleArtClick(
                "« On n'était pas loin » : Lionel Mpasi raconte, de l'intérieur, le Mondial des Léopards",
                "DÉCRYPTAGE",
                "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80"
              )}
            >
              <span className="bg-[#5B2C6F] text-white text-[9px] font-extrabold uppercase px-1.5 py-0.5 tracking-wider inline-block">
                DÉCRYPTAGE
              </span>
              <h3 className="font-serif font-bold text-[15px] sm:text-[17px] leading-snug text-slate-900 group-hover:text-red-600 transition-colors">
                « On n'était pas loin » : Lionel Mpasi raconte, de l'intérieur, le Mondial des Léopards
              </h3>
              <p className="text-[12px] text-slate-500 line-clamp-3 leading-relaxed">
                Deux cent soixante-dix minutes intense, huit arrêts décisifs : retour complet sur le parcours héroïque de la sélection congolaise...
              </p>
              <div className="text-[10px] text-slate-400 font-bold uppercase pt-0.5">
                👤 LA RÉDACTION <span className="text-slate-300">|</span> 🕒 il y a 6h
              </div>
            </div>
          </div>

        </div>

        {/* Bottom 4-Card Grid */}
        <div className="pt-3.5 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* Card 1 */}
          <div 
            className="group cursor-pointer space-y-1.5"
            onClick={() => handleArtClick(
              "Passeport léopard : ceux qui disent non, ou pas encore à la sélection congolaise",
              "FOOTBALL",
              "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80"
            )}
          >
            <div className="aspect-[16/10] overflow-hidden bg-slate-100 border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80" 
                alt="Passeport Léopard"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-red-600 text-[10px] font-extrabold uppercase tracking-wider block">FOOTBALL</span>
            <h4 className="font-serif font-bold text-[14px] leading-tight text-slate-900 group-hover:text-red-600 transition-colors">
              Passeport léopard : ceux qui disent non, ou pas encore à la sélection congolaise
            </h4>
            <div className="text-[10px] text-slate-400 font-semibold uppercase">
              👤 LA RÉDACTION <span className="text-slate-300">|</span> 🕒 il y a 7h
            </div>
          </div>

          {/* Card 2 */}
          <div 
            className="group cursor-pointer space-y-1.5"
            onClick={() => handleArtClick(
              "Dettes du DCMP : une enveloppe de 1.4 million USD pour solder les litiges FIFA",
              "CRÉANCIERS",
              "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=600&q=80"
            )}
          >
            <div className="aspect-[16/10] overflow-hidden bg-slate-100 border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=600&q=80" 
                alt="Litiges FIFA DCMP"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-red-600 text-[10px] font-extrabold uppercase tracking-wider block">CRÉANCIERS</span>
            <h4 className="font-serif font-bold text-[14px] leading-tight text-slate-900 group-hover:text-red-600 transition-colors">
              Dettes du DCMP : une enveloppe de 1.4 million USD pour solder les litiges FIFA
            </h4>
            <div className="text-[10px] text-slate-400 font-semibold uppercase">
              👤 LA RÉDACTION <span className="text-slate-300">|</span> 🕒 il y a 8h
            </div>
          </div>

          {/* Card 3 */}
          <div 
            className="group cursor-pointer space-y-1.5"
            onClick={() => handleArtClick(
              "TP Mazembe : préparation intensive à Lubumbashi avant la Ligue des Champions CAF",
              "CLUBS",
              "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
            )}
          >
            <div className="aspect-[16/10] overflow-hidden bg-slate-100 border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80" 
                alt="TP Mazembe"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-red-600 text-[10px] font-extrabold uppercase tracking-wider block">CLUBS</span>
            <h4 className="font-serif font-bold text-[14px] leading-tight text-slate-900 group-hover:text-red-600 transition-colors">
              TP Mazembe : préparation intensive à Lubumbashi avant la Ligue des Champions CAF
            </h4>
            <div className="text-[10px] text-slate-400 font-semibold uppercase">
              👤 RÉDACTION LUBUMBASHI <span className="text-slate-300">|</span> 🕒 il y a 9h
            </div>
          </div>

          {/* Card 4 */}
          <div 
            className="group cursor-pointer space-y-1.5"
            onClick={() => handleArtClick(
              "Basketball RDC : les Chaux-Marrons qualifiés pour la phase finale de l'AfroBasket",
              "BASKETBALL",
              "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80"
            )}
          >
            <div className="aspect-[16/10] overflow-hidden bg-slate-100 border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80" 
                alt="Basketball RDC"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="bg-[#5B2C6F] text-white text-[9px] font-extrabold uppercase px-1.5 py-0.5 tracking-wider inline-block">
              DÉCRYPTAGE
            </span>
            <h4 className="font-serif font-bold text-[14px] leading-tight text-red-600 group-hover:underline transition-colors">
              Basketball RDC : les Chaux-Marrons qualifiés pour la phase finale de l'AfroBasket
            </h4>
            <div className="text-[10px] text-slate-400 font-semibold uppercase">
              👤 LA RÉDACTION <span className="text-slate-300">|</span> 🕒 il y a 10h
            </div>
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 4: PORTRAIT (Matching Image 4)
         ========================================== */}
      <section id="portrait" className="bg-white border border-slate-200 p-4 sm:p-6 rounded-none shadow-xs space-y-6">
        {/* Title Header */}
        <div className="text-center space-y-2 border-b border-slate-200 pb-4">
          <h2 className="text-[36px] sm:text-[44px] font-black uppercase font-serif tracking-tight text-slate-900 leading-none">
            PORTRAIT
          </h2>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
            <a href="#travel" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">TRAVEL</a>
            <span>·</span>
            <a href="#artdesign" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">ART &amp; DESIGN</a>
            <span>·</span>
            <a href="#lifestyle" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">LIFESTYLE</a>
            <span>·</span>
            <a href="#fashion" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">FASHION</a>
            <span>·</span>
            <a href="#innovateurs" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">INNOVATEURS</a>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
          
          {/* Main Featured Big Card (approx 8/12) */}
          <div 
            className="lg:col-span-8 group cursor-pointer relative overflow-hidden bg-slate-900 border border-slate-200 min-h-[380px] sm:min-h-[460px] flex flex-col justify-end p-6 sm:p-8"
            onClick={() => handleArtClick(
              "Well designed and well printed only for you and the audience.",
              "PORTRAIT",
              "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80"
            )}
          >
            {/* Background Image */}
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80" 
              alt="Climate Protest Youth"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            {/* Content over overlay */}
            <div className="relative z-10 space-y-3">
              <span className="bg-[#2563EB] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 inline-block rounded-xs">
                POLITICS
              </span>
              <h2 className="font-sans font-black text-[24px] sm:text-[34px] leading-tight text-white group-hover:text-blue-300 transition-colors">
                Well designed and well printed only for you and the audience.
              </h2>
              
              <div className="flex items-center gap-3 text-[12px] text-slate-200 font-medium pt-1">
                <div className="flex items-center gap-2">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" 
                    alt="Jon Deo" 
                    className="w-6 h-6 rounded-full object-cover border border-white/50"
                  />
                  <span>by <strong className="text-white">Jon Deo</strong></span>
                </div>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  March 26, 2022
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">chat_bubble_outline</span>
                  95 Comments
                </span>
              </div>
            </div>
          </div>

          {/* Right Column List with Circular Thumbnails (approx 4/12) */}
          <div className="lg:col-span-4 space-y-5 flex flex-col justify-between">
            {/* Item 1 */}
            <div 
              className="flex items-center gap-4 group cursor-pointer"
              onClick={() => handleArtClick(
                "Top 20 best thems plugin & on this year visit Expart",
                "TRAVEL",
                "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=400&q=80"
              )}
            >
              <img 
                src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=400&q=80" 
                alt="Travel" 
                referrerPolicy="no-referrer"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shrink-0 border border-slate-200 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="space-y-1 min-w-0">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">TRAVEL</span>
                <h4 className="font-sans font-extrabold text-[14px] sm:text-[15px] leading-snug text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2">
                  Top 20 best thems plugin &amp; on this year visit Expart
                </h4>
              </div>
            </div>

            {/* Item 2 */}
            <div 
              className="flex items-center gap-4 group cursor-pointer"
              onClick={() => handleArtClick(
                "That woman comes from of heaven look like angel",
                "ART & DESIGN",
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
              )}
            >
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" 
                alt="Art & Design" 
                referrerPolicy="no-referrer"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shrink-0 border border-slate-200 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="space-y-1 min-w-0">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">ART &amp; DESIGN</span>
                <h4 className="font-sans font-extrabold text-[14px] sm:text-[15px] leading-snug text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2">
                  That woman comes from of heaven look like angel
                </h4>
              </div>
            </div>

            {/* Item 3 */}
            <div 
              className="flex items-center gap-4 group cursor-pointer"
              onClick={() => handleArtClick(
                "Green leaves photo plant the with cute girl modeling",
                "LIFESTYLE",
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
              )}
            >
              <img 
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" 
                alt="Lifestyle" 
                referrerPolicy="no-referrer"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shrink-0 border border-slate-200 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="space-y-1 min-w-0">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">LIFESTYLE</span>
                <h4 className="font-sans font-extrabold text-[14px] sm:text-[15px] leading-snug text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2">
                  Green leaves photo plant the with cute girl modeling
                </h4>
              </div>
            </div>

            {/* Item 4 */}
            <div 
              className="flex items-center gap-4 group cursor-pointer"
              onClick={() => handleArtClick(
                "Peveraging tech to drive a better IT best experience",
                "FASHION",
                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80"
              )}
            >
              <img 
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" 
                alt="Fashion" 
                referrerPolicy="no-referrer"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shrink-0 border border-slate-200 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="space-y-1 min-w-0">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">FASHION</span>
                <h4 className="font-sans font-extrabold text-[14px] sm:text-[15px] leading-snug text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2">
                  Peveraging tech to drive a better IT best experience
                </h4>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ==========================================
          SECTION 5: OPINIONS (Matching Image 5)
         ========================================== */}
      <section id="opinions" className="bg-white border border-slate-200 p-4 sm:p-6 rounded-none shadow-xs space-y-6">
        {/* Title Header */}
        <div className="text-center space-y-2 border-b border-slate-200 pb-4">
          <h2 className="text-[36px] sm:text-[44px] font-black uppercase font-serif tracking-tight text-slate-900 leading-none">
            OPINIONS
          </h2>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
            <a href="#tribunes" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">TRIBUNES</a>
            <span>·</span>
            <a href="#chroniques" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">CHRONIQUES</a>
            <span>·</span>
            <a href="#destinations" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">DESTINATIONS &amp; REGARDS</a>
            <span>·</span>
            <a href="#regards" onClick={(e) => e.preventDefault()} className="hover:text-red-600 transition-colors">REGARDS CROISÉS</a>
          </div>
        </div>

        {/* Circular Destination / Opinions Carousel with Arrows */}
        <div className="relative px-8 pt-2">
          {/* Left Arrow Button */}
          <button 
            onClick={() => scrollCarousel('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-slate-300 shadow-md flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:text-black transition-all cursor-pointer"
            title="Précédent"
            aria-label="Précédent"
          >
            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
          </button>

          {/* Carousel Scroll Container */}
          <div 
            ref={carouselRef}
            className="flex items-center gap-6 sm:gap-8 overflow-x-auto scrollbar-none py-4 scroll-smooth"
            style={{ scrollbarWidth: 'none' }}
          >
            {/* Circle Item 1: Paris */}
            <div 
              className="flex flex-col items-center gap-2 group cursor-pointer shrink-0"
              onClick={() => handleArtClick("Paris : Bilan culturel et politiques urbaines", "OPINIONS", "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=300&q=80")}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-red-600 transition-all duration-300 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=300&q=80" 
                  alt="Paris" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="font-sans font-extrabold text-[14px] sm:text-[15px] text-slate-900 group-hover:text-red-600 transition-colors">
                Paris
              </span>
            </div>

            {/* Circle Item 2: Marrakesh */}
            <div 
              className="flex flex-col items-center gap-2 group cursor-pointer shrink-0"
              onClick={() => handleArtClick("Marrakesh : Patrimoine et modernité architecturale", "OPINIONS", "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=300&q=80")}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-red-600 transition-all duration-300 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=300&q=80" 
                  alt="Marrakesh" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="font-sans font-extrabold text-[14px] sm:text-[15px] text-slate-900 group-hover:text-red-600 transition-colors">
                Marrakesh
              </span>
            </div>

            {/* Circle Item 3: Giza */}
            <div 
              className="flex flex-col items-center gap-2 group cursor-pointer shrink-0"
              onClick={() => handleArtClick("Giza : Les pyramides face au défi du tourisme durable", "OPINIONS", "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=300&q=80")}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-red-600 transition-all duration-300 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=300&q=80" 
                  alt="Giza" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="font-sans font-extrabold text-[14px] sm:text-[15px] text-slate-900 group-hover:text-red-600 transition-colors">
                Giza
              </span>
            </div>

            {/* Circle Item 4: Lagos */}
            <div 
              className="flex flex-col items-center gap-2 group cursor-pointer shrink-0"
              onClick={() => handleArtClick("Lagos : La mégapole africaine en pleine transition écologique", "OPINIONS", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80")}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-red-600 transition-all duration-300 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80" 
                  alt="Lagos" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="font-sans font-extrabold text-[14px] sm:text-[15px] text-slate-900 group-hover:text-red-600 transition-colors">
                Lagos
              </span>
            </div>

            {/* Circle Item 5: Casablanca */}
            <div 
              className="flex flex-col items-center gap-2 group cursor-pointer shrink-0"
              onClick={() => handleArtClick("Casablanca : Hub financier et vision stratégique", "OPINIONS", "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=300&q=80")}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-red-600 transition-all duration-300 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=300&q=80" 
                  alt="Casablanca" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="font-sans font-extrabold text-[14px] sm:text-[15px] text-slate-900 group-hover:text-red-600 transition-colors">
                Casablanca
              </span>
            </div>

            {/* Circle Item 6: Pekin */}
            <div 
              className="flex flex-col items-center gap-2 group cursor-pointer shrink-0"
              onClick={() => handleArtClick("Pekin : Diplomatie culturelle et grands équilibres", "OPINIONS", "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=300&q=80")}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-red-600 transition-all duration-300 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=300&q=80" 
                  alt="Pekin" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="font-sans font-extrabold text-[14px] sm:text-[15px] text-slate-900 group-hover:text-red-600 transition-colors">
                Pekin
              </span>
            </div>

            {/* Circle Item 7: Marseille */}
            <div 
              className="flex flex-col items-center gap-2 group cursor-pointer shrink-0"
              onClick={() => handleArtClick("Marseille : Carrefour méditerranéen des cultures", "OPINIONS", "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=300&q=80")}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-red-600 transition-all duration-300 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=300&q=80" 
                  alt="Marseille" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="font-sans font-extrabold text-[14px] sm:text-[15px] text-slate-900 group-hover:text-red-600 transition-colors">
                Marseille
              </span>
            </div>

            {/* Circle Item 8: London */}
            <div 
              className="flex flex-col items-center gap-2 group cursor-pointer shrink-0"
              onClick={() => handleArtClick("London : Enjeux post-Brexit et dynamiques d'innovation", "OPINIONS", "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=300&q=80")}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-red-600 transition-all duration-300 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=300&q=80" 
                  alt="London" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="font-sans font-extrabold text-[14px] sm:text-[15px] text-slate-900 group-hover:text-red-600 transition-colors">
                London
              </span>
            </div>
          </div>

          {/* Right Arrow Button */}
          <button 
            onClick={() => scrollCarousel('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-slate-300 shadow-md flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:text-black transition-all cursor-pointer"
            title="Suivant"
            aria-label="Suivant"
          >
            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
          </button>
        </div>
      </section>

    </div>
  );
};
