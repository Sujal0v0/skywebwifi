import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Camera, Wifi, Zap } from "lucide-react";

export default function CameraSystem() {
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
        "One network that powers both your Wi-Fi and camera systems efficiently.",
      details: [
        "Unified infrastructure",
        "Reduced equipment costs",
        "Simplified management",
        "Scalable for future expansion",
      ],
    },
  ];
  return (
    <>
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Camera Systems
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
              Protect Your Property with Smart Cameras
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center mb-16">
            {cameraServices.map((service, index) => (
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

          <div className="text-center mt-12">
            <Button variant="nature" size="lg" asChild>
              <Link href="/camera-solutions">Explore Camera Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
