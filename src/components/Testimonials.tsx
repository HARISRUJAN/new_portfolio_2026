import { Star, ArrowRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Harisrujan's GenAI training was incredibly practical. He explained complex concepts like RAG and multi-agent systems in ways that made them actionable for my work.",
      author: "AI Product Manager",
      role: "Tech Company"
    },
    {
      text: "The mentorship sessions helped me transition from data science to AI product management. His guidance on portfolio building was invaluable.",
      author: "Career Transitioner",
      role: "Former Data Scientist"
    },
    {
      text: "Working with Harisrujan on our AI integration project was transformative. His expertise in LangChain and agent systems accelerated our development significantly.",
      author: "Engineering Lead",
      role: "Startup Founder"
    },
    {
      text: "His training on prompt engineering and model fine-tuning gave our team the skills we needed to build production-ready AI features.",
      author: "Senior Developer",
      role: "Enterprise Company"
    },
    {
      text: "The career transition guidance was exactly what I needed. From resume optimization to interview prep, Harisrujan's support was comprehensive.",
      author: "New AI PM",
      role: "Recently Transitioned"
    },
    {
      text: "Harisrujan's consulting helped us modernize our legacy systems with AI. The chatbot solution he architected improved our customer satisfaction scores.",
      author: "Product Director",
      role: "B2B SaaS"
    }
  ];

  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 6);

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <motion.div 
      className="glass-card-elevated rounded-2xl p-6 flex-shrink-0 w-80 h-64 mx-3 flex flex-col group"
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="flex-1 flex flex-col">
        <Quote className="w-8 h-8 text-accent-purple/40 mb-3" />
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-accent-gold fill-accent-gold" />
          ))}
        </div>
        <p className="text-text-secondary text-sm leading-relaxed line-clamp-4 flex-1">
          "{testimonial.text}"
        </p>
      </div>
      <div className="mt-4 pt-3 border-t border-border">
        <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
        <p className="text-text-muted text-xs">{testimonial.role}</p>
      </div>
    </motion.div>
  );

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[128px]" />
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
              <Star className="w-4 h-4 text-accent-gold" />
              <span className="text-sm font-medium text-text-secondary">Testimonials</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Trusted by <span className="text-gradient-neon">50+ Professionals</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              See what people are saying about their AI learning journey
            </p>
          </ScrollAnimationWrapper>

          {/* Testimonials Rows */}
          <div className="space-y-8 mb-16">
            {/* First Row - Scroll Right */}
            <div className="relative overflow-hidden py-4">
              <div className="flex animate-scroll-right hover:pause-animation">
                {[...firstRow, ...firstRow].map((testimonial, index) => (
                  <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>

            {/* Second Row - Scroll Left */}
            <div className="relative overflow-hidden py-4">
              <div className="flex animate-scroll-left hover:pause-animation">
                {[...secondRow, ...secondRow].map((testimonial, index) => (
                  <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <ScrollAnimationWrapper>
            <motion.div 
              className="relative rounded-3xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-blue opacity-90" />
              
              {/* Animated Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                }} />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center p-12">
                <h3 className="text-3xl font-display font-bold text-white mb-4">
                  Ready to accelerate your AI product career?
                </h3>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
                  Let's connect and explore how I can help you grow in AI product management.
                </p>
                <motion.a
                  href="mailto:harisrujan2605@gmail.com"
                  className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-2xl font-semibold text-lg group hover:shadow-2xl transition-shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-8 left-8 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
              <div className="absolute bottom-8 right-8 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
