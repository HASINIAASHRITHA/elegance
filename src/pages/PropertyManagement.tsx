
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PropertyManagement = () => {
  const services = [
    {
      title: "Tenant Management",
      description: "Comprehensive tenant screening, lease management, and relationship maintenance for your luxury properties."
    },
    {
      title: "Maintenance & Repairs",
      description: "24/7 property maintenance services with a network of certified luxury property specialists."
    },
    {
      title: "Financial Management",
      description: "Detailed financial reporting, rent collection, and expense management for maximum ROI."
    },
    {
      title: "Marketing & Leasing",
      description: "Professional marketing and leasing services to minimize vacancy and maximize rental income."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-luxury-text mb-8 text-center">Property Management</h1>
          <p className="text-xl text-luxury-text-muted text-center mb-12">
            Professional property management services for luxury real estate investors and property owners.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="bg-luxury-light border-luxury-neutral">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-luxury-text mb-4">{service.title}</h3>
                  <p className="text-luxury-text-muted leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-luxury-light border-luxury-neutral mb-12">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-luxury-text mb-6 text-center">Why Choose Our Management Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-luxury-dark font-bold text-xl">24/7</span>
                  </div>
                  <h4 className="text-xl font-semibold text-luxury-text mb-2">Support</h4>
                  <p className="text-luxury-text-muted">Round-the-clock property management support</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-luxury-dark font-bold text-xl">98%</span>
                  </div>
                  <h4 className="text-xl font-semibold text-luxury-text mb-2">Satisfaction</h4>
                  <p className="text-luxury-text-muted">Client satisfaction rate</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-luxury-dark font-bold text-xl">5+</span>
                  </div>
                  <h4 className="text-xl font-semibold text-luxury-text mb-2">Years</h4>
                  <p className="text-luxury-text-muted">Average client relationship</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button variant="luxury" size="lg">Get Management Quote</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyManagement;
