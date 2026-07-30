import React, { useState, useEffect } from 'react';
import { Article, FactCheck } from './types';
import { 
  HERO_FEATURED_ARTICLES, 
  FIL_INFO_ENTRIES, 
  FACT_CHECKS_DATA, 
  PROVINCES_EXETAT_MOCK 
} from './data/newsData';

import { Header } from './components/Header';
import { HeroBoard } from './components/HeroBoard';
import { VeriteFactCheck } from './components/VeriteFactCheck';
import { CategoryNewsboards } from './components/CategoryNewsboards';
import { CategoryDetailView } from './components/CategoryDetailView';
import { ArticleModal } from './components/ArticleModal';
import { FactCheckModal } from './components/FactCheckModal';
import { LiveTvModal } from './components/LiveTvModal';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';

// Ad Architecture & Sponsored Content Imports
import { PageSkin } from './components/ads/PageSkin';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeTab, setActiveTab] = useState('Accueil');
  const [currentDate, setCurrentDate] = useState('Mardi 28 Juillet 2026');

  // Modals state
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [factCheckModalOpen, setFactCheckModalOpen] = useState(false);
  const [liveTvOpen, setLiveTvOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  // Search query filter
  const [searchQuery, setSearchQuery] = useState('');

  const excludedCategories = ['accueil', 'fact check', 'live tv', 'portrait', 'opinions', 'podcast'];
  const isCategoryPage = !excludedCategories.includes(activeTab.toLowerCase().trim());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
      setShowScrollTop(winScroll > 300);
    };

    window.addEventListener('scroll', handleScroll);

    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = today.toLocaleDateString('fr-FR', options);
    const capitalized = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
    setCurrentDate(capitalized);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <PageSkin>
      <div className="bg-background text-on-background font-body antialiased min-h-screen flex flex-col selection:bg-secondary selection:text-white">
        {/* Top Reading Progress Bar */}
        <div 
          className="reading-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        />

        {/* 3-Level Header with Drawer & Subnav */}
        <Header
          currentDate={currentDate}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenLiveTv={() => setLiveTvOpen(true)}
          onOpenAuth={handleOpenAuth}
          onSearch={handleSearch}
          onArticleClick={(art) => setSelectedArticle(art)}
        />

        {/* Main Container */}
        <main className="max-w-[1400px] w-full mx-auto px-md py-lg flex-1 space-y-xxl">
          {/* Search Results Notice if active search query */}
          {searchQuery && (
            <div className="bg-surface border-l-4 border-secondary p-md flex justify-between items-center">
              <div>
                <span className="text-[12px] font-bold text-on-surface-variant uppercase">Résultats pour</span>
                <h3 className="text-[18px] font-extrabold text-primary font-headline">« {searchQuery} »</h3>
              </div>
              <button
                onClick={() => setSearchQuery('')}
                className="text-[12px] font-bold text-secondary uppercase hover:underline"
              >
                Effacer la recherche
              </button>
            </div>
          )}

          {isCategoryPage ? (
            <CategoryDetailView
              categoryName={activeTab}
              onArticleClick={(art) => setSelectedArticle(art)}
            />
          ) : activeTab.toLowerCase() === 'fact check' ? (
            <VeriteFactCheck
              factChecks={FACT_CHECKS_DATA}
              onOpenSubmitModal={() => setFactCheckModalOpen(true)}
            />
          ) : (
            <>
              {/* Level 1: Top Hero Board (La Une, Tribunes, Fil Info En Continu) */}
              <HeroBoard
                mainHero={HERO_FEATURED_ARTICLES[0]}
                leftArticles={HERO_FEATURED_ARTICLES}
                filInfo={FIL_INFO_ENTRIES}
                onArticleClick={(art) => setSelectedArticle(art)}
              />

              {/* Category Newsboards (Politique, Économie, Sports, Portrait, Opinions) */}
              <CategoryNewsboards
                onArticleClick={(art) => setSelectedArticle(art)}
              />
            </>
          )}
        </main>

        {/* Light Clean Footer */}
        <Footer />

        {/* Interactive Modals */}
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />

        <FactCheckModal
          isOpen={factCheckModalOpen}
          onClose={() => setFactCheckModalOpen(false)}
        />

        <LiveTvModal
          isOpen={liveTvOpen}
          onClose={() => setLiveTvOpen(false)}
        />

        <AuthModal
          isOpen={authModalOpen}
          mode={authMode}
          onClose={() => setAuthModalOpen(false)}
          onSwitchMode={(mode) => setAuthMode(mode)}
        />

        {/* Floating Scroll-to-Top Button */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 p-3.5 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center cursor-pointer group border border-red-400/40 focus:outline-none"
            aria-label="Retour en haut"
            title="Retourner en haut de la page"
          >
            <span className="material-symbols-outlined text-[22px] font-bold">arrow_upward</span>
          </button>
        )}
      </div>
    </PageSkin>
  );
}
