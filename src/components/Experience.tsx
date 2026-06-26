import { Building2, Users, TrendingUp, ArrowRight, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

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
      icon: <GraduationCap className="w-5 h-5" />,
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
      icon: <Building2 className="w-5 h-5" />,
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
      icon: <TrendingUp className="w-5 h-5" />,
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
      icon: <Users className="w-5 h-5" />,
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <ScrollAnimationWrapper className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">
              Experience <span className="text-gradient">Highlights</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              2+ years of building AI-powered products across NLP, multi-agent systems, and HR tech
            </p>
          </ScrollAnimationWrapper>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <ScrollAnimationWrapper key={index} delay={index * 0.1}>
                  <motion.div
                    className="relative pl-0 md:pl-16 group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 top-8 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary hidden md:flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>

                    {/* Card */}
                    <div className="bg-card rounded-2xl border border-border p-6 lg:p-8 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                      {/* Header Row */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            {exp.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-display font-bold text-foreground">{exp.company}</h3>
                            <p className="text-sm font-medium text-primary">{exp.role}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-text-muted bg-surface px-3 py-1 rounded-full">{exp.period}</span>
                          <span className="text-sm font-bold text-primary">{exp.metrics}</span>
                        </div>
                      </div>

                      <p className="text-text-secondary text-sm mb-4">{exp.description}</p>

                      {/* Achievements */}
                      <div className="grid sm:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start space-x-2 group/item">
                            <ArrowRight className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0 opacity-60 group-hover/item:opacity-100 transition-opacity" />
                            <span className="text-xs text-text-secondary leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
