import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — FaceTest",
  description: "Terms and conditions for using FaceTest services.",
};

export default function TermsPage() {
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
      <article className="py-12 px-4">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
          
          <p className="text-slate-400 mb-4">
            Last updated: January 30, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-300 mb-4">
              By accessing and using FaceTest ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">2. Description of Service</h2>
            <p className="text-slate-300 mb-4">
              FaceTest provides AI-powered face analysis tests for entertainment purposes. Our services include:
            </p>
            <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
              <li>Animal Face Test - Discover which animal you resemble</li>
              <li>Age Guessing Test - AI estimates your age (coming soon)</li>
              <li>Celebrity Twin Test - Find your celebrity lookalike (coming soon)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">3. Entertainment Purposes Only</h2>
            <p className="text-slate-300 mb-4">
              <strong className="text-amber-400">Important:</strong> All results provided by FaceTest are for entertainment purposes only. Our AI analysis is not scientifically validated and should not be taken as accurate assessments of your appearance, personality, or any other characteristics.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">4. User Responsibilities</h2>
            <p className="text-slate-300 mb-4">
              When using our Service, you agree to:
            </p>
            <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
              <li>Only upload photos of yourself or photos you have permission to use</li>
              <li>Not upload inappropriate, offensive, or illegal content</li>
              <li>Not attempt to reverse engineer or misuse our AI technology</li>
              <li>Not use the Service for any unlawful purpose</li>
              <li>Be at least 13 years old to use the Service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">5. Intellectual Property</h2>
            <p className="text-slate-300 mb-4">
              The Service, including its design, features, and content (excluding user-uploaded photos), is owned by FaceTest and protected by intellectual property laws. You may share your results but may not reproduce or distribute our Service itself.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">6. Privacy</h2>
            <p className="text-slate-300 mb-4">
              Your use of the Service is also governed by our <Link href="/privacy" className="text-amber-400 hover:underline">Privacy Policy</Link>. By using FaceTest, you consent to the collection and use of information as described in our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">7. Disclaimer of Warranties</h2>
            <p className="text-slate-300 mb-4">
              THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE THE ACCURACY, COMPLETENESS, OR USEFULNESS OF ANY RESULTS OR INFORMATION PROVIDED BY THE SERVICE.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">8. Limitation of Liability</h2>
            <p className="text-slate-300 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, FACETEST SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">9. Modifications</h2>
            <p className="text-slate-300 mb-4">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the Service after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">10. Termination</h2>
            <p className="text-slate-300 mb-4">
              We reserve the right to terminate or suspend access to our Service immediately, without prior notice, for any reason whatsoever, including breach of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">11. Governing Law</h2>
            <p className="text-slate-300 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the Republic of Korea, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">12. Contact</h2>
            <p className="text-slate-300 mb-4">
              For questions about these Terms, please contact us at:
            </p>
            <p className="text-amber-400">
              support@aiactive.net
            </p>
          </section>
        </div>
      </article>

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
