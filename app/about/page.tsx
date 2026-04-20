import MainButton from "@/components/MainButton";

const values = [
  {
    title: "Slowness",
    body: "We publish less, on purpose. Every essay earns its place.",
  },
  {
    title: "Craft",
    body: "We obsess over sentences, margins, and the spaces between.",
  },
  {
    title: "Quiet",
    body: "No pop-ups, no trackers, no tricks. Just words on a page.",
  },
];

const team = [
  { initials: "EH", name: "Eleanor Hayes", role: "Editor in Chief" },
  { initials: "ML", name: "Marcus Lin", role: "Senior Writer" },
  { initials: "ST", name: "Sora Tanaka", role: "Design Lead" },
  { initials: "IC", name: "Iris Calder", role: "Contributing Editor" },
];

export default function About() {
  return (
    <main>
      <section className="min-h-[50vh] flex flex-col items-center justify-center bg-[#fdf8f2] px-6 py-20 text-center">
        <span className="text-[11px] tracking-widest uppercase text-[#b07d5a] border border-[#d9b99a] px-4 py-1 rounded-full mb-5">
          About Folio
        </span>
        <div className="w-6 h-px bg-[#d9b99a] mb-6" />
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-[#2c2420] leading-tight mb-5">
          A small journal
          <br className="hidden md:block" /> for slow ideas.
        </h1>
        <p className="text-sm md:text-base text-[#7a6a62] leading-relaxed max-w-lg">
          Folio began in 2021 as a Sunday newsletter between three friends.
          Today it is read in eighty-four countries — still, we hope, with the
          same unhurried attention.
        </p>
      </section>

      <section className="py-20 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="border-l-2 border-[#d9b99a] pl-6">
            <p className="font-serif text-2xl md:text-3xl text-[#2c2420] leading-snug">
              "We believe the internet still has room for thinking out loud."
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-sm text-[#7a6a62] leading-relaxed">
              Folio is our attempt to make that room — a place where essays are
              allowed to breathe, where pages are not built to extract your
              attention but to keep it company.
            </p>
            <p className="text-sm text-[#7a6a62] leading-relaxed">
              Our writers come from architecture, fiction, design, and the
              occasional kitchen. What they share is a fondness for the
              well-made sentence and a suspicion of speed for its own sake.
            </p>
            <div className="mt-2">
              <MainButton name="Read the latest" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-10 bg-[#fdf8f2]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-[11px] tracking-widest uppercase text-gray-400 mb-1">
              Principles
            </p>
            <h2 className="font-serif text-3xl font-normal text-[#2c2420]">
              What we believe
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex flex-col gap-3 p-6 rounded-2xl bg-white border border-[#ecddd0]"
              >
                <div className="w-6 h-px bg-[#d9b99a]" />
                <h3 className="font-serif text-xl text-[#2c2420]">{v.title}</h3>
                <p className="text-sm text-[#7a6a62] leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-[11px] tracking-widest uppercase text-gray-400 mb-1">
              The people
            </p>
            <h2 className="font-serif text-3xl font-normal text-[#2c2420]">
              A small editorial team, scattered across three time zones.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((person) => (
              <div
                key={person.name}
                className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-[#fdf8f2] border border-[#ecddd0]"
              >
                <div className="w-14 h-14 rounded-full bg-[#ecddd0] flex items-center justify-center text-sm font-medium text-[#7a6a62]">
                  {person.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-[#2c2420]">
                    {person.name}
                  </p>
                  <p className="text-xs text-[#b07d5a] mt-0.5">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#fdf8f2] border-t border-[#ecddd0]">
        <div className="max-w-xl mx-auto flex flex-col items-center text-center gap-5">
          <div className="w-6 h-px bg-[#d9b99a]" />
          <h2 className="font-serif text-3xl font-normal text-[#2c2420]">
            Stay in the loop.
          </h2>
          <p className="text-sm text-[#7a6a62] leading-relaxed">
            One essay a month. No noise, no trackers. Unsubscribe whenever.
          </p>
          <div className="flex w-full max-w-sm gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 min-w-0 text-sm px-4 py-2.5 rounded-full border border-[#d9b99a] bg-white text-gray-800 placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-[#b07d5a] transition"
            />
            <button className="text-sm px-5 py-2.5 rounded-full bg-[#2c2420] text-[#fdf8f2] hover:bg-[#3d342e] transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-[#b07d5a]">
            No spam, ever. Just quiet words.
          </p>
        </div>
      </section>
    </main>
  );
}
