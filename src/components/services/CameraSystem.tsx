import CTASection from "../sections/CTASection";
import { Card, CardContent } from "../ui/card";
import AICamera from "./camera-system/AICamera";
import LiveView from "./camera-system/LiveView";
import {
  Shield,
  Wifi,
  MonitorSmartphone,
  ServerCog,
  Smartphone,
  Video,
  Camera,
  Zap,
} from "lucide-react";

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
  const features = [
    {
      icon: Shield,
      title: "KEEP YOUR CUSTOMERS & PROPERTY SAFE",
      description:
        "Magna sagittis faucibus mauris, sit enim varius sem ultricies sed netus tortor tortor fusce.",
    },
    {
      icon: Wifi,
      title: "DEPLOY OVER HARD TO REACH AREAS",
      description:
        "Integrating the latest CCTV & Wireless technology, we can now deploy cameras in the most remote locations for total site coverage.",
    },
    {
      icon: MonitorSmartphone,
      title: "REMOTE MONITORING ON COMPUTER, SMARTPHONE",
      description:
        "Watch what’s happening from anywhere with our remote tools, available on laptop, smartphone, tablet and more.",
    },
    {
      icon: ServerCog,
      title: "FLEXIBLE SURVEILLANCE",
      description:
        "Manage large deployments with ease and spend less time on tedious tasks, more time safeguarding your property.",
    },
    {
      icon: Smartphone,
      title: "MOBILE MONITORING",
      description:
        "Monitor your property from anywhere with our free mobile app, compatible with Windows®, Mac®, iOS, and Android.",
    },
    {
      icon: Video,
      title: "KEEP UP TO DATE WITH LIVE VIEWS",
      description:
        "Watch live feeds, adjust camera angles, set up analytics, and respond quickly to suspicious activity.",
    },
  ];
  return (
    <>
      <section
        className="relative py-20 text-primary-foreground bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/services/camera.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4">
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {cameraServices.map((service, index) => (
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
      <LiveView />
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              CCTV & Surveillance Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              Protect your property, assets, and customers with our advanced
              surveillance solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-card flex flex-col"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AICamera />
      <CTASection />
    </>
  );
}
