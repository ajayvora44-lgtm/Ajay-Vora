
import React from 'react';

const usps = [
  {
    title: 'AI-Enhanced Intelligence',
    description: 'We integrate Google Gemini technology into our internal auditing protocols, ensuring every filing is cross-referenced against the latest regulatory updates in real-time.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z" />
      </svg>
    ),
    accent: 'indigo'
  },
  {
    title: 'Zero-Penalty Guarantee',
    description: 'Our rigorous three-tier review system ensures 100% accuracy. We take full accountability for our compliance advice, providing you absolute peace of mind.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    accent: 'emerald'
  },
  {
    title: 'Institutional Grade Security',
    description: 'Your financial data is protected by industry-leading encryption and strict confidentiality protocols. We treat your sensitive information with the highest level of care.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    accent: 'blue'
  },
  {
    title: 'Jamnagar Hub Advantage',
    description: 'Deeply rooted in the local Gujarat business ecosystem. We offer direct connectivity to regulatory offices and an intimate understanding of the regional industrial landscape.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    accent: 'indigo'
  }
];

const USPSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-600/10 to-transparent pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-indigo-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Competitive Superiority</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-white leading-tight">
              The Marudeva <span className="text-indigo-300">Standard</span>
            </h3>
          </div>
          <div className="lg:w-1/3">
            <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-indigo-600/30 pl-6">
              In an era of generic services, we provide institutional-grade precision tailored for the agile Indian enterprise. Our unique integration of technology and local expertise creates an untouchable compliance barrier.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, idx) => (
            <div 
              key={idx} 
              className="group relative p-8 rounded-[2rem] bg-white/5 border border-white/10 transition-all duration-500 hover:bg-white/[0.08] hover:border-indigo-500/50 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 ${
                usp.accent === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' : 
                usp.accent === 'blue' ? 'bg-blue-500/10 text-blue-400' : 
                'bg-indigo-500/10 text-indigo-400'
              } ring-1 ring-white/10 group-hover:ring-indigo-500/30`}>
                {usp.icon}
              </div>
              
              <h4 className="text-white text-xl font-serif font-bold mb-4 group-hover:text-indigo-300 transition-colors">
                {usp.title}
              </h4>
              
              <p className="text-slate-400 text-xs leading-relaxed font-medium">
                {usp.description}
              </p>
              
              {/* Decorative Number */}
              <span className="absolute top-8 right-8 text-white/5 font-black text-4xl select-none group-hover:text-indigo-500/10 transition-colors">
                0{idx + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Global Stats bar */}
        <div className="mt-20 py-8 px-10 rounded-3xl bg-indigo-600 flex flex-wrap items-center justify-between gap-8 shadow-2xl shadow-indigo-600/20">
            <div className="flex items-center space-x-4">
                <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">Compliance Assurance</span>
                <div className="h-1 w-20 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-full animate-pulse"></div>
                </div>
            </div>
            <div className="flex items-center space-x-8">
                <div className="flex flex-col">
                    <span className="text-white font-black text-xl">100%</span>
                    <span className="text-indigo-200 text-[9px] font-bold uppercase tracking-widest">Audit Accuracy</span>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="flex flex-col">
                    <span className="text-white font-black text-xl">Real-time</span>
                    <span className="text-indigo-200 text-[9px] font-bold uppercase tracking-widest">MCA Tracking</span>
                </div>
            </div>
            <a href="#contact" className="px-6 py-3 bg-white text-indigo-600 text-[10px] font-black rounded-xl uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95">
                Analyze My Business
            </a>
        </div>
      </div>
    </section>
  );
};

export default USPSection;
