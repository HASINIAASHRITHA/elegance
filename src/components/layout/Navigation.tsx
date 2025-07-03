
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "Agents", path: "/agents" },
    { name: "Favorites", path: "/favorites" },
    { name: "Calculator", path: "/mortgage-calculator" },
    { name: "Enquiry", path: "/enquiry" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-luxury-dark/95 backdrop-blur-md shadow-elegant border-b border-luxury-gold/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group transition-all duration-300"
          >
            <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center shadow-gold group-hover:shadow-luxury transition-all duration-300">
              <span className="text-luxury-dark font-bold text-xl">E</span>
            </div>
            <span className="text-2xl font-bold text-luxury-text tracking-wide">
              Elegance
              <span className="text-luxury-gold">Estate</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative px-4 py-2 rounded-lg transition-all duration-300 font-medium",
                  location.pathname === item.path
                    ? "text-luxury-gold"
                    : "text-luxury-text hover:text-luxury-gold"
                )}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-gold rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signin">
              <Button variant="ghost" size="sm" className="text-luxury-text">
                Sign In
              </Button>
            </Link>
            <Link to="/list-property">
              <Button variant="luxury" size="sm">
                List Property
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-luxury-text hover:text-luxury-gold transition-colors duration-200"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={cn(
                  "block h-0.5 w-6 bg-current transition-all duration-300",
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-1"
                    : "rotate-0 translate-y-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 bg-current transition-all duration-300 mt-1",
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 bg-current transition-all duration-300 mt-1",
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-1"
                    : "rotate-0 translate-y-0"
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 space-y-2 border-t border-luxury-gold/20">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg transition-all duration-200",
                  location.pathname === item.path
                    ? "text-luxury-gold bg-luxury-gold/10"
                    : "text-luxury-text hover:text-luxury-gold hover:bg-luxury-gold/5"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Link to="/signin">
                <Button variant="ghost" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link to="/list-property">
                <Button variant="luxury" className="w-full">
                  List Property
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
