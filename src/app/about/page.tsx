import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — FaceTest",
  description: "Learn about FaceTest - AI-powered face analysis tests for entertainment.",
};

export default function AboutPage() {
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
      <section className="py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-6xl mb-6">🎭</div>
          <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            About FaceTest
          </h1>
          <p className="text-lg text-slate-400">
            Discover what your face reveals with AI-powered analysis
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Mission */}
          <div className="p-6 rounded-2xl bg-[#1a1a2e] border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-4">🎯 Our Mission</h2>
            <p className="text-slate-300 leading-relaxed">
              FaceTest is designed to bring fun and entertainment to everyone curious about what their face might reveal. Using advanced AI technology, we create engaging tests that let you explore playful questions like "What animal do I look like?" or "Who's my celebrity twin?"
            </p>
          </div>

          {/* How It Works */}
          <div className="p-6 rounded-2xl bg-[#1a1a2e] border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-4">🔬 How It Works</h2>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-white">Upload Your Photo</h3>
                  <p>Take a selfie or upload a clear, front-facing photo.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-white">AI Analysis</h3>
                  <p>Our AI analyzes facial features like eye shape, face structure, and overall vibe.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-white">Get Fun Results</h3>
                  <p>Receive your personalized results with matching traits and fun facts!</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-white">Share & Compare</h3>
                  <p>Save your result image and share with friends to compare!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Tests */}
          <div className="p-6 rounded-2xl bg-[#1a1a2e] border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-4">🧪 Our Tests</h2>
            <div className="grid gap-4">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🐾</span>
                  <h3 className="font-bold text-amber-400">Animal Face Test</h3>
                  <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-400 rounded-full">Available</span>
                </div>
                <p className="text-slate-300 text-sm">Discover which animal you resemble based on Korean face reading principles. Are you a cute puppy, mysterious cat, or fierce wolf?</p>
              </div>
              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 opacity-60">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🎂</span>
                  <h3 className="font-bold text-cyan-400">How Old Test</h3>
                  <span className="px-2 py-0.5 text-xs bg-slate-500/20 text-slate-400 rounded-full">Coming Soon</span>
                </div>
                <p className="text-slate-300 text-sm">Let AI guess your age based on your facial features. You might be surprised!</p>
              </div>
              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 opacity-60">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">⭐</span>
                  <h3 className="font-bold text-purple-400">Celebrity Twin</h3>
                  <span className="px-2 py-0.5 text-xs bg-slate-500/20 text-slate-400 rounded-full">Coming Soon</span>
                </div>
                <p className="text-slate-300 text-sm">Find out which celebrity you look like most!</p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">⚠️ Important Note</h2>
            <p className="text-slate-300 leading-relaxed">
              FaceTest is designed purely for <strong className="text-amber-400">entertainment purposes</strong>. Our AI analysis is not scientifically validated and results should be taken with a grain of salt. We believe in having fun while exploring the fascinating world of AI — not making serious judgments about anyone's appearance!
            </p>
          </div>

          {/* Privacy */}
          <div className="p-6 rounded-2xl bg-[#1a1a2e] border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-4">🔒 Your Privacy Matters</h2>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Photos are processed temporarily and never stored
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                We don't share your images with anyone
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                No account required to use our tests
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                100% free with no hidden costs
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 text-center">
        <Link
          href="/animal"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg
                   hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/25"
        >
          🐾 Try Animal Face Test
        </Link>
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
