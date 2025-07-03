
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Explore Properties",
      links: [
        { name: "Browse All Properties", href: "/properties" },
        { name: "Luxury Homes", href: "/properties?category=luxury" },
        { name: "Apartments", href: "/properties?category=apartment" },
        { name: "Commercial", href: "/properties?category=commercial" },
        { name: "New Listings", href: "/properties?sort=newest" },
        { name: "Price Reduced", href: "/properties?sort=price-reduced" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Find an Agent", href: "/agents" },
        { name: "Mortgage Calculator", href: "/mortgage-calculator" },
        { name: "Property Valuation", href: "/valuation" },
        { name: "Market Reports", href: "/market-reports" },
        { name: "Investment Analysis", href: "/investment" },
        { name: "Property Management", href: "/property-management" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { name: "List Your Property", href: "/list-property" },
        { name: "Book a Viewing", href: "/booking" },
        { name: "Make an Enquiry", href: "/enquiry" },
        { name: "My Favorites", href: "/favorites" },
        { name: "Buyer's Guide", href: "/buyers-guide" },
        { name: "Seller's Guide", href: "/sellers-guide" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Awards & Recognition", href: "/awards" },
        { name: "Press & Media", href: "/press" },
        { name: "Testimonials", href: "/testimonials" },
      ],
    },
  ];

  return (
    <footer className="bg-luxury-darker border-t border-luxury-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center shadow-gold">
                <span className="text-luxury-dark font-bold text-2xl">E</span>
              </div>
              <span className="text-3xl font-bold text-luxury-text tracking-wide">
                Elegance
                <span className="text-luxury-gold">Estate</span>
              </span>
            </Link>
            <p className="text-luxury-text-muted mb-6 leading-relaxed">
              Your premier destination for luxury real estate. We specialize in connecting discerning clients with exceptional properties that define elegant living.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-luxury-text-muted">
                <MapPin className="w-4 h-4 text-luxury-gold" />
                <span className="text-sm">123 Luxury Lane, Elite District, City 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-luxury-text-muted">
                <Phone className="w-4 h-4 text-luxury-gold" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-luxury-text-muted">
                <Mail className="w-4 h-4 text-luxury-gold" />
                <span className="text-sm">info@eleganceestate.com</span>
              </div>
              <div className="flex items-center space-x-3 text-luxury-text-muted">
                <Clock className="w-4 h-4 text-luxury-gold" />
                <span className="text-sm">Mon-Fri: 9AM-7PM, Sat-Sun: 10AM-5PM</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <Link to="/list-property">
                <Button variant="premium" size="lg">
                  List Your Property
                </Button>
              </Link>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-luxury-text font-semibold text-lg mb-4 tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-luxury-text-muted hover:text-luxury-gold transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-luxury-gold/20 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-luxury-text mb-4">
              Stay Ahead of the Market
            </h3>
            <p className="text-luxury-text-muted mb-6">
              Subscribe to receive exclusive property listings, market insights, and investment opportunities delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-luxury-light border border-luxury-gold/30 rounded-lg text-luxury-text placeholder-luxury-text-muted focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:border-luxury-gold transition-all duration-200"
              />
              <Button variant="luxury" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-luxury-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <p className="text-luxury-text-muted text-sm mb-4 md:mb-0">
              © {currentYear} EleganceEstate. All rights reserved. Licensed Real Estate Broker.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                to="/privacy"
                className="text-luxury-text-muted hover:text-luxury-gold transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-luxury-text-muted hover:text-luxury-gold transition-colors duration-200 text-sm"
              >
                Terms of Service
              </Link>
              <Link
                to="/accessibility"
                className="text-luxury-text-muted hover:text-luxury-gold transition-colors duration-200 text-sm"
              >
                Accessibility
              </Link>
              <Link
                to="/sitemap"
                className="text-luxury-text-muted hover:text-luxury-gold transition-colors duration-200 text-sm"
              >
                Sitemap
              </Link>
            </div>
          </div>
          
          {/* Legal Disclaimer */}
          <div className="text-center">
            <p className="text-luxury-text-muted text-xs leading-relaxed">
              EleganceEstate is committed to providing equal housing opportunities. All information is deemed reliable but not guaranteed. 
              Properties may be subject to prior sale, price changes, or withdrawal without notice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
