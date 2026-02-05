import ServiceCard from "./ServiceCard";
import { 
  Globe, 
  Search, 
  Package, 
  UserCheck, 
  FileText, 
  Shield, 
  Code2, 
  TrendingUp, 
  Settings2, 
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: UserCheck,
    title: "Front Desk Operations",
    description: "Professional front desk management ensuring seamless patient scheduling and communication.",
    category: "healthcare" as const,
  },
  {
    icon: FileText,
    title: "Medical Billing",
    description: "Accurate medical billing services with fast claim processing and maximum reimbursement.",
    category: "healthcare" as const,
  },
  {
    icon: Shield,
    title: "Dental Billing",
    description: "End-to-end credentialing services ensuring compliance and faster payer enrollments.",
    category: "healthcare" as const,
  },
  {
    icon: Code2,
    title: "Medical Coding",
    description: "Certified coders delivering accurate ICD-10, CPT, and HCPCS coding for optimal revenue.",
    category: "healthcare" as const,
  },
  {
    icon: TrendingUp,
    title: "A/R Recovery",
    description: "Aggressive accounts receivable recovery strategies to minimize aging and maximize collections.",
    category: "healthcare" as const,
  },
  {
    icon: Settings2,
    title: "Revenue Cycle Management",
    description: "Complete RCM solutions optimizing every step from patient intake to final payment.",
    category: "healthcare" as const,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="relative inline-block mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-500/20 blur-xl rounded-full" />
            <span className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent/10 to-purple-500/10 text-accent text-sm font-semibold border border-accent/20">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Our Services
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Solutions for
            <span className="relative inline-block ml-3">
              Every Need
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-purple-500 rounded-full" />
            </span>
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed">
            From digital transformation to healthcare operations, we deliver 
            end-to-end solutions tailored to your business goals.
          </p>
        </div>

        {/* Services Grid with Staggered Animation */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="transform transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* Optional: View All Button */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent to-purple-600 text-white font-semibold overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative flex items-center gap-3">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};