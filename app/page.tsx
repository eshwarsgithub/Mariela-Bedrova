import AnimatedBackground from "@/components/ui/AnimatedBackground";
import SpotlightCursor from "@/components/ui/SpotlightCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollAnimations from "@/components/ui/ScrollAnimations";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AIToolsSection from "@/components/sections/AIToolsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <SpotlightCursor />
      <ScrollProgress />
      <ScrollAnimations />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AIToolsSection />
        <ProjectsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
