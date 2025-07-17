"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownTrayIcon,
  BoltIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function AssistantHeader() {
  const [open, setOpen] = useState(false);

  const handleNavigate = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed top-0 right-0 w-full z-50">
        <div className="max-w-7xl mx-auto p-4 flex justify-end gap-4 relative">
<div className="max-w-7xl mx-auto p-4 flex relative">
  <div className="ml-auto flex gap-4">

          {/* Botón: Descargar CV */}
          <Link href="/cv.pdf" target="_blank">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg
              text-white font-medium transition-all duration-300
              hover:bg-white/10 hover:backdrop-blur-sm
              group">
              <ArrowDownTrayIcon className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
              <span className="opacity-90 group-hover:opacity-100">CV</span>
            </button>
          </Link>

          {/* Botón: Cambiar modo */}
          <Link href="/assistant">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg
              text-white font-medium transition-all duration-300
              hover:bg-white/10 hover:backdrop-blur-sm
              group">
              <span className="opacity-90 group-hover:opacity-100">Assistant Mode</span>
            </button>
          </Link>

          {/* Botón: Menú */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg
              text-white font-medium transition-all duration-300
              hover:bg-white/10 hover:backdrop-blur-sm
              group"
            aria-haspopup="true"
            aria-expanded={open}
            aria-label="Open menu"
          >
            <Bars3Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
            <span className="opacity-90 group-hover:opacity-100">Menú</span>
          </button>

          {/* Menú desplegable */}
          <AnimatePresence>
            {open && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
               className="
                absolute top-full right-4 mt-3 w-56
                rounded-2xl
                bg-emerald-900
                bg-opacity-95
                backdrop-blur-md
                shadow-2xl
                divide-y divide-white/20
                z-50
                overflow-hidden
                ring-1 ring-white/10
              "
              style={{ backgroundColor: "rgba(160, 160, 160, 0.95)" }} // verde esmeralda oscuro con 95% opacity
              
              >
                {sections.map(({ id, label }) => (
                  <li
                    key={id}
                    onClick={() => handleNavigate(id)}
                    className="
                      group flex items-center gap-3 px-6 py-4
                      cursor-pointer
                      text-white font-semibold
                      transition-colors duration-300
                      hover:bg-white/20
                      hover:text-emerald-300
                      relative
                    "
                  >
                    <span
                      className="
                        h-3 w-3 bg-emerald-400 rounded-full
                        group-hover:scale-150
                        group-hover:shadow-[0_0_8px_2px_rgba(16,185,129,0.8)]
                        transition-transform duration-300
                        flex-shrink-0
                      "
                    />
                    {label}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
          </div>
</div>
      </header>

      {/* Espaciador para compensar header fijo */}
      <div className="h-20" />
    </>
  );
}