import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, MapPin, Clock, DollarSign, Trophy, Phone } from "lucide-react";
import type { Tournament } from "@shared/schema";

interface TournamentsProps {
  tournaments: Tournament[];
  isLoading: boolean;
}

export function Tournaments({ tournaments, isLoading }: TournamentsProps) {
  return (
    <section id="tournaments" className="py-20 bg-[#F5F5F5] dark:bg-muted/30" data-testid="section-tournaments">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block font-heading font-semibold text-sm uppercase tracking-wider text-[#2E7D32] dark:text-primary mb-3" data-testid="text-tournaments-label">
            Upcoming Events
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4" data-testid="text-tournaments-title">
            Tournaments & Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Stay informed about upcoming tournaments and community events. Don't miss out!
          </p>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <Card key={i} className="p-6 border-card-border">
                <Skeleton className="h-6 w-3/4 mb-3" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3 mb-4" />
                <div className="flex gap-4">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </Card>
            ))}
          </div>
        ) : tournaments.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground text-lg">No upcoming tournaments at the moment.</p>
            <p className="text-sm text-muted-foreground mt-2">Check back soon for new events!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {tournaments.map((tournament) => (
              <Card
                key={tournament.id}
                className="overflow-visible border-card-border bg-white dark:bg-card group"
                data-testid={`card-tournament-${tournament.id}`}
              >
                {tournament.imageUrl && (
                  <div className="relative overflow-hidden rounded-t-md">
                    <img
                      src={tournament.imageUrl}
                      alt={tournament.title}
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                      data-testid={`img-tournament-${tournament.id}`}
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-[#2E7D32] text-white border-[#2E7D32]">
                        Upcoming
                      </Badge>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2" data-testid={`text-tournament-title-${tournament.id}`}>
                    {tournament.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {tournament.description}
                  </p>

                  <div className="space-y-2.5 mb-4">
                    <div className="flex items-center gap-2.5 text-sm">
                      <Calendar className="w-4 h-4 text-[#1976D2] dark:text-chart-1 shrink-0" />
                      <span className="text-foreground">{tournament.date}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm">
                      <Clock className="w-4 h-4 text-[#1976D2] dark:text-chart-1 shrink-0" />
                      <span className="text-foreground">{tournament.time}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm">
                      <MapPin className="w-4 h-4 text-[#2E7D32] dark:text-primary shrink-0" />
                      <span className="text-foreground">{tournament.location}</span>
                    </div>
                  </div>

                  {(tournament.playerFee || tournament.nonPlayerFee) && (
                    <div className="flex flex-wrap gap-3 mb-4">
                      {tournament.playerFee && (
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#2E7D32]/8 dark:bg-primary/10">
                          <DollarSign className="w-3.5 h-3.5 text-[#2E7D32] dark:text-primary" />
                          <span className="text-xs font-medium text-[#2E7D32] dark:text-primary">Players: {tournament.playerFee}</span>
                        </div>
                      )}
                      {tournament.nonPlayerFee && (
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#FFB300]/10">
                          <DollarSign className="w-3.5 h-3.5 text-[#FFB300]" />
                          <span className="text-xs font-medium text-[#FFB300]">Non-Players: {tournament.nonPlayerFee}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {tournament.theme && (
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold">Theme:</span> {tournament.theme}
                    </p>
                  )}

                  {tournament.contactInfo && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-start gap-2 text-xs text-muted-foreground">
                        <Phone className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{tournament.contactInfo}</span>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
