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
import ChatbotWidget from "../components/ChatbotWidget";
import { useEffect } from "react";

const Index = () => {
  // Initialize dark mode on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Floating Particles Background */}
      <FloatingParticles />
      
      <Navigation />
      <main className="relative z-10">
        <Hero />
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
      <footer className="relative z-10 py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-text-muted text-sm mb-2">
              © 2025 Harisrujan C. Crafted with passion for AI and product excellence.
            </p>
            <p className="text-xs text-text-muted/60">
              Built with React, Tailwind CSS & Framer Motion
            </p>
          </div>
        </div>
      </footer>

      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  );
};

export default Index;
