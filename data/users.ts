import { User } from './schema';

export const users: User[] = [
  {
    id: 1,
    name: "Alex Thompson",
    email: "alex.thompson@example.com",
    username: "alexthompson",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Tech writer and AI enthusiast. Always exploring the cutting edge of technology and its impact on our future.",
    createdAt: "2022-01-15T10:00:00Z"
  },
  {
    id: 2,
    name: "Sophia Martinez",
    email: "sophia.martinez@example.com",
    username: "sophiastyle",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Fashion editor and sustainable style advocate. Passionate about the intersection of fashion, ethics, and the environment.",
    createdAt: "2022-01-20T15:30:00Z"
  },
  {
    id: 3,
    name: "Marcus Johnson",
    email: "marcus.johnson@example.com",
    username: "marcusj",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    bio: "Marketing strategist with 10+ years of experience. Specializing in consumer psychology and brand development.",
    createdAt: "2022-01-25T09:15:00Z"
  },
  {
    id: 4,
    name: "Emily Chen",
    email: "emily.chen@example.com",
    username: "emilyexplores",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    bio: "Travel writer and photographer. Has visited 45 countries and counting. Always seeking authentic cultural experiences.",
    createdAt: "2022-02-01T12:45:00Z"
  },
  {
    id: 5,
    name: "Dr. James Wilson",
    email: "james.wilson@example.com",
    username: "drwilson",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    bio: "Health researcher and sleep specialist. Committed to translating complex science into practical advice for better living.",
    createdAt: "2022-02-05T08:20:00Z"
  }
];