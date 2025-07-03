
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const BuyersGuide = () => {
  const steps = [
    {
      step: 1,
      title: "Define Your Requirements",
      description: "Determine your budget, preferred location, property type, and must-have features for your luxury home."
    },
    {
      step: 2,
      title: "Get Pre-Approved",
      description: "Secure financing pre-approval to strengthen your position when making offers on luxury properties."
    },
    {
      step: 3,
      title: "Partner with an Expert",
      description: "Work with our luxury real estate specialists who understand the high-end market dynamics."
    },
    {
      step: 4,
      title: "Property Search & Viewing",
      description: "Tour carefully curated properties that match your criteria and lifestyle requirements."
    },
    {
      step: 5,
      title: "Make an Offer",
      description: "Submit competitive offers with strategic negotiation to secure your dream property."
    },
    {
      step: 6,
      title: "Due Diligence",
      description: "Conduct thorough inspections, appraisals, and legal reviews before finalizing the purchase."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-luxury-text mb-8 text-center">Buyer's Guide</h1>
          <p className="text-xl text-luxury-text-muted text-center mb-12">
            Your comprehensive guide to purchasing luxury real estate with confidence and success.
          </p>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="bg-luxury-light border-luxury-neutral">
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                      <span className="text-luxury-dark font-bold text-xl">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-luxury-text mb-3">{step.title}</h3>
                      <p className="text-luxury-text-muted leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-luxury-light border-luxury-neutral mt-12">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-luxury-text mb-6 text-center">Key Considerations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-luxury-text mb-3">Financial Planning</h4>
                  <ul className="space-y-2 text-luxury-text-muted">
                    <li>• Total cost including taxes and fees</li>
                    <li>• Ongoing maintenance expenses</li>
                    <li>• Insurance requirements</li>
                    <li>• Property taxes and HOA fees</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-luxury-text mb-3">Property Features</h4>
                  <ul className="space-y-2 text-luxury-text-muted">
                    <li>• Architectural style and design</li>
                    <li>• Premium amenities and finishes</li>
                    <li>• Privacy and security features</li>
                    <li>• Future resale potential</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default BuyersGuide;
