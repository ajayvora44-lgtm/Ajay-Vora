
import React from 'react';

const protocols = [
  {
    number: '01',
    phase: 'Assessment',
    title: 'Diagnostic Intelligence',
    description: 'We conduct a forensic audit of your financial history to identify latent regulatory exposures and tax leakages before they trigger department flags.',
    tags: ['Forensic Audit', 'Risk Mapping'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    )
  },
  {
    number: '02',
    phase: 'Strategy',
    title: 'Fiscal Architecture',
    description: 'Bespoke structural engineering for your business. We design a compliance roadmap that optimizes GST flow and positions your wealth for maximum preservation.',
    tags: ['Wealth Design', 'Tax Shielding'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    number: '03',
    phase: 'Action',
    title: 'Surgical Implementation',
    description: 'Precision filing with zero margin for error. Our senior advisors manage every digital touchpoint—from GSTR validation to MCA returns—with multi-tier verification.',
    tags: ['Zero-Error Filing', 'Digital Vaulting'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    number: '04',
    phase: 'Vigilance',
    title: 'Eternal Compliance',
    description: 'Constant statutory monitoring. We track shifting laws in real-time, ensuring your enterprise remains in a state of perpetual audit-readiness and legal safety.',
    tags: ['24/7 Monitoring', 'Audit-Ready'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  }
];

const ProcessSection: React.FC = () => {
  return (
    <div className="relative py-32 bg-slate-900 overflow-hidden">
      {/* Premium Dark Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-28">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em]">Institutional Protocol v4.0</span>
          </div>
          <h3 className="text-4xl md:text-6xl font-serif text-white mb-8 tracking-tight leading-[1.1]">
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-200 italic">Secure</span> Your Asset
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed opacity-80">
            A surgical workflow engineered for absolute precision, zero-penalty filings, and permanent legal shielding.
          </p>
        </div>

        {/* The Connection Path - Animated on Desktop */}
        <div className="hidden lg:block absolute top-[62%] left-0 w-full h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent blur-md animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {protocols.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Vertical Connector Line for Mobile */}
              {idx < protocols.length - 1 && (
                <div className="lg:hidden absolute left-1/2 bottom-[-40px] w-px h-10 bg-indigo-500/30 -translate-x-1/2 z-0"></div>
              )}

              {/* Protocol Card */}
              <div className="h-full bg-slate-800/40 backdrop-blur-xl border border-white/5 p-10 rounded-[3rem] transition-all duration-700 hover:bg-slate-800/60 hover:border-indigo-500/40 hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(79,70,229,0.3)] group/card relative overflow-hidden">
                
                {/* Glow Background */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl group-hover/card:bg-indigo-600/20 transition-all duration-700"></div>

                {/* Status Indicator */}
                <div className="absolute top-8 right-10">
                  <div className="flex items-center space-x-2">
                    <span className="text-[8px] font-black text-indigo-400 tracking-widest uppercase opacity-0 group-hover/card:opacity-100 transition-all duration-500 translate-x-4 group-hover/card:translate-x-0">Active</span>
                    <div className="w-2 h-2 rounded-full bg-indigo-500 group-hover/card:animate-ping"></div>
                  </div>
                </div>

                {/* Header */}
                <div className="mb-10 relative">
                  <div className="w-16 h-16 bg-white/5 text-indigo-400 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover/card:bg-indigo-600 group-hover/card:text-white group-hover/card:scale-110 group-hover/card:rotate-6 transition-all duration-500 shadow-xl">
                    {step.icon}
                  </div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-indigo-500 font-black text-[10px] tracking-[0.3em] uppercase">{step.phase}</span>
                    <div className="h-[2px] w-6 bg-indigo-500/30 group-hover/card:w-12 transition-all duration-700"></div>
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-white leading-tight">
                    {step.title}
                  </h4>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed font-medium mb-12 opacity-70 group-hover/card:opacity-100 transition-opacity">
                  {step.description}
                </p>

                {/* Technical Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {step.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[9px] font-bold text-slate-500 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 uppercase tracking-wider group-hover/card:border-indigo-500/20 group-hover/card:text-indigo-300 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Background Large Number */}
                <div className="absolute bottom-6 left-10 pointer-events-none">
                  <span className="text-8xl font-black text-white/[0.03] group-hover/card:text-indigo-500/10 transition-colors duration-700 select-none">
                    {step.number}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Execution Summary */}
        <div className="mt-32 pt-16 border-t border-white/5">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-12">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 shadow-2xl">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <span className="block text-white text-3xl font-black leading-none mb-1 tracking-tighter">99.9%</span>
                <span className="block text-[10px] font-black text-slate-500 uppercase tracking-widest">Accuracy Threshold</span>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 shadow-2xl">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.312-2.84.873-4.083m0 0A13.91 13.91 0 0112 2c2.107 0 4.077.466 5.847 1.297" /></svg>
              </div>
              <div>
                <span className="block text-white text-3xl font-black leading-none mb-1 tracking-tighter">AES-256</span>
                <span className="block text-[10px] font-black text-slate-500 uppercase tracking-widest">Data Encryption</span>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400 shadow-2xl">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <span className="block text-white text-3xl font-black leading-none mb-1 tracking-tighter">Real-Time</span>
                <span className="block text-[10px] font-black text-slate-500 uppercase tracking-widest">MCA Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
