import Image from "next/image";
import MainButton from "../components/MainButton";
import SecondaryButton from "@/components/SecondaryButton";
import BlogList from "@/components/BlogList";
export default function Home() {
  return (
    <section>
      <div className="min-h-[60vh] flex items-center justify-center bg-[#fdf8f2] px-6 py-20">
        <div className="flex flex-col items-center text-center gap-5 w-full max-w-350">
          <span className="text-[11px] tracking-widest uppercase text-[#b07d5a] border border-[#d9b99a] px-4 py-1 rounded-full">
            A journal of slow ideas
          </span>

          <div className="w-10 h-px bg-[#d9b99a]" />

          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-normal text-[#2c2420] leading-tight">
            Slow words for
            <br className="hidden md:block" /> a faster world.
          </h1>

          <p className="text-base md:text-lg text-[#7a6a62] leading-relaxed max-w-2xl">
            Folio is a quiet journal of essays on writing, design, and the small
            rituals that shape a thoughtful life.
          </p>

          <div className="flex flex-wrap gap-3 items-center justify-center mt-2">
            <MainButton name="Read the latest" />
            <SecondaryButton name="Our story" />
          </div>
        </div>
      </div>

      <div className="py-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-7">
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-1">
                Featured
              </p>
              <h2 className="text-2xl font-medium text-gray-900">
                Editor's pick
              </h2>
            </div>
            <button className="text-sm text-gray-500 border border-gray-200 px-4 py-1.5 rounded-lg hover:bg-gray-50 transition">
              View all →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-100 rounded-xl overflow-hidden bg-white">
            <div className="relative min-h-75 bg-[#d4cfc8]">
              <Image
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80"
                alt="The Quiet Discipline of Writing Daily"
                fill
                className="object-cover"
              />
              <span className="absolute top-3.5 left-3.5 text-[10px] tracking-widest uppercase bg-white text-gray-500 border border-gray-200 px-2.5 py-1 rounded-md">
                Essay
              </span>
            </div>

            <div className="p-8 flex flex-col justify-between">
              <div>
                <span className="text-[11px] tracking-widest uppercase text-gray-400 mb-4 block">
                  Craft
                </span>
                <h3 className="text-xl font-medium text-gray-900 leading-snug mb-4">
                  The Quiet Discipline of Writing Daily
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Why showing up at the page — even for ten minutes — changes
                  more than your prose. A meditation on small habits and slow
                  craft.
                </p>
              </div>

              <div className="flex items-center justify-between mt-7 pt-5 border-t border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#d4c8c0] flex items-center justify-center text-[11px] font-medium text-[#7a6a62]">
                    ML
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Maya Lin
                    </p>
                    <p className="text-xs text-gray-400">6 min read</p>
                  </div>
                </div>
                <button className="text-sm text-gray-800 border border-gray-200 px-4 py-1.5 rounded-lg hover:bg-gray-50 transition">
                  Read →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <BlogList />
      </div>

      <div className="bg-[#fdf8f2] rounded-2xl px-8 py-12 flex flex-col items-center text-center gap-6 max-w-7xl mx-auto my-16">
        <div className="w-6 h-px bg-[#d9b99a]" />

        <div className="flex flex-col gap-2">
          <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#2c2420]">
            A short letter, once a month.
          </h3>
          <p className="text-sm text-[#7a6a62] leading-relaxed">
            One essay, a few links, no noise. Unsubscribe whenever.
          </p>
        </div>

        <div className="flex w-full max-w-sm gap-2 mt-2">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 text-sm px-4 py-2.5 rounded-lg border border-[#d9b99a] bg-white text-gray-800 placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-[#b07d5a] transition"
          />
          <button className="text-sm px-5 py-2.5 rounded-lg bg-[#2c2420] text-[#fdf8f2] hover:bg-[#3d342e] transition whitespace-nowrap">
            Subscribe
          </button>
        </div>

        <p className="text-xs text-[#b07d5a]">
          No spam, ever. Just quiet words.
        </p>
      </div>
    </section>
  );
}
