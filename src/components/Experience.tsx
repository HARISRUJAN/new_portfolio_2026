import { Building2, Users, TrendingUp, Target, ArrowRight, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'GPT-Lab, Tampere University',
      role: 'Thesis Worker',
      period: 'Nov 2024 - Present',
      description: 'Building multi-agent SRS validation system using LLMs, RAG, and digital twins',
      achievements: [
        'Reduced requirement ambiguity by over 60% using multi-agent validation',
        'Simulated Developer, Scrum Master and PM personas with AI agents',
        'Achieved 85% validation accuracy compared to human stakeholders',
        'Built real-time Streamlit dashboard with chat interface for feedback'
      ],
      metrics: '85% accuracy',
      icon: <GraduationCap className="w-6 h-6" />,
      gradient: 'from-accent-blue to-purple-500'
    },
    {
      company: 'Ignitz Solutions',
      role: 'Data Science Engineer',
      period: 'Jan 2022 - Aug 2023',
      description: 'Designed AI-powered HR tech solutions and NLP pipelines',
      achievements: [
        'Built profile-job matching tool improving accuracy by 25%',
        'Reduced manual shortlisting time by ~40% with automation',
        'Developed NLP search engine improving retrieval speed by 30%',
        'Collaborated with HR stakeholders to refine AI tools'
      ],
      metrics: '40% faster',
      icon: <Building2 className="w-6 h-6" />,
      gradient: 'from-accent-gold to-orange-500'
    },
    {
      company: 'Ignitz Solutions',
      role: 'Data Science Intern',
      period: 'Jun 2021 - Dec 2021',
      description: 'Hands-on experience with Python data analysis and visualization',
      achievements: [
        'Performed exploratory data analysis with Matplotlib and Seaborn',
        'Created EDA dashboards and reported insights',
        'Built data pipelines for cross-functional teams'
      ],
      metrics: 'Foundation',
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: 'from-primary to-primary/70'
    },
    {
      company: 'GenAI Mentorship',
      role: 'Mentor & Consultant',
      period: '2024 - Present',
      description: 'Empowering professionals to transition into AI product roles',
      achievements: [
        'Trained 50+ professionals on generative AI',
        'Helped 5+ professionals transition into AI PM roles',
        'Consulted 5+ companies on AI architecture modernization',
        'Guest speaker at universities and tech communities'
      ],
      metrics: '50+ mentees',
      icon: <Users className="w-6 h-6" />,
      gradient: 'from-emerald-500 to-teal-600'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 tracking-tight">Experience Highlights</h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              2+ years of building AI-powered products across NLP, multi-agent systems, and HR tech
            </p>
          </div>

          {/* Experience Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="card-interactive p-8 lg:p-10 group slide-up relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-surface border-2 border-border flex items-center justify-center text-primary shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                    {exp.icon}
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-text-muted tracking-wide">{exp.period}</span>
                    <div className="text-2xl font-bold text-primary mt-1 font-display">
                      {exp.metrics}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-display font-bold text-primary mb-2 tracking-tight">{exp.company}</h3>
                  <p className="text-accent-blue font-semibold mb-4 text-base tracking-wide">{exp.role}</p>
                  <p className="text-text-secondary mb-6 leading-relaxed text-[15px]">{exp.description}</p>

                  {/* Achievements */}
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start space-x-3 group/item">
                        <ArrowRight className="w-4 h-4 text-accent-blue mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                        <span className="text-sm text-text-secondary leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 slide-up">
            <p className="text-text-secondary mb-6">Want to learn more about my AI journey?</p>
            <a
              href="mailto:harisrujan2605@gmail.com"
              className="btn-accent group"
            >
              Let's Connect
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
