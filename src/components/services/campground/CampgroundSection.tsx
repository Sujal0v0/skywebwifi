import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CampgroundSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 lg:gap-20">
          {/* Content Half */}
          <div className="flex-1 space-y-8 max-w-md mx-auto">
            <div className="space-y-6">
              <h1 className="text-2xl lg:text-3xl font-semibold text-foreground text-balance">
                Next-Level <span className="text-primary">Wi-Fi</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-lg">
                AI-powered wireless solutions with guaranteed reliability and
                24/7 support.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>100% Guaranteed Service</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Custom Network Design</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>24/7 Cloud Monitoring</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/80"
                asChild
              >
                <Link href={"/contact"}>Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Image Half */}
          <div className="flex-1">
            <div className="relative">
              <Image
                width={700}
                height={700}
                src="/services/FairPointMarinaHMoverlay.jpg"
                alt="Advanced Wi-Fi Infrastructure"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
