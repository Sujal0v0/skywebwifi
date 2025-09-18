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

const Pricing = () => {
  const baseRates = [
    {
      type: "100 Sites",
      standard: "$1,500/month",
      premium: "$3,000/month",
      description: "Perfect for small to medium properties",
      includes: [
        "Full system installation",
        "Network management",
        "Customer support",
        "Basic maintenance",
      ],
    },
    {
      type: "200 Sites",
      standard: "$3,500/month",
      premium: "$7,000/month",
      description: "Ideal for larger properties and resorts",
      includes: [
        "All 100-site features",
        "Enhanced bandwidth",
        "Priority support",
        "Advanced analytics",
      ],
    },
    {
      type: "300+ Sites",
      standard: "$8,000/month",
      premium: "$10,000+/month",
      description: "Enterprise solution for largest properties",
      includes: [
        "All 200-site features",
        "Dedicated account manager",
        "Custom branding",
        "24/7 premium support",
      ],
    },
  ];

  const ownershipOptions = [
    {
      option: "Ownership",
      description: "Own your system, keep 100% of revenue",
      icon: Crown,
      color: "bg-primary/10 border-primary/20",
    },
    {
      option: "Hosted",
      description: "No upfront cost, revenue-sharing model",
      icon: Users,
      color: "bg-primary/10 border-primary/20",
    },
    {
      option: "Financing",
      description: "Spread payments while earning revenue",
      icon: Percent,
      color: "bg-primary/10 border-primary/20",
    },
  ];

  const extraFees = [
    {
      item: "Custom Branding",
      fee: "One-time $500",
      icon: Star,
    },
    { item: "Premium Support", fee: "$200/month", icon: Zap },
    { item: "Advanced Analytics", fee: "$150/month", icon: Calendar },
    { item: "Extended Warranty", fee: "$100/month", icon: Gift },
  ];

  const promotions = [
    {
      title: "First Time Installation",
      discount: "15% Off",
      description: "New customers get 15% off initial setup",
      code: "WELCOME15",
      icon: Gift,
      color: "bg-primary/10",
    },
    {
      title: "Multi-Property Discount",
      discount: "20% Off",
      description: "Manage multiple properties? Save 20%",
      code: "MULTI20",
      icon: Crown,
      color: "bg-primary/10",
    },
    {
      title: "Annual Contract",
      discount: "10% Off",
      description: "Sign a yearly contract for 10% savings",
      code: "ANNUAL10",
      icon: Calendar,
      color: "bg-primary/10",
    },
    {
      title: "Non-Profit Organization",
      discount: "25% Off",
      description: "Special pricing for non-profit organizations",
      code: "NONPROFIT25",
      icon: Star,
      color: "bg-primary/10",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pricing & Packages
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Flexible Options for Every Property
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
              <Percent className="h-4 w-4" />
              <span>
                Multiple options available • Buy, finance, or let us host
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
              Revenue Potential
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose from standard or premium packages based on your property
              size
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
                        Standard Package
                      </p>
                      <p className="text-3xl font-bold text-primary">
                        {rate.standard}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        Premium Package
                      </p>
                      <p className="text-2xl font-semibold text-secondary">
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
              Premium packages include enhanced features and priority support
            </p>
            <Button variant="nature" size="lg" asChild>
              <Link href="/contact">Request a Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ownership Options */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ownership Options
            </h2>
            <p className="text-xl text-muted-foreground">
              You choose how you want to work with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ownershipOptions.map((option, index) => (
              <Card key={index} className={`border-2 ${option.color}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <option.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {option.option}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {option.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Fees */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Enhance your package with these optional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {extraFees.map((fee, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-soft transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <fee.icon className="h-6 w-6 text-primary" />
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
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Promotions & Discounts
            </h2>
            <p className="text-xl text-muted-foreground">
              Save more with our special offers
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
                        <span className="bg-secondary text-white px-2 py-1 rounded text-sm font-bold">
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
                <CardTitle className="text-xl">Important Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>
                      All pricing estimates based on standard configurations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>
                      Final pricing may vary based on property specifics and
                      requirements
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
                      Installation fees may apply for custom configurations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Taxes additional where applicable</span>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-orange-foreground/90 max-w-2xl mx-auto">
            Contact us today for a custom quote tailored to your property's
            specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              asChild
            >
              <Link href="/solutions">View Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
