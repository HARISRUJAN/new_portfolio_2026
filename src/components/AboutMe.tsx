import { Award, TrendingUp, Users, BookOpen } from 'lucide-react';
const AboutMe = () => {
  const timeline = [{
    company: 'Emitrr',
    role: 'AI Product Manager',
    period: '2023 - Present',
    highlight: 'Scaling AI-driven B2B solutions',
    icon: <TrendingUp className="w-5 h-5" />
  }, {
    company: 'Bajaj Finserv Health',
    role: 'Senior Product Manager',
    period: '2021 - 2023',
    highlight: '11 crore revenue impact',
    icon: <Award className="w-5 h-5" />
  }, {
    company: 'Mesha',
    role: 'Product Manager',
    period: '2020 - 2021',
    highlight: '+120% sales growth',
    icon: <TrendingUp className="w-5 h-5" />
  }, {
    company: 'AcceleratorX',
    role: 'Product Strategy',
    period: '2019 - 2020',
    highlight: '5+ product launches',
    icon: <Users className="w-5 h-5" />
  }];
  return null;
};
export default AboutMe;