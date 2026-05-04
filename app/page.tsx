import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Prozess from "@/components/Prozess";
import Leistungen from "@/components/Leistungen";
import TrustZahlen from "@/components/TrustZahlen";
import ServiceGebiet from "@/components/ServiceGebiet";
import UeberMarco from "@/components/UeberMarco";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Prozess />
        <Leistungen />
        <TrustZahlen />
        <ServiceGebiet />
        <UeberMarco />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
