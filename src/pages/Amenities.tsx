import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Wifi,
  Zap,
  Coffee,
  BarChart3,
  PlaySquare,
  Camera,
  Clock,
} from "lucide-react";
import Link from "next/link";

const Amenities = () => {
  const essentialAmenities = [
    {
      icon: Wifi,
      title: "WiFi That Campers Rave About",
      description:
        "SkyWeb powers 800+ campgrounds and RV parks nationwide, eliminating guest WiFi complaints and creating new revenue streams.",
      details: [
        "Coverage for campsites, cabins, pools, and rec halls",
        "Branded splash pages for guest login and upsells",
        "Paid and free guest access tiers",
        "24/7 monitoring and rapid support",
      ],
    },
    {
      icon: Coffee,
      title: "Splash Pages & Branding",
      description:
        "Every guest connects through a login portal branded for your property.",
      details: [
        "Your logo, your colors, your upsells",
        "Sponsor ads or local business promotions",
        "Guest data capture for marketing campaigns",
        "Visual splash page mockups",
      ],
    },
    {
      icon: BarChart3,
      title: "Revenue Generation",
      description: "Turn WiFi into a profit center with paid plans and ads.",
      details: [
        "Paid guest plans",
        "Sponsor ads on splash pages",
        "Upsells for rentals/events",
        "Real-time dashboards for tracking revenue",
      ],
    },
    {
      icon: Zap,
      title: "Camera Systems",
      description:
        "Protect your property with smart cameras integrated with WiFi.",
      details: [
        "Standard Cameras: Reduce theft, improve safety",
        "AI Cameras: License plate recognition, people counting, dock monitoring",
        "One network powers WiFi + cameras",
      ],
    },
  ];

  const recreationalFacilities = [
    {
      icon: PlaySquare,
      title: "Site Survey & Design",
      description:
        "A detailed site survey ensures optimal WiFi coverage for your property.",
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
        "Expert technicians install WiFi hardware for seamless connectivity.",
      details: [
        "Mount access points and antennas",
        "Configure network settings",
        "Test signal strength",
        "Ensure safe and secure installation",
      ],
    },
    {
      icon: BarChart3,
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
      icon: Wifi,
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

  const onsiteServices = [
    {
      icon: Wifi,
      title: "SkyWeb WiFi Solutions",
      description:
        "Reliable WiFi coverage for campgrounds, RV parks, and marinas.",
      details: [
        "Eliminate guest complaints",
        "Create new revenue streams",
        "Branded splash pages",
        "24/7 monitoring",
      ],
      hours: "Available 24/7",
    },
    {
      icon: Camera,
      title: "Smart Camera Systems",
      description:
        "Integrate cameras with your WiFi network for enhanced security.",
      details: [
        "Standard & AI cameras",
        "License plate recognition",
        "People counting and dock monitoring",
        "One network powers WiFi + cameras",
      ],
      hours: "Available 24/7",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              WiFi & Camera Systems for Campgrounds, RV Parks & Marinas
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Trusted by 800+ properties — including Navy Pier Marina — SkyWeb
              delivers reliable connectivity, advanced security, and new revenue
              through branded portals and splash pages.
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
                <Link href="/revenue">See Revenue Examples</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Amenities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Campground & RV Park WiFi Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              SkyWeb powers 800+ campgrounds and RV parks nationwide,
              eliminating guest WiFi complaints and creating new revenue
              streams.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={"/assets/amenities.jpg"}
                alt="Campground WiFi solutions and hardware"
                className="w-full h-96 object-cover rounded-lg shadow-medium"
              />
            </div>
            <div className="grid grid-cols-1 gap-6">
              {essentialAmenities.map((amenity, index) => (
                <Card
                  key={index}
                  className="border-border hover:shadow-soft transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <amenity.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {amenity.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {amenity.description}
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {amenity.details.map((detail, idx) => (
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
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              A simple, proven process to deliver reliable WiFi and generate
              revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recreationalFacilities.map((step, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-soft transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <step.icon className="h-6 w-6 text-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {step.description}
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-orange rounded-full" />
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

      {/* On-site Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              On-site Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Additional conveniences to enhance your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {onsiteServices.map((service, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-soft transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        {service.description}
                      </p>
                      <div className="inline-flex items-center gap-2 bg-accent/10 px-3 py-1 rounded-full text-xs font-medium text-accent">
                        <Clock className="h-3 w-3" />
                        {service.hours}
                      </div>
                    </div>
                  </div>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-accent rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-nature-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Build Your WiFi & Revenue Plan
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Book your consultation today and start delivering reliable WiFi
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

export default Amenities;
