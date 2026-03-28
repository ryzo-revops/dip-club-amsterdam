import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero
        title="DIP CLUB"
        subtitle="Seek Discomfort. Find Yourself."
        description="Amsterdam's urban wellness community. Ice baths, breathwork, and outdoor adventures for those who choose growth over comfort."
        ctaText="Join Our WhatsApp Community →"
        ctaHref="https://chat.whatsapp.com/Hgi483zWWtQ3XWt0dBnfnl"
        imageSrc="/media/dc-hero-image-website.png"
        imageAlt="Dip Club community members at an outdoor ice bath"
        fullHeight
      />
    </main>
  );
}
