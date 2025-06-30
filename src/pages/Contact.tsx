import { useEffect, useState } from "react";
import HeroCTA from "../components/Hero/HeroCTA";

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <section id="contact" className="min-h-screen bg-red-50 px-6 py-20">
            <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
                <HeroCTA isVisible={isVisible} />
            </div>
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-orange-600 mb-6">Contact Us</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Feel free to reach out for bookings or inquiries. We are happy to assist you.
                </p>
                <div className="space-y-4">
                    <p className="text-lg">
                        📞 Phone: <a href="tel:+919876543210" className="text-orange-500 hover:underline">+91 98765 43210</a>
                    </p>
                    <p className="text-lg">
                        📧 Email: <a href="mailto:krishna.shastry@email.com" className="text-orange-500 hover:underline">krishna.shastry@email.com</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;