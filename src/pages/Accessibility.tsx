
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const Accessibility = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-luxury-text mb-8 text-center">Accessibility Statement</h1>
          <p className="text-lg text-luxury-text-muted text-center mb-12">
            EleganceEstate is committed to ensuring digital accessibility for people with disabilities.
          </p>

          <Card className="bg-luxury-light border-luxury-neutral mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-luxury-text mb-4">Our Commitment</h2>
              <p className="text-luxury-text-muted leading-relaxed">
                We are committed to ensuring that our website is accessible to everyone, including individuals 
                with disabilities. We strive to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 
                at the AA level to ensure our digital platforms are usable by all visitors.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-luxury-light border-luxury-neutral mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-luxury-text mb-4">Accessibility Features</h2>
              <ul className="space-y-2 text-luxury-text-muted">
                <li>• Keyboard navigation support</li>
                <li>• Alternative text for images</li>
                <li>• Consistent navigation structure</li>
                <li>• Sufficient color contrast ratios</li>
                <li>• Resizable text up to 200% without loss of functionality</li>
                <li>• Screen reader compatibility</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-luxury-light border-luxury-neutral mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-luxury-text mb-4">Ongoing Efforts</h2>
              <p className="text-luxury-text-muted leading-relaxed">
                We continuously work to improve the accessibility of our website and services. Our team 
                regularly reviews and updates our digital platforms to ensure compliance with accessibility 
                standards and to provide the best possible user experience for all visitors.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-luxury-light border-luxury-neutral">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-luxury-text mb-4">Feedback</h2>
              <p className="text-luxury-text-muted leading-relaxed">
                If you encounter any accessibility barriers on our website or have suggestions for improvement, 
                please contact us at accessibility@eleganceestate.com or call +1 (555) 123-4567. We welcome 
                your feedback and are committed to providing a positive experience for all users.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Accessibility;
