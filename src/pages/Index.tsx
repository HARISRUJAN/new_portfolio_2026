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
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import helsinkiFooterGradient from "../assets/helsinki-footer-gradient.png";

const Index = () => {
  const chatbotRef = useRef<ChatbotRef>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Skip to content
      </a>
      <FloatingParticles />
      
      <Navigation />
      <main id="main-content" className="relative z-10">
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

      <footer
        aria-labelledby="footer-title"
        className="relative isolate z-10 overflow-hidden border-t border-border bg-gradient-to-b from-background via-background to-accent-blue/10 text-foreground"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_15%_15%,hsl(var(--accent-orange)/0.16),transparent_28%),radial-gradient(circle_at_85%_55%,hsl(var(--accent-cyan)/0.12),transparent_32%)]"
        />

        <div className="container relative z-10 mx-auto px-6 pt-16 sm:pt-20">
          <div className="flex flex-col gap-8 pb-12 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl text-left">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                Helsinki · Finland
              </p>
              <h2 id="footer-title" className="max-w-xl text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Let&apos;s build something useful.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-6 text-text-secondary sm:text-base">
                AI products, thoughtful engineering, and systems that hold up beyond the demo.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/10 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Start a conversation
              <span aria-hidden="true" className="text-base">↗</span>
            </a>
          </div>

          <div className="flex flex-col gap-4 border-t border-border py-6 text-left text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Harisrujan C.</p>
            <nav aria-label="Footer links" className="flex flex-wrap gap-x-5 gap-y-2">
              <a className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" href="https://github.com/HARISRUJAN" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" href="https://www.linkedin.com/in/harisrujan2605/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" href="mailto:harisrujan2605@gmail.com">
                Email
              </a>
            </nav>
          </div>
        </div>

        <img
          src={helsinkiFooterGradient}
          alt="Helsinki skyline"
          width={1847}
          height={851}
          loading="lazy"
          decoding="async"
          className="relative z-0 block h-auto w-full max-w-none opacity-95 mix-blend-multiply"
        />
      </footer>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.8 }}
            transition={shouldReduceMotion ? { duration: 0 } : undefined}
            onClick={() => window.scrollTo({ top: 0, behavior: shouldReduceMotion ? 'auto' : 'smooth' })}
            aria-label="Back to top"
            className="fixed bottom-6 left-6 z-50 rounded-full border border-border bg-surface p-3 text-text-muted shadow-lg transition-colors hover:border-primary/30 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
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
