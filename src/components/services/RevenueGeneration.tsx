import { DollarSign, Monitor, Zap } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

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
    <section className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Revenue Generation
          </h2>
          <p className="text-xl text-muted-foreground">
            Wi-Fi That Pays for Itself
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
  );
}
