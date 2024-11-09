import { HeroScrollDemo } from "@/components/BannerRegister";
import Footer from "@/components/Footer";
import { HeroHighlightDemo } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { PastEvents } from "@/components/PastEvents";
import { UpcomingEvents } from "@/components/UpcomingEvent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <section id="hero">
        <HeroHighlightDemo />
      </section>
      <section id="register">
        <HeroScrollDemo />
      </section>
      <section id="past-events">
        <PastEvents />
      </section>
      <Footer />
    </div>
  );
}
