import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-20">
        <div className="flex flex-col gap-16 lg:flex-row lg:justify-between">
          {/* Left: Social links with square icons */}
          <div className="flex flex-col gap-5">
            <a
              href="https://www.instagram.com/dipclub.ams/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4"
            >
              <span className="flex h-12 w-12 items-center justify-center border border-white/30 transition-colors group-hover:border-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </span>
              <span className="text-lg text-white/70 transition-colors group-hover:text-white">Instagram</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="ml-auto text-white/40 transition-colors group-hover:text-white">
                <path d="M7 7l10 10M17 7v10H7" />
              </svg>
            </a>
            <a
              href="mailto:hello@dipclub.nl"
              className="group flex items-center gap-4"
            >
              <span className="flex h-12 w-12 items-center justify-center border border-white/30 transition-colors group-hover:border-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <span className="text-lg text-white/70 transition-colors group-hover:text-white">Email</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="ml-auto text-white/40 transition-colors group-hover:text-white">
                <path d="M7 7l10 10M17 7v10H7" />
              </svg>
            </a>
            <p className="mt-4 text-sm text-white/40 max-w-xs">
              Made with cold hands and warm hearts in Amsterdam
            </p>
          </div>

          {/* Right: Nav links */}
          <nav className="flex flex-col items-start lg:items-end gap-3">
            <Link href="/" className="text-2xl font-medium text-white/70 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/dips" className="text-2xl font-medium text-white/70 hover:text-white transition-colors">
              Dips
            </Link>
            <Link href="/excursions" className="text-2xl font-medium text-white/70 hover:text-white transition-colors">
              Excursions
            </Link>
            <Link href="/adventures" className="text-2xl font-medium text-white/70 hover:text-white transition-colors">
              Adventures
            </Link>
          </nav>
        </div>

        {/* Copyright bar */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row sm:justify-between gap-4 text-xs text-white/40">
          <span>&copy; {new Date().getFullYear()} Dip Club Amsterdam. All rights reserved.</span>
          <Image
            src="/brand-assets/dipclub-logo-white.svg"
            alt="Dip Club"
            width={80}
            height={20}
            className="h-5 w-auto opacity-40"
          />
        </div>
      </div>
    </footer>
  );
}
