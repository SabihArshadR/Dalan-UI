import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import ClientTestimonial from "@/components/ClientTestimonial";
import Facts from "@/components/Facts";
import Tutorial from "@/components/Tutorial";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Facts />
        <Projects />
        <WhyChoose/>
        <Tutorial />
        <Gallery />
        <ClientTestimonial />
      </main>
      <Footer />
    </>
  );
}
