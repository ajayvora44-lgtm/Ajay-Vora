
import React, { useState } from 'react';

const OFFICE_NAME = "Marudeva Consultancy Jamnagar";
const OFFICE_ADDRESS = '"Marudeva Consultancy" Nr Gurukrupa Hotel, Adarsh Society, Khodiyar Colony, Jamnagar - 361006';
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`;
const WHATSAPP_NUMBER = "919409078347";
const EMAIL_ADDRESS = "MARUDEVA.CONSULTANCY@GMAIL.COM";

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'GST Compliance',
    message: ''
  });

  const validateEmail = (email: string) => {
    return String(email).toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');

    const structuredMessage = `*MARUDEVA CONSULTANCY - INTAKE PROTOCOL*%0A` +
      `--------------------------------%0A` +
      `*ID:* ${Math.random().toString(36).substr(2, 9).toUpperCase()}%0A` +
      `*Partner:* Ankit Gudhka%0A` +
      `--------------------------------%0A` +
      `*Client:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Service:* ${formData.service}%0A%0A` +
      `*Brief:*%0A${formData.message}%0A` +
      `--------------------------------%0A` +
      `_Transmitted via Executive Portal_`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${structuredMessage}`;

    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: 'GST Compliance', message: '' });
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-[2rem] md:rounded-[3.5rem] shadow-[0_60px_100px_-20px_rgba(0,0,0,0.1)] p-8 md:p-16 text-center border border-emerald-100 max-w-2xl mx-auto animate-message">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner">
            <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Bridge Connected</h3>
          <p className="text-slate-600 mb-12 leading-relaxed text-lg md:text-xl font-medium">
            Your brief is now in the **WhatsApp Priority Hub**. Finalize the sync by clicking 'Send' in the secure window.
          </p>
          <button onClick={() => setIsSubmitted(false)} className="w-full sm:w-auto px-10 md:px-14 py-5 bg-indigo-600 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl hover:bg-indigo-700 transition-all shadow-2xl active:scale-95">
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-indigo-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Executive Intake Protocols</h2>
        <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif text-slate-900 mb-6 leading-[1.1] md:leading-[1.05]">Secure <span className="text-indigo-600 italic">Advisory</span> <br className="hidden md:block" />Connection Node</h3>
        <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-xl leading-relaxed font-medium">
          Transmit a formal operational brief for surgical compliance review by our senior advisory board.
        </p>
      </div>

      <div className="flex flex-col xl:flex-row gap-8 lg:gap-10 items-stretch">
        {/* Left Column: Executive HQ - Mobile Responsive Optimization */}
        <div className="xl:w-[38%] flex flex-col w-full">
          <div className="bg-[#050810] rounded-[2.5rem] md:rounded-[3rem] p-1 h-full shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] relative overflow-hidden group border border-slate-800 flex flex-col">
            {/* Background Atmosphere Lights */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-indigo-600/15 rounded-full blur-[130px] -mr-48 -mt-48 pointer-events-none"></div>
            
            <div className="relative z-10 flex-grow p-6 md:p-10 lg:p-12 flex flex-col border border-white/5 rounded-[2.3rem] md:rounded-[2.85rem] bg-gradient-to-br from-slate-900/40 via-slate-900/10 to-transparent backdrop-blur-3xl">
              
              {/* HQ Header */}
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h4 className="text-white text-xl md:text-3xl font-serif font-bold tracking-tight mb-2">Executive HQ</h4>
                  <div className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(99,102,241,1)]"></span>
                    <p className="text-indigo-400 text-[8px] font-black uppercase tracking-[0.2em] md:tracking-[0.35em]">Operational Node: Active</p>
                  </div>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-600 text-white rounded-[1rem] flex items-center justify-center border border-white/10 shadow-xl shadow-indigo-600/20 group-hover:rotate-6 transition-all duration-500 shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
              </div>

              {/* Sequential Information Core */}
              <div className="space-y-6 md:space-y-8 mb-10 md:mb-12">
                <div className="relative">
                  <p className="text-slate-500 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-3 flex items-center">
                    <svg className="w-3.5 h-3.5 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                    Primary Domicile
                  </p>
                  <div className="space-y-1.5">
                    <h5 className="text-white text-lg md:text-xl font-bold tracking-tight">Marudeva Consultancy</h5>
                    <div className="text-slate-400 text-sm md:text-base leading-relaxed font-medium opacity-85">
                      Nr Gurukrupa Hotel, Adarsh Society,<br/>
                      Khodiyar Colony, Jamnagar - 361006
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:gap-8 pt-6 md:pt-8 border-t border-white/5">
                  <a href="tel:+919409078347" className="group/voice">
                    <p className="text-slate-500 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-3 flex items-center">
                      <svg className="w-3.5 h-3.5 mr-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      Direct Voice
                    </p>
                    <p className="text-white font-black text-xl md:text-2xl tracking-tight group-hover/voice:text-indigo-400 transition-colors">+91 94090 78347</p>
                  </a>

                  <div className="group/email relative">
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-slate-500 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] flex items-center">
                        <svg className="w-3.5 h-3.5 mr-3 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" /></svg>
                        Secure Node
                      </p>
                      <button onClick={copyEmail} className={`px-2 md:px-3 py-1 rounded-lg text-[7px] md:text-[8px] font-black uppercase tracking-widest transition-all ${copied ? 'bg-emerald-500 text-white' : 'bg-white/10 text-slate-400 hover:text-white'}`}>
                        {copied ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                    <div className="bg-slate-950/80 p-4 md:p-5 rounded-2xl border border-white/10 shadow-inner overflow-hidden">
                      <p className="text-indigo-100 font-mono font-bold text-[10px] md:text-[14px] break-all uppercase leading-tight tracking-[0.05em]">
                        {EMAIL_ADDRESS}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engagement Flow */}
              <div className="pt-8 border-t border-white/5 space-y-6 flex-grow">
                <p className="text-indigo-500 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em]">How We Work With You</p>
                <div className="space-y-4 md:space-y-5">
                  {[
                    { t: "1. Intake Signal", d: "Your brief is received for immediate strategic mapping." },
                    { t: "2. Strategic Alignment", d: "A senior expert reviews requirements for the optimal solution." },
                    { t: "3. Executive Response", d: "Expect a clear roadmap within 24–48 working hours." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex space-x-3 md:space-x-4 group/step">
                      <div className="shrink-0 w-1 bg-white/10 group-hover/step:bg-indigo-600 transition-colors rounded-full"></div>
                      <div className="flex flex-col">
                        <span className="text-slate-200 text-xs md:text-[13px] font-bold tracking-tight mb-0.5">{item.t}</span>
                        <span className="text-slate-500 text-[10px] md:text-[12px] font-medium leading-relaxed opacity-80">{item.d}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 grid grid-cols-1 gap-2.5">
                  <p className="text-[8px] md:text-[9px] font-black text-slate-600 uppercase tracking-[0.2em] md:tracking-[0.4em] mb-1">🔐 Trust Protocols</p>
                  {[
                    "Absolute Client Confidentiality",
                    "No-Spam / Zero Data-Sharing Policy",
                    "Plain English — Zero Legal Jargon"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-slate-400 text-[10px] md:text-[12px] font-medium leading-none">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Founder Area */}
              <div className="mt-10 md:mt-auto pt-6 md:pt-8 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-4 md:space-x-5">
                  <div className="relative">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-black text-lg md:text-xl shadow-2xl border border-white/10">AG</div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-emerald-500 border-2 border-slate-950 rounded-full"></div>
                  </div>
                  <div>
                    <span className="block text-white font-bold text-sm md:text-lg leading-none mb-1">Ankit Gudhka</span>
                    <span className="block text-indigo-400 text-[8px] md:text-[9px] font-black uppercase tracking-[0.15em] md:tracking-[0.25em]">Lead Partner</span>
                  </div>
                </div>
                <div className="text-right hidden md:block">
                   <p className="text-slate-600 text-[7px] font-black uppercase tracking-[0.4em] mb-1 opacity-50">Operation Window</p>
                   <p className="text-slate-400 text-[9px] font-black tracking-widest">10:00 — 19:00 IST</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Intake Brief Form - Mobile Responsive Optimization */}
        <div className="xl:w-[62%] flex w-full">
          <div className="bg-white rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-14 lg:p-16 xl:p-20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col w-full relative overflow-hidden">
            {/* Soft Ambient Glow */}
            <div className="absolute top-0 right-0 w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] bg-indigo-50/50 rounded-full blur-[80px] md:blur-[120px] -mr-40 -mt-40 md:-mr-80 md:-mt-80 pointer-events-none"></div>
            
            <div className="relative z-10 mb-10 md:mb-14">
               <div className="flex items-center space-x-4 md:space-x-5 mb-6 md:mb-8">
                 <div className="h-0.5 md:h-1 w-10 md:w-12 bg-indigo-600 rounded-full"></div>
                 <span className="text-[9px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] md:tracking-[0.5em]">Executive Submission Protocol</span>
               </div>
               <h4 className="text-3xl md:text-5xl lg:text-6xl font-serif text-slate-900 font-bold mb-4 md:mb-6 tracking-tight leading-tight">Request <br /><span className="italic text-indigo-600">Sovereign Expertise</span></h4>
               <p className="text-slate-500 text-base md:text-xl leading-relaxed font-medium opacity-80 max-w-xl">Initiate a formal case brief for immediate surgical assessment by our advisory board.</p>
            </div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-8 md:space-y-10 flex-grow">
              {/* Core Identity Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-3 group/field">
                  <label className="text-[9px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em] group-focus-within/field:text-indigo-600 transition-colors ml-1">Client Authorized Identity</label>
                  <div className="relative">
                    <input type="text" required placeholder="Full Name / Entity Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-6 md:px-8 py-4 md:py-5.5 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-600 focus:bg-white transition-all outline-none font-bold text-slate-900 placeholder:text-slate-300 shadow-sm text-base md:text-lg" />
                  </div>
                </div>
                <div className="space-y-3 group/field">
                  <label className="text-[9px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em] group-focus-within/field:text-indigo-600 transition-colors ml-1">Secure Email Node</label>
                  <div className="relative">
                    <input type="email" required placeholder="corporate@domain.com" value={formData.email} onChange={(e) => { setFormData({...formData, email: e.target.value}); if (emailError) setEmailError(''); }} className={`w-full px-6 md:px-8 py-4 md:py-5.5 rounded-2xl bg-slate-50 border-2 ${emailError ? 'border-red-400 bg-red-50/10' : 'border-slate-100'} focus:border-indigo-600 focus:bg-white transition-all outline-none font-bold text-slate-900 placeholder:text-slate-300 shadow-sm text-base md:text-lg`} />
                  </div>
                  {emailError && <p className="text-[8px] md:text-[10px] text-red-500 font-black uppercase tracking-widest mt-2 ml-1">{emailError}</p>}
                </div>
              </div>

              {/* Tactical Selection */}
              <div className="space-y-5">
                <label className="text-[9px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em] ml-1">Compliance Domain Selection</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {['GST Compliance', 'Income Tax', 'Startup Setup', 'Audit Support', 'ROC Filing', 'Other'].map((service) => (
                    <button key={service} type="button" onClick={() => setFormData({...formData, service})} className={`px-4 py-3.5 md:py-5 text-[9px] md:text-[11px] font-black rounded-xl md:rounded-2xl border-2 transition-all uppercase tracking-widest ${formData.service === service ? 'bg-slate-900 border-slate-900 text-white shadow-xl -translate-y-0.5 md:-translate-y-1' : 'bg-white border-slate-100 text-slate-400 hover:border-indigo-200 hover:text-indigo-600'}`}>
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Requirement Brief */}
              <div className="space-y-3 group/field">
                <label className="text-[9px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em] group-focus-within/field:text-indigo-600 transition-colors ml-1">Technical Requirement Brief</label>
                <textarea rows={4} placeholder="Detailed narrative of regulatory notice or operational business requirement..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-6 md:px-8 py-5 md:py-7 rounded-[1.5rem] md:rounded-[2rem] bg-slate-50 border-2 border-slate-100 focus:border-indigo-600 focus:bg-white transition-all outline-none font-bold text-slate-900 placeholder:text-slate-300 resize-none shadow-sm leading-relaxed text-base md:text-lg"></textarea>
              </div>

              {/* Final Synchronization */}
              <div className="pt-2 md:pt-4">
                <button type="submit" className="w-full py-6 md:py-8 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-[2rem] md:rounded-[2.5rem] transition-all shadow-[0_20px_40px_-10px_rgba(16,185,129,0.35)] active:scale-[0.98] flex items-center justify-center space-x-4 md:space-x-6 text-[10px] md:text-[13px] uppercase tracking-[0.2em] md:tracking-[0.6em] group/submit">
                  <svg className="w-7 h-7 md:w-9 md:h-9 transition-transform group-hover/submit:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="truncate">Transmit Operational Brief</span>
                </button>
                <div className="flex items-center justify-center space-x-4 md:space-x-5 mt-8 md:mt-10 opacity-30">
                   <div className="h-px w-8 md:w-12 bg-slate-300"></div>
                   <p className="text-[7px] md:text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] md:tracking-[0.5em]">Advisor Console v4.8</p>
                   <div className="h-px w-8 md:w-12 bg-slate-300"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
