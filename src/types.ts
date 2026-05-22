export interface ImageAsset {
  id: string;
  name: string;
  localPath: string; // The user-specified filename in local folder
  fallbackUrl: string; // High-quality Unsplash image representing the exact scene
  description: string;
  category: "hero" | "experience" | "room" | "breakfast" | "gallery";
}

export interface Amenity {
  name: string;
  icon: string; // Lucide icon name
}

export interface Room {
  id: string;
  name: string;
  description: string;
  priceUSD: number; // For elegant price display
  priceZAR: number; // South African Rand / local Lesotho currency representation
  size: string;
  capacity: string;
  bedType: string;
  images: { localPath: string; fallbackUrl: string; description: string; label?: string }[];
  amenities: Amenity[];
}

export interface BreakfastItem {
  id: string;
  name: string;
  description: string;
  localPath: string;
  fallbackUrl: string;
  category: string;
}

export interface Booking {
  id: string;
  checkIn: string;
  checkOut: string;
  guestsCount: number;
  roomId: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests?: string;
  createdAt: string;
}
