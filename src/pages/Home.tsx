import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import HowItWorks from "@/components/sections/HowItWorks";
import BenefitsSection from "@/components/sections/BenefitsSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <BenefitsSection />
      <Testimonials />
      <FAQ />
      <CTASection />
    </div>
  );
};

export default Home;
