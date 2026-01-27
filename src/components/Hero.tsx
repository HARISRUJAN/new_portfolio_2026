import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from '../assets/harisrujan-profile.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-purple/30 rounded-full blur-[128px] animate-float-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[128px] animate-float-slow" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[150px]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="text-center lg:text-left">
              {/* Status Badge */}
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
                </span>
                <span className="text-sm font-medium text-text-secondary">Open to opportunities</span>
              </motion.div>

              {/* Name */}
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6"
              >
                <span className="block">Harisrujan</span>
                <span className="text-gradient-neon">C</span>
              </motion.h1>

              {/* Titles */}
              <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                <span className="px-4 py-2 rounded-full glass-card text-sm font-medium text-accent-cyan neon-text-blue">
                  AI Product Architect
                </span>
                <span className="px-4 py-2 rounded-full glass-card text-sm font-medium text-accent-purple">
                  GenAI Mentor
                </span>
                <span className="px-4 py-2 rounded-full glass-card text-sm font-medium text-accent-gold">
                  Multi-Agent Expert
                </span>
              </motion.div>

              {/* Description */}
              <motion.p 
                variants={itemVariants}
                className="text-lg text-text-secondary mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                AI‑driven product leader with 2+ years building data‑centric solutions. 
                Expert in multi‑agent systems, NLP, RAG, and helping 50+ professionals 
                transition into AI product roles.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="https://linkedin.com/in/harisrujanc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="mailto:harisrujan2605@gmail.com"
                  className="btn-secondary group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            </div>

            {/* Right Column - Profile Image */}
            <motion.div 
              variants={itemVariants}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-blue rounded-full blur-3xl opacity-30 animate-pulse-neon" />
                
                {/* HUD Frame */}
                <div className="relative p-2">
                  {/* Corner decorations */}
                  <div className="hud-corner hud-corner-tl" />
                  <div className="hud-corner hud-corner-tr" />
                  <div className="hud-corner hud-corner-bl" />
                  <div className="hud-corner hud-corner-br" />
                  
                  {/* Profile Image */}
                  <motion.div
                    className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Rotating Border */}
                    <div className="absolute inset-0 rounded-full p-1">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-gold animate-spin-slow opacity-60" />
                    </div>
                    
                    <div className="absolute inset-2 rounded-full overflow-hidden glass-card">
                      <img
                        src={profileImage}
                        alt="Harisrujan C"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                </div>

                {/* Floating Stats */}
                <motion.div
                  className="absolute -left-8 top-1/4 glass-card-elevated px-4 py-3 rounded-2xl"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-accent-cyan">50+</div>
                  <div className="text-xs text-text-muted">Mentees</div>
                </motion.div>

                <motion.div
                  className="absolute -right-4 bottom-1/4 glass-card-elevated px-4 py-3 rounded-2xl"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-accent-purple">5+</div>
                  <div className="text-xs text-text-muted">AI Projects</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-text-muted">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-text-muted/30 flex justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-accent-cyan"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
