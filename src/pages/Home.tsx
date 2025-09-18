import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import HowItWorks from "@/components/sections/HowItWorks";
import BenefitsSection from "@/components/sections/BenefitsSection";
import FeaturedCaseStudy from "@/components/sections/FeaturedCaseStudy";
import ProofSection from "@/components/sections/ProofSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <BenefitsSection />
      <HowItWorks />
      <FeaturedCaseStudy />
      <ProofSection />
      <Testimonials />
      <FAQ />
      <CTASection />
    </div>
  );
};

export default Home;
