import Hero from "@/components/home/Hero";
import ProfileSection from "@/components/home/ProfileSection";
import SustainabilityPreview from "@/components/home/SustainabilityPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProfileSection />
      <SustainabilityPreview />
      <ProjectsPreview />
    </>
  );
}
