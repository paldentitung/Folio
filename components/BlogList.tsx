import Image from "next/image";
import Link from "next/link";
import { posts } from "@/app/data/posts";
export default function BlogList() {
  return (
    <section className="py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-1">
              Archive
            </p>
            <h2 className="text-2xl font-medium text-gray-900">All articles</h2>
          </div>
          <span className="text-sm text-gray-400">{posts.length} essays</span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  src={post.src}
                  alt={post.alt}
                  width={1024}
                  height={768}
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-medium uppercase tracking-widest text-[#b07d5a]">
                  {post.tag}
                </span>
                <h3 className="mt-2 font-serif text-xl leading-snug text-gray-900">
                  {post.title}
                </h3>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-500">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-5 flex items-center justify-between text-xs text-gray-400 border-t border-gray-100">
                  <span className="font-medium text-gray-700">
                    {post.author}
                  </span>
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
