import { useQuery } from "@tanstack/react-query";
import type { Tournament, GalleryImage } from "@shared/schema";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Gallery } from "@/components/gallery";
import { Tournaments } from "@/components/tournaments";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Home() {
  const { data: tournaments, isLoading: tournamentsLoading } = useQuery<Tournament[]>({
    queryKey: ["/api/tournaments"],
  });

  const { data: galleryImages, isLoading: galleryLoading } = useQuery<GalleryImage[]>({
    queryKey: ["/api/gallery"],
  });

  return (
    <div className="min-h-screen bg-background" data-testid="page-home">
      <Navbar />
      <Hero />
      <About />
      <Gallery images={galleryImages || []} isLoading={galleryLoading} />
      <Tournaments tournaments={tournaments || []} isLoading={tournamentsLoading} />
      <Footer />
    </div>
  );
}
