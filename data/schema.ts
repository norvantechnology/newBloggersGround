export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  avatar: string;
  bio?: string;
  createdAt: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  color: string;
  articleCount: number;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  categoryId: number;
  userId: number;
  views: number;
  featured: boolean;
  trending: boolean;
  createdAt: string;
  
  // Joined properties
  category: string;
  categoryColor: string;
  author: {
    id: number;
    name: string;
    avatar: string;
  };
  publishedDate: string;
  timeToRead: string;
  tags: string[];
}

export interface WebStory {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  categoryId: number;
  userId: number;
  createdAt: string;
  slides: WebStorySlide[];
  
  // Joined properties
  category: string;
  author: {
    id: number;
    name: string;
    avatar: string;
  };
}

export interface WebStorySlide {
  id: number;
  storyId: number;
  imageUrl: string;
  heading: string;
  content: string;
  order: number;
}

export interface Comment {
  id: number;
  content: string;
  userId: number;
  blogPostId?: number;
  webStoryId?: number;
  parentId?: number;
  createdAt: string;
  
  // Joined properties
  author: {
    id: number;
    name: string;
    avatar: string;
  };
}

export interface TrendingItem {
  id: number;
  title: string;
  slug: string;
  category: string;
  categoryColor: string;
  views: string;
}