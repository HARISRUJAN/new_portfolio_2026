import { Layers, Lightbulb, GitBranch, Users, Target, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import { SiPython, SiR, SiStreamlit, SiHuggingface, SiLangchain, SiOpenai, SiGithub } from 'react-icons/si';
import { TbSql, TbApi, TbVectorTriangle } from 'react-icons/tb';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaMicrosoft, FaChartBar, FaRobot } from 'react-icons/fa';
import { MdOutlineScience } from 'react-icons/md';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const Writing = () => {
  const toolCategories = [
    {
      title: 'Core Programming & Data',
      tools: [
        { name: 'Python', icon: <SiPython className="w-8 h-8" />, tooltip: 'Primary language for ML & automation' },
        { name: 'SQL', icon: <TbSql className="w-8 h-8" />, tooltip: 'Data querying & pipeline design' },
        { name: 'R', icon: <SiR className="w-8 h-8" />, tooltip: 'Statistical analysis & modeling' },
        { name: 'MATLAB', icon: <MdOutlineScience className="w-8 h-8" />, tooltip: 'Scientific computing & simulation' },
      ],
    },
    {
      title: 'GenAI / LLM Stack',
      tools: [
        { name: 'Hugging Face', icon: <SiHuggingface className="w-8 h-8" />, tooltip: 'Model experimentation & fine-tuning' },
        { name: 'LangChain', icon: <SiLangchain className="w-8 h-8" />, tooltip: 'LLM orchestration & agent workflows' },
        { name: 'SpaCy', icon: <GiSpiderWeb className="w-8 h-8" />, tooltip: 'Industrial-strength NLP pipelines' },
        { name: 'Qdrant', icon: <TbVectorTriangle className="w-8 h-8" />, tooltip: 'Vector search for RAG pipelines' },
        { name: 'Ollama', icon: <FaRobot className="w-8 h-8" />, tooltip: 'Local LLM deployment & testing' },
        { name: 'OpenAI', icon: <SiOpenai className="w-8 h-8" />, tooltip: 'GPT models & embeddings' },
        { name: 'RAG', icon: <Layers className="w-8 h-8" />, tooltip: 'Retrieval-augmented generation systems', isText: true },
      ],
    },
    {
      title: 'Cloud & Deployment',
      tools: [
        { name: 'Microsoft Azure', icon: <FaMicrosoft className="w-8 h-8" />, tooltip: 'Cloud infrastructure & services' },
        { name: 'Azure OpenAI', icon: <FaMicrosoft className="w-8 h-8" />, tooltip: 'Enterprise-grade GenAI deployment' },
        { name: 'Azure ML', icon: <FaMicrosoft className="w-8 h-8" />, tooltip: 'MLOps & model management' },
        { name: 'Streamlit', icon: <SiStreamlit className="w-8 h-8" />, tooltip: 'Rapid AI app prototyping' },
      ],
    },
    {
      title: 'Visualization & BI',
      tools: [
        { name: 'Power BI', icon: <FaChartBar className="w-8 h-8" />, tooltip: 'Business intelligence dashboards' },
      ],
    },
    {
      title: 'Dev & Integration',
      tools: [
        { name: 'REST APIs', icon: <TbApi className="w-8 h-8" />, tooltip: 'API design & integration' },
        { name: 'Git / GitHub', icon: <SiGithub className="w-8 h-8" />, tooltip: 'Version control & collaboration' },
      ],
    },
  ];

  const waysOfWorking = [
    { name: 'Agile / Scrum', icon: <Workflow className="w-6 h-6" />, tooltip: 'Sprint planning & iterative delivery' },
    { name: 'Stakeholder Collaboration', icon: <Users className="w-6 h-6" />, tooltip: 'Cross-team alignment & communication' },
    { name: 'Cross-functional Leadership', icon: <Target className="w-6 h-6" />, tooltip: 'Driving outcomes across disciplines' },
  ];

  return (
    <TooltipProvider delayDuration={200}>
      <section id="skills" className="py-16 sm:py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[128px]" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-[128px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <ScrollAnimationWrapper className="text-center mb-12 sm:mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
              >
                <Lightbulb className="w-4 h-4 text-accent-gold" />
                <span className="text-sm font-medium text-text-secondary">Technology Stack</span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4 sm:mb-6">
                Tools I <span className="text-gradient">Build With</span>
              </h2>
            </ScrollAnimationWrapper>

            {/* Tools Grid by Category */}
            <div className="space-y-10 sm:space-y-12 mb-12">
              {toolCategories.map((category, catIndex) => (
                <ScrollAnimationWrapper key={catIndex} delay={catIndex * 0.1}>
                  <div>
                    <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-6">
                      {category.title}
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
                      {category.tools.map((tool, toolIndex) => (
                        <Tooltip key={toolIndex}>
                          <TooltipTrigger asChild>
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: toolIndex * 0.05 }}
                              whileHover={{ y: -4 }}
                              className="flex flex-col items-center gap-3 p-4 sm:p-5 rounded-2xl bg-surface/30 hover:bg-surface/60 border border-border/50 hover:border-border transition-all cursor-default group"
                            >
                              <div className="text-text-secondary group-hover:text-foreground transition-colors">
                                {tool.isText ? (
                                  <span className="text-lg font-mono font-semibold">{tool.name}</span>
                                ) : (
                                  tool.icon
                                )}
                              </div>
                              {!tool.isText && (
                                <span className="text-xs sm:text-sm text-text-muted group-hover:text-text-secondary text-center transition-colors">
                                  {tool.name}
                                </span>
                              )}
                            </motion.div>
                          </TooltipTrigger>
                          <TooltipContent side="bottom" className="max-w-[200px]">
                            <p className="text-sm">{tool.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>

            {/* Ways of Working */}
            <ScrollAnimationWrapper delay={0.3}>
              <div className="border-t border-border/50 pt-10 sm:pt-12">
                <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-6 text-center">
                  Ways of Working
                </h3>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                  {waysOfWorking.map((item, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ y: -2 }}
                          className="flex items-center gap-3 px-5 py-3 rounded-full bg-surface/30 hover:bg-surface/60 border border-border/50 hover:border-border transition-all cursor-default group"
                        >
                          <div className="text-text-secondary group-hover:text-foreground transition-colors">
                            {item.icon}
                          </div>
                          <span className="text-sm text-text-secondary group-hover:text-foreground transition-colors">
                            {item.name}
                          </span>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p className="text-sm">{item.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Tagline */}
            <ScrollAnimationWrapper delay={0.4} className="mt-12 sm:mt-16">
              <p className="text-center text-text-secondary text-lg sm:text-xl font-light italic">
                From experimentation to production-ready GenAI systems.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default Writing;
