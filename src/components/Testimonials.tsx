import { ArrowRight, Quote, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Harisrujan quickly understands new tasks and is incredibly attentive and supportive. He's both technically adept and genuinely kind.",
      author: "Ruchira Liyanage",
      role: "Doctoral Researcher, Marketing & Communication Lead",
      linkedin: true,
      initials: "RL"
    },
    {
      text: "Deep technical expertise with clear communication. Delivers precise, business-aligned AI solutions with confidence.",
      author: "Sameer Chakravarthy",
      role: "Group Account Director, Business & AI Consultant",
      linkedin: true,
      initials: "SC"
    },
    {
      text: "Exceptional ability to design scalable AI systems with advanced frameworks and guide teams in delivering production-ready solutions.",
      author: "Lokesh Eeranala",
      role: "Associate Director",
      linkedin: true,
      initials: "LE"
    },
    {
      text: "His supportive guidance during my internship was invaluable. His insights were key to the success of our RAG-based AI projects.",
      author: "Gurunadh Malli",
      role: "AI & Backend Engineer",
      linkedin: true,
      initials: "GM"
    },
    {
      text: "Harisrujan's mentorship provided invaluable insights at every stage, greatly enhancing project execution and understanding.",
      author: "Jyothi Swaroop K",
      role: "GenAI Intern & Associate AI/ML Engineer",
      linkedin: true,
      initials: "JK"
    },
    {
      text: "Exceptional technical expertise and innovative problem-solving skills. Consistently contributes high-quality work.",
      author: "Uma Somanapalli",
      role: "Technology Lead & Data Scientist",
      linkedin: true,
      initials: "US"
    }
  ];

  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 6);

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <motion.div 
      className="glass-card-elevated rounded-2xl p-4 sm:p-6 flex-shrink-0 w-72 sm:w-80 h-52 sm:h-56 mx-2 sm:mx-3 flex flex-col group"
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-accent-blue/40" />
          {testimonial.linkedin && (
            <Linkedin className="w-4 h-4 text-accent-blue" />
          )}
        </div>
        <p className="text-text-secondary text-xs sm:text-sm leading-relaxed line-clamp-3 flex-1">
          "{testimonial.text}"
        </p>
      </div>
      <div className="mt-3 sm:mt-4 pt-3 border-t border-border flex items-center gap-3">
        <Avatar className="w-9 h-9 sm:w-10 sm:h-10 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
          <AvatarFallback className="bg-primary/10 text-primary text-xs sm:text-sm font-semibold">
            {testimonial.initials}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="font-semibold text-foreground text-xs sm:text-sm truncate">{testimonial.author}</p>
          <p className="text-text-muted text-[10px] sm:text-xs truncate">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <ScrollAnimationWrapper className="text-center mb-10 sm:mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4 sm:mb-6"
            >
              <Linkedin className="w-4 h-4 text-accent-blue" />
              <span className="text-xs sm:text-sm font-medium text-text-secondary">LinkedIn Recommendations</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4 sm:mb-6">
              What <span className="text-gradient">Colleagues Say</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto px-4">
              Real testimonials from professionals I've worked with and mentored
            </p>
          </ScrollAnimationWrapper>

          <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-16">
            {/* First Row - Scroll Right */}
            {/* First Row - Scroll Right */}
            <div className="relative overflow-hidden py-4">
              <div className="flex animate-scroll-right hover:pause-animation">
                {[...firstRow, ...firstRow, ...firstRow].map((testimonial, index) => (
                  <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>

            {/* Second Row - Scroll Left */}
            <div className="relative overflow-hidden py-4">
              <div className="flex animate-scroll-left hover:pause-animation">
                {[...secondRow, ...secondRow, ...secondRow].map((testimonial, index) => (
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
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent-blue to-primary opacity-90" />
              
              {/* Animated Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                }} />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center p-6 sm:p-8 lg:p-12">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white mb-3 sm:mb-4">
                  Ready to accelerate your AI product career?
                </h3>
                <p className="text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4">
                  Let's connect and explore how I can help you grow in AI product management.
                </p>
                <motion.a
                  href="mailto:harisrujan2605@gmail.com"
                  className="inline-flex items-center bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base lg:text-lg group hover:shadow-2xl transition-shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
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
