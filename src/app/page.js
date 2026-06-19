import CustomerReviews from "@/components/CustomerReviews";
import FeaturedPrompts from "@/components/FeaturedPrompts";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import TopCreators from "@/components/TopCreators";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <>
    <Hero/>
    <FeaturedPrompts/>
    <WhyChooseUs/>
    <TopCreators/>
    <CustomerReviews/>
    <HowItWorks/>
    </>
  );
}
