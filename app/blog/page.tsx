import BlogList from "@/components/BlogList";

const categories = ["All", "Tech", "Reading", "Design"];

export default function Blog() {
  return (
    <section>
      <div className=" h-auto lg:h-[50vh] flex flex-col items-center justify-center bg-[#fdf8f2] px-6 py-20 text-center">
        <span className="text-[11px] tracking-widest uppercase text-[#b07d5a] border border-[#d9b99a] px-4 py-1 rounded-full mb-5">
          The Journal
        </span>

        <div className="w-6 h-px bg-[#d9b99a] mb-6" />

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-[#2c2420] leading-tight mb-4">
          All essays
        </h1>

        <p className="text-sm md:text-base text-[#7a6a62] leading-relaxed max-w-md mb-10">
          Quieter days. Reflections on craft, attention, and the shape of a
          thoughtful life.
        </p>

        {/* Search */}
        <div className="relative w-full max-w-sm mb-8">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#b07d5a]"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="search"
            placeholder="Search essays…"
            className="w-full text-sm pl-9 pr-4 py-2.5 rounded-full border border-[#d9b99a] bg-white text-gray-800 placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-[#b07d5a] transition"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className="text-xs tracking-widest uppercase px-4 py-1.5 rounded-full border bg-transparent text-[#7a6a62] border-[#d9b99a] hover:border-[#b07d5a] hover:text-[#2c2420] transition duration-200"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div>
        <BlogList />
      </div>
    </section>
  );
}
