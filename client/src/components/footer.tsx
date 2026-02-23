import { Trophy, MapPin, Phone, Heart } from "lucide-react";

export function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "gallery", label: "Gallery" },
    { id: "tournaments", label: "Tournaments" },
  ];

  return (
    <footer id="contact" className="bg-[#1a1a2e] text-white relative overflow-hidden" data-testid="section-footer">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2E7D32]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#FFB300]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2E7D32] to-[#388E3C] flex items-center justify-center shadow-lg shadow-[#2E7D32]/20">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg block leading-tight">Sunward Park</span>
                <span className="text-white/40 text-xs font-medium tracking-wider uppercase">Tennis Community</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              A vibrant community of tennis players meeting regularly at Sunward Park.
              All skill levels welcome, from beginners to advanced.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/70 mb-5">Quick Links</h3>
            <div className="space-y-3">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block text-white/50 text-sm hover:text-[#FFB300] transition-colors duration-300 hover:translate-x-1 transform"
                  data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/70 mb-5">Find Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#2E7D32]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#2E7D32]" />
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium">Sunward Park Tennis Courts</p>
                  <p className="text-white/40 text-xs mt-0.5">Boksburg, Gauteng</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#2E7D32]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-[#2E7D32]" />
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium">Contact us on the court!</p>
                  <p className="text-white/40 text-xs mt-0.5">Saturdays, 08:00 - 12:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm" data-testid="text-copyright">
            &copy; {new Date().getFullYear()} Sunward Park Tennis Community
          </p>
          <p className="text-white/30 text-xs flex items-center gap-1.5">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> for tennis
          </p>
        </div>
      </div>
    </footer>
  );
}
