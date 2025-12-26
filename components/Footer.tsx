
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
    <footer className="bg-slate-950 text-white pt-28 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Brand Mark Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif font-black text-white/[0.01] pointer-events-none select-none z-0">
        MARUDEVA
      </div>
      
      {/* Animated Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid - Weighted for Balance */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12 mb-24">
          
          {/* Column 1: Brand Authority (4/12) */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col items-start">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-2xl md:text-3xl font-bold font-serif mb-8 inline-block group"
            >
              Marudeva <span className="text-indigo-500 font-sans font-light group-hover:text-indigo-400 transition-colors">Consultancy</span>
            </a>
            <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-sm font-medium opacity-80">
              Transforming regulatory friction into operational velocity. We architect sovereign financial safety nets for India's premier enterprises and high-growth startups.
            </p>
            <div className="flex space-x-5">
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
                  className="w-12 h-12 bg-white/5 hover:bg-indigo-600 border border-white/5 rounded-2xl flex items-center justify-center transition-all group/social hover:-translate-y-1 shadow-2xl"
                  aria-label={social.name}
                >
                  <div className="group-hover/social:scale-110 transition-transform">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation (2/12) */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-10">Navigation</h4>
            <ul className="space-y-5">
              {[
                { name: 'Advisory Home', id: 'home' },
                { name: 'Core Domains', id: 'services' },
                { name: 'The Protocol', id: 'process' },
                { name: 'Executive Bio', id: 'about' },
                { name: 'Intake Node', id: 'contact' }
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href={`#${link.id}`} 
                    onClick={(e) => scrollToSection(e, link.id)} 
                    className="text-slate-400 hover:text-white transition-all text-[13px] font-bold hover:translate-x-1.5 inline-block opacity-70 hover:opacity-100"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Expertise (2/12) */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-10">Expertise</h4>
            <ul className="space-y-5">
              {[
                { name: 'GST Audit', id: 'services' },
                { name: 'Fiscal Planning', id: 'services' },
                { name: 'ROC Governance', id: 'services' },
                { name: 'Corporate Setup', id: 'services' },
                { name: 'MSME Hub', id: 'services' }
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href={`#${link.id}`} 
                    onClick={(e) => scrollToSection(e, link.id)} 
                    className="text-slate-400 hover:text-white transition-all text-[13px] font-bold hover:translate-x-1.5 inline-block opacity-70 hover:opacity-100"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Operational HQ (4/12) - Bold and Weighted */}
          <div className="md:col-span-12 lg:col-span-4 lg:pl-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-10">Operational HQ</h4>
            <div className="bg-white/5 border border-white/5 rounded-[2.5rem] p-8 space-y-8 shadow-inner relative overflow-hidden group/hq">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl -mr-16 -mt-16 group-hover/hq:bg-indigo-500/10 transition-all"></div>
              
              <div className="flex items-start space-x-5">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0 border border-indigo-500/20 shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                </div>
                <div className="space-y-1">
                  <span className="block text-slate-200 text-sm font-black tracking-tight leading-tight">Jamnagar Global Node</span>
                  <p className="text-slate-500 text-[12px] leading-relaxed font-medium">
                    Nr Gurukrupa Hotel, Khodiyar Colony,<br/>Jamnagar - 361006
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-500/20 shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div className="space-y-0.5">
                   <span className="block text-[9px] font-black text-slate-600 uppercase tracking-widest">Secure Callback</span>
                   <span className="block text-white text-lg font-black tracking-tighter">{WHATSAPP_NUMBER}</span>
                </div>
              </div>

              <div className="pt-2">
                <a 
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="block w-full py-4 bg-slate-900 border border-white/5 rounded-2xl text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white hover:border-indigo-500/30 transition-all shadow-inner"
                >
                  {EMAIL_ADDRESS}
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar: Multi-Region Synchronization Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
              <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.2em]">Compliance Shield: Active</p>
            </div>
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.1em]">© 2025 Marudeva Consultancy. Operational Security Protocol Intact.</p>
          </div>
          
          <div className="flex items-center gap-10">
            <div className="flex space-x-6">
              <a href="#" className="text-slate-700 hover:text-slate-400 transition-colors text-[9px] font-black uppercase tracking-widest">SLA Terms</a>
              <a href="#" className="text-slate-700 hover:text-slate-400 transition-colors text-[9px] font-black uppercase tracking-widest">Data Privacy</a>
            </div>
            <div className="h-4 w-px bg-white/10 hidden sm:block"></div>
            <p className="text-slate-500 text-[11px] font-bold">
              Design by <a href="https://ajsagency.co" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-400 transition-all font-black decoration-2 underline-offset-4 hover:underline">ajsagency.co</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
