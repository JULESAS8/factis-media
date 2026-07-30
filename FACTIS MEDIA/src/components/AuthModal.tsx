import React, { useState } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  mode: 'login' | 'register';
  onClose: () => void;
  onSwitchMode: (newMode: 'login' | 'register') => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, mode, onClose, onSwitchMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-md bg-black/75 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white text-on-background w-full max-w-md rounded-xs shadow-2xl border border-outline-variant p-lg space-y-md">
        <div className="flex justify-between items-center border-b border-outline-variant pb-sm">
          <div className="flex items-center gap-2 font-headline font-extrabold text-[20px] text-primary">
            <span>FACT</span><span className="text-secondary">IS</span>
            <span className="text-[12px] font-normal text-on-surface-variant">
              · {mode === 'login' ? 'Connexion' : 'Création de compte'}
            </span>
          </div>
          <button onClick={onClose} className="p-1 text-on-surface-variant hover:text-secondary">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {success ? (
          <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-md text-center font-bold rounded-xs space-y-1">
            <span className="material-symbols-outlined text-[32px] text-emerald-600 block">check_circle</span>
            <div>{mode === 'login' ? 'Connexion réussie !' : 'Compte créé avec succès !'}</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-md">
            {mode === 'register' && (
              <div>
                <label className="block text-[12px] font-bold uppercase text-primary mb-1">Nom complet</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jean Dupont"
                  className="w-full border border-outline-variant p-sm text-[13px] rounded-xs focus:border-secondary focus:outline-none"
                />
              </div>
            )}

            <div>
              <label className="block text-[12px] font-bold uppercase text-primary mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nom@exemple.com"
                className="w-full border border-outline-variant p-sm text-[13px] rounded-xs focus:border-secondary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[12px] font-bold uppercase text-primary mb-1">Mot de passe</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-outline-variant p-sm text-[13px] rounded-xs focus:border-secondary focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-black text-[12px] uppercase py-2.5 hover:bg-secondary transition-colors cursor-pointer mt-sm"
            >
              {mode === 'login' ? 'Se connecter' : 'S\'inscrire'}
            </button>

            <div className="text-center text-[12px] text-on-surface-variant pt-xs">
              {mode === 'login' ? (
                <p>
                  Pas encore de compte ?{' '}
                  <button
                    type="button"
                    onClick={() => onSwitchMode('register')}
                    className="text-secondary font-bold hover:underline"
                  >
                    S'inscrire gratuitement
                  </button>
                </p>
              ) : (
                <p>
                  Déjà un compte ?{' '}
                  <button
                    type="button"
                    onClick={() => onSwitchMode('login')}
                    className="text-secondary font-bold hover:underline"
                  >
                    Se connecter
                  </button>
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
