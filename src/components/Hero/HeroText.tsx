import { Calendar, Sparkles} from 'lucide-react';
import vectorImage from '../../assets/vector1.png';

interface HeroTextProps {
    isVisible: boolean;
    currentQuote: number;
    quotes: string[];
}

const HeroText = ({ isVisible, currentQuote, quotes }: HeroTextProps) => {
    const handleBookConsultation = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleViewServices = () => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-yellow-100 px-4 py-2 rounded-full border border-orange-200">
                <span className="text-2xl">🙏</span>
                <span className="text-orange-700 font-medium">Namaste & Welcome</span>
            </div>

            <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    <span className="text-gray-800">Pandit</span><br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-500 to-yellow-600">
                        Krishna Shastry
                    </span>
                </h1>
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                    <p className="text-xl text-gray-600 font-medium">Hindu Priest & Spiritual Guide</p>
                </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
                Bringing the sacred traditions of our ancestors to your modern life. With over
                <span className="font-bold text-orange-600"> 15 years of experience</span>, I perform authentic Vedic ceremonies
                with devotion and precision.
            </p>

            <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-2xl border-l-4 border-orange-500">
                <div className="flex items-start space-x-3">
                    <div className="text-2xl mt-1">📿</div>
                    <div>
                        <p className="text-gray-800 font-medium italic transition-all duration-500">
                            "{quotes[currentQuote]}"
                        </p>
                        <div className="flex mt-2 space-x-1">
                            {quotes.map((_, index) => (
                                <div key={index} className={`w-2 h-2 rounded-full ${index === currentQuote ? 'bg-orange-500' : 'bg-orange-200'}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={handleBookConsultation} className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    <span className="flex items-center justify-center space-x-2">
                        <Calendar className="w-5 h-5 group-hover:animate-bounce" />
                        <span>Book Consultation</span>
                    </span>
                </button>
                <button onClick={handleViewServices} className="group border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 hover:scale-105 transition-all duration-300">
                    <span className="flex items-center justify-center space-x-2">
                        <Sparkles className="w-5 h-5 group-hover:animate-spin" />
                        <span>View Services</span>
                    </span>
                </button>
            </div>

            <div className="pt-4 hidden sm:block">
                <img
                    src={vectorImage}
                    alt="Decorative vector"
                    className="w-full max-w-md rounded-xl"
                />
            </div>
        </div>
    );
};

export default HeroText;
