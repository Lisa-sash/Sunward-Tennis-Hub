export interface Tournament {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  theme: string | null;
  playerFee: string | null;
  nonPlayerFee: string | null;
  contactInfo: string | null;
  imageUrl: string | null;
  isUpcoming: boolean | null;
}

export interface GalleryImage {
  id: number;
  imageUrl: string;
  caption: string | null;
  eventName: string | null;
}
