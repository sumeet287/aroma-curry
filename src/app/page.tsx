import Hero from "@/components/Hero";
import FeaturedDishes from "@/components/FeaturedDishes";
import Testimonials from "@/components/Testimonials";
import ReserveBadge from "@/components/ReserveBadge";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedDishes />
      <Testimonials />
      <ReserveBadge />
      <WhyChooseUs />
      <Gallery />
    </div>
  );
}
