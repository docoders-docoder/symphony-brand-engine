import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const businessLinks = [
  { name: "Website Development", href: "/services/website-development" },
  { name: "SEO", href: "/services/seo" },
  { name: "Inventory Management", href: "/services/inventory-management" },
];

const healthcareLinks = [
  { name: "Front Desk Operations", href: "/services/front-desk-operations" },
  { name: "Medical Billing", href: "/services/medical-billing" },
  { name: "Credentialing", href: "/services/credentialing" },
  { name: "Medical Coding", href: "/services/medical-coding" },
  { name: "A/R Recovery", href: "/services/ar-recovery" },
  { name: "Revenue Cycle Management", href: "/services/rcm" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg inline-flex items-center">
  <img
    src="/logo.png"
    alt="Logo"
    className="h-6 w-auto"
  />
</span>

              </div>
              <span className="font-display font-bold text-xl">SunridgeSolutions</span>
            </Link>
            <p className="text-primary-foreground/70 max-w-sm">
              Your trusted partner for digital transformation and healthcare operational excellence. We deliver solutions that drive measurable results.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Business Solutions */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider">Business Solutions</h4>
            <ul className="space-y-3">
              {businessLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Healthcare Solutions */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider">Healthcare Solutions</h4>
            <ul className="space-y-3">
              {healthcareLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-4 space-y-3">
              <a href="mailto:contact@nexaserve.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                <Mail className="h-4 w-4" />
                contact@nexaserve.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                <Phone className="h-4 w-4" />
                (123) 456-7890
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} NexaServe. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-primary-foreground/50 text-xs">HIPAA Compliant</span>
            <span className="text-primary-foreground/50 text-xs">SOC 2 Type II</span>
            <span className="text-primary-foreground/50 text-xs">ISO 27001</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
