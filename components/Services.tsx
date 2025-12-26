
import React from 'react';

const services = [
  {
    domain: 'Taxation',
    title: 'GST Compliance',
    description: 'We handle all your GST needs, from your first registration to filing monthly and quarterly returns (GSTR-1, 3B). We also help you claim back taxes you paid on business expenses (ITC) and respond to any government letters or notices on your behalf.',
    status: 'High Demand',
    badge: 'Validated',
    icon: (
      <svg className="w-8 h-8 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    domain: 'Advisory',
    title: 'Income Tax & TDS',
    description: 'We help individuals and business owners file their yearly Income Tax Returns (ITR). This includes calculating your advance tax, managing TDS (salary tax) for your employees, and finding legal ways to save on your tax bills through smart planning.',
    status: 'Expert Led',
    badge: 'Priority',
    icon: (
      <svg className="w-8 h-8 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    domain: 'Formation',
    title: 'Business Setup',
    description: 'Want to start a new business? We help you choose the right legal structure, whether it is a Private Limited Company or an LLP. We handle everything from getting your Digital Signature (DSC) and Director IDs (DIN) to registering your business name and getting your PAN/TAN cards.',
    status: 'Executive',
    badge: 'Growth',
    icon: (
      <svg className="w-8 h-8 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    domain: 'Compliance',
    title: 'ROC & MCA',
    description: 'Every company needs to do annual paperwork with the Registrar of Companies (ROC). We manage your annual filings (AOC-4, MGT-7), help you change company addresses, update director details, or even increase your company’s authorized capital as your business grows.',
    status: 'Continuous',
    badge: 'Verified',
    icon: (
      <svg className="w-8 h-8 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    domain: 'Assurance',
    title: 'Audit & Controls',
    description: 'We review your business accounts to make sure everything is accurate and matches your bank statements. This "Internal Audit" helps find any missing entries or errors early, making it much easier when the official government "Statutory Audit" happens at the end of the year.',
    status: 'Precision',
    badge: 'Sovereign',
    icon: (
      <svg className="w-8 h-8 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    domain: 'Wealth',
    title: 'Strategy & Growth',
    description: 'We advise on long-term wealth planning for business owners. This includes helping you decide how to reinvest your profits, planning for your children’s inheritance, and structuring your assets so they are protected from business risks.',
    status: 'Elite',
    badge: 'Legacy',
    icon: (
      <svg className="w-8 h-8 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const Services: React.FC = () => {
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
    <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-10 md:py-20">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-50/60 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="text-center mb-24 md:mb-32">
        <h2 className="text-indigo-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Sovereign Service Ecosystem</h2>
        <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 mb-8 leading-[1.1]">Elite Financial <br/><span className="text-indigo-600 italic">Infrastructure</span></h3>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
          Simple, reliable solutions for all your tax and business registration needs. We handle the paperwork so you can focus on your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group relative bg-white border border-slate-100 p-10 md:p-14 rounded-[3.5rem] transition-all duration-700 hover:shadow-[0_60px_100px_-30px_rgba(79,70,229,0.25)] hover:-translate-y-4 hover:border-indigo-200 flex flex-col h-full overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-50 to-transparent -mr-12 -mt-12 rounded-full transition-transform duration-700 group-hover:scale-[3]"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 bg-slate-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110 shadow-sm border border-slate-100">
                  {service.icon}
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[8px] font-black text-indigo-600 uppercase tracking-widest mb-1">{service.badge}</span>
                  <span className="bg-indigo-50 text-indigo-700 text-[9px] font-black px-3 py-1 rounded-full border border-indigo-100 uppercase tracking-widest">{service.status}</span>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">{service.domain}</p>
                <h4 className="text-3xl font-serif font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">{service.title}</h4>
              </div>

              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-12 flex-grow font-medium opacity-80 group-hover:opacity-100">
                {service.description}
              </p>

              <div className="pt-8 border-t border-slate-50">
                <a href="#contact" onClick={scrollToContact} className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] hover:text-indigo-600 transition-all flex items-center group/btn">
                  <span>Inquire Now</span>
                  <div className="ml-4 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover/btn:bg-indigo-600 group-hover/btn:text-white transition-all transform group-hover/btn:translate-x-2 shadow-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
