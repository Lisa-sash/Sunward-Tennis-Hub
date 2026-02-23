import { Button } from "@/components/ui/button";
import { ChevronDown, Play } from "lucide-react";
import heroImage from "@assets/WhatsApp_Image_2025-07-20_at_14.55.55_1771663586520.jpeg";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="section-hero">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sunward Park Tennis Community group photo"
          className="w-full h-full object-cover scale-105"
          data-testid="img-hero"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/80 via-[#1a1a2e]/50 to-[#1a1a2e]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2E7D32]/20 to-transparent" />
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#FFB300]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[#2E7D32]/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-8 animate-fade-in">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB300] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFB300]" />
          </span>
          <span className="text-white/90 text-sm font-medium tracking-wide">All Skill Levels Welcome</span>
        </div>

        <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-6 tracking-tight" data-testid="text-hero-title">
          Sunward Park
          <span className="block bg-gradient-to-r from-[#FFB300] to-[#FFC940] bg-clip-text text-transparent">
            Tennis Community
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed font-light" data-testid="text-hero-subtitle">
          Whether you're picking up a racket for the first time or you've been playing for years,
          there's a place for you on our court.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-[#2E7D32] hover:bg-[#256d29] text-white border-none px-8 py-6 text-base font-heading font-semibold rounded-xl shadow-lg shadow-[#2E7D32]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#2E7D32]/30 hover:-translate-y-0.5"
            onClick={() => scrollTo("about")}
            data-testid="button-learn-more"
          >
            Discover Our Community
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="backdrop-blur-md bg-white/5 border-white/20 text-white px-8 py-6 text-base font-heading font-semibold rounded-xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-0.5"
            onClick={() => scrollTo("tournaments")}
            data-testid="button-view-events"
          >
            <Play className="w-4 h-4 mr-2" />
            Upcoming Events
          </Button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 sm:gap-12">
          <div className="text-center">
            <span className="block font-heading font-bold text-2xl sm:text-3xl text-white">15+</span>
            <span className="text-white/50 text-xs sm:text-sm mt-1">Active Members</span>
          </div>
          <div className="w-px h-10 bg-white/15" />
          <div className="text-center">
            <span className="block font-heading font-bold text-2xl sm:text-3xl text-white">Weekly</span>
            <span className="text-white/50 text-xs sm:text-sm mt-1">Sessions</span>
          </div>
          <div className="w-px h-10 bg-white/15" />
          <div className="text-center">
            <span className="block font-heading font-bold text-2xl sm:text-3xl text-white">All</span>
            <span className="text-white/50 text-xs sm:text-sm mt-1">Skill Levels</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors animate-bounce"
        aria-label="Scroll down"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
