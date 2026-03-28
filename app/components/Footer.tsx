import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          {/* Column 1: Logo + tagline */}
          <div className="flex flex-col gap-4">
            <Image
              src="/brand-assets/dipclub-logo-white.svg"
              alt="Dip Club Amsterdam"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-sm text-white/60 max-w-[240px]">
              Made with cold hands and warm hearts in Amsterdam
            </p>
          </div>

          {/* Column 2: Nav links */}
          <nav className="flex flex-col gap-3">
            <Link href="/" className="text-sm text-white/70 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/dips" className="text-sm text-white/70 hover:text-white transition-colors">
              Dips
            </Link>
            <Link href="/excursions" className="text-sm text-white/70 hover:text-white transition-colors">
              Excursions
            </Link>
            <Link href="/adventures" className="text-sm text-white/70 hover:text-white transition-colors">
              Adventures
            </Link>
          </nav>

          {/* Column 3: Contact + social */}
          <div className="flex flex-col gap-4">
            <p className="text-sm text-white/60">Got a question?</p>
            <a
              href="mailto:hello@dipclub.nl"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              hello@dipclub.nl
            </a>
            <div className="flex gap-4 mt-1">
              {/* Instagram icon */}
              <a
                href="https://www.instagram.com/dipclub.ams/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              {/* Email icon */}
              <a
                href="mailto:hello@dipclub.nl"
                aria-label="Email"
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} Dip Club Amsterdam. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
