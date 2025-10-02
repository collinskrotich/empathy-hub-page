
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Mic, MessageCircle } from "lucide-react";

const CTA = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleVoiceRafiki = () => {

    window.open('https://tima.waridihealth.space', '_blank');
  
  };

  const handleChatRafiki = () => {
    if (user) {
      // Navigate to chat rafiki when implemented
      console.log("Navigate to chat rafiki");
    } else {
      navigate('/auth');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-waridi-purple-dark to-waridi-pink-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {user ? "Ready to Continue Your Wellness Journey?" : "Ready to Meet Your Rafiki?"}
        </h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          {user 
            ? "Your Voice Rafiki is here to support you through life's ups and downs. Start a conversation today."
            : "Take the first step towards better mental health with our culturally-aware AI companion. Your mind matters - let's prove it together."
          }
        </p>
        {user ? (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleVoiceRafiki}
              className="bg-white text-waridi-purple-dark hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2"
            >
              <Mic className="h-5 w-5" />
              Talk to Voice Rafiki
            </Button>
            <Button 
              onClick={handleChatRafiki}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-waridi-purple-dark px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Chat with Rafiki
            </Button>
          </div>
        ) : (
          <Button 
            onClick={handleVoiceRafiki}
            className="bg-white text-waridi-purple-dark hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 mx-auto"
          >
            <Mic className="h-5 w-5" />
            Start Your Journey Today
          </Button>
        )}
        
        <div className="mt-8 text-purple-200 text-sm">
          <p>Available 24/7 • Culturally Aware • Voice-First Support</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
