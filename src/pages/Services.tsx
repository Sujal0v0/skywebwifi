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

const Services = () => {
  const campgroundServices = [
    {
      icon: Wifi,
      title: "Comprehensive Coverage",
      description:
        "Reliable WiFi coverage for all areas of your campground or RV park.",
      details: [
        "Coverage for campsites, cabins, pools, and rec halls",
        "Eliminate guest WiFi complaints",
        "Handle high-density usage during peak seasons",
        "Scalable solutions for properties of all sizes",
      ],
    },
    {
      icon: Monitor,
      title: "24/7 Monitoring & Support",
      description:
        "Continuous monitoring to ensure optimal performance and guest satisfaction.",
      details: [
        "24/7 network monitoring",
        "Rapid support for guest issues",
        "Regular performance reports",
        "Proactive maintenance and updates",
      ],
    },
    {
      icon: DollarSign,
      title: "Revenue Generation",
      description:
        "Turn your WiFi into a profit center with multiple revenue streams.",
      details: [
        "Paid premium access tiers",
        "Sponsorship opportunities",
        "Upsell campground amenities",
        "Real-time revenue tracking dashboards",
      ],
    },
  ];

  const marinaServices = [
    {
      icon: Anchor,
      title: "Marina-Specific Solutions",
      description:
        "Specialized WiFi designed for the unique challenges of marina environments.",
      details: [
        "Long-range coverage across docks and shoreline",
        "Water-resistant hardware for marine environments",
        "Solutions for transient and seasonal guests",
        "Dock monitoring integration",
      ],
    },
    {
      icon: Wifi,
      title: "Reliable Dock-to-Dock Coverage",
      description:
        "Ensure boaters stay connected from every slip in your marina.",
      details: [
        "Eliminate dead zones along entire docks",
        "Handle interference from water and metal structures",
        "Support for multiple devices per vessel",
        "Seamless roaming throughout the marina",
      ],
    },
    {
      icon: Camera,
      title: "Integrated Security",
      description:
        "Combine WiFi with security cameras for comprehensive marina protection.",
      details: [
        "AI cameras for dock monitoring",
        "License plate recognition at entrance",
        "People counting for safety compliance",
        "One network for both WiFi and security",
      ],
    },
  ];

  const splashPageServices = [
    {
      icon: Palette,
      title: "Custom Branding",
      description:
        "Create a seamless brand experience from the moment guests connect.",
      details: [
        "Your logo, colors, and branding",
        "Customized welcome messages",
        "Property-specific imagery",
        "Consistent guest experience",
      ],
    },
    {
      icon: DollarSign,
      title: "Sponsorship Opportunities",
      description:
        "Generate additional revenue through local business sponsorships.",
      details: [
        "Local business ads on login portal",
        "Sponsorship packages",
        "Featured promotions",
        "Revenue sharing options",
      ],
    },
    {
      icon: BarChart3,
      title: "Marketing Integration",
      description:
        "Capture guest data and promote your property's amenities and events.",
      details: [
        "Guest data capture for marketing",
        "Promote rentals and activities",
        "Event announcements",
        "Email collection for newsletters",
      ],
    },
  ];

  const revenueServices = [
    {
      icon: DollarSign,
      title: "Paid Access Tiers",
      description:
        "Offer different levels of service to meet various guest needs and budgets.",
      details: [
        "Free basic access with limitations",
        "Premium high-speed options",
        "Daily, weekly, and seasonal passes",
        "Family and group packages",
      ],
    },
    {
      icon: Monitor,
      title: "Real-Time Analytics",
      description:
        "Track performance and revenue with comprehensive dashboards.",
      details: [
        "Real-time usage statistics",
        "Revenue tracking by source",
        "Guest adoption rates",
        "Performance metrics",
      ],
    },
    {
      icon: Zap,
      title: "Upsell Opportunities",
      description:
        "Promote your property's amenities and services directly through the portal.",
      details: [
        "RV storage promotions",
        "Boat rental offerings",
        "Event and activity bookings",
        "Camp store specials",
      ],
    },
  ];

  const cameraServices = [
    {
      icon: Camera,
      title: "Standard Security Cameras",
      description:
        "Basic surveillance to protect your property and provide peace of mind.",
      details: [
        "Theft deterrence and evidence collection",
        "Remote property monitoring",
        "Safety and liability protection",
        "24/7 recording options",
      ],
    },
    {
      icon: Zap,
      title: "AI-Powered Camera Systems",
      description:
        "Advanced analytics for smarter security and business insights.",
      details: [
        "License plate recognition",
        "People counting for capacity management",
        "Dock monitoring for marina safety",
        "Motion detection and alerts",
      ],
    },
    {
      icon: Wifi,
      title: "Integrated Network Solutions",
      description:
        "One network that powers both your WiFi and camera systems efficiently.",
      details: [
        "Unified infrastructure",
        "Reduced equipment costs",
        "Simplified management",
        "Scalable for future expansion",
      ],
    },
  ];

  const processSteps = [
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

      {/* Campground & RV Park WiFi Solutions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Campground & RV Park WiFi Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              WiFi That Campers Rave About — Not Complain About
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={"/assets/campground-wifi.jpg"}
                alt="Campground WiFi solutions"
                className="w-full h-96 object-cover rounded-lg shadow-medium"
              />
            </div>
            <div className="grid grid-cols-1 gap-6">
              {campgroundServices.map((service, index) => (
                <Card
                  key={index}
                  className="border-border hover:shadow-soft transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
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

          <div className="text-center mt-12">
            <Button variant="nature" size="lg" asChild>
              <Link href="/campground-case-studies">
                See Campground Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Marina WiFi Solutions */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Marina WiFi Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              Connectivity That Reaches Every Dock
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 gap-6">
                {marinaServices.map((service, index) => (
                  <Card
                    key={index}
                    className="border-border hover:shadow-soft transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="h-6 w-6 text-orange" />
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
            <div className="order-1 lg:order-2">
              <img
                src={"/assets/marina-wifi.jpg"}
                alt="Marina WiFi solutions"
                className="w-full h-96 object-cover rounded-lg shadow-medium"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="nature" size="lg" asChild>
              <Link href="/marina-case-studies">See Marina Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Splash Pages & Branding */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Splash Pages & Branding
            </h2>
            <p className="text-xl text-muted-foreground">
              Your WiFi. Your Brand.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={"/assets/splash-pages.jpg"}
                alt="Splash page examples"
                className="w-full h-96 object-cover rounded-lg shadow-medium"
              />
            </div>
            <div className="grid grid-cols-1 gap-6">
              {splashPageServices.map((service, index) => (
                <Card
                  key={index}
                  className="border-border hover:shadow-soft transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
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

          <div className="text-center mt-12">
            <Button variant="nature" size="lg" asChild>
              <Link href="/splash-demos">View Splash Page Demos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Revenue Generation */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Revenue Generation
            </h2>
            <p className="text-xl text-muted-foreground">
              WiFi That Pays for Itself
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 gap-6">
                {revenueServices.map((service, index) => (
                  <Card
                    key={index}
                    className="border-border hover:shadow-soft transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="h-6 w-6 text-orange" />
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
            <div className="order-1 lg:order-2">
              <img
                src={"/assets/revenue-dashboard.jpg"}
                alt="Revenue dashboard example"
                className="w-full h-96 object-cover rounded-lg shadow-medium"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="nature" size="lg" asChild>
              <Link href="/revenue-calculator">See How Much You Can Earn</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Camera Systems */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Camera Systems
            </h2>
            <p className="text-xl text-muted-foreground">
              Protect Your Property with Smart Cameras
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={"/assets/camera-systems.jpg"}
                alt="Camera system installation"
                className="w-full h-96 object-cover rounded-lg shadow-medium"
              />
            </div>
            <div className="grid grid-cols-1 gap-6">
              {cameraServices.map((service, index) => (
                <Card
                  key={index}
                  className="border-border hover:shadow-soft transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
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

          <div className="text-center mt-12">
            <Button variant="nature" size="lg" asChild>
              <Link href="/camera-solutions">Explore Camera Solutions</Link>
            </Button>
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
              A Simple, Proven Process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
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

          <div className="text-center mt-12">
            <Button variant="nature" size="lg" asChild>
              <Link href="/consultation">Book a Walk-Through</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-nature-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Your WiFi & Revenue Plan
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

export default Services;
