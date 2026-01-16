import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Search, 
  Package, 
  Calendar, 
  Receipt, 
  BadgeCheck, 
  FileCode, 
  TrendingUp, 
  Workflow,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const businessServices = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom, conversion-optimized websites built with modern technology stacks",
    href: "/services/website-development",
    color: "business",
  },
  {
    icon: Search,
    title: "SEO",
    description: "Data-driven strategies to dominate search rankings and drive organic growth",
    href: "/services/seo",
    color: "business",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Smart inventory solutions that reduce costs and streamline operations",
    href: "/services/inventory-management",
    color: "business",
  },
];

const healthcareServices = [
  {
    icon: Calendar,
    title: "Front Desk Operations",
    description: "Efficient patient scheduling, registration, and front office management",
    href: "/services/front-desk-operations",
    color: "healthcare",
  },
  {
    icon: Receipt,
    title: "Medical Billing",
    description: "Maximize reimbursements and minimize claim denials with expert billing",
    href: "/services/medical-billing",
    color: "healthcare",
  },
  {
    icon: BadgeCheck,
    title: "Credentialing",
    description: "Fast-track provider enrollment with payers and healthcare networks",
    href: "/services/credentialing",
    color: "healthcare",
  },
  {
    icon: FileCode,
    title: "Medical Coding",
    description: "Accurate ICD-10, CPT, and HCPCS coding for optimal revenue capture",
    href: "/services/medical-coding",
    color: "healthcare",
  },
  {
    icon: TrendingUp,
    title: "A/R Recovery",
    description: "Aggressive follow-up strategies to recover aged accounts receivable",
    href: "/services/ar-recovery",
    color: "healthcare",
  },
  {
    icon: Workflow,
    title: "Revenue Cycle Management",
    description: "End-to-end financial optimization from patient intake to payment",
    href: "/services/rcm",
    color: "healthcare",
  },
];

type TabType = "business" | "healthcare";

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<TabType>("business");
  const services = activeTab === "business" ? businessServices : healthcareServices;

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Solutions That <span className="text-gradient">Scale With You</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From digital innovation to healthcare excellence, we deliver specialized services 
            tailored to your industry's unique challenges.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-lg bg-muted">
            <button
              onClick={() => setActiveTab("business")}
              className={cn(
                "px-6 py-3 rounded-md text-sm font-semibold transition-all duration-200",
                activeTab === "business"
                  ? "bg-business text-business-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Business Solutions
            </button>
            <button
              onClick={() => setActiveTab("healthcare")}
              className={cn(
                "px-6 py-3 rounded-md text-sm font-semibold transition-all duration-200",
                activeTab === "healthcare"
                  ? "bg-healthcare text-healthcare-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Healthcare Solutions
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group bg-card rounded-xl p-6 border border-border card-hover animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                service.color === "business" ? "bg-business/10" : "bg-healthcare/10"
              )}>
                <service.icon className={cn(
                  "h-6 w-6",
                  service.color === "business" ? "text-business" : "text-healthcare"
                )} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              <div className={cn(
                "inline-flex items-center text-sm font-semibold transition-colors",
                service.color === "business" ? "text-business group-hover:text-business/80" : "text-healthcare group-hover:text-healthcare/80"
              )}>
                Learn More
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="accent" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
