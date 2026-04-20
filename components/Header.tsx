"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import MainButton from "./MainButton";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="flex items-center justify-between p-4 md:p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="bg-black rounded-full text-white w-8 h-8 flex items-center justify-center text-sm">
            F
          </span>
          <h1 className="text-xl md:text-2xl font-medium">Folio</h1>
        </div>

        <nav className="hidden md:flex gap-7 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${
                isActive(link.href)
                  ? "text-black font-medium"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/blog">
            <MainButton name="Read Blog" />
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 text-sm bg-white border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`transition ${
                isActive(link.href) ? "text-black font-medium" : "text-gray-500"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-2">
            <MainButton name="Read Blog" />
          </div>
        </div>
      )}
    </header>
  );
}
