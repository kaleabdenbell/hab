import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Frontend Developer",
      avatar: "/placeholder.svg",
      quote: "Havisham transformed my solo idea into a thriving startup. The collaboration here is unlike anything I've experienced.",
      project: "AI Design Tool"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "UX Designer",
      avatar: "/placeholder.svg",
      quote: "The community's feedback helped me refine my design skills while contributing to amazing projects. It's a win-win.",
      project: "Social Platform"
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Full-Stack Developer",
      avatar: "/placeholder.svg",
      quote: "From concept to launch in 3 months. The support and expertise available here is incredible. Highly recommended!",
      project: "E-commerce Platform"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/50 bg-primary/10">
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 text-glow">
            What Our Community Says
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real creators who&apos;ve brought their ideas to life
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="relative bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow group"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" />
                </div>
                
                {/* Quote */}
                <blockquote className="text-foreground mb-6 text-lg leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12 border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      {testimonial.project}
                    </Badge>
                  </div>
                </div>
              </CardContent>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-glow opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Community Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Community Support</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Launched Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;