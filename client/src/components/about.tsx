import { Card } from "@/components/ui/card";
import { Users, MapPin, Clock, Star } from "lucide-react";
import racketImage from "@assets/WhatsApp_Image_2026-02-07_at_16.30.29_1771663586522.jpeg";

const features = [
  {
    icon: Users,
    title: "All Levels Welcome",
    description: "From absolute beginners to advanced players, everyone has a place in our community.",
  },
  {
    icon: MapPin,
    title: "Sunward Park Courts",
    description: "We meet regularly at the beautiful Sunward Park tennis courts in a friendly environment.",
  },
  {
    icon: Clock,
    title: "Regular Meetups",
    description: "Join us every Saturday morning for fun social tennis. Weekday sessions also available.",
  },
  {
    icon: Star,
    title: "Tournaments & Events",
    description: "Compete in our community tournaments, doubles events, and special social gatherings.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-[#F5F5F5] dark:bg-muted/30" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block font-heading font-semibold text-sm uppercase tracking-wider text-[#2E7D32] dark:text-primary mb-3" data-testid="text-about-label">
            About Us
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4" data-testid="text-about-title">
            More Than Just Tennis
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We're a community of passionate tennis enthusiasts who believe that the best games
            are played with great people.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-md overflow-hidden">
              <img
                src={racketImage}
                alt="Tennis rackets brought together in a circle"
                className="w-full h-[400px] object-cover"
                data-testid="img-about"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FFB300] rounded-md flex items-center justify-center">
              <div className="text-center">
                <span className="block font-heading font-bold text-2xl text-[#212121]">15+</span>
                <span className="text-xs font-medium text-[#212121]/80">Members</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature) => (
              <Card key={feature.title} className="p-5 border-card-border bg-white dark:bg-card" data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="w-10 h-10 rounded-md bg-[#2E7D32]/10 dark:bg-primary/15 flex items-center justify-center mb-3">
                  <feature.icon className="w-5 h-5 text-[#2E7D32] dark:text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-base text-foreground mb-1.5">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white dark:bg-card rounded-md p-8 border border-card-border" data-testid="schedule-card">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#1976D2]/10 dark:bg-chart-1/15 flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-[#1976D2] dark:text-chart-1" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-1">Saturday Sessions</h4>
              <p className="text-sm text-muted-foreground">Every Saturday, 08:00 - 12:00</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-[#2E7D32]/10 dark:bg-primary/15 flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-[#2E7D32] dark:text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-1">Location</h4>
              <p className="text-sm text-muted-foreground">Sunward Park Tennis Courts</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-[#FFB300]/10 flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-[#FFB300]" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-1">Open to All</h4>
              <p className="text-sm text-muted-foreground">Beginners to Advanced Players</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
