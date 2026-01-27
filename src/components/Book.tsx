import { BookOpen, Star, ShoppingCart, ExternalLink, Sparkles } from 'lucide-react';

const Book = () => {
  const highlights = [
    'Demystifies AI product strategy for aspiring PMs',
    'Practical frameworks for building AI products',
    'Side hustle strategies for tech professionals',
    'Real-world case studies and examples'
  ];

  return (
    <section id="book" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-display font-bold text-primary mb-6">Amazon Bestselling Author</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Sharing insights on AI product strategy and career growth
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Book Visual */}
            <div className="slide-up">
              <div className="relative">
                {/* Book Mockup */}
                <div className="bg-gradient-to-br from-accent-gold to-accent-blue p-12 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                    <BookOpen className="w-16 h-16 text-accent-gold mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-primary mb-2">AI Product</h3>
                    <h4 className="text-xl font-bold text-primary mb-4">Strategy Guide</h4>
                    <p className="text-text-secondary text-sm mb-6">
                      From Discovery to Deployment
                    </p>
                    <div className="text-sm text-text-muted">
                      <p className="font-medium text-primary">Harisrujan C</p>
                      <p>AI Product Architect</p>
                    </div>
                  </div>
                </div>

                {/* Achievement Badge */}
                <div className="absolute -top-4 -right-4 bg-accent-gold text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg rotate-12 animate-pulse flex items-center">
                  <Sparkles className="w-4 h-4 mr-1" />
                  Coming Soon
                </div>
              </div>
            </div>

            {/* Right Column - Book Details */}
            <div className="slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="card-premium p-8">
                <h3 className="text-3xl font-bold text-primary mb-6">AI Product Strategy Guide</h3>

                <p className="text-text-secondary leading-relaxed mb-8">
                  A comprehensive guide that demystifies AI product strategy for aspiring product managers. 
                  Learn the exact frameworks used to build successful AI products, from discovery through 
                  deployment, with practical insights on side hustles for tech professionals.
                </p>

                {/* Highlights */}
                <div className="space-y-3 mb-8">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-accent-gold flex-shrink-0" />
                      <span className="text-text-secondary">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Recognition */}
                <div className="bg-gradient-to-r from-accent-gold/10 to-accent-blue/10 rounded-xl p-4 mb-8 border border-accent-gold/20">
                  <p className="text-sm font-semibold text-accent-gold">
                    Featured as a GenAI thought leader and product mentor
                  </p>
                  <p className="text-xs text-text-muted mt-1">
                    Recognized for bridging technology and business impact
                  </p>
                </div>

                {/* CTA */}
                <div className="space-y-4">
                  <a
                    href="mailto:harisrujan2605@gmail.com?subject=Book%20Pre-order%20Interest"
                    className="btn-hero w-full group"
                  >
                    <ShoppingCart className="mr-2 w-5 h-5" />
                    Get Notified on Launch
                    <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <p className="text-center text-sm text-text-muted">
                    Join the waitlist for early access
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
