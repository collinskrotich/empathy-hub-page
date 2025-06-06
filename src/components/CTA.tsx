
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Take the first step towards better mental health. Our compassionate team is here to support you every step of the way.
          </p>
        </div>
        
        <Card className="bg-white/95 backdrop-blur border-0 shadow-xl">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get Started Today</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-600">Free 15-minute consultation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-600">Flexible scheduling options</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Input 
                    placeholder="Your name" 
                    className="border-gray-200 focus:border-blue-500"
                  />
                  <Input 
                    placeholder="Your email" 
                    type="email"
                    className="border-gray-200 focus:border-blue-500"
                  />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                    Schedule Free Consultation
                  </Button>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-3 text-gray-600">
                    <p><strong>Phone:</strong> 1-800-MINDCARE</p>
                    <p><strong>Email:</strong> support@mindcare.com</p>
                    <p><strong>Hours:</strong> Mon-Sun, 8AM-10PM</p>
                    <p><strong>Emergency:</strong> 24/7 crisis support available</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Remember:</strong> You're not alone in this journey. Professional help is available, and seeking support is a sign of strength.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-8 text-blue-100 text-sm">
          © 2024 MindCare. Helping people thrive through better mental health.
        </div>
      </div>
    </section>
  );
};

export default CTA;
