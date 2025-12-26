
import React, { useState, useEffect, useCallback } from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  industry: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Vikram Singh',
    role: 'Managing Director',
    company: 'Skyline Logistics',
    industry: 'Logistics & Supply Chain',
    content: "Marudeva Consultancy has been our compliance partner for 5 years. Their handling of complex GST reconciliations and annual filings is impeccable. Truly the best in Jamnagar.",
    rating: 5,
  },
  {
    name: 'Ananya Rao',
    role: 'Founder',
    company: 'GreenLeaf Organics',
    industry: 'FMCG Startup',
    content: "Incorporating my startup was a breeze thanks to their team. They explained the differences between LLP and Pvt Ltd clearly and handled all the ROC paperwork efficiently.",
    rating: 5,
  },
  {
    name: 'Suresh Kumar',
    role: 'Proprietor',
    company: 'Kumar Textiles',
    industry: 'Manufacturing',
    content: "I used to dread tax season, but their income tax planning has saved me both time and money. Their advice is always proactive and legally sound. Highly recommended.",
    rating: 5,
  },
  {
    name: 'Meera Deshmukh',
    role: 'CFO',
    company: 'TechWave Solutions',
    industry: 'Information Technology',
    content: "Excellent audit support. They helped us streamline our internal controls and ensured our accounting standards were perfectly aligned with current regulations.",
    rating: 5,
  },
  {
    name: 'Prakash Hegde',
    role: 'Director',
    company: 'Hegde Group of Hotels',
    industry: 'Hospitality',
    content: "Their investment advisory and wealth management services have helped our family business grow sustainably. Professional, confidential, and highly knowledgeable.",
    rating: 5,
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const maxIndex = testimonials.length - itemsPerView;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  }, [itemsPerView]);

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = testimonials.length - itemsPerView;
      return prev === 0 ? maxIndex : prev - 1;
    });
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="text-center mb-20">
        <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Market Reputation</h2>
        <h3 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">Trusted by <span className="text-indigo-600">300+ Leaders</span></h3>
        <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
          The definitive choice for enterprises seeking absolute regulatory precision and strategic growth advisory.
        </p>
      </div>

      <div 
        className="relative group"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="overflow-hidden py-10 -mx-4 px-4">
          <div 
            className="flex transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) gap-8"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {testimonials.map((t, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)]"
              >
                <div className="group relative bg-white border border-slate-100 p-10 rounded-[2.5rem] transition-all duration-500 hover:shadow-[0_50px_100px_-20px_rgba(79,70,229,0.2)] hover:-translate-y-3 hover:scale-[1.02] hover:border-indigo-200 flex flex-col h-full overflow-hidden">
                  
                  {/* Hover Background Accent */}
                  <div className="absolute top-0 left-0 w-2 h-0 bg-indigo-600 group-hover:h-full transition-all duration-500"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-10">
                      <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 shadow-sm border border-indigo-100/50">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 13H21.017V6C21.017 4.89543 20.1216 4 19.017 4H16.017C14.9124 4 14.017 4.89543 14.017 6V13ZM2.983 21L2.983 18C2.983 16.8954 3.87843 16 4.983 16H7.983C9.08757 16 9.983 16.8954 9.983 18V21C9.983 22.1046 9.08757 23 7.983 23H4.983C3.87843 23 2.983 22.1046 2.983 21ZM2.983 13H9.983V6C9.983 4.89543 9.08757 4 7.983 4H4.983C3.87843 4 2.983 4.89543 2.983 6V13Z" />
                        </svg>
                      </div>
                      <span className="bg-slate-50 text-slate-400 text-[9px] font-black px-2 py-1 rounded-md border border-slate-100 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors uppercase tracking-widest">Verified Client</span>
                    </div>

                    <div className="mb-8">
                      <p className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.25em] mb-3">{t.industry}</p>
                      <p className="text-slate-600 text-lg leading-relaxed font-serif italic italic-quote">
                        "{t.content}"
                      </p>
                    </div>

                    <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-inner uppercase tracking-tighter">
                          {t.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="ml-4">
                          <h4 className="font-bold text-slate-900 text-sm tracking-wide">{t.name}</h4>
                          <p className="text-[10px] text-indigo-600 font-bold uppercase tracking-widest mt-0.5">{t.role}</p>
                          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wide">{t.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-0.5 opacity-50 group-hover:opacity-100 transition-opacity">
                        {[...Array(t.rating)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Subtle Watermark Icon */}
                  <div className="absolute bottom-0 right-0 -mr-4 -mb-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700 transform scale-150 rotate-12 pointer-events-none">
                    <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 13H21.017V6C21.017 4.89543 20.1216 4 19.017 4H16.017C14.9124 4 14.017 4.89543 14.017 6V13Z" /></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Navigation Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full shadow-2xl border border-slate-100 flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 transition-all hover:bg-indigo-600 hover:text-white z-20 active:scale-90"
          aria-label="Previous testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-14 h-14 bg-white rounded-full shadow-2xl border border-slate-100 flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 transition-all hover:bg-indigo-600 hover:text-white z-20 active:scale-90"
          aria-label="Next testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Refined Pagination Dots */}
        <div className="flex justify-center space-x-3 mt-12">
          {[...Array(testimonials.length - (itemsPerView - 1))].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${currentIndex === i ? 'bg-indigo-600 w-12' : 'bg-slate-200 w-4 hover:bg-slate-300'}`}
              aria-label={`Go to testimonial slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white border border-slate-100 rounded-full shadow-sm">
           <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Global Standards</span>
           <span className="text-[11px] font-black text-indigo-600 uppercase tracking-widest">Local Expertise</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
