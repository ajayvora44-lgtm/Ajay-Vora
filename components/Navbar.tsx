
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollY / height) * 100;
      
      setScrollProgress(scrolled);
      setIsScrolled(scrollY > 50);

      const sections = ['home', 'services', 'process', 'about', 'testimonials', 'contact'];
      const threshold = 160;
      
      let current = 'home';
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollY >= offsetTop - threshold) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: id === 'home' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Protocol', id: 'process' },
    { name: 'About', id: 'about' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-[60] transition-all duration-500 ${
        isScrolled 
        ? 'bg-white/80 backdrop-blur-xl shadow-2xl shadow-indigo-900/5 py-3 border-b border-indigo-50/50' 
        : 'bg-transparent py-6'
      }`}>
        <div className="absolute top-0 left-0 h-[3px] bg-indigo-600 transition-all duration-150 z-[70]" style={{ width: `${scrollProgress}%` }}></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className={`text-xl md:text-2xl font-bold font-serif transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            >
              Marudeva <span className="text-indigo-500 font-sans font-light">Consultancy</span>
            </a>
          </div>
          
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all duration-300 rounded-full ${
                  activeSection === link.id
                  ? (isScrolled ? 'text-indigo-600 bg-indigo-50' : 'text-white bg-white/20')
                  : (isScrolled ? 'text-slate-500 hover:text-indigo-600' : 'text-white/70 hover:text-white')
                }`}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={(e) => scrollToSection(e, 'contact')}
              className={`ml-6 px-7 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
                isScrolled 
                ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg' 
                : 'bg-white text-indigo-900 hover:bg-indigo-50'
              }`}
            >
              Start Advisory
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-3 rounded-xl transition-colors ${isScrolled ? 'text-indigo-900 bg-slate-100' : 'text-white bg-white/10'}`}
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out p-10 flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="mb-12">
            <p className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-2">Navigation</p>
            <div className="h-1 w-12 bg-indigo-600 rounded-full"></div>
          </div>
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`text-2xl font-serif font-bold transition-colors ${activeSection === link.id ? 'text-indigo-600' : 'text-slate-400'}`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="mt-auto">
             <button 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="w-full py-5 bg-indigo-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-xl active:scale-95 transition-all"
             >
               Consult an Advisor
             </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
