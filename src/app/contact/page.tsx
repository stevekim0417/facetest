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
                href="mailto:steve.kim.0417@gmail.com" 
                className="text-amber-400 hover:text-amber-300 transition-colors text-lg font-medium"
              >
                steve.kim.0417@gmail.com
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-[#1a1a2e] border border-white/5">
              <h2 className="text-lg font-semibold text-white mb-4">📞 Phone</h2>
              <p className="text-slate-300 mb-2">Business hours (KST 09:00-18:00):</p>
              <a 
                href="tel:070-5088-2808" 
                className="text-amber-400 hover:text-amber-300 transition-colors text-lg font-medium"
              >
                070-5088-2808
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-[#1a1a2e] border border-white/5">
              <h2 className="text-lg font-semibold text-white mb-4">🏢 Company Info</h2>
              <div className="text-slate-300 space-y-1">
                <p><strong className="text-white">(주)커넥팅더다츠</strong></p>
                <p>대표: 김행수</p>
                <p>사업자등록번호: 423-88-01383</p>
                <p>통신판매업신고: 제2023-서울강남-03460호</p>
                <p className="pt-2">서울특별시 송파구 중대로 207,<br/>대명빌딩 2층 201-J430호 (가락동)</p>
              </div>
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center text-sm text-slate-500 mb-6">
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
          <div className="text-center space-y-1 text-xs text-slate-600">
            <p>(주)커넥팅더다츠 | 대표: 김행수</p>
            <p>사업자등록번호: 423-88-01383 | 통신판매업신고: 제2023-서울강남-03460호</p>
            <p>서울특별시 송파구 중대로 207, 대명빌딩 2층 201-J430호 (가락동)</p>
            <p>전화: 070-5088-2808 | 이메일: steve.kim.0417@gmail.com</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
