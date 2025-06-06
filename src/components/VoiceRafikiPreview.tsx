
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, MessageCircle, Play } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const VoiceRafikiPreview = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleTryDemo = () => {
    if (user) {
      // Navigate to actual demo when implemented
      setIsPlaying(!isPlaying);
    } else {
      navigate('/auth');
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-waridi-purple/10 to-waridi-pink/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Your <span className="bg-gradient-to-r from-waridi-purple-dark to-waridi-pink-dark bg-clip-text text-transparent">Voice Rafiki</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience how natural conversations with our AI companion can provide the emotional support you need.
          </p>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
          <CardContent className="p-8">
            <div className="space-y-6">
              {/* Chat Preview */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-bl-sm p-4 max-w-xs">
                    <p className="text-gray-800">I feel anxious today.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 justify-end">
                  <div className="bg-gradient-to-r from-waridi-purple to-waridi-pink rounded-2xl rounded-br-sm p-4 max-w-sm">
                    <p className="text-white">I'm here for you. Would you like to breathe with me or talk about what's making you feel anxious?</p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-waridi-purple to-waridi-pink rounded-full flex items-center justify-center">
                    <Mic className="h-5 w-5 text-white" />
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-bl-sm p-4 max-w-xs">
                    <p className="text-gray-800">Let's try breathing together.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 justify-end">
                  <div className="bg-gradient-to-r from-waridi-green to-waridi-yellow rounded-2xl rounded-br-sm p-4 max-w-sm">
                    <p className="text-white">Perfect. Let's start with a simple 4-7-8 breathing pattern. Breathe in for 4 counts... hold for 7... and release for 8. I'll guide you through it.</p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-waridi-green to-waridi-yellow rounded-full flex items-center justify-center">
                    <Mic className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Audio Visualization */}
              <div className="bg-gradient-to-r from-waridi-purple/20 to-waridi-pink/20 rounded-xl p-6">
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 bg-gradient-to-t from-waridi-purple to-waridi-pink rounded-full transition-all duration-300 ${
                        isPlaying ? 'animate-pulse' : ''
                      }`}
                      style={{
                        height: isPlaying ? `${Math.random() * 30 + 10}px` : '10px',
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>
                <p className="text-center text-gray-600 mt-3">
                  {isPlaying ? 'Voice Rafiki is speaking...' : 'Click to hear your Rafiki'}
                </p>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button
                  onClick={handleTryDemo}
                  size="lg"
                  className="bg-gradient-to-r from-waridi-purple-dark to-waridi-pink-dark hover:from-waridi-purple to-waridi-pink text-white px-8 py-3 text-lg flex items-center gap-2 mx-auto"
                >
                  <Play className="h-5 w-5" />
                  {user ? 'Try Live Demo' : 'Sign Up to Try Demo'}
                </Button>
                <p className="text-sm text-gray-600 mt-2">
                  Experience the power of voice-first mental wellness
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default VoiceRafikiPreview;
