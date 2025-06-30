
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'services', label: 'Services', icon: '🙏' },
    { id: 'gallery', label: 'Gallery', icon: '📸' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>krishna.shastry@email.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Bangalore, Karnataka</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4" />
              <span>Available 7 days a week</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-gradient-to-r from-[#D9A441] to-[#B8941F] py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                isScrolled 
                  ? 'bg-gradient-to-r from-orange-500 to-red-500' 
                  : 'bg-white/20 backdrop-blur-sm'
              }`}>
                <span className="text-white font-bold text-xl">🕉</span>
              </div>
              <div>
                <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}>
                  Shri Krishna Shastry
                </h1>
                <p className={`text-sm transition-colors duration-300 ${
                  isScrolled ? 'text-orange-600' : 'text-white/80'
                }`}>
                  Hindu Priest & Spiritual Guide
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 text-lg font-medium transition-all duration-300 group ${
                    activeSection === item.id
                      ? isScrolled
                        ? 'text-orange-600'
                        : 'text-white'
                      : isScrolled
                        ? 'text-gray-700 hover:text-orange-600'
                        : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-sm">{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                  
                  {/* Active indicator */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 ${
                    activeSection === item.id
                      ? isScrolled
                        ? 'bg-orange-500 scale-x-100'
                        : 'bg-white scale-x-100'
                      : 'bg-transparent scale-x-0 group-hover:scale-x-100'
                  } ${!isScrolled && activeSection !== item.id ? 'group-hover:bg-white/50' : ''}`}></div>
                </button>
              ))}
              
              {/* CTA Button */}
              <button 
                onClick={() => handleNavClick('contact')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg'
                    : 'bg-white text-orange-600 hover:bg-orange-50'
                }`}
              >
                Book Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <div className={`rounded-2xl p-6 space-y-4 ${
              isScrolled
                ? 'bg-white border border-gray-200 shadow-lg'
                : 'bg-white/10 backdrop-blur-sm'
            }`}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-3 ${
                    activeSection === item.id
                      ? isScrolled
                        ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-500'
                        : 'bg-white/20 text-white border-l-4 border-white'
                      : isScrolled
                        ? 'text-gray-700 hover:bg-gray-50'
                        : 'text-white/80 hover:bg-white/10'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
              
              {/* Mobile CTA */}
              <button 
                onClick={() => handleNavClick('contact')}
                className={`w-full px-6 py-4 rounded-full font-semibold transition-all duration-300 mt-4 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                    : 'bg-white text-orange-600'
                }`}
              >
                📞 Book Consultation
              </button>
              
              {/* Mobile Contact Info */}
              <div className={`mt-6 pt-4 border-t space-y-2 text-sm ${
                isScrolled
                  ? 'border-gray-200 text-gray-600'
                  : 'border-white/20 text-white/80'
              }`}>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>krishna.shastry@email.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className={`transition-all duration-300 ${
        isScrolled ? 'h-20' : 'h-32'
      } md:h-24`}></div>
    </>
  );
};

export default Navbar;