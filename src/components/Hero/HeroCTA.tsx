interface HeroCTAProps {
  isVisible: boolean;
}

const HeroCTA = ({ isVisible }: HeroCTAProps) => {
  return (
    <div className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-3xl shadow-2xl max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Spiritual Journey?</h3>
        <p className="text-lg mb-6 opacity-90">
          Book a consultation today and experience authentic Vedic traditions with modern convenience
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.href = 'tel:+919876543210'}
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
  );
};

export default HeroCTA;
