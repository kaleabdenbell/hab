"use client"
import { Button } from '@/components/ui/button';
import { ArrowRight, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';

const About = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const codeLines = [
    "# Welcome to Habeshan Projeny",
    "const community = {",
    "  mission: 'Bringing ideas to life',",
    "  members: ['developers', 'designers', 'creators'],",
    "  focus: 'collaboration && innovation',",
    "  outcome: 'successful launches'",
    "};",
    "",
    "function buildTogether() {",
    "  return community.members.map(member => {",
    "    return member.contribute(skills, passion);",
    "  }).reduce((idea, execution) => {",
    "    return launch(idea + execution);",
    "  });",
    "}",
    "",
    "// Ready to join? Let's build something amazing! 🚀"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine(prev => (prev + 1) % codeLines.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [codeLines.length]);

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 text-glow">
                About Us
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  <strong className="text-foreground">Who we are:</strong> We&apos;re a passionate community of developers, designers, and creative minds who believe in the power of collaboration.
                </p>
                <p>
                  <strong className="text-foreground">What we do:</strong> We provide a platform where ideas transform into reality through collective expertise, shared resources, and mutual support.
                </p>
                <p>
                  <strong className="text-foreground">Our vision:</strong> To democratize innovation by connecting creative minds and providing the tools, community, and guidance needed to bring ambitious projects to life.
                </p>
              </div>
            </div>
            
            <Button className="btn-outline-glow" size="lg">
              Read our story
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Right - Animated Code Editor */}
          <div className="relative">
            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-blue-glow">
              {/* Terminal Header */}
              <div className="bg-muted px-4 py-3 flex items-center space-x-2 border-b border-border">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">community.js</span>
                <div className="flex space-x-1 ml-auto">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm">
                {codeLines.map((line, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      index <= currentLine 
                        ? 'opacity-100 text-foreground' 
                        : 'opacity-30 text-muted-foreground'
                    } ${
                      index === currentLine ? 'text-primary animate-glow-pulse' : ''
                    }`}
                  >
                    <span className="text-muted-foreground mr-4 select-none">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    {line.startsWith('#') ? (
                      <span className="text-green-400">{line}</span>
                    ) : line.includes('const') || line.includes('function') || line.includes('return') ? (
                      <span className="text-blue-400">{line}</span>
                    ) : line.includes("'") ? (
                      <span className="text-yellow-400">{line}</span>
                    ) : line.includes('//') ? (
                      <span className="text-gray-500">{line}</span>
                    ) : (
                      line
                    )}
                  </div>
                ))}
                
                {/* Cursor */}
                <div className="inline-block w-2 h-5 bg-primary ml-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;