import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Clock, ShieldCheck, DollarSign, Smile } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const BenefitsSection = () => {
  const benefits = [
    {
      icon: Smile,
      title: "Guest Satisfaction",
      description: "Happier guests & better reviews.",
    },
    {
      icon: DollarSign,
      title: "New Revenue",
      description: "$5k–$10k/month potential.",
    },
    {
      icon: ShieldCheck,
      title: "Cameras & Security",
      description: "Safer properties.",
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Problems fixed before guests notice.",
    },
  ];

  return (
    <section className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            More Than Just Wi-Fi
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete connectivity solutions that enhance guest experience and
            boost your bottom line
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="h-full">
            <Image
              src={"/assets/amenities.jpg"}
              alt="Modern campground facilities"
              width={1400}
              height={933}
              className="w-full h-full object-cover rounded-lg shadow-medium"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((amenity, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-soft transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <amenity.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">
                      {amenity.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
            <div className="col-span-1 md:col-span-2 text-center mx-auto mt-4">
              <Button variant="nature" size="lg" asChild>
                <Link href="/amenities">See Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
