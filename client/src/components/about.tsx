import { Card } from "@/components/ui/card";
import { Users, MapPin, Clock, Star } from "lucide-react";
import racketImage from "@assets/WhatsApp_Image_2026-02-07_at_16.30.29_1771663586522.jpeg";

const features = [
  {
    icon: Users,
    title: "All Levels Welcome",
    description: "From absolute beginners to advanced players, everyone has a place in our community.",
    color: "bg-[#2E7D32]",
    lightBg: "bg-[#2E7D32]/8",
  },
  {
    icon: MapPin,
    title: "Sunward Park Courts",
    description: "We meet regularly at the beautiful Sunward Park tennis courts in a friendly environment.",
    color: "bg-[#1976D2]",
    lightBg: "bg-[#1976D2]/8",
  },
  {
    icon: Clock,
    title: "Regular Meetups",
    description: "Join us every Saturday morning for fun social tennis. Weekday sessions also available.",
    color: "bg-[#FFB300]",
    lightBg: "bg-[#FFB300]/10",
  },
  {
    icon: Star,
    title: "Tournaments & Events",
    description: "Compete in our community tournaments, doubles events, and special social gatherings.",
    color: "bg-[#2E7D32]",
    lightBg: "bg-[#2E7D32]/8",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-[#FAFAFA] dark:bg-muted/30 relative overflow-hidden" data-testid="section-about">
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#2E7D32]/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFB300]/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E7D32]/8 dark:bg-primary/10 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
            <span className="font-heading font-semibold text-xs uppercase tracking-widest text-[#2E7D32] dark:text-primary" data-testid="text-about-label">
              About Us
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-5" data-testid="text-about-title">
            More Than Just Tennis
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            We're a community of passionate tennis enthusiasts who believe that the best games
            are played with great people.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#2E7D32]/20 to-[#FFB300]/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={racketImage}
                alt="Tennis rackets brought together in a circle"
                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                data-testid="img-about"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-[#FFB300] rounded-xl px-6 py-4 shadow-lg shadow-[#FFB300]/20">
              <div className="text-center">
                <span className="block font-heading font-bold text-3xl text-[#212121]">15+</span>
                <span className="text-xs font-semibold text-[#212121]/70 uppercase tracking-wider">Members</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="p-6 border-card-border bg-white dark:bg-card rounded-xl group/card hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300"
                data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className={`w-11 h-11 rounded-xl ${feature.lightBg} flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-5 h-5 ${
                    feature.color === "bg-[#2E7D32]" ? "text-[#2E7D32]" :
                    feature.color === "bg-[#1976D2]" ? "text-[#1976D2]" :
                    "text-[#FFB300]"
                  }`} />
                </div>
                <h3 className="font-heading font-semibold text-base text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-2xl overflow-hidden border border-card-border bg-white dark:bg-card shadow-sm" data-testid="schedule-card">
          <div className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] px-8 py-4">
            <h3 className="font-heading font-semibold text-white text-lg">When & Where</h3>
          </div>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="p-8 text-center group">
              <div className="w-14 h-14 rounded-2xl bg-[#1976D2]/8 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-7 h-7 text-[#1976D2]" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-1.5">Saturday Sessions</h4>
              <p className="text-sm text-muted-foreground">Every Saturday</p>
              <p className="text-sm font-semibold text-[#2E7D32] mt-1">08:00 - 12:00</p>
            </div>
            <div className="p-8 text-center group">
              <div className="w-14 h-14 rounded-2xl bg-[#2E7D32]/8 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-7 h-7 text-[#2E7D32]" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-1.5">Location</h4>
              <p className="text-sm text-muted-foreground">Sunward Park</p>
              <p className="text-sm font-semibold text-[#2E7D32] mt-1">Tennis Courts</p>
            </div>
            <div className="p-8 text-center group">
              <div className="w-14 h-14 rounded-2xl bg-[#FFB300]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-[#FFB300]" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-1.5">Open to All</h4>
              <p className="text-sm text-muted-foreground">Beginners to</p>
              <p className="text-sm font-semibold text-[#2E7D32] mt-1">Advanced Players</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
