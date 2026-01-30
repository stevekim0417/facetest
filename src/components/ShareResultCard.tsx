"use client";

import { useRef, useState } from "react";
import html2canvas from "html2canvas";

interface ShareResultCardProps {
  userImage: string;
  animalEmoji: string;
  animalName: string;
  animalNameKo: string;
  similarity: number;
  funComment: string;
}

export default function ShareResultCard({
  userImage,
  animalEmoji,
  animalName,
  animalNameKo,
  similarity,
  funComment,
}: ShareResultCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  const generateImage = async (): Promise<string | null> => {
    if (!cardRef.current) return null;
    
    setIsGenerating(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: "#0f0f1a",
        scale: 2,
        useCORS: true,
        allowTaint: true,
      });
      return canvas.toDataURL("image/png");
    } catch (error) {
      console.error("Failed to generate image:", error);
      return null;
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadImage = async () => {
    const dataUrl = await generateImage();
    if (!dataUrl) return;

    const link = document.createElement("a");
    link.download = `my-animal-face-${animalName.toLowerCase()}.png`;
    link.href = dataUrl;
    link.click();
  };

  const shareToTwitter = () => {
    const text = `I got ${animalEmoji} ${animalName} (${similarity}% match) on the Animal Face Test! What's your animal face? 🐾`;
    const url = "https://facetest.aiactive.net/animal";
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareToFacebook = () => {
    const url = "https://facetest.aiactive.net/animal";
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText("https://facetest.aiactive.net/animal");
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  const shareNative = async () => {
    const dataUrl = await generateImage();
    
    if (navigator.share) {
      try {
        const blob = dataUrl ? await (await fetch(dataUrl)).blob() : null;
        const file = blob ? new File([blob], "my-animal-face.png", { type: "image/png" }) : null;
        
        await navigator.share({
          title: `I'm a ${animalName}! 🐾`,
          text: `I got ${animalEmoji} ${animalName} (${similarity}% match) on the Animal Face Test!`,
          url: "https://facetest.aiactive.net/animal",
          ...(file && navigator.canShare?.({ files: [file] }) ? { files: [file] } : {}),
        });
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          console.error("Share failed:", error);
        }
      }
    }
  };

  return (
    <div className="space-y-4">
      {/* Shareable Card */}
      <div
        ref={cardRef}
        className="p-6 rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] border border-amber-500/20"
        style={{ width: "100%", maxWidth: "400px", margin: "0 auto" }}
      >
        {/* Header */}
        <div className="text-center mb-4">
          <div className="text-xs text-amber-400/60 uppercase tracking-widest mb-1">
            🎭 FaceTest Result
          </div>
          <div className="text-lg font-bold text-white">My Animal Face Is...</div>
        </div>

        {/* Images */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-20 h-20 rounded-xl overflow-hidden border-3 border-amber-500/50">
            <img src={userImage} alt="You" className="w-full h-full object-cover" />
          </div>
          <div className="text-2xl text-amber-400">=</div>
          <div className="w-20 h-20 rounded-xl border-3 border-orange-500/50 bg-gradient-to-br from-amber-900/40 to-orange-900/40 flex items-center justify-center">
            <span className="text-4xl">{animalEmoji}</span>
          </div>
        </div>

        {/* Result */}
        <div className="text-center">
          <div className="text-3xl font-extrabold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            {animalEmoji} {animalName}
          </div>
          <div className="text-amber-300/70 text-sm">{animalNameKo}</div>
          <div className="mt-2 inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/30 to-orange-500/30 border border-amber-400/40">
            <span className="text-amber-300 font-bold text-lg">{similarity}%</span>
            <span className="text-slate-400 text-sm ml-1">Match</span>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-4 p-3 rounded-lg bg-black/30 text-center">
          <p className="text-amber-200/80 text-sm italic">"{funComment}"</p>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center">
          <div className="text-xs text-slate-500">facetest.aiactive.net</div>
        </div>
      </div>

      {/* Share Buttons */}
      <div className="max-w-[400px] mx-auto space-y-3">
        {/* Download Button */}
        <button
          onClick={downloadImage}
          disabled={isGenerating}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold
                   hover:from-amber-400 hover:to-orange-400 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isGenerating ? (
            <>
              <span className="animate-spin">⏳</span> Generating...
            </>
          ) : (
            <>
              📥 Save Result Image
            </>
          )}
        </button>

        {/* Share Row */}
        <div className="grid grid-cols-3 gap-2">
          
          {/* Twitter */}
          <button
            onClick={shareToTwitter}
            className="py-3 rounded-xl bg-[#1a1a2e] border border-white/10 text-white font-semibold hover:bg-[#1DA1F2]/20 hover:border-[#1DA1F2]/50 transition-all flex items-center justify-center"
            title="Share on Twitter"
          >
            𝕏
          </button>

          {/* Facebook */}
          <button
            onClick={shareToFacebook}
            className="py-3 rounded-xl bg-[#1a1a2e] border border-white/10 text-white font-semibold hover:bg-[#4267B2]/20 hover:border-[#4267B2]/50 transition-all flex items-center justify-center"
            title="Share on Facebook"
          >
            f
          </button>

          {/* Copy Link */}
          <button
            onClick={copyLink}
            className="py-3 rounded-xl bg-[#1a1a2e] border border-white/10 text-white font-semibold hover:bg-white/5 transition-all flex items-center justify-center relative"
            title="Copy Link"
          >
            {showCopied ? "✓" : "🔗"}
          </button>
        </div>

        <p className="text-center text-slate-500 text-xs">
          Share your result and challenge your friends! 🐾
        </p>
      </div>
    </div>
  );
}
