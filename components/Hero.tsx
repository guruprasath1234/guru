"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold">
          Hi, I'm Guruprasath 👋
        </h1>

        <h2 className="text-2xl text-blue-400 mt-4">
          Full Stack Developer
        </h2>

        <p className="mt-5 text-gray-400">
          Building scalable web applications.
        </p>

        <button className="mt-8 bg-blue-500 px-6 py-3 rounded-lg">
          View Projects
        </button>
      </motion.div>
    </section>
  );
}