'use client';

import React, { useEffect } from 'react';
import { Hero } from './_components/hero';
import { AboutUs } from './_components/about-us';
import { Partners } from './_components/partners';
import { Testimonials } from './_components/testimonials';

export default function Homepage() {
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <>
      <Hero />
      <AboutUs />
      <Partners />
      <Testimonials />
    </>
  );
}
