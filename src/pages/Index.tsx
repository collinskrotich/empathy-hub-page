
import Hero from "@/components/Hero";
import VisionMission from "@/components/VisionMission";
import Services from "@/components/Services";
import VoiceRafikiPreview from "@/components/VoiceRafikiPreview";
import TargetAudience from "@/components/TargetAudience";
import Testimonials from "@/components/Testimonials";
import Resources from "@/components/Resources";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Mic } from "lucide-react";

const Index = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-waridi-pink/20 via-white to-waridi-purple/20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-waridi-purple-dark"></div>
          <p className="mt-4 text-gray-600">Loading your wellness journey...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-waridi-pink/20 via-white to-waridi-purple/20">
      <Navigation />
      <Hero />
      <VisionMission />
      <Services />
      <VoiceRafikiPreview />
      <TargetAudience />
      <Testimonials />
      <Resources />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
