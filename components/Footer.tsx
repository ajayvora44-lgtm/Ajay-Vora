
import React from 'react';

const OFFICE_ADDRESS = 'Nr Gurukrupa Hotel, Adarsh Society, Khodiyar Colony, Jamnagar - 361006';
const WHATSAPP_NUMBER = "+91 94090 78347";
const EMAIL_ADDRESS = "MARUDEVA.CONSULTANCY@GMAIL.COM";

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
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

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand Identity */}
          <div className="flex flex-col">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-2xl font-bold font-serif mb-6 inline-block group"
            >
              Marudeva <span className="text-indigo-500 font-sans font-light group-hover:text-indigo-400 transition-colors">Consultancy</span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-xs font-medium">
              The authoritative choice for GST, Income Tax, and Business Governance in Gujarat. Transforming regulatory complexity into institutional stability since 2017.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'WhatsApp', href: `https://wa.me/919409078347`, icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                )},
                { name: 'LinkedIn', href: '#', icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                )}
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/5 hover:bg-indigo-600 border border-white/5 rounded-xl flex items-center justify-center transition-all group/social"
                  aria-label={social.name}
                >
                  <div className="group-hover/social:scale-110 transition-transform">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Compliance Domains */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-8">Domains</h4>
            <ul className="space-y-4">
              {[
                { name: 'GST Compliance', id: 'services' },
                { name: 'Income Tax', id: 'services' },
                { name: 'Audit Support', id: 'services' },
                { name: 'ROC Compliance', id: 'services' },
                { name: 'Business Setup', id: 'services' }
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href={`#${link.id}`} 
                    onClick={(e) => scrollToSection(e, link.id)} 
                    className="text-slate-400 hover:text-white transition-all text-sm font-medium hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate Navigation */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'The Advisory', id: 'home' },
                { name: 'Sovereign Protocol', id: 'process' },
                { name: 'Leadership', id: 'about' },
                { name: 'Market Reputation', id: 'testimonials' },
                { name: 'Knowledge Base', id: 'faq' }
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href={`#${link.id}`} 
                    onClick={(e) => scrollToSection(e, link.id)} 
                    className="text-slate-400 hover:text-white transition-all text-sm font-medium hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Operational HQ */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-8">Operational HQ</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0 border border-indigo-500/20">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                </div>
                <span className="text-slate-400 text-sm font-medium leading-relaxed">
                  Nr Gurukrupa Hotel, Khodiyar Colony,<br/>Jamnagar - 361006
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-500/20">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <span className="text-slate-200 text-sm font-black tracking-wide">{WHATSAPP_NUMBER}</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0 border border-indigo-500/20">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z"/></svg>
                </div>
                <span className="text-slate-400 text-[11px] font-black tracking-widest uppercase truncate">{EMAIL_ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar: Synchronization Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6 text-center md:text-left">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">© 2025 Marudeva Consultancy. Operational Security Intact.</p>
            <span className="hidden md:block text-slate-800">|</span>
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">
              Design by <a href="https://ajsagency.co" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-400 transition-colors font-black">ajsagency.co</a>
            </p>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-slate-600 hover:text-slate-400 transition-colors text-[10px] font-black uppercase tracking-widest">Privacy Protocol</a>
            <a href="#" className="text-slate-600 hover:text-slate-400 transition-colors text-[10px] font-black uppercase tracking-widest">Service Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
