import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        {/* Links */}
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

        {/* Company Info (Korean legal requirement) */}
        <div className="text-center space-y-1 text-xs text-slate-600">
          <p>(주)커넥팅더다츠 | 대표: 김행수</p>
          <p>사업자등록번호: 423-88-01383 | 통신판매업신고: 제2023-서울강남-03460호</p>
          <p>서울특별시 송파구 중대로 207, 대명빌딩 2층 201-J430호 (가락동)</p>
          <p>
            전화: 070-5088-2808 | 이메일:{" "}
            <a href="mailto:support@aiactive.net" className="hover:text-slate-400 transition-colors">
              support@aiactive.net
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
