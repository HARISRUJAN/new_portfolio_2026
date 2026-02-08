import { Brain, Users, Target, Cpu, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const AboutMe = () => {
  const focusAreas = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Full-cycle AI Execution',
      description: 'Led and delivered 5+ AI projects across NLP, RAG systems, process automation and HR analytics',
      color: 'accent-blue',
      glow: 'shadow-glow-blue'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Multi-Agent Systems',
      description: 'Expert in LangChain, LangGraph, HuggingFace, and LLM agent orchestration',
      color: 'accent-purple',
      glow: 'shadow-glow-purple'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Mentorship & Training',
      description: 'Trained 50+ professionals on GenAI, helped 5+ transition into AI product roles',
      color: 'accent-cyan',
      glow: 'neon-glow-blue'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Company Transformation',
      description: 'Consulted 5+ companies to architect and modernize solutions with AI',
      color: 'accent-gold',
      glow: 'shadow-glow-gold'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <ScrollAnimationWrapper className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              <Zap className="w-4 h-4 text-accent-cyan" />
              <span className="text-sm font-medium text-text-secondary">About & Focus</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Building the Future with <span className="text-gradient-neon">AI</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Passionate about making AI accessible and responsible, from discovery to deployment. 
              Using my skills to uplift peers and juniors starting their tech journey.
            </p>
          </ScrollAnimationWrapper>

          {/* Bento Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bento-item group ${index === 0 ? 'lg:col-span-2' : ''}`}
                whileHover={{ y: -5 }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-${area.color}/20 flex items-center justify-center text-${area.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {area.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">{area.title}</h3>
                <p className="text-text-secondary leading-relaxed">{area.description}</p>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute top-4 right-4 w-8 h-[2px] bg-${area.color}`} />
                  <div className={`absolute top-4 right-4 w-[2px] h-8 bg-${area.color}`} />
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
