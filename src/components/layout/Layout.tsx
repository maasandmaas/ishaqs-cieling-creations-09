
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Scroll to top on route change and handle loading state
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Reduce loading time significantly for better UX
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // Reduced from 800ms to 300ms for faster content display
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <Loader2 className="w-12 h-12 text-gold animate-spin mb-4" />
            <p className="text-gold font-medium">Loading Ishaq Ceilings...</p>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
