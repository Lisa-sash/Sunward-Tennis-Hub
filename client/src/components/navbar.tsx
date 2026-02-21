import { useState } from "react";
import { Menu, X, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-background/95 backdrop-blur-md border-b border-border" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <Trophy className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-lg text-foreground" data-testid="text-brand">
              Sunward Park Tennis
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <Button variant="ghost" size="sm" onClick={() => scrollTo("hero")} data-testid="link-home">
              Home
            </Button>
            <Button variant="ghost" size="sm" onClick={() => scrollTo("about")} data-testid="link-about">
              About
            </Button>
            <Button variant="ghost" size="sm" onClick={() => scrollTo("gallery")} data-testid="link-gallery">
              Gallery
            </Button>
            <Button variant="ghost" size="sm" onClick={() => scrollTo("tournaments")} data-testid="link-tournaments">
              Tournaments
            </Button>
            <Button variant="ghost" size="sm" onClick={() => scrollTo("contact")} data-testid="link-contact">
              Contact
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} data-testid="button-mobile-menu">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-white dark:bg-background" data-testid="mobile-menu">
          <div className="px-4 py-3 space-y-1">
            <button onClick={() => scrollTo("hero")} className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted transition-colors" data-testid="mobile-link-home">Home</button>
            <button onClick={() => scrollTo("about")} className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted transition-colors" data-testid="mobile-link-about">About</button>
            <button onClick={() => scrollTo("gallery")} className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted transition-colors" data-testid="mobile-link-gallery">Gallery</button>
            <button onClick={() => scrollTo("tournaments")} className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted transition-colors" data-testid="mobile-link-tournaments">Tournaments</button>
            <button onClick={() => scrollTo("contact")} className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted transition-colors" data-testid="mobile-link-contact">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
}
