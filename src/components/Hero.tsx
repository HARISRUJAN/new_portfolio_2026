import { ArrowRight, ExternalLink, Sparkles, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import profileImage from '../assets/harisrujan-profile_2.jpg';

const roles = [
  'AI Product Architect',
  'GenAI Mentor',
  'Multi-Agent Expert',
  'AI Consultant',
];

const Hero = ({ onOpenChat }: { onOpenChat?: () => void }) => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-purple/20 rounded-full blur-[128px] animate-float-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-cyan/15 rounded-full blur-[128px] animate-float-slow" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/8 rounded-full blur-[150px]" />
        
        {/* Dot Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
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
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-text-secondary">Open to opportunities</span>
              </motion.div>

              {/* Name */}
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-foreground mb-4 tracking-tight"
              >
                <span className="text-gradient-neon">Harisrujan</span>
              </motion.h1>

              {/* Typing Role Effect */}
              <motion.div variants={itemVariants} className="h-12 mb-8 flex items-center justify-center lg:justify-start">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRole}
                    initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
                    transition={{ duration: 0.4 }}
                    className="text-xl md:text-2xl lg:text-3xl font-medium text-primary"
                  >
                    {roles[currentRole]}
                  </motion.span>
                </AnimatePresence>
              </motion.div>

              {/* Description */}
              <motion.p 
                variants={itemVariants}
                className="text-lg text-text-secondary mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                I help teams adopt Generative AI without breaking their products—and help 
                professionals transition into real GenAI roles through hands-on consulting and mentorship.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  onClick={onOpenChat}
                  className="btn-hero group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Ask My Digital Twin
                  <Sparkles className="ml-2 w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                </motion.button>

                <motion.a
                  href="https://www.linkedin.com/in/harisrujan2605/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Connect on LinkedIn
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent-blue to-primary rounded-full blur-3xl opacity-20 animate-pulse" />
                
                {/* Profile Image */}
                <motion.div
                  className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Rotating Border */}
                  <div className="absolute inset-0 rounded-full p-1">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent-blue to-primary animate-spin-slow opacity-40" />
                  </div>
                  
                  <div className="absolute inset-2 rounded-full overflow-hidden glass-card">
                    <img
                      src={profileImage}
                      alt="Harisrujan C"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
                </motion.div>

                {/* Floating Stats */}
                <motion.div
                  className="absolute -left-6 top-1/4 glass-card-elevated px-4 py-3 rounded-2xl"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-xs text-text-muted">Mentees</div>
                </motion.div>

                <motion.div
                  className="absolute -right-4 bottom-1/4 glass-card-elevated px-4 py-3 rounded-2xl"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-accent-blue">5+</div>
                  <div className="text-xs text-text-muted">AI Products</div>
                </motion.div>

                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 -bottom-4 glass-card-elevated px-4 py-3 rounded-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-accent-gold">5+</div>
                  <div className="text-xs text-text-muted">Companies</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Subtle scroll hint */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-border flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
