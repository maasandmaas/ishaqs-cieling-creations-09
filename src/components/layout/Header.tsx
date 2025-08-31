
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-midnight/90 backdrop-blur-lg shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="relative z-50">
          <h1 className="text-2xl font-playfair font-bold gold-gradient">
            Ishaq's <span className="block sm:inline">Ceiling Creations</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-montserrat tracking-wide transition-all duration-200 hover:text-gold ${
                location.pathname === item.href
                  ? "text-gold font-medium"
                  : "text-gray-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button 
            asChild 
            className="bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black hover:from-gold hover:to-gold-dark transition-all duration-300 animate-glow font-montserrat"
          >
            <a href="tel:+123456789">
              <Phone size={16} className="mr-2" />
              Call Now
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <X size={24} className="text-gold" />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-midnight-accent/95 z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-xl font-playfair tracking-wider transition-all hover:text-gold ${
                location.pathname === item.href
                  ? "text-gold"
                  : "text-gray-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button 
            asChild 
            className="bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black hover:from-gold hover:to-gold-dark transition-all duration-300 animate-glow font-montserrat mt-4"
          >
            <a href="tel:+123456789">
              <Phone size={16} className="mr-2" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
