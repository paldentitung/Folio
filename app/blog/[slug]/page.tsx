import { posts } from "@/app/data/posts";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-widest text-[#b07d5a]">
        {post.tag}
      </p>
      <h1 className="text-4xl font-serif mt-2 text-gray-900">{post.title}</h1>
      <div className="flex items-center gap-3 text-sm text-gray-500 mt-4">
        <span>{post.author.name}</span>
        <span>·</span>
        <span>{post.date}</span>
        <span>·</span>
        <span>{post.readTime}</span>
      </div>
      <div className="mt-8">
        <Image
          src={post.src}
          alt={post.alt}
          width={1200}
          height={800}
          className="rounded-xl w-full object-cover"
        />
      </div>
      <p className="mt-8 text-lg leading-relaxed text-gray-700">
        {post.excerpt}
      </p>
    </main>
  );
}
