import priestImage from '../../assets/poojari.jpeg';
import { Award } from 'lucide-react';

interface HeroImageProps {
  isVisible: boolean;
}

const HeroImage = ({ isVisible }: HeroImageProps) => {
  return (
    <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-red-200 rounded-3xl transform rotate-6 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-3xl transform -rotate-3 scale-110 opacity-50" />
        <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-yellow-100">
            <img src={priestImage} alt="Krishna Shastry - Hindu Priest" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-2xl shadow-lg animate-bounce">
            <div className="text-center">
              <Award className="w-6 h-6 mx-auto mb-1" />
              <div className="text-xs font-bold">15+ Years</div>
              <div className="text-xs">Experience</div>
            </div>
          </div>
          {/* <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Verified Priest</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
