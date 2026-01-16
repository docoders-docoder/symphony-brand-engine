import { Shield, Award, Clock, Users } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Full compliance with healthcare data protection regulations",
  },
  {
    icon: Award,
    title: "SOC 2 Type II Certified",
    description: "Enterprise-grade security and operational controls",
  },
  {
    icon: Clock,
    title: "99.9% Uptime SLA",
    description: "Reliable service delivery with guaranteed availability",
  },
  {
    icon: Users,
    title: "Dedicated Account Team",
    description: "Personal support from industry specialists",
  },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-success/10 text-success text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built on <span className="text-gradient">Trust & Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're committed to delivering secure, compliant, and reliable solutions 
            that meet the highest industry standards.
          </p>
        </div>

        {/* Trust Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <div 
              key={item.title}
              className="text-center p-8 rounded-xl bg-card border border-border card-hover animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
