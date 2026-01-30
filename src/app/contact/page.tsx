import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — FaceTest",
  description: "Get in touch with the FaceTest team.",
};

export default function ContactPage() {
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

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">📬</div>
            <h1 className="text-3xl font-bold text-white mb-2">Contact Us</h1>
            <p className="text-slate-400">
              Have questions or feedback? We'd love to hear from you!
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-[#1a1a2e] border border-white/5">
              <h2 className="text-lg font-semibold text-white mb-4">📧 Email</h2>
              <p className="text-slate-300 mb-2">For general inquiries and support:</p>
              <a 
                href="mailto:support@aiactive.net" 
                className="text-amber-400 hover:text-amber-300 transition-colors text-lg font-medium"
              >
                support@aiactive.net
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-[#1a1a2e] border border-white/5">
              <h2 className="text-lg font-semibold text-white mb-4">💼 Business Inquiries</h2>
              <p className="text-slate-300 mb-2">For partnerships and collaborations:</p>
              <a 
                href="mailto:business@aiactive.net" 
                className="text-amber-400 hover:text-amber-300 transition-colors text-lg font-medium"
              >
                business@aiactive.net
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-[#1a1a2e] border border-white/5">
              <h2 className="text-lg font-semibold text-white mb-4">🐛 Report Issues</h2>
              <p className="text-slate-300 mb-2">Found a bug or have a suggestion?</p>
              <a 
                href="mailto:support@aiactive.net?subject=Bug Report / Suggestion" 
                className="text-amber-400 hover:text-amber-300 transition-colors text-lg font-medium"
              >
                Send us a report
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20">
            <h2 className="text-lg font-semibold text-white mb-4">❓ Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-amber-400 font-medium mb-1">Is FaceTest free?</h3>
                <p className="text-slate-300 text-sm">Yes! All our tests are completely free to use.</p>
              </div>
              <div>
                <h3 className="text-amber-400 font-medium mb-1">Are my photos saved?</h3>
                <p className="text-slate-300 text-sm">No. Your photos are processed temporarily and deleted immediately after analysis.</p>
              </div>
              <div>
                <h3 className="text-amber-400 font-medium mb-1">How accurate are the results?</h3>
                <p className="text-slate-300 text-sm">FaceTest is for entertainment only. Results are AI-generated fun and not scientifically validated.</p>
              </div>
              <div>
                <h3 className="text-amber-400 font-medium mb-1">Can I suggest new tests?</h3>
                <p className="text-slate-300 text-sm">Absolutely! Email us your ideas and we'll consider adding them.</p>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="mt-8 text-center text-slate-500 text-sm">
            <p>We typically respond within 24-48 hours.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 px-4 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-amber-500/30 text-amber-300 font-semibold hover:bg-amber-500/10 transition-all"
        >
          ← Back to Home
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
