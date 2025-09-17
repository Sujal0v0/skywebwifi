import { BarChart3, MapPin, Settings } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export default function HowItWorks() {
  const steps = [
    {
      icon: MapPin,
      title: "Design & Install",
      description: "Coverage maps and hardware tailored to your property",
    },
    {
      icon: Settings,
      title: "Branded Splash Portal",
      description: "Guests log in through your custom portal",
    },
    {
      icon: BarChart3,
      title: "Manage, Monitor & Monetize",
      description: "24/7 support + revenue dashboards",
    },
  ];

  return (
    <section className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your property's connectivity and
            revenue
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-soft transition-shadow text-center"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
