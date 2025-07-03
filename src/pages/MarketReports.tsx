
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MarketReports = () => {
  const reports = [
    {
      title: "Q1 2024 Luxury Market Report",
      date: "March 2024",
      summary: "Comprehensive analysis of luxury real estate trends in major metropolitan areas.",
      downloadUrl: "#"
    },
    {
      title: "Annual Luxury Market Outlook 2024",
      date: "January 2024",
      summary: "Forward-looking analysis and predictions for the luxury real estate market.",
      downloadUrl: "#"
    },
    {
      title: "Waterfront Properties Market Analysis",
      date: "December 2023",
      summary: "Specialized report focusing on waterfront luxury properties and market dynamics.",
      downloadUrl: "#"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-luxury-text mb-8 text-center">Market Reports</h1>
          <p className="text-xl text-luxury-text-muted text-center mb-12">
            Stay informed with our comprehensive luxury real estate market analysis and insights.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {reports.map((report, index) => (
              <Card key={index} className="bg-luxury-light border-luxury-neutral">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-luxury-text mb-3">{report.title}</h3>
                  <p className="text-luxury-gold font-semibold mb-3">{report.date}</p>
                  <p className="text-luxury-text-muted mb-6">{report.summary}</p>
                  <Button variant="outline" className="w-full">Download Report</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-luxury-light border-luxury-neutral">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-luxury-text mb-6 text-center">Market Insights</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-luxury-gold mb-2">+15%</div>
                  <h4 className="text-xl font-semibold text-luxury-text mb-2">YoY Growth</h4>
                  <p className="text-luxury-text-muted">Luxury market appreciation</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-luxury-gold mb-2">$2.5M</div>
                  <h4 className="text-xl font-semibold text-luxury-text mb-2">Average Price</h4>
                  <p className="text-luxury-text-muted">Luxury property median</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-luxury-gold mb-2">45</div>
                  <h4 className="text-xl font-semibold text-luxury-text mb-2">Days on Market</h4>
                  <p className="text-luxury-text-muted">Average selling time</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default MarketReports;
