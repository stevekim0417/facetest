"use client";

import { useState, useRef } from "react";
import Link from "next/link";

interface AgeResult {
  estimatedAge: number;
  confidenceLevel: "high" | "medium" | "low";
  ageRange: { min: number; max: number };
  vibe: string;
  funFact: string;
  skinAnalysis: string;
  styleComment: string;
  celebrityAgeMatch: string;
}

export default function AgeTestPage() {
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<AgeResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("File size must be under 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target?.result as string);
      setResult(null);
      setError("");
    };
    reader.readAsDataURL(file);
  };

  const analyzeAge = async () => {
    if (!image) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/age", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Analysis failed. Please try again.");
      }

      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setImage(null);
    setResult(null);
    setError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const getAgeEmoji = (age: number) => {
    if (age < 20) return "👶";
    if (age < 30) return "🧑";
    if (age < 40) return "💪";
    if (age < 50) return "🌟";
    if (age < 60) return "👔";
    return "🎩";
  };

  const getConfidenceColor = (level: string) => {
    switch (level) {
      case "high": return "text-green-400";
      case "medium": return "text-yellow-400";
      case "low": return "text-orange-400";
      default: return "text-slate-400";
    }
  };

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
      <section className="py-8 sm:py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-5xl sm:text-6xl mb-4 animate-float">🎂</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            How Old Do I Look?
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Upload a photo and let AI guess your age! Are you younger or older than you think?
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-300 text-sm">🔮 AI-powered age estimation!</span>
          </div>
        </div>
      </section>

      {/* Upload / Result Section */}
      <section className="py-6 px-4">
        <div className="max-w-xl mx-auto">
          {!image && (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="p-10 sm:p-16 rounded-2xl border-2 border-dashed border-cyan-500/30 bg-[#1a1a2e] text-center cursor-pointer
                       hover:border-cyan-400/50 hover:bg-cyan-500/5 transition-all"
            >
              <div className="text-5xl sm:text-6xl mb-4">📷</div>
              <p className="text-white font-semibold text-lg mb-2">Upload Your Photo</p>
              <p className="text-slate-500 text-sm">Click or drag to upload your selfie</p>
              <p className="text-slate-600 text-xs mt-2">Clear, front-facing photos work best! 🎂</p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          )}

          {image && !result && (
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 bg-[#1a1a2e]">
                <img
                  src={image}
                  alt="Uploaded"
                  className="w-full max-h-80 object-contain"
                />
                <button
                  onClick={reset}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-red-500/70 transition-colors flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              <button
                onClick={analyzeAge}
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg
                         hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 disabled:opacity-50 shadow-lg shadow-cyan-500/25"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">🔮</span> Analyzing your age...
                  </span>
                ) : (
                  "🎂 Guess My Age!"
                )}
              </button>
            </div>
          )}

          {error && (
            <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-center">
              {error}
            </div>
          )}
        </div>
      </section>

      {/* Results */}
      {result && (
        <section className="py-6 px-4">
          <div className="max-w-xl mx-auto">
            {/* Main Result */}
            <div className="text-center mb-6">
              <div className="text-slate-500 text-sm uppercase tracking-widest mb-2">
                AI thinks you look...
              </div>
              <div className="text-7xl sm:text-8xl mb-3">{getAgeEmoji(result.estimatedAge)}</div>
              <h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {result.estimatedAge}
              </h2>
              <p className="text-cyan-300/80 text-xl">years old</p>
              <div className="mt-3 inline-block px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30">
                <span className={`font-semibold ${getConfidenceColor(result.confidenceLevel)}`}>
                  {result.confidenceLevel.charAt(0).toUpperCase() + result.confidenceLevel.slice(1)} confidence
                </span>
                <span className="text-slate-400 ml-2">
                  ({result.ageRange.min}-{result.ageRange.max} range)
                </span>
              </div>
            </div>

            {/* Photo */}
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-xl overflow-hidden border-4 border-cyan-500/50">
                <img src={image!} alt="You" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Vibe */}
            <div className="p-5 rounded-2xl bg-[#1a1a2e] border border-white/5 mb-4 text-center">
              <div className="text-cyan-400 text-sm mb-2">✨ Your Vibe</div>
              <p className="text-white text-lg font-semibold">{result.vibe}</p>
            </div>

            {/* Analysis Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div className="p-4 rounded-xl bg-[#1a1a2e] border border-white/5">
                <div className="text-cyan-400 text-sm mb-1">🌟 Skin</div>
                <p className="text-slate-300 text-sm">{result.skinAnalysis}</p>
              </div>
              <div className="p-4 rounded-xl bg-[#1a1a2e] border border-white/5">
                <div className="text-cyan-400 text-sm mb-1">👔 Style</div>
                <p className="text-slate-300 text-sm">{result.styleComment}</p>
              </div>
            </div>

            {/* Fun Fact */}
            <div className="p-5 rounded-2xl bg-[#1a1a2e] border border-white/5 mb-4">
              <div className="text-cyan-400 text-sm mb-2">💡 Fun Fact</div>
              <p className="text-slate-300">{result.funFact}</p>
            </div>

            {/* Celebrity Match */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 mb-6 text-center">
              <div className="text-cyan-400 text-sm mb-2">⭐ Celebrity Age Match</div>
              <p className="text-white font-semibold">{result.celebrityAgeMatch}</p>
              <p className="text-slate-400 text-sm">looks about the same age as you!</p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={reset}
                className="flex-1 py-3 rounded-xl border border-cyan-500/30 text-cyan-300 font-semibold hover:bg-cyan-500/10 transition-all"
              >
                📷 Try Another Photo
              </button>
              <Link
                href="/"
                className="flex-1 py-3 rounded-xl border border-purple-500/30 text-purple-300 font-semibold hover:bg-purple-500/10 transition-all text-center"
              >
                🎭 More Tests
              </Link>
            </div>

            {/* Share CTA */}
            <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 text-center">
              <div className="text-2xl mb-2">📱</div>
              <p className="text-white font-semibold mb-1">Share Your Result!</p>
              <p className="text-slate-400 text-sm">
                Screenshot and share — see if your friends can guess younger! 🎂
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/5 mt-8">
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
