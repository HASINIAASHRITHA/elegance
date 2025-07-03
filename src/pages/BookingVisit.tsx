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
import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";

const BookingVisit = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    propertyId: "",
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  // Mock properties for selection
  const properties = [
    { id: "1", title: "Luxury Penthouse", location: "Manhattan, NY", price: "$2,500,000" },
    { id: "2", title: "Modern Villa", location: "Beverly Hills, CA", price: "$1,800,000" },
    { id: "3", title: "Waterfront Condo", location: "Miami, FL", price: "$950,000" }
  ];

  // Available time slots
  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const selectedProperty = properties.find(p => p.id === formData.propertyId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Booking submitted:", {
      ...formData,
      date: selectedDate,
      time: selectedTime
    });
    alert("Visit booking submitted successfully!");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-luxury-text mb-4">Schedule a Property Visit</h1>
          <p className="text-luxury-text-muted max-w-2xl mx-auto">
            Book a personalized tour with one of our experienced agents to explore your dream property.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Booking Form */}
          <Card className="bg-luxury-light border-luxury-neutral">
            <CardHeader>
              <CardTitle className="text-luxury-text">Booking Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="property" className="text-luxury-text">Select Property</Label>
                  <Select 
                    value={formData.propertyId} 
                    onValueChange={(value) => setFormData({...formData, propertyId: value})}
                  >
                    <SelectTrigger className="bg-luxury-dark border-luxury-neutral">
                      <SelectValue placeholder="Choose a property" />
                    </SelectTrigger>
                    <SelectContent>
                      {properties.map((property) => (
                        <SelectItem key={property.id} value={property.id}>
                          {property.title} - {property.location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedProperty && (
                  <Card className="bg-luxury-dark border-luxury-neutral">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-luxury-text mb-2">{selectedProperty.title}</h4>
                      <div className="flex items-center text-luxury-text-muted mb-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {selectedProperty.location}
                      </div>
                      <div className="text-luxury-gold font-bold">{selectedProperty.price}</div>
                    </CardContent>
                  </Card>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-luxury-text">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-luxury-dark border-luxury-neutral"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-luxury-text">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-luxury-dark border-luxury-neutral"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-luxury-text">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-luxury-dark border-luxury-neutral"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-luxury-text">Additional Message (Optional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-luxury-dark border-luxury-neutral min-h-20"
                    placeholder="Any specific requests or questions..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="luxury" 
                  className="w-full"
                  disabled={!formData.propertyId || !selectedDate || !selectedTime}
                >
                  Book Visit
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Date and Time Selection */}
          <div className="space-y-6">
            <Card className="bg-luxury-light border-luxury-neutral">
              <CardHeader>
                <CardTitle className="text-luxury-text flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  Select Date
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date() || date.getDay() === 0} // Disable past dates and Sundays
                  className="rounded-md border border-luxury-neutral pointer-events-auto"
                />
                {selectedDate && (
                  <div className="mt-4 p-3 bg-luxury-dark rounded-lg">
                    <p className="text-luxury-text text-sm">
                      Selected: {selectedDate.toLocaleDateString('en-US', { 
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

            <Card className="bg-luxury-light border-luxury-neutral">
              <CardHeader>
                <CardTitle className="text-luxury-text flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Select Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "luxury" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTime(time)}
                      disabled={!selectedDate}
                      className="text-xs"
                    >
                      {time}
                    </Button>
                  ))}
                </div>
                {selectedTime && (
                  <div className="mt-4 p-3 bg-luxury-dark rounded-lg">
                    <p className="text-luxury-text text-sm">
                      Selected time: {selectedTime}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {selectedDate && selectedTime && (
              <Card className="bg-luxury-gold/10 border-luxury-gold">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-luxury-text mb-2">Booking Summary</h4>
                  <div className="space-y-1 text-sm">
                    <p className="text-luxury-text-muted">
                      Date: {selectedDate.toLocaleDateString()}
                    </p>
                    <p className="text-luxury-text-muted">
                      Time: {selectedTime}
                    </p>
                    {selectedProperty && (
                      <p className="text-luxury-text-muted">
                        Property: {selectedProperty.title}
                      </p>
                    )}
                  </div>
                  <Badge variant="outline" className="mt-2 border-luxury-gold text-luxury-gold">
                    Ready to book
                  </Badge>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookingVisit;