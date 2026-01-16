import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "NexaServe transformed our billing operations. We saw a 40% reduction in claim denials within the first quarter.",
    author: "Dr. Sarah Mitchell",
    role: "Medical Director",
    company: "Valley Health Partners",
    industry: "healthcare",
  },
  {
    quote: "Their website development team delivered a platform that increased our conversion rate by 150%. Exceptional work.",
    author: "Michael Chen",
    role: "CEO",
    company: "TechFlow Solutions",
    industry: "business",
  },
  {
    quote: "The RCM team recovered over $2M in aged receivables we had written off. True partners in our success.",
    author: "Jennifer Adams",
    role: "CFO",
    company: "Midwest Medical Group",
    industry: "healthcare",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Client Success
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we've helped businesses and healthcare organizations achieve their goals.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.author}
              className="bg-card rounded-xl p-8 border border-border card-hover animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <Quote className="h-8 w-8 text-accent/20 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-sm text-accent">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
