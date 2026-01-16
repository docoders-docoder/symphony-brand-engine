import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Users, Award, Target, Clock } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure our success by your outcomes. Every engagement is focused on delivering measurable ROI.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We don't just provide services—we become an extension of your team, invested in your long-term success.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Our team of certified experts maintains the highest standards of quality and compliance.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "With 99.9% uptime and 24/7 support, you can count on us when it matters most.",
  },
];

const milestones = [
  { year: "2015", title: "Founded", description: "Started with a vision to transform healthcare operations" },
  { year: "2017", title: "Expansion", description: "Launched digital services for business clients" },
  { year: "2020", title: "500+ Clients", description: "Reached 500 active clients milestone" },
  { year: "2023", title: "National Leader", description: "Recognized as top RCM provider" },
];

export default function AboutPage() {
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
        <div className="container-wide relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up">
              Your Strategic Partner for <span className="text-accent">Growth</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 max-w-2xl animate-fade-up delay-100">
              We're not just a service provider. We're a team of experts committed to transforming your operations and driving sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                Our Mission
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Empowering Organizations to Thrive
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At NexaServe, we believe every organization deserves access to world-class operational expertise. Whether you're a growing startup or an established healthcare system, we bring the same dedication to excellence.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our integrated approach means you get consistent quality across all services, with the convenience of a single trusted partner who understands your complete business needs.
              </p>
              <div className="space-y-3">
                {["500+ organizations served across industries", "98% client retention rate", "$50M+ recovered for healthcare clients", "Certified, experienced specialists"].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-7xl font-bold text-gradient mb-4">500+</div>
                  <div className="text-xl font-semibold text-foreground">Clients Trust Us</div>
                  <div className="text-muted-foreground">To Power Their Operations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-muted-foreground">
              These principles guide everything we do and shape how we serve our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="p-8 rounded-xl bg-card border border-border card-hover text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Our Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Growing With Our Clients
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year}
                className="relative text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="font-display text-4xl font-bold text-accent mb-2">
                  {milestone.year}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {milestone.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
