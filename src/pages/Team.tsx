
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b515?ixlib=rb-4.0.3&w=400",
      bio: "With over 22 years in luxury real estate, Sarah founded EleganceEstate in 2002 after successful careers at Sotheby's International and Christie's Real Estate. She holds an MBA from Wharton and specializes in ultra-high-net-worth client relationships. Sarah has personally closed over $500M in luxury transactions and maintains exclusive relationships with international investors.",
      achievements: ["$500M+ in personal sales", "Forbes Real Estate All-Star 2023", "Licensed in NY, CA, FL"]
    },
    {
      name: "Michael Chen",
      role: "Director of Sales",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=400",
      bio: "Michael brings 15 years of expertise in high-end residential sales with extensive knowledge of luxury markets worldwide. Former Vice President at Douglas Elliman, he specializes in Manhattan penthouses and has represented notable celebrities and business leaders. Michael speaks fluent Mandarin and English, serving our international clientele.",
      achievements: ["$300M+ in career sales", "Top 1% of luxury agents globally", "Certified Luxury Home Marketing Specialist"]
    },
    {
      name: "Emily Rodriguez",
      role: "Senior Agent - Waterfront Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&w=400",
      bio: "Emily specializes in waterfront properties and luxury condominiums with a track record of excellence spanning 12 years. She holds a Master's in Real Estate Development from Columbia University and has particular expertise in Miami's luxury condo market. Emily has been featured in Architectural Digest and Luxury Real Estate Magazine.",
      achievements: ["$200M+ in waterfront sales", "Miami Luxury Agent of the Year 2023", "LEED Accredited Professional"]
    },
    {
      name: "James Thompson",
      role: "Investment Properties Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=400",
      bio: "James leads our investment properties division with 18 years of experience in commercial and residential investment real estate. Former Goldman Sachs analyst, he brings financial acumen to luxury real estate investments. James has helped clients build portfolios worth over $1 billion in luxury real estate assets.",
      achievements: ["$1B+ in investment portfolios", "CFA Charterholder", "Commercial Real Estate Expert"]
    },
    {
      name: "Isabella Martinez",
      role: "International Sales Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&w=400",
      bio: "Isabella manages our international client relationships and overseas property acquisitions. Fluent in Spanish, English, and Portuguese, she has facilitated luxury property transactions across three continents. With 14 years of experience, Isabella specializes in serving Latin American high-net-worth individuals seeking U.S. luxury properties.",
      achievements: ["International luxury specialist", "Fluent in 3 languages", "Cross-border transaction expert"]
    },
    {
      name: "David Kim",
      role: "Technology & Marketing Director",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&w=400",
      bio: "David revolutionizes how we market luxury properties through cutting-edge technology and digital strategies. With an MBA from Stanford and 10 years in luxury brand marketing, he creates immersive virtual experiences and targeted marketing campaigns that reach global luxury buyers. David's innovative approach has increased our digital engagement by 300%.",
      achievements: ["300% increase in digital engagement", "Stanford MBA", "Luxury brand marketing expert"]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-luxury-text mb-8 text-center">Our Expert Team</h1>
          <p className="text-xl text-luxury-text-muted text-center mb-4 max-w-3xl mx-auto">
            Meet the exceptional professionals who make EleganceEstate the premier choice for luxury real estate.
          </p>
          <p className="text-lg text-luxury-text-muted text-center mb-12 max-w-4xl mx-auto">
            Our team combines decades of experience, deep market knowledge, and unwavering commitment to excellence. 
            Each member brings unique expertise to serve our discerning clientele's diverse needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-luxury-light border-luxury-neutral overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-luxury-text mb-2">{member.name}</h3>
                  <p className="text-luxury-gold font-semibold mb-4">{member.role}</p>
                  <p className="text-luxury-text-muted mb-4 leading-relaxed">{member.bio}</p>
                  <div className="space-y-1">
                    {member.achievements.map((achievement, idx) => (
                      <div key={idx} className="text-sm text-luxury-text bg-luxury-dark/20 px-2 py-1 rounded">
                        • {achievement}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-luxury-light border-luxury-neutral">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-luxury-text mb-4">Join Our Team</h2>
                <p className="text-luxury-text-muted mb-4">
                  We're always looking for exceptional talent to join our award-winning team.
                </p>
                <p className="text-luxury-text-muted">
                  If you're passionate about luxury real estate and committed to excellence, we'd love to hear from you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
