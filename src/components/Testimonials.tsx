import { Star, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Anjali reviewed my resume, LinkedIn, and portfolio with actionable insights for the AI era. The guidance was practical, structured, and highly relevant.",
      author: "Vijay Sehgal",
      role: "Product Manager"
    },
    {
      text: "Your valuable and deep insights in the product industry and very quick responses helped me immensely. Thank you for clearing doubts.",
      author: "Shivnandani Garg", 
      role: "Aspiring PM"
    },
    {
      text: "I got clarity on adjusting my resume and skills to the job market. Anjali highlighted mistakes and gave solutions to fix them. Super insightful.",
      author: "Priyanka Deshmukh",
      role: "Product Enthusiast"
    },
    {
      text: "The session was a game-changer. Anjali went the extra mile with job hunting tips, resume strategy, and thoughtful feedback. Highly recommended.",
      author: "Ankush Sharma",
      role: "Tech Professional"
    },
    {
      text: "The guidance was extremely helpful in starting my PM journey. Recommended resources and frameworks will be valuable for my learning.",
      author: "Student",
      role: "Career Switcher"
    },
    {
      text: "Anjali is synonymous with energy. Loved her zeal and practical approach. Amazing session.",
      author: "Shruti Totla",
      role: "Product Manager"
    },
    {
      text: "Straight to the point, easy to grasp, and incredibly useful for interview prep. Looking forward to more.",
      author: "Aryan Mehta",
      role: "Job Seeker"
    },
    {
      text: "The call was well-structured. Anjali offered insightful resume + LinkedIn analysis and practical solutions. Very efficient.",
      author: "Shubham Singh",
      role: "Professional"
    }
  ];

  const firstRow = testimonials.slice(0, 4);
  const secondRow = testimonials.slice(4, 8);

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex-shrink-0 w-80 h-64 mx-3 flex flex-col">
      <div className="flex-1 flex flex-col">
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-accent-gold fill-accent-gold" />
          ))}
        </div>
        <p className="text-text-secondary text-sm leading-relaxed line-clamp-3 flex-1">
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
              Trusted by 250+ Professionals
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              See what people are saying about their career transformation journey with me
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
                  Want to land your next role as an AI Product Manager?
                </h3>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  Book a 1:1 session to accelerate your career in AI Product Management.
                </p>
                <a 
                  href="https://topmate.io/anjalisharma" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-primary border-2 border-white hover:bg-white/90 hover:shadow-lg px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 group/btn hover:scale-105 animate-fade-in"
                  style={{ animationDelay: '0.4s' }}
                >
                  Book a Call Today
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