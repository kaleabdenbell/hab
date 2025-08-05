"use client";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Github, Users, ExternalLink } from 'lucide-react';

const Community = () => {
  const communityLinks = [
    {
      id: 1,
      name: "Telegram",
      description: "Join our main chat for real-time discussions and quick help",
      icon: MessageCircle,
      members: "500+ members",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      link: "#"
    },
    {
      id: 2,
      name: "Discord",
      description: "Voice channels, project rooms, and structured community discussions",
      icon: Users,
      members: "300+ members",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      link: "#"
    },
    {
      id: 3,
      name: "GitHub",
      description: "Collaborate on open source projects and share your code",
      icon: Github,
      members: "200+ contributors",
      color: "text-primary",
      bgColor: "bg-primary/10",
      link: "#"
    }
  ];

  const features = [
    "24/7 Community Support",
    "Weekly Virtual Meetups",
    "Skill-based Project Matching",
    "Mentorship Programs",
    "Resource Sharing Library",
    "Success Story Spotlights"
  ];

  return (
    <section id="community" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/50 bg-primary/10">
            Community
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 text-glow">
            Join the Conversation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with like-minded creators, share ideas, and build amazing things together
          </p>
        </div>

        {/* Community Links */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {communityLinks.map((platform) => {
            const Icon = platform.icon;
            return (
              <Card 
                key={platform.id}
                className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow cursor-pointer"
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-lg ${platform.bgColor} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${platform.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {platform.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm">
                    {platform.description}
                  </p>
                  
                  <Badge variant="secondary" className="mb-6">
                    {platform.members}
                  </Badge>
                  
                  <Button 
                    className="w-full btn-outline-glow"
                    onClick={() => window.open(platform.link, '_blank')}
                  >
                    Join Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Community Features */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Features List */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold font-space-grotesk mb-6">
                What You Get
              </h3>
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-card/50 border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Community Stats */}
          <div className="space-y-8">
            <Card className="bg-gradient-glow border-primary/20 p-8">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Growing Community
                </h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                    <div className="text-sm text-muted-foreground">Active Members</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Monthly</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">100+</div>
                    <div className="text-sm text-muted-foreground">Skills Shared</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Support Available</div>
                  </div>
                </div>
                
                <Button className="btn-glow w-full">
                  Join Our Community
                </Button>
              </div>
            </Card>

            {/* Upcoming Events */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Upcoming Events</h4>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-foreground">Design Workshop</div>
                      <div className="text-sm text-muted-foreground">Jan 20, 2024 • 2:00 PM PST</div>
                    </div>
                    <Badge variant="secondary">Virtual</Badge>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-foreground">Code Review Session</div>
                      <div className="text-sm text-muted-foreground">Jan 25, 2024 • 6:00 PM PST</div>
                    </div>
                    <Badge variant="secondary">Discord</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community