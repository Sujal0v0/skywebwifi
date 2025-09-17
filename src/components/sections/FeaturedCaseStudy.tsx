import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

export default function FeaturedCaseStudy() {
  return (
    <section className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="border-border shadow-soft">
            <CardContent className="p-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Navy Pier Marina: Seamless WiFi Across 200+ Slips
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    SkyWeb delivered full marina coverage, added dock cameras,
                    and created a splash page generating ongoing ad revenue.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      200+
                    </div>
                    <div className="text-muted-foreground">Slips Covered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      100%
                    </div>
                    <div className="text-muted-foreground">Coverage Area</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      $8K
                    </div>
                    <div className="text-muted-foreground">
                      Monthly Ad Revenue
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Button variant="default" size="lg" asChild>
                    <Link href="/case-studies/navy-pier-marina">
                      Read the Full Story
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src={"/case-study.png"}
                alt="Case Study"
                width={1400}
                height={1400}
                className="h-full w-full object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
