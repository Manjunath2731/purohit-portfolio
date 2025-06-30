import { useEffect, useState } from 'react';
import HeroText from './HeroText';
import HeroImage from './HeroImage';
// import HeroStats from './HeroStats';
// import HeroCTA from './HeroCTA';

const Hero = () => {
    const [currentQuote, setCurrentQuote] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const spiritualQuotes = [
        "धर्मो रक्षति रक्षितः - Dharma protects those who protect it",
        "सत्यमेव जयते - Truth alone triumphs",
        "वसुधैव कुटुम्बकम् - The world is one family",
        "अहिंसा परमो धर्मः - Non-violence is the highest virtue"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % spiritualQuotes.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="home" className="relative min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 overflow-hidden">
            {/* Floating Symbols */}
            <div className="absolute inset-0">
                {/* <div className="absolute top-20 left-10 text-6xl text-orange-200 animate-pulse opacity-30">🕉</div>
                <div className="absolute top-40 right-20 text-4xl text-yellow-200 animate-bounce opacity-20 animation-delay-1000">🙏</div> */}
                <div className="absolute bottom-40 left-20 text-5xl text-red-200 animate-pulse opacity-25 animation-delay-2000">🪔</div>
                <div className="absolute bottom-20 right-10 text-3xl text-orange-200 animate-bounce opacity-30 animation-delay-3000">🌺</div>
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-300/20 to-yellow-300/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-red-300/20 to-orange-300/20 rounded-full blur-3xl animate-float-delay" />
            </div>

            {/* Main Grid */}
            <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    <HeroText isVisible={isVisible} currentQuote={currentQuote} quotes={spiritualQuotes} />
                    <div className="space-y-8">
                        <HeroImage isVisible={isVisible} />
                        {/* <HeroStats /> */}
                    </div>
                </div>
                {/* <HeroCTA isVisible={isVisible} /> */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
