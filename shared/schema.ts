import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User Schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  password: text("password").notNull(),
  avatar: text("avatar"),
  bio: text("bio"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  email: true,
  name: true,
  password: true,
  avatar: true,
  bio: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Category Schema
export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  icon: text("icon").notNull(),
  bgColor: text("bg_color").notNull(),
  textColor: text("text_color").notNull(),
});

export const insertCategorySchema = createInsertSchema(categories).pick({
  name: true,
  slug: true,
  description: true,
  icon: true,
  bgColor: true,
  textColor: true,
});

export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Category = typeof categories.$inferSelect & {
  articleCount: number;
};

// Blog Post Schema
export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url").notNull(),
  categoryId: integer("category_id").notNull(),
  authorId: integer("author_id").notNull(),
  publishedAt: timestamp("published_at").notNull(),
  isFeatured: boolean("is_featured").default(false),
  views: integer("views").default(0),
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).pick({
  title: true,
  slug: true,
  excerpt: true,
  content: true,
  imageUrl: true,
  categoryId: true,
  authorId: true,
  isFeatured: true,
});

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect & {
  category: string;
  categoryColor: string;
  author: {
    id: number;
    name: string;
    avatar: string;
  };
  publishedDate: string;
};

// Web Stories Schema
export const webStories = pgTable("web_stories", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url").notNull(),
  categoryId: integer("category_id").notNull(),
  authorId: integer("author_id").notNull(),
  publishedAt: timestamp("published_at").notNull(),
  views: integer("views").default(0),
});

export const insertWebStorySchema = createInsertSchema(webStories).pick({
  title: true,
  slug: true,
  excerpt: true,
  content: true,
  imageUrl: true,
  categoryId: true,
  authorId: true,
});

export type InsertWebStory = z.infer<typeof insertWebStorySchema>;
export type WebStory = typeof webStories.$inferSelect & {
  category: string;
  author: {
    id: number;
    name: string;
    avatar: string;
  };
};

// Comments Schema
export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  authorId: integer("author_id").notNull(),
  blogPostId: integer("blog_post_id"),
  webStoryId: integer("web_story_id"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertCommentSchema = createInsertSchema(comments).pick({
  content: true,
  authorId: true,
  blogPostId: true,
  webStoryId: true,
});

export type InsertComment = z.infer<typeof insertCommentSchema>;
export type Comment = typeof comments.$inferSelect;

// For trending list items
export type TrendingItem = {
  id: number;
  title: string;
  category: string;
  categoryColor: string;
  views: string;
};
