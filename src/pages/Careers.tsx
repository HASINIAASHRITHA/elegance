
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const positions = [
    {
      title: "Senior Real Estate Agent",
      location: "New York, NY",
      type: "Full-time",
      description: "Join our elite team of luxury real estate professionals. 5+ years experience required."
    },
    {
      title: "Property Marketing Specialist",
      location: "Los Angeles, CA",
      type: "Full-time",
      description: "Create compelling marketing campaigns for luxury properties. Digital marketing expertise preferred."
    },
    {
      title: "Client Relations Manager",
      location: "Miami, FL",
      type: "Full-time",
      description: "Manage relationships with high-net-worth clients. Exceptional communication skills required."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-luxury-text mb-8 text-center">Careers</h1>
          <p className="text-xl text-luxury-text-muted text-center mb-12">
            Join our team of luxury real estate professionals and help shape the future of elegant living.
          </p>

          <Card className="bg-luxury-light border-luxury-neutral mb-12">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-luxury-text mb-4">Why Work With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div>
                  <h4 className="text-xl font-semibold text-luxury-text mb-2">Excellence</h4>
                  <p className="text-luxury-text-muted">Work with the best in luxury real estate</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-luxury-text mb-2">Growth</h4>
                  <p className="text-luxury-text-muted">Unlimited potential for career advancement</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-luxury-text mb-2">Rewards</h4>
                  <p className="text-luxury-text-muted">Competitive compensation and benefits</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-luxury-text mb-8 text-center">Open Positions</h2>
          <div className="space-y-6">
            {positions.map((position, index) => (
              <Card key={index} className="bg-luxury-light border-luxury-neutral">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-luxury-text mb-2">{position.title}</h3>
                      <p className="text-luxury-gold font-semibold">{position.location} • {position.type}</p>
                    </div>
                    <Button variant="luxury">Apply Now</Button>
                  </div>
                  <p className="text-luxury-text-muted">{position.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Careers;
