import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const businessServices = [
  { title: "Website Development", href: "/services/website-development", description: "Custom web solutions that drive growth" },
  { title: "SEO", href: "/services/seo", description: "Dominate search rankings and visibility" },
  { title: "Inventory Management", href: "/services/inventory-management", description: "Streamline operations and reduce costs" },
];

const healthcareServices = [
  { title: "Front Desk Operations", href: "/services/front-desk-operations", description: "Efficient patient scheduling and management" },
  { title: "Medical Billing", href: "/services/medical-billing", description: "Maximize reimbursements, minimize denials" },
  { title: "Credentialing", href: "/services/credentialing", description: "Fast-track provider enrollment" },
  { title: "Medical Coding", href: "/services/medical-coding", description: "Accurate coding for optimal revenue" },
  { title: "A/R Recovery", href: "/services/ar-recovery", description: "Recover aged receivables effectively" },
  { title: "Revenue Cycle Management", href: "/services/rcm", description: "End-to-end financial optimization" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-border/50">
      <nav className="container-wide flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg">N</span>
          </div>
          <span className="font-display font-bold text-xl text-foreground">NexaServe</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Business Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {businessServices.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent"
                          >
                            <div className="text-sm font-semibold leading-none">{service.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Healthcare Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-3">
                    {healthcareServices.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-healthcare/10 hover:text-healthcare focus:bg-healthcare/10 focus:text-healthcare"
                          >
                            <div className="text-sm font-semibold leading-none">{service.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact" className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
          <Button variant="accent" asChild>
            <Link to="/consultation">Book Consultation</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container-wide py-4 space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Business Solutions</p>
              {businessServices.map((service) => (
                <Link
                  key={service.title}
                  to={service.href}
                  className="block py-2 text-sm font-medium text-foreground/80 hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
            </div>
            <div className="space-y-2 pt-4 border-t border-border">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Healthcare Solutions</p>
              {healthcareServices.map((service) => (
                <Link
                  key={service.title}
                  to={service.href}
                  className="block py-2 text-sm font-medium text-foreground/80 hover:text-healthcare"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
            </div>
            <div className="pt-4 border-t border-border space-y-2">
              <Button variant="accent" className="w-full" asChild>
                <Link to="/consultation" onClick={() => setMobileMenuOpen(false)}>Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
