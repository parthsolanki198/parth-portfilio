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
    <div className="page-flow">
      <Hero />
      <HireBrief />
      <div className="section-thread-dual mx-4 my-1 opacity-90 sm:mx-6" aria-hidden />
      <BentoSignal />
      <div className="section-thread mx-4 my-1 opacity-90 sm:mx-6" aria-hidden />
      <ExperienceSection />
      <TechRails />
      <div className="section-thread-dual mx-4 my-1 opacity-90 sm:mx-6" aria-hidden />
      <ProjectsSection />
      <SkillsSection />
      <div className="section-thread mx-4 my-1 opacity-90 sm:mx-6" aria-hidden />
      <ContactSection />
    </div>
  );
}
