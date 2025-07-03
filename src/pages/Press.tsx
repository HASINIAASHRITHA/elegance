
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const Press = () => {
  const pressReleases = [
    {
      title: "EleganceEstate Expands to International Markets",
      date: "March 15, 2024",
      excerpt: "Leading luxury real estate firm announces expansion into European and Asian markets, bringing their signature service to global clientele."
    },
    {
      title: "Record-Breaking $50M Penthouse Sale",
      date: "February 28, 2024",
      excerpt: "EleganceEstate facilitates the largest residential sale in the city's history, setting new benchmarks for luxury property transactions."
    },
    {
      title: "New Sustainable Luxury Initiative Launched",
      date: "January 10, 2024",
      excerpt: "Company introduces eco-luxury program focusing on sustainable high-end properties and green building certifications."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-luxury-text mb-8 text-center">Press & Media</h1>
          <p className="text-xl text-luxury-text-muted text-center mb-12">
            Stay updated with the latest news and announcements from EleganceEstate.
          </p>

          <div className="space-y-8">
            {pressReleases.map((article, index) => (
              <Card key={index} className="bg-luxury-light border-luxury-neutral">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-luxury-text mb-2">{article.title}</h3>
                      <p className="text-luxury-gold font-semibold mb-4">{article.date}</p>
                      <p className="text-luxury-text-muted leading-relaxed">{article.excerpt}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-luxury-light border-luxury-neutral mt-12">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-luxury-text mb-4">Media Inquiries</h2>
              <p className="text-luxury-text-muted mb-6">
                For press inquiries and media requests, please contact our communications team.
              </p>
              <div className="space-y-2">
                <p className="text-luxury-text"><strong>Email:</strong> press@eleganceestate.com</p>
                <p className="text-luxury-text"><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Press;
