import { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  category: "digital" | "healthcare";
}

const ServiceCard = ({ icon: Icon, title, description, category }: ServiceCardProps) => {
  return (
    <div className="group relative bg-gradient-to-b from-card to-card/95 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-border/50 hover:border-transparent">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700">
        <div className={`absolute -inset-1 bg-gradient-to-r ${
          category === "digital" 
            ? "from-business/0 via-business/5 to-business/20" 
            : "from-healthcare/0 via-healthcare/5 to-healthcare/20"
        } blur-xl group-hover:blur-2xl transition-all duration-1000`} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              category === "digital" ? "bg-business/30" : "bg-healthcare/30"
            }`}
            style={{
              top: `${20 + i * 30}%`,
              left: `${10 + i * 40}%`,
              animation: `float 3s ease-in-out infinite ${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Icon Container with Glow Effect */}
        <div className="relative mb-6">
          <div className={`absolute inset-0 w-14 h-14 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
            category === "digital" ? "bg-business/30" : "bg-healthcare/30"
          }`} />
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 ${
            category === "digital" 
              ? "bg-gradient-to-br from-business/20 to-business/30 text-business shadow-lg shadow-business/20" 
              : "bg-gradient-to-br from-healthcare/20 to-healthcare/30 text-healthcare shadow-lg shadow-healthcare/20"
          }`}>
            <Icon className="w-7 h-7" />
          </div>
        </div>

        {/* Category Tag */}
        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold mb-4 transition-all duration-300 group-hover:scale-105 ${
          category === "digital"
            ? "bg-gradient-to-r from-business/10 to-business/20 text-business border border-business/20"
            : "bg-gradient-to-r from-healthcare/10 to-healthcare/20 text-healthcare border border-healthcare/20"
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
            category === "digital" ? "bg-business animate-pulse" : "bg-healthcare animate-pulse"
          }`} />
          {category === "digital" ? "Digital" : "Healthcare"}
        </span>

        {/* Content */}
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        {/* Learn More Button with Slide Animation */}
        <div className="relative inline-flex items-center gap-2 text-sm font-semibold text-accent overflow-hidden group/btn">
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-accent/10 group-hover/btn:w-full transition-all duration-500 ease-out" />
          <span className="relative z-10 flex items-center gap-2">
            Learn More
            <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover/btn:translate-x-2" />
          </span>
          <div className="h-px w-0 group-hover/btn:w-8 bg-gradient-to-r from-accent to-transparent transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;