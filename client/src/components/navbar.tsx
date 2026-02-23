import { useState, useEffect } from "react";
import { Menu, X, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "gallery", "tournaments", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "gallery", label: "Gallery" },
    { id: "tournaments", label: "Events" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 dark:bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2.5 group">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
              scrolled ? "bg-[#2E7D32]" : "bg-white/20 backdrop-blur-sm"
            }`}>
              <Trophy className={`w-4.5 h-4.5 transition-colors duration-300 ${
                scrolled ? "text-white" : "text-white"
              }`} />
            </div>
            <span className={`font-heading font-bold text-lg transition-colors duration-300 ${
              scrolled ? "text-foreground" : "text-white"
            }`} data-testid="text-brand">
              Sunward Park Tennis
            </span>
          </button>

          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  scrolled
                    ? activeSection === link.id
                      ? "text-[#2E7D32]"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    : activeSection === link.id
                      ? "text-[#FFB300]"
                      : "text-white/80 hover:text-white"
                }`}
                data-testid={`link-${link.label.toLowerCase()}`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full transition-colors duration-300 ${
                    scrolled ? "bg-[#2E7D32]" : "bg-[#FFB300]"
                  }`} />
                )}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={scrolled ? "" : "text-white hover:bg-white/10"}
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-80 border-t border-border" : "max-h-0"
      } bg-white dark:bg-background`} data-testid="mobile-menu">
        <div className="px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? "bg-[#2E7D32]/10 text-[#2E7D32] dark:text-primary"
                  : "text-foreground hover:bg-muted"
              }`}
              data-testid={`mobile-link-${link.label.toLowerCase()}`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
