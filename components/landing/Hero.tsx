import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Lightbulb } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Motion Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="motion-blob w-72 h-72 bg-primary/20 absolute top-1/4 left-1/4 animate-float"></div>
        <div className="motion-blob w-96 h-96 bg-secondary/20 absolute bottom-1/4 right-1/4 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="motion-blob w-64 h-64 bg-accent/10 absolute top-1/2 right-1/3 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Spotlight Effect */}
      <div className="spotlight absolute inset-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="mb-8 animate-fade-in-up">
          <Badge variant="outline" className="px-4 py-2 text-primary border-primary/50 bg-primary/10">
            <Lightbulb className="w-4 h-4 mr-2" />
            Spotlight.New - Community Launch
          </Badge>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-space-grotesk mb-6 animate-fade-in-up text-glow" style={{ animationDelay: '0.2s' }}>
          Build Together.
          <br />
          <span className="text-primary">Launch Together.</span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          A space where creatives bring ideas to life.
          <br />
          Join our community of developers, designers, and innovators.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" className="btn-glow text-lg px-8 py-4">
            Join the Community
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <Button size="lg" variant="outline" className="btn-outline-glow text-lg px-8 py-4">
            Pitch Your Idea
          </Button>
        </div>

        {/* Stats or Social Proof */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-muted-foreground">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">50+</div>
            <div className="text-muted-foreground">Projects Launched</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">∞</div>
            <div className="text-muted-foreground">Ideas Created</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;