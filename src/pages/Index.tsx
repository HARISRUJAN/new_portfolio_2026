import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Writing from "../components/Writing";
import Speaking from "../components/Speaking";
import Book from "../components/Book";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        <Writing />
        <Speaking />
        <Book />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-surface py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-text-muted text-sm">
              © 2025 Harisrujan C. Crafted with passion for AI and product excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
