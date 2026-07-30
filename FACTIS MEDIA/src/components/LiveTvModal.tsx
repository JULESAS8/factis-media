import React from 'react';

interface LiveTvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LiveTvModal: React.FC<LiveTvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-md bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div className="bg-primary text-white w-full max-w-4xl rounded-xs overflow-hidden shadow-2xl border border-white/20">
        <div className="p-md bg-primary-light flex justify-between items-center border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-secondary rounded-full animate-ping"></span>
            <span className="font-headline font-extrabold text-[18px] uppercase">FACTIS LIVE TV · Direct Info 24/7</span>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full text-white cursor-pointer">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="aspect-video bg-black relative flex items-center justify-center">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI9UewbQoTwUXFuEeNEYODBe47XaywQ79xpaytj-N4a45p9-jkYlhWqb-Mw2xp2IgS9VIrN_vXpdgCf4cFQ3WUleAzzhqFK29oB9g4o9fvOelWiDdKTS5QZG7ZSBgoAb02k-F1eT3IwvYoclTZeMX-sPV_gJKcelMP18VP3kBOG_1LH3Y_f0xgMhE5mxVIE-NBdlGv-geyQhPcVjlYOt_vJ9DN8KAOcXvavysYG-Y8AbuJ9laohYVrtg"
            alt="Live Stream"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-md">
            <span className="material-symbols-outlined text-[64px] text-secondary animate-pulse mb-sm">
              play_circle
            </span>
            <h3 className="font-headline font-bold text-[22px]">Émission Spéciale : Géopolitique du Corridor de Lobito</h3>
            <p className="text-[13px] text-white/80 max-w-md mt-1">
              En direct avec nos correspondants à Luanda, Kolwezi et Washington.
            </p>
          </div>
        </div>

        <div className="p-md bg-primary-light flex justify-between items-center text-[12px] font-bold text-white/80">
          <span>Signal HD Stabilité 100% · Diffusion Continu</span>
          <button 
            onClick={() => alert('Mode Plein Écran activé')} 
            className="hover:text-secondary flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">fullscreen</span>
            Plein Écran
          </button>
        </div>
      </div>
    </div>
  );
};
