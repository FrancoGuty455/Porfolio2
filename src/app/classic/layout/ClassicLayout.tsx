"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Certifications from "../sections/Certifications";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";
import "@/styles/classic.css"; 

type Props = {
  data: any;
};

export default function ClassicLayout({ data }: Props) {
  return ( 
    <div className="relative min-h-screen text-black flex flex-col">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 opacity-60"
      >
        <source src="/videos/fondoBlack.mp4" type="video/mp4" />
      </video>
      <Header />
      <main className="flex-grow container mx-auto px-6 py-10 space-y-[200px]">
        <br></br><br></br><br></br>
        <div><About text={data.about} /></div>
        <div><Skills /></div>
        <div><Projects projects={data.projects} /></div>
        <div><Certifications certifications={data.certifications} /></div>
        <div><Experience experience={data.experience} /></div>
        <div><Contact contact={data.contact} /></div>
      </main>
      
      <Footer />
    </div>
  );
}
