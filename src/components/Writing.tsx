import { Code, Brain, Cloud, Terminal, Cpu, Database, Layers, FileCode, BarChart3, Calculator, Sparkles, Link2, Search, Workflow, Bot, Server, Rocket, Users, Target, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Writing = () => {
  const skillCategories = [
    {
      title: 'Programming & Data',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'Python', icon: <FileCode className="w-5 h-5" /> },
        { name: 'R', icon: <BarChart3 className="w-5 h-5" /> },
        { name: 'SQL', icon: <Database className="w-5 h-5" /> },
        { name: 'Power BI', icon: <BarChart3 className="w-5 h-5" /> },
        { name: 'MATLAB', icon: <Calculator className="w-5 h-5" /> },
      ],
      color: 'accent-cyan'
    },
    {
      title: 'AI & NLP',
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: 'HuggingFace', icon: <Sparkles className="w-5 h-5" /> },
        { name: 'LangChain', icon: <Link2 className="w-5 h-5" /> },
        { name: 'Qdrant', icon: <Search className="w-5 h-5" /> },
        { name: 'SpaCy', icon: <Workflow className="w-5 h-5" /> },
        { name: 'Ollama', icon: <Bot className="w-5 h-5" /> },
        { name: 'RAG', icon: <Layers className="w-5 h-5" /> },
      ],
      color: 'accent-purple'
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: 'Azure OpenAI', icon: <Cloud className="w-5 h-5" /> },
        { name: 'Azure ML', icon: <Server className="w-5 h-5" /> },
        { name: 'Streamlit', icon: <Rocket className="w-5 h-5" /> },
        { name: 'API Integration', icon: <Link2 className="w-5 h-5" /> },
      ],
      color: 'accent-blue'
    },
    {
      title: 'Project Management',
      icon: <Terminal className="w-6 h-6" />,
      skills: [
        { name: 'Agile/Scrum', icon: <Workflow className="w-5 h-5" /> },
        { name: 'Stakeholder Collaboration', icon: <Users className="w-5 h-5" /> },
        { name: 'Cross-functional Leadership', icon: <Target className="w-5 h-5" /> },
      ],
      color: 'accent-gold'
    }
  ];

  const impactAreas = [
    { area: 'Requirement Engineering', icon: <Database className="w-5 h-5" /> },
    { area: 'HR Tech', icon: <Cpu className="w-5 h-5" /> },
    { area: 'Healthcare', icon: <Brain className="w-5 h-5" /> },
    { area: 'Process Automation', icon: <Terminal className="w-5 h-5" /> }
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <ScrollAnimationWrapper className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              <Lightbulb className="w-4 h-4 text-accent-gold" />
              <span className="text-sm font-medium text-text-secondary">Skills & Tools</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4 sm:mb-6">
              Technical <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
              Spanning AI/ML, cloud platforms, and product management
            </p>
          </ScrollAnimationWrapper>

          {/* Skills Grid - Icon Based */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {skillCategories.map((category, index) => (
              <ScrollAnimationWrapper
                key={index}
                delay={index * 0.1}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <motion.div
                  className="bento-item group h-full"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-${category.color}/20 flex items-center justify-center text-${category.color}`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-display font-semibold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl bg-${category.color}/10 border border-${category.color}/20 hover:bg-${category.color}/20 transition-all cursor-default group/skill`}
                      >
                        <div className={`text-${category.color} group-hover/skill:scale-110 transition-transform`}>
                          {skill.icon}
                        </div>
                        <span className={`text-xs sm:text-sm font-medium text-${category.color} text-center`}>
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-8 h-[2px] bg-${category.color} ml-auto`} />
                    <div className={`w-[2px] h-8 bg-${category.color} ml-auto -mt-[2px]`} />
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>

          {/* Impact Areas */}
          <ScrollAnimationWrapper delay={0.2}>
            <div className="glass-card-elevated rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-6 sm:mb-8 text-center">
                Impact <span className="text-gradient-neon">Areas</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {impactAreas.map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 sm:p-6 rounded-2xl bg-surface/50 hover:bg-accent-purple/10 transition-colors group"
                    whileHover={{ y: -5, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent-gold/20 rounded-2xl flex items-center justify-center text-accent-gold mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-text-secondary">{item.area}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default Writing;
