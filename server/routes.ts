import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertUserSchema } from "@shared/schema";
import { zodToJsonSchema } from "zod-to-json-schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes

  // Categories
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch categories" });
    }
  });

  // Blog posts
  app.get("/api/blogs", async (req, res) => {
    try {
      const { category, sort, page, limit, search } = req.query;
      
      const options = {
        category: category as string | undefined,
        sort: sort as string | undefined,
        page: page ? parseInt(page as string) : undefined,
        limit: limit ? parseInt(limit as string) : undefined,
        search: search as string | undefined
      };
      
      const result = await storage.getBlogPosts(options);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });
  
  app.get("/api/blogs/new-arrivals", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 3;
      const blogs = await storage.getNewArrivals(limit);
      res.json(blogs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch new arrivals" });
    }
  });
  
  app.get("/api/blogs/trending/featured", async (req, res) => {
    try {
      const featured = await storage.getTrendingFeatured();
      res.json(featured);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch trending featured" });
    }
  });
  
  app.get("/api/blogs/trending/list", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 4;
      const list = await storage.getTrendingList(limit);
      res.json(list);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch trending list" });
    }
  });
  
  app.get("/api/blogs/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const blog = await storage.getBlogPostById(id);
      
      if (!blog) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      res.json(blog);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });
  
  // Web stories
  app.get("/api/web-stories", async (req, res) => {
    try {
      const { category, search } = req.query;
      
      const options = {
        category: category as string | undefined,
        search: search as string | undefined
      };
      
      const stories = await storage.getWebStories(options);
      res.json(stories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch web stories" });
    }
  });
  
  app.get("/api/web-stories/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const story = await storage.getWebStoryById(id);
      
      if (!story) {
        return res.status(404).json({ message: "Web story not found" });
      }
      
      res.json(story);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch web story" });
    }
  });
  
  // Comments
  app.get("/api/blogs/:blogId/comments", async (req, res) => {
    try {
      const blogId = parseInt(req.params.blogId);
      const comments = await storage.getCommentsByBlogPostId(blogId);
      res.json(comments);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch comments" });
    }
  });
  
  app.get("/api/web-stories/:storyId/comments", async (req, res) => {
    try {
      const storyId = parseInt(req.params.storyId);
      const comments = await storage.getCommentsByWebStoryId(storyId);
      res.json(comments);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch comments" });
    }
  });
  
  // Authentication
  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
    rememberMe: z.boolean().optional()
  });
  
  app.post("/api/auth/login", async (req, res) => {
    try {
      const result = loginSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ message: "Invalid request body", errors: result.error.errors });
      }
      
      const { email, password } = result.data;
      
      // Find user by email
      const user = await storage.getUserByEmail(email);
      
      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      
      // Remove password from the response
      const { password: _, ...userWithoutPassword } = user;
      
      res.json({ 
        message: "Login successful",
        user: userWithoutPassword
      });
    } catch (error) {
      res.status(500).json({ message: "Login failed" });
    }
  });
  
  const signupSchema = insertUserSchema.extend({
    confirmPassword: z.string()
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
  });
  
  app.post("/api/auth/signup", async (req, res) => {
    try {
      const result = signupSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ message: "Invalid request body", errors: result.error.errors });
      }
      
      const { confirmPassword, ...userData } = result.data;
      
      // Check if email already exists
      const existingUserByEmail = await storage.getUserByEmail(userData.email);
      if (existingUserByEmail) {
        return res.status(400).json({ message: "Email already in use" });
      }
      
      // Check if username already exists
      const existingUserByUsername = await storage.getUserByUsername(userData.username);
      if (existingUserByUsername) {
        return res.status(400).json({ message: "Username already in use" });
      }
      
      // Create new user
      const newUser = await storage.createUser(userData);
      
      // Remove password from the response
      const { password, ...userWithoutPassword } = newUser;
      
      res.status(201).json({
        message: "User created successfully",
        user: userWithoutPassword
      });
    } catch (error) {
      res.status(500).json({ message: "Registration failed" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
