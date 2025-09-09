import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Camera,
  ArrowLeft,
  Home,
  Waves,
  Trees,
  Mountain,
  Car,
  Users,
  MapPin,
  Eye,
} from "lucide-react";
import Link from "next/link";

const GallerySites = () => {
  const siteCategories = [
    {
      title: "Lakeside Premium Sites",
      description: "Stunning sites with direct lake access and water views",
      count: "12 Photos",
      zone: "Zone A",
      icon: Waves,
      color: "bg-blue-500/10",
      features: [
        "Lake Views",
        "Premium Hookups",
        "Extended Patios",
        "Private Beach Access",
      ],
    },
    {
      title: "Pine Grove Standard Sites",
      description: "Peaceful forested sites with natural privacy",
      count: "15 Photos",
      zone: "Zone B",
      icon: Trees,
      color: "bg-green-500/10",
      features: [
        "Shaded Areas",
        "Full Hookups",
        "Fire Rings",
        "Natural Privacy",
      ],
    },
    {
      title: "Mountain View Sites",
      description: "Elevated sites with panoramic mountain vistas",
      count: "10 Photos",
      zone: "Zone C",
      icon: Mountain,
      color: "bg-orange/10",
      features: [
        "Mountain Views",
        "Sunrise Vistas",
        "Level Sites",
        "Open Sky Views",
      ],
    },
    {
      title: "Pull-Through Sites",
      description: "Easy access sites perfect for large RVs",
      count: "8 Photos",
      zone: "Zone D",
      icon: Car,
      color: "bg-primary/10",
      features: [
        "No Backing Required",
        "Wide Sites",
        "Concrete Pads",
        "50 Amp Service",
      ],
    },
  ];

  const featuredSitePhotos = [
    {
      title: "Premium Lakeside Site #12",
      description:
        "Spacious RV site with unobstructed lake views and extended patio area",
      category: "Lakeside Premium",
      details: {
        size: "40 x 80 feet",
        hookups: "30/50 Amp, Water, Sewer",
        capacity: "8 guests",
        features: ["Lake View", "Extended Patio", "Premium Location"],
      },
    },
    {
      title: "Shaded Pine Grove Site #45",
      description:
        "Peaceful site nestled among mature pine trees with natural privacy",
      category: "Pine Grove",
      details: {
        size: "35 x 70 feet",
        hookups: "30/50 Amp, Water, Sewer",
        capacity: "6 guests",
        features: ["Shaded", "Private", "Fire Ring", "Picnic Table"],
      },
    },
    {
      title: "Mountain Vista Site #89",
      description:
        "Elevated site offering breathtaking sunrise views over the mountain range",
      category: "Mountain View",
      details: {
        size: "35 x 75 feet",
        hookups: "30/50 Amp, Water, Sewer",
        capacity: "6 guests",
        features: ["Mountain Views", "Sunrise Views", "Level Site"],
      },
    },
    {
      title: "Easy Access Pull-Through #156",
      description:
        "Convenient pull-through site with concrete pad and 50 amp service",
      category: "Pull-Through",
      details: {
        size: "45 x 90 feet",
        hookups: "50 Amp, Water, Sewer",
        capacity: "6 guests",
        features: ["Pull-Through", "Concrete Pad", "Easy Access"],
      },
    },
    {
      title: "Group Site #185",
      description:
        "Large group camping area perfect for family reunions and gatherings",
      category: "Group Sites",
      details: {
        size: "60 x 100 feet",
        hookups: "50 Amp, Water, Sewer",
        capacity: "12 guests",
        features: ["Group Site", "Pavilion", "Extra Space"],
      },
    },
    {
      title: "Corner Premium Site #25",
      description: "Corner site offering extra privacy and dual aspect views",
      category: "Lakeside Premium",
      details: {
        size: "45 x 85 feet",
        hookups: "50 Amp, Water, Sewer",
        capacity: "8 guests",
        features: ["Corner Location", "Extra Privacy", "Dual Views"],
      },
    },
  ];

  const siteAmenities = [
    "Full electrical hookups (30/50 amp)",
    "Fresh water connection",
    "Sewer hookup",
    "High-speed WiFi access",
    "Picnic table",
    "Fire ring (where permitted)",
    "Level gravel pads",
    "Trash and recycling pickup",
    "Emergency phone access",
    "Well-lit pathways",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="mb-6">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                asChild
              >
                <Link href="/gallery" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Gallery
                </Link>
              </Button>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Site Views Gallery
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Explore our beautiful RV sites and camping areas
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
              <Home className="h-4 w-4" />
              <span>45+ Site Photos • 5 Site Types • All Zones Covered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Site Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Browse Sites by Type
            </h2>
            <p className="text-xl text-muted-foreground">
              See the unique features and views of each site category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {siteCategories.map((category, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-soft transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color} flex-shrink-0`}
                    >
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl">
                          {category.title}
                        </CardTitle>
                        <span className="bg-muted px-2 py-1 rounded text-xs font-medium text-muted-foreground">
                          {category.zone}
                        </span>
                      </div>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Camera className="h-4 w-4" />
                    <span className="font-medium">{category.count}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {category.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    <Eye className="h-4 w-4 mr-2" />
                    View {category.title} Photos
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Site Photos */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Site Photos
            </h2>
            <p className="text-xl text-muted-foreground">
              Get a detailed look at our most popular and beautiful sites
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredSitePhotos.map((photo, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-soft transition-shadow overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-orange/20 flex items-center justify-center">
                  <Camera className="h-12 w-12 text-primary/60" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{photo.title}</CardTitle>
                    <span className="bg-orange text-orange-foreground px-2 py-1 rounded text-xs font-medium">
                      {photo.category}
                    </span>
                  </div>
                  <CardDescription>{photo.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-muted-foreground">Size</p>
                      <p className="text-foreground">{photo.details.size}</p>
                    </div>
                    <div>
                      <p className="font-medium text-muted-foreground">
                        Capacity
                      </p>
                      <p className="text-foreground">
                        {photo.details.capacity}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground text-sm mb-2">
                      Hookups
                    </p>
                    <p className="text-sm text-foreground">
                      {photo.details.hookups}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground text-sm mb-2">
                      Special Features
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {photo.details.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-muted px-2 py-1 rounded text-xs text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Site Amenities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Standard Site Amenities
              </h2>
              <p className="text-xl text-muted-foreground">
                Every site includes these essential amenities for your comfort
              </p>
            </div>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Home className="h-5 w-5 text-primary" />
                  Included with Every Site
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {siteAmenities.map((amenity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      </div>
                      <span className="text-muted-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Site Selection Tips */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choosing Your Perfect Site
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let our site photos help you select the ideal location for your
              stay
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-border text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Waves className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">For Water Lovers</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose lakeside premium sites for direct water access and
                    stunning sunrise views
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trees className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">For Privacy Seekers</h3>
                  <p className="text-sm text-muted-foreground">
                    Pine Grove sites offer natural privacy and shade from mature
                    trees
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="h-6 w-6 text-orange" />
                  </div>
                  <h3 className="font-semibold mb-2">For Easy Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Pull-through sites are perfect for large RVs and hassle-free
                    parking
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-warm-gradient text-orange-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Found Your Perfect Site?
          </h2>
          <p className="text-xl mb-8 text-orange-foreground/90 max-w-2xl mx-auto">
            Reserve your ideal site today and start planning your Pine Ridge
            adventure.
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
              <Link href="/accommodations">View All Accommodations</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GallerySites;
