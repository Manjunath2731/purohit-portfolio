const Services = () => {
  return (
    <section id="services" className="min-h-screen bg-yellow-50 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-orange-600 text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Wedding Ceremony', description: 'Traditional Vedic weddings with all rituals and blessings.' },
            { title: 'Griha Pravesh', description: 'Housewarming rituals to sanctify your new home.' },
            { title: 'Satyanarayan Puja', description: 'Special pujas for health, wealth, and prosperity.' },
            { title: 'Homa & Havan', description: 'Fire offerings for purification and spiritual upliftment.' },
            { title: 'Astrology Guidance', description: 'Get expert insights into your future and birth charts.' },
            { title: 'Naming Ceremonies', description: 'Auspicious naming rituals for newborns.' }
          ].map((service, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md border border-orange-100">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
