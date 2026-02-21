import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/WhatsApp_Image_2025-07-20_at_14.55.55_1771663586520.jpeg";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" data-testid="section-hero">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sunward Park Tennis Community group photo"
          className="w-full h-full object-cover"
          data-testid="img-hero"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#FFB300] animate-pulse" />
          <span className="text-white/90 text-sm font-medium">All Skill Levels Welcome</span>
        </div>

        <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6" data-testid="text-hero-title">
          Sunward Park
          <span className="block text-[#FFB300]">Tennis Community</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-8 leading-relaxed" data-testid="text-hero-subtitle">
          Whether you're picking up a racket for the first time or you've been playing for years,
          there's a place for you on our court. Join our vibrant community of tennis lovers!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-[#2E7D32] text-white border-[#2E7D32] px-8 text-base font-heading font-semibold"
            onClick={() => scrollTo("about")}
            data-testid="button-learn-more"
          >
            Learn More
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="backdrop-blur-sm bg-white/10 border-white/30 text-white px-8 text-base font-heading font-semibold"
            onClick={() => scrollTo("tournaments")}
            data-testid="button-view-events"
          >
            View Events
          </Button>
        </div>
      </div>

      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-bounce"
        aria-label="Scroll down"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
