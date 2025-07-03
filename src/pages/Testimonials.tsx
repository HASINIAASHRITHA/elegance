
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Robert Harrison",
      title: "CEO, Harrison Industries",
      content: "EleganceEstate exceeded our expectations in finding the perfect luxury home for our family. Sarah and her team's attention to detail and market knowledge is unparalleled. They understood our unique requirements and delivered a $4.2M penthouse that perfectly matches our lifestyle. The entire process was seamless and professional.",
      rating: 5,
      property: "Manhattan Penthouse - $4.2M",
      location: "New York, NY"
    },
    {
      name: "Maria Gonzalez",
      title: "Investment Banker, Goldman Sachs",
      content: "Working with Michael Chen at EleganceEstate was a game-changer for our property investment strategy. His expertise in luxury markets helped us build a $12M portfolio across three cities. The ROI on our investments has exceeded 15% annually thanks to their strategic guidance and market insights.",
      rating: 5,
      property: "Luxury Investment Portfolio - $12M",
      location: "Multiple Cities"
    },
    {
      name: "David Thompson",
      title: "Tech Entrepreneur & Founder",
      content: "From start to finish, the service was impeccable. Emily Rodriguez helped us find the perfect waterfront estate in Miami. Her knowledge of the luxury condo market and attention to our family's needs made the $3.8M purchase feel effortless. We couldn't be happier with our new home.",
      rating: 5,
      property: "Waterfront Estate - $3.8M",
      location: "Miami, FL"
    },
    {
      name: "Catherine Wu",
      title: "International Business Executive",
      content: "As a foreign investor, I needed someone who understood both luxury real estate and international transactions. Isabella Martinez at EleganceEstate made my $2.1M Beverly Hills home purchase incredibly smooth. Her multilingual skills and cultural understanding were invaluable throughout the process.",
      rating: 5,
      property: "Beverly Hills Luxury Home - $2.1M",
      location: "Beverly Hills, CA"
    },
    {
      name: "Jonathan Blake",
      title: "Hedge Fund Manager",
      content: "James Thompson's expertise in investment properties is exceptional. He helped me acquire a luxury commercial property that has become the cornerstone of my real estate portfolio. His financial background and real estate acumen make him the perfect advisor for serious investors.",
      rating: 5,
      property: "Commercial Investment - $8.5M",
      location: "Manhattan, NY"
    },
    {
      name: "Sophia Chen",
      title: "Entertainment Industry Executive",
      content: "Privacy and discretion were paramount for our family's luxury home purchase. EleganceEstate handled our $5.2M acquisition with absolute professionalism. The team's ability to maintain confidentiality while delivering exceptional service is why we continue to recommend them to our network.",
      rating: 5,
      property: "Private Estate - $5.2M",
      location: "Beverly Hills, CA"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-luxury-text mb-8 text-center">Client Testimonials</h1>
          <p className="text-xl text-luxury-text-muted text-center mb-4">
            Hear what our satisfied clients have to say about their EleganceEstate experience.
          </p>
          <p className="text-lg text-luxury-text-muted text-center mb-12">
            With over $2 billion in luxury transactions and 750+ satisfied clients, our commitment to excellence 
            speaks through every relationship we build.
          </p>

          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-luxury-light border-luxury-neutral">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-luxury-gold text-2xl">★</span>
                    ))}
                  </div>
                  <blockquote className="text-lg text-luxury-text-muted italic mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="border-t border-luxury-neutral pt-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xl font-bold text-luxury-text">{testimonial.name}</p>
                        <p className="text-luxury-gold">{testimonial.title}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-luxury-text font-semibold">{testimonial.property}</p>
                        <p className="text-luxury-text-muted">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-luxury-light border-luxury-neutral">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-luxury-text mb-4">Share Your Experience</h2>
                <p className="text-luxury-text-muted mb-4">
                  We value your feedback and would love to hear about your EleganceEstate experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-luxury-gold">4.9/5</div>
                    <p className="text-luxury-text-muted">Average Rating</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-luxury-gold">750+</div>
                    <p className="text-luxury-text-muted">Happy Clients</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-luxury-gold">98%</div>
                    <p className="text-luxury-text-muted">Satisfaction Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Testimonials;
