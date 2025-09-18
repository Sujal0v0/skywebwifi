import { BarChart3, DollarSign, Palette } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

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
    <>
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Splash Pages & Branding
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Fast, secure Wi-Fi that keeps guests connected and turns your
              network into a profit center
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Wi-Fi. Your Brand
            </h2>
            <p className="text-xl text-muted-foreground">
              Every guest connects through a login portal branded for your
              property
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center mb-16">
            {splashPageServices.map((service, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-soft transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-start gap-4">
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
      </section>
      <section>
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Branded Guest Login Portal
            </h2>
            <p className="text-xl text-muted-foreground">
              Engage your guests through a fully branded login portal tailored
              for your property.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
            {/* Text Content */}
            <div className="space-y-6 text-foreground max-w-xl">
              <p className="text-lg md:text-xl">
                Welcome your guests with a{" "}
                <span className="font-bold text-primary">
                  fully branded login portal
                </span>
                , tailor-made for your campground. Guests can sign up instantly
                and enjoy Wi-Fi with no wait time !
              </p>

              <ul className="list-inside space-y-3 text-lg">
                <li>
                  <span className="font-semibold text-primary">
                    Campground Logo:
                  </span>{" "}
                  Showcase your brand for a professional experience
                </li>
                <li>
                  <span className="font-semibold text-primary">
                    Free Access:
                  </span>{" "}
                  Quick and seamless connectivity for your guests
                </li>
                <li>
                  <span className="font-semibold text-primary">
                    Paid Access:
                  </span>{" "}
                  Monetize your network effortlessly
                </li>
                <li>
                  <span className="font-semibold text-primary">
                    Fully Branded Login Pages:
                  </span>{" "}
                  Maintain your property's unique identity
                </li>
                <li>
                  <span className="font-semibold text-primary">
                    Customer Support:
                  </span>{" "}
                  Dedicated assistance whenever needed
                </li>
              </ul>
            </div>

            {/* Image */}
            <Image
              src={"/services/customer-portal.png"}
              alt="Customer Portal"
              width={700}
              height={700}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
