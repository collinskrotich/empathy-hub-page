import { Button } from "@/components/ui/button";
import { Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAuthAction = () => {
    if (user) {
      signOut();
    } else {
      navigate('/auth');
    }
  };

  const handleNavigation = (path: string) => {
    if (path.startsWith('#')) {
      // If we're not on the home page, navigate to home first then scroll
      if (location.pathname !== '/') {
        navigate('/');
        // Small delay to ensure page loads before scrolling
        setTimeout(() => {
          const element = document.querySelector(path);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // We're already on home page, just scroll
        const element = document.querySelector(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Regular page navigation
      navigate(path);
    }
    setIsMenuOpen(false); // Close mobile menu
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-waridi-pink/20 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => handleNavigation('/')} 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img 
              src="/pink_rose_nobg.png" 
              alt="Waridi Logo" 
              className="h-16 w-16"
            />
            <div className="text-2xl font-bold bg-gradient-to-r from-waridi-pink-dark to-waridi-purple-dark bg-clip-text text-transparent">
              Waridi
            </div>
          </button>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => handleNavigation('#home')} className="text-gray-700 hover:text-waridi-purple-dark px-3 py-2 text-sm font-medium transition-colors">
                Home
              </button>
              <button onClick={() => handleNavigation('#features')} className="text-gray-700 hover:text-waridi-purple-dark px-3 py-2 text-sm font-medium transition-colors">
                Features
              </button>
              <button onClick={() => handleNavigation('#testimonials')} className="text-gray-700 hover:text-waridi-purple-dark px-3 py-2 text-sm font-medium transition-colors">
                Stories
              </button>
              <button onClick={() => handleNavigation('/blog')} className="text-gray-700 hover:text-waridi-purple-dark px-3 py-2 text-sm font-medium transition-colors">
                Blog
              </button>
              <button onClick={() => handleNavigation('/team')} className="text-gray-700 hover:text-waridi-purple-dark px-3 py-2 text-sm font-medium transition-colors">
                Team
              </button>
              <button onClick={() => handleNavigation('#resources')} className="text-gray-700 hover:text-waridi-purple-dark px-3 py-2 text-sm font-medium transition-colors">
                Resources
              </button>
              <button onClick={() => handleNavigation('#contact')} className="text-gray-700 hover:text-waridi-purple-dark px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </button>
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
              <button onClick={() => handleNavigation('#home')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-waridi-purple-dark">
                Home
              </button>
              <button onClick={() => handleNavigation('#features')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-waridi-purple-dark">
                Features
              </button>
              <button onClick={() => handleNavigation('#testimonials')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-waridi-purple-dark">
                Stories
              </button>
              <button onClick={() => handleNavigation('/blog')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-waridi-purple-dark">
                Blog
              </button>
              <button onClick={() => handleNavigation('/team')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-waridi-purple-dark">
                Team
              </button>
              <button onClick={() => handleNavigation('#resources')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-waridi-purple-dark">
                Resources
              </button>
              <button onClick={() => handleNavigation('#contact')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-waridi-purple-dark">
                Contact
              </button>
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
