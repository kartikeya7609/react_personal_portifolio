import React from 'react';
import { motion as Motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-8 text-white">About Me</h2>
              
              <div className="space-y-8">
                <Motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-[#0a0a0a] p-8 rounded-2xl border border-[rgba(255,255,255,0.05)] hover:border-[#00ff9d] transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-[#00ff9d]">Frontend Developer</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I'm a passionate frontend developer currently pursuing Electrical Engineering at NIT Durgapur (2024-2028). 
                    Despite my academic focus, I've developed a strong expertise in web development through self-learning. 
                    I specialize in creating responsive and interactive user interfaces using modern web technologies.
                  </p>
                </Motion.div>
    
                <Motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-[#0a0a0a] p-8 rounded-2xl border border-[rgba(255,255,255,0.05)] hover:border-[#00ff9d] transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-[#00ff9d]">Technical Skills</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      'HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 
                      'Tailwind CSS', 'Bootstrap', 'Git'
                    ].map((skill, index) => (
                      <Motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        viewport={{ once: true }}
                        className="bg-black p-3 rounded-lg border border-[rgba(255,255,255,0.05)] text-center hover:border-[#00ff9d] transition-all duration-300"
                      >
                        <span className="text-gray-300">{skill}</span>
                      </Motion.div>
                    ))}
                  </div>
                </Motion.div>
    
                <Motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-[#0a0a0a] p-8 rounded-2xl border border-[rgba(255,255,255,0.05)] hover:border-[#00ff9d] transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-[#00ff9d]">Education</h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-[#00ff9d] pl-4">
                      <h4 className="text-xl font-medium text-white">B.Tech in Electrical Engineering</h4>
                      <p className="text-gray-400">NIT Durgapur • 2024 - 2028</p>
                      <p className="text-gray-300 mt-2">
                        Currently pursuing my degree while simultaneously building expertise in web development.
                      </p>
                    </div>
                  </div>
                </Motion.div>
    
                <Motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-[#0a0a0a] p-8 rounded-2xl border border-[rgba(255,255,255,0.05)] hover:border-[#00ff9d] transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-[#00ff9d]">Current Focus</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      'Advancing React Skills', 'Mastering TypeScript', 
                      'Learning Backend', 'Building Projects'
                    ].map((interest, index) => (
                      <Motion.div
                        key={interest}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        viewport={{ once: true }}
                        className="bg-black p-3 rounded-lg border border-[rgba(255,255,255,0.05)] text-center hover:border-[#00ff9d] transition-all duration-300"
                      >
                        <span className="text-gray-300">{interest}</span>
                      </Motion.div>
                    ))}
                  </div>
                </Motion.div>
              </div>
            </Motion.div>
          </div>
        </section>
    )
  
};
export default About; 