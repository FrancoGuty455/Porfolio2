"use client";

import React from "react";
import AssistantHeader from "../components/AssistantHeader";
import AssistantFooter from "../components/AssistantFooter";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Certifications from "../sections/Certifications";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";
import ConfigurableAssistant from "../components/ConfigurableAssistant";
import useCurrentSection from "../hooks/useCurrentSection";

import "@/styles/assistant.css";

type Props = {
  data: any;
};

export default function AssistantLayout({ data }: Props) {
  const section = useCurrentSection();

const dialogMap: Record<string, string> = {
  about: "Let me tell you who I am... maybe we share the same passion.",
  skills: "These are my skills... could they help with your next idea?",
  projects: "Take a look at what I’ve built... I’d love to know what you think.",
  certifications: "I enjoy learning new things... what skills do you value most?",
  experience: "Here’s what I’ve done so far... maybe we can build something great together.",
  contact: "Got an idea? A project? Just want to say hi? I’d love to hear from you.",
};


const normalizedSection = section?.trim().toLowerCase();
const dialog = normalizedSection && dialogMap[normalizedSection] ? dialogMap[normalizedSection] : "";


  return (

    <div className="relative min-h-screen text-black flex flex-col">
      <AssistantHeader />

<ConfigurableAssistant
  position="bottom-right"
  size="140px"
  delaySleep={30000}
  dialog={dialog}
/>


<main className="flex-grow container mx-auto px-6 py-10 space-y-[200px]">
  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  <div><About text={data.about} /></div>
  <div><Skills /></div>
  <div><Projects projects={data.projects} /></div>
  <div><Certifications certifications={data.certifications} /></div>
  <div><Experience experience={data.experience} /></div>
  <div><Contact contact={data.contact} /></div>
</main>
      <AssistantFooter />
    </div>

  );
}
