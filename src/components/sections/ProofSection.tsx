import { Shield, Users } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

export default function ProofSection() {
  const clients = [
    { name: "Navy Pier Marina", image: "/clients/navy-pier-marina-logo.png" },
    { name: "Thousand Trails", image: "/clients/thousand-trails-logo.png" },
    { name: "KOA", image: "/clients/koa.png" },
    {
      name: "Advanced Outdoor Solution",
      image: "/clients/advanced-outdoor-solutions-logo.png",
    },
    {
      name: "Arizona Association of RV Parks and Campgrounds",
      image: "/clients/arizona-association-logo.webp",
    },
    { name: "ARVC", image: "/clients/arvc-logo.png" },
    { name: "DNR", image: "/clients/dnr-logo.png" },
    {
      name: "Jelly Park Camp Resort",
      image: "/clients/jelly-park-camp-resort-logo.png",
    },
    { name: "Michigan ARVC", image: "/clients/mi-arvc-logo.png" },
    {
      name: "M.Shapiro Real Estate Group",
      image: "/clients/mshapiro-logo.avif",
    },
    { name: "NCA", image: "/clients/nca-logo.png" },
    { name: "Taco Members", image: "/clients/tacomembers-logo.png" },
  ];
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by industry leaders for quality and reliability.
          </p>
          {/* Client Logos */}
          <div className="flex justify-center items-center gap-x-12 gap-y-16 my-12 flex-wrap">
            {clients.map((client, index) => {
              return (
                <Image
                  key={index}
                  src={client.image}
                  alt={client.name}
                  width={300}
                  height={300}
                  className="h-32 w-auto"
                />
              );
            })}
          </div>

          {/* Trust Badges */}
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <Card className="border-border hover:shadow-soft transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">
                    30-Day Guarantee
                  </h3>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-soft transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">
                    800+ Properties Served
                  </h3>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
