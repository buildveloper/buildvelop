import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Services } from "@/components/sections/services";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { KineticRibbon } from "@/components/ui/kinetic-ribbon";
import { Showcase } from "@/components/sections/showcase";
import { Impact } from "@/components/sections/impact";
import { Process } from "@/components/sections/process";
import { Experience } from "@/components/sections/experience";
import { Tools } from "@/components/sections/tools";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <FeaturedProducts />
      <KineticRibbon />
      <Showcase />
      <Impact />
      <Process />
      <Experience />
      <Tools />
      <Contact />
    </>
  );
}
