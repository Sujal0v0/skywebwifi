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
  const tagline = "Commercial WiFi Solutions That Work Guaranteed";

  const metadataMap: Record<PagePath, PageMetadata> = {
    "/": {
      title: "SkyWeb Networks | Commercial WiFi Solutions That Work Guaranteed",
      description:
        "Professional WiFi solutions for RV resorts, campgrounds, and commercial properties. Custom network design, 24/7 monitoring, and 30-day money-back guarantee. WiFi that works guaranteed!",
      keywords: [
        "commercial WiFi solutions",
        "RV resort WiFi",
        "campground internet",
        "WiFi installation",
        "custom WiFi network",
        "managed WiFi service",
        "WiFi providers",
        "commercial internet solutions",
        "WiFi that works",
        "guaranteed WiFi service",
      ],
      image: "/assets/wifi-network.jpg",
    },
    "/about": {
      title: "About SkyWeb Networks | WiFi Solution Experts",
      description:
        "Leading WiFi solution provider with proven track record serving RV resorts, campgrounds, and commercial properties. Expert installation, custom network design, and unmatched support.",
      keywords: [
        "WiFi solution provider",
        "commercial WiFi experts",
        "network installation company",
        "WiFi specialists",
        "SkyWeb Networks about",
        "professional WiFi service",
        "WiFi infrastructure experts",
        "managed WiFi provider",
      ],
      image: "/assets/wifi-network.jpg",
    },
    "/rates": {
      title: "WiFi Solution Pricing & Custom Quotes | SkyWeb Networks",
      description:
        "Get custom WiFi solution quotes for properties of all sizes in 48 hours. Competitive pricing for commercial WiFi installation with 30-day money-back guarantee.",
      keywords: [
        "WiFi installation pricing",
        "commercial WiFi cost",
        "WiFi solution quotes",
        "custom WiFi pricing",
        "RV resort WiFi cost",
        "WiFi service rates",
        "network installation pricing",
        "WiFi equipment cost",
      ],
      image: "/assets/wifi-network.jpg",
    },
    "/cancellation": {
      title: "Service Terms & Cancellation Policy | SkyWeb Networks",
      description:
        "Review our service terms and cancellation policy for WiFi solutions. Flexible terms with 30-day satisfaction guarantee for all commercial WiFi installations.",
      keywords: [
        "WiFi service cancellation",
        "SkyWeb cancellation policy",
        "WiFi contract terms",
        "service agreement WiFi",
        "WiFi installation terms",
      ],
      image: "/assets/wifi-network.jpg",
    },
    "/rules": {
      title: "WiFi Service Guidelines & Policies | SkyWeb Networks",
      description:
        "Essential service guidelines and policies for SkyWeb Networks WiFi solutions. Network usage policies, maintenance procedures, and support guidelines.",
      keywords: [
        "WiFi service policies",
        "network usage guidelines",
        "WiFi maintenance rules",
        "commercial WiFi policies",
        "network service rules",
        "WiFi usage terms",
        "internet service guidelines",
      ],
      image: "/assets/wifi-network.jpg",
    },
    "/amenities": {
      title: "WiFi Features & Service Amenities | SkyWeb Networks",
      description:
        "Comprehensive WiFi solution features including 24/7 cloud monitoring, custom splash pages, streaming capability, phone alerts, and managed service options.",
      keywords: [
        "WiFi solution features",
        "managed WiFi service",
        "WiFi monitoring service",
        "custom WiFi portal",
        "commercial WiFi features",
        "WiFi splash pages",
        "streaming WiFi service",
        "WiFi management tools",
      ],
      image: "/assets/wifi-features.jpg",
    },
    "/accommodations": {
      title: "Commercial WiFi Solutions & Network Types | SkyWeb Networks",
      description:
        "Custom WiFi networks designed for RV resorts, campgrounds, hotels, and commercial properties. Scalable solutions with guaranteed coverage throughout your property.",
      keywords: [
        "RV resort WiFi solutions",
        "campground internet service",
        "hotel WiFi installation",
        "commercial WiFi network",
        "custom WiFi design",
        "property WiFi coverage",
        "WiFi network types",
        "commercial internet solutions",
      ],
      image: "/assets/wifi-network.jpg",
    },
    "/events": {
      title: "WiFi for Events & Special Occasions | SkyWeb Networks",
      description:
        "Reliable WiFi solutions for events and special occasions. High-capacity networks that maintain streaming capability even during busy holidays and peak usage.",
      keywords: [
        "event WiFi solutions",
        "temporary WiFi service",
        "holiday WiFi capacity",
        "high-traffic WiFi",
        "event internet service",
        "peak usage WiFi",
        "streaming WiFi events",
        "special occasion WiFi",
      ],
      image: "/assets/event-wifi.jpg",
    },
    "/resort-map": {
      title: "WiFi Coverage Map & Network Layout | SkyWeb Networks",
      description:
        "Interactive network coverage maps showing WiFi access points, signal strength, and coverage areas. Custom network design ensures complete property coverage.",
      keywords: [
        "WiFi coverage map",
        "network layout design",
        "WiFi signal map",
        "access point locations",
        "network coverage planning",
        "WiFi site survey",
        "signal strength mapping",
      ],
      image: "/assets/wifi-coverage-map.png",
    },
    "/special": {
      title: "Special WiFi Offers & Promotions | SkyWeb Networks",
      description:
        "Current special offers on commercial WiFi installations. 30-day money-back guarantee and custom quotes available. Revenue-generating WiFi solutions.",
      keywords: [
        "WiFi installation deals",
        "commercial WiFi offers",
        "WiFi service promotions",
        "network installation discounts",
        "WiFi solution packages",
        "money-back guarantee WiFi",
        "special WiFi pricing",
        "WiFi service deals",
      ],
      image: "/assets/wifi-network.jpg",
    },
    "/gallery": {
      title: "WiFi Installation Gallery | SkyWeb Networks",
      description:
        "Browse our portfolio of successful WiFi installations at RV resorts, campgrounds, and commercial properties. See our professional network solutions in action.",
      keywords: [
        "WiFi installation photos",
        "network installation gallery",
        "WiFi project portfolio",
        "commercial WiFi images",
        "RV resort WiFi photos",
        "campground WiFi gallery",
        "network equipment photos",
      ],
      image: "/assets/wifi-network.jpg",
    },
    "/gallery/sites": {
      title: "Installation Sites Gallery | SkyWeb Networks",
      description:
        "View photos of our WiFi installations across various property types. From RV resorts to commercial facilities, see our custom network solutions.",
      keywords: [
        "WiFi installation sites",
        "network installation photos",
        "WiFi project sites",
        "commercial WiFi installations",
        "RV park WiFi photos",
        "installation site gallery",
      ],
      image: "/assets/wifi-network.jpg",
    },
    "/gallery/activities": {
      title: "WiFi Service Activities Gallery | SkyWeb Networks",
      description:
        "Explore photos of our WiFi installation process, training sessions, and ongoing support activities. Professional service from start to finish.",
      keywords: [
        "WiFi installation process",
        "network setup photos",
        "WiFi training sessions",
        "installation activities",
        "WiFi service process",
        "network maintenance photos",
      ],
      image: "/assets/wifi-service.jpg",
    },
    "/gallery/amenities": {
      title: "WiFi Equipment & Technology Gallery | SkyWeb Networks",
      description:
        "Tour our professional WiFi equipment and technology solutions. Access points, gateways, monitoring systems, and custom network infrastructure.",
      keywords: [
        "WiFi equipment photos",
        "network technology gallery",
        "WiFi hardware images",
        "access point photos",
        "network equipment gallery",
        "WiFi infrastructure photos",
      ],
      image: "/assets/wifi-equipment.jpg",
    },
    "/reservations": {
      title: "Get Your WiFi Quote | SkyWeb Networks",
      description:
        "Request your custom WiFi solution quote today. Professional consultation, site analysis, and custom network design for properties of all sizes.",
      keywords: [
        "WiFi solution quote",
        "commercial WiFi consultation",
        "network design quote",
        "WiFi installation estimate",
        "custom WiFi proposal",
        "WiFi service booking",
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
    title: "SkyWeb Networks | Commercial WiFi Solutions That Work Guaranteed",
    description:
      "Professional WiFi solutions for RV resorts, campgrounds, and commercial properties. Custom network design, 24/7 monitoring, and guaranteed satisfaction.",
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
