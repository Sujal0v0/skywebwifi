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
  );
}
