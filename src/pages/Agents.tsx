
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Agents = () => {
  // Mock agents data
  const agents = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Real Estate Agent",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b02c?ixlib=rb-4.0.3&w=400",
      rating: 4.9,
      reviews: 127,
      properties: 45,
      phone: "+1 (555) 123-4567",
      email: "sarah.johnson@luxuryrealty.com",
      specialties: ["Luxury Homes", "Penthouses", "Investment Properties"],
      experience: "8 years"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Luxury Property Specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=400",
      rating: 4.8,
      reviews: 89,
      properties: 32,
      phone: "+1 (555) 234-5678",
      email: "michael.chen@luxuryrealty.com",
      specialties: ["Waterfront Properties", "Commercial", "New Developments"],
      experience: "6 years"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "International Properties Expert",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=400",
      rating: 5.0,
      reviews: 156,
      properties: 67,
      phone: "+1 (555) 345-6789",
      email: "emily.rodriguez@luxuryrealty.com",
      specialties: ["International Sales", "Luxury Condos", "First-Time Buyers"],
      experience: "10 years"
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-sm ${
            i < Math.floor(rating) ? 'text-luxury-gold' : 'text-luxury-neutral'
          }`}
        >
          ★
        </span>
      ))}
      <span className="ml-2 text-luxury-text-muted">{rating}</span>
    </div>
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-luxury-text mb-4">Meet Our Agents</h1>
          <p className="text-luxury-text-muted max-w-2xl mx-auto">
            Our team of experienced professionals is dedicated to helping you find your dream property 
            or achieve the best value for your investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <Card key={agent.id} className="bg-luxury-light border-luxury-neutral overflow-hidden group hover:shadow-luxury transition-all duration-300">
              <div className="relative">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={agent.image} 
                    alt={agent.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/50 to-transparent"></div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-16 w-16 mr-4 border-2 border-luxury-gold">
                    <AvatarImage src={agent.image} alt={agent.name} />
                    <AvatarFallback className="bg-luxury-gold text-luxury-dark font-bold">
                      {agent.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold text-luxury-text">{agent.name}</h3>
                    <p className="text-luxury-text-muted">{agent.title}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <StarRating rating={agent.rating} />
                  <p className="text-sm text-luxury-text-muted mt-1">
                    {agent.reviews} reviews • {agent.properties} properties sold
                  </p>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-luxury-text-muted">Experience:</span>
                    <span className="text-luxury-text">{agent.experience}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-luxury-text-muted">Phone:</span>
                    <span className="text-luxury-text ml-2">{agent.phone}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-luxury-text-muted">Email:</span>
                    <span className="text-luxury-text ml-2">{agent.email}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-luxury-text mb-2 font-medium">Specialties:</p>
                  <div className="flex flex-wrap gap-2">
                    {agent.specialties.map((specialty, index) => (
                      <Badge 
                        key={index} 
                        className="bg-luxury-gold/20 text-luxury-gold border-luxury-gold/50 hover:bg-luxury-gold hover:text-luxury-dark transition-colors text-xs px-2 py-1"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="luxury" className="flex-1">Contact Agent</Button>
                  <Button variant="outline" className="flex-1 border-luxury-neutral text-luxury-text hover:bg-luxury-gold hover:text-luxury-dark">View Listings</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Agents;
