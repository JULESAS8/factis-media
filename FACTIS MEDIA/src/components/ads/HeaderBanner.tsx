import React from 'react';
import { AdSlot } from './AdSlot';

interface HeaderBannerProps {
  slotNumber?: 1 | 2;
  brandName?: string;
  customImage?: string;
}

export const HeaderBanner: React.FC<HeaderBannerProps> = ({
  slotNumber = 1,
  brandName = 'EQUINIX & BCDC BANK',
  customImage,
}) => {
  return (
    <div className="w-full max-w-[1152px] mx-auto my-4 px-2 sm:px-4">
      <AdSlot
        id={`header-banner-${slotNumber}`}
        emplacement={`Header-Banner-${slotNumber}`}
        largeur="100%"
        hauteur={90}
        responsive={true}
        lazyLoad={true}
        provider="GAM"
        brandName={brandName}
        customImage={customImage}
        className="mx-auto"
      />
    </div>
  );
};
