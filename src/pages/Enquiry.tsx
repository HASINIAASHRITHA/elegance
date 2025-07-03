import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Clock, MapPin, Phone, Mail, User, CheckCircle, Star, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const Enquiry = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    propertyId: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: ""
  });

  // Mock properties for selection
  const properties = [
    { id: "1", title: "Luxury Penthouse", location: "Manhattan, NY", price: "$2,500,000" },
    { id: "2", title: "Modern Villa", location: "Beverly Hills, CA", price: "$1,800,000" },
    { id: "3", title: "Waterfront Condo", location: "Miami, FL", price: "$950,000" },
    { id: "4", title: "Historic Mansion", location: "Boston, MA", price: "$3,200,000" }
  ];

  // Available time slots
  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM"
  ];

  const enquiryTypes = [
    "Property Viewing",
    "Investment Consultation",
    "Market Analysis",
    "Mortgage Advice",
    "General Enquiry"
  ];

  const selectedProperty = properties.find(p => p.id === formData.propertyId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry submitted:", {
      ...formData,
      date: selectedDate,
      time: selectedTime
    });
    alert("Enquiry submitted successfully! We'll contact you soon.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = formData.firstName && formData.email && formData.enquiryType && selectedDate && selectedTime;

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-luxury-dark via-luxury-light to-luxury-dark">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-luxury-gold/5 rounded-full blur-3xl"></div>
            <div className="relative">
              <h1 className="text-6xl font-bold text-luxury-text mb-6">
                Get In <span className="text-luxury-gold">Touch</span>
              </h1>
              <p className="text-luxury-text-muted max-w-4xl mx-auto text-xl leading-relaxed">
                Connect with our expert real estate advisors for personalized consultation. 
                Whether you're buying, selling, or investing, we're here to make your property dreams a reality.
              </p>
              <div className="flex justify-center mt-8 gap-4">
                <Badge className="bg-luxury-gold/20 text-luxury-gold border-luxury-gold px-4 py-2 hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300 hover:scale-105">
                  <Star className="h-4 w-4 mr-2" />
                  Trusted by 1000+ clients
                </Badge>
                <Badge className="bg-luxury-gold/20 text-luxury-gold border-luxury-gold px-4 py-2 hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300 hover:scale-105">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  24/7 Support
                </Badge>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-4 gap-8">
            {/* Contact Information Card */}
            <Card className="bg-luxury-light/80 backdrop-blur-lg border-luxury-neutral xl:col-span-1 shadow-luxury hover:shadow-gold transition-all duration-500 hover:scale-105">
              <CardHeader className="pb-4">
                <CardTitle className="text-luxury-text flex items-center text-xl">
                  <MessageCircle className="h-6 w-6 mr-3 text-luxury-gold" />
                  Contact Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-luxury-dark/50 rounded-lg border border-luxury-neutral/50 hover:border-luxury-gold/50 transition-all duration-300 hover:scale-102">
                    <Phone className="h-6 w-6 text-luxury-gold mt-1" />
                    <div>
                      <p className="text-luxury-text font-semibold mb-1">Phone</p>
                      <p className="text-luxury-text-muted text-sm">+1 (555) 123-4567</p>
                      <p className="text-luxury-text-muted text-sm">+1 (555) 987-6543</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-luxury-dark/50 rounded-lg border border-luxury-neutral/50 hover:border-luxury-gold/50 transition-all duration-300 hover:scale-102">
                    <Mail className="h-6 w-6 text-luxury-gold mt-1" />
                    <div>
                      <p className="text-luxury-text font-semibold mb-1">Email</p>
                      <p className="text-luxury-text-muted text-sm">info@eleganceestate.com</p>
                      <p className="text-luxury-text-muted text-sm">support@eleganceestate.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-luxury-dark/50 rounded-lg border border-luxury-neutral/50 hover:border-luxury-gold/50 transition-all duration-300 hover:scale-102">
                    <MapPin className="h-6 w-6 text-luxury-gold mt-1" />
                    <div>
                      <p className="text-luxury-text font-semibold mb-1">Address</p>
                      <p className="text-luxury-text-muted text-sm">123 Luxury Avenue</p>
                      <p className="text-luxury-text-muted text-sm">Premium District, NY 10001</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-luxury-neutral/50">
                  <h4 className="text-luxury-text font-semibold mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-luxury-gold" />
                    Office Hours
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center p-2 rounded bg-luxury-dark/30 hover:bg-luxury-dark/50 transition-all duration-300">
                      <span className="text-luxury-text-muted">Monday - Friday</span>
                      <span className="text-luxury-text font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded bg-luxury-dark/30 hover:bg-luxury-dark/50 transition-all duration-300">
                      <span className="text-luxury-text-muted">Saturday</span>
                      <span className="text-luxury-text font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded bg-luxury-dark/30 hover:bg-luxury-dark/50 transition-all duration-300">
                      <span className="text-luxury-text-muted">Sunday</span>
                      <span className="text-luxury-text font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Main Form */}
            <div className="xl:col-span-3 space-y-8">
              <Card className="bg-luxury-light/80 backdrop-blur-lg border-luxury-neutral shadow-luxury hover:shadow-gold transition-all duration-500">
                <CardHeader className="pb-6">
                  <CardTitle className="text-luxury-text flex items-center text-2xl">
                    <User className="h-6 w-6 mr-3 text-luxury-gold" />
                    Tell Us About Your Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="firstName" className="text-luxury-text font-medium text-base">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="bg-luxury-dark/70 border-luxury-neutral text-luxury-text h-12 text-base focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 hover:border-luxury-gold/50"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="lastName" className="text-luxury-text font-medium text-base">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="bg-luxury-dark/70 border-luxury-neutral text-luxury-text h-12 text-base focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 hover:border-luxury-gold/50"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-luxury-text font-medium text-base">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="bg-luxury-dark/70 border-luxury-neutral text-luxury-text h-12 text-base focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 hover:border-luxury-gold/50"
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="phone" className="text-luxury-text font-medium text-base">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="bg-luxury-dark/70 border-luxury-neutral text-luxury-text h-12 text-base focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 hover:border-luxury-gold/50"
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="enquiryType" className="text-luxury-text font-medium text-base">What can we help you with? *</Label>
                      <Select value={formData.enquiryType} onValueChange={(value) => handleInputChange('enquiryType', value)}>
                        <SelectTrigger className="bg-luxury-dark/70 border-luxury-neutral text-luxury-text h-12 text-base focus:border-luxury-gold hover:border-luxury-gold/50 transition-all duration-300">
                          <SelectValue placeholder="Select your enquiry type" />
                        </SelectTrigger>
                        <SelectContent className="bg-luxury-dark border-luxury-neutral shadow-xl">
                          {enquiryTypes.map((type) => (
                            <SelectItem key={type} value={type} className="text-luxury-text hover:bg-luxury-gold/20 hover:text-luxury-text focus:bg-luxury-gold/20 focus:text-luxury-text transition-all duration-200">
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="property" className="text-luxury-text font-medium text-base">Interested Property (Optional)</Label>
                      <Select value={formData.propertyId} onValueChange={(value) => handleInputChange('propertyId', value)}>
                        <SelectTrigger className="bg-luxury-dark/70 border-luxury-neutral text-luxury-text h-12 text-base focus:border-luxury-gold hover:border-luxury-gold/50 transition-all duration-300">
                          <SelectValue placeholder="Select a property you're interested in" />
                        </SelectTrigger>
                        <SelectContent className="bg-luxury-dark border-luxury-neutral shadow-xl">
                          {properties.map((property) => (
                            <SelectItem key={property.id} value={property.id} className="text-luxury-text hover:bg-luxury-gold/20 hover:text-luxury-text focus:bg-luxury-gold/20 focus:text-luxury-text transition-all duration-200">
                              {property.title} - {property.location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {selectedProperty && (
                      <Card className="bg-luxury-dark/50 border-luxury-gold/30 shadow-gold hover:shadow-luxury transition-all duration-300 hover:scale-102">
                        <CardContent className="p-6">
                          <h4 className="font-bold text-luxury-text mb-3 text-lg">{selectedProperty.title}</h4>
                          <div className="flex items-center text-luxury-text-muted mb-2">
                            <MapPin className="h-5 w-5 mr-2 text-luxury-gold" />
                            {selectedProperty.location}
                          </div>
                          <div className="text-luxury-gold font-bold text-xl">{selectedProperty.price}</div>
                        </CardContent>
                      </Card>
                    )}

                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-luxury-text font-medium text-base">Tell us more about your requirements *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="bg-luxury-dark/70 border-luxury-neutral text-luxury-text min-h-40 text-base focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 hover:border-luxury-gold/50"
                        placeholder="Please share your specific requirements, budget, preferred locations, or any questions you have..."
                        required
                      />
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Enhanced Date and Time Selection */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-luxury-light/80 backdrop-blur-lg border-luxury-neutral shadow-luxury hover:shadow-gold transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="text-luxury-text flex items-center text-xl">
                      <CalendarIcon className="h-6 w-6 mr-3 text-luxury-gold" />
                      Preferred Date *
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0}
                        className="w-full max-w-md mx-auto"
                      />
                    </div>
                    {selectedDate && (
                      <div className="mt-6 p-4 bg-gradient-to-r from-luxury-gold/10 to-luxury-gold/5 rounded-lg border border-luxury-gold/30 shadow-md">
                        <p className="text-luxury-text font-medium text-center">
                          ✨ Selected: {selectedDate.toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card className="bg-luxury-light/80 backdrop-blur-lg border-luxury-neutral shadow-luxury hover:shadow-gold transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="text-luxury-text flex items-center text-xl">
                      <Clock className="h-6 w-6 mr-3 text-luxury-gold" />
                      Preferred Time *
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedTime(time)}
                          disabled={!selectedDate}
                          className={cn(
                            "text-sm justify-center h-12 transition-all duration-300 font-semibold border-2",
                            selectedTime === time ? 
                              "bg-gradient-to-r from-luxury-gold to-luxury-gold-light text-luxury-dark border-luxury-gold shadow-lg scale-105 hover:from-luxury-gold-light hover:to-luxury-gold hover:text-luxury-dark" : 
                              "bg-luxury-dark/70 text-luxury-text border-luxury-neutral/50 hover:border-luxury-gold hover:bg-gradient-to-r hover:from-luxury-gold/20 hover:to-luxury-gold-light/20 hover:text-luxury-text hover:scale-105 hover:shadow-md"
                          )}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                    {selectedTime && (
                      <div className="mt-6 p-4 bg-gradient-to-r from-luxury-gold/10 to-luxury-gold/5 rounded-lg border border-luxury-gold/30 shadow-md">
                        <p className="text-luxury-text font-medium text-center">
                          ⏰ Selected time: {selectedTime}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Enhanced Booking Summary */}
              {isFormValid && (
                <Card className="bg-gradient-to-r from-luxury-gold/10 to-luxury-gold/5 border-luxury-gold shadow-gold hover:shadow-luxury transition-all duration-500 hover:scale-102">
                  <CardContent className="p-8">
                    <h4 className="font-bold text-luxury-text mb-6 text-2xl flex items-center">
                      <CheckCircle className="h-6 w-6 mr-3 text-luxury-gold" />
                      Ready to Submit
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base mb-8">
                      <div className="space-y-3">
                        <div className="flex justify-between p-3 bg-luxury-dark/30 rounded-lg hover:bg-luxury-dark/40 transition-all duration-300">
                          <span className="text-luxury-text-muted font-medium">Date:</span>
                          <span className="text-luxury-text">{selectedDate?.toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between p-3 bg-luxury-dark/30 rounded-lg hover:bg-luxury-dark/40 transition-all duration-300">
                          <span className="text-luxury-text-muted font-medium">Time:</span>
                          <span className="text-luxury-text">{selectedTime}</span>
                        </div>
                        <div className="flex justify-between p-3 bg-luxury-dark/30 rounded-lg hover:bg-luxury-dark/40 transition-all duration-300">
                          <span className="text-luxury-text-muted font-medium">Type:</span>
                          <span className="text-luxury-text">{formData.enquiryType}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between p-3 bg-luxury-dark/30 rounded-lg hover:bg-luxury-dark/40 transition-all duration-300">
                          <span className="text-luxury-text-muted font-medium">Contact:</span>
                          <span className="text-luxury-text">{formData.firstName} {formData.lastName}</span>
                        </div>
                        <div className="flex justify-between p-3 bg-luxury-dark/30 rounded-lg hover:bg-luxury-dark/40 transition-all duration-300">
                          <span className="text-luxury-text-muted font-medium">Email:</span>
                          <span className="text-luxury-text text-sm">{formData.email}</span>
                        </div>
                        {selectedProperty && (
                          <div className="flex justify-between p-3 bg-luxury-dark/30 rounded-lg hover:bg-luxury-dark/40 transition-all duration-300">
                            <span className="text-luxury-text-muted font-medium">Property:</span>
                            <span className="text-luxury-text text-sm">{selectedProperty.title}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <Button 
                        onClick={handleSubmit}
                        className="px-12 py-6 text-lg font-bold bg-gradient-to-r from-luxury-gold to-luxury-gold-light text-luxury-dark hover:from-luxury-gold-light hover:to-luxury-gold hover:text-luxury-dark shadow-luxury hover:shadow-gold transform hover:scale-110 transition-all duration-500 border-2 border-luxury-gold/30 hover:border-luxury-gold"
                      >
                        ✨ Submit Enquiry
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Enquiry;
