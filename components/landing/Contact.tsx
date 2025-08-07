"use client"
iimport { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Mail, MessageSquare, MapPin, Send, Smartphone, User, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    recipient: '',
    contactMethod: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const communityMembers = [
    {
      id: 'kaleab-denbel',
      name: 'Kaleab Denbel',
      role: 'Lead Developer',
      email: 'Kaleabdenbel1921@gmail.com',
      phone: '+251988815914',
      telegram: 'alexchen_dev',
      expertise: 'Full-stack development, DevOps'
    },
    {
      id: 'eyob-sisay',
      name: 'eyob sisay',
      role: 'Community Manager',
      email: 'eyobsisay@gmail.com',
      phone: '+1234567891',
      telegram: 'emress',
      expertise: 'Community building, Events'
    },
    {
      id: 'tane-geta',
      name: 'Tane geta',
      role: 'Design Lead',
      email: 'tanegeta@gmail.com',
      phone: '+1234567892',
      telegram: 'tabe_geta',
      expertise: 'UI/UX Design, Design Systems'
    },
    {
      id: 'kiya',
      name: 'Kiya',
      role: 'Backend Developer',
      email: 'Kiya@gmail.com',
      phone: '+1234567893',
      telegram: 'jordan_pm',
      expertise: 'Product strategy, User research'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.recipient) {
      toast({
        title: "Please select a recipient",
        description: "Choose who you'd like to contact from our team.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    const selectedMember = communityMembers.find(member => member.id === formData.recipient);
    if (!selectedMember) return;

    const subject = `Message from ${formData.name} - Havisham Project`;
    const messageBody = `Hi ${selectedMember.name},

My name is ${formData.name} and I'd like to connect with you.

${formData.message}

Best regards,
${formData.name}
${formData.email}${formData.phone ? `\n${formData.phone}` : ''}`;

    if (formData.contactMethod === 'email') {
      const emailUrl = `mailto:${selectedMember.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(messageBody)}`;
      window.open(emailUrl, '_blank');
    } else if (formData.contactMethod === 'sms') {
      const smsBody = `Hi ${selectedMember.name}, this is ${formData.name}. ${formData.message}`;
      const smsUrl = `sms:${selectedMember.phone}?body=${encodeURIComponent(smsBody)}`;
      window.open(smsUrl, '_blank');
    } else if (formData.contactMethod === 'telegram') {
      const telegramMessage = `Hi ${selectedMember.name}, this is ${formData.name}. ${formData.message}`;
      const telegramUrl = `https://t.me/${selectedMember.telegram}?text=${encodeURIComponent(telegramMessage)}`;
      window.open(telegramUrl, '_blank');
    }
    
    toast({
      title: `Opening ${formData.contactMethod === 'email' ? 'email' : formData.contactMethod === 'sms' ? 'SMS' : 'Telegram'} app`,
      description: `Your ${formData.contactMethod === 'email' ? 'email client' : formData.contactMethod === 'sms' ? 'messaging app' : 'Telegram app'} should open with a prefilled message to ${selectedMember.name}.`,
    });
    
    setFormData({ name: '', email: '', phone: '', message: '', recipient: '', contactMethod: 'email' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
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
            Let's Start a Conversation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions, ideas, or want to collaborate? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">
                  Contact Our Team
                </h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Choose a team member and communication method. We'll open your preferred app with a prefilled message.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Method Selection */}
                <div className="space-y-3">
                  <Label>How would you like to contact us?</Label>
                  <RadioGroup 
                    value={formData.contactMethod} 
                    onValueChange={(value) => handleSelectChange('contactMethod', value)}
                    className="flex flex-wrap gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email-method" />
                      <Label htmlFor="email-method" className="flex items-center space-x-2 cursor-pointer">
                        <Mail className="w-4 h-4" />
                        <span>Email</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sms" id="sms-method" />
                      <Label htmlFor="sms-method" className="flex items-center space-x-2 cursor-pointer">
                        <Smartphone className="w-4 h-4" />
                        <span>SMS</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="telegram" id="telegram-method" />
                      <Label htmlFor="telegram-method" className="flex items-center space-x-2 cursor-pointer">
                        <MessageSquare className="w-4 h-4" />
                        <span>Telegram</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Recipient Selection */}
                <div className="space-y-2">
                  <Label htmlFor="recipient">Who would you like to contact?</Label>
                  <Select value={formData.recipient} onValueChange={(value) => handleSelectChange('recipient', value)}>
                    <SelectTrigger className="bg-input border-border focus:border-primary">
                      <SelectValue placeholder="Choose a team member" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      {communityMembers.map((member) => (
                        <SelectItem key={member.id} value={member.id} className="focus:bg-accent focus:text-accent-foreground">
                          <div className="flex items-center space-x-3">
                            <User className="w-4 h-4" />
                            <div>
                              <div className="font-medium">{member.name}</div>
                              <div className="text-xs text-muted-foreground">{member.role} • {member.expertise}</div>
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
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
                  <Label htmlFor="email">Your Email</Label>
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

                {(formData.contactMethod === 'sms' || formData.contactMethod === 'telegram') && (
                  <div className="space-y-2">
                    <Label htmlFor="phone">Your Phone Number {formData.contactMethod === 'telegram' ? '(Optional)' : '(Optional)'}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="bg-input border-border focus:border-primary focus:ring-primary"
                    />
                  </div>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your idea, question, or how we can help..."
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
                    <>Opening {formData.contactMethod === 'email' ? 'Email' : formData.contactMethod === 'sms' ? 'SMS' : 'Telegram'} App...</>
                  ) : (
                    <>
                      Open {formData.contactMethod === 'email' ? 'Email' : formData.contactMethod === 'sms' ? 'SMS' : 'Telegram'} App
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>

                {formData.recipient && (
                  <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">
                          {communityMembers.find(m => m.id === formData.recipient)?.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {communityMembers.find(m => m.id === formData.recipient)?.role}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Expertise: {communityMembers.find(m => m.id === formData.recipient)?.expertise}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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
                    <p className="text-muted-foreground">Simply click "Join Now" and follow the onboarding process.</p>
                  </div>
                  <div>
                    <strong className="text-foreground">Is it free?</strong>
                    <p className="text-muted-foreground">Yes! Our community is completely free to join and participate.</p>
                  </div>
                  <div>
                    <strong className="text-foreground">What if I'm a beginner?</strong>
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

export default ContactSection;