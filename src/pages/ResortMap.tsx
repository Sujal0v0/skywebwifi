import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Navigation,
  Home,
  Trees,
  Waves,
  Car,
  Building,
  Compass,
  Download,
  Info,
} from "lucide-react";
import Link from "next/link";

const ResortMap = () => {
  const mapAreas = [
    {
      name: "Lakeside Premium Sites",
      zone: "Zone A",
      description:
        "Premium sites with direct lake access and stunning water views",
      sites: "1-25",
      features: [
        "Lake Views",
        "Premium Hookups",
        "Extended Patios",
        "Private Access",
      ],
      icon: Waves,
      color: "bg-blue-500/10",
    },
    {
      name: "Pine Grove Standard Sites",
      zone: "Zone B",
      description: "Peaceful sites nestled among mature pine trees",
      sites: "26-75",
      features: ["Shaded Sites", "Full Hookups", "Fire Rings", "Privacy"],
      icon: Trees,
      color: "bg-green-500/10",
    },
    {
      name: "Mountain View Sites",
      zone: "Zone C",
      description: "Elevated sites with panoramic mountain vistas",
      sites: "76-125",
      features: [
        "Mountain Views",
        "Full Hookups",
        "Level Sites",
        "Sunrise Views",
      ],
      icon: Home,
      color: "bg-orange/10",
    },
    {
      name: "Pull-Through Sites",
      zone: "Zone D",
      description: "Easy access sites perfect for large RVs",
      sites: "126-175",
      features: [
        "No Backing Required",
        "50 Amp Service",
        "Wide Sites",
        "Concrete Pads",
      ],
      icon: Car,
      color: "bg-primary/10",
    },
    {
      name: "Group Camping Area",
      zone: "Zone E",
      description: "Large sites designed for group gatherings",
      sites: "176-200",
      features: [
        "Group Sites",
        "Pavilion Access",
        "Extra Space",
        "Group Activities",
      ],
      icon: Building,
      color: "bg-accent/10",
    },
  ];

  const facilities = [
    {
      name: "Reception & Office",
      description: "Check-in, information, and guest services",
      hours: "8:00 AM - 10:00 PM",
      location: "Main Entrance",
      services: [
        "Check-in/out",
        "Information",
        "Reservations",
        "Emergency Contact",
      ],
    },
    {
      name: "Recreation Center",
      description: "Indoor activities, games, and community events",
      hours: "6:00 AM - 11:00 PM",
      location: "Central Area",
      services: ["Game Room", "Event Space", "WiFi Lounge", "Vending Machines"],
    },
    {
      name: "Swimming Pool Complex",
      description: "Heated pool, hot tub, and children's area",
      hours: "6:00 AM - 10:00 PM",
      location: "Near Recreation Center",
      services: ["Heated Pool", "Hot Tub", "Kids' Pool", "Pool Deck"],
    },
    {
      name: "Laundry Facilities",
      description: "Modern washers and dryers available 24/7",
      hours: "24 Hours",
      location: "Zone B & Zone D",
      services: ["Washers", "Dryers", "Folding Tables", "Soap Dispensers"],
    },
    {
      name: "Camp Store",
      description: "Essential supplies, snacks, and camping gear",
      hours: "8:00 AM - 8:00 PM",
      location: "Near Main Office",
      services: ["Groceries", "Camping Supplies", "Ice", "Firewood"],
    },
    {
      name: "Playground & Sports Courts",
      description: "Family fun areas and recreational activities",
      hours: "Dawn to Dusk",
      location: "Central Recreation Area",
      services: [
        "Playground",
        "Basketball Court",
        "Volleyball Court",
        "Horseshoe Pits",
      ],
    },
  ];

  const trails = [
    {
      name: "Lakeshore Trail",
      difficulty: "Easy",
      distance: "1.2 miles",
      description:
        "Scenic walk along the lake with wildlife viewing opportunities",
      features: ["Lake Views", "Wildlife Viewing", "Fishing Spots", "Benches"],
    },
    {
      name: "Pine Ridge Nature Trail",
      difficulty: "Moderate",
      distance: "2.8 miles",
      description: "Loop trail through pine forests with interpretive signs",
      features: [
        "Forest Views",
        "Educational Signs",
        "Picnic Areas",
        "Photo Opportunities",
      ],
    },
    {
      name: "Summit Vista Trail",
      difficulty: "Challenging",
      distance: "4.5 miles",
      description: "Steep climb to panoramic viewpoint overlooking the valley",
      features: [
        "Mountain Views",
        "Summit Overlook",
        "Challenging Terrain",
        "Scenic Vistas",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Resort Map & Layout
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Navigate our 300-acre resort with detailed maps and facility
              information
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
              <MapPin className="h-4 w-4" />
              <span>5 Site Zones • 15+ Facilities • 3 Nature Trails</span>
            </div>
          </div>
        </div>
      </section>

      <img
        src={"/assets/rv-map.png"}
        className="container mx-auto pt-10 max-w-[1000px]"
      />
      {/* Quick Navigation */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download PDF Map
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Navigation className="h-4 w-4" />
              Interactive Map
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              Facility Directory
            </Button>
          </div>
        </div>
      </section>

      {/* Site Zones */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Camping Zones & Site Areas
            </h2>
            <p className="text-xl text-muted-foreground">
              Five distinct zones each offering unique features and experiences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {mapAreas.map((area, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-soft transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${area.color}`}
                    >
                      <area.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-lg">{area.name}</CardTitle>
                        <span className="bg-muted px-2 py-1 rounded text-xs font-medium text-muted-foreground">
                          {area.zone}
                        </span>
                      </div>
                      <CardDescription>
                        Sites {area.sites} • {area.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {area.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Amenities */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Facilities & Amenities
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete directory of all resort facilities and their locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {facilities.map((facility, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{facility.name}</CardTitle>
                  <CardDescription>{facility.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="font-medium">{facility.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Compass className="h-4 w-4 text-primary" />
                      <span>{facility.hours}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">
                      Services Available:
                    </h4>
                    <div className="grid grid-cols-1 gap-1">
                      {facility.services.map((service, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {service}
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

      {/* Nature Trails */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nature Trails & Hiking
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore the natural beauty of our resort on marked hiking trails
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {trails.map((trail, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{trail.name}</CardTitle>
                  <div className="flex items-center gap-4 text-sm">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        trail.difficulty === "Easy"
                          ? "bg-green-100 text-green-800"
                          : trail.difficulty === "Moderate"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {trail.difficulty}
                    </span>
                    <span className="text-muted-foreground">
                      {trail.distance}
                    </span>
                  </div>
                  <CardDescription>{trail.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2">
                    {trail.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Legend & Information */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Map Information & Legend
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Getting Around</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Main roads are paved and well-marked</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                          Emergency phones located throughout the resort
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Golf cart rentals available at main office</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                          Bicycle-friendly paths throughout the resort
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Important Notes</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Site maps available at check-in</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                          GPS coordinates provided for easy navigation
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                          Staff available for directions and assistance
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                          Detailed facility hours posted at each location
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-warm-gradient text-orange-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Plan Your Perfect Stay
          </h2>
          <p className="text-xl mb-8 text-orange-foreground/90 max-w-2xl mx-auto">
            Use our resort map to choose your ideal site and plan your
            activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link href="/reservations">Reserve Your Site</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              asChild
            >
              <Link href="/accommodations">View Accommodations</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResortMap;
