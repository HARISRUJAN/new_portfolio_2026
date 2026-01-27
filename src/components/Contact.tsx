import { Mail, Linkedin, ExternalLink, Github } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      name: 'LinkedIn',
      handle: 'linkedin.com/in/harisrujanc',
      url: 'https://linkedin.com/in/harisrujanc',
      icon: <Linkedin className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      description: 'Connect for professional discussions'
    },
    {
      name: 'GitHub',
      handle: 'github.com/harisrujanc',
      url: 'https://github.com/harisrujanc',
      icon: <Github className="w-6 h-6" />,
      color: 'from-gray-700 to-gray-900',
      description: 'Check out my projects and code'
    },
    {
      name: 'Email',
      handle: 'harisrujan2605@gmail.com',
      url: 'mailto:harisrujan2605@gmail.com',
      icon: <Mail className="w-6 h-6" />,
      color: 'from-accent-gold to-orange-500',
      description: 'For collaborations and opportunities'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-display font-bold text-primary mb-6">Let's Connect</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Open to AI product leadership roles, consulting engagements, and research collaborations
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Methods */}
            <div className="slide-up">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-interactive p-6 group block"
                  >
                    <div className="text-center">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto mb-4`}>
                        {method.icon}
                      </div>
                      <div>
                        <div className="flex items-center justify-center mb-2">
                          <h4 className="text-lg font-semibold text-primary group-hover:text-accent-blue transition-colors mr-2">
                            {method.name}
                          </h4>
                          <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-accent-blue group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-accent-blue text-sm font-medium mb-2 break-all">{method.handle}</p>
                        <p className="text-text-muted text-sm">{method.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Interests Section */}
              <div className="card-premium p-8">
                <h4 className="text-lg font-semibold text-primary mb-4">Currently Open To</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-accent-blue-soft rounded-xl text-center">
                    <p className="font-medium text-accent-blue">AI Product Leadership</p>
                    <p className="text-xs text-text-muted mt-1">Full-time roles</p>
                  </div>
                  <div className="p-4 bg-accent-gold-soft rounded-xl text-center">
                    <p className="font-medium text-accent-gold">Consulting</p>
                    <p className="text-xs text-text-muted mt-1">GenAI integration</p>
                  </div>
                  <div className="p-4 bg-primary-soft rounded-xl text-center">
                    <p className="font-medium text-primary">Research</p>
                    <p className="text-xs text-text-muted mt-1">Multi-agent systems</p>
                  </div>
                </div>
                <p className="text-text-muted text-sm mt-6 text-center">
                  For speaking opportunities, partnerships, or detailed discussions, reach out via email
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
