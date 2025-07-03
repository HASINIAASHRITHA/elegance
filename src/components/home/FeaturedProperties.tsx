import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const FeaturedProperties = () => {
  const [activeProperty, setActiveProperty] = useState(0);

  const properties = [
    {
      id: 1,
      title: "Luxury Modern Villa",
      location: "Beverly Hills, CA",
      price: "$4,850,000",
      type: "Villa",
      bedrooms: 5,
      bathrooms: 6,
      area: "4,200 sq ft",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop",
      featured: true,
      description: "Stunning contemporary villa with panoramic city views",
    },
    {
      id: 2,
      title: "Penthouse Paradise",
      location: "Manhattan, NY",
      price: "$12,500,000",
      type: "Penthouse",
      bedrooms: 4,
      bathrooms: 5,
      area: "3,800 sq ft",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      featured: true,
      description: "Exclusive penthouse with private terrace and city skyline views",
    },
    {
      id: 3,
      title: "Oceanfront Estate",
      location: "Malibu, CA",
      price: "$18,750,000",
      type: "Estate",
      bedrooms: 7,
      bathrooms: 9,
      area: "8,500 sq ft",
      image: "https://images.unsplash.com/photo-1605276373954-0c4a0dac5cc0?w=800&h=600&fit=crop",
      featured: true,
      description: "Breathtaking oceanfront estate with private beach access",
    },
    {
      id: 4,
      title: "Historic Mansion",
      location: "Napa Valley, CA",
      price: "$9,200,000",
      type: "Mansion",
      bedrooms: 6,
      bathrooms: 7,
      area: "6,800 sq ft",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      featured: true,
      description: "Elegant historic mansion surrounded by vineyards",
    },
  ];

  return (
    <section className="py-20 bg-luxury-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-luxury-gold/20 text-luxury-gold border-luxury-gold/30">
            Featured Collection
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-luxury-text mb-6">
            Exceptional Properties
          </h2>
          <p className="text-xl text-luxury-text-muted max-w-3xl mx-auto">
            Discover our handpicked selection of the most prestigious properties, 
            each offering unparalleled luxury and sophistication.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {properties.map((property, index) => (
            <Card 
              key={property.id}
              className={cn(
                "group relative overflow-hidden bg-luxury-light border-luxury-gold/20 hover:border-luxury-gold/60 transition-all duration-500 cursor-pointer",
                index === 0 ? "md:col-span-2 lg:col-span-1" : "",
                "animate-slide-up"
              )}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setActiveProperty(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Property Type Badge */}
                <Badge className="absolute top-4 left-4 bg-luxury-gold text-luxury-dark font-semibold">
                  {property.type}
                </Badge>

                {/* Quick Info on Hover */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-luxury-text">{property.bedrooms}</div>
                        <div className="text-xs text-luxury-text-muted">Bedrooms</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-luxury-text">{property.bathrooms}</div>
                        <div className="text-xs text-luxury-text-muted">Bathrooms</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-luxury-text">{property.area}</div>
                        <div className="text-xs text-luxury-text-muted">Area</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-luxury-text mb-2 group-hover:text-luxury-gold transition-colors duration-200">
                      {property.title}
                    </h3>
                    <p className="text-luxury-text-muted text-sm">
                      {property.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-luxury-gold">
                      {property.price}
                    </div>
                  </div>
                </div>

                <p className="text-luxury-text-muted text-sm mb-6">
                  {property.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-4 text-sm text-luxury-text-muted">
                    <span>{property.bedrooms} beds</span>
                    <span>•</span>
                    <span>{property.bathrooms} baths</span>
                    <span>•</span>
                    <span>{property.area}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-luxury-gold hover:text-luxury-dark hover:bg-luxury-gold">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <Button variant="premium" size="xl">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;