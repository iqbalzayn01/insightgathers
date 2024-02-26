import { useEffect } from "react";

import { Header } from "../sections/Header";
import { Hero } from "../sections/Hero";
import { AboutUs } from "../sections/AboutUs";
import { Partners } from "../sections/Partners";
import { Testimonials } from "../sections/Testimonials";
import { Footer } from "../sections/Footer";

export const Home = () => {
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
      <Hero />
      <AboutUs />
      <Partners />
      <Testimonials />
      <Footer />
    </>
  );
};
