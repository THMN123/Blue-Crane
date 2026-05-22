import { Room, BreakfastItem, ImageAsset } from "./types";

// Premium high-fidelity local assets mapping from user's Images folder with robust high-res Unsplash fallbacks
export const imageAssets: ImageAsset[] = [
  {
    id: "grounds-hero",
    name: "Immaculate Dining Hall & Servery",
    localPath: "/Images/406227542.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1600",
    description: "Our pristine kitchen workspace and symmetric dining spaces, curated with top-tier hygiene guidelines.",
    category: "hero"
  },
  {
    id: "grounds-exterior",
    name: "Grounds & Facade",
    localPath: "/Images/410755330.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&q=80&w=1600",
    description: "The big beautiful front view of our brick guest house showing green grass lawns and neat paving under the brilliant blue Lesotho sky.",
    category: "gallery"
  },
  {
    id: "security-gate",
    name: "Secure Gated Parking Access",
    localPath: "/Images/410755347.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=1600",
    description: "The secure on-site private parking featuring clean, modern paved driveways and fully-monitored security gate system.",
    category: "experience"
  },
  {
    id: "main-bedroom",
    name: "Comfort Bedroom Master Space",
    localPath: "/Images/410755299.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1600",
    description: "Comfortable room setup, showcasing a neat queen bed with crisp white linens, high-quality spacious closet wardrobes, and flat-panel TV.",
    category: "room"
  },
  {
    id: "study-desk",
    name: "Cozy Study Desk Corner",
    localPath: "/Images/410755280.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1600",
    description: "A private cozy study workspace corner inside the executive suite, perfect for guests on academic or business stays.",
    category: "room"
  },
  {
    id: "coffee-station",
    name: "In-Suite Hot Beverage Unit",
    localPath: "/Images/410755288.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1600",
    description: "Elegant personal coffee-making corner supplied daily with gourmet beverages, mugs, and brewing kettle.",
    category: "room"
  },
  {
    id: "private-bathroom",
    name: "Polished En-Suite Shower Bathroom",
    localPath: "/Images/410755339.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1600",
    description: "Luminous, highly hygienic en-suite bathroom displaying custom glass washroom panel and modern premium fixtures.",
    category: "room"
  },
  {
    id: "serving-counter",
    name: "Spotless Buffet Display Counter",
    localPath: "/Images/42074815.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1600",
    description: "Immaculate steel service surfaces where hot morning meals and fresh pastries are kept covered and organized.",
    category: "breakfast"
  },
  {
    id: "kitchen-prep",
    name: "Spotless Kitchen Preparation Counter",
    localPath: "/Images/42074821.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=1600",
    description: "Highly polished steel countertops and preparation surfaces proving complete hygienic care in our catering areas.",
    category: "breakfast"
  },
  {
    id: "serving-neat",
    name: "Spotless Display & Cleanliness",
    localPath: "/Images/42074823.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=1600",
    description: "Brilliant layout configurations of culinary counter-edges, verifying top-tier neatness.",
    category: "breakfast"
  },
  {
    id: "dining-ambient",
    name: "Warm Interior Light Settings",
    localPath: "/Images/42074824.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1600",
    description: "Clean banquet dining spaces lit warmly for comfortable companion breakfast meals.",
    category: "breakfast"
  },
  {
    id: "dining-setting",
    name: "Spacious Sitting Arrangement",
    localPath: "/Images/42074834.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1600",
    description: "Exquisite breakfast hall setup with solid desks and contemporary seats for our clients.",
    category: "breakfast"
  },
  {
    id: "neat-display",
    name: "Neat Cupboard Display Layout",
    localPath: "/Images/406228942.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1600",
    description: "Clean modern storage displaying beautifully aligned glass and dining cups emphasizing absolute care.",
    category: "gallery"
  },
  {
    id: "dining-overview",
    name: "Symmetric Serving Tables Area",
    localPath: "/Images/42074842.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1600",
    description: "Beautiful clean geometric layout of contemporary dining furniture and seating for guests.",
    category: "gallery"
  }
];

export const guestHouseRooms: Room[] = [
  {
    id: "executive-queen",
    name: "Executive Queen Heritage Suite",
    description: "Comfortable accommodations in Maseru featuring a dedicated work desk, TV, and free Wi-Fi. Features pristine private bathrooms, a private coffee station, and breathtaking garden or mountain views with elegant sandstone and solid wood detail finishes.",
    priceUSD: 85,
    priceZAR: 1550,
    size: "32 m²",
    capacity: "2 Guests / Couples",
    bedType: "1 Queen Size Bed",
    images: [
      {
        localPath: "/Images/410755299.jpg",
        fallbackUrl: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200",
        description: "The main Queen bedroom area, showing elegant furnishings, high ceiling, and fine linen.",
        label: "Bed Chamber"
      },
      {
        localPath: "/Images/410755280.jpg",
        fallbackUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200",
        description: "Cozy interior writing study desk and workspace for corporate or learning productivity.",
        label: "Study Desk"
      },
      {
        localPath: "/Images/410755288.jpg",
        fallbackUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1200",
        description: "Private beverage corner loaded with fresh coffee/tea and hot brewer kettle.",
        label: "Coffee Station"
      },
      {
        localPath: "/Images/410755339.jpg",
        fallbackUrl: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1200",
        description: "Priscilla-clean private en-suite bathroom showing sparkling glass shower panels and premium brassware.",
        label: "En-Suite Shower"
      }
    ],
    amenities: [
      { name: "Free WiFi", icon: "Wifi" },
      { name: "Free Parking", icon: "ShieldCheck" },
      { name: "Non-Smoking Room", icon: "Ban" },
      { name: "Facilities for Disabled", icon: "UserCheck" },
      { name: "Room Service", icon: "Bell" },
      { name: "Satellite TV & Desk", icon: "Tv" }
    ]
  },
  {
    id: "deluxe-family-kitchenette",
    name: "Deluxe Family Suite with Kitchenette",
    description: "Perfect family rooms featuring private bathrooms, fully equipped private kitchenettes, and direct French-door access to our sun terrace or landscaped gardens with mountain views. Fully equipped with a private lounge workspace, flat-screen satellite TV, and free Wi-Fi.",
    priceUSD: 110,
    priceZAR: 1950,
    size: "45 m²",
    capacity: "Family / up to 4 Guests",
    bedType: "1 Queen Bed & 2 Sleeper Single Beds",
    images: [
      {
        localPath: "/Images/410755299.jpg",
        fallbackUrl: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200",
        description: "Luxury master family room suite with premium bed linen and garden view windows.",
        label: "Master Queen"
      },
      {
        localPath: "/Images/42074834.jpg",
        fallbackUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
        description: "Wide seating and dining arrangements for comfortable household companion dining.",
        label: "Lounge Sitting"
      },
      {
        localPath: "/Images/42074824.jpg",
        fallbackUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200",
        description: "Warm-lit kitchenette access and spotless service countertops.",
        label: "Kitchenette Layout"
      },
      {
        localPath: "/Images/410755339.jpg",
        fallbackUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
        description: "Sparkling glass shower bathroom layout emphasizing superior hygienic care.",
        label: "Family Bathroom"
      }
    ],
    amenities: [
      { name: "Free WiFi", icon: "Wifi" },
      { name: "Free Parking", icon: "ShieldCheck" },
      { name: "Equipped Kitchenette", icon: "Coffee" },
      { name: "Airport Shuttle Service", icon: "Bus" },
      { name: "Sun Terrace & Lounge", icon: "Sun" },
      { name: "Family Oriented Layout", icon: "Users" }
    ]
  }
];

export const breakfastMenu: BreakfastItem[] = [
  {
    id: "serving-counter",
    name: "Spotless Counter Showcase",
    description: "An incredibly spotless service region loaded with neat steel plating, presenting our premium indoor layout design.",
    localPath: "/Images/42074815.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1498307843058-0434999b1c3a?auto=format&fit=crop&q=80&w=1200",
    category: "Hygienic Setup"
  },
  {
    id: "gourmet-prep",
    name: "Top-Tier Kitchen Cleanliness",
    description: "Witness maximum hygiene inside our guesthouse kitchen. Stainless steel structures designed and maintained under elite hygiene standards.",
    localPath: "/Images/42074821.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200",
    category: "Clean Setup"
  },
  {
    id: "ambient-dining",
    name: "Incredibly Warm Lit Sitting",
    description: "Sit back and relax inside elegant spaces arranged brilliantly with neat solid tables and custom-designed indoor lighting.",
    localPath: "/Images/42074824.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
    category: "Dining Comfort"
  },
  {
    id: "glorious-breakfast-setup",
    name: "Professional High-End Displays",
    description: "Sparkling glass structures, beautifully aligned guesthouse kitchenwares, and perfectly positioned utensils illustrating true host attentiveness.",
    localPath: "/Images/42074842.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&q=80&w=1200",
    category: "Attentive Hospitality"
  }
];

export const businessDetails = {
  name: "Blue Crane Guest House",
  location: "Maseru, Lesotho (Southern Africa)",
  address: "Maseru, Lesotho",
  phone: "+266 5919 8236",
  whatsApp: "+266 5919 8236",
  whatsAppUrl: "https://wa.me/26659198236",
  email: "bookings@bluecraneguesthouse.com",
  coordinates: "29°18'36.0\"S 27°28'48.0\"E",
  workingHours: "Check-in: 14:00 - 21:00 | Check-out: 10:00",
  distances: {
    airport: "21 km from Moshoeshoe International Airport",
    museum: "41 km from Morija Museum",
    golf: "25 km from Ladybrand Golf Course"
  },
  ratings: {
    couples: "Couples particularly like the location — they rated it 9.3 for a two-person trip."
  },
  popularFacilities: [
    "Free WiFi",
    "Free parking",
    "Non-smoking rooms",
    "Airport shuttle",
    "Facilities for disabled guests",
    "Room service",
    "Family rooms"
  ],
  solarBanner: {
    title: "100% Solar-Powered Comfort",
    description: "At Blue Crane Guest House, we preserve the beauty of our environment. Our premium solar array feeds silent battery power banks to guarantee you uninterrupted electricity, warm water heating, and ultra-fast Wi-Fi — regardless of local load-shedding and municipal network outages."
  }
};
