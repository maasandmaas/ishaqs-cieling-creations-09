
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, ChevronRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-midnight py-20">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-midnight-light flex items-center justify-center">
            <AlertTriangle className="text-gold w-12 h-12" />
          </div>
        </div>
        <h1 className="text-7xl font-playfair font-bold mb-4 gold-gradient animate-pulse">404</h1>
        <h2 className="text-3xl font-playfair text-white mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-300 mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="space-y-4">
          <Button 
            asChild 
            className="bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black hover:from-gold hover:to-gold-dark transition-all duration-300 animate-glow w-full"
          >
            <Link to="/">
              <Home className="mr-2" size={18} />
              Back to Home
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            className="border-gold hover:bg-gold/10 text-gold w-full"
          >
            <Link to="/contact">
              Contact Us
              <ChevronRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
