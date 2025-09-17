"use client";
import { BarChart3, MapPin, Settings } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// StepCard component
function StepCard({ step, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1, once: false });
  const [scrollProgress, setScrollProgress] = useState(0);
  const isFirstCard = index === 0;

  useEffect(() => {
    if (isFirstCard) return; // Skip intersection observer for first card

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rect = entry.boundingClientRect;
            const viewportHeight = window.innerHeight;
            const elementTop = rect.top;
            const elementHeight = rect.height;

            // Calculate progress based on element position
            const progress = Math.max(
              0,
              Math.min(
                1,
                (viewportHeight - elementTop) / (viewportHeight + elementHeight)
              )
            );

            setScrollProgress(progress);
          }
        });
      },
      {
        threshold: Array.from({ length: 21 }, (_, i) => i / 20), // More granular thresholds
        rootMargin: "0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isFirstCard]);

  const scale = scrollProgress > 0.8 ? 0.9 + (1 - scrollProgress) * 0.5 : 1;

  return (
    <div
      ref={ref}
      className={`sticky flex justify-center mb-6 ${isFirstCard ? "mt-0" : ""}`}
      style={{
        top: `${240 + index * 15}px`,
        zIndex: 10 + index, // Forward z-index for proper stacking
      }}
    >
      <motion.div
        initial={isFirstCard ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        animate={
          isFirstCard
            ? { opacity: 1, y: 0 }
            : {
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 50,
              }
        }
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          scale: isFirstCard ? 1 : scale,
          transition: isFirstCard ? "none" : "scale 0.2s ease-out",
        }}
      >
        <Card className="w-full max-w-5xl border-border shadow-lg">
          <CardContent className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center justify-center">
              <div className="flex gap-3 items-center mb-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-bold text-primary text-3xl">
                    {index + 1}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-xl text-foreground pb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
            <Image
              src={step.image}
              alt={step.title}
              width={800}
              height={800}
              className="h-full w-full object-cover"
            />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default function HowItWorks() {
  const steps = [
    {
      icon: MapPin,
      title: "Design & Install",
      description: "Coverage maps and hardware tailored to your property",
      image: "/steps/step-1.png",
    },
    {
      icon: Settings,
      title: "Branded Splash Portal",
      description: "Guests log in through your custom portal",
      image: "/steps/step-2.png",
    },
    {
      icon: BarChart3,
      title: "Manage, Monitor & Monetize",
      description: "24/7 support + revenue dashboards",
      image: "/steps/step-3.png",
    },
  ];

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const [isHeaderStuck, setIsHeaderStuck] = useState(false);

  useEffect(() => {
    const headerElement = headerRef.current;
    const sectionElement = sectionRef.current;
    if (!headerElement || !sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When section is about to leave viewport, add margin
          setIsHeaderStuck(entry.intersectionRatio < 0.3);
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
        rootMargin: "-800px 0px 0px 0px", // Trigger when section is 800px from top
      }
    );

    observer.observe(sectionElement);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 pb-12 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="relative">
          <div
            ref={headerRef}
            className="sticky top-32 z-20 text-center"
            style={{
              marginBottom: isHeaderStuck ? "430px" : "12px",
              transition: "margin-bottom 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to transform your property's connectivity and
              revenue
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
            <div className="h-[40px] w-80 bg-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
