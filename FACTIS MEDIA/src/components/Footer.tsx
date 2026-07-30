import React, { useState } from 'react';

interface TopReadArticle {
  id: string;
  title: string;
  category: string;
  timeAgo: string;
  imageUrl: string;
}

const TOP_READ_ARTICLES: TopReadArticle[] = [
  {
    id: 'top-1',
    title: 'Le Corridor de Lobito : Comment une infrastructure redessine la géopolitique régionale.',
    category: 'Infrastructure',
    timeAgo: 'il y a 2h',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI9UewbQoTwUXFuEeNEYODBe47XaywQ79xpaytj-N4a45p9-jkYlhWqb-Mw2xp2IgS9VIrN_vXpdgCf4cFQ3WUleAzzhqFK29oB9g4o9fvOelWiDdKTS5QZG7ZSBgoAb02k-F1eT3IwvYoclTZeMX-sPV_gJKcelMP18VP3kBOG_1LH3Y_f0xgMhE5mxVIE-NBdlGv-geyQhPcVjlYOt_vJ9DN8KAOcXvavysYG-Y8AbuJ9laohYVrtg',
  },
  {
    id: 'top-2',
    title: 'Loi référendaire validée en RDC : ce que la décision de la Cour change, et les scénarios qui s\'ouvrent',
    category: 'Politique',
    timeAgo: 'il y a 4h',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdaDs7lhIH4fozL49uipD-23Bm_qyXF6WU-9vMaqSAkpCBFzxcKdtAbq9SUYFrFdYJnkZD3AeNfmW4RwBALuPEh4tiwz4OOQ9L-erhF4FClpek-yXR2XlJZA2MXbFiiE_GYdSa0xAfC9JSfWZWl2vtBPPCTFDMBfuFkn8NhYP89f9po8KcxYFtLPGHJKRudJxIyEwaMs7lexxfgBDqwKCfvR0vlya0Z3ivuBc0SvnRPYBtB9LYRVHxWQ',
  },
  {
    id: 'top-3',
    title: 'Épidémie Ebola : L\'INSP annonce un renforcement immédiat des équipes de riposte sanitaire',
    category: 'Santé',
    timeAgo: 'il y a 6h',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTU3y1jC40NOn8g6x-33tK191P8Xv1_6o98JmS_WqO58cPlG5bI9jX1wZJ_y7t7YxQ0N93J-G3zQ5C',
  },
  {
    id: 'top-4',
    title: 'Taux de change & Franc Congolais : mesures gouvernementales d\'urgence pour stabiliser le marché',
    category: 'Économie',
    timeAgo: 'il y a 8h',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA03p48SgJzJ68Z76v_B5c3W-k9gLqGj8d4u3Xw5s8m4c_G3t5y8L2aQ5z_7kX1w2y4v9pQ-H8m3L1k',
  },
];

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#0a0f1d] text-slate-200 border-t border-slate-800 pt-10 pb-6 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-10 border-b border-slate-800/80">
          
          {/* SECTION 1: À propos */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[26px] font-black tracking-tight text-white font-headline">
                FACT<span className="text-red-600">IS</span>
              </span>
              <span className="text-[10px] font-extrabold uppercase bg-red-600/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded">
                Média
              </span>
            </div>

            <p className="text-[13px] text-slate-300 leading-relaxed font-normal">
              Portail média indépendant d'information, d'investigation et de fact-checking. Un regard analytique, impartial et rigoureux sur la politique, l'économie et les grands enjeux sociétaux.
            </p>

            {/* Social Media Icons (Facebook, YouTube, X, Instagram, LinkedIn) */}
            <div className="pt-2">
              <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                Suivez-nous
              </h5>
              <div className="flex items-center gap-2.5 flex-wrap">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#1877F2] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer border border-slate-700/60"
                  title="Facebook"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#FF0000] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer border border-slate-700/60"
                  title="YouTube"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02l5.75-3.27-5.75-3.27v6.54z" />
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer border border-slate-700/60"
                  title="X (Twitter)"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#E4405F] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer border border-slate-700/60"
                  title="Instagram"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#0A66C2] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer border border-slate-700/60"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* SECTION 2: Rubriques */}
          <div className="space-y-3">
            <h4 className="text-[14px] font-extrabold uppercase text-white tracking-wider pb-1 border-b border-red-600/60 inline-block">
              Rubriques
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 text-[13px] text-slate-300 pt-1">
              <li>
                <a href="#politique" onClick={(e) => e.preventDefault()} className="hover:text-red-400 transition-colors flex items-center gap-1.5">
                  <span className="text-red-500 text-[10px]">▸</span> Politique &amp; Institutions
                </a>
              </li>
              <li>
                <a href="#economie" onClick={(e) => e.preventDefault()} className="hover:text-red-400 transition-colors flex items-center gap-1.5">
                  <span className="text-red-500 text-[10px]">▸</span> Économie &amp; Finances
                </a>
              </li>
              <li>
                <a href="#societe" onClick={(e) => e.preventDefault()} className="hover:text-red-400 transition-colors flex items-center gap-1.5">
                  <span className="text-red-500 text-[10px]">▸</span> Société &amp; Santé
                </a>
              </li>
              <li>
                <a href="#securite" onClick={(e) => e.preventDefault()} className="hover:text-red-400 transition-colors flex items-center gap-1.5">
                  <span className="text-red-500 text-[10px]">▸</span> Sécurité &amp; Défense
                </a>
              </li>
              <li>
                <a href="#justice" onClick={(e) => e.preventDefault()} className="hover:text-red-400 transition-colors flex items-center gap-1.5">
                  <span className="text-red-500 text-[10px]">▸</span> Justice &amp; Droits
                </a>
              </li>
              <li>
                <a href="#environnement" onClick={(e) => e.preventDefault()} className="hover:text-red-400 transition-colors flex items-center gap-1.5">
                  <span className="text-red-500 text-[10px]">▸</span> Environnement &amp; Climat
                </a>
              </li>
              <li>
                <a href="#sport" onClick={(e) => e.preventDefault()} className="hover:text-red-400 transition-colors flex items-center gap-1.5">
                  <span className="text-red-500 text-[10px]">▸</span> Sport &amp; Culture
                </a>
              </li>
              <li>
                <a href="#factcheck" onClick={(e) => e.preventDefault()} className="hover:text-red-400 transition-colors flex items-center gap-1.5 font-bold text-red-400">
                  <span className="text-red-500 text-[10px]">▸</span> Fact Check &amp; Vérité
                </a>
              </li>
            </ul>
          </div>

          {/* SECTION 3: Les plus lus (4 Articles with Thumbnails) */}
          <div className="space-y-3">
            <h4 className="text-[14px] font-extrabold uppercase text-white tracking-wider pb-1 border-b border-red-600/60 inline-block">
              Les plus lus
            </h4>

            <div className="space-y-3 pt-1">
              {TOP_READ_ARTICLES.map((article) => (
                <a
                  key={article.id}
                  href={`#article-${article.id}`}
                  onClick={(e) => e.preventDefault()}
                  className="flex gap-3 group items-center"
                >
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-14 h-14 rounded object-cover shrink-0 border border-slate-800 group-hover:border-red-500 transition-all duration-300"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-400 uppercase font-semibold mb-0.5">
                      <span className="text-red-400 font-bold">{article.category}</span>
                      <span>•</span>
                      <span>{article.timeAgo}</span>
                    </div>
                    <h5 className="text-[12px] font-semibold text-slate-200 group-hover:text-white line-clamp-2 leading-snug transition-colors">
                      {article.title}
                    </h5>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* SECTION 4: Newsletter */}
          <div className="space-y-3">
            <h4 className="text-[14px] font-extrabold uppercase text-white tracking-wider pb-1 border-b border-red-600/60 inline-block">
              Newsletter
            </h4>

            <p className="text-[13px] text-slate-300 leading-relaxed pt-1">
              Recevez quotidiennement l’essentiel de l'actualité et nos enquêtes directement dans votre boîte mail.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/80 border border-emerald-600/60 text-emerald-300 rounded text-[12px] font-medium flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-emerald-400">check_circle</span>
                <span>Merci ! Vous êtes maintenant inscrit à la newsletter.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2.5">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Saisissez votre email..."
                    className="w-full bg-[#101728] text-white placeholder-slate-400 text-[13px] px-3.5 py-2.5 rounded border border-slate-700/80 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-[12px] uppercase tracking-wider py-2.5 px-4 rounded transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer border border-red-500/40"
                >
                  <span>S'abonner</span>
                  <span className="material-symbols-outlined text-[16px]">send</span>
                </button>
              </form>
            )}

            <p className="text-[10px] text-slate-400 leading-normal">
              En vous inscrivant, vous acceptez de recevoir nos emails d'information. Vous pouvez vous désinscrire à tout moment.
            </p>
          </div>

        </div>

        {/* SECTION 5: Télécharger l'application Mobile (App Store & Google Play) */}
        <div className="py-5 my-6 border-t border-b border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#0d1427]/60 px-5 rounded-2xl border border-slate-800">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-full bg-red-600/15 border border-red-500/30 text-red-500 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px]">smartphone</span>
            </div>
            <div>
              <h4 className="text-[15px] font-bold text-white tracking-wide">
                Télécharger l'application FACTIS
              </h4>
              <p className="text-[12px] text-slate-400">
                L'actualité en temps réel et vos alertes info directement sur votre smartphone.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 flex-wrap justify-center shrink-0">
            {/* App Store Badge */}
            <button
              onClick={() => alert("Téléchargement de l'application FACTIS pour iOS")}
              className="bg-black hover:bg-slate-900 text-white px-4 py-2 rounded-xl border border-slate-700/80 flex items-center gap-3 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg hover:border-slate-500 group"
              title="Télécharger sur l'App Store"
            >
              <svg className="w-6 h-6 fill-current text-white shrink-0" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.67-.82 1.12-1.96.99-3.1-.96.04-2.13.64-2.81 1.44-.61.71-1.14 1.87-.99 2.99 1.08.08 2.16-.51 2.81-1.33z"/>
              </svg>
              <div className="text-left leading-tight">
                <div className="text-[9px] text-slate-300 font-medium">Télécharger sur</div>
                <div className="text-[13px] font-bold text-white tracking-tight">App Store</div>
              </div>
            </button>

            {/* Google Play Badge */}
            <button
              onClick={() => alert("Téléchargement de l'application FACTIS pour Android")}
              className="bg-[#00875a] hover:bg-[#00754e] text-white px-4 py-2 rounded-xl border border-emerald-500/40 flex items-center gap-3 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg group"
              title="Disponible sur Google Play"
            >
              <svg className="w-6 h-6 fill-current text-white shrink-0" viewBox="0 0 24 24">
                <path d="M3 20.5v-17c0-.55.33-.86.78-.58l12.87 8.58c.45.28.45.86 0 1.14L3.78 21.08c-.45.28-.78-.03-.78-.58zm13.78-7.86l2.81-1.87c.45-.28.45-.86 0-1.14l-2.81-1.87-2.61 2.44 2.61 2.44zm-3.66-3.42L3.84 3.71l8.59 5.51h.69zm0 5.56l-8.59 5.51 9.28-5.51h-.69z"/>
              </svg>
              <div className="text-left leading-tight">
                <div className="text-[9px] text-emerald-100 font-medium">Disponible sur</div>
                <div className="text-[13px] font-bold text-white tracking-tight">Google Play</div>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-slate-400 font-medium">
          <p>© 2026 FACTIS MEDIA. Tous droits réservés.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a href="#mentions" onClick={(e) => e.preventDefault()} className="hover:text-slate-200 transition-colors">
              Mentions légales
            </a>
            <span>•</span>
            <a href="#confidentialite" onClick={(e) => e.preventDefault()} className="hover:text-slate-200 transition-colors">
              Confidentialité
            </a>
            <span>•</span>
            <a href="#cookies" onClick={(e) => e.preventDefault()} className="hover:text-slate-200 transition-colors">
              Gestion des cookies
            </a>
            <span>•</span>
            <a href="#contact" onClick={(e) => e.preventDefault()} className="hover:text-slate-200 transition-colors">
              Contact &amp; Rédaction
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

