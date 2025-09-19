import { Anchor, Camera, Wifi } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import CTASection from "../sections/CTASection";

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
    <>
      <section
        className="relative py-20 text-primary-foreground bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/services/marina-wifi-solutions.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Marina Wi-Fi Solutions
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
              Connectivity That Reaches Every Dock
            </h2>
            <p className="text-xl text-muted-foreground">
              Marinas face unique Wi-Fi challenges — long docks, water
              interference, transient guests. SkyWeb solves them with proven
              designs like Navy Pier Marina.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center mb-16">
            {marinaServices.map((service, index) => (
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
      <CTASection />
    </>
  );
}
