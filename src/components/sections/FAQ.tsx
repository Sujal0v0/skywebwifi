"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [
    {
      question: "How long does installation take?",
      answer:
        "Most installations are completed within 2-3 days, depending on property size. We handle all permitting and work around your guest schedules.",
    },
    {
      question: "What kind of revenue can I expect?",
      answer:
        "Properties typically generate $5k-$10k monthly through splash page advertising, premium WiFi tiers, and partner promotions. Revenue varies by location and traffic.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes! We offer 24/7 monitoring and support. Our team proactively manages your system and fixes issues before guests notice problems.",
    },
    {
      question: "Can you integrate with existing systems?",
      answer:
        "Absolutely. We work with your current infrastructure and can integrate with property management systems, security cameras, and other technology.",
    },
    {
      question: "What's included in the 30-day guarantee?",
      answer:
        "If you're not completely satisfied within 30 days, we'll work with you to resolve any issues or remove the system at no cost.",
    },
  ];

  return (
    <section className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Quick answers to common questions
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Card key={index} className="mb-4">
              <CardHeader
                className="cursor-pointer hover:bg-muted/50 transition-colors py-4"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </CardHeader>
              {openFaq === index && (
                <CardContent>
                  <p className="text-muted-foreground pt-4">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
