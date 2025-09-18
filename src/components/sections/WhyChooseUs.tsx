"use client";

import React from "react";
import {
  Cloud,
  Wifi,
  Award,
  Smartphone,
  Users,
  DollarSign,
  Monitor,
} from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "24-Hours Cloud Based Monitoring Services",
      icon: Cloud,
      image: "/whychooseus/phone-24h.svg",
    },
    {
      title: "Customized WIFI Portal and Splash Page",
      icon: Wifi,
      image: "/whychooseus/wifi.svg",
    },
    {
      title: "Custom Built Network for each property",
      icon: Award,
      image: "/whychooseus/network-analytic.svg",
    },
    {
      title: "Satisfaction Guaranteed!",
      icon: Award,
      image: "/whychooseus/badge-check.svg",
    },
    {
      title: "Phone and Text Alerts for Outage and Notification",
      icon: Smartphone,
      image: "/whychooseus/bell-notification-social-media.svg",
    },
    {
      title: "Hands on Management Training and Support",
      icon: Users,
      image: "/whychooseus/chart-user.svg",
    },
    {
      title: "Managed Service and Generate Revenue",
      icon: DollarSign,
      image: "/whychooseus/usd-circle.svg",
    },
    {
      title: "Streaming capability even during busy holidays!",
      icon: Monitor,
      image: "/whychooseus/screen.svg",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="why-choose-us">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              WHY OUR <span className="text-primary">WIFI SOLUTIONS</span>{" "}
              <br />
              ARE RIGHT FOR YOU?
            </h2>
          </motion.div>

          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We are WIFI Solution Providers. Unmatched by any of our competitors,
            have peace of mind knowing your equipment and installation are
            covered.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex gap-3 items-center text-center p-6 rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.05)] transition-shadow duration-300 bg-white border-gray-100 border"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={60}
                height={60}
                className="w-12 h-12"
              />
              <h3 className="text-md font-semibold text-gray-800">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
