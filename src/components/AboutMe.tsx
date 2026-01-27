import { Brain, Users, Briefcase, Target, Cpu, Database } from 'lucide-react';

const AboutMe = () => {
  const focusAreas = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Full-cycle AI Execution',
      description: 'Led and delivered 5+ AI projects across NLP, RAG systems, process automation and HR analytics',
      gradient: 'from-accent-blue to-purple-500'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Multi-Agent Systems',
      description: 'Expert in LangChain, LangGraph, HuggingFace, and LLM agent orchestration',
      gradient: 'from-accent-gold to-orange-500'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Mentorship & Training',
      description: 'Trained 50+ professionals on GenAI, helped 5+ transition into AI product roles',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Company Transformation',
      description: 'Consulted 5+ companies to architect and modernize solutions with AI',
      gradient: 'from-primary to-primary/70'
    }
  ];

  const tools = [
    'Python', 'SQL', 'Power BI', 'R', 'MATLAB', 'SpaCy', 'Streamlit', 
    'LangGraph', 'HuggingFace', 'LangChain', 'Qdrant', 'Azure OpenAI'
  ];

  return (
    <section id="about" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-display font-bold text-primary mb-6">About & Focus</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Passionate about making AI accessible and responsible, from discovery to deployment. 
              Using my skills to uplift peers and juniors starting their tech journey through education and mentoring.
            </p>
          </div>

          {/* Focus Areas Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="card-interactive p-8 group slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${area.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6`}>
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{area.title}</h3>
                <p className="text-text-secondary leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="card-premium p-8 slide-up">
            <div className="flex items-center mb-6">
              <Database className="w-8 h-8 text-accent-blue mr-3" />
              <h3 className="text-2xl font-semibold text-primary">Languages & Tools</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-accent-blue-soft text-accent-blue rounded-full text-sm font-medium hover:bg-accent-blue hover:text-white transition-colors cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
