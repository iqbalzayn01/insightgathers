import { Button } from '@/components/ui/button';
import React from 'react';

interface MenuMobileProps {
  toggle: () => void;
}

export const MenuMobile = ({ toggle }: MenuMobileProps) => {
  return (
    <Button
      onClick={toggle}
      variant="outline"
      className="bg-transparent border border-black font-semibold text-sm md:text-base"
    >
      Menu
    </Button>
  );
};
