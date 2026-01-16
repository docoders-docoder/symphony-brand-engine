const stats = [
  { value: "500+", label: "Clients Served", description: "Across industries" },
  { value: "98%", label: "Client Retention", description: "Year over year" },
  { value: "$50M+", label: "Revenue Recovered", description: "For healthcare clients" },
  { value: "24/7", label: "Support Available", description: "Dedicated team" },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
