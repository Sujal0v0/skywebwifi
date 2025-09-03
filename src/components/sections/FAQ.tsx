import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Do you accept pets?',
      answer: 'Yes! We welcome well-behaved pets. We have a $5 per night pet fee and require pets to be leashed at all times. We also have a dedicated dog park area.'
    },
    {
      question: 'What hookups are available?',
      answer: 'All sites include full hookups: 30/50 amp electrical service, fresh water, and sewer connections. We also provide free WiFi throughout the park.'
    },
    {
      question: 'Is there a minimum stay requirement?',
      answer: 'During peak season (May-September), we have a 3-night minimum on weekends. Off-season has no minimum stay requirements.'
    },
    {
      question: 'What are your check-in and check-out times?',
      answer: 'Check-in is from 2:00 PM to 8:00 PM. Check-out is by 11:00 AM. Early check-in and late check-out may be available upon request.'
    },
    {
      question: 'Do you have monthly rates?',
      answer: 'Yes! We offer competitive monthly rates for extended stays. Please contact us directly for monthly pricing and availability.'
    }
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