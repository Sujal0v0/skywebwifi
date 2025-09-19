import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { DollarSign, Layout, Monitor, Wifi } from "lucide-react";
import CampgroundSection from "./campground/CampgroundSection";
import CTASection from "../sections/CTASection";

export default function CampgroundWifiSolutions() {
  const campgroundServices = [
    {
      icon: Wifi,
      title: "Coverage for Campsites, Cabins, Pools, and Rec Halls",
      description:
        "Reliable Wi-Fi coverage across your entire campground or RV park to keep guests connected everywhere.",
      details: [
        "Strong signal at campsites, cabins, pools, and rec halls",
        "Eliminate dead zones and guest Wi-Fi complaints",
        "Support high-density usage during peak seasons",
        "Scalable solutions for properties of all sizes",
      ],
    },
    {
      icon: Layout,
      title: "Branded Splash Pages for Guest Login and Upsells",
      description:
        "Create a professional, branded login experience that promotes your campground and increases upsell opportunities.",
      details: [
        "Custom-branded splash pages for guest login",
        "Highlight campground amenities and promotions",
        "Integrate upsell offers seamlessly",
        "Enhance your campground’s professional image",
      ],
    },
    {
      icon: DollarSign,
      title: "Paid and Free Guest Access Tiers",
      description:
        "Flexible Wi-Fi access models to suit your guests and generate revenue for your campground.",
      details: [
        "Offer free basic access and paid premium tiers",
        "Sponsorship and advertising opportunities",
        "Encourage upsells with premium bandwidth options",
        "Track usage and revenue in real-time",
      ],
    },
    {
      icon: Monitor,
      title: "24/7 Monitoring and Rapid Support",
      description:
        "Ensure optimal performance and happy guests with continuous monitoring and around-the-clock support.",
      details: [
        "24/7 network monitoring",
        "Rapid response to guest connectivity issues",
        "Regular performance and uptime reports",
        "Proactive maintenance and updates",
      ],
    },
  ];

  return (
    <>
      <section
        className="relative py-20 text-primary-foreground bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/services/campground.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Campground & RV Park Wi-Fi Solutions
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Fast, secure Wi-Fi that keeps guests connected and turns your
              network into a profit center.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Wi-Fi That Campers Rave About — Not Complain About
            </h2>
            <p className="text-xl text-muted-foreground">
              SkyWeb powers 800+ campgrounds and RV parks nationwide,
              eliminating guest Wi-Fi complaints and creating new revenue
              streams.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {campgroundServices.map((service, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-soft transition-shadow h-full"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {service.description}
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <CampgroundSection />
      <CTASection />
    </>
  );
}
