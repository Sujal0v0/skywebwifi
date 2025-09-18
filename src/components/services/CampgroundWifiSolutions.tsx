import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { DollarSign, Monitor, Wifi } from "lucide-react";

export default function CampgroundWifiSolutions() {
  const campgroundServices = [
    {
      icon: Wifi,
      title: "Comprehensive Coverage",
      description:
        "Reliable Wi-Fi coverage for all areas of your campground or RV park.",
      details: [
        "Coverage for campsites, cabins, pools, and rec halls",
        "Eliminate guest Wi-Fi complaints",
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
        "Turn your Wi-Fi into a profit center with multiple revenue streams.",
      details: [
        "Paid premium access tiers",
        "Sponsorship opportunities",
        "Upsell campground amenities",
        "Real-time revenue tracking dashboards",
      ],
    },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Campground & RV Park Wi-Fi Solutions
          </h2>
          <p className="text-xl text-muted-foreground">
            Wi-Fi That Campers Rave About — Not Complain About
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={"/assets/campground-wifi.jpg"}
              alt="Campground Wi-Fi solutions"
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
  );
}
