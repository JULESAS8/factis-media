import React from 'react';
import { AdSlot } from './AdSlot';

interface SidebarRectangleProps {
  brandName?: string;
}

export const SidebarRectangle: React.FC<SidebarRectangleProps> = ({
  brandName = 'CANAL+ RDC',
}) => {
  return (
    <div className="w-full flex justify-center my-4">
      <AdSlot
        id="sidebar-rectangle"
        emplacement="Sidebar-Top-Rectangle"
        largeur={300}
        hauteur={250}
        responsive={true}
        provider="AdSense"
        brandName={brandName}
        customImage="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=600&q=80"
      />
    </div>
  );
};
