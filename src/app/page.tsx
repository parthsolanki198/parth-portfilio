import { Hero } from "@/components/Hero";
import { HireBrief } from "@/components/HireBrief";
import { BentoSignal } from "@/components/BentoSignal";
import { ExperienceSection } from "@/components/ExperienceSection";
import { TechRails } from "@/components/TechRails";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <HireBrief />
      <div className="section-thread mx-4 sm:mx-6" aria-hidden />
      <BentoSignal />
      <ExperienceSection />
      <TechRails />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
