import { Button } from '@/components/ui/button';
import React from 'react';
import Link from 'next/link';

interface NavbarProps {
  className: string;
  ulclassName: string;
}

export const Navbar = ({ className, ulclassName }: NavbarProps) => {
  return (
    <nav className={`${className}`}>
      <ul className={`${ulclassName}`}>
        <li>
          <Link href={'/'} className="hover:text-gray-400 text-sm lg:text-base">
            About
          </Link>
        </li>
        <li>
          <Link href={'/'} className="hover:text-gray-400 text-sm lg:text-base">
            Events
          </Link>
        </li>
        <li>
          <Link href={'/'} className="hover:text-gray-400 text-sm lg:text-base">
            Contact
          </Link>
        </li>
        <li>
          <Link href={'/'} className="hover:text-gray-400 text-sm lg:text-base">
            Blog
          </Link>
        </li>
        <li>
          <Link href={'/'} className="hover:text-gray-400 text-sm lg:text-base">
            Partners
          </Link>
        </li>
        <li>
          <Link href={'/'} className="hover:text-gray-400 text-sm lg:text-base">
            Careers
          </Link>
        </li>
      </ul>
    </nav>
  );
};

interface ButtonItemProps {
  className: string;
  btnName: string;
  btnToggle?: () => void;
}

export const ButtonItem = ({
  className,
  btnName,
  btnToggle,
}: ButtonItemProps) => {
  return (
    <button onClick={btnToggle} className={`${className}`}>
      {btnName}
    </button>
  );
};
