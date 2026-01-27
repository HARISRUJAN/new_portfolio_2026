import { Star, ArrowRight } from 'lucide-react';

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
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex-shrink-0 w-80 h-64 mx-3 flex flex-col">
      <div className="flex-1 flex flex-col">
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-accent-gold fill-accent-gold" />
          ))}
        </div>
        <p className="text-text-secondary text-sm leading-relaxed line-clamp-4 flex-1">
          "{testimonial.text}"
        </p>
      </div>
      <div className="mt-4 pt-3 border-t border-gray-100">
        <p className="font-semibold text-primary text-sm">{testimonial.author}</p>
        <p className="text-text-muted text-xs">{testimonial.role}</p>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-background to-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-display font-bold text-primary mb-6">
              Trusted by 50+ Professionals
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              See what people are saying about their AI learning journey
            </p>
          </div>

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
          <div className="relative p-8 slide-up">
            {/* Gradient Background Card */}
            <div className="relative bg-gradient-to-br from-accent-gold via-accent-gold/80 to-accent-blue rounded-3xl p-12 overflow-hidden group hover:scale-105 transition-all duration-500">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 via-transparent to-accent-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-bold text-white mb-4 animate-fade-in">
                  Ready to accelerate your AI product career?
                </h3>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  Let's connect and explore how I can help you grow in AI product management.
                </p>
                <a
                  href="mailto:harisrujan2605@gmail.com"
                  className="inline-flex items-center bg-white text-primary border-2 border-white hover:bg-white/90 hover:shadow-lg px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 group/btn hover:scale-105 animate-fade-in"
                  style={{ animationDelay: '0.4s' }}
                >
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-8 left-8 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-8 right-8 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
