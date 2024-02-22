import { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";

import { Header } from "../sections/Header";
import { Hero } from "../sections/Hero";
import { AboutUs } from "../sections/AboutUs";
import { Partners } from "../sections/Partners";
import { Testimonials } from "../sections/Testimonials";

export const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <Header />
      <motion.div
        ref={ref}
        style={{
          y: scrollYProgress,
          // scale: scrollYProgress,
        }}
      >
        <Hero />
        <AboutUs />
        <Partners />
        <Testimonials />
      </motion.div>
    </>
  );
};
