
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Heart, Trash2 } from "lucide-react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: "Luxury Penthouse",
      price: "$2,500,000",
      location: "Manhattan, NY",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2800,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&w=800",
      type: "Penthouse"
    },
    {
      id: 2,
      title: "Modern Villa",
      price: "$1,800,000",
      location: "Beverly Hills, CA",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3500,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&w=800",
      type: "Villa"
    }
  ]);

  const [compareList, setCompareList] = useState([
    {
      id: 1,
      title: "Luxury Penthouse",
      price: "$2,500,000",
      location: "Manhattan, NY",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2800,
      yearBuilt: 2020,
      parking: 2,
      features: ["City Views", "Balcony", "Modern Kitchen"]
    },
    {
      id: 2,
      title: "Modern Villa",
      price: "$1,800,000",
      location: "Beverly Hills, CA",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3500,
      yearBuilt: 2019,
      parking: 3,
      features: ["Pool", "Garden", "Home Theater"]
    }
  ]);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  const removeFromCompare = (id: number) => {
    setCompareList(compareList.filter(item => item.id !== id));
  };

  const FavoriteCard = ({ property }: { property: typeof favorites[0] }) => (
    <Card className="bg-luxury-light border-luxury-neutral overflow-hidden group hover:shadow-luxury transition-all duration-300">
      <div className="relative">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm hover:bg-white/30"
          onClick={() => removeFavorite(property.id)}
        >
          <Trash2 className="h-4 w-4 text-white" />
        </Button>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-luxury-text mb-2">{property.title}</h3>
        <div className="flex items-center text-luxury-text-muted mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          {property.location}
        </div>
        <div className="text-xl font-bold text-luxury-gold mb-3">{property.price}</div>
        <div className="flex gap-2 flex-wrap mb-4">
          <Badge variant="outline" className="border-luxury-neutral text-luxury-text">{property.bedrooms} bed</Badge>
          <Badge variant="outline" className="border-luxury-neutral text-luxury-text">{property.bathrooms} bath</Badge>
          <Badge variant="outline" className="border-luxury-neutral text-luxury-text">{property.sqft} sqft</Badge>
        </div>
        <Link to={`/property/${property.id}`}>
          <Button variant="luxury" className="w-full">View Details</Button>
        </Link>
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-luxury-text mb-8">Favorites & Compare</h1>

        <Tabs defaultValue="favorites" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-luxury-light border-luxury-neutral">
            <TabsTrigger value="favorites" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-luxury-dark">
              Saved Favorites ({favorites.length})
            </TabsTrigger>
            <TabsTrigger value="compare" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-luxury-dark">
              Compare Properties ({compareList.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="favorites" className="mt-8">
            {favorites.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favorites.map((property) => (
                  <FavoriteCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <Card className="bg-luxury-light border-luxury-neutral">
                <CardContent className="p-12 text-center">
                  <Heart className="h-16 w-16 text-luxury-neutral mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-luxury-text mb-2">No favorites yet</h3>
                  <p className="text-luxury-text-muted mb-4">
                    Start browsing properties and save your favorites to see them here.
                  </p>
                  <Link to="/properties">
                    <Button variant="luxury">Browse Properties</Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="compare" className="mt-8">
            {compareList.length > 0 ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {compareList.map((property) => (
                    <Card key={property.id} className="bg-luxury-light/90 border-luxury-neutral shadow-luxury">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-semibold text-luxury-text">{property.title}</h3>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => removeFromCompare(property.id)}
                            className="text-luxury-text-muted hover:text-luxury-text hover:bg-luxury-neutral/50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center p-3 bg-luxury-dark/30 rounded-lg">
                            <span className="text-luxury-text font-medium">Price:</span>
                            <span className="text-luxury-gold font-bold text-lg">{property.price}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-luxury-dark/20 rounded-lg">
                            <span className="text-luxury-text font-medium">Location:</span>
                            <span className="text-luxury-text">{property.location}</span>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="flex justify-between items-center p-2 bg-luxury-dark/20 rounded">
                              <span className="text-luxury-text-muted text-sm">Bedrooms:</span>
                              <span className="text-luxury-text font-medium">{property.bedrooms}</span>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-luxury-dark/20 rounded">
                              <span className="text-luxury-text-muted text-sm">Bathrooms:</span>
                              <span className="text-luxury-text font-medium">{property.bathrooms}</span>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="flex justify-between items-center p-2 bg-luxury-dark/20 rounded">
                              <span className="text-luxury-text-muted text-sm">Square Feet:</span>
                              <span className="text-luxury-text font-medium">{property.sqft}</span>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-luxury-dark/20 rounded">
                              <span className="text-luxury-text-muted text-sm">Year Built:</span>
                              <span className="text-luxury-text font-medium">{property.yearBuilt}</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-luxury-dark/20 rounded-lg">
                            <span className="text-luxury-text font-medium">Parking:</span>
                            <span className="text-luxury-text">{property.parking} spaces</span>
                          </div>
                          <div className="p-3 bg-luxury-dark/20 rounded-lg">
                            <span className="text-luxury-text font-medium mb-2 block">Features:</span>
                            <div className="flex flex-wrap gap-2">
                              {property.features.map((feature, index) => (
                                <Badge 
                                  key={index} 
                                  className="bg-luxury-gold/20 text-luxury-gold border-luxury-gold/50 text-xs"
                                >
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <Link to={`/property/${property.id}`} className="block mt-6">
                          <Button variant="luxury" className="w-full">View Details</Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <Card className="bg-luxury-light border-luxury-neutral">
                <CardContent className="p-12 text-center">
                  <div className="text-6xl mb-4">⚖️</div>
                  <h3 className="text-xl font-semibold text-luxury-text mb-2">No properties to compare</h3>
                  <p className="text-luxury-text-muted mb-4">
                    Add properties to your comparison list to see side-by-side specifications.
                  </p>
                  <Link to="/properties">
                    <Button variant="luxury">Browse Properties</Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Favorites;
