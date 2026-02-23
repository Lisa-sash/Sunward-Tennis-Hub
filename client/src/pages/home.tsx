import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Gallery } from "@/components/gallery";
import { Tournaments } from "@/components/tournaments";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { tournaments, galleryImages } from "@/data/content";

export default function Home() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-home">
      <Navbar />
      <Hero />
      <About />
      <Gallery images={galleryImages} />
      <Tournaments tournaments={tournaments} />
      <Footer />
    </div>
  );
}
