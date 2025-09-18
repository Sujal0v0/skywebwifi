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
  Image,
  Mountain,
  Home,
  Trees,
  Waves,
  Users,
  Star,
  MapPin,
  Eye,
} from "lucide-react";
import Link from "next/link";

const Gallery = () => {
  const galleryCategories = [
    {
      title: "Site Views",
      description: "Browse our beautiful RV sites and camping areas",
      count: "45+ Photos",
      href: "/gallery/sites",
      icon: Home,
      color: "bg-primary/10",
      preview: "Lake views, forest sites, premium locations",
    },
    {
      title: "Activities & Recreation",
      description: "See guests enjoying our recreational facilities",
      count: "60+ Photos",
      href: "/gallery/activities",
      icon: Users,
      color: "bg-orange/10",
      preview: "Swimming, hiking, campfires, family fun",
    },
    {
      title: "Amenities & Facilities",
      description: "Tour our modern facilities and amenities",
      count: "35+ Photos",
      href: "/gallery/amenities",
      icon: Star,
      color: "bg-accent/10",
      preview: "Pool, recreation center, playground, camp store",
    },
  ];

  const featuredPhotos = [
    {
      title: "Sunrise Over Pine Lake",
      category: "Nature",
      description:
        "Beautiful morning sunrise reflecting on the calm lake waters",
      location: "Pine Lake",
      season: "Summer",
    },
    {
      title: "Premium Lakeside Site",
      category: "Sites",
      description:
        "Spacious RV site with direct lake access and mountain views",
      location: "Zone A - Lakeside",
      season: "All Seasons",
    },
    {
      title: "Family Fun at the Pool",
      category: "Activities",
      description:
        "Families enjoying our heated swimming pool and recreation area",
      location: "Pool Complex",
      season: "Summer",
    },
    {
      title: "Cozy Campfire Evening",
      category: "Activities",
      description: "Guests gathering around the community fire pit for stories",
      location: "Central Fire Pit",
      season: "All Seasons",
    },
    {
      title: "Modern Recreation Center",
      category: "Amenities",
      description: "Our fully equipped recreation center with games and Wi-Fi",
      location: "Recreation Center",
      season: "All Seasons",
    },
    {
      title: "Nature Trail Adventure",
      category: "Activities",
      description: "Hikers exploring the scenic Pine Ridge Nature Trail",
      location: "Nature Trails",
      season: "Spring/Fall",
    },
  ];

  const photoStats = [
    { label: "Total Photos", count: "200+", icon: Camera },
    { label: "Site Views", count: "45", icon: Home },
    { label: "Activity Shots", count: "85", icon: Users },
    { label: "Scenic Views", count: "70", icon: Mountain },
  ];

  const virtualTourAreas = [
    {
      name: "360° Lake View",
      description: "Interactive panoramic view of our pristine lake",
      icon: Waves,
      features: [
        "Interactive hotspots",
        "Zoom capability",
        "Full 360° rotation",
      ],
    },
    {
      name: "Site Walkthrough",
      description: "Virtual tour of our premium RV sites",
      icon: Home,
      features: [
        "Multiple site types",
        "Amenity highlights",
        "Size comparisons",
      ],
    },
    {
      name: "Facility Tour",
      description: "Explore our recreation center and amenities",
      icon: Star,
      features: ["All major facilities", "Interior views", "Activity areas"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Discover the beauty of Pine Ridge RV Resort through our photo
              collection
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
              <Image className="h-4 w-4" />
              <span>200+ Photos • Virtual Tours • Seasonal Updates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Statistics */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {photoStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">
                  {stat.count}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore different aspects of your future Pine Ridge experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {galleryCategories.map((category, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-soft transition-shadow group"
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 ${category.color} group-hover:scale-110 transition-transform`}
                  >
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-center">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Camera className="h-4 w-4" />
                      <span className="font-medium">{category.count}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {category.preview}
                    </p>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link
                      href={category.href}
                      className="flex items-center gap-2"
                    >
                      <Eye className="h-4 w-4" />
                      View Gallery
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Photos */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Photos
            </h2>
            <p className="text-xl text-muted-foreground">
              Highlights from our most popular and stunning photography
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredPhotos.map((photo, index) => (
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
                    <span className="bg-muted px-2 py-1 rounded text-xs font-medium text-muted-foreground">
                      {photo.category}
                    </span>
                  </div>
                  <CardDescription>{photo.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{photo.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Trees className="h-4 w-4" />
                    <span>Best in {photo.season}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tours */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Virtual Tours
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience Pine Ridge RV Resort with immersive 360° virtual tours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {virtualTourAreas.map((area, index) => (
              <Card key={index} className="border-border text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <area.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{area.name}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {area.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Launch Virtual Tour
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Submission */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Share Your Pine Ridge Memories
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We love featuring guest photos! Share your favorite Pine Ridge
              moments with us.
            </p>

            <Card className="border-primary/20 text-left">
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">How to Submit Photos</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                          Email your photos to gallery@pineridgerv.com
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Tag us on social media @PineRidgeRV</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Include a brief description and your name</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>High-resolution photos preferred</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Photo Guidelines</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                          Original photos taken at Pine Ridge RV Resort
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Family-friendly content only</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Permission granted for marketing use</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Featured photos receive special recognition</span>
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
            Ready to Create Your Own Memories?
          </h2>
          <p className="text-xl mb-8 text-orange-foreground/90 max-w-2xl mx-auto">
            Book your stay and start capturing beautiful moments at Pine Ridge
            RV Resort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link href="/reservations">Book Your Photo-Worthy Stay</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              asChild
            >
              <Link href="/amenities">Explore Our Amenities</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
