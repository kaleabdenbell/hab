"use client"
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb, Palette, Code, TestTube, Rocket,  Users } from 'lucide-react';

const Mission = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      icon: Lightbulb,
      title: "Have an Idea",
      description: "Every great project starts with a spark of inspiration"
    },
    {
      icon: Palette,
      title: "Collaborate on Design",
      description: "Work with talented designers to bring your vision to life"
    },
    {
      icon: Code,
      title: "Build with Devs",
      description: "Partner with skilled developers to create amazing products"
    },
    {
      icon: TestTube,
      title: "Test & Improve",
      description: "Refine your product with community feedback and testing"
    },
    {
      icon: Rocket,
      title: "Launch or Monetize",
      description: "Take your project to market and reach your audience"
    },
    {
      icon: Users,
      title: "Stay Connected",
      description: "Continue growing with ongoing community support"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Animated Process Flow */}
          <div className="relative">
            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === activeStep;
                const isPassed = index < activeStep;
                
                return (
                  <div key={index} className="flex items-center space-x-4 relative">
                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div className={`absolute left-6 top-12 w-0.5 h-8 transition-colors duration-500 ${
                        isPassed || isActive ? 'bg-primary' : 'bg-muted'
                      }`}></div>
                    )}
                    
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isActive 
                        ? 'bg-primary text-primary-foreground shadow-glow scale-110' 
                        : isPassed 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    {/* Content */}
                    <div className={`transition-all duration-500 ${
                      isActive ? 'transform scale-105' : ''
                    }`}>
                      <h3 className={`font-semibold text-lg transition-colors duration-500 ${
                        isActive ? 'text-primary' : 'text-foreground'
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Mission Statement */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 text-glow">
                Our Mission
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  We believe that the best innovations come from collaboration. Our mission is to create a thriving ecosystem where creative minds can connect, share ideas, and build extraordinary projects together.
                </p>
                <p>
                  From initial concept to successful launch, we provide the community, tools, and support needed to transform your vision into reality. Whether you&apos;re a developer, designer, entrepreneur, or dreamer, you&apos;ll find your place here.
                </p>
                <p className="text-foreground font-medium">
                  Join us in building the future, one collaboration at a time.
                </p>
              </div>
            </div>
            
            <Button className="btn-glow" size="lg">
              Learn more about our mission
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;