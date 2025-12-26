
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side: Professional Team Image & Badge */}
        <div className="lg:w-1/2 w-full">
          <div className="relative group">
            {/* Soft shadow glow effect */}
            <div className="absolute -inset-4 bg-indigo-500/10 rounded-[2.5rem] -z-10 group-hover:bg-indigo-500/15 transition-all duration-500 blur-2xl"></div>
            
            {/* Professional Image Container */}
            <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] bg-slate-900 w-full h-[350px] md:h-[550px] border-[6px] md:border-[10px] border-white">
              
              {/* Fallback Layer */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-indigo-950">
                <div className="text-center px-4">
                   <p className="text-indigo-300/40 font-serif text-2xl md:text-3xl tracking-[0.3em] uppercase mb-2">Marudeva</p>
                   <p className="text-white/20 text-[10px] font-bold tracking-[0.5em] uppercase">Executive Leadership</p>
                </div>
              </div>

              {/* Main Professional Team Image */}
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop" 
                alt="Ankit Gudhka and the Marudeva Team" 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2000ms] z-10"
                loading="eager"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent z-20 pointer-events-none"></div>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 z-20 rounded-3xl"></div>
            </div>

            {/* Experience Badge - Responsive Positioning */}
            <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-12 w-36 h-36 md:w-56 md:h-56 bg-indigo-600 rounded-2xl md:rounded-3xl flex flex-col items-center justify-center text-white p-4 md:p-8 shadow-[0_20px_50px_rgba(79,70,229,0.5)] z-30 border-4 border-white">
              <div className="text-center relative">
                <div className="relative inline-block mb-1 md:mb-2">
                  <span className="text-4xl md:text-7xl font-bold block leading-none tracking-tighter">7</span>
                  <span className="absolute -top-1 -right-4 md:-right-6 text-xl md:text-3xl font-bold">+</span>
                </div>
                <div className="w-8 md:w-12 h-0.5 md:h-1 bg-white/30 mb-2 md:mb-4 mx-auto rounded-full"></div>
                <p className="text-[8px] md:text-xs font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] leading-tight">
                  Years of <br className="hidden md:block" /> Founding <br className="hidden md:block" /> Vision
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side: Content */}
        <div className="lg:w-1/2 mt-12 md:mt-20 lg:mt-0">
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-[2px] w-12 bg-indigo-600"></div>
            <span className="text-indigo-600 font-extrabold uppercase tracking-widest text-[10px] md:text-xs">Established Jamnagar 2017</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 leading-[1.2] md:leading-[1.15]">
            Visionary Leadership in <br className="hidden sm:block" />
            <span className="text-indigo-600 italic">Tax & Legal Advisory</span>
          </h2>
          
          <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed">
            Founded by <strong>Ankit Gudhka</strong>, Marudeva Consultancy was built on the principle that transparency and precision are the cornerstones of business growth. We architect financial safety nets.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
            {[
              "Founder-Led Strategy",
              "Personalized Tax Mapping",
              "Risk Management",
              "End-to-End Compliance",
              "Direct Regulatory Access",
              "Wealth Preservation"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-3 group/item">
                <div className="flex-shrink-0 w-7 h-7 bg-indigo-600 text-white rounded-lg flex items-center justify-center shadow-md">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-bold text-slate-800 text-sm">{feature}</span>
              </div>
            ))}
          </div>

          <div className="p-6 md:p-8 bg-white rounded-2xl border border-slate-100 shadow-xl relative overflow-hidden group">
            <p className="italic text-slate-700 relative z-10 leading-relaxed font-medium text-sm md:text-base">
              "My vision for Marudeva has always been simple: to empower entrepreneurs by removing the burden of compliance. We handle the complexity, so you can handle the growth."
            </p>
            
            <div className="mt-6 md:mt-8 flex items-center justify-between border-t border-slate-50 pt-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-sm font-black text-white shadow-xl">AG</div>
                <div>
                  <span className="block text-sm md:text-base font-black text-slate-900 leading-none mb-1">Ankit Gudhka</span>
                  <span className="block text-[10px] font-bold text-indigo-600 uppercase tracking-widest">Founder, Marudeva</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
