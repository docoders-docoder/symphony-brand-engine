import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Search, 
  Package, 
  Calendar, 
  Receipt, 
  BadgeCheck, 
  FileCode, 
  TrendingUp, 
  Workflow,
  Zap,
  Target,
  Shield,
  Clock,
  Users,
  BarChart3
} from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: "business" | "healthcare";
  problem: {
    title: string;
    points: string[];
  };
  solution: {
    title: string;
    description: string;
  };
  features: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }[];
  benefits: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
}

const servicesData: Record<string, ServiceData> = {
  "website-development": {
    title: "Website Development",
    subtitle: "Build Your Digital Foundation",
    description: "Custom, conversion-optimized websites built with modern technology stacks that drive growth and deliver exceptional user experiences.",
    icon: Globe,
    color: "business",
    problem: {
      title: "Is Your Website Holding You Back?",
      points: [
        "Outdated design that doesn't reflect your brand quality",
        "Slow loading speeds causing high bounce rates",
        "Poor mobile experience losing mobile customers",
        "Low conversion rates despite traffic",
        "Difficult to update content without developer help"
      ]
    },
    solution: {
      title: "Websites That Work As Hard As You Do",
      description: "We build high-performance websites that combine stunning design with conversion-focused functionality. Every element is optimized for speed, SEO, and user engagement."
    },
    features: [
      { icon: Zap, title: "Lightning Fast", description: "Optimized for speed with sub-2-second load times" },
      { icon: Target, title: "Conversion Focused", description: "Strategic UX design that guides visitors to action" },
      { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security and 99.9% uptime" },
      { icon: BarChart3, title: "Analytics Ready", description: "Built-in tracking for data-driven decisions" },
    ],
    benefits: [
      "Increase conversions by up to 150%",
      "Reduce bounce rates by 40%",
      "Improve search engine rankings",
      "Easy content management",
      "Mobile-first responsive design",
      "Ongoing support and maintenance"
    ],
    process: [
      { step: "01", title: "Discovery", description: "Deep dive into your goals, audience, and requirements" },
      { step: "02", title: "Strategy", description: "Develop wireframes and conversion-focused site architecture" },
      { step: "03", title: "Design", description: "Create stunning visuals aligned with your brand" },
      { step: "04", title: "Development", description: "Build with clean code and modern technologies" },
      { step: "05", title: "Launch", description: "Thorough testing and smooth deployment" },
    ]
  },
  "seo": {
    title: "SEO Services",
    subtitle: "Dominate Search Rankings",
    description: "Data-driven search engine optimization strategies that boost visibility, drive organic traffic, and deliver sustainable growth.",
    icon: Search,
    color: "business",
    problem: {
      title: "Struggling to Get Found Online?",
      points: [
        "Competitors outranking you for key terms",
        "Declining organic traffic and visibility",
        "High cost-per-acquisition from paid ads",
        "No clear SEO strategy or roadmap",
        "Lack of qualified leads from search"
      ]
    },
    solution: {
      title: "Rank Higher. Get Found. Grow Faster.",
      description: "Our SEO experts develop custom strategies based on competitive analysis, keyword research, and technical optimization to help you dominate search results."
    },
    features: [
      { icon: Target, title: "Keyword Strategy", description: "Research-backed targeting of high-value keywords" },
      { icon: Zap, title: "Technical SEO", description: "Site speed, structure, and crawlability optimization" },
      { icon: Users, title: "Content Strategy", description: "SEO-driven content that ranks and converts" },
      { icon: BarChart3, title: "Reporting", description: "Transparent monthly reports on rankings and traffic" },
    ],
    benefits: [
      "First-page rankings for target keywords",
      "Sustainable organic traffic growth",
      "Lower customer acquisition costs",
      "Improved brand visibility and authority",
      "Higher quality leads from search",
      "Competitive advantage in your market"
    ],
    process: [
      { step: "01", title: "Audit", description: "Comprehensive technical and content SEO audit" },
      { step: "02", title: "Research", description: "Keyword and competitor analysis" },
      { step: "03", title: "Optimize", description: "On-page and technical improvements" },
      { step: "04", title: "Build", description: "Authority building through quality backlinks" },
      { step: "05", title: "Measure", description: "Track rankings, traffic, and conversions" },
    ]
  },
  "inventory-management": {
    title: "Inventory Management",
    subtitle: "Optimize Your Operations",
    description: "Smart inventory solutions that reduce costs, prevent stockouts, and streamline your supply chain operations.",
    icon: Package,
    color: "business",
    problem: {
      title: "Inventory Chaos Costing You Money?",
      points: [
        "Frequent stockouts losing sales",
        "Excess inventory tying up capital",
        "Manual tracking causing errors",
        "No visibility across locations",
        "Difficult forecasting and planning"
      ]
    },
    solution: {
      title: "Smart Inventory. Smarter Business.",
      description: "We implement and optimize inventory management systems that give you real-time visibility, automated reordering, and data-driven forecasting."
    },
    features: [
      { icon: BarChart3, title: "Real-Time Tracking", description: "Live inventory visibility across all locations" },
      { icon: Zap, title: "Auto-Reordering", description: "Intelligent alerts and automated purchase orders" },
      { icon: Target, title: "Demand Forecasting", description: "AI-powered predictions to optimize stock levels" },
      { icon: Shield, title: "Integration", description: "Seamless connection with your existing systems" },
    ],
    benefits: [
      "Reduce carrying costs by 25%",
      "Eliminate stockouts",
      "Free up working capital",
      "Improve order accuracy to 99%+",
      "Streamline warehouse operations",
      "Data-driven purchasing decisions"
    ],
    process: [
      { step: "01", title: "Assessment", description: "Analyze current processes and pain points" },
      { step: "02", title: "Design", description: "Configure system to your workflows" },
      { step: "03", title: "Migrate", description: "Clean data migration and integration" },
      { step: "04", title: "Train", description: "Comprehensive team training" },
      { step: "05", title: "Optimize", description: "Ongoing refinement and support" },
    ]
  },
  "front-desk-operations": {
    title: "Front Desk Operations",
    subtitle: "Elevate Patient Experience",
    description: "Efficient patient scheduling, registration, and front office management that improves satisfaction and reduces no-shows.",
    icon: Calendar,
    color: "healthcare",
    problem: {
      title: "Front Desk Bottlenecks Hurting Your Practice?",
      points: [
        "High patient wait times causing dissatisfaction",
        "Scheduling inefficiencies and double-bookings",
        "High no-show rates impacting revenue",
        "Overwhelmed staff leading to errors",
        "Poor first impressions affecting retention"
      ]
    },
    solution: {
      title: "Streamlined Operations. Happy Patients.",
      description: "We optimize your front desk workflows, implement smart scheduling, and train staff on best practices to create a seamless patient experience."
    },
    features: [
      { icon: Calendar, title: "Smart Scheduling", description: "Optimized appointment booking and management" },
      { icon: Users, title: "Patient Portal", description: "Self-service registration and check-in" },
      { icon: Zap, title: "Automated Reminders", description: "Reduce no-shows with smart notifications" },
      { icon: Shield, title: "Insurance Verification", description: "Real-time eligibility checks" },
    ],
    benefits: [
      "Reduce patient wait times by 50%",
      "Decrease no-show rates by 30%",
      "Improve patient satisfaction scores",
      "Increase daily patient capacity",
      "Reduce administrative burden",
      "Faster insurance verification"
    ],
    process: [
      { step: "01", title: "Observe", description: "Shadow current workflows and identify bottlenecks" },
      { step: "02", title: "Design", description: "Create optimized processes and protocols" },
      { step: "03", title: "Implement", description: "Roll out new systems and workflows" },
      { step: "04", title: "Train", description: "Comprehensive staff training and coaching" },
      { step: "05", title: "Monitor", description: "Track KPIs and continuously improve" },
    ]
  },
  "medical-billing": {
    title: "Medical Billing",
    subtitle: "Maximize Your Revenue",
    description: "Expert medical billing services that maximize reimbursements, minimize claim denials, and accelerate your cash flow.",
    icon: Receipt,
    color: "healthcare",
    problem: {
      title: "Leaving Money on the Table?",
      points: [
        "High claim denial rates eating into revenue",
        "Slow reimbursement cycles hurting cash flow",
        "Coding errors leading to underpayment",
        "Staff overwhelmed with billing complexity",
        "Lack of visibility into financial performance"
      ]
    },
    solution: {
      title: "Get Paid What You've Earned.",
      description: "Our certified billing specialists handle your entire revenue cycle, from claim submission to payment posting, ensuring maximum reimbursement with minimal denials."
    },
    features: [
      { icon: Zap, title: "Clean Claims", description: "First-pass acceptance rate above 98%" },
      { icon: Clock, title: "Fast Turnaround", description: "Claims submitted within 24 hours" },
      { icon: TrendingUp, title: "Denial Management", description: "Aggressive follow-up on rejected claims" },
      { icon: BarChart3, title: "Reporting", description: "Real-time dashboards and analytics" },
    ],
    benefits: [
      "Increase collections by 15-25%",
      "Reduce claim denials by 50%",
      "Accelerate payment cycles",
      "Free up staff for patient care",
      "Full compliance assurance",
      "Transparent performance tracking"
    ],
    process: [
      { step: "01", title: "Review", description: "Analyze current billing performance" },
      { step: "02", title: "Clean", description: "Scrub claims for errors before submission" },
      { step: "03", title: "Submit", description: "Electronic submission within 24 hours" },
      { step: "04", title: "Follow Up", description: "Aggressive denial management" },
      { step: "05", title: "Report", description: "Monthly performance reviews" },
    ]
  },
  "credentialing": {
    title: "Credentialing",
    subtitle: "Fast-Track Provider Enrollment",
    description: "Streamlined credentialing and provider enrollment services that get your providers contracted faster with major payers.",
    icon: BadgeCheck,
    color: "healthcare",
    problem: {
      title: "Credentialing Delays Costing You Revenue?",
      points: [
        "Lengthy enrollment timelines",
        "Complex payer requirements",
        "Expiring credentials and re-attestation",
        "Limited staff bandwidth",
        "Revenue loss during enrollment gaps"
      ]
    },
    solution: {
      title: "Get Credentialed. Get Paid. Faster.",
      description: "Our credentialing specialists handle the entire enrollment process, from initial applications to ongoing maintenance, so your providers can focus on patients."
    },
    features: [
      { icon: Clock, title: "Fast Enrollment", description: "Reduce credentialing time by 40%" },
      { icon: Shield, title: "Compliance", description: "Stay current with all requirements" },
      { icon: Users, title: "Payer Network", description: "Access to major payers and networks" },
      { icon: BarChart3, title: "Tracking", description: "Real-time status updates and reporting" },
    ],
    benefits: [
      "Reduce enrollment time by 40%",
      "Eliminate revenue gaps",
      "Maintain 100% compliance",
      "Expand payer network",
      "Reduce administrative burden",
      "Proactive re-attestation management"
    ],
    process: [
      { step: "01", title: "Gather", description: "Collect and verify all provider documents" },
      { step: "02", title: "Apply", description: "Submit applications to selected payers" },
      { step: "03", title: "Track", description: "Monitor status and respond to requests" },
      { step: "04", title: "Complete", description: "Finalize contracts and enrollment" },
      { step: "05", title: "Maintain", description: "Ongoing credential management" },
    ]
  },
  "medical-coding": {
    title: "Medical Coding",
    subtitle: "Accurate. Compliant. Optimized.",
    description: "Expert ICD-10, CPT, and HCPCS coding that ensures accurate reimbursement while maintaining full regulatory compliance.",
    icon: FileCode,
    color: "healthcare",
    problem: {
      title: "Coding Errors Impacting Your Bottom Line?",
      points: [
        "Undercoding leaving revenue on the table",
        "Overcoding risking audits and penalties",
        "Inconsistent coding across providers",
        "Difficulty keeping up with code changes",
        "High denial rates from coding errors"
      ]
    },
    solution: {
      title: "Precise Coding. Maximum Reimbursement.",
      description: "Our certified coders ensure every encounter is coded accurately for optimal reimbursement while maintaining compliance with all regulations."
    },
    features: [
      { icon: Target, title: "Accuracy", description: "98%+ coding accuracy rate" },
      { icon: Shield, title: "Compliance", description: "Full adherence to coding guidelines" },
      { icon: Clock, title: "Turnaround", description: "48-hour coding completion" },
      { icon: BarChart3, title: "Analytics", description: "Coding patterns and optimization insights" },
    ],
    benefits: [
      "Increase reimbursement by 10-15%",
      "Reduce coding-related denials",
      "Minimize audit risk",
      "Consistent coding standards",
      "Current with code updates",
      "Detailed coding analytics"
    ],
    process: [
      { step: "01", title: "Review", description: "Analyze documentation and encounters" },
      { step: "02", title: "Code", description: "Assign accurate ICD-10, CPT, HCPCS codes" },
      { step: "03", title: "Audit", description: "Quality review before submission" },
      { step: "04", title: "Submit", description: "Clean claims to billing team" },
      { step: "05", title: "Analyze", description: "Identify optimization opportunities" },
    ]
  },
  "ar-recovery": {
    title: "A/R Recovery",
    subtitle: "Recover Your Revenue",
    description: "Aggressive accounts receivable recovery strategies that turn aged receivables into collected revenue.",
    icon: TrendingUp,
    color: "healthcare",
    problem: {
      title: "Aged A/R Draining Your Resources?",
      points: [
        "High percentage of A/R over 90 days",
        "Limited staff to work aged accounts",
        "Increasing bad debt write-offs",
        "Unclear denial patterns and root causes",
        "Cash flow constraints from delayed payments"
      ]
    },
    solution: {
      title: "Turn Aged Receivables Into Cash.",
      description: "Our A/R recovery specialists aggressively work your aged accounts, identify denial trends, and implement strategies to accelerate collections."
    },
    features: [
      { icon: TrendingUp, title: "Recovery Rate", description: "Recover 30-50% of written-off A/R" },
      { icon: Zap, title: "Aggressive Follow-Up", description: "Persistent payer engagement" },
      { icon: Target, title: "Root Cause Analysis", description: "Identify and fix denial patterns" },
      { icon: BarChart3, title: "Reporting", description: "Weekly recovery progress updates" },
    ],
    benefits: [
      "Recover 30-50% of aged A/R",
      "Reduce days in A/R",
      "Improve cash flow",
      "Identify systemic issues",
      "Reduce future denials",
      "No recovery, no fee options"
    ],
    process: [
      { step: "01", title: "Analyze", description: "Review aged A/R and identify opportunities" },
      { step: "02", title: "Prioritize", description: "Focus on highest-value recovery targets" },
      { step: "03", title: "Pursue", description: "Aggressive payer follow-up" },
      { step: "04", title: "Appeal", description: "Strategic appeals for denied claims" },
      { step: "05", title: "Collect", description: "Secure payment and post" },
    ]
  },
  "rcm": {
    title: "Revenue Cycle Management",
    subtitle: "End-to-End Financial Optimization",
    description: "Comprehensive revenue cycle management that optimizes every step from patient intake to final payment.",
    icon: Workflow,
    color: "healthcare",
    problem: {
      title: "Revenue Cycle Leaks Costing You?",
      points: [
        "Disconnected processes across the revenue cycle",
        "Lack of visibility into financial performance",
        "Inconsistent denial management",
        "High operational costs",
        "Difficulty scaling operations"
      ]
    },
    solution: {
      title: "Optimize Your Entire Revenue Cycle.",
      description: "Our end-to-end RCM solution integrates all financial operations, from scheduling to collections, maximizing revenue while reducing costs."
    },
    features: [
      { icon: Workflow, title: "End-to-End", description: "Complete revenue cycle management" },
      { icon: BarChart3, title: "Analytics", description: "Real-time financial dashboards" },
      { icon: Users, title: "Dedicated Team", description: "Assigned specialists for your practice" },
      { icon: Shield, title: "Compliance", description: "Full regulatory adherence" },
    ],
    benefits: [
      "Increase net collections by 15-30%",
      "Reduce days in A/R by 20%",
      "Lower denial rates by 40%",
      "Improve operational efficiency",
      "Real-time performance visibility",
      "Scalable as you grow"
    ],
    process: [
      { step: "01", title: "Assess", description: "Comprehensive revenue cycle audit" },
      { step: "02", title: "Design", description: "Custom RCM solution architecture" },
      { step: "03", title: "Implement", description: "Phased rollout of services" },
      { step: "04", title: "Manage", description: "Ongoing operations and optimization" },
      { step: "05", title: "Review", description: "Quarterly business reviews" },
    ]
  },
};

export default function ServicePage() {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = servicesData[serviceSlug || ""];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;
  const colorClass = service.color === "business" ? "business" : "healthcare";

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
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
              service.color === "business" 
                ? "bg-business/20 text-business-foreground" 
                : "bg-healthcare/20 text-healthcare-foreground"
            }`}>
              <ServiceIcon className="h-4 w-4" />
              <span className="text-sm font-semibold">
                {service.color === "business" ? "Business Solution" : "Healthcare Solution"}
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 animate-fade-up">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-accent font-semibold mb-4 animate-fade-up delay-100">
              {service.subtitle}
            </p>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mb-8 animate-fade-up delay-200">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <Button variant="hero" size="lg" asChild>
                <Link to="/consultation">
                  Get Started
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
                service.color === "business"
                  ? "bg-business/10 text-business"
                  : "bg-healthcare/10 text-healthcare"
              }`}>
                The Challenge
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                {service.problem.title}
              </h2>
            </div>
            <div className="space-y-4">
              {service.problem.points.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-destructive/5 border border-destructive/10 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
              service.color === "business"
                ? "bg-business/10 text-business"
                : "bg-healthcare/10 text-healthcare"
            }`}>
              Our Solution
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {service.solution.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {service.solution.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <div 
                key={feature.title}
                className="p-6 rounded-xl bg-card border border-border card-hover animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  service.color === "business" ? "bg-business/10" : "bg-healthcare/10"
                }`}>
                  <feature.icon className={`h-6 w-6 ${
                    service.color === "business" ? "text-business" : "text-healthcare"
                  }`} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
                service.color === "business"
                  ? "bg-business/10 text-business"
                  : "bg-healthcare/10 text-healthcare"
              }`}>
                Benefits
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Partner With Us?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our proven approach delivers measurable results that impact your bottom line.
              </p>
              <Button variant={service.color === "business" ? "business" : "healthcare"} size="lg" asChild>
                <Link to="/consultation">
                  Schedule Consultation
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4">
              {service.benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle2 className={`h-5 w-5 flex-shrink-0 ${
                    service.color === "business" ? "text-business" : "text-healthcare"
                  }`} />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
              service.color === "business"
                ? "bg-business/10 text-business"
                : "bg-healthcare/10 text-healthcare"
            }`}>
              Our Process
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven methodology that delivers consistent results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {service.process.map((step, index) => (
              <div 
                key={step.step}
                className="relative p-6 rounded-xl bg-card border border-border card-hover animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`text-4xl font-display font-bold mb-4 ${
                  service.color === "business" ? "text-business/20" : "text-healthcare/20"
                }`}>
                  {step.step}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
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
