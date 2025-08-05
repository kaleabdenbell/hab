"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MessageSquare, MapPin, Send } from 'lucide-react';
import { toast } from "sonner"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast("We'll get back to you as soon as possible.");

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@havisham.dev",
      link: "mailto:hello@havisham.dev"
    },
    {
      icon: MessageSquare,
      label: "Community",
      value: "Join our Discord",
      link: "#"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Global • Remote First",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/50 bg-primary/10">
            Contact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 text-glow">
            Let&apos;s Start a Conversation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions, ideas, or want to collaborate? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Send us a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-input border-border focus:border-primary focus:ring-primary"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-input border-border focus:border-primary focus:ring-primary"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your idea or question..."
                    rows={6}
                    className="bg-input border-border focus:border-primary focus:ring-primary resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full btn-glow" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Right - Contact Info & Additional Content */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Get in touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-foreground font-medium">{info.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* FAQ */}
            <Card className="bg-gradient-glow border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4 text-foreground">
                  Quick Questions?
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-foreground">How do I join?</strong>
                    <p className="text-muted-foreground">Simply click &quot;Join Now&quot; and follow the onboarding process.</p>
                  </div>
                  <div>
                    <strong className="text-foreground">Is it free?</strong>
                    <p className="text-muted-foreground">Yes! Our community is completely free to join and participate.</p>
                  </div>
                  <div>
                    <strong className="text-foreground">What if I&apos;m a beginner?</strong>
                    <p className="text-muted-foreground">Perfect! We welcome creators of all skill levels and provide mentorship.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="text-2xl font-bold text-primary mb-2">&lt; 24hrs</div>
              <div className="text-muted-foreground">Average response time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;