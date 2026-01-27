import { Mic, Users, Calendar, ExternalLink, Award, MapPin } from 'lucide-react';
const Speaking = () => {
  const speaking = [{
    event: 'AcceleratorX Program',
    title: 'GenAI for Product Managers',
    date: 'July 2025 - present',
    audience: '300+ attendees',
    location: 'Virtual',
    type: 'Mentorship'
  },{
    event: 'AI Product Management Bootcamp',
    title: 'From Idea to Product Launch using Vibe Coding',
    date: 'Sept 2025',
    audience: '200+ professionals',
    location: 'IIT BHU',
    type: 'Workshop'
  },{
    event: 'IIT Kanpur Tech Summit',
    title: 'Building AI Products That Scale',
    date: 'Aug 2025',
    audience: '500+ students',
    location: 'IIT Kanpur',
    type: 'Keynote'
  } ];
  const mentorshipStats = [{
    number: '250+',
    label: 'PMs Mentored',
    icon: <Users className="w-6 h-6" />
  }, {
    number: '5/5',
    label: 'Average Rating',
    icon: <Award className="w-6 h-6" />
  }, {
    number: '50+',
    label: 'Career Transitions',
    icon: <Calendar className="w-6 h-6" />
  }];
  const topics = ['AI Product Strategy', 'B2B SaaS Growth', 'Product-Market Fit', 'Career in Product Management', 'GenAI Implementation', 'Resume Building'];
  return <section id="speaking" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-display font-bold text-primary mb-6">Speaking & Mentorship</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Sharing knowledge and empowering the next generation of product leaders
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Speaking Engagements */}
            <div className="slide-up">
              <div className="flex items-center mb-8">
                <Mic className="w-8 h-8 text-accent-blue mr-3" />
                <h3 className="text-2xl font-semibold text-primary">Recent Speaking</h3>
              </div>

              <div className="space-y-6">
                {speaking.map((talk, index) => <div key={index} className="card-interactive p-6 group">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-1 group-hover:text-accent-blue transition-colors">
                          {talk.title}
                        </h4>
                        <p className="text-accent-gold font-medium text-sm">{talk.event}</p>
                      </div>
                      <span className={`px-3 py-1 text-xs rounded-full font-medium ${talk.type === 'Keynote' ? 'bg-accent-blue-soft text-accent-blue' : talk.type === 'Workshop' ? 'bg-accent-gold-soft text-accent-gold' : 'bg-primary-soft text-primary'}`}>
                        {talk.type}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm text-text-muted">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {talk.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {talk.location}
                      </div>
                      <div className="flex items-center col-span-2">
                        <Users className="w-4 h-4 mr-2" />
                        {talk.audience}
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>

            {/* Mentorship */}
            <div className="slide-up" style={{
            animationDelay: '0.2s'
          }}>
              <div className="card-premium p-8 h-full">
                <div className="flex items-center mb-8">
                  <Users className="w-8 h-8 text-accent-gold mr-3" />
                  <h3 className="text-2xl font-semibold text-primary">Mentorship Program</h3>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {mentorshipStats.map((stat, index) => <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-accent-blue-soft rounded-xl flex items-center justify-center text-accent-blue mx-auto mb-3">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                      <div className="text-xs text-text-muted">{stat.label}</div>
                    </div>)}
                </div>

                {/* Topics */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-primary mb-4">Mentorship Topics</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {topics.map((topic, index) => <div key={index} className="flex items-center text-sm text-text-secondary">
                        <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mr-2 flex-shrink-0"></div>
                        {topic}
                      </div>)}
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-4">
                  <a href="https://topmate.io/anjalisharma" target="_blank" rel="noopener noreferrer" className="btn-hero w-full group">
                    Book 1:1 Session
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <div className="text-center">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Speaking Availability */}
          
        </div>
      </div>
    </section>;
};
export default Speaking;