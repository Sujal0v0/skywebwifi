import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Wifi,
  Zap,
  Coffee,
  BarChart3,
  PlaySquare,
  Camera,
  Anchor,
  Monitor,
  DollarSign,
  Palette,
} from "lucide-react";
import Link from "next/link";
import HowItWorksSection from "@/components/services/HowItWorksServices";
import { ServicesSection } from "@/components/services/ServiceSection";

const Services = () => {
  const processSteps = [
    {
      icon: PlaySquare,
      title: "Site Survey & Design",
      description:
        "A detailed site survey ensures optimal Wi-Fi coverage for your property.",
      details: [
        "Analyze site layout and building structures",
        "Plan access point placement",
        "Map coverage zones",
        "Identify potential interference",
      ],
    },
    {
      icon: Coffee,
      title: "Professional Installation",
      description:
        "Expert technicians install Wi-Fi hardware for seamless connectivity.",
      details: [
        "Mount access points and antennas",
        "Configure network settings",
        "Test signal strength",
        "Ensure safe and secure installation",
      ],
    },
    {
      icon: Palette,
      title: "Branded Portal Setup",
      description:
        "Set up a login portal that reflects your property brand and offers upsells.",
      details: [
        "Custom logos and colors",
        "Sponsor or local business ads",
        "Guest login & access tiers",
        "Data capture for marketing campaigns",
      ],
    },
    {
      icon: Monitor,
      title: "24/7 Monitoring & Revenue Tracking",
      description:
        "Continuous monitoring to maintain service quality and track revenue.",
      details: [
        "Real-time dashboards",
        "Rapid support for guest issues",
        "Track revenue from paid access and ads",
        "Analytics and reporting",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Services</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              We provide fast, secure, and fully managed Wi-Fi solutions that
              enhance guest experiences, strengthen security, and unlock new
              revenue opportunities.
            </p>
          </div>
        </div>
      </section>
      <ServicesSection />
      {/* How It Works */}
      <HowItWorksSection />

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Your Wi-Fi & Revenue Plan
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Book your consultation today and start delivering reliable Wi-Fi
            while generating revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              asChild
            >
              <Link href="/demo">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
