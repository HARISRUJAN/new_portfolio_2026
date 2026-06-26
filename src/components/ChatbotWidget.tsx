import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Sparkles, Brain, Briefcase, Layers, Mail } from 'lucide-react';
import profileImage from '../assets/harisrujan-profile_2.jpg';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export interface ChatbotRef {
  open: () => void;
  close: () => void;
}

const quickTopics = [
  { label: 'Experience', icon: <Briefcase className="w-4 h-4" />, query: 'Tell me about your experience' },
  { label: 'Projects', icon: <Brain className="w-4 h-4" />, query: 'What projects have you worked on?' },
  { label: 'Skills', icon: <Layers className="w-4 h-4" />, query: 'What are your technical skills?' },
  { label: 'Contact', icon: <Mail className="w-4 h-4" />, query: 'How can I reach you?' },
];

const ChatbotWidget = forwardRef<ChatbotRef>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hey! I'm Srujan's Digital Twin — an intelligent extension of his knowledge and personality. Ask me anything about his work, projects, or mentorship opportunities.",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('experience') || lowerMessage.includes('work')) {
      return "I've worked as a Thesis Worker at GPT-Lab (Tampere University) building multi-agent SRS validation systems, and previously as a Data Science Engineer at Ignitz Solutions where I built AI-powered HR tech solutions. My expertise spans NLP, RAG, and multi-agent architectures. Currently also mentoring 50+ professionals in GenAI.";
    }
    
    if (lowerMessage.includes('project')) {
      return "My key projects include:\n\n• **Multi-Agent SRS Validation** — LLMs + digital twins for requirement reviews (85% accuracy)\n• **AI Profile-Job Matching** — NLP-powered recruitment tool (25% accuracy boost, 40% faster)\n• **GenAI Consulting** — Helped 5+ companies integrate chatbots, content generation, and automation";
    }
    
    if (lowerMessage.includes('book') || lowerMessage.includes('mentor')) {
      return "I offer hands-on GenAI mentorship! I've trained 50+ professionals and helped 5+ transition into AI PM roles. Topics include prompt engineering, model fine-tuning, RAG, multi-agent systems, and AI product strategy. Reach out at harisrujan2605@gmail.com to book a session.";
    }
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('tool') || lowerMessage.includes('tech')) {
      return "My tech stack:\n\n• **AI/ML:** LangChain, LangGraph, HuggingFace, Qdrant, OpenAI, SpaCy\n• **Languages:** Python, SQL, R\n• **Cloud:** Azure OpenAI, Azure ML\n• **Tools:** Streamlit, Power BI, Git\n• **Methods:** Agile/Scrum, stakeholder collaboration, cross-functional leadership";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach') || lowerMessage.includes('hire')) {
      return "I'm open to AI product leadership roles, consulting, and research collaborations!\n\n📧 harisrujan2605@gmail.com\n🔗 linkedin.com/in/harisrujan2605\n🐙 github.com/HARISRUJAN";
    }

    if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('university')) {
      return "I'm currently pursuing my Master's at Tampere University (Finland), working on my thesis at GPT-Lab on multi-agent SRS validation systems. My research combines LLMs, RAG, and digital twins for automated software requirement reviews.";
    }

    return "Great question! I can tell you about Srujan's experience, projects, technical skills, mentorship programs, or how to get in touch. What interests you most?";
  };

  const handleSend = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getBotResponse(messageText),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 800 + Math.random() * 800);
  };

  return (
    <>
      {/* Floating Chat Button (when closed) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary text-primary-foreground shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <Sparkles className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Full-Screen Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Chat Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-full max-w-2xl h-[85vh] max-h-[700px] mx-4 rounded-3xl overflow-hidden flex flex-col"
              style={{
                background: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                boxShadow: 'var(--shadow-xl)',
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/20">
                    <img src={profileImage} alt="Srujan" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">Srujan's Digital Twin</h3>
                    <p className="text-xs text-text-muted">Ask me anything about Harisrujan</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl hover:bg-hover transition-colors"
                >
                  <X className="w-5 h-5 text-text-muted" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-3 ${message.isBot ? '' : 'flex-row-reverse'}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden ${
                        message.isBot ? 'ring-2 ring-primary/20' : 'bg-primary'
                      }`}
                    >
                      {message.isBot ? (
                        <img src={profileImage} alt="Srujan" className="w-full h-full object-cover" />
                      ) : (
                        <User className="w-4 h-4 text-primary-foreground" />
                      )}
                    </div>
                    <div
                      className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                        message.isBot
                          ? 'bg-surface text-foreground rounded-tl-md'
                          : 'bg-primary text-primary-foreground rounded-tr-md'
                      }`}
                    >
                      {message.text.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < message.text.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-primary/20">
                      <img src={profileImage} alt="Srujan" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-surface p-4 rounded-2xl rounded-tl-md">
                      <div className="flex gap-1.5">
                        <span className="w-2 h-2 bg-text-muted rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-text-muted rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-text-muted rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Topics (show only at start) */}
              {messages.length <= 2 && (
                <div className="px-5 pb-3">
                  <div className="flex flex-wrap gap-2">
                    {quickTopics.map((topic) => (
                      <button
                        key={topic.label}
                        onClick={() => handleSend(topic.query)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-border text-sm text-text-secondary hover:text-primary hover:border-primary/30 transition-all"
                      >
                        {topic.icon}
                        {topic.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t border-border">
                <div className="flex gap-3 items-center">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask me anything…"
                    className="flex-1 px-5 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                    autoFocus
                  />
                  <button
                    onClick={() => handleSend()}
                    disabled={!inputValue.trim()}
                    className="p-3 rounded-xl bg-primary text-primary-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

ChatbotWidget.displayName = 'ChatbotWidget';

export default ChatbotWidget;
