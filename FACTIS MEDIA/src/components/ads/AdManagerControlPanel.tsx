import React, { useState } from 'react';

interface AdManagerControlPanelProps {
  activeSkin: 'none' | 'vodacom' | 'canal' | 'orange' | 'airfrance';
  onChangeSkin: (skin: 'none' | 'vodacom' | 'canal' | 'orange' | 'airfrance') => void;
  onTriggerInterstitial: () => void;
  adsEnabled: boolean;
  onToggleAds: (enabled: boolean) => void;
}

export const AdManagerControlPanel: React.FC<AdManagerControlPanelProps> = ({
  activeSkin,
  onChangeSkin,
  onTriggerInterstitial,
  adsEnabled,
  onToggleAds,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<'GAM' | 'AdSense' | 'Prebid'>('GAM');
  const [abTestGroup, setAbTestGroup] = useState<'A' | 'B'>('A');

  return (
    <>
      {/* Trigger floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-40 bg-slate-900 hover:bg-black text-amber-400 border border-amber-500/40 shadow-2xl px-3.5 py-2 rounded-full flex items-center gap-2 text-xs font-black uppercase tracking-wider transition-all transform hover:scale-105 cursor-pointer font-sans"
        title="Ouvrir le panneau de gestion des publicités GAM/AdSense"
      >
        <span className="material-symbols-outlined text-[18px] text-amber-400">
          admin_panel_settings
        </span>
        <span>Ad Manager Engine</span>
        <span className="bg-emerald-500 text-slate-950 text-[9px] px-1.5 py-0.5 rounded-full font-bold">
          LIVE
        </span>
      </button>

      {/* Slide-over Control Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex justify-end animate-fadeIn font-sans">
          <div className="w-full max-w-md bg-white h-full shadow-2xl overflow-y-auto p-6 space-y-6 flex flex-col justify-between border-l border-slate-200">
            {/* Header */}
            <div className="space-y-2 border-b border-slate-200 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-600 text-2xl">
                    analytics
                  </span>
                  <h3 className="font-serif font-black text-lg text-slate-900">
                    Gestionnaire de Publicités
                  </h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-slate-900 cursor-pointer p-1"
                >
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
              </div>
              <p className="text-xs text-slate-500">
                Moteur de monétisation Google Ad Manager, Prebid.js & Amazon TAM intégré.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3 bg-slate-900 text-white p-4 rounded-lg font-mono">
              <div>
                <span className="text-[10px] text-slate-400 uppercase">eCPM Moyen</span>
                <span className="block text-base font-bold text-emerald-400">3.45 $</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase">Taux de Remplissage</span>
                <span className="block text-base font-bold text-cyan-400">98.2 %</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase">Core Web Vitals CLS</span>
                <span className="block text-base font-bold text-amber-400">0.012 (Excellent)</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase">Max Screen Density</span>
                <span className="block text-base font-bold text-white">&lt; 30 %</span>
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-5 divide-y divide-slate-100">
              {/* Toggle Ads */}
              <div className="pt-2 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Affichage Global des Publicités</h4>
                  <p className="text-[11px] text-slate-500">Activer/Désactiver toutes les annonces</p>
                </div>
                <button
                  onClick={() => onToggleAds(!adsEnabled)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors cursor-pointer ${
                    adsEnabled ? 'bg-emerald-600' : 'bg-slate-300'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      adsEnabled ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Page Skin Campaign */}
              <div className="pt-4 space-y-2">
                <label className="text-xs font-bold text-slate-900 block">
                  Campagne Habillage Desktop (PageSkin)
                </label>
                <select
                  value={activeSkin}
                  onChange={(e) => onChangeSkin(e.target.value as any)}
                  className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-xs font-medium rounded p-2.5 focus:outline-none"
                >
                  <option value="canal">Canal+ RDC (Tout Canal)</option>
                  <option value="vodacom">Vodacom 5G RDC</option>
                  <option value="orange">Orange Money RDC</option>
                  <option value="airfrance">Air France Kinshasa</option>
                  <option value="none">Aucun Habillage (Désactivé)</option>
                </select>
              </div>

              {/* Provider Selection */}
              <div className="pt-4 space-y-2">
                <label className="text-xs font-bold text-slate-900 block">
                  Serveur d'Annonces Principal
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['GAM', 'AdSense', 'Prebid'] as const).map((prov) => (
                    <button
                      key={prov}
                      onClick={() => setSelectedProvider(prov)}
                      className={`text-xs font-bold py-2 rounded border transition-all cursor-pointer ${
                        selectedProvider === prov
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {prov}
                    </button>
                  ))}
                </div>
              </div>

              {/* Test Interstitial */}
              <div className="pt-4 space-y-2">
                <h4 className="text-xs font-bold text-slate-900">Test Interstitiel Mobile</h4>
                <button
                  onClick={onTriggerInterstitial}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider py-2.5 rounded transition-colors cursor-pointer"
                >
                  ⚡ Tester l'Interstitiel Plein Écran
                </button>
              </div>

              {/* A/B Testing Group */}
              <div className="pt-4 space-y-2">
                <label className="text-xs font-bold text-slate-900 block">
                  Groupe A/B Testing Publicitaire
                </label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setAbTestGroup('A')}
                    className={`flex-1 text-xs font-bold py-2 rounded border cursor-pointer ${
                      abTestGroup === 'A' ? 'bg-amber-500 text-slate-950 border-amber-600' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    Groupe A (Std Density)
                  </button>
                  <button
                    onClick={() => setAbTestGroup('B')}
                    className={`flex-1 text-xs font-bold py-2 rounded border cursor-pointer ${
                      abTestGroup === 'B' ? 'bg-amber-500 text-slate-950 border-amber-600' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    Groupe B (Native Heavy)
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-slate-200 pt-4 text-center">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                Conforme IAB Europe & Google Ad Manager 2026
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
