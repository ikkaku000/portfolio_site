import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://portfoliosite-six-gamma.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Masas Portfolio",
    template: "%s | Masas Portfolio",
  },
  description: "AIを活用した制作物を掲載するポートフォリオサイト",
  openGraph: {
    title: "Masas Portfolio",
    description: "AIを活用した制作物を掲載するポートフォリオサイト",
    url: SITE_URL,
    siteName: "Masas Portfolio",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/works/ai-meeting-minutes.svg",
        width: 1200,
        height: 630,
        alt: "Masas Portfolioの代表作品イメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Masas Portfolio",
    description: "AIを活用した制作物を掲載するポートフォリオサイト",
    images: ["/works/ai-meeting-minutes.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/works", label: "Works" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900">
        <header className="border-b border-zinc-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-bold tracking-tight">
              Masas Portfolio
            </Link>
            <nav aria-label="global">
              <ul className="flex items-center gap-5 text-sm font-medium">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-blue-600">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
        <main className="mx-auto flex w-full max-w-6xl flex-1 px-6 py-10">
          {children}
        </main>
        <footer className="border-t border-zinc-200 bg-white">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 text-sm text-zinc-600">
            <p>© {new Date().getFullYear()} Masas</p>
            <p>Built with Next.js + TypeScript</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
