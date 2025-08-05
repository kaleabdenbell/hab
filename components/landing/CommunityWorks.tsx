import { Badge } from '@/components/ui/badge';
import { Lightbulb, Users, Code, TestTube, Rocket, DollarSign } from 'lucide-react';

const CommunityWorks = () => {
  const steps = [
    {
      id: 1,
      icon: Lightbulb,
      title: "Have an Idea",
      description: "Start with your vision, no matter how big or small",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10"
    },
    {
      id: 2,
      icon: Users,
      title: "Collaborate on Design",
      description: "Connect with UX/UI designers to shape your concept",
      color: "text-pink-400",
      bgColor: "bg-pink-400/10"
    },
    {
      id: 3,
      icon: Code,
      title: "Build with Devs",
      description: "Partner with developers to bring your idea to life",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10"
    },
    {
      id: 4,
      icon: TestTube,
      title: "Test & Improve",
      description: "Get feedback from the community and iterate",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10"
    },
    {
      id: 5,
      icon: Rocket,
      title: "Launch or Monetize",
      description: "Release your project to the world and grow",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: 6,
      icon: DollarSign,
      title: "Stay Connected",
      description: "Continue collaborating and scaling your success",
      color: "text-green-400",
      bgColor: "bg-green-400/10"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/50 bg-primary/10">
            Our Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 text-glow">
            How the Community Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A simple, collaborative process that turns ideas into successful projects
          </p>
        </div>

        {/* Desktop Flow - Horizontal Timeline */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          
          <div className="grid grid-cols-6 gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative group">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-glow">
                      {step.id}
                    </div>
                  </div>
                  
                  {/* Card */}
                  <div className={`mt-8 p-6 rounded-lg border border-border bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-glow group-hover:border-primary/50 ${step.bgColor}`}>
                    <div className={`w-12 h-12 rounded-lg ${step.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Flow - Vertical Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="relative flex items-start space-x-4">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-16 bg-primary/30"></div>
                )}
                
                {/* Icon */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${step.bgColor} flex items-center justify-center shadow-glow`}>
                  <Icon className={`w-6 h-6 ${step.color}`} />
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      Step {step.id}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
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
    </section>
  );
};

export default CommunityWorks;