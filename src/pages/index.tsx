import About from "@/components/About";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";
import React, { useState } from "react";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => {
    setNav(true);
  };
  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="overflow-x-hidden">
      <div>
        {/* Navbar */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        {/* Hero Section */}
        <Hero />
        <div className="relative z-[30]">
          {/* About Section */}
          <About />
          {/* Services Page */}
          <Services />
          {/* Skills Page */}
          <Skills />
          {/* Projects Page */}
          <Projects />
          {/* Reviews Page */}
          <Testimonial />
          {/* Blog Page */}
          <Blog />
          {/* Footer Page */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
