
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Sitemap = () => {
  const siteStructure = [
    {
      category: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "Properties", path: "/properties" },
        { name: "Agents", path: "/agents" },
        { name: "Favorites", path: "/favorites" },
        { name: "Mortgage Calculator", path: "/mortgage-calculator" },
        { name: "Make an Enquiry", path: "/enquiry" }
      ]
    },
    {
      category: "Services",
      links: [
        { name: "Property Valuation", path: "/valuation" },
        { name: "Market Reports", path: "/market-reports" },
        { name: "Investment Analysis", path: "/investment" },
        { name: "Property Management", path: "/property-management" }
      ]
    },
    {
      category: "Resources",
      links: [
        { name: "Buyer's Guide", path: "/buyers-guide" },
        { name: "Seller's Guide", path: "/sellers-guide" },
        { name: "List Your Property", path: "/list-property" },
        { name: "Book a Viewing", path: "/booking" }
      ]
    },
    {
      category: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Our Team", path: "/team" },
        { name: "Careers", path: "/careers" },
        { name: "Awards & Recognition", path: "/awards" },
        { name: "Press & Media", path: "/press" },
        { name: "Testimonials", path: "/testimonials" }
      ]
    },
    {
      category: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
        { name: "Accessibility", path: "/accessibility" }
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-luxury-text mb-8 text-center">Sitemap</h1>
          <p className="text-xl text-luxury-text-muted text-center mb-12">
            Navigate through all pages and sections of EleganceEstate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteStructure.map((section, index) => (
              <Card key={index} className="bg-luxury-light border-luxury-neutral">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-luxury-text mb-4">{section.category}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          to={link.path}
                          className="text-luxury-text-muted hover:text-luxury-gold transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sitemap;
