import React, { useState, useEffect } from 'react';
import { Article } from '../types';

interface HeaderProps {
  currentDate: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenLiveTv: () => void;
  onOpenAuth: (mode: 'login' | 'register') => void;
  onSearch: (query: string) => void;
  onArticleClick: (article: Article) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentDate,
  activeTab,
  setActiveTab,
  onOpenLiveTv,
  onOpenAuth,
  onSearch,
  onArticleClick,
}) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [activePillar, setActivePillar] = useState<'informer' | 'eduquer' | 'inspirer'>('informer');
  const [activeSubDrawer, setActiveSubDrawer] = useState<string | null>(null);

  // Top Ad Banner Carousel State
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [isAdVisible, setIsAdVisible] = useState(true);
  const [isAdPaused, setIsAdPaused] = useState(false);

  // Carousel Ad Data
  const ads = [
    {
      id: 1,
      badge: "AFRIQUE DU SUD",
      title: "Voyagez vers Johannesburg avec TAAG Angola Airlines",
      subtitle: "Kinshasa ⇄ Johannesburg",
      price: "$ 427",
      priceLabel: "Billets aller-retour tout compris dès",
      cta: "Réservez sur flytaag.com",
      link: "https://flytaag.com",
      bgGradient: "from-white via-slate-100 to-[#122A42]",
      logoText: "TAAG",
      bgImage: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      badge: "INNOVATION & DÉBIT",
      title: "Passez à la vitesse 5G Ultra en RDC avec Vodacom",
      subtitle: "Forfaits Internet illimités & roaming régional",
      price: "10 Go",
      priceLabel: "Bonus exclusif offert dès",
      cta: "Découvrir les offres 5G",
      link: "#",
      bgGradient: "from-red-950 via-slate-900 to-red-900",
      logoText: "Vodacom",
      bgImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      badge: "SERVICES FINANCIERS",
      title: "Gérez votre entreprise & vos transferts avec ilicoCash",
      subtitle: "La banque digitale N°1 en République Démocratique du Congo",
      price: "0 FC",
      priceLabel: "Frais d'ouverture de compte",
      cta: "Télécharger l'application",
      link: "#",
      bgGradient: "from-blue-950 via-slate-900 to-indigo-900",
      logoText: "RAWBANK",
      bgImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    }
  ];

  // Auto slide carousel timer
  useEffect(() => {
    if (!isAdVisible || isAdPaused) return;
    const timer = setInterval(() => {
      setCurrentAdIndex((prev) => (prev + 1) % ads.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAdVisible, isAdPaused, ads.length]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  // Middle scrollable categories
  const scrollingCategories = [
    'Politique',
    'Économie',
    'Société',
    'Sécurité',
    'Justice',
    'Environnement',
    'Sport',
    'Éducation',
    'Culture',
    'Portrait',
    'Opinions',
    'Entrepreneuriat',
    'International',
    'Diaspora',
    'Kongo Central',
  ];

  // Fixed right categories (Fact Check, Live TV, Podcast)
  const fixedRightCategories = [
    { id: 'Fact Check', label: 'Fact Check', icon: 'verified' },
    { id: 'Live TV', label: 'Live TV', icon: 'live_tv', isLive: true },
    { id: 'Podcast', label: 'Podcast', icon: 'podcasts' },
  ];

  const liveTickerItems = [
    "RDC : Le corridor de Lobito, un levier d'intégration économique régionale majeur pour l'Afrique centrale.",
    "FACT CHECK : Non, l'arrêté ministériel sur la hausse des taxes douanières n'a pas été abrogé.",
    "Épidémie Ebola : L'INSP annonce un renforcement immédiat des équipes de riposte sanitaire en Ituri.",
    "Exétat 2026 : Proclamation des résultats – Suivez les statistiques et taux de réussite province par province.",
    "Économie : Stabilisation du franc congolais et nouvelles mesures gouvernementales de soutien aux entreprises.",
    "International : Ouverture du sommet de l'Union Africaine sur la transition énergétique et le climat.",
  ];

  const currentAd = ads[currentAdIndex];

  return (
    <header className="w-full flex flex-col bg-white">
      {/* Top Banner - Animated Carousel Ad */}
      {isAdVisible && (
        <div
          className="relative w-full h-[140px] sm:h-[165px] bg-[#0a0f1d] border-b border-slate-800 text-white overflow-hidden group select-none flex items-center"
          onMouseEnter={() => setIsAdPaused(true)}
          onMouseLeave={() => setIsAdPaused(false)}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0 opacity-25 mix-blend-overlay">
            <img
              src={currentAd.bgImage}
              alt="Publicité"
              className="w-full h-full object-cover transition-all duration-700 scale-105"
            />
          </div>

          <div className="max-w-[1400px] mx-auto w-full h-full px-3 sm:px-6 relative z-10 flex items-center justify-between">
            {/* Left Prev Arrow */}
            <button
              onClick={() => setCurrentAdIndex((prev) => (prev - 1 + ads.length) % ads.length)}
              className="hidden md:flex p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer mr-2 shrink-0 border border-white/20"
              title="Publicité précédente"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>

            {/* Ad Content Container - Fixed Height Layout */}
            <div className="flex-1 flex flex-row items-center justify-between gap-3 md:gap-6 overflow-hidden h-full py-2">
              {/* Left Column: Text Details */}
              <div className="flex flex-col items-start text-left space-y-1 max-w-xl shrink min-w-0">
                <span className="inline-block px-3 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold tracking-wider bg-red-600 text-white uppercase border border-red-400/40 shrink-0">
                  {currentAd.badge}
                </span>
                <h4 className="text-[15px] sm:text-[19px] font-bold text-white tracking-tight leading-snug line-clamp-1">
                  {currentAd.title}
                </h4>
                <p className="text-[11px] sm:text-[13px] text-slate-300 font-medium truncate hidden xs:block">
                  {currentAd.subtitle}
                </p>
              </div>

              {/* Right Column: Price Tag & CTA Button */}
              <div className="flex items-center justify-end gap-3 sm:gap-5 shrink-0">
                <div className="text-right hidden sm:block">
                  <p className="text-[10px] text-slate-300 uppercase font-semibold">
                    {currentAd.priceLabel}
                  </p>
                  <p className="text-[20px] sm:text-[26px] font-black text-red-500 leading-none drop-shadow-sm">
                    {currentAd.price}
                  </p>
                </div>

                <a
                  href={currentAd.link}
                  onClick={(e) => { e.preventDefault(); alert(`Direction la page officielle : ${currentAd.title}`); }}
                  className="bg-red-600 hover:bg-red-700 text-white text-[12px] sm:text-[14px] font-bold px-4 sm:px-6 py-2 rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 cursor-pointer transform active:scale-95 border border-red-400/30 whitespace-nowrap"
                >
                  <span>{currentAd.cta}</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Right Next Arrow */}
            <button
              onClick={() => setCurrentAdIndex((prev) => (prev + 1) % ads.length)}
              className="hidden md:flex p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer ml-2 shrink-0 border border-white/20"
              title="Publicité suivante"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>

            {/* Ad Indicators */}
            <div className="absolute top-2 right-2 flex items-center gap-2 z-20">
              <span className="text-[9px] uppercase font-bold tracking-widest text-white/60 bg-black/50 px-1.5 py-0.5 rounded border border-white/10">
                Pub
              </span>
            </div>

            {/* Carousel Dots Indicator */}
            <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 flex items-center gap-1.5 z-20">
              {ads.map((ad, idx) => (
                <button
                  key={ad.id}
                  onClick={() => setCurrentAdIndex(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    idx === currentAdIndex ? 'w-6 bg-red-500' : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Aller à la pub ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Navigation Container (Top Utility Dark Bar + Main Menu + Ticker) */}
      <div className="sticky top-0 z-50 w-full bg-white border-b border-outline-variant shadow-md">
        {/* Top Utility Dark Bar - Fixed and Sticky */}
        <div className="bg-[#10141e] text-slate-300 text-[12px] font-medium py-2 px-3 sm:px-6 border-b border-slate-800">
          <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between items-center gap-y-1.5 gap-x-4">
            {/* Left Items: Clean Text without icons or enclosing boxes */}
            <div className="flex items-center flex-wrap gap-2.5 sm:gap-4 text-slate-200">
              {/* Date */}
              <span className="text-slate-300 font-semibold">
                Mercredi 29 juillet 2026
              </span>

              <span className="text-slate-600 hidden sm:inline">•</span>

              {/* Taux Devise */}
              <div className="flex items-center gap-2 text-[12px] font-medium">
                <span className="text-slate-400 font-bold uppercase tracking-wide">TAUX DEVISE :</span>
                <span className="text-white font-bold">1 USD = 2 850 CDF</span>
              </div>

              <span className="text-slate-600 hidden sm:inline">•</span>

              {/* Météo Kongo Central */}
              <div className="flex items-center gap-1.5 text-[12px] font-medium">
                <span className="material-symbols-outlined text-[16px] text-white">wb_sunny</span>
                <span className="text-white font-semibold">Matadi :</span>
                <span className="text-white font-bold">29°C</span>
              </div>
            </div>

            {/* Right Item: Phone Number */}
            <div className="flex items-center gap-2 text-white font-bold text-[12px]">
              <a
                href="tel:+243802221110"
                className="flex items-center gap-1.5 bg-secondary/90 hover:bg-secondary text-white px-3.5 py-1 rounded-xs transition-all border border-secondary/40 shadow-xs cursor-pointer"
                title="Appeler FACTIS"
              >
                <span className="material-symbols-outlined text-[15px]">call</span>
                <span>+243 802 221 110</span>
              </a>
            </div>
          </div>
        </div>

      {/* Main Bar (Level 1) */}
      <div className="bg-white border-b border-outline-variant py-2.5 px-md md:px-lg relative z-20">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center gap-2 sm:gap-4">
          {/* Left Group: Services Icon/Button + Logo */}
          <div className="flex items-center gap-2 sm:gap-3.5">
            {/* Services Dropdown Button */}
            <div className="relative">
              <button
                onClick={() => setSvcOpen(!svcOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-[12px] font-bold text-primary bg-white border border-outline-variant hover:border-primary/40 rounded-xs transition-all shadow-2xs cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">grid_view</span>
                <span className="hidden sm:inline">Services</span>
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </button>

              {svcOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setSvcOpen(false)} />
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-xs shadow-2xl border border-outline-variant py-2 z-50 animate-fadeIn">
                    <a href="#" className="flex items-center gap-2.5 px-4 py-2 text-[13px] font-semibold text-on-surface-variant hover:text-secondary hover:bg-surface" onClick={(e) => { e.preventDefault(); setSvcOpen(false); alert('Service Offres d\'emploi'); }}>
                      <span className="material-symbols-outlined text-[18px]">work</span>
                      Offres d'emploi
                    </a>
                    <a href="#" className="flex items-center gap-2.5 px-4 py-2 text-[13px] font-semibold text-on-surface-variant hover:text-secondary hover:bg-surface" onClick={(e) => { e.preventDefault(); setSvcOpen(false); alert('Service Appels d\'offres'); }}>
                      <span className="material-symbols-outlined text-[18px]">assignment</span>
                      Appels d'offres
                    </a>
                    <a href="#" className="flex items-center gap-2.5 px-4 py-2 text-[13px] font-semibold text-on-surface-variant hover:text-secondary hover:bg-surface" onClick={(e) => { e.preventDefault(); setSvcOpen(false); alert('Service Annonces'); }}>
                      <span className="material-symbols-outlined text-[18px]">campaign</span>
                      Annonces
                    </a>
                    <div className="border-t border-outline-variant my-1"></div>
                    <a href="#" className="flex items-center gap-2.5 px-4 py-2 text-[13px] font-semibold text-on-surface-variant hover:text-secondary hover:bg-surface" onClick={(e) => { e.preventDefault(); setSvcOpen(false); alert('Service Communiqués'); }}>
                      <span className="material-symbols-outlined text-[18px]">description</span>
                      Communiqués
                    </a>
                    <a href="#" className="flex items-center gap-2.5 px-4 py-2 text-[13px] font-semibold text-on-surface-variant hover:text-secondary hover:bg-surface" onClick={(e) => { e.preventDefault(); setSvcOpen(false); alert('Service Publicité'); }}>
                      <span className="material-symbols-outlined text-[18px]">storefront</span>
                      Publicité
                    </a>
                    <a href="#" className="flex items-center gap-2.5 px-4 py-2 text-[13px] font-semibold text-on-surface-variant hover:text-secondary hover:bg-surface" onClick={(e) => { e.preventDefault(); setSvcOpen(false); alert('Service Annuaire'); }}>
                      <span className="material-symbols-outlined text-[18px]">menu_book</span>
                      Annuaire
                    </a>
                  </div>
                </>
              )}
            </div>

            {/* Separator */}
            <span className="text-outline-variant/60 hidden sm:inline">|</span>

            {/* Logo: "factis" */}
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); setActiveTab('Accueil'); }}
              className="flex items-center gap-1 group py-0.5 cursor-pointer"
            >
              <span className="text-[28px] sm:text-[34px] md:text-[38px] font-black tracking-tighter text-[#1C2442] font-headline lowercase">
                factis
              </span>
              <div className="flex items-center -space-x-1 ml-0.5">
                <div className="w-2 sm:w-2.5 h-5 sm:h-6 bg-[#E11D48] transform -skew-x-12 rounded-[1px]" />
                <div className="w-2 sm:w-2.5 h-5 sm:h-6 bg-[#F59E0B] transform -skew-x-12 rounded-[1px]" />
                <div className="w-2 sm:w-2.5 h-5 sm:h-6 bg-[#2563EB] transform -skew-x-12 rounded-[1px]" />
              </div>
            </a>
          </div>

          {/* Right Group: Recherche, Magazine, S'abonner, Icone Profil */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* 1. Icone Recherche */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-1.5 text-slate-800 hover:text-secondary hover:bg-surface rounded-full transition-colors cursor-pointer flex items-center justify-center"
              aria-label="Recherche"
              title="Rechercher"
            >
              <span className="material-symbols-outlined text-[22px]">search</span>
            </button>

            {/* Separator */}
            <span className="hidden sm:inline text-outline-variant/60">|</span>

            {/* 2. Magazine */}
            <button
              onClick={() => setActiveTab('Magazine')}
              className="hidden sm:flex items-center gap-1.5 text-[14px] font-medium text-slate-800 hover:text-secondary transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">import_contacts</span>
              <span>Magazine</span>
            </button>

            {/* Separator */}
            <span className="hidden sm:inline text-outline-variant/60">|</span>

            {/* 3. S'abonner Pill Button */}
            <button
              onClick={() => onOpenAuth('register')}
              className="bg-[#0B132B] hover:bg-[#1C2442] text-white text-[14px] font-semibold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full transition-all cursor-pointer shadow-sm hover:shadow-md active:scale-95"
            >
              S'abonner
            </button>

            {/* 4. Icone Profil (Account Menu) */}
            <div className="relative">
              <button
                onClick={() => setAccountOpen(!accountOpen)}
                className="p-1.5 text-slate-800 hover:text-secondary rounded-full hover:bg-surface transition-colors cursor-pointer flex items-center justify-center"
                aria-label="Profil"
                title="Mon profil"
              >
                <span className="material-symbols-outlined text-[24px]">account_circle</span>
              </button>

              {accountOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setAccountOpen(false)} />
                  <div className="absolute right-0 mt-2 w-48 bg-white text-on-background rounded-xs shadow-2xl border border-outline-variant py-2 z-50 animate-fadeIn">
                    <button
                      onClick={() => { setAccountOpen(false); onOpenAuth('login'); }}
                      className="w-full text-left px-4 py-2 text-[13px] font-medium hover:bg-surface flex items-center gap-2 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">login</span>
                      Se connecter
                    </button>
                    <button
                      onClick={() => { setAccountOpen(false); onOpenAuth('register'); }}
                      className="w-full text-left px-4 py-2 text-[13px] font-medium hover:bg-surface flex items-center gap-2 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">person_add</span>
                      Créer un compte
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Night Blue Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[120] bg-[#0B132B] flex flex-col justify-center items-center p-4 sm:p-6 animate-fadeIn">
          {/* Close Button top-right */}
          <button
            type="button"
            onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
            className="absolute top-6 right-6 sm:top-10 sm:right-10 w-10 h-10 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center rounded-xs transition-all cursor-pointer border border-white/20 group"
            aria-label="Fermer la recherche"
            title="Fermer (Echap)"
          >
            <span className="material-symbols-outlined text-[24px] group-hover:scale-110 transition-transform">close</span>
          </button>

          {/* Center Modal Container */}
          <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-6 text-center">
            {/* FACTIS Logo replacing BETO */}
            <div
              className="flex items-center gap-1 group cursor-pointer mb-2"
              onClick={() => { setSearchOpen(false); setActiveTab('Accueil'); }}
            >
              <span className="text-[44px] sm:text-[56px] font-black tracking-tighter text-white font-headline lowercase">
                factis
              </span>
              <div className="flex items-center -space-x-1 ml-0.5">
                <div className="w-3 sm:w-3.5 h-8 sm:h-10 bg-[#E11D48] transform -skew-x-12 rounded-[1px]" />
                <div className="w-3 sm:w-3.5 h-8 sm:h-10 bg-[#F59E0B] transform -skew-x-12 rounded-[1px]" />
                <div className="w-3 sm:w-3.5 h-8 sm:h-10 bg-[#2563EB] transform -skew-x-12 rounded-[1px]" />
              </div>
            </div>

            {/* Search Box Input Bar */}
            <form
              onSubmit={(e) => {
                handleSearchSubmit(e);
                setSearchOpen(false);
              }}
              className="w-full flex items-stretch shadow-2xl rounded-xs overflow-hidden border border-white/20"
            >
              <div className="bg-slate-100 text-slate-500 px-3.5 sm:px-4 flex items-center justify-center border-r border-slate-300 shrink-0">
                <span className="material-symbols-outlined text-[22px]">search</span>
              </div>
              <input
                type="text"
                placeholder="Rechercher sur FACTIS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-slate-50 text-slate-900 px-4 py-3 sm:py-3.5 text-[15px] sm:text-[16px] font-medium focus:outline-none focus:bg-white placeholder-slate-400"
              />
              <button
                type="submit"
                className="bg-[#E11D48] hover:bg-[#BE123C] text-white px-5 sm:px-6 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                aria-label="Lancer la recherche"
              >
                <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
              </button>
            </form>

            {/* Popular Searches Section */}
            <div className="w-full flex flex-wrap items-center justify-center gap-2 text-[12px] mt-1">
              <span className="text-white/70 font-extrabold uppercase tracking-wider text-[11px] mr-1">
                POPULAIRE :
              </span>
              {['POLITIQUE', 'ÉCONOMIE', 'SÉCURITÉ', 'M23', 'COBALT', 'GOMA', 'FACT CHECK', 'RDC'].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    setSearchQuery(tag);
                    onSearch(tag);
                    setSearchOpen(false);
                  }}
                  className="bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold uppercase px-3 py-1.5 rounded-2xs border border-white/15 transition-all cursor-pointer hover:border-white/40"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Sub-navigation Bar (Level 2 - Fixed Left & Right, Scrollable Middle) */}
      <div className="bg-surface border-b border-outline-variant/80 h-11 flex items-center text-[13px] relative z-10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-2 sm:px-md w-full flex items-center h-full relative">
          {/* Left Fixed Icons Container (Home & RSS Feed) */}
          <div className="flex items-center gap-2.5 pr-3 mr-3 border-r border-outline-variant/70 shrink-0 bg-surface h-full z-20">
            {/* Home Icon */}
            <button
              onClick={() => setActiveTab('Accueil')}
              className={`relative flex items-center justify-center p-1.5 transition-colors cursor-pointer ${
                activeTab === 'Accueil' ? 'text-secondary font-bold' : 'text-primary hover:text-secondary'
              }`}
              title="Accueil"
            >
              <span className="material-symbols-outlined text-[20px]">home</span>
              {activeTab === 'Accueil' && (
                <span className="absolute bottom-0 left-1 right-1 h-[2.5px] bg-secondary rounded-full -mb-2" />
              )}
            </button>

            <span className="text-outline-variant text-[11px]">|</span>

            {/* RSS Feed Icon */}
            <button
              onClick={() => alert('Fil d\'actualité en direct & flux RSS')}
              className="flex items-center justify-center p-1.5 text-primary hover:text-secondary transition-colors cursor-pointer"
              title="Flux RSS / Fil d'actualité"
            >
              <span className="material-symbols-outlined text-[20px]">rss_feed</span>
            </button>
          </div>

          {/* Middle Horizontal Scrollable Categories Container */}
          <div className="flex-1 overflow-x-auto no-scrollbar flex items-center gap-4 sm:gap-5 whitespace-nowrap py-1 pr-3">
            {scrollingCategories.map((cat) => {
              const isActive = activeTab === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`text-[13px] font-semibold transition-colors cursor-pointer whitespace-nowrap py-1 ${
                    isActive
                      ? 'text-secondary font-bold border-b-2 border-secondary'
                      : 'text-on-surface-variant hover:text-secondary'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Fixed Right Categories Container (Fact Check, Live TV, Podcast) */}
          <div className="flex items-center gap-3 sm:gap-4 pl-3.5 ml-1 border-l border-outline-variant/80 shrink-0 bg-surface h-full z-20">
            {fixedRightCategories.map((cat) => {
              const isActive = activeTab === cat.id;
              const isLive = cat.isLive;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    if (isLive) {
                      onOpenLiveTv();
                    } else {
                      setActiveTab(cat.id);
                    }
                  }}
                  className={`flex items-center gap-1.5 text-[13px] font-semibold transition-colors cursor-pointer whitespace-nowrap py-1 ${
                    isActive
                      ? 'text-secondary font-bold border-b-2 border-secondary'
                      : 'text-on-surface-variant hover:text-secondary'
                  }`}
                >
                  {cat.icon && (
                    <span className={`material-symbols-outlined text-[17px] ${isLive ? 'animate-pulse text-secondary' : 'text-secondary'}`}>
                      {cat.icon}
                    </span>
                  )}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Night Blue Live Ticker Band ("En Direct") */}
      <div className="bg-[#0B132B] text-white border-t border-b border-white/10 h-10 flex items-center text-[13px] relative z-10 shadow-xs">
        <div className="max-w-[1400px] mx-auto px-md w-full flex items-center h-full">
          {/* Badge "EN DIRECT" */}
          <div className="bg-[#E11D48] text-white px-3 sm:px-3.5 py-1 text-[11px] font-black uppercase tracking-wider italic flex items-center gap-1.5 shrink-0 z-20 shadow-md mr-3 rounded-2xs">
            <span className="w-2 h-2 bg-white rounded-full animate-ping" />
            <span>EN DIRECT</span>
          </div>

          {/* Scrolling White Headlines */}
          <div className="relative flex-1 overflow-hidden min-w-0 h-full flex items-center">
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0B132B] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0B132B] to-transparent z-10 pointer-events-none" />

            <div className="flex whitespace-nowrap breaking-news-scroll gap-12">
              {[...liveTickerItems, ...liveTickerItems].map((item, index) => (
                <p key={index} className="text-[13px] font-medium text-white flex items-center gap-2.5 shrink-0 hover:text-gold transition-colors cursor-pointer">
                  <span className="w-1.5 h-1.5 bg-[#E11D48] rounded-full shrink-0" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[110] flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setDrawerOpen(false)}
          />

          <div className="relative w-full max-w-md bg-primary text-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
            {/* Drawer Header */}
            <div className="p-lg border-b border-white/10 flex justify-between items-center bg-primary-light">
              <div className="flex items-center gap-1 text-[28px] font-black font-headline lowercase">
                <span className="text-white">factis</span>
                <div className="flex items-center -space-x-1 ml-0.5">
                  <div className="w-2 h-4 bg-[#E11D48] transform -skew-x-12" />
                  <div className="w-2 h-4 bg-[#F59E0B] transform -skew-x-12" />
                  <div className="w-2 h-4 bg-[#2563EB] transform -skew-x-12" />
                </div>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full text-white cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Drawer Body */}
            <div className="p-lg space-y-lg flex-1">
              <div>
                <h4 className="text-[11px] font-black uppercase tracking-widest text-white/40 mb-sm">
                  Univers
                </h4>
                <div className="space-y-xs">
                  <button
                    onClick={() => { setActivePillar('informer'); setDrawerOpen(false); }}
                    className="w-full text-left py-2 px-3 rounded-xs font-bold text-[14px] flex items-center gap-2 bg-white/15 text-white"
                  >
                    <span className="material-symbols-outlined text-[20px] text-secondary">menu_book</span>
                    <span>S'INFORMER</span>
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-[11px] font-black uppercase tracking-widest text-white/40 mb-sm">
                  Rubriques
                </h4>
                <div className="grid grid-cols-2 gap-2 text-[13px]">
                  {scrollingCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveTab(cat);
                        setDrawerOpen(false);
                      }}
                      className="text-left py-1.5 px-2 hover:bg-white/10 rounded-xs text-white/80 hover:text-white"
                    >
                      {cat}
                    </button>
                  ))}
                  {fixedRightCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        if (cat.isLive) {
                          onOpenLiveTv();
                        } else {
                          setActiveTab(cat.id);
                        }
                        setDrawerOpen(false);
                      }}
                      className="text-left py-1.5 px-2 hover:bg-white/10 rounded-xs text-white/80 hover:text-white flex items-center gap-1.5 font-bold text-secondary"
                    >
                      {cat.icon && (
                        <span className="material-symbols-outlined text-[15px]">{cat.icon}</span>
                      )}
                      <span>{cat.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-lg border-t border-white/10 bg-primary-light flex justify-around text-center text-[12px] font-bold">
              <button onClick={() => { setDrawerOpen(false); onOpenAuth('login'); }} className="hover:text-secondary">
                S'abonner
              </button>
              <button onClick={() => { setDrawerOpen(false); alert('Aide & Contact FACTIS'); }} className="hover:text-secondary">
                Aide
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

