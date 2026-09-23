import Banner from "@/components/Homepage/Banner";
import CravingCTA from "@/components/Homepage/CravingCTA";
import ExploreCategories from "@/components/Homepage/ExploreCategories";
import FeaturedFood from "@/components/Homepage/FeaturedFood";
import PopularToady from "@/components/Homepage/PopularToady";
import WhyCravora from "@/components/Homepage/WhyCravora";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <FeaturedFood />
      <PopularToady />
      <ExploreCategories />
      <WhyCravora />
      <CravingCTA />
    </>
  );
}
