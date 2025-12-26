
import React, { useState, useRef, useEffect } from 'react';
import { getTaxAssistance } from '../services/gemini';
import { Message } from '../types';

interface CitationLink {
  title: string;
  uri: string;
}

interface ServiceSuggestion {
  label: string;
  icon: string;
  query: string;
}

interface ExtendedMessage extends Message {
  links?: CitationLink[];
  showConsultationButton?: boolean;
  suggestions?: ServiceSuggestion[];
}

interface TaxAssistantProps {
  onClose: () => void;
}

const SERVICE_CATALOG: ServiceSuggestion[] = [
  { label: 'GST Compliance', icon: '📝', query: 'How do I initiate GST registration and what are the filing frequencies?' },
  { label: 'Income Tax', icon: '📊', query: 'What are the current tax planning strategies for HNIs and corporations?' },
  { label: 'Business Setup', icon: '🚀', query: 'Explain the protocol for incorporating a Private Limited Company or LLP.' },
  { label: 'ROC Filing', icon: '⚖️', query: 'I need details on ROC annual compliance and MCA statutory filings.' },
  { label: 'Audit Support', icon: '🔍', query: 'What does your statutory and internal audit assistance involve?' },
  { label: 'Wealth Strategy', icon: '📈', query: 'Discuss your protocols for wealth preservation and legacy planning.' },
  { label: 'MSME/Udyam', icon: '🏭', query: 'How can my business avail MSME/Udyam registration benefits?' },
  { label: 'Startup India', icon: '💡', query: 'What are the criteria for Startup India recognition and its tax exemptions?' },
  { label: 'IEC Registration', icon: '🌐', query: 'I need to apply for an Import Export Code (IEC) for my trade business.' },
  { label: 'TDS Management', icon: '🧾', query: 'What are the requirements for TDS/TCS calculation and return filing?' }
];

const COMPLEX_KEYWORDS = [
  'legal', 'detailed', 'complex', 'lawsuit', 'notice', 'penalty', 'audit', 'incorporation', 'scrutiny', 'litigation',
  'help', 'consult', 'advice', 'advisor', 'appointment', 'expert', 'lawyer', 'problem', 'issue', 'urgent', 'dispute'
];

const TaxAssistant: React.FC<TaxAssistantProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<ExtendedMessage[]>([
    { 
      role: 'assistant', 
      content: "Marudeva Intelligence Node Active. I am your Senior Executive Advisor for all regulatory, fiscal, and corporate compliance matters. How may I assist your enterprise today?\n\nHere are some specialized tracks to begin:",
      suggestions: SERVICE_CATALOG.slice(0, 8)
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      onClose();
    }
  };

  const getRelevantSuggestions = (query: string): ServiceSuggestion[] => {
    const q = query.toLowerCase();
    const matched = SERVICE_CATALOG.filter(s => {
      const keywords = s.label.toLowerCase().split(/[ /]+/);
      return keywords.some(k => k.length > 2 && q.includes(k)) || q.includes(s.label.toLowerCase());
    });
    
    if (matched.length <= 2) {
      const others = SERVICE_CATALOG.filter(s => !matched.includes(s)).slice(0, 4);
      return [...matched, ...others].slice(0, 6);
    }
    return matched.slice(0, 6);
  };

  const handleSend = async (overrideInput?: string) => {
    const messageToSend = (overrideInput || input).trim();
    if (!messageToSend || isLoading) return;
    
    const isComplex = COMPLEX_KEYWORDS.some(keyword => 
      messageToSend.toLowerCase().includes(keyword)
    );

    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: messageToSend }]);
    setIsLoading(true);
    
    const { text, links } = await getTaxAssistance(messageToSend);
    const dynamicSuggestions = getRelevantSuggestions(messageToSend);
    
    setMessages(prev => [...prev, { 
      role: 'assistant', 
      content: text, 
      links,
      showConsultationButton: isComplex || text.toLowerCase().includes('consultation') || text.toLowerCase().includes('manual review') || text.toLowerCase().includes('partner review'),
      suggestions: dynamicSuggestions
    }]);
    setIsLoading(false);
  };

  const parseInline = (text: string) => {
    let parts: (string | React.ReactNode)[] = [text];
    
    // Markdown Links: [text](url)
    parts = parts.flatMap(p => {
      if (typeof p !== 'string') return p;
      const sub = p.split(/(\[.*?\]\(https?:\/\/.*?\))/g);
      return sub.map((sp, i) => {
        const match = sp.match(/\[(.*?)\]\((https?:\/\/.*?)\)/);
        if (match) {
          return <a key={i} href={match[2]} target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-black underline hover:text-indigo-800 transition-colors">{match[1]}</a>;
        }
        return sp;
      });
    });

    // Bold: **text**
    parts = parts.flatMap(p => {
      if (typeof p !== 'string') return p;
      const sub = p.split(/(\*\*.*?\*\*)/g);
      return sub.map((sp, i) => sp.startsWith('**') && sp.endsWith('**') ? <strong key={i} className="font-bold text-slate-950 tracking-tight">{sp.slice(2, -2)}</strong> : sp);
    });

    // Inline Code: `text`
    parts = parts.flatMap(p => {
      if (typeof p !== 'string') return p;
      const sub = p.split(/(`.*?`)/g);
      return sub.map((sp, i) => sp.startsWith('`') && sp.endsWith('`') ? <code key={i} className="px-1.5 py-0.5 bg-slate-100 text-indigo-700 rounded-md font-mono text-[10px] border border-slate-200">{sp.slice(1, -1)}</code> : sp);
    });

    // Auto-linkify remaining raw URLs
    parts = parts.flatMap(p => {
      if (typeof p !== 'string') return p;
      const sub = p.split(/(https?:\/\/[^\s\)]+)/g);
      return sub.map((sp, i) => sp.startsWith('http') ? <a key={i} href={sp} target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-bold underline hover:text-indigo-800 transition-colors break-all">{sp}</a> : sp);
    });

    return parts;
  };

  const renderFormattedContent = (content: string) => {
    const segments = content.split(/(```[\s\S]*?```)/g);
    
    return segments.map((segment, segIdx) => {
      if (segment.startsWith('```')) {
        const code = segment.replace(/```/g, '').trim();
        return (
          <div key={segIdx} className="my-5 relative group/code">
            <div className="absolute top-0 right-0 px-3 py-1 bg-white/10 text-[7px] font-black text-white/50 uppercase tracking-[0.2em] rounded-bl-xl rounded-tr-2xl backdrop-blur-sm">Source_Log.exe</div>
            <pre className="p-5 bg-slate-900 text-indigo-300 rounded-2xl overflow-x-auto text-[11px] font-mono border border-white/5 shadow-2xl leading-relaxed scrollbar-thin scrollbar-thumb-white/10">
              <code>{code}</code>
            </pre>
          </div>
        );
      }

      const lines = segment.split('\n');
      return lines.map((line, lineIdx) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={`${segIdx}-${lineIdx}`} className="h-4" />;

        // Headings
        if (trimmed.startsWith('### ')) {
          return <h4 key={`${segIdx}-${lineIdx}`} className="text-sm font-black text-slate-900 uppercase tracking-wider mb-4 mt-6 first:mt-0 flex items-center space-x-2">
            <span className="w-1 h-3 bg-indigo-600 rounded-full"></span>
            <span>{parseInline(trimmed.substring(4))}</span>
          </h4>;
        }
        if (trimmed.startsWith('## ')) {
          return <h3 key={`${segIdx}-${lineIdx}`} className="text-base font-serif font-black text-slate-900 mb-5 mt-8 first:mt-0 border-b border-slate-100 pb-2">
            {parseInline(trimmed.substring(3))}
          </h3>;
        }
        if (trimmed.startsWith('# ')) {
          return <h2 key={`${segIdx}-${lineIdx}`} className="text-lg font-serif font-black text-indigo-600 mb-6 mt-10 first:mt-0">
            {parseInline(trimmed.substring(2))}
          </h2>;
        }

        // Blockquotes
        if (trimmed.startsWith('> ')) {
          return (
            <blockquote key={`${segIdx}-${lineIdx}`} className="my-6 pl-6 border-l-4 border-indigo-200 py-1 bg-indigo-50/30 rounded-r-xl italic text-slate-600 font-medium">
              {parseInline(trimmed.substring(2))}
            </blockquote>
          );
        }

        // Horizontal Rule
        if (trimmed === '---') {
          return <hr key={`${segIdx}-${lineIdx}`} className="my-8 border-t-2 border-slate-100 border-dashed" />;
        }

        // Lists
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          return (
            <div key={`${segIdx}-${lineIdx}`} className="flex items-start space-x-3 my-3 pl-2 group/list">
              <span className="text-indigo-600 font-black mt-1.5 shrink-0 transform group-hover/list:scale-125 transition-transform text-[10px]">■</span>
              <span className="flex-1 text-slate-700 font-medium leading-relaxed tracking-tight">{parseInline(trimmed.substring(2))}</span>
            </div>
          );
        }

        const olMatch = trimmed.match(/^(\d+\.)\s+(.*)/);
        if (olMatch) {
          return (
            <div key={`${segIdx}-${lineIdx}`} className="flex items-start space-x-4 my-3 pl-2">
              <span className="text-white bg-indigo-600 font-black text-[9px] w-5 h-5 flex items-center justify-center rounded-lg mt-0.5 shrink-0 shadow-sm">{olMatch[1].replace('.','')}</span>
              <span className="flex-1 text-slate-700 font-medium leading-relaxed tracking-tight">{parseInline(olMatch[2])}</span>
            </div>
          );
        }

        return (
          <p key={`${segIdx}-${lineIdx}`} className="mb-4 last:mb-0 text-slate-700 font-medium leading-[1.7] tracking-tight">
            {parseInline(line)}
          </p>
        );
      });
    });
  };

  return (
    <div className="flex flex-col w-[320px] sm:w-[440px] h-[580px] max-h-[85vh] bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.35)] overflow-hidden border border-slate-200 animate-in slide-in-from-bottom-5 duration-500 relative ring-1 ring-slate-200/50">
      <div className="bg-slate-900 p-5 text-white flex justify-between items-center shrink-0 shadow-2xl relative z-40">
        <div className="flex items-center space-x-4">
          <div className="w-11 h-11 bg-indigo-600 rounded-2xl flex items-center justify-center border border-white/10 shadow-lg ring-4 ring-indigo-500/10">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <span className="block font-serif font-bold text-lg tracking-tight leading-none mb-1">Advisor Command</span>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
              <span className="text-[9px] text-slate-400 font-black uppercase tracking-[0.25em]">Direct Link Optimized</span>
            </div>
          </div>
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }} 
          className="hover:bg-white/20 p-2.5 rounded-xl transition-all active:scale-90 flex items-center justify-center bg-white/10 border border-white/5 relative z-50 cursor-pointer shadow-inner"
          aria-label="Terminate Session"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-10 bg-slate-50/50 scrollbar-hide">
        {messages.map((msg, i) => (
          <div key={i} className={`flex flex-col animate-message ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
            <div className={`max-w-[95%] p-6 rounded-3xl text-[14px] shadow-sm relative ${
              msg.role === 'user' 
              ? 'bg-slate-900 text-white rounded-tr-none' 
              : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none ring-1 ring-slate-100 shadow-xl shadow-slate-200/20'
            }`}>
              {msg.role === 'assistant' && (
                 <div className="absolute -top-3 -left-1 text-[8px] font-black bg-indigo-600 text-white px-2 py-0.5 rounded shadow-sm uppercase tracking-widest z-10">System_Output</div>
              )}
              
              <div className="rich-text-container">
                {renderFormattedContent(msg.content)}
              </div>
              
              {msg.role === 'assistant' && msg.showConsultationButton && (
                <div className="mt-8 p-6 bg-gradient-to-br from-indigo-600 to-indigo-900 rounded-[2rem] text-white shadow-2xl shadow-indigo-600/40 border border-indigo-400/30 overflow-hidden relative group/cta">
                  <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover/cta:translate-x-0 group-hover/cta:translate-y-0 transition-transform duration-1000">
                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                  </div>
                  <p className="text-[10px] font-black mb-4 opacity-90 uppercase tracking-[0.4em] leading-none">Statutory Review Required</p>
                  <p className="text-[12px] font-medium mb-6 opacity-90 leading-relaxed">This brief contains elements that mandate direct legal mapping by our Lead Advisory Partners.</p>
                  <button 
                    onClick={scrollToContact}
                    className="w-full py-4.5 bg-white text-indigo-700 text-[11px] font-black rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center space-x-3 uppercase tracking-[0.25em] shadow-xl active:scale-95 group/btn border border-indigo-100"
                  >
                    <span>Book a Consultation</span>
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                </div>
              )}

              {msg.role === 'assistant' && msg.suggestions && msg.suggestions.length > 0 && (
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.25em] mb-4 opacity-70">Operational Pathways</p>
                  <div className="grid grid-cols-2 gap-3">
                    {msg.suggestions.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(s.query)}
                        className="px-3 py-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-600 hover:bg-white hover:text-indigo-600 transition-all text-[10px] font-bold text-slate-600 flex items-center space-x-3 shadow-sm group/path"
                      >
                        <span className="text-base group-hover/path:scale-125 group-hover/path:rotate-6 transition-all duration-300">{s.icon}</span>
                        <span className="truncate">{s.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {msg.links && msg.links.length > 0 && (
                <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Compliance Sources</p>
                  <div className="flex flex-col gap-2.5">
                    {msg.links.map((link, lIdx) => (
                      <a key={lIdx} href={link.uri} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[10px] text-indigo-600 hover:bg-indigo-50 hover:border-indigo-400 transition-all flex items-center justify-between group/link shadow-sm">
                        <span className="font-bold truncate max-w-[180px]">{link.title}</span>
                        <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-start space-x-4">
             <div className="w-10 h-10 bg-slate-900 rounded-2xl flex items-center justify-center shadow-xl border border-white/5">
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></div>
             </div>
             <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/20 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ring-1 ring-slate-100 animate-pulse">
                Analyzing Regulatory Delta...
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-5 bg-white border-t border-slate-100 shrink-0 shadow-[0_-10px_30px_rgba(0,0,0,0.02)]">
        <div className="relative group">
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            onKeyDown={(e) => e.key === 'Enter' && handleSend()} 
            placeholder="Type your technical brief..." 
            className="w-full pl-6 pr-16 py-5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 transition-all text-[14px] font-medium placeholder:text-slate-300 shadow-inner bg-slate-50/50" 
          />
          <button 
            onClick={() => handleSend()} 
            disabled={isLoading || !input.trim()} 
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:bg-slate-200 transition-all active:scale-95 shadow-xl shadow-indigo-600/30 group/send"
          >
            <svg className="w-6 h-6 group-hover/send:translate-x-0.5 group-hover/send:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
          </button>
        </div>
        <p className="text-[8px] text-center text-slate-400 mt-5 font-black uppercase tracking-[0.45em] opacity-80 leading-none">Intelligence Hub • Sovereign Protocol Active</p>
      </div>
    </div>
  );
};

export default TaxAssistant;
