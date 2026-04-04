import { Hero } from "@/components/Hero";
import { BentoSignal } from "@/components/BentoSignal";
import { TechRails } from "@/components/TechRails";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <BentoSignal />
      <TechRails />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
