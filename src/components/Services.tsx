import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: 'code',
      title: 'Web Development',
      description: 'Creating responsive and modern websites with clean code and best practices. Specializing in front-end development with HTML, CSS, and JavaScript.'
    },
    {
      icon: 'paint-brush',
      title: 'Web Design',
      description: 'Designing beautiful and user-friendly interfaces with a focus on modern aesthetics and optimal user experience.'
    },
    {
      icon: 'mobile-alt',
      title: 'Responsive Design',
      description: 'Ensuring your website looks and works perfectly on all devices, from mobile phones to desktop computers.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12 text-white">
          <i className="fas fa-cog text-[#00ff9d] mr-4"></i> Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-[#1a1a1a] p-8 rounded-lg text-center border border-[#333333] hover:border-[#00ff9d] hover:shadow-[0_0_10px_#00ff9d,0_0_20px_#00ff9d,0_0_30px_#00ff9d] transition-all duration-300 transform hover:-translate-y-2"
            >
              <i className={`fas fa-${service.icon} text-4xl text-[#00ff9d] mb-6`}></i>
              <h3 className="text-2xl text-white mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 