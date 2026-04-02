export const site = {
  comedianName: "Jagrat Thirwani",
  tagline:
    "Standup comic from Indore — touring India with solo show Bhola-Bhala, crowd work, and the kind of stories that hit too close to home.",
  logoText: "JT",
  email: "jagrat2011@gmail.com",
  instagram: "https://www.instagram.com/jagratthirwani/",
  youtubeChannel: "https://www.youtube.com/@jagratthirwani.comedy",
  featuredVideoId: "EKXW2GrbL6Y",
  seoTitle: "Jagrat Thirwani | Standup Comedian — Indore, Bhola-Bhala Tour & Bookings",
  seoDescription:
    "Book standup comedian Jagrat Thirwani from Indore. Solo show Bhola-Bhala touring across India. Corporate, college & live shows — watch on YouTube and get in touch for bookings.",
};

export type VideoItem = {
  id: string;
  title: string;
  category: "live" | "crowd" | "clips";
  thumbnail: string;
  thumbnailAlt?: string;
  views: string;
  /** Opens watch URL when set */
  youtubeId?: string;
  /** Opens channel or any URL (overrides youtubeId) */
  externalUrl?: string;
};

const imgCoverWide = "/images/hero-cover-wide.png";
const imgStage = "/images/performing-stage.png";

export const heroCover = {
  src: imgCoverWide,
  alt: "Jagrat Thirwani on stage at a large outdoor night show, facing the audience",
};

export const videos: VideoItem[] = [
  {
    id: "1",
    title: "Featured stand-up — watch full set",
    category: "live",
    thumbnail: imgCoverWide,
    thumbnailAlt: "Jagrat Thirwani performing for a large outdoor crowd at night",
    views: "On YouTube",
    youtubeId: site.featuredVideoId,
  },
  {
    id: "2",
    title: "More sets & specials on the channel",
    category: "live",
    thumbnail: imgStage,
    thumbnailAlt: "Jagrat Thirwani performing on stage with microphone",
    views: "Subscribe for new drops",
    externalUrl: site.youtubeChannel,
  },
  {
    id: "3",
    title: "Shorts & crowd-work clips",
    category: "clips",
    thumbnail: imgStage,
    thumbnailAlt: "Jagrat Thirwani mid-performance on stage",
    views: "Fresh clips regularly",
    externalUrl: site.youtubeChannel,
  },
  {
    id: "4",
    title: "Bhola-Bhala tour & live updates",
    category: "live",
    thumbnail: imgCoverWide,
    thumbnailAlt: "Headline-scale outdoor comedy show from the stage",
    views: "Tour across India",
    externalUrl: site.youtubeChannel,
  },
];

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  aspect: "tall" | "wide" | "square";
};

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: imgStage,
    alt: "Jagrat Thirwani on stage with microphone under dramatic lighting",
    aspect: "tall",
  },
  {
    id: "g2",
    src: imgCoverWide,
    alt: "Outdoor night headline show: view from stage over a packed audience",
    aspect: "wide",
  },
  {
    id: "g3",
    src: imgStage,
    alt: "Live stand-up performance moment",
    aspect: "square",
  },
  {
    id: "g4",
    src: imgCoverWide,
    alt: "Large-scale comedy performance in front of thousands at night",
    aspect: "tall",
  },
  {
    id: "g5",
    src: imgCoverWide,
    alt: "Festival-scale crowd from the performer’s perspective",
    aspect: "wide",
  },
  {
    id: "g6",
    src: imgStage,
    alt: "Jagrat Thirwani mid-set with expressive gesture",
    aspect: "square",
  },
];

export type WorkItem = {
  id: string;
  title: string;
  description: string;
  stats: string;
  image: string;
  imageAlt: string;
};

export const workItems: WorkItem[] = [
  {
    id: "w1",
    title: "Bhola-Bhala — solo show",
    description:
      "Solo hour touring across India — stories, punchlines, and room energy built for big rooms and intimate clubs alike.",
    stats: "All-India tour • flagship set",
    image: imgCoverWide,
    imageAlt: "Jagrat Thirwani headlining an outdoor night show to a massive crowd",
  },
  {
    id: "w2",
    title: "City hops & club sets",
    description:
      "Performed across multiple cities — from club rooms to festivals — bringing Indore-bred observational comedy wherever the mic is hot.",
    stats: "Multi-city • 200+ shows energy",
    image: imgStage,
    imageAlt: "Jagrat Thirwani performing a polished club set on stage",
  },
  {
    id: "w3",
    title: "YouTube & digital",
    description:
      "Full sets and shorts on YouTube so new fans can binge before the lights go down at your event.",
    stats: "Growing channel • new uploads",
    image: imgStage,
    imageAlt: "On-camera stand-up presence for digital audiences",
  },
  {
    id: "w4",
    title: "Bookings & collabs",
    description:
      "Corporate gigs, college fests, private events, and brand moments — clean reads, loud laughs, professional setup.",
    stats: "Bookings open",
    image: imgCoverWide,
    imageAlt: "Professional headline presence for events and collaborations",
  },
];

export type ShowItem = {
  id: string;
  date: string;
  city: string;
  venue: string;
  ticketUrl?: string;
  featured?: boolean;
  sellingFast?: boolean;
};

/** Replace with real tour dates as Bhola-Bhala dates are announced */
export const upcomingShows: ShowItem[] = [
  {
    id: "s1",
    date: "2026-04-12",
    city: "Indore",
    venue: "Tour date — venue TBA",
    ticketUrl: site.youtubeChannel,
    featured: true,
    sellingFast: true,
  },
  {
    id: "s2",
    date: "2026-04-26",
    city: "Mumbai",
    venue: "Bhola-Bhala — details soon",
    ticketUrl: site.youtubeChannel,
  },
  {
    id: "s3",
    date: "2026-05-03",
    city: "Delhi NCR",
    venue: "Tour stop — TBA",
    ticketUrl: site.youtubeChannel,
  },
  {
    id: "s4",
    date: "2026-05-18",
    city: "Bengaluru",
    venue: "Tour stop — TBA",
  },
];

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "One of the funniest performers we have hosted. The crowd was engaged from the first minute, and the material felt fresh and professional.",
    author: "Priya Nair",
    role: "Event Director, TechSummit India",
  },
  {
    id: "t2",
    quote:
      "Perfect balance of humor for a mixed-age corporate audience. We have already booked again for next quarter.",
    author: "Rahul Mehta",
    role: "HR Lead, Series B Startup",
  },
  {
    id: "t3",
    quote:
      "Students loved the crowd work. Jagrat read the room beautifully and kept energy high through the whole fest.",
    author: "Ananya Kulkarni",
    role: "Cultural Secretary, College Fest",
  },
];

export const about = {
  headline: "About Jagrat",
  paragraphs: [
    "Welcome — I’m Jagrat Thirwani, a stand-up comic from Indore. I started this journey to put my sets and funny shorts out into the world, and to connect with audiences who like comedy that feels honest and a little too relatable.",
    "I’ve performed in various cities, and my solo show Bhola-Bhala is set to tour across India. Whether it’s a big room or a tight club, I love the energy when the crowd is in on the joke. Baaki subscribe kar lo — maza aayega. For show bookings and inquiries, drop a line anytime.",
  ],
  highlights: [
    "From Indore — performing nationwide",
    "Solo show: Bhola-Bhala (India tour)",
    "YouTube: sets, shorts & crowd favourites",
  ],
};

export const aboutImages = {
  primary: imgStage,
  primaryAlt:
    "Jagrat Thirwani on stage with microphone under stage lighting",
};
