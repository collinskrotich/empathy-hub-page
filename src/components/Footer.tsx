
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Mail, Phone, MessageCircle, Instagram, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-waridi-purple-dark to-waridi-pink-dark py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Join Our Wellness Community
          </h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Get weekly mental wellness tips, cultural insights, and updates on new Waridi features delivered to your inbox.
          </p>
          <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder:text-purple-100"
              required
            />
            <Button type="submit" className="bg-white text-waridi-purple-dark hover:bg-gray-100">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-waridi-pink to-waridi-purple bg-clip-text text-transparent mb-4">
              Waridi Wellness
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Your voice-first mental wellness rafiki, providing culturally-aware support for African communities.
            </p>
            <div className="flex items-center text-sm text-waridi-yellow">
              <Heart className="h-4 w-4 mr-2" />
              <span>Hali Halali - Your Mind Matters</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-3 text-waridi-pink" />
                <span>hello@waridihealth.space</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-3 text-waridi-purple" />
                <span>+254 745882265</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MessageCircle className="h-4 w-4 mr-3 text-waridi-green" />
                <span>WhatsApp: +254 745882265</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#features" className="block text-gray-400 hover:text-waridi-pink transition-colors">
                Voice Rafiki Features
              </a>
              <a href="#testimonials" className="block text-gray-400 hover:text-waridi-pink transition-colors">
                Success Stories
              </a>
              <a href="#resources" className="block text-gray-400 hover:text-waridi-pink transition-colors">
                Mental Health Resources
              </a>
              <a href="/auth" className="block text-gray-400 hover:text-waridi-pink transition-colors">
                Try Voice Rafiki
              </a>
            </div>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support & Legal</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-waridi-pink transition-colors">
                Crisis Support
              </a>
              <a href="#" className="block text-gray-400 hover:text-waridi-pink transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-waridi-pink transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-gray-400 hover:text-waridi-pink transition-colors">
                Community Guidelines
              </a>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Waridi Wellness. Made with ❤️ for African communities.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-waridi-pink transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-waridi-purple transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-waridi-green transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
