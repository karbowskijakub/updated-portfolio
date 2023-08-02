import Hero from "@/components/Hero";
import About from "@/components/About";
import Technology from "@/components/Technology";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Info from "@/components/Info";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Technology />
      <Services />
      <Portfolio />
      <Contact />
      <Info />
      <Footer />
    </main>
  );
}
