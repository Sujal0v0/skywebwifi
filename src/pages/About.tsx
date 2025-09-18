import ProofSection from "@/components/sections/ProofSection";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Award,
  Users,
  TreePine,
  Heart,
  Shield,
  Leaf,
  Clock,
  MapPin,
  Wifi,
  Monitor,
  ShieldCheck,
  DollarSign,
  Headphones,
} from "lucide-react";
import Link from "next/link";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "800+ Properties Served",
      description:
        "Trusted by campgrounds, RV parks, and marinas nationwide with proven results and satisfied clients.",
    },
    {
      icon: Wifi,
      title: "Proprietary Traffic-Shaping",
      description:
        "Advanced technology ensures smooth streaming for thousands of devices simultaneously without lag or buffering.",
    },
    {
      icon: DollarSign,
      title: "30-Day Money-Back Guarantee",
      description:
        "We stand behind our solutions with a risk-free guarantee that ensures your complete satisfaction.",
    },
    {
      icon: Monitor,
      title: "24/7 Monitoring & Support",
      description:
        "Our team constantly monitors your network and is always available to resolve any issues before guests notice.",
    },
    {
      icon: ShieldCheck,
      title: "Industry Partnerships",
      description:
        "Official partnerships with Ubiquiti, Mikrotik, and other industry leaders ensure top-quality hardware and solutions.",
    },
    {
      icon: Headphones,
      title: "Complete Revenue Solution",
      description:
        "Turn WiFi from an expense into profit with branded portals, paid access tiers, and sponsor advertising.",
    },
  ];

  const awards = [
    "RV Park & Campground Association - Technology Excellence Award 2023",
    "Marina Operators Association - Best WiFi Solution 2022",
    "Hospitality Technology Network - Innovation Award 2023",
    "Customer Satisfaction - 98% Client Retention Rate",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About SkyWeb WiFi Solutions
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Revolutionizing connectivity for outdoor hospitality since 2010
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Clock className="h-4 w-4" />
                <span>13+ Years of Innovation</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <MapPin className="h-4 w-4" />
                <span>800+ Properties Served</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Award className="h-4 w-4" />
                <span>Industry-Recognized Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  SkyWeb began in 2010 with a simple mission: to solve the
                  frustrating WiFi experience at campgrounds, RV parks, and
                  marinas. Founded by technology experts with a passion for the
                  outdoors, we recognized that poor connectivity was impacting
                  both guest satisfaction and property revenues.
                </p>
                <p>
                  We developed proprietary traffic-shaping technology
                  specifically designed for high-density environments where
                  hundreds of devices need to stream simultaneously. Our
                  solutions have since been deployed at over 800 properties
                  across North America, from small family campgrounds to major
                  destinations like Navy Pier Marina.
                </p>
                <p>
                  Today, SkyWeb is the leading provider of connectivity
                  solutions for outdoor hospitality, helping properties
                  transform their WiFi from a cost center into a profit
                  generator while dramatically improving guest experiences and
                  reviews.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    To deliver reliable, high-performance WiFi and camera
                    solutions that enhance guest experiences, increase property
                    revenues, and provide peace of mind through exceptional
                    support and monitoring.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-orange">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground">
                    To be the indispensable technology partner for every
                    campground, RV park, and marina, enabling them to thrive
                    through connected experiences and new revenue opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose SkyWeb?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover what makes us the preferred WiFi solution for 800+
              properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-soft transition-shadow text-center"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certifications
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-muted-foreground">
              Honored to be recognized for our innovation and excellence in
              outdoor hospitality technology
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-orange" />
                    </div>
                    <p className="font-medium text-foreground">{award}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      <ProofSection />
      {/* CTA Section */}
      <section className="py-20 bg-nature-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Property's WiFi?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join 800+ properties that have eliminated WiFi complaints and
            created new revenue streams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link href="/reservations">Get a Free Quote</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              asChild
            >
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
