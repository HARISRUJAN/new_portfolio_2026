import { PenTool, ExternalLink, TrendingUp, Users } from 'lucide-react';
const Writing = () => {
  const posts = [{
    title: "How I Landed a Remote AI PM Role in 2 weeks without sending my Resume",
    excerpt: "The non-traditional job hunting process that's becoming the new normal",
    readTime: "6 min read",
    engagement: "5.2K views",
    url: "https://anjalisharma.substack.com/p/how-i-landed-a-remote-ai-pm-role-b41"
  }, {
    title: "How to start the journey of becoming an AI Product Manager in 2025?",
    excerpt: "The step-by-step roadmap and resources to break into AI Product Management",
    readTime: "5 min read",
    engagement: "4.8K views",
    url: "https://anjalisharma.substack.com/p/how-to-become-an-ai-product-manager"
  }, {
    title: "What Are the Best Tools to Build Web Apps Without Writing Code?",
    excerpt: "Introduction to vibe coding and how to choose the best tool for building",
    readTime: "3 min read",
    engagement: "3.7K views",
    url: "https://anjalisharma.substack.com/p/what-are-the-best-tools-to-build"
  }];
  const stats = [{
    label: 'Newsletter Subscribers',
    value: '5,000+',
    icon: <Users className="w-5 h-5" />
  }, {
    label: 'Published Articles',
    value: '50+',
    icon: <PenTool className="w-5 h-5" />
  }, {
    label: 'Total Views',
    value: '100K+',
    icon: <TrendingUp className="w-5 h-5" />
  }];
  return <section id="writing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-display font-bold text-primary mb-6">Writing & Newsletter</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Sharing insights on AI, Product Management, and Growth Strategy
            </p>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => <div key={index} className="text-center slide-up" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="w-12 h-12 bg-accent-blue-soft rounded-xl flex items-center justify-center text-accent-blue mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-text-muted">{stat.label}</div>
                </div>)}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Newsletter Signup */}
            <div className="lg:col-span-1">
              <div className="card-premium p-8 h-full slide-up">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-gold to-accent-blue rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    <PenTool className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Great Question Newsletter</h3>
                  <p className="text-text-secondary text-sm">
                    Get insider insights on AI, Product Strategy, and Growth tactics delivered to your inbox.
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3 text-sm">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary">AI Product Strategy insights</span>
                  </div>
                  <div className="flex items-start space-x-3 text-sm">
                    <div className="w-1.5 h-1.5 bg-accent-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary">Growth hacking case studies</span>
                  </div>
                  <div className="flex items-start space-x-3 text-sm">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary">PM career advancement tips</span>
                  </div>
                </div>

                <a href="https://anjalisharma.substack.com" target="_blank" rel="noopener noreferrer" className="btn-hero w-full group">
                  Subscribe Now
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold text-primary mb-8">Recent Posts</h3>
              <div className="space-y-6">
                {posts.map((post, index) => <a key={index} href={post.url} target="_blank" rel="noopener noreferrer" className="card-interactive p-6 group slide-up block" style={{
                animationDelay: `${0.2 + index * 0.1}s`
              }}>
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-lg font-semibold text-primary group-hover:text-accent-blue transition-colors pr-4">
                        {post.title}
                      </h4>
                      <ExternalLink className="w-5 h-5 text-text-muted group-hover:text-accent-blue group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                    
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-text-muted">
                      <span>{post.readTime}</span>
                      <span className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {post.engagement}
                      </span>
                    </div>
                   </a>)}
              </div>

              <div className="text-center mt-8">
                <a href="https://anjalisharma.substack.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-2xl bg-accent-blue text-text-inverse shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105 group">
                  View All Posts
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Writing;