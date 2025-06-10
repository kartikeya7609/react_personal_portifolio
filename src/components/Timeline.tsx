import React from 'react';

const Timeline: React.FC = () => {
  const timelineItems = [
    {
      year: '2024 - Present',
      title: 'National Institute of Technology Durgapur',
      description: 'Pursuing my education in Electrical Engineering',
      location: 'Durgapur, West Bengal',
      locationUrl: 'https://maps.app.goo.gl/pWr5aP1BWJWJveNC6'
    },
    {
      year: '2022 - 2024',
      title: 'Tirumula Junior College',
      description: 'Completed my intermediate education',
      location: 'Rajahmundry, Andhra Pradesh',
      locationUrl: 'https://maps.app.goo.gl/9u1pGBsSbDEfnihMA'
    },
    {
      year: '2022',
      title: 'Ashram Public School',
      description: 'Completed my high school education',
      location: 'Kakinada, Andhra Pradesh',
      locationUrl: 'https://maps.app.goo.gl/KpKUiijXnq4wHzn88'
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-[#121212] relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12 text-white">
          <i className="fas fa-history text-[#00ff9d] mr-4"></i> My Journey
        </h2>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#00ff9d]"></div>

          {timelineItems.map((item, index) => (
            <div 
              key={index}
              className={`relative mb-8 ${index % 2 === 0 ? 'md:ml-auto md:mr-[50%] md:pr-8' : 'md:mr-auto md:ml-[50%] md:pl-8'}`}
            >
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333333] hover:border-[#00ff9d] hover:shadow-[0_0_10px_#00ff9d,0_0_20px_#00ff9d,0_0_30px_#00ff9d] transition-all duration-300">
                <h3 className="text-[#00ff9d] mb-2">{item.year}</h3>
                <h4 className="text-white text-xl mb-2">
                  <i className="fas fa-university text-[#00ff9d] mr-2"></i>
                  {item.title}
                </h4>
                <p className="text-gray-400 mb-2">
                  <i className="fas fa-graduation-cap text-[#00ff9d] mr-2"></i>
                  {item.description}
                </p>
                <a 
                  href={item.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00ff9d] hover:text-white transition-colors duration-300 inline-flex items-center"
                >
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  {item.location}
                </a>
              </div>
              <div className="absolute top-6 w-4 h-4 bg-[#00ff9d] rounded-full transform -translate-x-1/2 left-0 md:left-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline; 