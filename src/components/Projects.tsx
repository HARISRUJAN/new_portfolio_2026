import { Brain, Search, Tag, Bot, BarChart3, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Projects = () => {
  const projects = [
    {
      name: 'Multi-Agent SRS Validation System',
      description: 'LLM-powered requirement validation with digital twins',
      longDescription: 'Built at GPT-Lab to automate software requirement reviews using large language models, retrieval-augmented generation, and digital twins. Simulates Developer, Scrum Master, and PM personas for stakeholder-like reviews.',
      tags: ['Multi-Agent', 'LLM', 'RAG', 'Digital Twins'],
      icon: <Bot className="w-7 h-7" />,
      metrics: '85% validation accuracy • 70% time savings',
      status: 'Active Research',
      features: ['ISO/IEC/IEEE-based assessment', 'Automated scoring system', 'Real-time Streamlit dashboard'],
      techStack: 'LangChain, LangGraph, Streamlit, Azure OpenAI, Qdrant',
      highlight: true
    },
    {
      name: 'AI Profile-Job Matching Engine',
      description: 'NLP-powered recruitment automation tool',
      longDescription: 'Designed an internal profile-job matching tool using SpaCy and semantic similarity techniques. Streamlined talent acquisition with NLP pipelines and intelligent candidate search.',
      tags: ['NLP', 'SpaCy', 'HR Tech', 'Semantic Search'],
      icon: <Search className="w-7 h-7" />,
      metrics: '25% accuracy improvement • 40% faster shortlisting',
      status: 'Production',
      features: ['Semantic similarity matching', 'Natural language queries', 'Rule-based filtering'],
      techStack: 'Python, SpaCy, SQL, Power BI',
      highlight: true
    },
    {
      name: 'Analytics Dashboards & Pipelines',
      description: 'Data visualization for HR metrics and KPIs',
      longDescription: 'Built comprehensive data visualization tools in Streamlit and Power BI to track HR metrics, process efficiency, and product KPIs for cross-functional teams.',
      tags: ['Data Viz', 'Power BI', 'Streamlit', 'Analytics'],
      icon: <BarChart3 className="w-7 h-7" />,
      metrics: 'Cross-functional impact',
      status: 'Production',
      features: ['Real-time metrics tracking', 'Interactive visualizations', 'Automated reporting'],
    },
    {
      name: 'GenAI Product Consulting',
      description: 'AI integration for enterprise clients',
      longDescription: 'Consulted for multiple companies to integrate generative AI into existing products, focusing on chatbots, content generation, analytics dashboards, and agent-oriented automation workflows.',
      tags: ['GenAI', 'Consulting', 'Chatbots', 'Automation'],
      icon: <MessageSquare className="w-7 h-7" />,
      metrics: '5+ companies transformed',
      status: 'Consulting',
      features: ['Chatbot development', 'Content generation pipelines', 'Agent-oriented systems'],
    }
  ];

  return (
    <section id="projects" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <ScrollAnimationWrapper className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Projects & <span className="text-gradient">Ventures</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Building AI-powered solutions across NLP, multi-agent systems, and enterprise automation
            </p>
          </ScrollAnimationWrapper>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ScrollAnimationWrapper key={index} delay={index * 0.1}>
                <motion.div
                  className="relative bg-card rounded-2xl border border-border p-6 lg:p-8 h-full group overflow-hidden"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                        {project.icon}
                      </div>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        project.status === 'Active Research' 
                          ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' 
                          : project.status === 'Production'
                          ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                          : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">{project.name}</h3>
                    <p className="text-text-secondary text-sm mb-4 leading-relaxed">{project.longDescription}</p>

                    {/* Metrics */}
                    {project.highlight && (
                      <div className="bg-primary/5 border border-primary/10 rounded-xl p-3 mb-4">
                        <p className="text-sm font-semibold text-primary">{project.metrics}</p>
                      </div>
                    )}

                    {/* Tech Stack */}
                    {project.techStack && (
                      <p className="text-xs text-text-muted mb-4">
                        <span className="font-medium text-text-secondary">Stack:</span> {project.techStack}
                      </p>
                    )}

                    {/* Features */}
                    <div className="space-y-1.5 mb-5">
                      {project.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center space-x-2 text-xs text-text-muted">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-surface text-text-secondary rounded-lg border border-border"
                        >
                          <Tag className="w-2.5 h-2.5 mr-1 opacity-50" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
