import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Grid2x2, List, MapPin, Heart, Bath, Bed, Square } from "lucide-react";

const Properties = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    location: '',
    priceRange: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: ''
  });

  // Enhanced properties data with more entries
  const properties = [
    {
      id: 1,
      title: "Luxury Penthouse",
      price: "$2,500,000",
      location: "Manhattan, NY",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2800,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&w=800",
      type: "Penthouse",
      featured: true
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
      type: "Villa",
      featured: false
    },
    {
      id: 3,
      title: "Waterfront Condo",
      price: "$950,000",
      location: "Miami, FL",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1800,
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&w=800",
      type: "Condo",
      featured: false
    },
    {
      id: 4,
      title: "Historic Mansion",
      price: "$3,200,000",
      location: "Boston, MA",
      bedrooms: 6,
      bathrooms: 4,
      sqft: 5200,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&w=800",
      type: "Mansion",
      featured: true
    },
    {
      id: 5,
      title: "Contemporary Loft",
      price: "$1,250,000",
      location: "Brooklyn, NY",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 2200,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&w=800",
      type: "Loft",
      featured: false
    },
    {
      id: 6,
      title: "Beachfront Estate",
      price: "$4,500,000",
      location: "Malibu, CA",
      bedrooms: 5,
      bathrooms: 4,
      sqft: 4800,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&w=800",
      type: "Estate",
      featured: true
    }
  ];

  const PropertyCard = ({ property }: { property: typeof properties[0] }) => (
    <Card className="bg-luxury-light border-luxury-neutral overflow-hidden group cursor-pointer relative transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-luxury-gold/20 hover:scale-[1.02] hover:-translate-y-2 hover:bg-gradient-to-br hover:from-luxury-light hover:to-luxury-neutral/50 hover:border-luxury-gold/50 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="relative overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className={`w-full object-cover transition-all duration-700 ease-out group-hover:scale-110 brightness-100 group-hover:brightness-110 ${
            viewMode === 'grid' ? 'h-56' : 'h-40'
          }`}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute top-4 right-4 bg-black/20 backdrop-blur-md hover:bg-luxury-gold/90 border border-white/20 hover:border-luxury-gold hover:scale-110 transition-all duration-500 ease-out group/heart z-10"
        >
          <Heart className="h-4 w-4 text-white group-hover/heart:text-luxury-dark group-hover/heart:fill-current transition-all duration-300" />
        </Button>
        
        {property.featured && (
          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-luxury-gold to-luxury-gold-light text-luxury-dark font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-luxury-gold/30">
            ✨ Featured
          </Badge>
        )}
        
        <div className="absolute bottom-4 left-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <Badge variant="outline" className="bg-black/60 text-white border-white/30 backdrop-blur-lg hover:bg-luxury-gold/90 hover:text-luxury-dark hover:border-luxury-gold transition-all duration-300">
            {property.type}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6 relative">
        <div className={`${viewMode === 'list' ? 'flex justify-between items-start' : ''}`}>
          <div className={viewMode === 'list' ? 'flex-1' : ''}>
            <h3 className="text-xl font-bold text-luxury-text mb-3 group-hover:text-luxury-gold transition-all duration-500 group-hover:tracking-wide">
              {property.title}
            </h3>
            
            <div className="flex items-center text-luxury-text-muted mb-3 group-hover:text-luxury-gold transition-colors duration-300">
              <MapPin className="h-4 w-4 mr-2 text-luxury-gold group-hover:scale-110 transition-transform duration-300" />
              <span className="group-hover:font-medium transition-all duration-300">{property.location}</span>
            </div>
            
            <div className="text-2xl font-bold text-luxury-gold mb-4 group-hover:text-3xl group-hover:tracking-wider transition-all duration-500 ease-out">
              {property.price}
            </div>
            
            <div className="flex gap-4 flex-wrap mb-4">
              <div className="flex items-center gap-2 text-luxury-text-muted group-hover:text-luxury-text transition-colors duration-300 hover:scale-105 hover:text-luxury-gold cursor-pointer">
                <div className="p-2 rounded-lg bg-luxury-neutral/50 group-hover:bg-luxury-gold/20 transition-all duration-300">
                  <Bed className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">{property.bedrooms} beds</span>
              </div>
              
              <div className="flex items-center gap-2 text-luxury-text-muted group-hover:text-luxury-text transition-colors duration-300 hover:scale-105 hover:text-luxury-gold cursor-pointer">
                <div className="p-2 rounded-lg bg-luxury-neutral/50 group-hover:bg-luxury-gold/20 transition-all duration-300">
                  <Bath className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">{property.bathrooms} baths</span>
              </div>
              
              <div className="flex items-center gap-2 text-luxury-text-muted group-hover:text-luxury-text transition-colors duration-300 hover:scale-105 hover:text-luxury-gold cursor-pointer">
                <div className="p-2 rounded-lg bg-luxury-neutral/50 group-hover:bg-luxury-gold/20 transition-all duration-300">
                  <Square className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">{property.sqft} sqft</span>
              </div>
            </div>
          </div>
          
          {viewMode === 'list' && (
            <div className="ml-6 transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
              <Link to={`/property/${property.id}`}>
                <Button variant="luxury" size="sm" className="mb-2 hover:shadow-lg hover:shadow-luxury-gold/30 transition-all duration-300">
                  View Details
                </Button>
              </Link>
            </div>
          )}
        </div>
        
        {viewMode === 'grid' && (
          <Link to={`/property/${property.id}`} className="block">
            <Button 
              variant="luxury" 
              className="w-full group-hover:bg-gradient-to-r group-hover:from-luxury-gold group-hover:to-luxury-gold-light group-hover:text-luxury-dark group-hover:shadow-xl group-hover:shadow-luxury-gold/40 transition-all duration-500 transform group-hover:scale-105 group-hover:font-bold relative overflow-hidden"
            >
              <span className="relative z-10">View Details</span>
              <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/0 via-luxury-gold/20 to-luxury-gold/0 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
          <div className="group">
            <h1 className="text-5xl font-bold text-luxury-text mb-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-luxury-gold hover:to-luxury-gold-light transition-all duration-700 cursor-default">
              Premium <span className="text-luxury-gold group-hover:animate-pulse">Properties</span>
            </h1>
            <p className="text-luxury-text-muted text-lg group-hover:text-luxury-text transition-colors duration-500">
              Discover exceptional properties in prime locations
            </p>
          </div>
          
          <div className="flex items-center gap-3 bg-luxury-light/80 backdrop-blur-md p-2 rounded-xl border border-luxury-neutral/50 shadow-lg hover:shadow-xl hover:shadow-luxury-gold/20 transition-all duration-300">
            <Button
              variant={viewMode === 'grid' ? 'luxury' : 'ghost'}
              size="icon"
              onClick={() => setViewMode('grid')}
              className="transition-all duration-300 hover:scale-110 hover:rotate-3 active:scale-95"
            >
              <Grid2x2 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'luxury' : 'ghost'}
              size="icon"
              onClick={() => setViewMode('list')}
              className="transition-all duration-300 hover:scale-110 hover:-rotate-3 active:scale-95"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Enhanced Filters */}
        <Card className="bg-luxury-light/80 backdrop-blur-md border-luxury-neutral/50 mb-8 shadow-elegant hover:shadow-2xl hover:shadow-luxury-gold/10 transition-all duration-700 group hover:border-luxury-gold/30">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-luxury-text mb-6 group-hover:text-luxury-gold transition-colors duration-500">
              Find Your Perfect Property ✨
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="space-y-2 group/input">
                <label className="text-sm font-medium text-luxury-text group-hover/input:text-luxury-gold transition-colors duration-300">Location</label>
                <Input 
                  placeholder="Enter location" 
                  className="bg-luxury-dark/80 backdrop-blur-sm border-luxury-neutral/50 text-luxury-text placeholder:text-luxury-text-muted hover:border-luxury-gold/50 focus:border-luxury-gold transition-all duration-300 hover:shadow-lg hover:shadow-luxury-gold/10"
                  value={filters.location}
                  onChange={(e) => setFilters({...filters, location: e.target.value})}
                />
              </div>
              
              <div className="space-y-2 group/select">
                <label className="text-sm font-medium text-luxury-text group-hover/select:text-luxury-gold transition-colors duration-300">Price Range</label>
                <Select value={filters.priceRange} onValueChange={(value) => setFilters({...filters, priceRange: value})}>
                  <SelectTrigger className="bg-luxury-dark/80 backdrop-blur-sm border-luxury-neutral/50 text-luxury-text hover:border-luxury-gold/50 focus:border-luxury-gold transition-all duration-300 hover:shadow-lg hover:shadow-luxury-gold/10">
                    <SelectValue placeholder="Select price" />
                  </SelectTrigger>
                  <SelectContent className="bg-luxury-dark/95 backdrop-blur-md border-luxury-neutral/50 shadow-2xl">
                    <SelectItem value="0-500k" className="hover:bg-luxury-gold/20 hover:text-luxury-gold transition-all duration-200">$0 - $500K</SelectItem>
                    <SelectItem value="500k-1m" className="hover:bg-luxury-gold/20 hover:text-luxury-gold transition-all duration-200">$500K - $1M</SelectItem>
                    <SelectItem value="1m-2m" className="hover:bg-luxury-gold/20 hover:text-luxury-gold transition-all duration-200">$1M - $2M</SelectItem>
                    <SelectItem value="2m+" className="hover:bg-luxury-gold/20 hover:text-luxury-gold transition-all duration-200">$2M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2 group/select">
                <label className="text-sm font-medium text-luxury-text group-hover/select:text-luxury-gold transition-colors duration-300">Property Type</label>
                <Select value={filters.propertyType} onValueChange={(value) => setFilters({...filters, propertyType: value})}>
                  <SelectTrigger className="bg-luxury-dark/80 backdrop-blur-sm border-luxury-neutral/50 text-luxury-text hover:border-luxury-gold/50 focus:border-luxury-gold transition-all duration-300 hover:shadow-lg hover:shadow-luxury-gold/10">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="bg-luxury-dark/95 backdrop-blur-md border-luxury-neutral/50 shadow-2xl">
                    <SelectItem value="house" className="hover:bg-luxury-gold/20 hover:text-luxury-gold transition-all duration-200">House</SelectItem>
                    <SelectItem value="condo" className="hover:bg-luxury-gold/20 hover:text-luxury-gold transition-all duration-200">Condo</SelectItem>
                    <SelectItem value="villa" className="hover:bg-luxury-gold/20 hover:text-luxury-gold transition-all duration-200">Villa</SelectItem>
                    <SelectItem value="penthouse" className="hover:bg-luxury-gold/20 hover:text-luxury-gold transition-all duration-200">Penthouse</SelectItem>
                    <SelectItem value="mansion" className="hover:bg-luxury-gold/20 hover:text-luxury-gold transition-all duration-200">Mansion</SelectItem>
                    <SelectItem value="loft" className="hover:bg-luxury-gold/20 hover:text-luxury-gold transition-all duration-200">Loft</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2 group/select">
                <label className="text-sm font-medium text-luxury-text group-hover/select:text-luxury-gold transition-colors duration-300">Bedrooms</label>
                <Select value={filters.bedrooms} onValueChange={(value) => setFilters({...filters, bedrooms: value})}>
                  <SelectTrigger className="bg-luxury-dark/80 backdrop-blur-sm border-luxury-neutral/50 text-luxury-text hover:border-luxury-gold/50 focus:border-luxury-gold transition-all duration-300 hover:shadow-lg hover:shadow-luxury-gold/10">
                    <SelectValue placeholder="Beds" />
                  </SelectTrigger>
                  <SelectContent className="bg-luxury-dark/95 backdrop-blur-md border-luxury-neutral/50 shadow-2xl">
                    <SelectItem value="1" className="hover:bg-luxury-gold/20 hover:text-luxury-gold transition-all duration-200">1+</SelectItem>
                    <SelectItem value="2" className="hover:bg-luxury-gold/20 hover:text-luxury-gold transition-all duration-200">2+</SelectItem>
                    <SelectItem value="3" className="hover:bg-luxury-gold/20 hover:text-luxury-gold transition-all duration-200">3+</SelectItem>
                    <SelectItem value="4" className="hover:bg-luxury-gold/20 hover:text-luxury-gold transition-all duration-200">4+</SelectItem>
                    <SelectItem value="5" className="hover:bg-luxury-gold/20 hover:text-luxury-gold transition-all duration-200">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2 group/select">
                <label className="text-sm font-medium text-luxury-text group-hover/select:text-luxury-gold transition-colors duration-300">Bathrooms</label>
                <Select value={filters.bathrooms} onValueChange={(value) => setFilters({...filters, bathrooms: value})}>
                  <SelectTrigger className="bg-luxury-dark/80 backdrop-blur-sm border-luxury-neutral/50 text-luxury-text hover:border-luxury-gold/50 focus:border-luxury-gold transition-all duration-300 hover:shadow-lg hover:shadow-luxury-gold/10">
                    <SelectValue placeholder="Baths" />
                  </SelectTrigger>
                  <SelectContent className="bg-luxury-dark/95 backdrop-blur-md border-luxury-neutral/50 shadow-2xl">
                    <SelectItem value="1" className="hover:bg-luxury-gold/20 hover:text-luxury-gold transition-all duration-200">1+</SelectItem>
                    <SelectItem value="2" className="hover:bg-luxury-gold/20 hover:text-luxury-gold transition-all duration-200">2+</SelectItem>
                    <SelectItem value="3" className="hover:bg-luxury-gold/20 hover:text-luxury-gold transition-all duration-200">3+</SelectItem>
                    <SelectItem value="4" className="hover:bg-luxury-gold/20 hover:text-luxury-gold transition-all duration-200">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Button 
                variant="luxury" 
                size="lg" 
                className="px-12 group hover:shadow-2xl hover:shadow-luxury-gold/30 hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10 font-bold">🔍 Search Properties</span>
                <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold-light/0 via-white/20 to-luxury-gold-light/0 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Properties Count */}
        <div className="mb-8 group">
          <p className="text-luxury-text-muted group-hover:text-luxury-text transition-colors duration-300">
            Showing <span className="text-luxury-gold font-bold text-lg group-hover:scale-110 inline-block transition-transform duration-300">{properties.length}</span> premium properties
          </p>
        </div>
        
        {/* Properties Grid/List */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Properties;
