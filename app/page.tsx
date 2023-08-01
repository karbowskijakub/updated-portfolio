import Hero from "@/components/Hero";
import About from "@/components/About";
import Technology from "@/components/Technology";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Technology />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
