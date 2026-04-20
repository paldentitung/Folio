"use client";
import { motion } from "framer-motion";

export default function SecondaryButton({ name }: { name: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="
        relative group
        bg-transparent text-[#2c2420]
        text-sm tracking-wide
        px-6 py-2.5 rounded-full
        border border-[#d9b99a]
        overflow-hidden
        transition-colors duration-300 cursor-pointer
      "
    >
      <span className="absolute inset-0 bg-[#fdf8f2] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />

      <span className="relative z-10 text-[#7a6a62] group-hover:text-[#2c2420] transition-colors duration-300">
        {name}
      </span>
    </motion.button>
  );
}
