import { ArrowRight, ExternalLink } from 'lucide-react';
import heroBackground from '../assets/hero-background.jpg';
const Hero = () => {
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBackground})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="fade-in">
          <h1 className="text-hero font-bold text-primary mb-6 text-balance">
            Anjali Sharma
          </h1>
          
          <div className="text-xl md:text-2xl text-text-secondary mb-8 slide-up">
            <p className="font-medium">
              <span className="text-text-secondary">AI Product Manager</span>
              <span className="mx-3 text-text-muted">•</span>
              <span className="text-accent-blue">GenAI Product Mentor</span>
              <span className="mx-3 text-text-muted">•</span>
              <span className="text-accent-gold">Amazon Bestselling Author</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed slide-up">AI-driven Product Manager with 5+ years scaling B2B SaaS - building at the intersection of AI, UX, and GTM velocity to turn ideas into business outcomes.</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center slide-up">
            <a href="https://anjalisharma.substack.com" target="_blank" rel="noopener noreferrer" className="btn-hero group">
              Read My Newsletter
              <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="https://topmate.io/anjalisharma" target="_blank" rel="noopener noreferrer" className="btn-secondary group">
              Book Mentorship
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 float">
            
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;