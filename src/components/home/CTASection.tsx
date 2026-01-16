import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 animate-fade-up">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto animate-fade-up delay-100">
            Let's discuss how our solutions can drive growth, reduce costs, 
            and position your organization for long-term success.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up delay-200">
            <Button variant="hero" size="xl" asChild>
              <Link to="/consultation">
                <Calendar className="h-5 w-5 mr-2" />
                Book Free Consultation
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+1234567890">
                <Phone className="h-5 w-5 mr-2" />
                Call Us Now
              </a>
            </Button>
          </div>

          <p className="mt-8 text-primary-foreground/50 text-sm animate-fade-up delay-300">
            No commitment required. Free 30-minute strategy session.
          </p>
        </div>
      </div>
    </section>
  );
}
