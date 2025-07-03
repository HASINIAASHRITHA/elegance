import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Heart, Calendar } from "lucide-react";

const PropertyDetail = () => {
  const { id } = useParams();
  
  // Mock property data
  const property = {
    id: id,
    title: "Luxury Penthouse with City Views",
    price: "$2,500,000",
    location: "Manhattan, New York",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2800,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3"
    ],
    virtualTour: "https://my.matterport.com/show/?m=example",
    description: "Experience luxury living at its finest in this stunning penthouse featuring floor-to-ceiling windows, premium finishes, and breathtaking city views.",
    features: ["City Views", "Balcony", "Modern Kitchen", "Walk-in Closet", "24/7 Concierge"]
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          <div className="lg:col-span-2">
            <img 
              src={property.images[0]} 
              alt={property.title}
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {property.images.slice(1).map((img, index) => (
              <img 
                key={index}
                src={img}
                alt={`${property.title} ${index + 2}`}
                className="w-full h-48 lg:h-60 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Property Details */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-luxury-text">{property.title}</h1>
                <Button variant="ghost" size="icon">
                  <Heart className="h-6 w-6" />
                </Button>
              </div>
              <div className="flex items-center text-luxury-text-muted mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                {property.location}
              </div>
              <div className="text-3xl font-bold text-luxury-gold mb-4">{property.price}</div>
              
              <div className="flex gap-4 mb-6">
                <Badge variant="outline">{property.bedrooms} Bedrooms</Badge>
                <Badge variant="outline">{property.bathrooms} Bathrooms</Badge>
                <Badge variant="outline">{property.sqft} sqft</Badge>
              </div>
            </div>

            <Card className="bg-luxury-light border-luxury-neutral">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-luxury-text mb-4">Description</h3>
                <p className="text-luxury-text-muted leading-relaxed">{property.description}</p>
              </CardContent>
            </Card>

            <Card className="bg-luxury-light border-luxury-neutral">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-luxury-text mb-4">Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-luxury-text-muted">
                      <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Virtual Tour */}
            <Card className="bg-luxury-light border-luxury-neutral">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-luxury-text mb-4">Virtual Tour</h3>
                <div className="aspect-video bg-luxury-neutral rounded-lg flex items-center justify-center">
                  <Button variant="luxury">Launch Virtual Tour</Button>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="bg-luxury-light border-luxury-neutral">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-luxury-text mb-4">Location</h3>
                <div className="aspect-video bg-luxury-neutral rounded-lg flex items-center justify-center">
                  <p className="text-luxury-text-muted">Interactive Map (Google Maps Integration)</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <Card className="bg-luxury-light border-luxury-neutral sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-luxury-text mb-4">Contact Agent</h3>
                <form className="space-y-4">
                  <Input placeholder="Your Name" className="bg-luxury-dark border-luxury-neutral" />
                  <Input placeholder="Email" type="email" className="bg-luxury-dark border-luxury-neutral" />
                  <Input placeholder="Phone" className="bg-luxury-dark border-luxury-neutral" />
                  <Textarea 
                    placeholder="Message" 
                    className="bg-luxury-dark border-luxury-neutral min-h-24"
                  />
                  <Button variant="luxury" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-luxury-light border-luxury-neutral">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-luxury-text mb-4">Schedule Visit</h3>
                <Link to="/booking">
                  <Button variant="outline" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book a Visit
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyDetail;