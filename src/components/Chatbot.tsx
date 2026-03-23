import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

const faqs = [
  { 
    keywords: ['fee', 'price', 'cost', 'money', 'paying'], 
    answer: 'School fees for 2026 vary by grade. Generally, they range from R12,000 to R18,000 per annum. For a detailed breakdown, please visit the "School Fees" page under the Admissions menu.' 
  },
  { 
    keywords: ['admission', 'apply', 'enrol', 'register'], 
    answer: 'Admissions for 2026 are currently open! You can fill out the digital application form on our "Admissions" page.' 
  },
  { 
    keywords: ['holiday', 'calendar', 'term', 'closed', 'break'], 
    answer: 'Term 1 ends on March 28, 2026. Schools will reopen for Term 2 on April 8, 2026. You can download the full school calendar from the "Documents" section.' 
  },
  { 
    keywords: ['contact', 'phone', 'call', 'email', 'address'], 
    answer: 'You can reach us at 045 932 1032 or email maclearhighschool1@gmail.com. We are located at 1 Murray Street, Maclear.' 
  },
  { 
    keywords: ['principal', 'fourie', 'voorster', 'staff'], 
    answer: 'Our School Principal is Mrs Fourie, and our Deputy Principal is Mrs Voorster.' 
  }
];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hello! I am the Maclear High Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simple matching
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      const match = faqs.find(f => f.keywords.some(k => lowerInput.includes(k)));
      
      const botResponse = match 
        ? match.answer 
        : "I'm not exactly sure about that. Please contact the school office at 045 932 1032 for more details!";
      
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    }, 600);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-school-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-[100]"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden z-[100] border border-gray-100"
          >
            {/* Header */}
            <div className="bg-school-primary p-6 text-white text-center relative">
              <Bot className="mx-auto mb-2" size={32} />
              <h3 className="font-bold text-lg">MHS Assistant</h3>
              <p className="text-blue-100 text-xs uppercase tracking-widest font-bold">Online & Ready</p>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4 bg-gray-50/50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                    m.role === 'user' 
                      ? 'bg-school-primary text-white rounded-tr-none shadow-lg' 
                      : 'bg-white text-gray-800 rounded-tl-none border border-gray-100 shadow-sm'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me something..."
                className="flex-grow px-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-school-primary/20"
              />
              <button 
                onClick={handleSend}
                className="w-12 h-12 bg-school-primary text-white rounded-xl flex items-center justify-center hover:bg-school-secondary transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
