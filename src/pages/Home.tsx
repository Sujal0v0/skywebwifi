import Hero from "@/components/sections/Hero";
import AmenitiesHighlight from "@/components/sections/AmenitiesHighlight";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";

const Home = () => {
  return (
    <div>
      <Hero />
      <AmenitiesHighlight />
      <Testimonials />
      <FAQ />
      <CTASection />
    </div>
  );
};

export default Home;