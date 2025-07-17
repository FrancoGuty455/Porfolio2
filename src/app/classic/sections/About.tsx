"use client";
import { motion } from "framer-motion";

type Props = {
  text: string;
};

export default function About({ text }: Props) {
  return (
    <section id="about">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="glass-box text-center">
          <h2 className="glow-text !text-6xl font-bold mb-6 text-center">
            About Me
          </h2>
          <p className="text-lg text-gray-600">
 "I'm Franco, a software developer who enjoys creating simple and user-friendly websites and desktop apps."
          </p>
        </div>
      </motion.section>
    </section>
  );
}
