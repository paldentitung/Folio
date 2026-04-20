export default function Contact() {
  const socials = [
    {
      label: "X / Twitter",
      handle: "@foliojrnl",
      href: "https://twitter.com/",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      handle: "@foliojrnl",
      href: "https://instagram.com/",
      icon: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4.5" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
  ];

  return (
    <main>
      <section className="min-h-[40vh] flex flex-col items-center justify-center bg-[#fdf8f2] px-6 py-20 text-center">
        <span className="text-[11px] tracking-widest uppercase text-[#b07d5a] border border-[#d9b99a] px-4 py-1 rounded-full mb-5">
          Get in touch
        </span>
        <div className="w-6 h-px bg-[#d9b99a] mb-6" />
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2c2420] mb-4">
          Say hello.
        </h1>
        <p className="text-sm md:text-base text-[#7a6a62] max-w-md">
          Pitch an essay, send a kind word, or simply share what you've been
          reading.
        </p>
      </section>

      <section className="py-20 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16">
          <form
            action="/api/contact"
            method="POST"
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] tracking-widest uppercase text-gray-400">
                  Name
                </label>
                <input
                  className="text-sm px-4 py-2.5 rounded-lg border border-[#d9b99a] bg-white"
                  placeholder="Jane Doe"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] tracking-widest uppercase text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="text-sm px-4 py-2.5 rounded-lg border border-[#d9b99a] bg-white"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] tracking-widest uppercase text-gray-400">
                Message
              </label>
              <textarea
                rows={6}
                placeholder="What's on your mind"
                className="text-sm px-4 py-2.5 rounded-lg border border-[#d9b99a] bg-white resize-none"
              />
            </div>

            <button
              type="submit"
              className="self-start text-sm px-6 py-2.5 rounded-full bg-[#2c2420] text-[#fdf8f2]"
            >
              Send message →
            </button>
          </form>

          <div className="flex flex-col gap-10">
            {/* EMAIL */}
            <div className="flex flex-col gap-3">
              <p className="text-[11px] tracking-widest uppercase text-gray-400">
                By email
              </p>

              <div className="w-5 h-px bg-[#d9b99a]" />

              <p className="text-sm text-[#7a6a62]">
                For pitches, press, or just to talk shop.
              </p>

              <a
                href="mailto:hello@folio.press"
                className="text-sm text-[#b07d5a] hover:underline w-fit"
              >
                hello@folio.press
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[11px] tracking-widest uppercase text-gray-400">
                Elsewhere
              </p>

              <div className="w-5 h-px bg-[#d9b99a]" />

              <div className="flex flex-col gap-2 mt-1">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      s.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-2.5 text-sm text-[#7a6a62] hover:text-[#2c2420] w-fit"
                  >
                    <span className="w-7 h-7 flex items-center justify-center border border-[#d9b99a] rounded-lg">
                      {s.icon}
                    </span>
                    <span>{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
