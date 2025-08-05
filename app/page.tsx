import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MissionSection from '@/components/MissionSection';
import CommunityWorksSection from '@/components/CommunityWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProjectShowcase from '@/components/ProjectShowcase';
import BlogSection from '@/components/BlogSection';
import CommunitySection from '@/components/CommunitySection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <CommunityWorksSection />
        <TestimonialsSection />
        <ProjectShowcase />
        <BlogSection />
        <CommunitySection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;