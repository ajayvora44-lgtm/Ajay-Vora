
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
            <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] bg-slate-900 w-full h-[400px] md:h-[550px] border-[10px] border-white">
              
              {/* Fallback Layer: Visible while loading */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-indigo-950">
                <div className="text-center px-4">
                   <p className="text-indigo-300/40 font-serif text-3xl tracking-[0.3em] uppercase mb-2">Marudeva</p>
                   <p className="text-white/20 text-xs font-bold tracking-[0.5em] uppercase">Executive Leadership</p>
                </div>
              </div>

              {/* Main Professional Team Image */}
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop" 
                alt="Ankit Gudhka and the Marudeva Team" 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2000ms] z-10"
                loading="eager"
              />
              
              {/* Premium Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent z-20 pointer-events-none"></div>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 z-20 rounded-3xl"></div>
            </div>

            {/* Experience Badge with Enhanced 3D Effect */}
            <div className="absolute -bottom-10 -right-4 md:-right-12 w-48 h-48 md:w-56 md:h-56 bg-indigo-600 rounded-3xl flex flex-col items-center justify-center text-white p-8 shadow-[0_20px_50px_rgba(79,70,229,0.5)] z-30 border-4 border-white">
              <div className="text-center relative">
                <div className="relative inline-block mb-2">
                  <span className="text-6xl md:text-7xl font-bold block leading-none tracking-tighter">7</span>
                  <span className="absolute -top-1 -right-6 text-2xl md:text-3xl font-bold">+</span>
                </div>
                <div className="w-12 h-1 bg-white/30 mb-4 mx-auto rounded-full"></div>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] leading-tight">
                  Years of <br/> Founding <br/> Vision
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side: Content */}
        <div className="lg:w-1/2 mt-20 lg:mt-0">
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-[2px] w-12 bg-indigo-600"></div>
            <span className="text-indigo-600 font-extrabold uppercase tracking-widest text-[10px] md:text-xs">Rooted in Jamnagar since 2017</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-[1.15]">
            Visionary Leadership in <br />
            <span className="text-indigo-600 italic">Tax & Legal Advisory</span>
          </h2>
          
          <p className="text-slate-600 text-lg mb-6 leading-relaxed">
            Founded by <strong>Ankit Gudhka</strong>, Marudeva Consultancy was built on the principle that transparency and precision are the cornerstones of business growth. We don't just file taxes; we architect financial safety nets.
          </p>
          
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Our firm bridges the gap between complex Indian statutes and your business's operational reality. From GST strategy to intricate Income Tax planning, we are your partners in progress.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mb-10">
            {[
              "Founder-Led Strategy",
              "Personalized Tax Mapping",
              "Direct Regulatory Access",
              "Risk Management",
              "End-to-End Compliance",
              "Wealth Preservation"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-4 group/item">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center shadow-md shadow-indigo-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-bold text-slate-800 text-sm">{feature}</span>
              </div>
            ))}
          </div>

          <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-[0.03] transform group-hover:scale-110 transition-transform">
               <svg className="w-24 h-24 text-indigo-900" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 13H21.017V6C21.017 4.89543 20.1216 4 19.017 4H16.017C14.9124 4 14.017 4.89543 14.017 6V13ZM2.983 21L2.983 18C2.983 16.8954 3.87843 16 4.983 16H7.983C9.08757 16 9.983 16.8954 9.983 18V21C9.983 22.1046 9.08757 23 7.983 23H4.983C3.87843 23 2.983 22.1046 2.983 21ZM2.983 13H9.983V6C9.983 4.89543 9.08757 4 7.983 4H4.983C3.87843 4 2.983 4.89543 2.983 6V13Z" /></svg>
            </div>
            <p className="italic text-slate-700 relative z-10 leading-relaxed font-medium">
              "My vision for Marudeva has always been simple: to empower entrepreneurs by removing the burden of compliance. We handle the complexity, so you can handle the growth."
            </p>
            
            <div className="mt-8 flex items-center justify-between border-t border-slate-50 pt-6">
              <div className="flex items-center space-x-5">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl border-2 border-white bg-indigo-600 flex items-center justify-center text-base font-black text-white shadow-xl z-20">AG</div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full"></div>
                </div>
                <div className="h-10 w-[1px] bg-slate-200"></div>
                <div>
                  <span className="block text-base font-black text-slate-900 leading-none mb-1">Ankit Gudhka</span>
                  <span className="block text-[11px] font-bold text-indigo-600 uppercase tracking-[0.2em]">Founder, Marudeva Consultancy</span>
                </div>
              </div>
              
              <div className="hidden sm:flex items-center space-x-1 opacity-10">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.312-2.84.873-4.083m0 0A13.91 13.91 0 0112 2c2.107 0 4.077.466 5.847 1.297" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
