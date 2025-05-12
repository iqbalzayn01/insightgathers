import React from 'react';
import { PreventZoom } from './_components/prevent-zoom';
import { Hero } from './_components/hero';
import { AboutUs } from './_components/about-us';
import { Partners } from './_components/partners';
import { Testimonials } from './_components/testimonials';

export default function Homepage() {
  return (
    <>
      <PreventZoom />
      <Hero />
      <AboutUs />
      <Partners />
      <Testimonials />
    </>
  );
}
