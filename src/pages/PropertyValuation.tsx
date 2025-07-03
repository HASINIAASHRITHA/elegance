
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const PropertyValuation = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-luxury-text mb-8 text-center">Property Valuation</h1>
          <p className="text-xl text-luxury-text-muted text-center mb-12">
            Get a professional valuation of your luxury property from our certified experts.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-luxury-light border-luxury-neutral">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-luxury-text mb-6">Request Valuation</h2>
                <form className="space-y-4">
                  <Input placeholder="Property Address" className="bg-luxury-dark border-luxury-neutral" />
                  <Input placeholder="Your Name" className="bg-luxury-dark border-luxury-neutral" />
                  <Input placeholder="Email" type="email" className="bg-luxury-dark border-luxury-neutral" />
                  <Input placeholder="Phone" className="bg-luxury-dark border-luxury-neutral" />
                  <Input placeholder="Property Type" className="bg-luxury-dark border-luxury-neutral" />
                  <Input placeholder="Square Footage" className="bg-luxury-dark border-luxury-neutral" />
                  <Textarea 
                    placeholder="Additional Details" 
                    className="bg-luxury-dark border-luxury-neutral min-h-24"
                  />
                  <Button variant="luxury" className="w-full">Request Valuation</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-luxury-light border-luxury-neutral">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-luxury-text mb-4">Why Choose Our Valuation?</h3>
                  <ul className="space-y-3 text-luxury-text-muted">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3 mt-2"></span>
                      Certified luxury property appraisers
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3 mt-2"></span>
                      Comprehensive market analysis
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3 mt-2"></span>
                      Detailed valuation report
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3 mt-2"></span>
                      Free consultation included
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-luxury-light border-luxury-neutral">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-luxury-text mb-4">Valuation Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-luxury-dark font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-luxury-text">Property Inspection</h4>
                        <p className="text-luxury-text-muted text-sm">Detailed on-site evaluation</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-luxury-dark font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-luxury-text">Market Analysis</h4>
                        <p className="text-luxury-text-muted text-sm">Comparable property research</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-luxury-dark font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-luxury-text">Report Delivery</h4>
                        <p className="text-luxury-text-muted text-sm">Comprehensive valuation report</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyValuation;
