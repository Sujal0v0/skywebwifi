import { DollarSign, Monitor, Zap } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import CTASection from "../sections/CTASection";

export default function RevenueGeneration() {
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
  return (
    <>
      <section
        className="relative py-20 text-primary-foreground bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/services/revenue.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Revenue Generation
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Fast, secure Wi-Fi that keeps guests connected and turns your
              network into a profit center.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Wi-Fi That Pays for Itself
            </h2>
            <p className="text-xl text-muted-foreground">
              Turn Wi-Fi into a profit center.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-16">
            {revenueServices.map((service, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-soft transition-shadow"
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
      <CTASection />
    </>
  );
}
