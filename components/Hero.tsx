
import React from 'react';

const Hero: React.FC = () => {
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
    <div className="relative min-h-screen flex items-center overflow-hidden bg-[#050810] py-20 lg:py-0">
      {/* Premium Background Architecture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-[0.15] scale-105"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050810] via-[#050810]/90 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050810] to-transparent"></div>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20 lg:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-8 lg:mb-10 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-[9px] md:text-[10px] font-black text-indigo-300 uppercase tracking-[0.4em]">Sovereign Advisory Hub • Jamnagar</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-white mb-8 lg:mb-10 leading-[0.95] md:leading-[0.9] tracking-tighter">
              Absolute <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-600 italic">Financial Safety.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-400 mb-10 lg:mb-14 max-w-2xl leading-relaxed font-medium opacity-90 border-l-4 border-indigo-600 pl-6 md:pl-8">
              The authoritative choice for GST, Income Tax, and Business Governance. We transform regulatory complexity into institutional stability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 items-center">
              <button 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="w-full sm:w-auto px-10 md:px-12 py-5 bg-white text-[#050810] font-black rounded-2xl text-center transition-all shadow-xl hover:shadow-2xl active:scale-95 flex items-center justify-center space-x-4 group"
              >
                <span className="uppercase tracking-[0.2em] text-[10px] md:text-[11px]">Initiate Protocol</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
              <a href="tel:+919409078347" className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-black rounded-2xl text-center transition-all border border-white/10 backdrop-blur-md flex items-center justify-center space-x-4 group">
                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="uppercase tracking-[0.2em] text-[10px] md:text-[11px]">Direct Support</span>
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-4 relative">
             <div className="absolute inset-0 bg-indigo-600/20 blur-[100px] rounded-full"></div>
             <div className="relative space-y-6">
                {[
                  { label: "Tax Compliance", value: "Verified", icon: "✓" },
                  { label: "Business Integrity", value: "High-Status", icon: "◈" },
                  { label: "Asset Protection", value: "Sovereign", icon: "⛨" }
                ].map((node, i) => (
                  <div key={i} className={`bg-white/5 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl flex items-center justify-between transform transition-all duration-700 hover:scale-110 hover:bg-white/10 cursor-default ${i === 1 ? 'translate-x-12' : ''}`} style={{ animation: `float ${3 + i}s ease-in-out infinite` }}>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-indigo-600/20 rounded-xl flex items-center justify-center text-indigo-400 font-bold border border-indigo-500/30">{node.icon}</div>
                      <div>
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">{node.label}</p>
                        <p className="text-sm font-bold text-white uppercase tracking-wider">{node.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) ${window.innerWidth > 1024 ? 'translateX(var(--tw-translate-x))' : ''}; }
          50% { transform: translateY(-20px) ${window.innerWidth > 1024 ? 'translateX(var(--tw-translate-x))' : ''}; }
        }
      `}</style>
    </div>
  );
};

export default Hero;
