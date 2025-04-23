import React from 'react';
import { ButtonItem } from './navbar';

interface MenuMobileProps {
  toggle: () => void;
}

export const MenuMobile = ({ toggle }: MenuMobileProps) => {
  return (
    <ButtonItem
      btnToggle={toggle}
      className="btn-base border border-black font-semibold text-sm md:text-base"
      btnName="Menu"
    />
  );
};
