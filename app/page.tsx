import { Nav } from "@/components/Nav";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyKcg } from "@/components/sections/WhyKcg";
import { Performance } from "@/components/sections/Performance";
import { Team } from "@/components/sections/Team";
import { Leadership } from "@/components/sections/Leadership";
import { Awards } from "@/components/sections/Awards";
import { Partners } from "@/components/sections/Partners";
import { Press } from "@/components/sections/Press";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyKcg />
        <Performance />
        <Team />
        <Leadership />
        <Awards />
        <Partners />
        <Press />
        <Process />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
