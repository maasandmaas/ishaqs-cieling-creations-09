
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically redirect to the home page
    const timer = setTimeout(() => {
      navigate("/home");
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-midnight">
      <div className="text-center">
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center mb-4">
            <span className="text-black font-playfair font-bold text-3xl">IC</span>
          </div>
          <h1 className="text-4xl font-playfair font-bold mb-2">
            <span className="text-white">Ishaq</span>
            <span className="text-gold"> Ceilings</span>
          </h1>
          <p className="text-gray-400 text-sm tracking-widest uppercase">
            Premium False Ceiling Design
          </p>
        </div>
        <Loader2 className="w-8 h-8 text-gold animate-spin mx-auto mb-4" />
        <p className="text-xl text-gray-300">Redirecting to website...</p>
      </div>
    </div>
  );
};

export default Index;
