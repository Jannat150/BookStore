import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-6 px-4 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-lg font-semibold mb-4 sm:mb-0">© {new Date().getFullYear()} BookStore</div>

        <div className="flex gap-4">
          <a
            href="https://github.com/Jannat150"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#61dafb] transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jannat-0a457a328/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#61dafb] transition"
          >
            LinkedIn
          </a>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;

