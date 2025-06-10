import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/meher-sri-kartikeya-kotha-135997217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com/kartikeya7609',
      color: '#333'
    },
    {
      name: 'X',
      icon: 'x-twitter',
      url: 'https://x.com/kotha_mehe43188?t=lrtyEi8LmHWoNPbtlLMfYQ&s=09',
      color: '#1da1f2'
    },
    {
      name: 'Instagram',
      icon: 'instagram',
      url: 'https://www.instagram.com/k_m_s_k_7',
      color: '#e4405f'
    }
  ];

  const quickLinks = [
    { name: 'Home', icon: 'home', href: '#home' },
    { name: 'About', icon: 'user', href: '#about' },
    { name: 'Timeline', icon: 'history', href: '#timeline' },
    { name: 'Projects', icon: 'project-diagram', href: '#projects' },
    { name: 'Contact', icon: 'envelope', href: '#contact' }
  ];

  return (
    <footer className="bg-[#121212] py-16 px-4 border-t border-[#333333]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl text-[#00ff9d] mb-6 uppercase tracking-wider">Join my network!</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1a1a1a] p-6 rounded-xl border border-[#333333] hover:border-[#00ff9d] hover:shadow-[0_0_10px_#00ff9d,0_0_20px_#00ff9d,0_0_30px_#00ff9d] transition-all duration-300 flex flex-col items-center justify-center text-white hover:text-[#00ff9d]"
                >
                  <i 
                    className={`fab fa-${link.icon} text-3xl mb-2`}
                    style={{ color: link.color }}
                  ></i>
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl text-[#00ff9d] mb-6 uppercase tracking-wider">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-gray-400 hover:text-[#00ff9d] transition-colors duration-300 flex items-center gap-2 py-2"
                >
                  <i className={`fas fa-${link.icon} text-[#00ff9d]`}></i>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-[#333333] text-gray-400">
          <p>&copy; 2025 Kartikeya. All rights reserved.</p>
          <p className="mt-2">
            Built with <i className="fas fa-heart text-red-500 mx-1"></i> and <i className="fas fa-code mx-1"></i>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 