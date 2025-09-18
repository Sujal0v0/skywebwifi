import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tent,
  Home,
  Wifi,
  Zap,
  Droplets,
  Tv,
  Car,
  TreePine,
  Mountain,
  Users,
} from "lucide-react";
import Link from "next/link";

const Accommodations = () => {
  const siteTypes = [
    {
      title: "Standard RV Sites",
      description: "Full hookup sites with all essential amenities",
      price: "From $45/night",
      features: [
        "30/50 Amp Electric",
        "Water & Sewer",
        "Picnic Table",
        "Fire Ring",
        "Wi-Fi Access",
      ],
      icon: Home,
      color: "bg-primary/10",
      maxOccupancy: "6 guests",
      siteSize: "35 x 70 feet",
    },
    {
      title: "Premium Lake View Sites",
      description: "Upgraded sites with stunning lake views and extra space",
      price: "From $55/night",
      features: [
        "30/50 Amp Electric",
        "Water & Sewer",
        "Lake Views",
        "Extended Patio",
        "Premium Wi-Fi",
        "Reserved Parking",
      ],
      icon: Mountain,
      color: "bg-orange/10",
      maxOccupancy: "8 guests",
      siteSize: "40 x 80 feet",
    },
    {
      title: "Pull-Through Sites",
      description: "Easy access sites perfect for large RVs and motorhomes",
      price: "From $50/night",
      features: [
        "50 Amp Electric",
        "Water & Sewer",
        "Easy Access",
        "No Backing Required",
        "Extra Wide",
        "Concrete Pad",
      ],
      icon: Car,
      color: "bg-accent/10",
      maxOccupancy: "6 guests",
      siteSize: "45 x 90 feet",
    },
    {
      title: "Tent Camping Sites",
      description: "Traditional camping experience in natural settings",
      price: "From $25/night",
      features: [
        "Electric Hook-up",
        "Water Access",
        "Picnic Table",
        "Fire Ring",
        "Restroom Access",
        "Shower Facilities",
      ],
      icon: Tent,
      color: "bg-green-500/10",
      maxOccupancy: "4 guests",
      siteSize: "20 x 30 feet",
    },
  ];

  const amenities = [
    {
      name: "High-Speed Wi-Fi",
      icon: Wifi,
      description: "Complimentary internet throughout the resort",
    },
    {
      name: "Full Electrical",
      icon: Zap,
      description: "30 & 50 amp electrical connections available",
    },
    {
      name: "Water & Sewer",
      icon: Droplets,
      description: "Full hookups at every RV site",
    },
    {
      name: "Cable TV Ready",
      icon: Tv,
      description: "Cable connections available at premium sites",
    },
    {
      name: "Landscaped Sites",
      icon: TreePine,
      description: "Beautifully maintained natural landscaping",
    },
    {
      name: "Group Areas",
      icon: Users,
      description: "Special group camping areas for large parties",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Accommodations
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Comfortable sites and amenities for every type of camper
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
              <Home className="h-4 w-4" />
              <span>200+ Sites • Full Hookups • Premium Locations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Site Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Perfect Site
            </h2>
            <p className="text-xl text-muted-foreground">
              From cozy tent sites to premium RV spots with lake views
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {siteTypes.map((site, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-soft transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${site.color}`}
                    >
                      <site.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{site.title}</CardTitle>
                      <div className="text-2xl font-bold text-orange">
                        {site.price}
                      </div>
                    </div>
                  </div>
                  <CardDescription>{site.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Max Occupancy
                      </p>
                      <p className="font-semibold">{site.maxOccupancy}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Site Size
                      </p>
                      <p className="font-semibold">{site.siteSize}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">
                      Features & Amenities:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {site.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Standard Amenities */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Standard Site Amenities
            </h2>
            <p className="text-xl text-muted-foreground">
              Every site includes these essential amenities for your comfort
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {amenities.map((amenity, index) => (
              <Card key={index} className="border-border text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <amenity.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {amenity.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {amenity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Site Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Makes Our Sites Special
              </h2>
              <p className="text-xl text-muted-foreground">
                Thoughtfully designed for comfort, convenience, and natural
                beauty
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Spacious & Private
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Our sites are designed with ample space and natural privacy
                    screening using mature trees and landscaping. Each site
                    provides plenty of room for your RV, vehicles, and outdoor
                    activities.
                  </p>
                  <p>
                    Premium sites offer even more space with extended patios,
                    perfect for families or groups who want extra room to spread
                    out and enjoy the outdoors.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Level & Accessible</h4>
                    <p className="text-sm text-muted-foreground">
                      All sites are level and easily accessible, with paved
                      roads and clear site markers.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-orange">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Natural Beauty</h4>
                    <p className="text-sm text-muted-foreground">
                      Surrounded by mature pine trees with mountain and lake
                      views from select sites.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">
                      Modern Infrastructure
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Reliable utilities, high-speed internet, and
                      well-maintained facilities throughout.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-warm-gradient text-orange-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find Your Perfect Site
          </h2>
          <p className="text-xl mb-8 text-orange-foreground/90 max-w-2xl mx-auto">
            Check availability and reserve your ideal camping spot today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link href="/reservations">Check Availability</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              asChild
            >
              <Link href="/amenities">View Amenities</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accommodations;
