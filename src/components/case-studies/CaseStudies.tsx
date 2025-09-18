import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, TrendingUp, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Navy Pier Marina",
      description: "Dock-wide Wi-Fi + cameras, new ad revenue",
      result: "200+ slips, splash page ads, 80% fewer complaints",
      icon: <CheckCircle className="h-5 w-5 text-primary" />,
    },
    {
      title: "Wekiva Falls RV Resort",
      description: "$8,200/month Wi-Fi revenue",
      result: "85% adoption, ROI in <12 months, complaints down 70%",
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
    },
    {
      title: "Evergreen Pines Campground",
      description: "$6,500/month revenue, upsells boosted 15%",
      result: "Complaints down 70%, Good Sam 'A' rating for Wi-Fi",
      icon: <Star className="h-5 w-5 text-primary" />,
    },
    {
      title: "Coastal Pines RV Park",
      description: "ROI in 10 months, complaint reduction",
      result: "Quick ROI, significant reduction in guest complaints",
      icon: <CheckCircle className="h-5 w-5 text-primary" />,
    },
  ];

  const detailedCaseStudies = [
    {
      title: "Wekiva Falls RV Resort",
      image: "/case-studies/weka-falls.jpeg",
      highlight: "The owner made Sky Web an offer...",
      content:
        "He said he would pay us $5000.00 to put our infrastructure in and if it worked after 2 weeks, he would write us a check for the remaining amount. SKYWEB TOOK THE CHALLENGE! After 2 weeks he was ecstatic and wrote us our check. Complaints disappeared and Good Sam's gave them an 'A' rating on their Wi-Fi.",
      category: "RV Resort WIFI",
    },
    {
      title: "Port St. Lucie RV Resort",
      image: "/case-studies/lucie-rv-resort.png",
      highlight: "Hurricane resilience...",
      content:
        "With Hurricane Irma arriving soon we evacuated our RV Park. Before leaving we powered down our access points and disconnected the SkyWeb Gateway and took it with us as we evacuated also. Upon our return we reconnected the Gateway to our ISP and powered it up. Within minutes our Wi-Fi system was back in full service. We could not be happier with SkyWeb.",
      category: "Camping WIFI",
    },
    {
      title: "Mackinaw Mill Creek Camping",
      image: "/case-studies/mackinaw-mill-creek-camping.png",
      highlight: "Transforming gridlocked systems...",
      content:
        "In the summer of 2017, partner Frank Rogala turned to SkyWeb to help find a solution to their existing system. SkyWeb worked with the park utilizing their existing infrastructure and adding in new equipment in the weak coverage areas to transform the once gridlocked system into a solid network providing service across the park.",
      category: "Camping WIFI",
    },
    {
      title: "River Run RV Campground",
      image: "/case-studies/river-run-rv-campground.png",
      highlight: "Simple installation, ongoing revenue...",
      content:
        "We are extremely satisfied with SkyWeb. Installation was quick and did not interfere with the daily operation of our business. The pay portal makes selling access simple. SkyWeb does all the work, we just collect the checks, and the revenue generated has offset the cost of installing the system and will provide a source of income into the future.",
      category: "RV Campground",
    },
    {
      title: "Lake of Dreams RV Camping",
      image: "/case-studies/lake-of-dreams-rv-camping.png",
      highlight: "Reliable connectivity with limited bandwidth...",
      content:
        "The key to Skyweb Network's success at Lake of Dreams is the ability to still provide a clear and reliable connection in parks where bandwidth availability is low. Skyweb's advanced front end software works to enhance the existing connection to meet the needs of the park. More than 50% of the parks we service run off 50 Mbps of bandwidth or less.",
      category: "RV Camping",
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header Section */}

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            From Complaints to Compliments
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover how SkyWeb transformed these properties with reliable Wi-Fi
            solutions
          </p>
        </div>

        {/* Summary Tiles */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-soft transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    {study.icon}
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {study.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-3">
                  {study.description}
                </p>
                <div className="text-xs bg-muted/50 p-3 rounded-md">
                  <span className="font-medium">Result:</span> {study.result}
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* Detailed Case Studies */}
        <div className="mb-16">
          <div className="mx-auto grid grid-cols-2 gap-6">
            {detailedCaseStudies.map((study, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-soft transition-shadow"
              >
                <Image
                  src={study.image}
                  alt={study.title}
                  width={800}
                  height={800}
                  className="w-full aspect-video"
                />
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full text-xs font-medium text-primary mb-4">
                        {study.category}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{study.title}</h3>
                      <p className="text-muted-foreground mb-4 italic">
                        {study.highlight}
                      </p>
                      <p className="text-foreground">{study.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
