
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const SellersGuide = () => {
  const steps = [
    {
      step: 1,
      title: "Property Preparation",
      description: "Optimize your property's presentation with professional staging, repairs, and luxury enhancements."
    },
    {
      step: 2,
      title: "Market Analysis",
      description: "Receive a comprehensive market analysis to determine the optimal pricing strategy for your luxury property."
    },
    {
      step: 3,
      title: "Professional Marketing",
      description: "Launch a premium marketing campaign featuring professional photography, virtual tours, and targeted advertising."
    },
    {
      step: 4,
      title: "Qualified Buyer Screening",
      description: "Attract and screen qualified buyers through our extensive network and marketing channels."
    },
    {
      step: 5,
      title: "Negotiation & Offers",
      description: "Expert negotiation to secure the best possible terms and maximize your property's value."
    },
    {
      step: 6,
      title: "Closing Process",
      description: "Smooth transaction management from contract to closing, ensuring all details are handled professionally."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-luxury-text mb-8 text-center">Seller's Guide</h1>
          <p className="text-xl text-luxury-text-muted text-center mb-12">
            Maximize your luxury property's value with our proven selling process and expert guidance.
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
              <h2 className="text-3xl font-bold text-luxury-text mb-6 text-center">Selling Success Factors</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-luxury-gold mb-2">98%</div>
                  <h4 className="text-xl font-semibold text-luxury-text mb-2">List Price Achieved</h4>
                  <p className="text-luxury-text-muted">Average percentage of list price</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-luxury-gold mb-2">35</div>
                  <h4 className="text-xl font-semibold text-luxury-text mb-2">Days on Market</h4>
                  <p className="text-luxury-text-muted">Average time to sell</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-luxury-gold mb-2">100%</div>
                  <h4 className="text-xl font-semibold text-luxury-text mb-2">Client Satisfaction</h4>
                  <p className="text-luxury-text-muted">Satisfied seller rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default SellersGuide;
