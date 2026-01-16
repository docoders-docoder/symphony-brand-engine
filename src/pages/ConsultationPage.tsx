import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { Calendar, CheckCircle2, Clock, Users, Zap } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  "Free 30-minute strategy session",
  "Custom recommendations for your business",
  "No obligation or commitment",
  "Speak directly with industry experts",
];

const serviceOptions = [
  "Website Development",
  "SEO",
  "Inventory Management",
  "Front Desk Operations",
  "Medical Billing",
  "Credentialing",
  "Medical Coding",
  "A/R Recovery",
  "Revenue Cycle Management",
  "Other",
];

export default function ConsultationPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Consultation requested!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6 animate-fade-up">
            <Calendar className="h-4 w-4 text-accent" />
            <span className="text-accent text-sm font-semibold">Free Consultation</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up delay-100">
            Book Your Strategy Session
          </h1>
          <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto animate-fade-up delay-200">
            Get personalized recommendations from our experts. No obligation, no pressure—just solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Benefits */}
            <div className="lg:col-span-2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                What to Expect
              </span>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                A Consultation That Actually Helps
              </h2>
              <p className="text-muted-foreground mb-8">
                Our strategy sessions are designed to understand your unique challenges and provide actionable insights—whether you work with us or not.
              </p>

              <div className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-muted">
                  <Clock className="h-6 w-6 text-accent mx-auto mb-2" />
                  <div className="text-sm font-semibold text-foreground">30 min</div>
                  <div className="text-xs text-muted-foreground">Duration</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted">
                  <Users className="h-6 w-6 text-accent mx-auto mb-2" />
                  <div className="text-sm font-semibold text-foreground">Expert</div>
                  <div className="text-xs text-muted-foreground">Led session</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted">
                  <Zap className="h-6 w-6 text-accent mx-auto mb-2" />
                  <div className="text-sm font-semibold text-foreground">Free</div>
                  <div className="text-xs text-muted-foreground">No cost</div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-3 bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Request Your Consultation
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input placeholder="John" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Doe" required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input type="email" placeholder="john@company.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <Input type="tel" placeholder="(123) 456-7890" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company Name *
                  </label>
                  <Input placeholder="Your Company" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Services of Interest
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                          selectedServices.includes(service)
                            ? "bg-accent text-accent-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your needs
                  </label>
                  <Textarea 
                    placeholder="What challenges are you facing? What goals do you want to achieve?" 
                    rows={4}
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="accent" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Consultation"}
                  <Calendar className="h-4 w-4 ml-1" />
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  We'll contact you within 24 hours to schedule your session.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
