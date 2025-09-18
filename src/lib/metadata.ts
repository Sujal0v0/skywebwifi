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
  const baseUrl = "https://skywebwifi.com"; // Update with your actual domain
  const canonicalUrl = `${baseUrl}${pathname}`;
  const siteName = "SkyWeb Networks";
  const tagline = "Commercial Wi-Fi Solutions That Work Guaranteed";

  const metadataMap: Record<PagePath, PageMetadata> = {
    "/": {
      title:
        "SkyWeb Networks | Commercial Wi-Fi Solutions That Work Guaranteed",
      description:
        "Professional Wi-Fi solutions for RV resorts, campgrounds, and commercial properties. Custom network design, 24/7 monitoring, and 30-day money-back guarantee. Wi-Fi that works guaranteed!",
      keywords: [
        "commercial Wi-Fi solutions",
        "RV resort Wi-Fi",
        "campground internet",
        "Wi-Fi installation",
        "custom Wi-Fi network",
        "managed Wi-Fi service",
        "Wi-Fi providers",
        "commercial internet solutions",
        "Wi-Fi that works",
        "guaranteed Wi-Fi service",
      ],
      image: "/assets/wifi-network.jpg",
    },
    "/about": {
      title: "About SkyWeb Networks | Wi-Fi Solution Experts",
      description:
        "Leading Wi-Fi solution provider with proven track record serving RV resorts, campgrounds, and commercial properties. Expert installation, custom network design, and unmatched support.",
      keywords: [
        "Wi-Fi solution provider",
        "commercial Wi-Fi experts",
        "network installation company",
        "Wi-Fi specialists",
        "SkyWeb Networks about",
        "professional Wi-Fi service",
        "Wi-Fi infrastructure experts",
        "managed Wi-Fi provider",
      ],
      image: "/assets/wifi-network.jpg",
    },
    "/rates": {
      title: "Wi-Fi Solution Pricing & Custom Quotes | SkyWeb Networks",
      description:
        "Get custom Wi-Fi solution quotes for properties of all sizes in 48 hours. Competitive pricing for commercial Wi-Fi installation with 30-day money-back guarantee.",
      keywords: [
        "Wi-Fi installation pricing",
        "commercial Wi-Fi cost",
        "Wi-Fi solution quotes",
        "custom Wi-Fi pricing",
        "RV resort Wi-Fi cost",
        "Wi-Fi service rates",
        "network installation pricing",
        "Wi-Fi equipment cost",
      ],
      image: "/assets/wifi-network.jpg",
    },
    "/cancellation": {
      title: "Service Terms & Cancellation Policy | SkyWeb Networks",
      description:
        "Review our service terms and cancellation policy for Wi-Fi solutions. Flexible terms with 30-day satisfaction guarantee for all commercial Wi-Fi installations.",
      keywords: [
        "Wi-Fi service cancellation",
        "SkyWeb cancellation policy",
        "Wi-Fi contract terms",
        "service agreement Wi-Fi",
        "Wi-Fi installation terms",
      ],
      image: "/assets/wifi-network.jpg",
    },
    "/rules": {
      title: "Wi-Fi Service Guidelines & Policies | SkyWeb Networks",
      description:
        "Essential service guidelines and policies for SkyWeb Networks Wi-Fi solutions. Network usage policies, maintenance procedures, and support guidelines.",
      keywords: [
        "Wi-Fi service policies",
        "network usage guidelines",
        "Wi-Fi maintenance rules",
        "commercial Wi-Fi policies",
        "network service rules",
        "Wi-Fi usage terms",
        "internet service guidelines",
      ],
      image: "/assets/wifi-network.jpg",
    },
    "/amenities": {
      title: "Wi-Fi Features & Service Amenities | SkyWeb Networks",
      description:
        "Comprehensive Wi-Fi solution features including 24/7 cloud monitoring, custom splash pages, streaming capability, phone alerts, and managed service options.",
      keywords: [
        "Wi-Fi solution features",
        "managed Wi-Fi service",
        "Wi-Fi monitoring service",
        "custom Wi-Fi portal",
        "commercial Wi-Fi features",
        "Wi-Fi splash pages",
        "streaming Wi-Fi service",
        "Wi-Fi management tools",
      ],
      image: "/assets/wifi-features.jpg",
    },
    "/accommodations": {
      title: "Commercial Wi-Fi Solutions & Network Types | SkyWeb Networks",
      description:
        "Custom Wi-Fi networks designed for RV resorts, campgrounds, hotels, and commercial properties. Scalable solutions with guaranteed coverage throughout your property.",
      keywords: [
        "RV resort Wi-Fi solutions",
        "campground internet service",
        "hotel Wi-Fi installation",
        "commercial Wi-Fi network",
        "custom Wi-Fi design",
        "property Wi-Fi coverage",
        "Wi-Fi network types",
        "commercial internet solutions",
      ],
      image: "/assets/wifi-network.jpg",
    },
    "/events": {
      title: "Wi-Fi for Events & Special Occasions | SkyWeb Networks",
      description:
        "Reliable Wi-Fi solutions for events and special occasions. High-capacity networks that maintain streaming capability even during busy holidays and peak usage.",
      keywords: [
        "event Wi-Fi solutions",
        "temporary Wi-Fi service",
        "holiday Wi-Fi capacity",
        "high-traffic Wi-Fi",
        "event internet service",
        "peak usage Wi-Fi",
        "streaming Wi-Fi events",
        "special occasion Wi-Fi",
      ],
      image: "/assets/event-wifi.jpg",
    },
    "/resort-map": {
      title: "Wi-Fi Coverage Map & Network Layout | SkyWeb Networks",
      description:
        "Interactive network coverage maps showing Wi-Fi access points, signal strength, and coverage areas. Custom network design ensures complete property coverage.",
      keywords: [
        "Wi-Fi coverage map",
        "network layout design",
        "Wi-Fi signal map",
        "access point locations",
        "network coverage planning",
        "Wi-Fi site survey",
        "signal strength mapping",
      ],
      image: "/assets/wifi-coverage-map.png",
    },
    "/special": {
      title: "Special Wi-Fi Offers & Promotions | SkyWeb Networks",
      description:
        "Current special offers on commercial Wi-Fi installations. 30-day money-back guarantee and custom quotes available. Revenue-generating Wi-Fi solutions.",
      keywords: [
        "Wi-Fi installation deals",
        "commercial Wi-Fi offers",
        "Wi-Fi service promotions",
        "network installation discounts",
        "Wi-Fi solution packages",
        "money-back guarantee Wi-Fi",
        "special Wi-Fi pricing",
        "Wi-Fi service deals",
      ],
      image: "/assets/wifi-network.jpg",
    },
    "/gallery": {
      title: "Wi-Fi Installation Gallery | SkyWeb Networks",
      description:
        "Browse our portfolio of successful Wi-Fi installations at RV resorts, campgrounds, and commercial properties. See our professional network solutions in action.",
      keywords: [
        "Wi-Fi installation photos",
        "network installation gallery",
        "Wi-Fi project portfolio",
        "commercial Wi-Fi images",
        "RV resort Wi-Fi photos",
        "campground Wi-Fi gallery",
        "network equipment photos",
      ],
      image: "/assets/wifi-network.jpg",
    },
    "/gallery/sites": {
      title: "Installation Sites Gallery | SkyWeb Networks",
      description:
        "View photos of our Wi-Fi installations across various property types. From RV resorts to commercial facilities, see our custom network solutions.",
      keywords: [
        "Wi-Fi installation sites",
        "network installation photos",
        "Wi-Fi project sites",
        "commercial Wi-Fi installations",
        "RV park Wi-Fi photos",
        "installation site gallery",
      ],
      image: "/assets/wifi-network.jpg",
    },
    "/gallery/activities": {
      title: "Wi-Fi Service Activities Gallery | SkyWeb Networks",
      description:
        "Explore photos of our Wi-Fi installation process, training sessions, and ongoing support activities. Professional service from start to finish.",
      keywords: [
        "Wi-Fi installation process",
        "network setup photos",
        "Wi-Fi training sessions",
        "installation activities",
        "Wi-Fi service process",
        "network maintenance photos",
      ],
      image: "/assets/wifi-service.jpg",
    },
    "/gallery/amenities": {
      title: "Wi-Fi Equipment & Technology Gallery | SkyWeb Networks",
      description:
        "Tour our professional Wi-Fi equipment and technology solutions. Access points, gateways, monitoring systems, and custom network infrastructure.",
      keywords: [
        "Wi-Fi equipment photos",
        "network technology gallery",
        "Wi-Fi hardware images",
        "access point photos",
        "network equipment gallery",
        "Wi-Fi infrastructure photos",
      ],
      image: "/assets/wifi-equipment.jpg",
    },
    "/reservations": {
      title: "Get Your Wi-Fi Quote | SkyWeb Networks",
      description:
        "Request your custom Wi-Fi solution quote today. Professional consultation, site analysis, and custom network design for properties of all sizes.",
      keywords: [
        "Wi-Fi solution quote",
        "commercial Wi-Fi consultation",
        "network design quote",
        "Wi-Fi installation estimate",
        "custom Wi-Fi proposal",
        "Wi-Fi service booking",
        "network consultation",
      ],
      image: "/assets/wifi-network.jpg",
    },
  };

  const {
    title,
    description,
    keywords,
    image: rawImage,
  } = metadataMap[pathname] || {
    title: "SkyWeb Networks | Commercial Wi-Fi Solutions That Work Guaranteed",
    description:
      "Professional Wi-Fi solutions for RV resorts, campgrounds, and commercial properties. Custom network design, 24/7 monitoring, and guaranteed satisfaction.",
    image: "/assets/wifi-network.jpg",
  };

  const image = rawImage || "/assets/wifi-network.jpg";

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
      siteName: "SkyWeb Networks",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: image.startsWith("http") ? image : `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: `${title} - SkyWeb Networks`,
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
          alt: `${title} - SkyWeb Networks`,
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
    category: "technology",
    classification: "business",
  };
}
