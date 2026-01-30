"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { animalFaces, AnimalFace } from "@/data/animal-faces";
import ShareResultCard from "@/components/ShareResultCard";

interface AnimalResult {
  mainMatch: {
    animal: AnimalFace;
    similarity: number;
    matchingTraits: string[];
  };
  otherMatches: {
    animal: AnimalFace;
    similarity: number;
  }[];
  analysis: string;
  funComment: string;
}

export default function AnimalFacePage() {
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<AnimalResult | null>(null);
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

  const analyzeAnimal = async () => {
    if (!image) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/animal", {
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
          <div className="text-5xl sm:text-6xl mb-4 animate-float">🐾</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            Animal Face Test
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Which animal do you look like? Upload a selfie and let AI reveal your animal twin!
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span className="text-amber-300 text-sm">🔥 The viral test everyone's sharing!</span>
          </div>
        </div>
      </section>

      {/* Upload / Result Section */}
      <section className="py-6 px-4">
        <div className="max-w-xl mx-auto">
          {!image && (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="p-10 sm:p-16 rounded-2xl border-2 border-dashed border-amber-500/30 bg-[#1a1a2e] text-center cursor-pointer
                       hover:border-amber-400/50 hover:bg-amber-500/5 transition-all"
            >
              <div className="text-5xl sm:text-6xl mb-4">📷</div>
              <p className="text-white font-semibold text-lg mb-2">Upload Your Photo</p>
              <p className="text-slate-500 text-sm">Click or drag to upload your selfie</p>
              <p className="text-slate-600 text-xs mt-2">Clear, front-facing photos work best! 🐾</p>
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
              <div className="relative rounded-2xl overflow-hidden border border-amber-500/20 bg-[#1a1a2e]">
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
                onClick={analyzeAnimal}
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg
                         hover:from-amber-400 hover:to-orange-400 transition-all duration-300 disabled:opacity-50 shadow-lg shadow-amber-500/25"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">🐾</span> Finding your animal twin...
                  </span>
                ) : (
                  "🐾 Find My Animal Face"
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
            {/* Main Match */}
            <div className="text-center mb-6">
              <div className="text-slate-500 text-sm uppercase tracking-widest mb-2">
                Your Animal Face Is...
              </div>
              <div className="text-7xl sm:text-8xl mb-3">{result.mainMatch.animal.emoji}</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                {result.mainMatch.animal.name}
              </h2>
              <p className="text-amber-300/80 text-lg">{result.mainMatch.animal.nameKo}</p>
              <div className="mt-3 inline-block px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30">
                <span className="text-amber-300 font-bold text-xl">{result.mainMatch.similarity}%</span>
                <span className="text-slate-400 ml-2">Match</span>
              </div>
            </div>

            {/* Photo Comparison */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border-4 border-amber-500/50">
                <img src={image!} alt="You" className="w-full h-full object-cover" />
              </div>
              <div className="text-3xl text-slate-500">≈</div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl border-4 border-orange-500/50 bg-gradient-to-br from-amber-900/30 to-orange-900/30 flex items-center justify-center">
                <span className="text-5xl">{result.mainMatch.animal.emoji}</span>
              </div>
            </div>

            {/* Details Card */}
            <div className="p-5 rounded-2xl bg-[#1a1a2e] border border-white/5 mb-4">
              <p className="text-slate-300 leading-relaxed mb-4 text-center">
                {result.mainMatch.animal.description}
              </p>

              <div className="mb-4">
                <div className="text-amber-400/70 text-sm mb-2">Your Matching Features</div>
                <div className="flex flex-wrap gap-2">
                  {result.mainMatch.matchingTraits.map((trait, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 text-sm">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <div className="text-amber-400 text-sm mb-1">💡 Fun Fact</div>
                <p className="text-slate-300 text-sm">{result.mainMatch.animal.funFact}</p>
              </div>
            </div>

            {/* AI Analysis */}
            <div className="p-5 rounded-2xl bg-[#1a1a2e] border border-white/5 mb-4">
              <h3 className="text-lg font-semibold text-white mb-2">🔍 AI Analysis</h3>
              <p className="text-slate-400 mb-3">{result.analysis}</p>
              <p className="text-amber-300 italic">"{result.funComment}"</p>
            </div>

            {/* Celebs */}
            <div className="p-5 rounded-2xl bg-[#1a1a2e] border border-white/5 mb-4">
              <h3 className="text-sm font-semibold text-slate-400 mb-3">
                ⭐ Celebs with {result.mainMatch.animal.name} Face
              </h3>
              <div className="flex flex-wrap gap-2">
                {result.mainMatch.animal.celebExamples.map((celeb, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 text-sm">
                    {celeb}
                  </span>
                ))}
              </div>
            </div>

            {/* Other Matches */}
            {result.otherMatches.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-400 text-center mb-3">
                  You Also Resemble...
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {result.otherMatches.map((match, i) => (
                    <div key={i} className="p-4 rounded-xl bg-[#1a1a2e] border border-white/5 text-center">
                      <div className="text-3xl mb-1">{match.animal.emoji}</div>
                      <div className="text-white font-semibold">{match.animal.name}</div>
                      <div className="text-slate-500 text-sm">{match.animal.nameKo}</div>
                      <div className="text-amber-400 text-sm mt-1">{match.similarity}%</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Share Result Card */}
            <div className="mb-6">
              <h3 className="text-center text-white font-semibold mb-4">
                📱 Share Your Result!
              </h3>
              <ShareResultCard
                userImage={image!}
                animalEmoji={result.mainMatch.animal.emoji}
                animalName={result.mainMatch.animal.name}
                animalNameKo={result.mainMatch.animal.nameKo}
                similarity={result.mainMatch.similarity}
                funComment={result.funComment}
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={reset}
                className="flex-1 py-3 rounded-xl border border-amber-500/30 text-amber-300 font-semibold hover:bg-amber-500/10 transition-all"
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
          </div>
        </section>
      )}

      {/* Animal Preview (when no result) */}
      {!result && (
        <section className="py-8 px-4">
          <div className="max-w-xl mx-auto">
            <h3 className="text-center text-slate-400 font-semibold mb-4">
              Which Animal Will You Be?
            </h3>
            <div className="grid grid-cols-5 gap-2">
              {animalFaces.map((animal) => (
                <div
                  key={animal.id}
                  className="p-3 rounded-xl bg-[#1a1a2e] border border-white/5 text-center hover:border-amber-400/30 hover:bg-amber-500/5 transition-colors cursor-default"
                  title={`${animal.name} (${animal.nameKo})`}
                >
                  <div className="text-2xl">{animal.emoji}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-600 text-sm mt-3">
              10 animal types based on Korean face reading! 🐾
            </p>
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
