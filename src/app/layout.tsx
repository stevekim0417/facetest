import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FaceTest.fun — Fun AI Face Tests",
  description: "Discover your animal face, celebrity twin, and more with AI-powered face analysis. Fun viral tests for everyone!",
  keywords: ["face test", "animal face", "celebrity lookalike", "AI face analysis", "viral test"],
  openGraph: {
    title: "FaceTest.fun — Fun AI Face Tests",
    description: "What animal do you look like? Find out with AI!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FaceTest.fun — Fun AI Face Tests",
    description: "What animal do you look like? Find out with AI!",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen antialiased">
        {/* Background effects */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        
        {children}
      </body>
    </html>
  );
}
