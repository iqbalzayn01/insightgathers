'use client';

import React, { useRef } from 'react';
import { motion, useCycle } from 'motion/react';
import { useDimensions } from './use-dimensions';
import { Logo } from './logo';
import { Navbar } from './navbar';
import { Button } from '@/components/ui/button';
import { MenuMobile } from './menu-mobile';
import Link from 'next/link';

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
    <header className="bg-colorsecondary h-fit fixed inset-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-5 py-5">
        <Link href="/" className="logo">
          <Logo />
        </Link>
        <Navbar
          className="hidden lg:flex"
          ulclassName="flex items-center justify-center gap-2"
        />
        <div className="hidden lg:flex items-center gap-5">
          <Button
            variant="outline"
            className="bg-transparent hover:bg-black border border-black font-semibold text-sm lg:text-base hover:text-white"
            asChild
          >
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button
            className="bg-colorprimary hover:bg-black font-semibold text-black hover:text-colorprimary text-sm lg:text-base"
            asChild
          >
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile */}
        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          ref={containerRef}
          className="flex lg:hidden"
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
              <Button
                variant="outline"
                className="bg-transparent hover:bg-black border border-black font-semibold text-sm lg:text-base hover:text-white"
                asChild
              >
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button
                className="bg-colorprimary hover:bg-black font-semibold text-black hover:text-colorprimary text-sm lg:text-base"
                asChild
              >
                <Link href="/sign-up">Sign Up</Link>
              </Button>
            </div>
          </motion.div>
          <MenuMobile toggle={() => toggleOpen()} />
        </motion.div>
      </div>
    </header>
  );
};
