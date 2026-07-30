import React from 'react';

interface PageSkinProps {
  activeSkin?: 'none' | 'vodacom' | 'canal' | 'orange' | 'airfrance';
  children: React.ReactNode;
}

export const PageSkin: React.FC<PageSkinProps> = ({
  children,
}) => {
  return (
    <div className="w-full bg-white min-h-screen">
      {children}
    </div>
  );
};

