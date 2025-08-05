import About from "@/components/landing/About";
import Blog from "@/components/landing/Blog";
import Community from "@/components/landing/Community";
import CommunityWorks from "@/components/landing/CommunityWorks";
import Contact from "@/components/landing/Contact";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Mission from "@/components/landing/Mission";
import Navigation from "@/components/landing/Navigation";
import ProjectShowcase from "@/components/landing/ProjectShowCase";
import Testimonials from "@/components/landing/Testimonials";


const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Mission />
        <CommunityWorks />
        <Testimonials />
        <ProjectShowcase />
        <Blog />
        <Community />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;