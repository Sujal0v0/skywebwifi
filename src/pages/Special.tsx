import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Gift,
  Percent,
  Star,
  Crown,
  Calendar,
  Users,
  Heart,
  Trophy,
  Clock,
  Tag,
} from "lucide-react";
import Link from "next/link";

const Special = () => {
  const currentOffers = [
    {
      title: "Early Bird Spring Special",
      discount: "25% Off",
      validUntil: "March 31, 2024",
      description: "Book your spring getaway early and save big on your stay",
      code: "SPRING25",
      icon: Gift,
      color: "bg-green-500/10",
      terms: [
        "Valid for stays April 1 - May 31",
        "Must book by March 31",
        "Minimum 3-night stay",
      ],
      category: "Seasonal",
    },
    {
      title: "Extended Stay Discount",
      discount: "20% Off",
      validUntil: "Year Round",
      description: "Stay 2 weeks or more and enjoy significant savings",
      code: "EXTENDED20",
      icon: Calendar,
      color: "bg-primary/10",
      terms: [
        "14+ night minimum stay",
        "Cannot combine with other offers",
        "Valid on standard sites",
      ],
      category: "Long Stay",
    },
    {
      title: "Military & First Responder",
      discount: "15% Off",
      validUntil: "Year Round",
      description: "Thank you for your service - enjoy special pricing",
      code: "HERO15",
      icon: Star,
      color: "bg-orange/10",
      terms: [
        "Valid ID required",
        "Active or retired service",
        "Year-round availability",
      ],
      category: "Military",
    },
    {
      title: "Senior Discount",
      discount: "10% Off",
      validUntil: "Year Round",
      description: "Guests 65+ enjoy everyday savings on their stay",
      code: "SENIOR10",
      icon: Heart,
      color: "bg-accent/10",
      terms: [
        "65+ years of age",
        "Valid ID required at check-in",
        "All site types eligible",
      ],
      category: "Senior",
    },
  ];

  const specialPackages = [
    {
      title: "Romance Package",
      price: "Starting at $199",
      description: "Perfect romantic getaway with special amenities",
      includes: [
        "Premium lakeside site",
        "Champagne & chocolates",
        "Late checkout",
        "Candlelit dinner",
      ],
      icon: Heart,
      color: "bg-pink-500/10",
    },
    {
      title: "Family Fun Package",
      price: "Starting at $159",
      description: "Everything your family needs for an amazing vacation",
      includes: [
        "Family-friendly site",
        "Activity passes",
        "Playground access",
        "S'mores kit",
      ],
      icon: Users,
      color: "bg-blue-500/10",
    },
    {
      title: "Adventure Package",
      price: "Starting at $179",
      description: "For outdoor enthusiasts seeking excitement",
      includes: [
        "Trail maps",
        "Hiking gear rental",
        "Guided nature walk",
        "Adventure checklist",
      ],
      icon: Trophy,
      color: "bg-green-500/10",
    },
  ];

  const loyaltyProgram = {
    tiers: [
      {
        name: "Explorer",
        nights: "1-9 nights",
        benefits: [
          "10% discount on extended stays",
          "Early check-in when available",
          "Birthday discount",
        ],
        color: "text-blue-600",
      },
      {
        name: "Adventurer",
        nights: "10-24 nights",
        benefits: [
          "15% discount on future stays",
          "Site upgrade priority",
          "Late checkout",
          "Exclusive offers",
        ],
        color: "text-orange-600",
      },
      {
        name: "Champion",
        nights: "25+ nights",
        benefits: [
          "20% discount on all stays",
          "Best site guarantee",
          "VIP treatment",
          "Referral bonuses",
        ],
        color: "text-purple-600",
      },
    ],
  };

  const seasonalPromotions = [
    {
      season: "Spring Special",
      period: "March - May",
      offer: "Book 2 Get 1 Free",
      description: "Book two nights and get the third night absolutely free",
      validDates: "Sundays - Thursdays only",
    },
    {
      season: "Summer Savings",
      period: "June - August",
      offer: "Kids Stay Free",
      description: "Children under 12 stay free with paying adults",
      validDates: "All weekdays",
    },
    {
      season: "Fall Getaway",
      period: "September - November",
      offer: "30% Off Weekdays",
      description: "Enjoy spectacular fall colors with weekday discounts",
      validDates: "Monday - Thursday",
    },
    {
      season: "Winter Retreat",
      period: "December - February",
      offer: "Extended Stay Deals",
      description: "Weekly rates starting at just $200 for standard sites",
      validDates: "Minimum 7-night stay",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Special Offers & Discounts
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Save more on your Pine Ridge RV Resort experience
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
              <Percent className="h-4 w-4" />
              <span>
                Year-Round Savings • Exclusive Packages • Loyalty Rewards
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Current Offers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Current Special Offers
            </h2>
            <p className="text-xl text-muted-foreground">
              Take advantage of these limited-time discounts and promotions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {currentOffers.map((offer, index) => (
              <Card
                key={index}
                className={`border-border hover:shadow-soft transition-shadow ${offer.color}`}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <offer.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">{offer.title}</CardTitle>
                        <span className="bg-orange text-orange-foreground px-3 py-1 rounded-full text-sm font-bold">
                          {offer.discount}
                        </span>
                      </div>
                      <CardDescription>{offer.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Tag className="h-4 w-4 text-primary" />
                      <span className="font-medium text-sm">
                        Code: {offer.code}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Valid until {offer.validUntil}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Terms & Conditions:</h4>
                    <ul className="space-y-1">
                      {offer.terms.map((term, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {term}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Packages */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Special Packages
            </h2>
            <p className="text-xl text-muted-foreground">
              Curated experiences designed for memorable stays
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {specialPackages.map((package_, index) => (
              <Card
                key={index}
                className={`border-border text-center ${package_.color}`}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <package_.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{package_.title}</CardTitle>
                  <div className="text-2xl font-bold text-orange">
                    {package_.price}
                  </div>
                  <CardDescription>{package_.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold mb-3">Package Includes:</h4>
                    <ul className="space-y-2">
                      {package_.includes.map((item, idx) => (
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
        </div>
      </section>

      {/* Loyalty Program */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pine Ridge Loyalty Program
            </h2>
            <p className="text-xl text-muted-foreground">
              Earn rewards and exclusive benefits the more you stay with us
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {loyaltyProgram.tiers.map((tier, index) => (
                <Card key={index} className="border-border text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Crown className={`h-8 w-8 ${tier.color}`} />
                    </div>
                    <CardTitle className={`text-xl ${tier.color}`}>
                      {tier.name}
                    </CardTitle>
                    <CardDescription>{tier.nights}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-primary/20 text-center">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">How It Works</h3>
                <p className="text-muted-foreground">
                  Loyalty tiers are based on total nights stayed with us.
                  Benefits apply immediately upon reaching each tier and are
                  valid for one year from your last stay. Join automatically
                  upon your first reservation!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seasonal Promotions */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Seasonal Promotions
            </h2>
            <p className="text-xl text-muted-foreground">
              Year-round savings opportunities for every season
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {seasonalPromotions.map((promo, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{promo.season}</CardTitle>
                      <CardDescription>{promo.period}</CardDescription>
                    </div>
                    <span className="bg-orange text-orange-foreground px-3 py-1 rounded-full text-sm font-bold">
                      {promo.offer}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">{promo.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="font-medium">{promo.validDates}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">
                  Important Terms & Conditions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>
                      All offers subject to availability and blackout dates may
                      apply
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>
                      Discounts cannot be combined unless specifically stated
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>
                      Valid ID required for age-based or service-based discounts
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>
                      Promotional rates exclude taxes and fees unless otherwise
                      noted
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>
                      Pine Ridge RV Resort reserves the right to modify or
                      discontinue offers at any time
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
            Ready to Save Big?
          </h2>
          <p className="text-xl mb-8 text-orange-foreground/90 max-w-2xl mx-auto">
            Book now and take advantage of these exclusive offers and discounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link href="/reservations">Book with Discount</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              asChild
            >
              <Link href="/amenities">View All Amenities</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Special;
