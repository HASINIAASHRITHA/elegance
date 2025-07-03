
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-luxury-text mb-8 text-center">Privacy Policy</h1>
          <p className="text-lg text-luxury-text-muted text-center mb-12">
            Last updated: March 2024
          </p>

          <Card className="bg-luxury-light border-luxury-neutral mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-luxury-text mb-4">Information We Collect</h2>
              <p className="text-luxury-text-muted leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                fill out a form, or contact us. This may include your name, email address, phone number, 
                and property preferences.
              </p>
              <p className="text-luxury-text-muted leading-relaxed">
                We also collect information automatically when you use our services, including your 
                IP address, browser type, and browsing patterns.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-luxury-light border-luxury-neutral mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-luxury-text mb-4">How We Use Your Information</h2>
              <ul className="space-y-2 text-luxury-text-muted">
                <li>• To provide and improve our real estate services</li>
                <li>• To communicate with you about properties and services</li>
                <li>• To personalize your experience on our platform</li>
                <li>• To comply with legal obligations</li>
                <li>• To protect our rights and prevent fraud</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-luxury-light border-luxury-neutral mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-luxury-text mb-4">Information Sharing</h2>
              <p className="text-luxury-text-muted leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy. We may share information with 
                trusted partners who assist us in operating our website and conducting our business.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-luxury-light border-luxury-neutral">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-luxury-text mb-4">Contact Us</h2>
              <p className="text-luxury-text-muted leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at 
                privacy@eleganceestate.com or call +1 (555) 123-4567.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
