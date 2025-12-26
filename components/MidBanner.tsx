
import React from 'react';

const MidBanner: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const metrics = [
    { label: "Compliance Score", value: "100%", status: "Nominal", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    )},
    { label: "Expert Advisors", value: "12+", status: "Active", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    )},
    { label: "Response Time", value: "< 2hrs", status: "Priority", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )},
    { label: "Success Rate", value: "99.9%", status: "Optimal", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    )}
  ];

  return (
    <div className="relative py-32 overflow-hidden bg-[#050810]">
      {/* Blueprint Grid & Tactical Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#4f46e5 0.5px, transparent 0.5px), linear-gradient(90deg, #4f46e5 0.5px, transparent 0.5px)', backgroundSize: '60px 60px' }}>
        </div>
        <div className="absolute top-0 right-0 w-[50%] h-full bg-indigo-600/5 blur-[120px] -translate-y-1/2 translate-x-1/2 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[50%] h-full bg-blue-600/5 blur-[120px] translate-y-1/2 -translate-x-1/2 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-8">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em]">Strategy Initiation Protocol</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-[1.1] tracking-tight">
              Ready to Secure Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-500 italic">Financial Future?</span>
            </h2>
            
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium opacity-80 border-l-0 lg:border-l-2 border-indigo-500/30 lg:pl-8">
              Don't let complex tax laws hinder your business trajectory. Join the elite enterprises who trust Marudeva for surgical precision in compliance.
            </p>
          </div>
          
          <div className="shrink-0 w-full lg:w-auto">
            <div className="bg-slate-800/40 backdrop-blur-2xl border border-white/5 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
              {/* Internal Glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
              
              <div className="relative z-10 space-y-5">
                <button 
                  onClick={scrollToContact}
                  className="w-full px-12 py-5 bg-white text-slate-900 font-black rounded-2xl hover:bg-indigo-50 transition-all shadow-[0_20px_50px_-10px_rgba(255,255,255,0.2)] active:scale-95 text-xs uppercase tracking-[0.3em] flex items-center justify-center space-x-3"
                >
                  <span>Request Full Audit</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </button>
                
                <a 
                  href="tel:+919409078347"
                  className="w-full px-12 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl transition-all shadow-[0_20px_50px_-10px_rgba(79,70,229,0.4)] active:scale-95 text-xs uppercase tracking-[0.3em] flex items-center justify-center space-x-3 group/btn"
                >
                  <svg className="w-5 h-5 text-indigo-200 group-hover/btn:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span>Priority Line: 94090 78347</span>
                </a>

                <p className="text-[9px] text-center text-slate-500 font-black uppercase tracking-[0.2em] pt-4">Direct Executive Access • Securing Global Assets</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Metric Diagnostics Bar */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 border-t border-white/5">
          {metrics.map((stat, i) => (
            <div key={i} className="group flex items-center space-x-6 bg-white/5 border border-white/5 p-6 rounded-3xl transition-all duration-500 hover:bg-white/10 hover:border-indigo-500/30">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                {stat.icon}
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-0.5">
                  <span className="text-2xl font-black text-white tracking-tighter leading-none">{stat.value}</span>
                  <div className="px-1.5 py-0.5 bg-indigo-500/20 rounded-md">
                    <span className="text-[8px] font-black text-indigo-300 uppercase tracking-widest">{stat.status}</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
