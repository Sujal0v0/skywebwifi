import { Button } from "@/components/ui/button";
import {
  Star,
  Wifi,
  MapPin,
  LucideIcon,
  ShieldCheck,
  Globe,
  Wrench,
  Circle,
} from "lucide-react";
import Link from "next/link";

interface quickFeaturesItem {
  icon: LucideIcon;
  text: string;
}

const Hero = () => {
  const quickFeatures: quickFeaturesItem[] = [
    { icon: Wifi, text: "Fast & Reliable WiFi" },
    { icon: ShieldCheck, text: "Top-Rated Security" },
    { icon: Wrench, text: "Easy Installation" },
    { icon: Globe, text: "Wide Coverage Area" },
  ];

  return (
    <section className="relative min-h-[95vh] py-16 flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={"/assets/hero-campground.jpg"}
          alt="Beautiful RV campground with mountain views"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-primary/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="hidden md:inline-flex items-center gap-2 bg-primary/70 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Circle className="h-2 w-2 fill-current" />
            <span>Trusted by 800+ Campgrounds</span>
          </div>

          {/* Main Headline */}
          {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block bg-hero-title-gradient bg-clip-text text-transparent">
              WiFi & Camera Systems
            </span>
            for Campgrounds, RV Parks & Marinas
          </h1> */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-secondary">WiFi & Camera Systems</span>
            for Campgrounds, RV Parks & Marinas
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Trusted by 800+ properties — including Navy Pier Marina — SkyWeb
            delivers reliable connectivity, advanced security, and new revenue
            through branded portals and splash pages.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" asChild>
              <Link href="/reservations">Get a Free Quote</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-black/10 border-white/30 text-white hover:bg-white/20 "
              asChild
            >
              <Link href="/amenities">See Revenue Examples</Link>
            </Button>
          </div>

          {/* Quick Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {quickFeatures.map((feature, index) => {
              return (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <span className="relative inline-block text-sm font-medium">
                    <span className="absolute inset-0 bg-black/100 blur-lg rounded-lg"></span>
                    <span className="relative px-2">{feature.text}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Location Badge */}
      <div className="hidden md:absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm text-primary px-4 py-3 rounded-lg shadow-medium">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-orange" />
          <div className="text-sm">
            <p className="font-semibold">Mountain View, California</p>
            <p className="text-muted-foreground">1 hour from San Francisco</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
