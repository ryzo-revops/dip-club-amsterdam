import Image from "next/image";

type HeroProps = {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  fullHeight?: boolean;
  badge?: string;
};

export default function Hero({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  imageSrc,
  imageAlt,
  fullHeight = false,
  badge,
}: HeroProps) {
  const isExternal = ctaHref?.startsWith("http");

  return (
    <section
      className={`bg-terracotta flex items-end ${
        fullHeight ? "min-h-screen" : "min-h-[60vh]"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 pb-16 pt-32 lg:pb-24 w-full">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          {/* Left column */}
          <div className="max-w-2xl flex flex-col gap-4">
            {badge && (
              <span className="rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white w-fit">
                {badge}
              </span>
            )}

            <h1 className="font-heading text-7xl sm:text-8xl lg:text-[120px] leading-[0.85] tracking-tight text-white uppercase">
              {title}
            </h1>

            {subtitle && (
              <p className="text-lg sm:text-xl font-medium text-white/90">
                {subtitle}
              </p>
            )}

            {description && (
              <p className="text-base text-white/70 max-w-md">{description}</p>
            )}

            {ctaText && ctaHref && (
              <a
                href={ctaHref}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-dark hover:scale-[1.02] hover:bg-white/90 transition-all mt-2 w-fit"
              >
                {ctaText}
              </a>
            )}
          </div>

          {/* Right column */}
          {imageSrc && (
            <div className="relative h-[280px] sm:h-[340px] lg:h-[400px] lg:w-[440px] lg:flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src={imageSrc}
                alt={imageAlt ?? ""}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 440px"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
