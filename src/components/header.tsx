import { useState } from 'react';

export default function Header() {
  const [isActiveLink, setIsActiveLink] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (link: string) => {
    setIsActiveLink(link);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full max-w-full text-black flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-35 py-4 md:py-6 bg-primary rounded-none md:rounded-xl shadow-lg border-b-primary z-50 overflow-hidden">
        <div className="flex items-center gap-x-1 shrink-0">
          <h1 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-semibold text-white whitespace-nowrap">zchuwie <span className='font-semibold text-secondary'>/</span></h1>
        </div>
        
        {/* Hamburger menu button - visible on mobile */}
        <button 
          className="md:hidden text-white z-50 shrink-0 w-10 h-10 flex items-center justify-center relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
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
      </header>

      {/* Overlay backdrop */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Sidebar Mobile Navigation */}
      <nav className={`md:hidden fixed top-0 right-0 h-full w-64 bg-primary shadow-2xl z-50 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-end p-6">
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-secondary transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <ul className="flex flex-col space-y-2 px-6 mt-4">
            <li>
              <a 
                href="#home" 
                className={`block py-3 px-4 text-white text-lg hover:bg-secondary/10 hover:text-secondary rounded-lg transition-all ${isActiveLink === 'home' ? 'bg-secondary/20 text-secondary border-l-4 border-secondary' : ''}`}
                onClick={() => handleLinkClick('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`block py-3 px-4 text-white text-lg hover:bg-secondary/10 hover:text-secondary rounded-lg transition-all ${isActiveLink === 'about' ? 'bg-secondary/20 text-secondary border-l-4 border-secondary' : ''}`}
                onClick={() => handleLinkClick('about')}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className={`block py-3 px-4 text-white text-lg hover:bg-secondary/10 hover:text-secondary rounded-lg transition-all ${isActiveLink === 'experience' ? 'bg-secondary/20 text-secondary border-l-4 border-secondary' : ''}`}
                onClick={() => handleLinkClick('experience')}
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={`block py-3 px-4 text-white text-lg hover:bg-secondary/10 hover:text-secondary rounded-lg transition-all ${isActiveLink === 'projects' ? 'bg-secondary/20 text-secondary border-l-4 border-secondary' : ''}`}
                onClick={() => handleLinkClick('projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`block py-3 px-4 text-white text-lg hover:bg-secondary/10 hover:text-secondary rounded-lg transition-all ${isActiveLink === 'contact' ? 'bg-secondary/20 text-secondary border-l-4 border-secondary' : ''}`}
                onClick={() => handleLinkClick('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}