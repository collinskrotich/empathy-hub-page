
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const CTA = () => {
  const { user } = useAuth();

  return (
    <section id="contact" className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {user ? "Ready to Continue Your Journey?" : "Ready to Start Your Journey?"}
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          {user 
            ? "Access our AI-powered tools to support your mental wellbeing today."
            : "Take the first step towards better mental health with our AI-powered support."
          }
        </p>
        {user ? (
          <div className="space-x-4">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold">
              Chat with AI Assistant
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold"
            >
              Voice Assistant
            </Button>
          </div>
        ) : (
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold">
            Get Started Today
          </Button>
        )}
      </div>
    </section>
  );
};

export default CTA;
