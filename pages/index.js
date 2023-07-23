import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import About from "@/components/About";
import Call from "@/components/Call";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Products from "@/components/Products";
import Functionality from "@/components/Functionality";
import chambres from "@/assets/img/tenues-de-travail/chambre.jpg";

import impression_grands_formats from "@/assets/img/impression-grands-formats/kitchen_1920.jpg";
import Team from "@/components/Team";
const slides=[
  {
    image: impression_grands_formats,
    title: "Avatar: The Way of Water",
    subTitle: "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    interval: 1500
  },
  {
    image: chambres,
    title: "Black Adam",
    subTitle: "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    interval: 500
  },
  {
    image: impression_grands_formats,
    title: "Black Panther: Wakanda Forever",
    subTitle: "Queen Ramonda, Shuri, M&#39;Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T&#39;Challa&#39;s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    interval: 2500
  }
]
export default function Home() {
  return (
    <>
      <Hero slides={slides} />
      <main id="main">
      <Products/>
        <Featured />
        <About />
        
        <Functionality/>
        <Call />
        <Features />
        <Pricing />
        {/* <Testimonials /> */}
        {/* <Faq /> */}
        <Team/>
      </main>
    </>
  );
}
