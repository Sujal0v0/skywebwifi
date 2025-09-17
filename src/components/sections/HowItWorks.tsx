"use client";
import { BarChart3, MapPin, Settings } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// StepCard component
function StepCard({ step, index, sectionRef }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();
  const [scale, setScale] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [inView, controls]);

  useEffect(() => {
    function updateScale() {
      if (!ref.current || !sectionRef.current) return;

      const cardRect = ref.current.getBoundingClientRect();
      const shouldScale = cardRect.bottom <= 700 - index * 10;

      if (shouldScale !== scale) {
        setScale(shouldScale);
      }

      ticking.current = false;
    }

    function handleScroll() {
      lastScrollY.current = window.scrollY;

      if (!ticking.current) {
        requestAnimationFrame(updateScale);
        ticking.current = true;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scale, index, sectionRef]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 50,
        scale: scale ? 0.9 : 1,
      }}
      transition={{
        duration: 0.6,
        scale: { duration: 0.3, ease: "easeOut" },
      }}
      className="sticky flex justify-center mb-6"
      style={{
        top: `${240 + index * 15}px`,
        zIndex: 10 * index,
        backfaceVisibility: "hidden",
        perspective: 1000,
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
  const [addMargin, setAddMargin] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    function updateMargin() {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const shouldAddMargin = rect.bottom <= 1000;

      if (shouldAddMargin !== addMargin) {
        setAddMargin(shouldAddMargin);
      }

      ticking.current = false;
    }

    function handleScroll() {
      lastScrollY.current = window.scrollY;

      if (!ticking.current) {
        requestAnimationFrame(updateMargin);
        ticking.current = true;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [addMargin]);

  return (
    <section className="py-20 pb-12 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="relative">
          <div
            className={`sticky top-32 z-20 text-center transition-all duration-300 ease-out ${
              addMargin ? "mb-[430px]" : "mb-12"
            }`}
            style={{
              backfaceVisibility: "hidden",
              perspective: 1000,
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
              <StepCard
                key={index}
                step={step}
                index={index}
                sectionRef={sectionRef}
              />
            ))}
            <div className="h-[40px] w-80 bg-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
