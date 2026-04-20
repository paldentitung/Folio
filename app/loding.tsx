export default function Loading() {
  return (
    <div className="min-h-screen bg-[#fdf8f2] flex flex-col items-center justify-center gap-6">
      <span className="font-serif text-2xl text-[#2c2420] animate-pulse">
        Folio
      </span>

      <div className="flex items-center gap-2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#b07d5a] animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>

      <p className="text-xs tracking-widest uppercase text-[#b07d5a]">
        A quiet moment
      </p>
    </div>
  );
}
