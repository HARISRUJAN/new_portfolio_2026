import { Users, Award, Lightbulb, ExternalLink, GraduationCap, Heart } from 'lucide-react';

const Speaking = () => {
  const mentorshipStats = [
    {
      number: '50+',
      label: 'Professionals Trained',
      icon: <Users className="w-6 h-6" />
    },
    {
      number: '5+',
      label: 'Career Transitions',
      icon: <Award className="w-6 h-6" />
    },
    {
      number: '5+',
      label: 'Companies Consulted',
      icon: <Lightbulb className="w-6 h-6" />
    }
  ];

  const mentorshipAreas = [
    'Generative AI Fundamentals',
    'Prompt Engineering',
    'Model Fine-tuning',
    'AI Product Strategy',
    'Resume & Portfolio Building',
    'Career Transition Guidance',
    'Multi-Agent Systems',
    'RAG Implementation'
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Ethical AI Adoption',
      description: 'Committed to raising awareness about responsible AI development and supporting open-source initiatives'
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Education & Community',
      description: 'Active mentor and guest speaker at universities and tech communities worldwide'
    }
  ];

  return (
    <section id="speaking" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-display font-bold text-primary mb-6">Mentorship & Community</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Empowering the next generation of AI product leaders through education and mentoring
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Stats & Topics */}
            <div className="slide-up">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {mentorshipStats.map((stat, index) => (
                  <div key={index} className="card-interactive p-6 text-center">
                    <div className="w-12 h-12 bg-accent-blue-soft rounded-xl flex items-center justify-center text-accent-blue mx-auto mb-3">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-xs text-text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Mentorship Topics */}
              <div className="card-premium p-8">
                <h3 className="text-xl font-semibold text-primary mb-6">Training Topics</h3>
                <div className="grid grid-cols-2 gap-3">
                  {mentorshipAreas.map((topic, index) => (
                    <div key={index} className="flex items-center text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mr-2 flex-shrink-0"></div>
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Values & CTA */}
            <div className="slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="card-premium p-8 h-full flex flex-col">
                <h3 className="text-xl font-semibold text-primary mb-6">Mission & Values</h3>
                
                <div className="space-y-6 flex-1">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent-gold-soft rounded-xl flex items-center justify-center text-accent-gold flex-shrink-0">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">{value.title}</h4>
                        <p className="text-sm text-text-secondary">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-text-muted text-sm mb-4">
                    Looking for AI mentorship or consulting?
                  </p>
                  <a
                    href="mailto:harisrujan2605@gmail.com"
                    className="btn-hero w-full group"
                  >
                    Get in Touch
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaking;
