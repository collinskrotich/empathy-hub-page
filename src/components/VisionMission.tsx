
import { Target, Heart, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const VisionMission = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-waridi-green/10 to-waridi-yellow/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-waridi-green-dark to-waridi-yellow-dark bg-clip-text text-transparent">Purpose</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rooted in African values of community and care, we're building a future where mental wellness is accessible to all.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-waridi-green to-waridi-green-dark rounded-full flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                To normalize mental wellness conversations and make mental health support as easy as saying "hello." 
                We envision a world where seeking help is as natural as breathing.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-waridi-yellow to-waridi-yellow-dark rounded-full flex items-center justify-center mr-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Waridi Wellness uses empathetic AI to provide culturally-aware, voice-first support for mental health, 
                starting with underserved Kenyan and African communities.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-waridi-pink to-waridi-pink-dark rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Community First</h4>
            <p className="text-gray-600">Building on Ubuntu - we are because we are together</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-waridi-purple to-waridi-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Culturally Rooted</h4>
            <p className="text-gray-600">Honoring African wisdom in modern mental wellness</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-waridi-green to-waridi-green-dark rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Voice of Care</h4>
            <p className="text-gray-600">Speaking wellness in your language, your way</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
