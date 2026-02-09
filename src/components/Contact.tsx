import { Mail, Linkedin, ExternalLink, Github, Send, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Contact = () => {
  const contactMethods = [
    {
      name: 'LinkedIn',
      handle: 'linkedin.com/in/harisrujan2605',
      url: 'https://www.linkedin.com/in/harisrujan2605/',
      icon: <Linkedin className="w-6 h-6" />,
      bgClass: 'bg-accent-blue/20',
      textClass: 'text-accent-blue',
      description: 'Connect for professional discussions'
    },
    {
      name: 'GitHub',
      handle: 'github.com/HARISRUJAN',
      url: 'https://github.com/HARISRUJAN',
      icon: <Github className="w-6 h-6" />,
      bgClass: 'bg-accent-purple/20',
      textClass: 'text-accent-purple',
      description: 'Check out my projects and code'
    },
    {
      name: 'Twitter',
      handle: 'twitter.com/bannu2605',
      url: 'https://twitter.com/bannu2605',
      icon: <Twitter className="w-6 h-6" />,
      bgClass: 'bg-accent-cyan/20',
      textClass: 'text-accent-cyan',
      description: 'Follow for AI insights'
    },
    {
      name: 'Email',
      handle: 'harisrujan2605@gmail.com',
      url: 'mailto:harisrujan2605@gmail.com',
      icon: <Mail className="w-6 h-6" />,
      bgClass: 'bg-accent-gold/20',
      textClass: 'text-accent-gold',
      description: 'For collaborations and opportunities'
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-gold/10 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <ScrollAnimationWrapper className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              <Send className="w-4 h-4 text-accent-cyan" />
              <span className="text-sm font-medium text-text-secondary">Contact</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Let's <span className="text-gradient-neon">Connect</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Open to AI product leadership roles, consulting engagements, and research collaborations
            </p>
          </ScrollAnimationWrapper>

          <div className="max-w-4xl mx-auto">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {contactMethods.map((method, index) => (
                <ScrollAnimationWrapper key={index} delay={index * 0.1} direction="scale">
                  <motion.a
                    href={method.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bento-item group block text-center h-full"
                    whileHover={{ y: -5 }}
                  >
                    <motion.div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${method.bgClass} ${method.textClass}`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      {method.icon}
                    </motion.div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h4 className="text-lg font-display font-semibold text-foreground group-hover:text-accent-cyan transition-colors">
                        {method.name}
                      </h4>
                      <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-accent-cyan group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className={`${method.textClass} text-sm font-medium mb-2 break-all`}>{method.handle}</p>
                    <p className="text-text-muted text-sm">{method.description}</p>
                  </motion.a>
                </ScrollAnimationWrapper>
              ))}
            </div>

            {/* Interests Section */}
            <ScrollAnimationWrapper delay={0.2}>
              <div className="glass-card-elevated rounded-3xl p-8">
                <h4 className="text-xl font-display font-semibold text-foreground mb-6 text-center">Currently Open To</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <motion.div 
                    className="p-6 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/20 text-center group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="font-semibold text-accent-cyan text-lg">AI Product Leadership</p>
                    <p className="text-xs text-text-muted mt-1">Full-time roles</p>
                  </motion.div>
                  <motion.div 
                    className="p-6 rounded-2xl bg-accent-gold/10 border border-accent-gold/20 text-center group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="font-semibold text-accent-gold text-lg">Consulting</p>
                    <p className="text-xs text-text-muted mt-1">GenAI integration</p>
                  </motion.div>
                  <motion.div 
                    className="p-6 rounded-2xl bg-accent-purple/10 border border-accent-purple/20 text-center group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="font-semibold text-accent-purple text-lg">Research</p>
                    <p className="text-xs text-text-muted mt-1">Multi-agent systems</p>
                  </motion.div>
                </div>
                <p className="text-text-muted text-sm mt-8 text-center">
                  For speaking opportunities, partnerships, or detailed discussions, reach out via email
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
