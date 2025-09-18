import { BarChart3, DollarSign, Palette } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

export default function SplashPage() {
  const splashPageServices = [
    {
      icon: Palette,
      title: "Custom Branding",
      description:
        "Create a seamless brand experience from the moment guests connect.",
      details: [
        "Your logo, colors, and branding",
        "Customized welcome messages",
        "Property-specific imagery",
        "Consistent guest experience",
      ],
    },
    {
      icon: DollarSign,
      title: "Sponsorship Opportunities",
      description:
        "Generate additional revenue through local business sponsorships.",
      details: [
        "Local business ads on login portal",
        "Sponsorship packages",
        "Featured promotions",
        "Revenue sharing options",
      ],
    },
    {
      icon: BarChart3,
      title: "Marketing Integration",
      description:
        "Capture guest data and promote your property's amenities and events.",
      details: [
        "Guest data capture for marketing",
        "Promote rentals and activities",
        "Event announcements",
        "Email collection for newsletters",
      ],
    },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Splash Pages & Branding
          </h2>
          <p className="text-xl text-muted-foreground">
            Your Wi-Fi. Your Brand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={"/assets/splash-pages.jpg"}
              alt="Splash page examples"
              className="w-full h-96 object-cover rounded-lg shadow-medium"
            />
          </div>
          <div className="grid grid-cols-1 gap-6">
            {splashPageServices.map((service, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-soft transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
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

        <div className="text-center mt-12">
          <Button variant="nature" size="lg" asChild>
            <Link href="/splash-demos">View Splash Page Demos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
