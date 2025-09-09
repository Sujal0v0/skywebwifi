import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Users,
  PawPrint,
  Zap,
  Gift,
  Crown,
  Star,
  Percent,
} from "lucide-react";
import Link from "next/link";

const Rates = () => {
  const baseRates = [
    {
      type: "Daily Rate",
      standard: "$45",
      premium: "$55",
      description: "Perfect for weekend getaways and short trips",
      includes: [
        "Full hookups",
        "WiFi access",
        "Amenity access",
        "Picnic table & fire ring",
      ],
    },
    {
      type: "Weekly Rate",
      standard: "$280",
      premium: "$350",
      description: "Great value for extended stays (7 nights)",
      includes: [
        "All daily inclusions",
        "10% discount",
        "Late checkout available",
        "Complimentary firewood",
      ],
    },
    {
      type: "Monthly Rate",
      standard: "$1,000",
      premium: "$1,300",
      description: "Best value for long-term guests (30 nights)",
      includes: [
        "All weekly inclusions",
        "25% discount",
        "Reserved parking",
        "Priority booking for next month",
      ],
    },
  ];

  const seasonalRates = [
    {
      season: "Peak Season",
      months: "June - August",
      multiplier: "Standard Rates",
      description: "Summer months with perfect weather",
      color: "bg-orange/10 border-orange/20",
    },
    {
      season: "High Season",
      months: "April - May, September - October",
      multiplier: "-15% Off",
      description: "Beautiful spring and fall weather",
      color: "bg-primary/10 border-primary/20",
    },
    {
      season: "Low Season",
      months: "November - March",
      multiplier: "-30% Off",
      description: "Peaceful winter camping experience",
      color: "bg-accent/10 border-accent/20",
    },
  ];

  const extraFees = [
    {
      item: "Additional Guests (over 4)",
      fee: "$5/night per person",
      icon: Users,
    },
    { item: "Pet Fee", fee: "$5/night per pet", icon: PawPrint },
    { item: "50 Amp Electrical", fee: "$3/night extra", icon: Zap },
    { item: "Late Check-out", fee: "$25 (after 2 PM)", icon: Calendar },
  ];

  const promotions = [
    {
      title: "First Time Guest Special",
      discount: "20% Off",
      description: "First-time visitors get 20% off their first stay",
      code: "WELCOME20",
      icon: Gift,
      color: "bg-orange/10",
    },
    {
      title: "Extended Stay Discount",
      discount: "15% Off",
      description: "Stay 14+ nights and save an additional 15%",
      code: "EXTENDED15",
      icon: Calendar,
      color: "bg-primary/10",
    },
    {
      title: "Loyalty Program",
      discount: "Up to 25% Off",
      description: "Return guests earn points for discounts",
      code: "LOYALTY",
      icon: Crown,
      color: "bg-accent/10",
    },
    {
      title: "Military & Senior Discount",
      discount: "10% Off",
      description: "Year-round discount for military and seniors 65+",
      code: "HERO10",
      icon: Star,
      color: "bg-muted",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rates & Pricing
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Competitive rates for premium RV camping experiences
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
              <Percent className="h-4 w-4" />
              <span>
                Multiple discounts available • Book direct for best rates
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Base Rates */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Base Rates
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose from standard or premium sites based on your preferences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {baseRates.map((rate, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-soft transition-shadow"
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{rate.type}</CardTitle>
                  <CardDescription>{rate.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center space-y-2">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        Standard Sites
                      </p>
                      <p className="text-3xl font-bold text-primary">
                        {rate.standard}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        Premium Sites
                      </p>
                      <p className="text-2xl font-semibold text-orange">
                        {rate.premium}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {rate.includes.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Premium sites feature lake views, extra space, and enhanced
              privacy
            </p>
            <Button variant="nature" size="lg" asChild>
              <Link href="/reservations">Check Availability</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Seasonal Pricing */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Seasonal Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Rates vary by season to offer you the best value year-round
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {seasonalRates.map((season, index) => (
              <Card key={index} className={`border-2 ${season.color}`}>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {season.season}
                  </h3>
                  <p className="text-lg font-semibold text-primary mb-2">
                    {season.months}
                  </p>
                  <div className="text-2xl font-bold text-orange mb-3">
                    {season.multiplier}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {season.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center bg-muted/50 p-6 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold mb-2">
              Seasonal Rate Example
            </h3>
            <p className="text-muted-foreground">
              Peak season daily rate: $45 (standard) | High season: $38 | Low
              season: $32
            </p>
          </div>
        </div>
      </section>

      {/* Extra Fees */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Fees
            </h2>
            <p className="text-xl text-muted-foreground">
              Transparent pricing for optional services and add-ons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {extraFees.map((fee, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-soft transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <fee.icon className="h-6 w-6 text-orange" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {fee.item}
                  </h3>
                  <p className="text-lg font-bold text-primary">{fee.fee}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions & Discounts */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Promotions & Discounts
            </h2>
            <p className="text-xl text-muted-foreground">
              Save more with our special offers and loyalty programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {promotions.map((promo, index) => (
              <Card
                key={index}
                className={`border-border hover:shadow-soft transition-shadow ${promo.color}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <promo.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-foreground">
                          {promo.title}
                        </h3>
                        <span className="bg-orange text-orange-foreground px-2 py-1 rounded text-sm font-bold">
                          {promo.discount}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">
                        {promo.description}
                      </p>
                      <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                        <span className="text-xs font-medium text-primary">
                          Code: {promo.code}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">
                  Important Pricing Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>
                      All rates are per night and include up to 4 guests per
                      site
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>
                      Rates subject to availability and may change during
                      special events
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>
                      Discounts cannot be combined unless otherwise specified
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>
                      Holiday and special event rates may apply (Memorial Day,
                      4th of July, Labor Day)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>
                      California state taxes and local fees additional where
                      applicable
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-warm-gradient text-orange-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Your Stay?
          </h2>
          <p className="text-xl mb-8 text-orange-foreground/90 max-w-2xl mx-auto">
            Reserve your site today and take advantage of our competitive rates
            and special offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link href="/reservations">Book Now</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              asChild
            >
              <Link href="/rates/cancellation">Cancellation Policy</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rates;
