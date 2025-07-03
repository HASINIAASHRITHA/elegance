
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const propertyTypes = [
    { value: "all", label: "All Types" },
    { value: "house", label: "Houses" },
    { value: "apartment", label: "Apartments" },
    { value: "villa", label: "Villas" },
    { value: "penthouse", label: "Penthouses" },
  ];

  const priceRanges = [
    { value: "all", label: "Any Price" },
    { value: "0-1m", label: "Under $1M" },
    { value: "1m-5m", label: "$1M - $5M" },
    { value: "5m-10m", label: "$5M - $10M" },
    { value: "10m+", label: "$10M+" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3011&q=80"
          alt="Luxury Real Estate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-luxury-dark/40" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-luxury-gold/20 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/3 right-20 w-32 h-32 bg-luxury-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-luxury-gold/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-luxury-text mb-6 leading-tight">
            Discover
            <span className="block bg-gradient-gold bg-clip-text text-transparent animate-gold-shimmer bg-[length:200%_100%]">
              Luxury Living
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-luxury-text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
            Explore our curated collection of premium properties where elegance meets excellence. 
            Your dream home awaits.
          </p>
        </div>

        {/* Search Bar */}
        <div className="animate-slide-up max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-luxury border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {/* Location Search */}
              <div className="md:col-span-2">
                <input
                  type="text"
                  placeholder="Enter location, neighborhood, or property ID"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-luxury-text placeholder-luxury-text-muted focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:border-luxury-gold transition-all duration-300 backdrop-blur-sm"
                />
              </div>

              {/* Property Type */}
              <div>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-luxury-text focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:border-luxury-gold transition-all duration-300 backdrop-blur-sm"
                >
                  {propertyTypes.map((type) => (
                    <option key={type.value} value={type.value} className="bg-luxury-dark text-luxury-text">
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-luxury-text focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:border-luxury-gold transition-all duration-300 backdrop-blur-sm"
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value} className="bg-luxury-dark text-luxury-text">
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <Button variant="hero" size="xl" className="w-full md:w-auto px-12">
              Search Luxury Properties
            </Button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="animate-scale-in flex flex-col sm:flex-row gap-6 justify-center mt-12" style={{ animationDelay: '0.5s' }}>
          <Button variant="premium" size="xl">
            Explore Properties
          </Button>
          <Button variant="glass" size="xl">
            Schedule a Tour
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
          {[
            { number: "500+", label: "Luxury Properties" },
            { number: "1,200+", label: "Happy Clients" },
            { number: "50+", label: "Expert Agents" },
            { number: "$2B+", label: "Properties Sold" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">
                {stat.number}
              </div>
              <div className="text-luxury-text-muted text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-luxury-gold/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-luxury-gold rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
