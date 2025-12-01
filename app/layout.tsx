import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agentic Website",
  description: "A fast, modern website deployed on Vercel",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="site-header">
          <div className="container header-inner">
            <a className="brand" href="/">Agentic</a>
            <nav className="nav">
              <a href="#features">Features</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">
          <div className="container footer-inner">
            <p>? {new Date().getFullYear()} Agentic. All rights reserved.</p>
            <a href="/api/hello" className="api-link">API</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
