
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (user) {
      signOut();
    } else {
      navigate('/auth');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-waridi-pink/20 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-waridi-pink-dark to-waridi-purple-dark bg-clip-text text-transparent">
              Waridi Wellness
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-700 hover:text-waridi-purple-dark px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#features" className="text-gray-700 hover:text-waridi-purple-dark px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-waridi-purple-dark px-3 py-2 text-sm font-medium transition-colors">
                Stories
              </a>
              <a href="#resources" className="text-gray-700 hover:text-waridi-purple-dark px-3 py-2 text-sm font-medium transition-colors">
                Resources
              </a>
              <a href="#contact" className="text-gray-700 hover:text-waridi-purple-dark px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600">
                    Welcome, {user.email}
                  </span>
                  <Button
                    onClick={handleAuthAction}
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-1 border-waridi-purple text-waridi-purple-dark hover:bg-waridi-purple/10"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </Button>
                </div>
              ) : (
                <Button 
                  onClick={handleAuthAction}
                  className="bg-gradient-to-r from-waridi-pink-dark to-waridi-purple-dark hover:from-waridi-pink to-waridi-purple text-white"
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-waridi-purple-dark">
                Home
              </a>
              <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-waridi-purple-dark">
                Features
              </a>
              <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-waridi-purple-dark">
                Stories
              </a>
              <a href="#resources" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-waridi-purple-dark">
                Resources
              </a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-waridi-purple-dark">
                Contact
              </a>
              {user ? (
                <div className="px-3 py-2 space-y-2">
                  <div className="text-sm text-gray-600">
                    Welcome, {user.email}
                  </div>
                  <Button
                    onClick={handleAuthAction}
                    variant="outline"
                    size="sm"
                    className="w-full flex items-center justify-center space-x-1 border-waridi-purple text-waridi-purple-dark hover:bg-waridi-purple/10"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </Button>
                </div>
              ) : (
                <Button 
                  onClick={handleAuthAction}
                  className="w-full mt-2 bg-gradient-to-r from-waridi-pink-dark to-waridi-purple-dark hover:from-waridi-pink to-waridi-purple"
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
