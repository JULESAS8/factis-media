import React, { useState } from 'react';

interface FactCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FactCheckModal: React.FC<FactCheckModalProps> = ({ isOpen, onClose }) => {
  const [claimText, setClaimText] = useState('');
  const [sourceUrl, setSourceUrl] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (claimText) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setClaimText('');
        setSourceUrl('');
        setUserEmail('');
        onClose();
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-md bg-black/75 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white text-on-background w-full max-w-lg rounded-xs shadow-2xl border border-outline-variant p-lg space-y-md">
        <div className="flex justify-between items-center border-b border-outline-variant pb-sm">
          <div className="flex items-center gap-2 text-primary font-headline font-extrabold text-[18px]">
            <span className="material-symbols-outlined text-secondary">verified</span>
            <span>Soumettre un Fait à Vérifier</span>
          </div>
          <button onClick={onClose} className="p-1 text-on-surface-variant hover:text-secondary">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-md text-center font-bold rounded-xs space-y-1">
            <span className="material-symbols-outlined text-[32px] text-emerald-600 block">check_circle</span>
            <div>Signalement bien reçu !</div>
            <p className="text-[12px] font-normal text-emerald-700">
              Notre cellule de vérification va analyser cette affirmation et publier le verdict sur FACTIS Vérité.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-md">
            <div>
              <label className="block text-[12px] font-bold uppercase text-primary mb-1">
                L'affirmation ou rumeur à vérifier *
              </label>
              <textarea
                required
                rows={3}
                value={claimText}
                onChange={(e) => setClaimText(e.target.value)}
                placeholder="Exemple: Déclaration vue sur Telegram affirmant une hausse de 50% du carburant..."
                className="w-full border border-outline-variant p-sm text-[13px] rounded-xs focus:border-secondary focus:outline-none"
              ></textarea>
            </div>

            <div>
              <label className="block text-[12px] font-bold uppercase text-primary mb-1">
                Lien de la source (optionnel)
              </label>
              <input
                type="url"
                value={sourceUrl}
                onChange={(e) => setSourceUrl(e.target.value)}
                placeholder="https://X.com/statut/..."
                className="w-full border border-outline-variant p-sm text-[13px] rounded-xs focus:border-secondary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[12px] font-bold uppercase text-primary mb-1">
                Votre email (pour notification du verdict)
              </label>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="votre.email@exemple.com"
                className="w-full border border-outline-variant p-sm text-[13px] rounded-xs focus:border-secondary focus:outline-none"
              />
            </div>

            <div className="flex justify-end gap-sm pt-sm">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-[12px] font-bold uppercase text-on-surface-variant hover:bg-surface"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="bg-secondary text-white font-black text-[12px] uppercase px-5 py-2 hover:bg-secondary-dark transition-colors cursor-pointer"
              >
                Envoyer au Fact-Checker →
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
