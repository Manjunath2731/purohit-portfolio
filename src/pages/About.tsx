import { Star, Users, Clock, Award, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Clock className="w-6 h-6" />, number: "15+", label: "Years Experience" },
    { icon: <Users className="w-6 h-6" />, number: "500+", label: "Ceremonies Performed" },
    { icon: <Heart className="w-6 h-6" />, number: "100+", label: "Happy Families" },
    { icon: <Award className="w-6 h-6" />, number: "25+", label: "Types of Rituals" }
  ];

  // const expertise = [
  //   {
  //     title: "Vedic Ceremonies",
  //     description: "Traditional wedding ceremonies, thread ceremonies, and coming-of-age rituals",
  //     icon: <BookOpen className="w-8 h-8 text-orange-500" />
  //   },
  //   {
  //     title: "Spiritual Pujas",
  //     description: "House warming, Satyanarayan puja, Lakshmi puja, and festival celebrations",
  //     icon: <Star className="w-8 h-8 text-orange-500" />
  //   },
  //   {
  //     title: "Sacred Homas",
  //     description: "Ganapati homa, Navagraha homa, and personalized fire rituals for specific needs",
  //     icon: <Heart className="w-8 h-8 text-orange-500" />
  //   }
  // ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-orange-100 rounded-full mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">🕉️</span>
            </div>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
            About Krishna Shastry
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            A dedicated Hindu priest with deep spiritual knowledge and over 15 years of experience in performing 
            traditional Vedic rituals. Committed to preserving ancient traditions while making them accessible 
            to modern families.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-orange-500 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Preserving Sacred Traditions</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Krishna Shastry comes from a family of learned priests and has dedicated his life to the study 
              and practice of Vedic traditions. His deep understanding of Sanskrit, combined with years of 
              practical experience, ensures that every ceremony is performed with utmost authenticity and devotion.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether it's a joyous wedding celebration, a sacred thread ceremony, or a spiritual homa for 
              health and prosperity, Krishna Shastry approaches each ritual with the same level of dedication 
              and reverence, creating meaningful spiritual experiences for families.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">Trusted by 100+ families</span>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gradient-to-br from-orange-200 to-red-200 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">🙏</div>
            <p className="text-gray-700 font-medium">
              "Dharma is the foundation of life, and rituals are the path to spiritual growth"
            </p>
            <p className="text-sm text-gray-600 mt-2">- Krishna Shastry</p>
          </div>
        </div>

        {/* Expertise Section */}
        {/* <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Areas of Expertise</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Philosophy Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Philosophy</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Every ritual has a deeper meaning and purpose. Our approach combines traditional authenticity 
              with clear explanations, ensuring that participants understand and connect with the spiritual 
              significance of each ceremony.
            </p>
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-6 py-3 rounded-full">
              <Heart className="w-5 h-5 text-orange-500" />
              <span className="text-orange-700 font-medium">Devotion • Authenticity • Understanding</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;