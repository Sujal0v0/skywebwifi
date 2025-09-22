import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-20 bg-hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's Build Your Wi-Fi & Revenue Plan
        </h2>
        <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
          Join 600+ properties generating new revenue while providing
          exceptional guest experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="cta" size="lg" asChild>
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            asChild
          >
            <Link href="/about">About Our Company</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
