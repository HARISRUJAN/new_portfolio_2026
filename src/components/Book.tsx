import { BookOpen, Star, ShoppingCart, ExternalLink } from 'lucide-react';
const Book = () => {
  const achievements = ['#1 Amazon Bestseller in Hot New Releases', 'Featured in Business & Entrepreneurship', '5/5 Rating by 75+ readers', '1000+ Copies Sold'];
  return <section id="book" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-display font-bold text-primary mb-6">Amazon Bestselling Book</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">Your complete guide to building profitable side hustles while keeping your job</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Book Visual */}
            <div className="slide-up">
              <div className="relative">
                {/* Book Mockup Placeholder */}
                <div className="bg-gradient-to-br from-accent-gold to-accent-blue p-12 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                    <BookOpen className="w-16 h-16 text-accent-gold mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-primary mb-2">The Side Hustle</h3>
                    <h4 className="text-xl font-bold text-primary mb-4">Revolution</h4>
                    <p className="text-text-secondary text-sm mb-6">
                      Turn Your Skills Into Profitable Ventures
                    </p>
                    <div className="text-sm text-text-muted">
                      <p className="font-medium text-primary">Anjali Sharma</p>
                      <p>Amazon Bestselling Author</p>
                    </div>
                  </div>
                </div>

                {/* Achievement Badge */}
                <div className="absolute -top-4 -right-4 bg-accent-gold text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg rotate-12 animate-pulse">
                  #1 Bestseller
                </div>
              </div>
            </div>

            {/* Right Column - Book Details */}
            <div className="slide-up" style={{
            animationDelay: '0.2s'
          }}>
              <div className="card-premium p-8">
                <h3 className="text-3xl font-bold text-primary mb-6">The Side Hustle Revolution</h3>
                
                <p className="text-text-secondary leading-relaxed mb-8">
                  A comprehensive guide that shows you how to identify, validate, and scale profitable 
                  side businesses. From AI-powered services to digital products, learn the exact 
                  frameworks I used to build multiple revenue streams.
                </p>

                {/* Achievements */}
                <div className="space-y-3 mb-8">
                  {achievements.map((achievement, index) => <div key={index} className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-accent-gold flex-shrink-0" />
                      <span className="text-text-secondary">{achievement}</span>
                    </div>)}
                </div>

                {/* What You'll Learn */}
                

                {/* CTA */}
                <div className="space-y-4">
                  <a href="https://amzn.in/d/5URifiw" target="_blank" rel="noopener noreferrer" className="btn-hero w-full group">
                    <ShoppingCart className="mr-2 w-5 h-5" />
                    Buy the Book on Amazon
                    <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <p className="text-center text-sm text-text-muted">
                    Available in Kindle and Paperback formats
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Book;