"use client";
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Globe, Github, MessageCircle, Users, Mail, Linkedin } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';

const Footer = () => {
  const [language, setLanguage] = useState('EN');

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Community', href: '#community' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-white' },
    { name: 'Discord', icon: Users, href: '#', color: 'hover:text-purple-400' },
    { name: 'Telegram', icon: MessageCircle, href: '#', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-500' },
  ];

  return (
    <footer className="relative border-t border-border bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold font-space-grotesk text-glow mb-4">
                Havisham Project
              </h3>
              <p className="text-muted-foreground text-lg max-w-md">
                A collaborative platform where creative minds come together to build, launch, and scale innovative projects.
              </p>
            </div>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Stay Updated</h4>
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-input border border-border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
                />
                <Button className="btn-glow rounded-l-none">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get updates on new features, community highlights, and project showcases.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors animated-underline w-fit"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Community & Language */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Community</h4>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 hover:border-primary/50 ${social.color}`}
                    title={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Language Switcher */}
            <div className="space-y-3">
              <h5 className="text-sm font-medium text-foreground">Language</h5>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Globe className="w-4 h-4 mr-2" />
                    {language === 'EN' ? 'English' : 'አማርኛ'}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card border-border">
                  <DropdownMenuItem onClick={() => setLanguage('EN')}>
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('አማ')}>
                    አማርኛ (Amharic)
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Community Stats */}
            <div className="space-y-2">
              <div className="text-sm">
                <span className="text-muted-foreground">Community: </span>
                <span className="text-primary font-medium">1000+ members</span>
              </div>
              <div className="text-sm">
                <span className="text-muted-foreground">Projects: </span>
                <span className="text-primary font-medium">50+ launched</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
            <span>© 2024 Havisham Project. All rights reserved.</span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Code of Conduct</a>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Built with ❤️ by the community
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;