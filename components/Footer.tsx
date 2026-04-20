import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const socials = [
    {
      label: "X / Twitter",
      href: "https://twitter.com",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4.5" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      label: "RSS",
      href: "/rss.xml",
      icon: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 11a9 9 0 0 1 9 9" />
          <path d="M4 4a16 16 0 0 1 16 16" />
          <circle cx="5" cy="19" r="1" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="mt-24 border-t border-[#ecddd0] bg-[#fdf8f2]">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="py-14 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="font-serif text-2xl text-[#2c2420]">Folio</h3>
              <div className="w-6 h-px bg-[#d9b99a]" />
            </div>
            <p className="text-sm text-[#7a6a62] leading-relaxed max-w-sm">
              A quiet journal of essays on writing, design, and the slow craft
              of paying attention. Published monthly, written carefully.
            </p>

            {/* Inline newsletter */}
            <div className="flex gap-2 mt-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 min-w-0 text-sm px-3 py-2 rounded-lg border border-[#d9b99a] bg-white text-gray-800 placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-[#b07d5a] transition"
              />
              <button className="text-sm px-4 py-2 rounded-lg bg-[#2c2420] text-[#fdf8f2] hover:bg-[#3d342e] transition whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-[#b07d5a]">
              One essay a month. No noise.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-[11px] tracking-widest uppercase text-gray-400 mb-3">
              Navigate
            </p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#7a6a62] hover:text-[#2c2420] py-1 transition w-fit"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-[11px] tracking-widest uppercase text-gray-400 mb-3">
              Follow
            </p>

            <div className="flex flex-col gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    s.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-2.5 text-sm text-[#7a6a62] hover:text-[#2c2420] transition w-fit py-0.5"
                >
                  <span className="w-7 h-7 flex items-center justify-center rounded-lg border border-[#d9b99a] hover:border-[#b07d5a] transition shrink-0">
                    {s.icon}
                  </span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="py-5 border-t border-[#ecddd0] flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <span>© {new Date().getFullYear()} Folio. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#2c2420] transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#2c2420] transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
