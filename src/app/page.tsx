import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Services } from "@/components/sections/services";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
