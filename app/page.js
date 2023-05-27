import Hero from "./components/Hero";
import Featured from "./components/Featured";
import About from "./components/About";
import Cta from "./components/Cta";
import Focus from "./components/Focus";
import Features from "./components/Features";
import Services from "./components/Products";
import Pricing from "./components/Pricing";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Team from "./components/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="">
        <Featured />
        <About />
        <Cta />
        <Focus />
        <Features />
        <Services />
        <Pricing />
        <Portfolio />
        <Team />
        <Contact />
      </main>
    </>
  );
}
