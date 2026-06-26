import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Writing from "../components/Writing";
import Blog from "../components/Blog";
import Speaking from "../components/Speaking";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import FloatingParticles from "../components/FloatingParticles";
import ChatbotWidget, { ChatbotRef } from "../components/ChatbotWidget";
import { useEffect, useRef, useState } from "react";
import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const chatbotRef = useRef<ChatbotRef>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenChat = () => {
    chatbotRef.current?.open();
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <FloatingParticles />
      
      <Navigation />
      <main className="relative z-10">
        <Hero onOpenChat={handleOpenChat} />
        <AboutMe />
        <Experience />
        <Projects />
        <Writing />
        <Blog />
        <Speaking />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {/* Brand */}
              <div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">Harisrujan C</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  AI Product Architect helping teams build responsibly with Generative AI.
                </p>
              </div>
              {/* Quick Links */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Quick Links</h4>
                <div className="space-y-2">
                  {['About', 'Projects', 'Blog', 'Contact'].map((link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      className="block text-sm text-text-muted hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
              {/* Social */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Connect</h4>
                <div className="flex gap-3">
                  <a href="https://www.linkedin.com/in/harisrujan2605/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-surface hover:bg-hover text-text-muted hover:text-primary transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://github.com/HARISRUJAN" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-surface hover:bg-hover text-text-muted hover:text-primary transition-all">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://twitter.com/bannu2605" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-surface hover:bg-hover text-text-muted hover:text-primary transition-all">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="mailto:harisrujan2605@gmail.com" className="p-2 rounded-lg bg-surface hover:bg-hover text-text-muted hover:text-primary transition-all">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-border text-center">
              <p className="text-text-muted text-sm">
                © 2026 Harisrujan C. Crafted with passion for AI and product excellence.
              </p>
              <p className="text-xs text-text-muted/60 mt-1">
                I use AI as a copilot, not autopilot
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-surface border border-border text-text-muted hover:text-primary hover:border-primary/30 shadow-lg transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chatbot Widget */}
      <ChatbotWidget ref={chatbotRef} />
    </div>
  );
};

export default Index;
