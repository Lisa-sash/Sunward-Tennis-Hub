import { Trophy, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-[#212121] text-white" data-testid="section-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#2E7D32] flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-lg">Sunward Park Tennis</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              A vibrant community of tennis players meeting regularly at Sunward Park.
              All skill levels welcome, from beginners to advanced players.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Quick Links</h3>
            <div className="space-y-2.5">
              <button onClick={() => scrollTo("hero")} className="block text-white/60 text-sm hover:text-[#FFB300] transition-colors" data-testid="footer-link-home">Home</button>
              <button onClick={() => scrollTo("about")} className="block text-white/60 text-sm hover:text-[#FFB300] transition-colors" data-testid="footer-link-about">About Us</button>
              <button onClick={() => scrollTo("gallery")} className="block text-white/60 text-sm hover:text-[#FFB300] transition-colors" data-testid="footer-link-gallery">Gallery</button>
              <button onClick={() => scrollTo("tournaments")} className="block text-white/60 text-sm hover:text-[#FFB300] transition-colors" data-testid="footer-link-tournaments">Tournaments</button>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span>Sunward Park Tennis Courts, Boksburg</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/60">
                <Phone className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span>Contact us on the court!</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/40 text-sm" data-testid="text-copyright">
            &copy; {new Date().getFullYear()} Sunward Park Tennis Community. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
