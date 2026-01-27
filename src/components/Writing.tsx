import { Code, Database, Brain, Cpu, Cloud, Terminal } from 'lucide-react';

const Writing = () => {
  const skillCategories = [
    {
      title: 'Programming & Data',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'R', 'SQL', 'Power BI', 'MATLAB'],
      gradient: 'from-accent-blue to-purple-500'
    },
    {
      title: 'AI & NLP',
      icon: <Brain className="w-6 h-6" />,
      skills: ['HuggingFace Transformers', 'LangChain/LangGraph', 'Qdrant', 'SpaCy', 'Ollama', 'RAG', 'LLM Orchestration'],
      gradient: 'from-accent-gold to-orange-500'
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['Azure OpenAI', 'Azure ML', 'Streamlit', 'API Integration'],
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Project Management',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['Agile/Scrum', 'Stakeholder Collaboration', 'Cross-functional Leadership', 'B2B SaaS'],
      gradient: 'from-primary to-primary/70'
    }
  ];

  const impactAreas = [
    { area: 'Requirement Engineering', icon: <Database className="w-5 h-5" /> },
    { area: 'HR Tech', icon: <Cpu className="w-5 h-5" /> },
    { area: 'Healthcare', icon: <Brain className="w-5 h-5" /> },
    { area: 'Process Automation', icon: <Terminal className="w-5 h-5" /> }
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-display font-bold text-primary mb-6">Skills & Tools</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Technical expertise spanning AI/ML, cloud platforms, and product management
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="card-interactive p-8 group slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-accent-blue-soft text-accent-blue rounded-lg text-sm font-medium hover:bg-accent-blue hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Impact Areas */}
          <div className="card-premium p-8 slide-up">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Impact Areas</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {impactAreas.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl hover:bg-accent-blue-soft transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent-gold-soft rounded-xl flex items-center justify-center text-accent-gold mx-auto mb-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <p className="text-sm font-medium text-text-secondary">{item.area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Writing;
