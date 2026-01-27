import { Brain, Search, ExternalLink, Tag, Rocket, Bot, BarChart3, MessageSquare } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: 'Multi-Agent SRS Validation System',
      description: 'LLM-powered requirement validation with digital twins',
      longDescription: 'Built at GPT-Lab to automate software requirement reviews using large language models, retrieval-augmented generation, and digital twins. Simulates Developer, Scrum Master, and PM personas for stakeholder-like reviews.',
      tags: ['Multi-Agent', 'LLM', 'RAG', 'Digital Twins'],
      icon: <Bot className="w-8 h-8" />,
      gradient: 'from-accent-blue to-purple-500',
      metrics: '85% validation accuracy • 70% time savings',
      status: 'Active Research',
      link: '#',
      features: ['ISO/IEC/IEEE-based assessment', 'Automated scoring system', 'Real-time Streamlit dashboard'],
      techStack: 'LangChain, LangGraph, Streamlit, Azure OpenAI, Qdrant',
      highlight: true
    },
    {
      name: 'AI Profile-Job Matching Engine',
      description: 'NLP-powered recruitment automation tool',
      longDescription: 'Designed an internal profile-job matching tool using SpaCy and semantic similarity techniques. Streamlined talent acquisition with NLP pipelines and intelligent candidate search.',
      tags: ['NLP', 'SpaCy', 'HR Tech', 'Semantic Search'],
      icon: <Search className="w-8 h-8" />,
      gradient: 'from-accent-gold to-orange-500',
      metrics: '25% accuracy improvement • 40% faster shortlisting',
      status: 'Production',
      link: '#',
      features: ['Semantic similarity matching', 'Natural language queries', 'Rule-based filtering'],
      techStack: 'Python, SpaCy, SQL, Power BI',
      highlight: true
    },
    {
      name: 'Analytics Dashboards & Pipelines',
      description: 'Data visualization for HR metrics and KPIs',
      longDescription: 'Built comprehensive data visualization tools in Streamlit and Power BI to track HR metrics, process efficiency, and product KPIs for cross-functional teams.',
      tags: ['Data Viz', 'Power BI', 'Streamlit', 'Analytics'],
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: 'from-emerald-500 to-teal-600',
      metrics: 'Cross-functional impact',
      status: 'Production',
      link: '#',
      features: ['Real-time metrics tracking', 'Interactive visualizations', 'Automated reporting']
    },
    {
      name: 'GenAI Product Consulting',
      description: 'AI integration for enterprise clients',
      longDescription: 'Consulted for multiple companies to integrate generative AI into existing products, focusing on chatbots, content generation, analytics dashboards, and agent-oriented automation workflows.',
      tags: ['GenAI', 'Consulting', 'Chatbots', 'Automation'],
      icon: <MessageSquare className="w-8 h-8" />,
      gradient: 'from-primary to-primary/70',
      metrics: '5+ companies transformed',
      status: 'Consulting',
      link: '#',
      features: ['Chatbot development', 'Content generation pipelines', 'Agent-oriented systems']
    }
  ];

  return (
    <section id="projects" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-display font-bold text-primary mb-6">Projects & Ventures</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Building AI-powered solutions across NLP, multi-agent systems, and enterprise automation
            </p>
          </div>

          {/* Main Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card-premium p-8 group slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <div className="text-right space-y-2">
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === 'Active Research' 
                        ? 'bg-blue-100 text-blue-800' 
                        : project.status === 'Production'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">{project.name}</h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">{project.longDescription}</p>

                  {/* Metrics highlight for featured projects */}
                  {project.highlight && (
                    <div className="bg-gradient-to-r from-accent-blue/10 to-purple-500/10 rounded-xl p-4 mb-4 border border-accent-blue/20">
                      <p className="text-sm font-semibold text-accent-blue">{project.metrics}</p>
                    </div>
                  )}

                  {/* Tech Stack */}
                  {project.techStack && (
                    <p className="text-xs text-text-muted mb-4">
                      <span className="font-medium">Tech Stack:</span> {project.techStack}
                    </p>
                  )}

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {project.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center space-x-2 text-sm text-text-muted">
                        <div className="w-1.5 h-1.5 bg-accent-blue rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center px-3 py-1 text-xs font-medium bg-primary-soft text-primary rounded-full cursor-pointer hover:bg-accent-blue-soft hover:text-accent-blue transition-colors"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
