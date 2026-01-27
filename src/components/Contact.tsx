import { Mail, Linkedin, ExternalLink, MessageCircle } from 'lucide-react';
const Contact = () => {
  const contactMethods = [{
    name: 'LinkedIn',
    handle: '@anjalisharmaaa',
    url: 'https://linkedin.com/in/anjalisharmaaa',
    icon: <Linkedin className="w-6 h-6" />,
    color: 'from-blue-500 to-blue-600',
    description: 'Connect for professional discussions'
  }, {
    name: 'Newsletter',
    handle: 'anjalisharma.substack.com',
    url: 'https://anjalisharma.substack.com',
    icon: <Mail className="w-6 h-6" />,
    color: 'from-accent-gold to-orange-500',
    description: 'Weekly insights on AI & Product'
  }, {
    name: 'Mentorship',
    handle: 'topmate.io/anjalisharma',
    url: 'https://topmate.io/anjalisharma',
    icon: <MessageCircle className="w-6 h-6" />,
    color: 'from-accent-blue to-purple-500',
    description: '1:1 sessions for career growth'
  }];
  return <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-display font-bold text-primary mb-6">Let's Connect</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">Ready to discuss AI products, career growth, or collaboration opportunities?</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Methods */}
            <div className="slide-up">
              
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {contactMethods.map((method, index) => <a key={index} href={method.url} target="_blank" rel="noopener noreferrer" className="card-interactive p-6 group block">
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
                        <p className="text-accent-blue text-sm font-medium mb-2">{method.handle}</p>
                        <p className="text-text-muted text-sm">{method.description}</p>
                      </div>
                    </div>
                  </a>)}
              </div>

              {/* Direct Email */}
              <div className="mt-8 card-premium p-6">
                <h4 className="text-lg font-semibold text-primary mb-3">Direct Email</h4>
                <a href="mailto:sharma.anjali1498@gmail.com" className="flex items-center text-accent-blue hover:text-accent-gold transition-colors group">
                  <Mail className="w-5 h-5 mr-2" />
                  sharma.anjali1498@gmail.com
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-text-muted text-sm mt-2">
                  For speaking opportunities, partnerships, or detailed discussions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;