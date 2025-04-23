'use client';

import React, { useRef } from 'react';
import { motion, useCycle } from 'motion/react';

import { useDimensions } from './use-dimensions';

import { Logo } from './logo';
import { Navbar, ButtonItem } from './navbar';
import { MenuMobile } from './menu-mobile';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 100%)`,
    transition: {
      type: 'spring',
      stiffness: 10,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 100% 0%)',
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 100,
      damping: 40,
    },
  },
};

export const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <header className="2xl:container-base fixed inset-0 z-50 bg-colorsecondary h-fit flex items-center justify-between px-5 py-5">
      <a href="/" className="logo">
        <Logo />
      </a>
      <Navbar
        className="hidden md:flex"
        ulclassName="flex items-center justify-center gap-2"
      />
      <div className="hidden md:flex items-center gap-5">
        <ButtonItem
          className="btn-base hover:bg-colorprimary border border-black hover:border-colorprimary font-semibold text-sm lg:text-base"
          btnName="Sign In"
        />
        <ButtonItem
          className="btn-base bg-black hover:bg-colorprimary font-semibold text-colorprimary hover:text-black text-sm lg:text-base"
          btnName="Sign Up"
        />
      </div>

      {/* Mobile */}
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
        className="flex md:hidden"
      >
        <motion.div
          variants={sidebar}
          className="absolute grid -inset-0 -z-10 bg-colorsecondary w-full h-screen"
        >
          <Navbar
            className="grid justify-center mt-20"
            ulclassName="flex flex-col justify-center gap-10"
          />
          <div className="flex flex-col items-center gap-5">
            <ButtonItem
              className="btn-base hover:bg-colorprimary border border-black hover:border-colorprimary font-semibold text-sm lg:text-base"
              btnName="Sign In"
            />
            <ButtonItem
              className="btn-base bg-black hover:bg-colorprimary font-semibold text-colorprimary hover:text-black text-sm lg:text-base"
              btnName="Sign Up"
            />
          </div>
        </motion.div>
        <MenuMobile toggle={() => toggleOpen()} />
      </motion.div>
    </header>
  );
};
