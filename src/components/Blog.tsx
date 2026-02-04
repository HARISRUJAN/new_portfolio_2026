import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Clock, BookOpen, ArrowRight } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import { Skeleton } from '@/components/ui/skeleton';

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  description: string;
  categories: string[];
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const MEDIUM_USERNAME = 'srujanreddy26';
  const RSS_API_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(RSS_API_URL);
        const data = await response.json();
        
        if (data.status === 'ok' && data.items) {
          const formattedPosts = data.items.slice(0, 6).map((item: any) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            thumbnail: item.thumbnail || extractImageFromContent(item.content),
            description: stripHtml(item.description).substring(0, 150) + '...',
            categories: item.categories?.slice(0, 2) || []
          }));
          setPosts(formattedPosts);
        } else {
          setError('Unable to load blog posts');
        }
      } catch (err) {
        setError('Failed to fetch blog posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  const extractImageFromContent = (content: string) => {
    const match = content?.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : '/placeholder.svg';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const estimateReadTime = (text: string) => {
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    return Math.max(1, Math.ceil(words / wordsPerMinute));
  };

  const BlogCardSkeleton = () => (
    <div className="glass-card rounded-2xl overflow-hidden">
      <Skeleton className="h-40 sm:h-48 w-full" />
      <div className="p-4 sm:p-6 space-y-3">
        <div className="flex gap-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
        </div>
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <div className="flex justify-between pt-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
    </div>
  );

  return (
    <section id="blog" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-accent-blue/5 rounded-full blur-[100px] sm:blur-[128px]" />
        <div className="absolute bottom-1/3 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-[100px] sm:blur-[128px]" />
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
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-text-secondary">Medium Articles</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4 sm:mb-6">
              Latest <span className="text-gradient">Writing</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto px-4">
              Insights on AI, product management, and technology
            </p>
          </ScrollAnimationWrapper>

          {/* Blog Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[...Array(6)].map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12 sm:py-16">
              <p className="text-text-muted mb-4">{error}</p>
              <a
                href={`https://medium.com/@${MEDIUM_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                Visit Medium Profile <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {posts.map((post, index) => (
                <ScrollAnimationWrapper key={post.link} delay={index * 0.1}>
                  <motion.a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block glass-card rounded-2xl overflow-hidden group h-full"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Thumbnail */}
                    <div className="relative h-40 sm:h-48 overflow-hidden">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex gap-2 flex-wrap">
                        {post.categories.map((cat) => (
                          <span
                            key={cat}
                            className="px-2 py-1 text-[10px] sm:text-xs font-medium bg-primary/20 text-primary rounded-full backdrop-blur-sm"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6">
                      <h3 className="font-display font-semibold text-foreground text-base sm:text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-text-muted text-xs sm:text-sm line-clamp-2 mb-3 sm:mb-4">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between text-text-muted text-[10px] sm:text-xs">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(post.pubDate)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{estimateReadTime(post.description)} min read</span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Indicator */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                  </motion.a>
                </ScrollAnimationWrapper>
              ))}
            </div>
          )}

          {/* View All Button */}
          {!loading && !error && posts.length > 0 && (
            <ScrollAnimationWrapper className="text-center mt-8 sm:mt-12">
              <motion.a
                href={`https://medium.com/@${MEDIUM_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-base group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Articles
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </ScrollAnimationWrapper>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
