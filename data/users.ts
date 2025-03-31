import { User } from './schema';

export const users: User[] = [
  {
    id: 1,
    name: 'Alex Johnson',
    email: 'alex@example.com',
    username: 'alexjohnson',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    bio: 'Tech writer and software developer with a passion for explaining complex concepts in simple terms.',
    createdAt: '2023-01-15T08:30:00Z',
  },
  {
    id: 2,
    name: 'Sophia Chen',
    email: 'sophia@example.com',
    username: 'sophiachen',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    bio: 'UI/UX designer and web accessibility advocate. I write about design systems and inclusive interfaces.',
    createdAt: '2023-02-20T10:15:00Z',
  },
  {
    id: 3,
    name: 'Marcus Williams',
    email: 'marcus@example.com',
    username: 'marcuswilliams',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    bio: 'Front-end developer specializing in React and modern JavaScript. I love building efficient user interfaces.',
    createdAt: '2023-03-05T14:45:00Z',
  },
  {
    id: 4,
    name: 'Olivia Taylor',
    email: 'olivia@example.com',
    username: 'oliviataylor',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    bio: 'Full-stack developer with a focus on Node.js and TypeScript. I write about best practices and architecture.',
    createdAt: '2023-04-12T09:20:00Z',
  },
  {
    id: 5,
    name: 'Nathan Rodriguez',
    email: 'nathan@example.com',
    username: 'nathanrodriguez',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    bio: 'DevOps engineer and cloud specialist. I share insights about infrastructure, CI/CD, and deployment strategies.',
    createdAt: '2023-05-18T11:30:00Z',
  },
];