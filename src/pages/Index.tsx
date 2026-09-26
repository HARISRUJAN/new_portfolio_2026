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
        className="relative z-10 overflow-hidden border-t border-primary/20 bg-gradient-to-br from-primary via-accent-cyan to-accent-blue text-white"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_15%_20%,hsl(var(--accent-gold)/0.45),transparent_28%),radial-gradient(circle_at_85%_80%,hsl(var(--accent-blue)/0.55),transparent_30%)]"
        />

        <div className="container relative mx-auto px-6 pt-16 sm:pt-20">
          <div className="flex flex-col gap-8 pb-12 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl text-left">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Helsinki · Finland
              </p>
              <h2 id="footer-title" className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let&apos;s build something useful.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-6 text-white/70 sm:text-base">
                AI products, thoughtful engineering, and systems that hold up beyond the demo.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary shadow-lg shadow-black/10 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Start a conversation
              <span aria-hidden="true" className="text-base">↗</span>
            </a>
          </div>

          <div className="overflow-hidden rounded-t-[2rem] border border-white/20 bg-white/95 shadow-2xl shadow-black/10">
            <img
              src={helsinkiFooterGradient}
              alt="Helsinki skyline"
              width={1847}
              height={851}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full"
            />
          </div>

          <div className="flex flex-col gap-4 border-t border-white/15 py-6 text-left text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Harisrujan C.</p>
            <nav aria-label="Footer links" className="flex flex-wrap gap-x-5 gap-y-2">
              <a className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" href="https://github.com/HARISRUJAN" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" href="https://www.linkedin.com/in/harisrujan2605/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" href="mailto:harisrujan2605@gmail.com">
                Email
              </a>
            </nav>
          </div>
        </div>
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
