import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, DollarSign, Trophy, Phone, Sparkles } from "lucide-react";
import type { Tournament } from "@/data/content";

interface TournamentsProps {
  tournaments: Tournament[];
}

export function Tournaments({ tournaments }: TournamentsProps) {
  return (
    <section id="tournaments" className="py-24 bg-[#FAFAFA] dark:bg-muted/30 relative overflow-hidden" data-testid="section-tournaments">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2E7D32] via-[#FFB300] to-[#1976D2]" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FFB300]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFB300]/10 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB300]" />
            <span className="font-heading font-semibold text-xs uppercase tracking-widest text-[#FFB300]" data-testid="text-tournaments-label">
              Upcoming Events
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-5" data-testid="text-tournaments-title">
            Tournaments & Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Stay informed about upcoming tournaments and community events. Don't miss out!
          </p>
        </div>

        {tournaments.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-5">
              <Trophy className="w-10 h-10 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground text-lg font-medium">No upcoming tournaments at the moment.</p>
            <p className="text-sm text-muted-foreground mt-2">Check back soon for new events!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {tournaments.map((tournament, index) => (
              <Card
                key={tournament.id}
                className={`overflow-hidden border-card-border bg-white dark:bg-card rounded-2xl group hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 hover:-translate-y-1 ${
                  index === 0 ? "ring-2 ring-[#2E7D32]/20" : ""
                }`}
                data-testid={`card-tournament-${tournament.id}`}
              >
                {tournament.imageUrl && (
                  <div className="relative overflow-hidden">
                    <img
                      src={tournament.imageUrl}
                      alt={tournament.title}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                      data-testid={`img-tournament-${tournament.id}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#2E7D32] text-white border-none px-3 py-1 text-xs font-semibold shadow-lg shadow-[#2E7D32]/30 rounded-lg">
                        Upcoming
                      </Badge>
                    </div>
                    {tournament.theme && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/90 backdrop-blur-sm text-[#212121] border-none px-3 py-1 text-xs font-medium rounded-lg">
                          {tournament.theme}
                        </Badge>
                      </div>
                    )}
                  </div>
                )}
                <div className="p-7">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3" data-testid={`text-tournament-title-${tournament.id}`}>
                    {tournament.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {tournament.description}
                  </p>

                  <div className="space-y-3 mb-5">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 rounded-lg bg-[#1976D2]/8 flex items-center justify-center shrink-0">
                        <Calendar className="w-4 h-4 text-[#1976D2]" />
                      </div>
                      <span className="text-foreground font-medium">{tournament.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 rounded-lg bg-[#1976D2]/8 flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4 text-[#1976D2]" />
                      </div>
                      <span className="text-foreground font-medium">{tournament.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 rounded-lg bg-[#2E7D32]/8 flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-[#2E7D32]" />
                      </div>
                      <span className="text-foreground font-medium">{tournament.location}</span>
                    </div>
                  </div>

                  {(tournament.playerFee || tournament.nonPlayerFee) && (
                    <div className="flex flex-wrap gap-3 mb-5">
                      {tournament.playerFee && (
                        <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2E7D32]/6 border border-[#2E7D32]/10">
                          <DollarSign className="w-4 h-4 text-[#2E7D32]" />
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-muted-foreground block leading-none mb-0.5">Players</span>
                            <span className="text-sm font-bold text-[#2E7D32]">{tournament.playerFee}</span>
                          </div>
                        </div>
                      )}
                      {tournament.nonPlayerFee && (
                        <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FFB300]/6 border border-[#FFB300]/10">
                          <DollarSign className="w-4 h-4 text-[#FFB300]" />
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-muted-foreground block leading-none mb-0.5">Non-Players</span>
                            <span className="text-sm font-bold text-[#FFB300]">{tournament.nonPlayerFee}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {tournament.contactInfo && (
                    <div className="pt-5 border-t border-border">
                      <div className="flex items-start gap-3 text-sm">
                        <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0 mt-0.5">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Contact</span>
                          <span className="text-foreground leading-relaxed">{tournament.contactInfo}</span>
                        </div>
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
