
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TaxAssistant from './components/TaxAssistant';
import MidBanner from './components/MidBanner';
import BackToTop from './components/BackToTop';
import ProcessSection from './components/ProcessSection';
import FAQSection from './components/FAQSection';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="relative min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="services" className="py-32 bg-white relative z-10">
          <Services />
        </section>

        {/* The Sovereign Protocol Section */}
        <section id="process">
          <ProcessSection />
        </section>
        
        <section id="about" className="py-32 bg-slate-50">
          <About />
        </section>

        <MidBanner />

        <section id="testimonials" className="py-32 bg-white">
          <Testimonials />
        </section>

        <section className="bg-slate-50 border-y border-slate-100">
          <FAQSection />
        </section>
        
        <section id="contact" className="py-32 bg-white">
          <Contact />
        </section>
      </main>

      <Footer />

      {/* Action Suite */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end space-y-5">
        <BackToTop />

        {/* Executive WhatsApp Link */}
        <a
          href="https://wa.me/919409078347"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 hover:bg-emerald-600 text-white p-5 rounded-full shadow-[0_20px_40px_-10px_rgba(16,185,129,0.4)] transition-all hover:scale-110 flex items-center justify-center group relative overflow-hidden"
          title="Direct Priority Hub"
        >
          <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="absolute right-full mr-4 px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none translate-x-4 group-hover:translate-x-0 shadow-2xl">
            Priority Support
          </span>
        </a>

        {/* AI Assistant FAB */}
        {!isChatOpen && (
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white p-5 rounded-full shadow-[0_20px_40px_-10px_rgba(79,70,229,0.4)] transition-all hover:scale-110 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-indigo-300 group relative"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute right-full mr-4 px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none translate-x-4 group-hover:translate-x-0 shadow-2xl">
              Tax Intelligence
            </span>
          </button>
        )}
        
        {isChatOpen && (
          <TaxAssistant onClose={() => setIsChatOpen(false)} />
        )}
      </div>
    </div>
  );
};

export default App;
