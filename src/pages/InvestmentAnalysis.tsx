
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const InvestmentAnalysis = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-luxury-text mb-8 text-center">Investment Analysis</h1>
          <p className="text-xl text-luxury-text-muted text-center mb-12">
            Make informed investment decisions with our comprehensive property investment analysis services.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-luxury-light border-luxury-neutral">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-luxury-text mb-6">Investment Calculator</h2>
                <form className="space-y-4">
                  <Input placeholder="Property Price" className="bg-luxury-dark border-luxury-neutral" />
                  <Input placeholder="Down Payment %" className="bg-luxury-dark border-luxury-neutral" />
                  <Input placeholder="Interest Rate %" className="bg-luxury-dark border-luxury-neutral" />
                  <Input placeholder="Expected Rental Income" className="bg-luxury-dark border-luxury-neutral" />
                  <Input placeholder="Annual Expenses" className="bg-luxury-dark border-luxury-neutral" />
                  <Button variant="luxury" className="w-full">Calculate ROI</Button>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-luxury-light border-luxury-neutral">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-luxury-text mb-6">Investment Services</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3 mt-2"></span>
                    <div>
                      <h4 className="font-semibold text-luxury-text">ROI Analysis</h4>
                      <p className="text-luxury-text-muted text-sm">Detailed return on investment calculations</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3 mt-2"></span>
                    <div>
                      <h4 className="font-semibold text-luxury-text">Cash Flow Projections</h4>
                      <p className="text-luxury-text-muted text-sm">Monthly and annual cash flow forecasts</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3 mt-2"></span>
                    <div>
                      <h4 className="font-semibold text-luxury-text">Market Appreciation</h4>
                      <p className="text-luxury-text-muted text-sm">Property value growth predictions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3 mt-2"></span>
                    <div>
                      <h4 className="font-semibold text-luxury-text">Risk Assessment</h4>
                      <p className="text-luxury-text-muted text-sm">Investment risk evaluation and mitigation</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-luxury-light border-luxury-neutral text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-luxury-gold mb-2">12.5%</div>
                <h4 className="text-lg font-semibold text-luxury-text mb-2">Average ROI</h4>
                <p className="text-luxury-text-muted">On luxury investment properties</p>
              </CardContent>
            </Card>
            <Card className="bg-luxury-light border-luxury-neutral text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-luxury-gold mb-2">8.2%</div>
                <h4 className="text-lg font-semibold text-luxury-text mb-2">Annual Appreciation</h4>
                <p className="text-luxury-text-muted">Historical luxury market growth</p>
              </CardContent>
            </Card>
            <Card className="bg-luxury-light border-luxury-neutral text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-luxury-gold mb-2">95%</div>
                <h4 className="text-lg font-semibold text-luxury-text mb-2">Occupancy Rate</h4>
                <p className="text-luxury-text-muted">Luxury rental properties</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InvestmentAnalysis;
