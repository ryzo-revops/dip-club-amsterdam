import type { Metadata } from "next";
import Image from "next/image";
import Hero from "../components/Hero";
import ScrollReveal from "../components/ScrollReveal";
import WaveDivider from "../components/WaveDivider";

export const metadata: Metadata = {
  title: "Adventures — Dip Club Amsterdam",
  description:
    "Once-a-year long-distance hikes across Europe. Up to 12 days of trails, mountain passes, and unforgettable landscapes.",
};

export default function AdventuresPage() {
  return (
    <>
      {/* Hero */}
      <Hero title="ADVENTURES" subtitle="Long-distance hikes across Europe" badge="Once a year" />

      {/* Overview section 1 — Text left, Image right */}
      <section className="bg-offwhite py-24 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-12">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
            {/* Left: text */}
            <ScrollReveal className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-terracotta mb-4">
                What to expect
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold leading-tight">
                Long-distance hikes that push your limits
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate">
                Once a year, we go big. The annual Dip Club adventure is a long-distance
                hike across some of Europe&apos;s most stunning landscapes — up to 12 days
                of trails, mountain passes, wild swimming, and shared experiences. Past
                adventures have taken us through the Dolomites and along the coast of
                South Africa.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate">
                This is where the deepest bonds are formed. Day after day on the trail
                together, you&apos;ll return home exhausted, inspired, and with a group
                of people who now feel like family.
              </p>
            </ScrollReveal>

            {/* Right: image */}
            <ScrollReveal delay={0.2} className="flex-1">
              <div className="relative h-[300px] sm:h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/media/dc-annual-adventure-2.JPG"
                  alt="Dip Club Amsterdam annual adventure"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Overview section 2 — Image left, Text right */}
      <section className="bg-offwhite py-24 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-12">
          <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center lg:gap-20">
            {/* Right: text (rendered first in DOM, flex-row-reverse visually puts it right) */}
            <ScrollReveal className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-terracotta mb-4">
                The details
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold leading-tight">
                What an adventure looks like
              </h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Duration: 7-12 days of continuous hiking",
                  "Routes: European long-distance trails, mountain crossings, coastal paths",
                  "Group size: 8-12 people",
                  "What to bring: Trail shoes, backpack, camping gear (full packing list provided)",
                  "Travel: Trains and buses where possible — we keep it local",
                  "Cost: Shared expenses — transport, accommodation, and food",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base text-slate">
                    <span className="h-2 w-2 flex-shrink-0 rounded-sm bg-terracotta" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Left: image */}
            <ScrollReveal delay={0.2} className="flex-1">
              <div className="relative h-[300px] sm:h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/media/dc-polaroid-4-dolomites-hike.jpg"
                  alt="Dolomites hike adventure"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="bg-offwhite py-24 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-extrabold mb-12">
              From our adventures
            </h2>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/media/dc-polaroid-2-dolomites-hike.jpg"
                  alt="Dolomites hike"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/media/dc-polaroid-3-south-africa-hike.jpg"
                  alt="South Africa hike"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/media/IMG_6342.jpg"
                  alt="Adventure photo"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <WaveDivider topColor="#e8e5e2" bottomColor="#f06530" />
      <section className="bg-terracotta py-24 lg:py-32 text-center">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Ready for the adventure of a lifetime?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base text-white/80">
              Sign up for the next trip or join our community to be the first to know
              when registrations open.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:justify-center items-center gap-4">
              <a
                href="#"
                className="inline-block rounded-sm bg-offwhite px-8 py-3.5 text-sm font-semibold text-dark hover:scale-[1.02] hover:bg-offwhite/90 transition-all"
              >
                Sign Up for Next Adventure →
              </a>
              <a
                href="https://chat.whatsapp.com/Hgi483zWWtQ3XWt0dBnfnl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-sm border-2 border-white text-white px-8 py-3.5 text-sm font-semibold hover:bg-offwhite hover:text-dark transition-all"
              >
                Join WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
