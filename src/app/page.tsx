import Link from "next/link";

const tests = [
  {
    href: "/animal",
    emoji: "🐾",
    title: "Animal Face",
    description: "Which animal do you look like?",
    gradient: "from-amber-500 to-orange-500",
    bgGlow: "bg-amber-500/20",
  },
  {
    href: "/age",
    emoji: "🎂",
    title: "How Old?",
    description: "AI guesses your age",
    gradient: "from-cyan-500 to-blue-500",
    bgGlow: "bg-cyan-500/20",
  },
  {
    href: "/celebrity",
    emoji: "⭐",
    title: "Celebrity Twin",
    description: "Find your famous lookalike",
    gradient: "from-purple-500 to-pink-500",
    bgGlow: "bg-purple-500/20",
    comingSoon: true,
  },
  {
    href: "/pastlife",
    emoji: "🔮",
    title: "Past Life",
    description: "Who were you before?",
    gradient: "from-indigo-500 to-purple-500",
    bgGlow: "bg-indigo-500/20",
    comingSoon: true,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="py-6 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl group-hover:scale-110 transition-transform">🎭</span>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              FaceTest
            </span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 sm:py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-6xl sm:text-7xl mb-6 animate-float">🎭</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Fun AI Face Tests
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-xl mx-auto">
            Discover what your face reveals! From animal lookalikes to age guessing — 
            upload a photo and let AI analyze you.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
            <span className="text-purple-300 text-sm">🔥 Free • No signup • Instant results</span>
          </div>
        </div>
      </section>

      {/* Tests Grid */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {tests.map((test) => (
              <Link
                key={test.href}
                href={test.comingSoon ? "#" : test.href}
                className={`group relative p-6 sm:p-8 rounded-2xl bg-[#1a1a2e] border border-white/5 transition-all duration-300 ${
                  test.comingSoon 
                    ? "opacity-60 cursor-not-allowed" 
                    : "hover:scale-[1.02] hover:border-white/10 hover:shadow-xl"
                }`}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-2xl ${test.bgGlow} opacity-0 group-hover:opacity-100 blur-xl transition-opacity -z-10`} />
                
                <div className="flex items-start gap-4">
                  <div className={`text-4xl sm:text-5xl ${test.comingSoon ? "" : "group-hover:scale-110 transition-transform"}`}>
                    {test.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${test.gradient} bg-clip-text text-transparent`}>
                        {test.title}
                      </h3>
                      {test.comingSoon && (
                        <span className="px-2 py-0.5 text-xs bg-slate-700 text-slate-300 rounded-full">
                          Soon
                        </span>
                      )}
                    </div>
                    <p className="text-slate-400 mt-1">{test.description}</p>
                  </div>
                </div>

                {!test.comingSoon && (
                  <div className="mt-4 flex items-center text-sm text-slate-500 group-hover:text-slate-300 transition-colors">
                    <span>Try now</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-6 sm:gap-10 px-6 py-4 rounded-2xl bg-[#1a1a2e]/50 border border-white/5">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-purple-400">1M+</div>
              <div className="text-xs sm:text-sm text-slate-500">Tests taken</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-pink-400">100%</div>
              <div className="text-xs sm:text-sm text-slate-500">Free forever</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-orange-400">⚡</div>
              <div className="text-xs sm:text-sm text-slate-500">Instant results</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center text-sm text-slate-500">
          <p>© 2026 FaceTest — For entertainment only.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <span className="mx-2">·</span>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
            <span className="mx-2">·</span>
            <Link href="/about" className="hover:text-slate-300 transition-colors">About</Link>
            <span className="mx-2">·</span>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
