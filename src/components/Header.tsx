import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-screen top-0 left-0 z-50 ">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-green-800">
            rimes
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a
              href="/who-we-are"
              className="text-green-800 hover:text-green-900 font-semibold font-semibold "
            >
              Who We Are
            </a>
            <a
              href="/solutions"
              className="text-green-800 hover:text-green-900 font-semibold"
            >
              Solutions
            </a>
            <a
              href="/partners"
              className="text-green-800 hover:text-green-900 font-semibold"
            >
              Partners
            </a>
            <a
              href="/insights"
              className="text-green-800 hover:text-green-900 font-semibold"
            >
              Insights
            </a>
            <a
              href="/why-rimes"
              className="text-green-800 hover:text-green-900 font-semibold"
            >
              Why Rimes
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4 items-center">
            <a
              href="/careers"
              className="text-green-800 font-semibold hover:text-green-900 font-semibold px-4 py-2 rounded-full border border-green-800 hover:bg-green-50 transition duration-300"
            >
              Careers
            </a>
            <a
              href="/contact"
              className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-green-900 transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-green-800" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <a
              href="/who-we-are"
              className="block py-2 text-green-800 hover:text-green-900 font-semibold"
            >
              Who We Are
            </a>
            <a
              href="/solutions"
              className="block py-2 text-green-800 hover:text-green-900 font-semibold"
            >
              Solutions
            </a>
            <a
              href="/partners"
              className="block py-2 text-green-800 hover:text-green-900 font-semibold"
            >
              Partners
            </a>
            <a
              href="/insights"
              className="block py-2 text-green-800 hover:text-green-900 font-semibold"
            >
              Insights
            </a>
            <a
              href="/why-rimes"
              className="block py-2 text-green-800 hover:text-green-900 font-semibold"
            >
              Why Rimes
            </a>
            <a
              href="/careers"
              className="block py-2 text-green-800 font-semibold hover:text-green-900 font-semibold"
            >
              Careers
            </a>
            <a
              href="/contact"
              className="block py-2 bg-orange-400 text-white font-semibold px-4 rounded-full hover:bg-green-900 inline-block mt-2 transition duration-300"
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
