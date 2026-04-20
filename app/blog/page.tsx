import BlogList from "@/components/BlogList";

const categories = ["All", "Tech", "Reading", "Design"];

export default function Blog() {
  return (
    <section>
      <section className="flex flex-col items-center justify-center bg-[#fdf8f2] px-6 py-24 text-center">
        <span className="text-[11px] tracking-widest uppercase text-[#b07d5a] border border-[#d9b99a] px-4 py-1 rounded-full mb-5">
          The Journal
        </span>
        <div className="w-6 h-px bg-[#d9b99a] mb-6" />
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-[#2c2420] leading-tight mb-4">
          All essays
        </h1>
        <p className="text-sm md:text-base text-[#7a6a62] leading-relaxed max-w-md">
          Quieter days. Reflections on craft, attention, and the shape of a
          thoughtful life.
        </p>
      </section>

      <div>
        <BlogList />
      </div>
    </section>
  );
}
