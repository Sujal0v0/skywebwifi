import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wifi, Anchor, Palette, DollarSign, Camera } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "campground",
    title: "Wi-Fi That Campers Rave About — Not Complain About",
    description:
      "SkyWeb powers 600+ campgrounds and RV parks nationwide, eliminating guest Wi-Fi complaints and creating new revenue streams. Coverage for campsites, cabins, pools, and rec halls.",
    icon: Wifi,
    href: "/services/campground-and-rv-park-wifi-solutions",
  },
  {
    id: "marina",
    title: "Connectivity That Reaches Every Dock",
    description:
      "Marinas face unique Wi-Fi challenges — long docks, water interference, transient guests. SkyWeb solves them with proven designs like Navy Pier Marina.",
    icon: Anchor,
    href: "/services/marina-wifi-solutions",
  },
  // {
  //   id: "branding",
  //   title: "Your Wi-Fi. Your Brand.",
  //   description:
  //     "Every guest connects through a login portal branded for your property with your logo, colors, and upsells. Sponsor ads and guest data capture included.",
  //   icon: Palette,
  //   href: "/services/splash-pages",
  // },
  {
    id: "revenue",
    title: "Wi-Fi That Pays for Itself",
    description:
      "Turn Wi-Fi into a profit center with paid guest plans, sponsor ads on splash pages, upsells for rentals/events, and real-time revenue dashboards.",
    icon: DollarSign,
    href: "/services/revenue-generation",
  },
  {
    id: "cameras",
    title: "Protect Your Property with Smart Cameras",
    description:
      "Standard cameras reduce theft and improve safety. AI cameras offer license plate recognition, people counting, and dock monitoring on one integrated network.",
    icon: Camera,
    href: "/services/camera-system",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <Card key={service.id} className="h-full flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </CardDescription>
                <Button asChild className="w-full">
                  <Link href={service.href} className="max-w-max">
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
