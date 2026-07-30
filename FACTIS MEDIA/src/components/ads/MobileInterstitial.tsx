import React, { useState, useEffect } from 'react';

interface MobileInterstitialProps {
  forceShow?: boolean;
  onClose?: () => void;
}

export const MobileInterstitial: React.FC<MobileInterstitialProps> = ({
  forceShow = false,
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [countDown, setCountDown] = useState(5);

  useEffect(() => {
    if (forceShow) {
      setIsOpen(true);
      return;
    }

    // Check if already seen in session
    const seen = sessionStorage.getItem('mobile_interstitial_seen');
    if (seen) return;

    // Track page view count
    const pvCount = parseInt(sessionStorage.getItem('pv_count') || '1', 10);
    sessionStorage.setItem('pv_count', (pvCount + 1).toString());

    let timer: NodeJS.Timeout;

    if (pvCount >= 2) {
      // Trigger on 2nd page view
      setIsOpen(true);
      sessionStorage.setItem('mobile_interstitial_seen', 'true');
    } else {
      // Trigger after 30 seconds
      timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('mobile_interstitial_seen', 'true');
      }, 30000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [forceShow]);

  // Handle countdown for close button
  useEffect(() => {
    if (!isOpen) return;
    if (countDown > 0) {
      const interval = setInterval(() => {
        setCountDown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isOpen, countDown]);

  const handleDismiss = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 font-sans animate-fadeIn">
      {/* Top Bar with Dismiss */}
      <div className="w-full max-w-md flex items-center justify-between text-white border-b border-slate-800 pb-3">
        <span className="text-[10px] uppercase tracking-widest font-bold text-amber-400 flex items-center gap-1.5">
          <span className="w-2 h-2 bg-amber-400 rounded-full animate-ping"></span>
          PUBLICITÉ INTERSTITIELLE MOBILE
        </span>

        {countDown > 0 ? (
          <span className="text-xs text-slate-400 font-mono">
            Fermeture dans {countDown}s
          </span>
        ) : (
          <button
            onClick={handleDismiss}
            className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider px-3 py-1.5 rounded flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>Fermer</span>
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        )}
      </div>

      {/* Main Fullscreen Banner Card */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden my-auto border border-slate-200">
        <div className="relative aspect-[4/5] bg-slate-900 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80"
            alt="Offre Exclusive RDC"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 flex flex-col justify-end text-white">
            <span className="bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-widest px-2.5 py-1 rounded w-fit mb-2">
              CANAL+ RDC • ACCÈS PREMIUM
            </span>
            <h3 className="font-serif font-black text-2xl leading-tight mb-2">
              Abonnez-vous à Canal+ Tout Canal avec 50% de réduction ce mois-ci !
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Profitez de toutes les chaînes de sport, documentaires, grands films et actualités en direct sur tous vos appareils en RDC.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  alert("Redirection vers l'offre Canal+");
                  handleDismiss();
                }}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest py-3 rounded text-center shadow-lg transition-transform active:scale-95 cursor-pointer"
              >
                PROFITER DE L'OFFRE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer note */}
      <div className="text-[11px] text-slate-400 text-center font-sans">
        Publicité conforme aux règles IAB • 1 affichage par session
      </div>
    </div>
  );
};
