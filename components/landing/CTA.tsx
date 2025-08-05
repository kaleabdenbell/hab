import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="motion-blob w-96 h-96 bg-primary/20 absolute top-0 left-0 animate-float"></div>
        <div className="motion-blob w-64 h-64 bg-secondary/20 absolute bottom-0 right-0 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Spotlight Effect */}
      <div className="spotlight absolute inset-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <Sparkles className="w-10 h-10 text-primary" />
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-space-grotesk mb-8 text-glow">
          Got an idea?
          <br />
          <span className="text-primary">Let&apos;s build it together.</span>
        </h2>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Join thousands of creators who are turning their visions into reality. 
          Your next breakthrough is just one collaboration away.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button size="lg" className="btn-glow text-lg px-12 py-6 animate-glow-pulse">
            Get Involved
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
          
          <Button size="lg" variant="outline" className="btn-outline-glow text-lg px-12 py-6">
            Explore Projects
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="space-y-4 text-center">
          <p className="text-sm text-muted-foreground">
            Trusted by creators worldwide
          </p>
          <div className="flex justify-center items-center space-x-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span className="text-sm">500+ Active Projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <span className="text-sm">1000+ Community Members</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">95% Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;