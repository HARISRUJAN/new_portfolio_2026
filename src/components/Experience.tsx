import { Building2, Users, TrendingUp, Target, ArrowRight } from 'lucide-react';
const Experience = () => {
  const experiences = [{
    company: 'Mesha',
    role: 'AI Product Manager',
    period: '2025 - Present',
    description: 'Led product strategy for fintech platform serving 50K+ users',
    achievements: ['Built prototypes using Lovable, Cursor, and vibe coding', 'Automated workflows and GTM with best-in-class AI tools', 'Led cross-functional team of engineers, sales and business'],
    metrics: '5x delivery',
    icon: <TrendingUp className="w-6 h-6" />,
    gradient: 'from-accent-blue to-accent-blue/70'
  }, {
    company: 'Emitrr',
    role: 'Founding Product Manager',
    period: '2024 - 2025',
    description: 'Building next-gen AI solutions for enterprise clients',
    achievements: ['Designed AI workflows reducing manual work by 60%', 'Scaled product from MVP to enterprise-ready platform', 'Managed product roadmap for $2M+ ARR potential'],
    metrics: '40% growth',
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-accent-gold to-accent-gold/70'
  }, {
    company: 'Bajaj Finserv Health',
    role: 'Senior Product Manager',
    period: '2021 - 2024',
    description: 'Drove digital transformation in healthcare fintech',
    achievements: ['11 crore revenue impact through product optimization', 'Launched insurance tech platform serving 1M+ users', 'Led product analytics and data-driven decision making'],
    metrics: '₹11Cr impact',
    icon: <Building2 className="w-6 h-6" />,
    gradient: 'from-primary to-primary/70'
  }, {
    company: 'Google WTM & AcceleratorX',
    role: 'Community & Mentorship',
    period: '2022 - Present',
    description: 'Empowering the next generation of product leaders',
    achievements: ['Mentored 250+ PMs through career transitions', 'Google Women Techmakers Fellow', 'Led product workshops at IIT Kanpur and other institutions'],
    metrics: '250+ mentees',
    icon: <Users className="w-6 h-6" />,
    gradient: 'from-accent-blue to-accent-gold'
  }];
  return <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-display font-bold text-primary mb-6">Experience Showcase</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">5+ years of scaling B2B SaaS products, from startup MVPs to enterprises</p>
          </div>

          {/* Experience Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => <div key={index} className="card-interactive p-8 group slide-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {exp.icon}
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-text-muted">{exp.period}</span>
                    <div className={`text-2xl font-bold text-transparent bg-gradient-to-r ${exp.gradient} bg-clip-text`}>
                      {exp.metrics}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-1">{exp.company}</h3>
                  <p className="text-accent-blue font-medium mb-3">{exp.role}</p>
                  <p className="text-text-secondary mb-6 leading-relaxed">{exp.description}</p>

                  {/* Achievements */}
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => <div key={achIndex} className="flex items-start space-x-3 group/item">
                        <ArrowRight className="w-4 h-4 text-accent-blue mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                        <span className="text-sm text-text-secondary">{achievement}</span>
                      </div>)}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>)}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 slide-up">
            <p className="text-text-secondary mb-6">Want to learn more about my product journey?</p>
            <a href="https://topmate.io/anjalisharma" target="_blank" rel="noopener noreferrer" className="btn-accent group">
              Book a 1:1 call with me today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Experience;