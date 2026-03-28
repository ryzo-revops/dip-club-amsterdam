"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type HeroPhoto = {
  src: string;
  alt: string;
};

type HeroMosaicProps = {
  photos: HeroPhoto[];
};

export default function HeroMosaic({ photos }: HeroMosaicProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>("[data-hero-tile]");
    const delays = [0, 0.18, 0.08, 0.24, 0.14];

    items.forEach((item, i) => {
      item.style.transitionDelay = `${delays[i % delays.length]}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const item = entry.target as HTMLElement;
            item.classList.add("opacity-100", "translate-y-0");
            item.classList.remove("opacity-0", "translate-y-6");
            observer.unobserve(item);
          }
        });
      },
      { threshold: 0.05 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const p = photos.slice(0, 5);

  {/* 3 columns, staggered vertically like stairs descending left to right */}
  return (
    <div ref={containerRef} className="flex gap-2 h-[300px] sm:h-[380px] lg:h-[440px]">
      {/* Column 1 — starts at top */}
      <div className="flex flex-1 flex-col gap-2">
        {p[0] && (
          <div
            data-hero-tile
            className="group relative flex-[3] overflow-hidden rounded-sm opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            <Image
              src={p[0].src}
              alt={p[0].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 33vw, 20vw"
              priority
            />
          </div>
        )}
        {p[1] && (
          <div
            data-hero-tile
            className="group relative flex-[2] overflow-hidden rounded-sm opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            <Image
              src={p[1].src}
              alt={p[1].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 33vw, 20vw"
              priority
            />
          </div>
        )}
      </div>

      {/* Column 2 — offset down */}
      <div className="flex flex-1 flex-col gap-2 mt-8 sm:mt-12">
        {p[2] && (
          <div
            data-hero-tile
            className="group relative flex-[2] overflow-hidden rounded-sm opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            <Image
              src={p[2].src}
              alt={p[2].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 33vw, 20vw"
            />
          </div>
        )}
        {p[3] && (
          <div
            data-hero-tile
            className="group relative flex-[3] overflow-hidden rounded-sm opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            <Image
              src={p[3].src}
              alt={p[3].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 33vw, 20vw"
            />
          </div>
        )}
      </div>

      {/* Column 3 — offset further down */}
      <div className="flex flex-1 flex-col gap-2 mt-16 sm:mt-24">
        {p[4] && (
          <div
            data-hero-tile
            className="group relative flex-1 overflow-hidden rounded-sm opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            <Image
              src={p[4].src}
              alt={p[4].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 33vw, 20vw"
            />
          </div>
        )}
      </div>
    </div>
  );
}
