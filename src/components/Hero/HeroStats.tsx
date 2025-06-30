import { Heart, Sparkles, Star, Users } from 'lucide-react';

const services = [
  { icon: <Heart className="w-5 h-5" />, text: "Wedding Ceremonies", count: "200+" },
  { icon: <Sparkles className="w-5 h-5" />, text: "Puja & Homa", count: "500+" },
  { icon: <Star className="w-5 h-5" />, text: "Astrology", count: "15 Years" },
  { icon: <Users className="w-5 h-5" />, text: "Happy Families", count: "1000+" }
];

const HeroStats = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8">
      {services.map((service, index) => (
        <div
          key={index}
          className={`bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl hover:scale-105 transition-all duration-300 ${
            index % 2 === 0 ? 'animate-float' : 'animate-float-delay'
          }`}
        >
          <div className="flex items-center space-x-3">
            <div className="text-orange-500">{service.icon}</div>
            <div>
              <div className="text-2xl font-bold text-gray-800">{service.count}</div>
              <div className="text-sm text-gray-600">{service.text}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
