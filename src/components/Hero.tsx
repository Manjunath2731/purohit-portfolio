import { useState, useEffect } from 'react';
import { Phone, Mail, Calendar, Star, Sparkles, Users, Heart, Award } from 'lucide-react';
import priestImage from '../assets/poojari.jpeg';

const Hero = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Spiritual quotes rotation
  const spiritualQuotes = [
    "धर्मो रक्षति रक्षितः - Dharma protects those who protect it",
    "सत्यमेव जयते - Truth alone triumphs",
    "वसुधैव कुटुम्बकम् - The world is one family",
    "अहिंसा परमो धर्मः - Non-violence is the highest virtue"
  ];

  // Services highlight
  const quickServices = [
    { icon: <Heart className="w-5 h-5" />, text: "Wedding Ceremonies", count: "200+" },
    { icon: <Sparkles className="w-5 h-5" />, text: "Puja & Homa", count: "500+" },
    { icon: <Star className="w-5 h-5" />, text: "Astrology", count: "15 Years" },
    { icon: <Users className="w-5 h-5" />, text: "Happy Families", count: "1000+" }
  ];

  // Auto-rotate quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % spiritualQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBookConsultation = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Om Symbols */}
        <div className="absolute top-20 left-10 text-6xl text-orange-200 animate-pulse opacity-30">🕉</div>
        <div className="absolute top-40 right-20 text-4xl text-yellow-200 animate-bounce opacity-20 animation-delay-1000">🙏</div>
        <div className="absolute bottom-40 left-20 text-5xl text-red-200 animate-pulse opacity-25 animation-delay-2000">🪔</div>
        <div className="absolute bottom-20 right-10 text-3xl text-orange-200 animate-bounce opacity-30 animation-delay-3000">🌺</div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-300/20 to-yellow-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-red-300/20 to-orange-300/20 rounded-full blur-3xl animate-float-delay"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            
            {/* Greeting */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-yellow-100 px-4 py-2 rounded-full border border-orange-200">
              <span className="text-2xl">🙏</span>
              <span className="text-orange-700 font-medium">Namaste & Welcome</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-800">Pandit</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-500 to-yellow-600">
                  Krishna Shastry
                </span>
              </h1>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                <p className="text-xl text-gray-600 font-medium">Hindu Priest & Spiritual Guide</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              Bringing the sacred traditions of our ancestors to your modern life. With over 
              <span className="font-bold text-orange-600"> 15 years of experience</span>, I perform 
              authentic Vedic ceremonies with devotion and precision, creating blessed moments 
              that last a lifetime.
            </p>

            {/* Rotating Spiritual Quote */}
            <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-2xl border-l-4 border-orange-500">
              <div className="flex items-start space-x-3">
                <div className="text-2xl mt-1">📿</div>
                <div>
                  <p className="text-gray-800 font-medium italic transition-all duration-500">
                    "{spiritualQuotes[currentQuote]}"
                  </p>
                  <div className="flex mt-2 space-x-1">
                    {spiritualQuotes.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentQuote ? 'bg-orange-500' : 'bg-orange-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleBookConsultation}
                className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Book Consultation</span>
                </span>
              </button>
              
              <button
                onClick={handleViewServices}
                className="group border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Sparkles className="w-5 h-5 group-hover:animate-spin" />
                  <span>View Services</span>
                </span>
              </button>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="tel:+919876543210"
                className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </a>
              <a 
                href="mailto:krishna.shastry@email.com"
                className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>krishna.shastry@email.com</span>
              </a>
            </div>
          </div>

          {/* Right Content - Image & Stats */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            
            {/* Main Image */}
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-red-200 rounded-3xl transform rotate-6 scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-3xl transform -rotate-3 scale-110 opacity-50"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-yellow-100">
                  <img
                    src={priestImage}
                    alt="Krishna Shastry - Hindu Priest"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-2xl shadow-lg animate-bounce">
                  <div className="text-center">
                    <Award className="w-6 h-6 mx-auto mb-1" />
                    <div className="text-xs font-bold">15+ Years</div>
                    <div className="text-xs">Experience</div>
                  </div>
                </div>
                
                {/* Verification Badge */}
                <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold">Verified Priest</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {quickServices.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl hover:scale-105 transition-all duration-300 ${
                    index % 2 === 0 ? 'animate-float' : 'animate-float-delay'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-orange-500">
                      {service.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-800">{service.count}</div>
                      <div className="text-sm text-gray-600">{service.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-3xl shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Spiritual Journey?</h3>
            <p className="text-lg mb-6 opacity-90">
              Book a consultation today and experience authentic Vedic traditions with modern convenience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBookConsultation}
                className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transform hover:scale-105 transition-all duration-300"
              >
                📞 Call Now: +91 98765 43210
              </button>
              <button
                onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transform hover:scale-105 transition-all duration-300"
              >
                💬 WhatsApp Chat
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;