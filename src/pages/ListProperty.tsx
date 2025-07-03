import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Upload, X } from "lucide-react";

const ListProperty = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    sqft: "",
    lotSize: "",
    yearBuilt: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    amenities: [] as string[],
    images: [] as string[]
  });

  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const features = [
    "Swimming Pool", "Garage", "Garden", "Balcony", "Fireplace", "Walk-in Closet",
    "Modern Kitchen", "Hardwood Floors", "Central AC", "Security System",
    "Gym", "Spa", "City Views", "Ocean Views", "Mountain Views"
  ];

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Property submitted:", { ...formData, features: selectedFeatures });
    alert("Property listing submitted successfully!");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle image upload logic here
    console.log("Images uploaded:", e.target.files);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-luxury-text mb-4">List Your Property</h1>
          <p className="text-luxury-text-muted max-w-2xl mx-auto">
            Showcase your property to thousands of potential buyers with our premium listing service.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
          {/* Basic Information */}
          <Card className="bg-luxury-light border-luxury-neutral">
            <CardHeader>
              <CardTitle className="text-luxury-text">Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-luxury-text">Property Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="bg-luxury-dark border-luxury-neutral"
                  placeholder="e.g., Luxury Penthouse with City Views"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-luxury-text">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="bg-luxury-dark border-luxury-neutral min-h-32"
                  placeholder="Describe your property's unique features and selling points..."
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price" className="text-luxury-text">Price ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    className="bg-luxury-dark border-luxury-neutral"
                    placeholder="2500000"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="propertyType" className="text-luxury-text">Property Type</Label>
                  <Select value={formData.propertyType} onValueChange={(value) => setFormData({...formData, propertyType: value})}>
                    <SelectTrigger className="bg-luxury-dark border-luxury-neutral">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="penthouse">Penthouse</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Property Details */}
          <Card className="bg-luxury-light border-luxury-neutral">
            <CardHeader>
              <CardTitle className="text-luxury-text">Property Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bedrooms" className="text-luxury-text">Bedrooms</Label>
                  <Input
                    id="bedrooms"
                    type="number"
                    value={formData.bedrooms}
                    onChange={(e) => setFormData({...formData, bedrooms: e.target.value})}
                    className="bg-luxury-dark border-luxury-neutral"
                    placeholder="3"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bathrooms" className="text-luxury-text">Bathrooms</Label>
                  <Input
                    id="bathrooms"
                    type="number"
                    step="0.5"
                    value={formData.bathrooms}
                    onChange={(e) => setFormData({...formData, bathrooms: e.target.value})}
                    className="bg-luxury-dark border-luxury-neutral"
                    placeholder="2.5"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sqft" className="text-luxury-text">Square Feet</Label>
                  <Input
                    id="sqft"
                    type="number"
                    value={formData.sqft}
                    onChange={(e) => setFormData({...formData, sqft: e.target.value})}
                    className="bg-luxury-dark border-luxury-neutral"
                    placeholder="2800"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="yearBuilt" className="text-luxury-text">Year Built</Label>
                  <Input
                    id="yearBuilt"
                    type="number"
                    value={formData.yearBuilt}
                    onChange={(e) => setFormData({...formData, yearBuilt: e.target.value})}
                    className="bg-luxury-dark border-luxury-neutral"
                    placeholder="2020"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="lotSize" className="text-luxury-text">Lot Size (sq ft)</Label>
                <Input
                  id="lotSize"
                  type="number"
                  value={formData.lotSize}
                  onChange={(e) => setFormData({...formData, lotSize: e.target.value})}
                  className="bg-luxury-dark border-luxury-neutral"
                  placeholder="5000"
                />
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="bg-luxury-light border-luxury-neutral">
            <CardHeader>
              <CardTitle className="text-luxury-text">Location</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address" className="text-luxury-text">Street Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="bg-luxury-dark border-luxury-neutral"
                  placeholder="123 Luxury Avenue"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-luxury-text">City</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="bg-luxury-dark border-luxury-neutral"
                    placeholder="Manhattan"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state" className="text-luxury-text">State</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => setFormData({...formData, state: e.target.value})}
                    className="bg-luxury-dark border-luxury-neutral"
                    placeholder="NY"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode" className="text-luxury-text">ZIP Code</Label>
                  <Input
                    id="zipCode"
                    value={formData.zipCode}
                    onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                    className="bg-luxury-dark border-luxury-neutral"
                    placeholder="10001"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features & Amenities */}
          <Card className="bg-luxury-light border-luxury-neutral">
            <CardHeader>
              <CardTitle className="text-luxury-text">Features & Amenities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Checkbox
                      id={feature}
                      checked={selectedFeatures.includes(feature)}
                      onCheckedChange={() => handleFeatureToggle(feature)}
                    />
                    <Label htmlFor={feature} className="text-luxury-text text-sm">
                      {feature}
                    </Label>
                  </div>
                ))}
              </div>
              
              {selectedFeatures.length > 0 && (
                <div className="mt-4">
                  <p className="text-luxury-text-muted text-sm mb-2">Selected features:</p>
                  <div className="flex flex-wrap gap-1">
                    {selectedFeatures.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Images */}
          <Card className="bg-luxury-light border-luxury-neutral">
            <CardHeader>
              <CardTitle className="text-luxury-text">Property Images</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-luxury-neutral rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-luxury-neutral mx-auto mb-4" />
                <p className="text-luxury-text mb-2">Upload property images</p>
                <p className="text-luxury-text-muted text-sm mb-4">
                  Drag and drop your images here, or click to browse
                </p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <Label htmlFor="image-upload">
                  <Button variant="outline" className="cursor-pointer">
                    Choose Images
                  </Button>
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex justify-center">
            <Button type="submit" variant="luxury" size="lg" className="px-12">
              List Property
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ListProperty;