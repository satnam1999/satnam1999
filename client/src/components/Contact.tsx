import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="flex items-center gap-3 mb-10">
          <Mail className="text-primary h-6 w-6" />
          <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-primary mr-3" />
              <a href="mailto:satnampahwa85@gmail.com" className="text-gray-700 hover:text-primary transition-colors">
                satnampahwa85@gmail.com
              </a>
            </div>
            
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-primary mr-3" />
              <span className="text-gray-700">Mumbai, Maharashtra, India</span>
            </div>
            
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="https://www.linkedin.com/in/satnam1999/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="pt-6 border-t border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm text-gray-700">Name</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm text-gray-700">Email</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm text-gray-700">Message</Label>
                <Textarea 
                  id="message" 
                  rows={4} 
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-primary"
                />
              </div>
              
              <Button type="submit" className="group">
                <span className="inline-flex items-center">
                  Send
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
