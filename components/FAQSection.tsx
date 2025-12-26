
import React, { useState } from 'react';

const faqs = [
  {
    question: "How long does a typical GST registration take?",
    answer: "Our streamlined protocol ensures most registrations are completed within 7-10 business days, assuming all documentation provided meets regulatory standards. We handle all follow-ups with the department directly.",
    category: "TAXATION"
  },
  {
    question: "Is my business data shared with any third parties?",
    answer: "Absolutely not. We maintain a zero-leakage policy. All financial data is stored on air-gapped systems or encrypted cloud servers, accessible only to the senior partners assigned to your file.",
    category: "SECURITY"
  },
  {
    question: "Can you help with notices from the Income Tax department?",
    answer: "Yes. Our 'Litigation Protocol' is designed specifically for scrutiny cases. We represent your interests, prepare the legal response, and manage all communications with the assessing officer.",
    category: "LITIGATION"
  },
  {
    question: "What is the fee structure for monthly compliance?",
    answer: "We offer both fixed-retainer and per-filing models. Most high-growth enterprises prefer our 'All-Inclusive' retainer which covers GST, TDS, and ROC filings for a single, predictable monthly fee.",
    category: "CONSULTANCY"
  }
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

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

  return (
    <div className="relative py-32 bg-[#050810] overflow-hidden">
      {/* Blueprint Grid & Tactical Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#4f46e5 0.5px, transparent 0.5px), linear-gradient(90deg, #4f46e5 0.5px, transparent 0.5px)', backgroundSize: '60px 60px' }}>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[160px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em]">Knowledge Base Alpha</span>
          </div>
          
          <h3 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-[1.1] tracking-tight">
            Advisory <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-500 italic">Intelligence Hub.</span>
          </h3>
          
          <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto opacity-70">
            Surgical answers to critical regulatory inquiries. Transmitting essential compliance data for high-stakes decision making.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden rounded-[2rem] border transition-all duration-500 ${
                activeIndex === idx 
                ? 'bg-slate-800/60 border-indigo-500/40 shadow-[0_30px_60px_-15px_rgba(79,70,229,0.2)]' 
                : 'bg-slate-800/30 border-white/5 hover:border-indigo-500/20'
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full text-left px-8 md:px-12 py-8 flex items-center justify-between group"
              >
                <div className="flex flex-col space-y-2">
                  <span className={`text-[9px] font-black tracking-[0.25em] transition-colors duration-500 ${activeIndex === idx ? 'text-indigo-400' : 'text-slate-500'}`}>
                    SIGNAL NODE: {faq.category}
                  </span>
                  <span className={`text-lg md:text-xl font-bold transition-all duration-500 ${activeIndex === idx ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                    {faq.question}
                  </span>
                </div>
                
                <div className={`shrink-0 ml-6 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  activeIndex === idx 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/40' 
                  : 'bg-white/5 text-slate-500 group-hover:bg-white/10 group-hover:text-white'
                }`}>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-500 ${activeIndex === idx ? 'rotate-45' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 md:px-12 pb-10">
                  <div className="pt-8 border-t border-white/5">
                    <div className="flex items-center space-x-3 mb-6">
                       <span className="px-2 py-0.5 bg-emerald-500/10 rounded border border-emerald-500/20 text-[8px] font-black text-emerald-400 uppercase tracking-widest">Status: Verified</span>
                       <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                       <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Executive Summary</span>
                    </div>
                    <p className="text-slate-400 text-base leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                    
                    <div className="mt-8 flex items-center space-x-4 opacity-40">
                       <div className="h-px flex-grow bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
                       <span className="text-[8px] font-black text-slate-500 tracking-[0.4em]">END TRANSMISSION</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tactical Support Footer */}
        <div className="mt-20 p-10 bg-indigo-600/5 border border-indigo-500/10 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm">
           <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-indigo-600/20 rounded-2xl flex items-center justify-center text-indigo-400 border border-indigo-500/30">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="text-center md:text-left">
                <h5 className="text-white font-black uppercase tracking-widest text-xs mb-1">Unresolved Query?</h5>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">Our advisors are monitoring the hub.</p>
              </div>
           </div>
           <button 
             onClick={scrollToContact}
             className="px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-black rounded-xl uppercase tracking-[0.3em] transition-all shadow-xl shadow-indigo-600/20 active:scale-95"
           >
             Direct Advisor Sync
           </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
