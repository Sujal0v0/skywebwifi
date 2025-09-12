import type { Metadata } from "next";

type PagePath =
  | "/"
  | "/about"
  | "/rates"
  | "/cancellation"
  | "/rules"
  | "/amenities"
  | "/accommodations"
  | "/events"
  | "/resort-map"
  | "/special"
  | "/gallery"
  | "/gallery/sites"
  | "/gallery/activities"
  | "/gallery/amenities"
  | "/reservations";

type PageMetadata = {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
};

export function generateMetadata(pathname: PagePath): Metadata {
  const baseUrl = "https://pineridgervresort.com"; // Update with your actual domain
  const canonicalUrl = `${baseUrl}${pathname}`;
  const siteName = "Pine Ridge RV Resort";
  const tagline = "Premium RV Camping in Northern California";

  const metadataMap: Record<PagePath, PageMetadata> = {
    "/": {
      title: "Pine Ridge RV Resort | Premium RV Camping in Northern California",
      description:
        "Experience luxury RV camping at Pine Ridge RV Resort. 200+ premium sites, modern amenities, pristine wilderness setting. Perfect for families and nature lovers since 1985.",
      keywords: [
        "RV resort California",
        "RV camping Northern California",
        "luxury RV park",
        "family RV resort",
        "Pine Ridge RV Resort",
        "RV sites California",
        "mountain RV camping",
        "premium RV park",
        "RV vacation California",
        "full hookup RV sites",
      ],
      image: "/assets/hero-campground.jpg",
    },
    "/about": {
      title: "About Pine Ridge RV Resort | Our Story & Mission",
      description:
        "Discover Pine Ridge RV Resort's 38+ year legacy of excellence. Family-owned since 1985, offering premium RV camping experiences in 300 acres of pristine Northern California wilderness.",
      keywords: [
        "Pine Ridge RV Resort history",
        "family owned RV park",
        "California RV resort about",
        "RV camping since 1985",
        "Northern California RV park",
        "award winning RV resort",
        "eco-friendly RV camping",
        "Morrison family RV resort",
      ],
      image: "/assets/hero-campground.jpg",
    },
    "/rates": {
      title: "RV Site Rates & Pricing | Pine Ridge RV Resort",
      description:
        "View current rates and pricing for RV sites at Pine Ridge RV Resort. Competitive pricing for premium sites with full hookups, amenities, and mountain views.",
      keywords: [
        "RV site rates California",
        "RV camping prices",
        "Pine Ridge rates",
        "RV park pricing",
        "California RV site costs",
        "RV resort rates",
        "monthly RV rates",
        "seasonal RV pricing",
      ],
      image: "/assets/hero-campground.jpg",
    },
    "/cancellation": {
      title: "Cancellation Policy | Pine Ridge RV Resort",
      description:
        "Review our flexible cancellation policy for RV site reservations. Clear terms and conditions for booking changes and refunds at Pine Ridge RV Resort.",
      keywords: [
        "RV reservation cancellation",
        "Pine Ridge cancellation policy",
        "RV booking refund",
        "reservation terms",
        "RV park policy",
      ],
      image: "/assets/hero-campground.jpg",
    },
    "/rules": {
      title: "Campground Rules & Policies | Pine Ridge RV Resort",
      description:
        "Essential campground rules and policies for a safe, enjoyable stay. Pet policies, quiet hours, check-in procedures, and safety guidelines at Pine Ridge RV Resort.",
      keywords: [
        "RV park rules",
        "campground policies",
        "Pine Ridge rules",
        "RV camping guidelines",
        "pet policy RV park",
        "quiet hours campground",
        "RV safety rules",
      ],
      image: "/assets/hero-campground.jpg",
    },
    "/amenities": {
      title: "Resort Amenities & Facilities | Pine Ridge RV Resort",
      description:
        "Explore our premium amenities including swimming pool, fitness center, recreation hall, laundry facilities, and more. Everything you need for comfortable RV camping.",
      keywords: [
        "RV resort amenities",
        "RV park facilities",
        "Pine Ridge amenities",
        "swimming pool RV park",
        "RV resort activities",
        "campground facilities",
        "recreation amenities",
        "laundry facilities RV park",
      ],
      image: "/assets/amenities.jpg",
    },
    "/accommodations": {
      title: "RV Sites & Accommodations | Pine Ridge RV Resort",
      description:
        "Choose from 200+ premium RV sites with full hookups, pull-through and back-in options. Spacious sites with mountain views and modern utilities.",
      keywords: [
        "RV sites California",
        "full hookup RV sites",
        "pull through RV sites",
        "big rig RV sites",
        "spacious RV lots",
        "premium RV accommodations",
        "RV site types",
        "mountain view RV sites",
      ],
      image: "/assets/hero-campground.jpg",
    },
    "/events": {
      title: "Events & Activities | Pine Ridge RV Resort",
      description:
        "Join our exciting calendar of events and activities. From seasonal celebrations to outdoor adventures, there's always something happening at Pine Ridge RV Resort.",
      keywords: [
        "RV resort events",
        "campground activities",
        "Pine Ridge events",
        "RV park entertainment",
        "family activities camping",
        "seasonal events RV park",
        "outdoor activities",
        "community events camping",
      ],
      image: "/assets/recreation.jpg",
    },
    "/resort-map": {
      title: "Resort Map & Site Layout | Pine Ridge RV Resort",
      description:
        "Interactive resort map showing RV site locations, amenities, facilities, and points of interest. Plan your perfect stay at Pine Ridge RV Resort.",
      keywords: [
        "RV park map",
        "resort layout",
        "Pine Ridge map",
        "RV site map",
        "campground layout",
        "facility locations",
        "site planning RV park",
      ],
      image: "/assets/rv-map.png",
    },
    "/special": {
      title: "Special Offers & Discounts | Pine Ridge RV Resort",
      description:
        "Discover current special offers, discounts, and packages at Pine Ridge RV Resort. Save on extended stays, seasonal rates, and group bookings.",
      keywords: [
        "RV park discounts",
        "special offers camping",
        "Pine Ridge deals",
        "RV resort packages",
        "seasonal discounts",
        "extended stay rates",
        "group discounts RV park",
        "camping promotions",
      ],
      image: "/assets/hero-campground.jpg",
    },
    "/gallery": {
      title: "Photo Gallery | Pine Ridge RV Resort",
      description:
        "Browse our photo gallery showcasing beautiful RV sites, amenities, activities, and the stunning natural setting of Pine Ridge RV Resort.",
      keywords: [
        "RV resort photos",
        "Pine Ridge gallery",
        "campground pictures",
        "RV park images",
        "California RV resort photos",
        "camping photos",
        "resort photography",
      ],
      image: "/assets/hero-campground.jpg",
    },
    "/gallery/sites": {
      title: "RV Sites Gallery | Pine Ridge RV Resort",
      description:
        "View photos of our premium RV sites featuring spacious lots, mountain views, and modern hookups. See why Pine Ridge offers the best RV camping experience.",
      keywords: [
        "RV site photos",
        "campsite pictures",
        "RV lot images",
        "site views Pine Ridge",
        "RV sites gallery",
        "camping site photos",
      ],
      image: "/assets/hero-campground.jpg",
    },
    "/gallery/activities": {
      title: "Activities Gallery | Pine Ridge RV Resort",
      description:
        "Explore photos of activities and recreation at Pine Ridge RV Resort. Hiking, fishing, swimming, and family fun in Northern California's beautiful wilderness.",
      keywords: [
        "RV resort activities photos",
        "camping activities",
        "outdoor recreation photos",
        "family fun camping",
        "hiking photos",
        "recreation gallery",
      ],
      image: "/assets/recreation.jpg",
    },
    "/gallery/amenities": {
      title: "Amenities Gallery | Pine Ridge RV Resort",
      description:
        "Tour our premium amenities through photos. Swimming pool, fitness center, recreation hall, playgrounds, and modern facilities at Pine Ridge RV Resort.",
      keywords: [
        "RV resort amenities photos",
        "facility pictures",
        "amenities gallery",
        "pool photos RV park",
        "recreation center photos",
        "campground facilities",
      ],
      image: "/assets/amenities.jpg",
    },
    "/reservations": {
      title: "Make a Reservation | Pine Ridge RV Resort",
      description:
        "Book your RV site at Pine Ridge RV Resort. Easy online reservations for premium RV camping in Northern California. Check availability and secure your dates.",
      keywords: [
        "RV reservations California",
        "book RV site",
        "Pine Ridge reservations",
        "RV camping booking",
        "reserve campsite",
        "RV park booking online",
        "California RV reservations",
      ],
      image: "/assets/hero-campground.jpg",
    },
  };

  const {
    title,
    description,
    keywords,
    image: rawImage,
  } = metadataMap[pathname] || {
    title: "Pine Ridge RV Resort | Premium RV Camping in Northern California",
    description:
      "Experience luxury RV camping at Pine Ridge RV Resort. Premium sites, modern amenities, pristine wilderness setting in Northern California.",
    image: "/assets/hero-campground.jpg",
  };

  const image = rawImage || "/assets/hero-campground.jpg";

  return {
    title: {
      default: title,
      template: `%s - ${siteName} | ${tagline}`,
    },
    description,
    keywords: keywords?.join(", "),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Pine Ridge RV Resort",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: image.startsWith("http") ? image : `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: `${title} - Pine Ridge RV Resort`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: image.startsWith("http") ? image : `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: `${title} - Pine Ridge RV Resort`,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    verification: {
      // Add your verification codes here when available
      // google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
    },
    category: "travel",
    classification: "business",
  };
}