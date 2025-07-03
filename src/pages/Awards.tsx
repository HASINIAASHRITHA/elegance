
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const Awards = () => {
  const awards = [
    {
      title: "Luxury Real Estate Agency of the Year",
      year: "2024",
      organization: "International Luxury Real Estate Awards",
      description: "Recognized for outstanding service and record-breaking luxury property sales exceeding $500M in annual transactions. This prestigious award acknowledges our commitment to excellence and innovation in the luxury real estate sector.",
      category: "Industry Excellence"
    },
    {
      title: "Best Customer Service Award",
      year: "2023",
      organization: "Real Estate Excellence Awards",
      description: "Awarded for exceptional client satisfaction and personalized service delivery, maintaining a 98% customer satisfaction rate. This recognition reflects our dedication to exceeding client expectations in every transaction.",
      category: "Client Service"
    },
    {
      title: "Top 1% of Luxury Agents Worldwide",
      year: "2023",
      organization: "Global Luxury Real Estate Network",
      description: "Recognition for being among the top-performing luxury real estate agents globally, with team members consistently ranking in the top percentile for sales volume and client satisfaction.",
      category: "Performance"
    },
    {
      title: "Forbes Real Estate All-Star",
      year: "2023",
      organization: "Forbes Magazine",
      description: "CEO Sarah Johnson named to Forbes Real Estate All-Star list for exceptional leadership and innovation in luxury real estate markets. This exclusive recognition is given to fewer than 50 professionals nationwide.",
      category: "Leadership"
    },
    {
      title: "Digital Innovation in Real Estate",
      year: "2022",
      organization: "PropTech Awards",
      description: "Recognized for pioneering virtual reality property tours and AI-powered property matching systems that revolutionized the luxury home buying experience during the digital transformation era.",
      category: "Innovation"
    },
    {
      title: "Sustainable Luxury Real Estate Leader",
      year: "2022",
      organization: "Green Building Council",
      description: "Awarded for promoting sustainable luxury properties and green building practices. Over 60% of our luxury listings feature eco-friendly amenities and LEED certifications.",
      category: "Sustainability"
    },
    {
      title: "International Business Excellence",
      year: "2021",
      organization: "Global Real Estate Institute",
      description: "Recognition for successfully facilitating over $200M in cross-border luxury real estate transactions, connecting international investors with premium U.S. properties.",
      category: "International"
    },
    {
      title: "Luxury Marketing Campaign of the Year",
      year: "2021",
      organization: "Luxury Marketing Awards",
      description: "Honored for our innovative marketing campaign that utilized drone photography, 3D virtual tours, and targeted digital advertising to achieve record-breaking property sale prices.",
      category: "Marketing"
    }
  ];

  const certifications = [
    "Certified Luxury Home Marketing Specialist (CLHMS)",
    "Certified International Property Specialist (CIPS)",
    "LEED Accredited Professional",
    "Certified Commercial Investment Member (CCIM)",
    "Graduate Realtor Institute (GRI)"
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-luxury-text mb-8 text-center">Awards & Recognition</h1>
          <p className="text-xl text-luxury-text-muted text-center mb-4">
            Our commitment to excellence has been recognized by industry leaders worldwide.
          </p>
          <p className="text-lg text-luxury-text-muted text-center mb-12">
            These accolades reflect our team's dedication to setting new standards in luxury real estate 
            and our unwavering commitment to client satisfaction.
          </p>

          <div className="space-y-8">
            {awards.map((award, index) => (
              <Card key={index} className="bg-luxury-light border-luxury-neutral">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-2xl font-bold text-luxury-text mr-4">{award.title}</h3>
                        <span className="bg-luxury-gold text-luxury-dark px-3 py-1 rounded-full text-sm font-semibold">
                          {award.category}
                        </span>
                      </div>
                      <p className="text-luxury-gold font-semibold mb-2">{award.organization}</p>
                      <p className="text-luxury-text-muted leading-relaxed">{award.description}</p>
                    </div>
                    <div className="text-right ml-6">
                      <div className="text-4xl font-bold text-luxury-gold">{award.year}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <Card className="bg-luxury-light border-luxury-neutral">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-luxury-text mb-6 text-center">Professional Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-luxury-dark/10 rounded-lg">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                      <span className="text-luxury-text font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-luxury-light border-luxury-neutral">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-luxury-text mb-4">Industry Recognition</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-luxury-gold mb-2">8</div>
                    <p className="text-luxury-text font-semibold">Awards Won</p>
                    <p className="text-luxury-text-muted text-sm">In the last 4 years</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-luxury-gold mb-2">Top 1%</div>
                    <p className="text-luxury-text font-semibold">Global Ranking</p>
                    <p className="text-luxury-text-muted text-sm">Among luxury agents</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-luxury-gold mb-2">98%</div>
                    <p className="text-luxury-text font-semibold">Client Satisfaction</p>
                    <p className="text-luxury-text-muted text-sm">Consistently maintained</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Awards;
