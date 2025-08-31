
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-midnight-accent pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-playfair font-bold gold-gradient mb-6">
              Ishaq's Ceiling Creations
            </h2>
            <p className="text-gray-400 mb-6">
              With over 25 years of experience, we transform spaces with premium false ceiling designs and installations. Based in Islamabad, our team of experts bring your vision to life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Gallery", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-gold transition-colors duration-300 flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Gypsum Ceilings",
                "POP Designs",
                "Wooden Ceilings",
                "Acoustic Solutions",
                "Custom Designs"
              ].map((item) => (
                <li key={item}>
                  <Link 
                    to="/services"
                    className="text-gray-400 hover:text-gold transition-colors duration-300 flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-bold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-gold mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Islamabad, Pakistan</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-gold mr-3 flex-shrink-0" />
                <a href="tel:+123456789" className="text-gray-400 hover:text-gold transition-colors duration-300">
                  +92 123 456 789
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-gold mr-3 flex-shrink-0" />
                <a href="mailto:info@ishaqceilings.com" className="text-gray-400 hover:text-gold transition-colors duration-300">
                  info@ishaqceilings.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()} Ishaq's Ceiling Creations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
