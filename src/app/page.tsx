import Hero from "@/components/Hero";
import FeaturedDishes from "@/components/FeaturedDishes";
import Testimonials from "@/components/Testimonials";
import ReserveBadge from "@/components/ReserveBadge"; // 👈 Add this
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <Testimonials />
      <ReserveBadge /> {/* 👈 Add this */}
      <WhyChooseUs/>
      <Gallery/>
    </>
  );
}
