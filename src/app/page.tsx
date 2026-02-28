import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import CEOVision from "@/components/CEOVision";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ProjectsDelivered from "@/components/ProjectsDelivered";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import ClientTestimonial from "@/components/ClientTestimonial";
import Facts from "@/components/Facts";
import HSEPerformance from "@/components/HSEPerformance";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <CEOVision />
        <Services />
        <Facts />
        <HSEPerformance />
        <Projects />
        <ProjectsDelivered />
        <WhyChoose/>
        <Gallery />
        <ClientTestimonial />
      </main>
      <Footer />
    </>
  );
}
