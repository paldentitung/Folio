"use client";
import { motion } from "framer-motion";

export default function MainButton({ name }: { name: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="
        relative group
        bg-[#2c2420] text-[#fdf8f2]
        text-sm tracking-wide
        px-6 py-2.5 rounded-full
        overflow-hidden
        transition-colors duration-300 hover:cursor-pointer
      "
    >
      <span className="absolute inset-0 bg-[#b07d5a] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />

      <span className="relative z-10 flex items-center gap-2">
        {name}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </motion.button>
  );
}
