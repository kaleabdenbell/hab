import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const ProjectShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Design Assistant",
      description: "Revolutionary tool that helps designers create stunning visuals with AI assistance",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop",
      tags: ["AI", "Design", "SaaS"],
      status: "Launched",
      team: "5 members"
    },
    {
      id: 2,
      title: "Social Learning Platform",
      description: "Connecting students worldwide through collaborative learning experiences",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      tags: ["Education", "Social", "React"],
      status: "In Development",
      team: "8 members"
    },
    {
      id: 3,
      title: "Sustainable E-commerce",
      description: "Marketplace focused on eco-friendly products and sustainable practices",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      tags: ["E-commerce", "Sustainability", "Startup"],
      status: "MVP Ready",
      team: "6 members"
    },
    {
      id: 4,
      title: "Mental Health Tracker",
      description: "Privacy-first app helping users monitor and improve their mental wellbeing",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      tags: ["Health", "Mobile", "Privacy"],
      status: "Beta Testing",
      team: "4 members"
    },
    {
      id: 5,
      title: "Remote Team Collaboration",
      description: "Next-gen tools for distributed teams to work together seamlessly",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      tags: ["Productivity", "Remote", "Enterprise"],
      status: "Launched",
      team: "12 members"
    },
    {
      id: 6,
      title: "Open Source Dev Tools",
      description: "Suite of developer tools to streamline the coding and deployment process",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      tags: ["Developer Tools", "Open Source", "CLI"],
      status: "Community Driven",
      team: "20+ contributors"
    }
  ];


type Status =
    | 'Launched'
    | 'Beta Testing'
    | 'MVP Ready'
    | 'In Development'
    | 'Community Driven'
    | string;

const getStatusColor = (status: Status): string => {
    switch (status) {
        case 'Launched': return 'bg-green-500/10 text-green-400 border-green-500/20';
        case 'Beta Testing': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
        case 'MVP Ready': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
        case 'In Development': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
        case 'Community Driven': return 'bg-primary/10 text-primary border-primary/20';
        default: return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
};

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/50 bg-primary/10">
            Showcase
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 text-glow">
            Project Showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover amazing projects built by our community members
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                
                {/* Status Badge */}
                <Badge 
                  variant="outline" 
                  className={`absolute top-3 right-3 ${getStatusColor(project.status)}`}
                >
                  {project.status}
                </Badge>
              </div>

              <CardContent className="p-6">
                {/* Title & Description */}
                <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {project.team}
                  </span>
                  <Button size="sm" variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;