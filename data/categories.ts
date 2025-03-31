import { Category } from './schema';

export const categories: Category[] = [
  {
    id: 1,
    name: 'Technology',
    slug: 'technology',
    description: 'Latest news and insights about software development, programming languages, and tech trends',
    color: '#3B82F6',
    articleCount: 24,
  },
  {
    id: 2,
    name: 'Design',
    slug: 'design',
    description: 'UI/UX design principles, tools, and inspiration for creating beautiful digital experiences',
    color: '#EC4899',
    articleCount: 18,
  },
  {
    id: 3,
    name: 'Web Development',
    slug: 'web-development',
    description: 'Frontend and backend development techniques, frameworks, and best practices',
    color: '#10B981',
    articleCount: 32,
  },
  {
    id: 4,
    name: 'AI & Machine Learning',
    slug: 'ai-machine-learning',
    description: 'Artificial intelligence advances, machine learning tutorials, and practical applications',
    color: '#8B5CF6',
    articleCount: 15,
  },
  {
    id: 5,
    name: 'DevOps',
    slug: 'devops',
    description: 'Infrastructure as code, CI/CD pipelines, cloud services, and deployment strategies',
    color: '#F59E0B',
    articleCount: 10,
  },
  {
    id: 6,
    name: 'Career',
    slug: 'career',
    description: 'Career development, job searching, interviewing tips, and professional growth',
    color: '#EF4444',
    articleCount: 8,
  },
];