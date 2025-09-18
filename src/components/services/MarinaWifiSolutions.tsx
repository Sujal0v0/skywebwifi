import { Anchor, Camera, Wifi } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

export default function MarinaWifiSolutions() {
  const marinaServices = [
    {
      icon: Anchor,
      title: "Marina-Specific Solutions",
      description:
        "Specialized Wi-Fi designed for the unique challenges of marina environments.",
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
        "Combine Wi-Fi with security cameras for comprehensive marina protection.",
      details: [
        "AI cameras for dock monitoring",
        "License plate recognition at entrance",
        "People counting for safety compliance",
        "One network for both Wi-Fi and security",
      ],
    },
  ];
  return (
    <section className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Marina Wi-Fi Solutions
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
              alt="Marina Wi-Fi solutions"
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
  );
}
