import { useState } from 'react';

export default function Header() {
  const [isActiveLink, setIsActiveLink] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (link: string) => {
    setIsActiveLink(link);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 text-black p-4 flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-35 pt-6 md:pt-10 pb-4 md:pb-5 bg-primary rounded-none md:rounded-xl shadow-lg border-b-primary z-50">
      <div className="flex items-center gap-x-1">
        <h1 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-semibold text-white">zchuwie <span className='font-semibold text-secondary'>/</span></h1>
      </div>
      
      {/* Hamburger menu button - visible on mobile */}
      <button 
        className="md:hidden text-white text-2xl z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-4 lg:space-x-8 xl:space-x-15 mt-2">
          <li>
            <a 
              href="#home" 
              className={`hover:underline text-white text-sm lg:text-base xl:text-lg hover:underline-offset-10 ${isActiveLink === 'home' ? 'underline underline-offset-10 decoration-secondary decoration-2' : ''}`}
              onClick={() => { setIsActiveLink('home');}}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={`hover:underline text-white text-sm lg:text-base xl:text-lg hover:underline-offset-10 ${isActiveLink === 'about' ? 'underline underline-offset-10 decoration-secondary decoration-2' : ''}`}
              onClick={() => { setIsActiveLink('about');}}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              className={`hover:underline text-white text-sm lg:text-base xl:text-lg hover:underline-offset-10 ${isActiveLink === 'experience' ? 'underline underline-offset-10 decoration-secondary decoration-2' : ''}`}
              onClick={() => { setIsActiveLink('experience');}}
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={`hover:underline text-white text-sm lg:text-base xl:text-lg hover:underline-offset-10 ${isActiveLink === 'projects' ? 'underline underline-offset-10 decoration-secondary decoration-2' : ''}`}
              onClick={() => { setIsActiveLink('projects');}}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`hover:underline text-white text-sm lg:text-base xl:text-lg hover:underline-offset-10 ${isActiveLink === 'contact' ? 'underline underline-offset-10 decoration-secondary decoration-2' : ''}`}
              onClick={() => { setIsActiveLink('contact');}}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation Menu */}
      <nav className={`md:hidden fixed inset-0 bg-primary z-40 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          <li>
            <a 
              href="#home" 
              className={`text-white text-2xl hover:text-secondary transition-colors ${isActiveLink === 'home' ? 'text-secondary' : ''}`}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={`text-white text-2xl hover:text-secondary transition-colors ${isActiveLink === 'about' ? 'text-secondary' : ''}`}
              onClick={() => handleLinkClick('about')}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              className={`text-white text-2xl hover:text-secondary transition-colors ${isActiveLink === 'experience' ? 'text-secondary' : ''}`}
              onClick={() => handleLinkClick('experience')}
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={`text-white text-2xl hover:text-secondary transition-colors ${isActiveLink === 'projects' ? 'text-secondary' : ''}`}
              onClick={() => handleLinkClick('projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`text-white text-2xl hover:text-secondary transition-colors ${isActiveLink === 'contact' ? 'text-secondary' : ''}`}
              onClick={() => handleLinkClick('contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}