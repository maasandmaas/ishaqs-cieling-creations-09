
import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "default" | "footer";
}

const Logo = ({ variant = "default" }: LogoProps) => {
  const isFooter = variant === "footer";
  
  return (
    <Link to="/" className="flex items-center">
      <div className="flex items-center">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center">
            <span className="text-black font-playfair font-bold text-xl">IC</span>
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gold-light rounded-full animate-pulse"></div>
        </div>
        <div className="ml-3">
          <h1 className={`font-playfair font-bold ${isFooter ? "text-xl" : "text-2xl"} tracking-tight`}>
            <span className="text-white">Ishaq</span>
            <span className="text-gold"> Ceilings</span>
          </h1>
          <p className={`text-gray-400 text-xs tracking-widest uppercase ${isFooter ? "hidden" : "block"}`}>
            Premium False Ceiling Design
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
