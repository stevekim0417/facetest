import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — FaceTest",
  description: "Learn how FaceTest handles your data and protects your privacy.",
};

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <p className="text-slate-400 mb-4">
            Last updated: January 30, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
            <p className="text-slate-300 mb-4">
              Welcome to FaceTest ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains how we collect, use, and safeguard your information when you use our face analysis services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-medium text-white mb-2">Photos You Upload</h3>
            <p className="text-slate-300 mb-4">
              When you use our face analysis tests, you may upload photos. These photos are:
            </p>
            <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
              <li>Processed temporarily to generate your results</li>
              <li>NOT stored on our servers after analysis</li>
              <li>NOT shared with third parties</li>
              <li>Deleted immediately after your session ends</li>
            </ul>

            <h3 className="text-lg font-medium text-white mb-2">Analytics Data</h3>
            <p className="text-slate-300 mb-4">
              We may collect anonymous usage data to improve our services, including:
            </p>
            <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
              <li>Pages visited and time spent</li>
              <li>Device type and browser information</li>
              <li>General geographic location (country/region)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-300 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
              <li>Provide and improve our face analysis services</li>
              <li>Analyze usage patterns to enhance user experience</li>
              <li>Ensure the security and integrity of our platform</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">4. Third-Party Services</h2>
            <p className="text-slate-300 mb-4">
              We use the following third-party services:
            </p>
            <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
              <li><strong>Google AI (Gemini)</strong> - For facial analysis processing</li>
              <li><strong>Google Analytics</strong> - For website analytics</li>
              <li><strong>Google AdSense</strong> - For displaying advertisements</li>
            </ul>
            <p className="text-slate-300 mb-4">
              These services may collect their own data according to their respective privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">5. Cookies</h2>
            <p className="text-slate-300 mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
              <li>Remember your preferences</li>
              <li>Analyze website traffic</li>
              <li>Serve relevant advertisements</li>
            </ul>
            <p className="text-slate-300 mb-4">
              You can control cookies through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">6. Data Security</h2>
            <p className="text-slate-300 mb-4">
              We implement appropriate security measures to protect your information. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">7. Children's Privacy</h2>
            <p className="text-slate-300 mb-4">
              Our services are not intended for children under 13. We do not knowingly collect information from children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">8. Your Rights</h2>
            <p className="text-slate-300 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
              <li>Access your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt out of analytics tracking</li>
              <li>Disable cookies in your browser</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">9. Changes to This Policy</h2>
            <p className="text-slate-300 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">10. Contact Us</h2>
            <p className="text-slate-300 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
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
