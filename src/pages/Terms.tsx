
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-luxury-text mb-8 text-center">Terms of Service</h1>
          <p className="text-lg text-luxury-text-muted text-center mb-12">
            Last updated: March 2024
          </p>

          <Card className="bg-luxury-light border-luxury-neutral mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-luxury-text mb-4">Acceptance of Terms</h2>
              <p className="text-luxury-text-muted leading-relaxed">
                By accessing and using EleganceEstate's services, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-luxury-light border-luxury-neutral mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-luxury-text mb-4">Use License</h2>
              <p className="text-luxury-text-muted leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on EleganceEstate's 
                website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                not a transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-2 text-luxury-text-muted">
                <li>• Modify or copy the materials</li>
                <li>• Use the materials for any commercial purpose</li>
                <li>• Attempt to decompile or reverse engineer any software</li>
                <li>• Remove any copyright or other proprietary notations</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-luxury-light border-luxury-neutral mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-luxury-text mb-4">Disclaimer</h2>
              <p className="text-luxury-text-muted leading-relaxed">
                The materials on EleganceEstate's website are provided on an 'as is' basis. EleganceEstate 
                makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                including without limitation, implied warranties or conditions of merchantability, fitness for a 
                particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-luxury-light border-luxury-neutral">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-luxury-text mb-4">Contact Information</h2>
              <p className="text-luxury-text-muted leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at 
                legal@eleganceestate.com or call +1 (555) 123-4567.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
