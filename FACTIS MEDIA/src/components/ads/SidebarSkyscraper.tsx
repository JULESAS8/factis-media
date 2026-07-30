import React, { useState, useEffect } from 'react';
import { AdSlot } from './AdSlot';

interface SidebarSkyscraperProps {
  brandName?: string;
}

export const SidebarSkyscraper: React.FC<SidebarSkyscraperProps> = ({
  brandName = 'AIR TEL RDC 5G',
}) => {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCompact(window.innerWidth < 1200);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const height = isCompact ? 250 : 600;

  return (
    <div className="w-full flex justify-center my-6 sticky top-20">
      <AdSlot
        id="sidebar-skyscraper"
        emplacement="Sidebar-Skyscraper-Sticky"
        largeur={300}
        hauteur={height}
        sticky={true}
        responsive={true}
        provider="Prebid"
        brandName={brandName}
        customImage={
          isCompact
            ? 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80'
            : 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=600&q=80'
        }
      />
    </div>
  );
};
