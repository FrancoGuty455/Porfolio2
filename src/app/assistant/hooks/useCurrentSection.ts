"use client";

import { useEffect, useState } from "react";

export default function useCurrentSection(): string | null {
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.intersectionRatio > 0.6 && 
            entry.target.id !== currentSection
          ) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.6],      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [currentSection]);

  return currentSection;
}
