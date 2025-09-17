"use client";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Proects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
