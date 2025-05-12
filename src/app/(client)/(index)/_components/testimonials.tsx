'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface CardTestiProps {
  className?: string;
  title: string;
  testi: string;
  pathimage: string;
}

const CardTesti = ({ className, title, testi, pathimage }: CardTestiProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className={`relative bg-black grid sm:grid-cols-2 md:gap-5 ${className} rounded-xl`}
    >
      <div
        style={{
          backgroundImage: `url(${pathimage})`,
          objectFit: 'cover',
          backgroundPosition: 'top',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className="bg-gray-300 h-[400px] md:h-full flex items-end justify-center rounded-xl"
      ></div>
      <div className="w-full flex flex-col gap-5 pl-5 md:pl-0 pr-5 py-5 md:mb-20">
        <span className="font-medium text-colorprimary text-base">Story</span>
        <h3 className="font-medium text-colorprimary text-lg md:text-2xl">
          {title}
        </h3>
        <p className="font-medium text-white text-sm">{testi}</p>
      </div>
    </motion.section>
  );
};

export const Testimonials = () => {
  return (
    <section className="container mx-auto flex flex-col gap-10 px-5 py-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <CardTesti
          title="A Catalyst for Change. Empowering Stories"
          testi="Transformative! InsightGathers fueled my startup journey, aiding communities during the pandemic. Grateful beyond words."
          pathimage="/content/user-1.png"
        />
        <CardTesti
          title="One Great Event For The Better World."
          testi="Read the story of how Shayna successfully built a startup that assists residents in obtaining aid during the pandemic."
          pathimage="/content/user-2.png"
        />
        <CardTesti
          title="Empowering Minds. Unleashing Potential."
          testi="InsightGathers, a game-changer! Found invaluable connections and insights that propelled my professional journey to new heights."
          pathimage="/content/user-3.png"
        />
        <CardTesti
          title="A Catalyst for Change. Empowering Stories"
          testi="Transformative! InsightGathers fueled my startup journey, aiding communities during the pandemic. Grateful beyond words."
          pathimage="/content/user-4.png"
        />
      </div>
    </section>
  );
};
