
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-luxury-text mb-8 text-center">About EleganceEstate</h1>
          
          <Card className="bg-luxury-light border-luxury-neutral mb-12">
            <CardContent className="p-8">
              <p className="text-xl text-luxury-text-muted leading-relaxed mb-6">
                Founded in 2002, EleganceEstate has emerged as the premier destination for luxury real estate, 
                connecting discerning clients with exceptional properties that define elegant living. With over 
                two decades of experience in the luxury market, we specialize in curating the finest residential 
                and commercial properties across Manhattan, Beverly Hills, Miami, and international markets.
              </p>
              <p className="text-lg text-luxury-text-muted leading-relaxed">
                Our commitment to excellence, personalized service, and deep market knowledge has made us 
                the trusted choice for luxury real estate transactions worldwide. We've facilitated over 
                $2 billion in luxury property sales and maintain relationships with high-net-worth individuals, 
                celebrities, and international investors.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-luxury-light border-luxury-neutral">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-luxury-text mb-4">Our Mission</h3>
                <p className="text-luxury-text-muted">
                  To redefine luxury real estate by delivering exceptional service, unparalleled market expertise, 
                  and exclusive access to the world's most prestigious properties. We believe that every client 
                  deserves a bespoke experience tailored to their unique lifestyle and investment goals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-luxury-light border-luxury-neutral">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-luxury-text mb-4">Our Vision</h3>
                <p className="text-luxury-text-muted">
                  To be the global leader in luxury real estate, setting new standards for excellence and 
                  innovation in property services while maintaining our commitment to personalized client experiences. 
                  We envision a future where luxury real estate transcends mere transactions to become transformative journeys.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-luxury-text mb-8 text-center">Our Story</h2>
            <Card className="bg-luxury-light border-luxury-neutral">
              <CardContent className="p-8">
                <p className="text-luxury-text-muted leading-relaxed mb-4">
                  EleganceEstate was founded by CEO Sarah Johnson after her successful career as a luxury property 
                  specialist at premier real estate firms in New York and London. Recognizing the need for a more 
                  personalized approach to luxury real estate, Sarah established EleganceEstate with a vision to 
                  create lasting relationships rather than simple transactions.
                </p>
                <p className="text-luxury-text-muted leading-relaxed">
                  Starting with a small team of three dedicated professionals, we've grown to become a respected 
                  name in luxury real estate, maintaining our boutique approach while expanding our global reach. 
                  Our success is built on trust, integrity, and an unwavering commitment to our clients' satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-luxury-text mb-8">Why Choose EleganceEstate?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-luxury-dark font-bold text-2xl">22+</span>
                </div>
                <h4 className="text-xl font-semibold text-luxury-text mb-2">Years of Excellence</h4>
                <p className="text-luxury-text-muted">Over two decades of unmatched expertise in luxury real estate markets</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-luxury-dark font-bold text-2xl">$2B+</span>
                </div>
                <h4 className="text-xl font-semibold text-luxury-text mb-2">Sales Volume</h4>
                <p className="text-luxury-text-muted">Over $2 billion in luxury property transactions completed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-luxury-dark font-bold text-2xl">750+</span>
                </div>
                <h4 className="text-xl font-semibold text-luxury-text mb-2">Happy Clients</h4>
                <p className="text-luxury-text-muted">Satisfied clients who trust us with their luxury real estate needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
