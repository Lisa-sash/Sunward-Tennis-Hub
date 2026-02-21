import { db } from "./db";
import { tournaments, galleryImages } from "@shared/schema";
import { sql } from "drizzle-orm";

export async function seedDatabase() {
  const existingTournaments = await db.select().from(tournaments);
  if (existingTournaments.length > 0) return;

  await db.insert(tournaments).values([
    {
      title: "Tennis Doubles Event 2026",
      description: "Join us for an exciting doubles tournament hosted by Isolihle VRTD Alberton! Theme is Maroon & White. Breakfast and lunch included. Confirmation/payment deadline: 25 February 2026 at 23:59.",
      date: "28 February 2026",
      time: "08:00 - Till Late",
      location: "Ellis Park",
      theme: "Maroon & White",
      playerFee: "R250",
      nonPlayerFee: "R200",
      contactInfo: "Nimrod @ 0716703092 | Mbengeni @ 0797371333",
      imageUrl: "/images/doubles-event.jpeg",
      isUpcoming: true,
    },
    {
      title: "Sunward Park Social Day",
      description: "A fun social tennis day for all members and newcomers. Come meet the community, play some casual matches, and enjoy the afternoon. Refreshments will be provided.",
      date: "15 March 2026",
      time: "09:00 - 14:00",
      location: "Sunward Park Tennis Courts",
      theme: null,
      playerFee: "Free",
      nonPlayerFee: "Free",
      contactInfo: "Join us at the courts - everyone welcome!",
      imageUrl: null,
      isUpcoming: true,
    },
  ]);

  await db.insert(galleryImages).values([
    {
      imageUrl: "/images/group-photo-1.jpeg",
      caption: "Our amazing tennis community at Sunward Park",
      eventName: "Saturday Social Session",
    },
    {
      imageUrl: "/images/group-photo-2.jpeg",
      caption: "Fun on the court with friends",
      eventName: "Weekend Meetup",
    },
    {
      imageUrl: "/images/rackets.jpeg",
      caption: "Rackets ready for action",
      eventName: "Practice Session",
    },
  ]);

  console.log("Database seeded successfully");
}
