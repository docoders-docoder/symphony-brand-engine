import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="container-wide relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up">
            Let's Talk About Your Goals
          </h1>
          <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto animate-fade-up delay-100">
            Ready to transform your operations? Our team is here to help you find the right solution.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                Get In Touch
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                We're Here to Help
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Whether you have questions about our services or want to explore how we can help your organization, we'd love to hear from you.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                    <a href="mailto:contact@nexaserve.com" className="text-accent hover:underline">
                      contact@nexaserve.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                    <a href="tel:+1234567890" className="text-accent hover:underline">
                      (123) 456-7890
                    </a>
                    <p className="text-sm text-muted-foreground">Mon-Fri 9am-6pm EST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">
                      123 Business Avenue, Suite 500<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-accent/5 border border-accent/20">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Prefer a scheduled call?</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Book a free 30-minute consultation with one of our experts.
                </p>
                <Button variant="accent" asChild>
                  <Link to="/consultation">
                    Schedule Consultation
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input placeholder="John" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Doe" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="john@company.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input placeholder="Your Company Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    How can we help?
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project or challenges..." 
                    rows={5}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="accent" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4 ml-1" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
