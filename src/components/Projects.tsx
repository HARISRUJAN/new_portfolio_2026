import { Brain, Search, ExternalLink, Tag, Rocket, Chrome, Trophy } from 'lucide-react';
const Projects = () => {
  const projects = [{
    name: 'Land Better Jobs',
    description: 'AI Career Copilot - SheBuilds Hackathon Winner',
    longDescription: 'Award-winning AI-powered career platform built in 48 hours. Features Job Hunter AI Agent, mock interviews with VAPI, and personalized career guidance powered by Gemini API with fine-tuned models.',
    tags: ['AI Career', 'Hackathon Winner', 'Full-Stack', 'AI Agent'],
    icon: <Rocket className="w-8 h-8" />,
    gradient: 'from-emerald-500 to-teal-600',
    metrics: '25K organic traffic • 950+ users in 3 months',
    status: 'Live Product',
    link: 'https://landbetterjobs.com/',
    features: ['Job Hunter AI Agent (Cursor + Playwright)', 'Mock Interviews (VAPI)', 'AI Copilot (Gemini API)'],
    techStack: 'Lovable, Supabase, Cursor, Playwright, VAPI, Gemini API',
    highlight: true,
    award: 'SheBuilds Hackathon Winner • Built in 48 hours'
  }, {
    name: 'Land Better Jobs Extension',
    description: 'Chrome Extension for instant job hunting',
    longDescription: 'Powerful Chrome extension to access and find all job URLs and resume from any page on the internet in just one click. Published on Chrome Web Store for seamless job hunting experience.',
    tags: ['Chrome Extension', 'Productivity', 'Job Search', 'Browser Tool'],
    icon: <Chrome className="w-8 h-8" />,
    gradient: 'from-blue-500 to-indigo-600',
    metrics: 'Published on Chrome Web Store',
    status: 'Live Product',
    link: 'https://chromewebstore.google.com/detail/land-better-jobs-launcher/nhdijcgjdanbcpajkifdmljcjgcbedph',
    features: ['One-click URL extraction', 'Resume finder', 'Works on any webpage'],
    techStack: 'Cursor',
    highlight: false
  }, {
    name: 'Neuwriter.ai',
    description: 'AI copywriter trained in neuromarketing principles for high-converting content',
    longDescription: 'Advanced AI platform that combines neuromarketing psychology with GPT models to generate copy that converts. Used by 500+ marketers worldwide.',
    tags: ['AI SaaS', 'Neuromarketing', 'Content AI', 'B2B'],
    icon: <Brain className="w-8 h-8" />,
    gradient: 'from-accent-blue to-purple-500',
    metrics: 'Lovable, Framer, Cursor, Firebase',
    status: 'Live Product',
    link: 'https://app.neuwriter.ai/',
    features: ['Psychology-based prompts', 'A/B testing insights', 'Industry templates']
  }, {
    name: 'MarketLens',
    description: 'AI agent for competitive analysis and market intelligence',
    longDescription: 'Intelligent market research tool that automatically tracks competitors, analyzes pricing strategies, and identifies market opportunities using AI.',
    tags: ['Market Intelligence', 'AI Agent', 'Analytics', 'Enterprise'],
    icon: <Search className="w-8 h-8" />,
    gradient: 'from-accent-gold to-orange-500',
    metrics: 'Lovable, Cursor, Firebase, Vercel',
    status: 'Live Product',
    link: 'https://github.com/theanjalisharmaaa/MarketLens',
    features: ['Real-time monitoring', 'Competitive insights', 'Market trends']
  }];
  const sideProjects = [{
    name: 'PM Masterclass',
    description: 'Product management curriculum for aspiring PMs',
    tags: ['Education', 'Product', 'Community']
  }, {
    name: 'AI Product Playbook',
    description: 'Strategic framework for building AI products',
    tags: ['AI Strategy', 'Framework', 'Guide']
  }];
  return <section id="projects" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-display font-bold text-primary mb-6">Projects & Ventures</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">Building AI-powered solutions that bridge technology and business impact using vibe coding tools - Lovable, Cursor, Firebase, Vercel, and Framer</p>
          </div>

          {/* Main Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => <div key={index} className="card-premium p-8 group slide-up" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <div className="text-right space-y-2">
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${project.status === 'Live Product' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                      {project.status}
                    </span>
                    {project.award && (
                      <div className="flex items-center space-x-1 text-xs font-medium text-accent-gold">
                        <Trophy className="w-3 h-3" />
                        <span>{project.award}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">{project.name}</h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">{project.longDescription}</p>

                  {/* Metrics highlight for featured projects */}
                  {project.highlight && (
                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl p-4 mb-4 border border-emerald-200 dark:border-emerald-800">
                      <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">{project.metrics}</p>
                    </div>
                  )}

                  {/* Tech Stack */}
                  {project.techStack && (
                    <p className="text-xs text-text-muted mb-4">
                      <span className="font-medium">Tech Stack:</span> {project.techStack}
                    </p>
                  )}

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {project.features.map((feature, fIndex) => <div key={fIndex} className="flex items-center space-x-2 text-sm text-text-muted">
                        <div className="w-1.5 h-1.5 bg-accent-blue rounded-full"></div>
                        <span>{feature}</span>
                      </div>)}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => <span key={tagIndex} className="inline-flex items-center px-3 py-1 text-xs font-medium bg-primary-soft text-primary rounded-full cursor-pointer hover:bg-accent-blue-soft hover:text-accent-blue transition-colors">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>)}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 btn-secondary text-center group/btn">
                    View Project
                    <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>)}
          </div>

          {/* Side Projects Grid */}
          
        </div>
      </div>
    </section>;
};
export default Projects;