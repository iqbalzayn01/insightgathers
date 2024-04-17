import { useEffect } from "react";

import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { AboutUs } from "../../components/AboutUs";
import { Partners } from "../../components/Partners";
import { Testimonials } from "../../components/Testimonials";
import { Footer } from "../../components/Footer";

export default function Home() {
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
}
