
import { Button } from "@/components/ui/button";
import { Heart, Mic } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleVoiceRafiki = () => {
    if (user) {
      // Navigate to voice rafiki when implemented
      console.log("Navigate to voice rafiki");
    } else {
      navigate('/auth');
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-waridi-pink/20 via-white to-waridi-purple/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-waridi-pink-dark to-waridi-purple-dark bg-clip-text text-transparent">
                  Hali Halali
                </span>
                <span className="text-gray-900 block">Your Mind Matters</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                A voice-first mental wellness rafiki designed to walk with you through life's ups and downs. 
                Experience culturally-aware, empathetic support whenever you need it.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={handleVoiceRafiki}
                className="bg-gradient-to-r from-waridi-pink-dark to-waridi-purple-dark hover:from-waridi-pink to-waridi-purple text-white px-8 py-4 text-lg flex items-center gap-2"
              >
                <Mic className="h-5 w-5" />
                Try the Voice Rafiki
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-waridi-purple text-waridi-purple-dark hover:bg-waridi-purple/10 px-8 py-4 text-lg"
              >
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-waridi-pink-dark" />
                <span>10,000+ supported across Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Mic className="h-5 w-5 text-waridi-purple-dark" />
                <span>Voice-first therapy</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
                alt="African woman finding peace and mental wellness"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-waridi-purple/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg animate-float">
              <div className="text-2xl font-bold bg-gradient-to-r from-waridi-pink-dark to-waridi-purple-dark bg-clip-text text-transparent">24/7</div>
              <div className="text-sm text-gray-600">Rafiki Available</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-waridi-yellow rounded-full p-3 shadow-lg animate-float" style={{animationDelay: '1s'}}>
              <Heart className="h-6 w-6 text-waridi-yellow-dark" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
