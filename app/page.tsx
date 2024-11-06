import { HeroScrollDemo } from "@/components/BannerRegister";
import { HeroHighlightDemo } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <HeroHighlightDemo/>
      <HeroScrollDemo/>
    </div>
  );
}
