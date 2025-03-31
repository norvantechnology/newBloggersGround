import { 
  User, InsertUser, 
  Category, InsertCategory, 
  BlogPost, InsertBlogPost, 
  WebStory, InsertWebStory,
  Comment, InsertComment
} from "../shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Category operations
  getCategories(): Promise<Category[]>;
  getCategoryBySlug(slug: string): Promise<Category | undefined>;
  getCategoryById(id: number): Promise<Category | undefined>;
  
  // Blog post operations
  getBlogPosts(options?: { category?: string; sort?: string; page?: number; limit?: number; search?: string }): Promise<{ blogs: BlogPost[]; totalPages: number }>;
  getBlogPostById(id: number): Promise<BlogPost | undefined>;
  getNewArrivals(limit?: number): Promise<BlogPost[]>;
  getTrendingFeatured(): Promise<BlogPost | undefined>;
  getTrendingList(limit?: number): Promise<any[]>;
  
  // Web story operations
  getWebStories(options?: { category?: string; search?: string }): Promise<WebStory[]>;
  getWebStoryById(id: number): Promise<WebStory | undefined>;
  
  // Comment operations
  getCommentsByBlogPostId(blogPostId: number): Promise<Comment[]>;
  getCommentsByWebStoryId(webStoryId: number): Promise<Comment[]>;
  createComment(comment: InsertComment): Promise<Comment>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private categories: Map<number, Category>;
  private blogPosts: Map<number, BlogPost>;
  private webStories: Map<number, WebStory>;
  private comments: Map<number, Comment>;
  
  private userIdCounter: number;
  private categoryIdCounter: number;
  private blogPostIdCounter: number;
  private webStoryIdCounter: number;
  private commentIdCounter: number;

  constructor() {
    this.users = new Map();
    this.categories = new Map();
    this.blogPosts = new Map();
    this.webStories = new Map();
    this.comments = new Map();
    
    this.userIdCounter = 1;
    this.categoryIdCounter = 1;
    this.blogPostIdCounter = 1;
    this.webStoryIdCounter = 1;
    this.commentIdCounter = 1;
    
    // Initialize with some data
    this.initializeData();
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username.toLowerCase() === username.toLowerCase()
    );
  }
  
  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const createdAt = new Date();
    const user: User = { ...insertUser, id, createdAt };
    this.users.set(id, user);
    return user;
  }

  // Category operations
  async getCategories(): Promise<Category[]> {
    const categories = Array.from(this.categories.values());
    return categories.map(category => ({
      ...category,
      articleCount: this.getBlogCountByCategory(category.id)
    }));
  }
  
  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    const category = Array.from(this.categories.values()).find(
      (cat) => cat.slug === slug
    );
    
    if (!category) return undefined;
    
    return {
      ...category,
      articleCount: this.getBlogCountByCategory(category.id)
    };
  }
  
  async getCategoryById(id: number): Promise<Category | undefined> {
    const category = this.categories.get(id);
    
    if (!category) return undefined;
    
    return {
      ...category,
      articleCount: this.getBlogCountByCategory(id)
    };
  }
  
  private getBlogCountByCategory(categoryId: number): number {
    return Array.from(this.blogPosts.values()).filter(
      (post) => post.categoryId === categoryId
    ).length;
  }

  // Blog post operations
  async getBlogPosts(options: { category?: string; sort?: string; page?: number; limit?: number; search?: string } = {}): Promise<{ blogs: BlogPost[]; totalPages: number }> {
    let blogs = Array.from(this.blogPosts.values());
    
    // Filter by category if provided
    if (options.category && options.category !== 'all') {
      const category = await this.getCategoryBySlug(options.category);
      if (category) {
        blogs = blogs.filter(blog => blog.categoryId === category.id);
      }
    }
    
    // Filter by search term if provided
    if (options.search) {
      const searchTerm = options.search.toLowerCase();
      blogs = blogs.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm) || 
        blog.excerpt.toLowerCase().includes(searchTerm)
      );
    }
    
    // Sort blogs based on the sort option
    const sort = options.sort || 'recent';
    switch (sort) {
      case 'recent':
        blogs.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        break;
      case 'trending':
        blogs.sort((a, b) => b.views - a.views);
        break;
      case 'popular':
        blogs.sort((a, b) => b.views - a.views);
        break;
      default:
        blogs.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    }
    
    // Calculate pagination
    const page = options.page || 1;
    const limit = options.limit || 9;
    const totalPages = Math.ceil(blogs.length / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    
    // Get the blogs for the current page
    const paginatedBlogs = blogs.slice(startIndex, endIndex);
    
    // Enrich blog posts with category and author info
    const enrichedBlogs = await Promise.all(paginatedBlogs.map(async blog => {
      const category = await this.getCategoryById(blog.categoryId);
      const author = await this.getUser(blog.authorId);
      
      return {
        ...blog,
        category: category?.name || 'Uncategorized',
        categoryColor: category?.bgColor ? `${category.bgColor} ${category.textColor}` : 'bg-gray-100 text-gray-800',
        author: {
          id: author?.id || 0,
          name: author?.name || 'Unknown Author',
          avatar: author?.avatar || 'https://i.pravatar.cc/150?img=0'
        },
        publishedDate: this.formatDate(blog.publishedAt)
      };
    }));
    
    return {
      blogs: enrichedBlogs,
      totalPages
    };
  }
  
  async getBlogPostById(id: number): Promise<BlogPost | undefined> {
    const blog = this.blogPosts.get(id);
    
    if (!blog) return undefined;
    
    const category = await this.getCategoryById(blog.categoryId);
    const author = await this.getUser(blog.authorId);
    
    return {
      ...blog,
      category: category?.name || 'Uncategorized',
      categoryColor: category?.bgColor ? `${category.bgColor} ${category.textColor}` : 'bg-gray-100 text-gray-800',
      author: {
        id: author?.id || 0,
        name: author?.name || 'Unknown Author',
        avatar: author?.avatar || 'https://i.pravatar.cc/150?img=0'
      },
      publishedDate: this.formatDate(blog.publishedAt)
    };
  }
  
  async getNewArrivals(limit: number = 3): Promise<BlogPost[]> {
    let blogs = Array.from(this.blogPosts.values());
    
    // Sort by published date (newest first)
    blogs.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    
    // Limit the results
    blogs = blogs.slice(0, limit);
    
    // Enrich blog posts with category and author info
    const enrichedBlogs = await Promise.all(blogs.map(async blog => {
      const category = await this.getCategoryById(blog.categoryId);
      const author = await this.getUser(blog.authorId);
      
      return {
        ...blog,
        category: category?.name || 'Uncategorized',
        categoryColor: category?.bgColor ? `${category.bgColor} ${category.textColor}` : 'bg-gray-100 text-gray-800',
        author: {
          id: author?.id || 0,
          name: author?.name || 'Unknown Author',
          avatar: author?.avatar || 'https://i.pravatar.cc/150?img=0'
        },
        publishedDate: this.formatDate(blog.publishedAt)
      };
    }));
    
    return enrichedBlogs;
  }
  
  async getTrendingFeatured(): Promise<BlogPost | undefined> {
    // Get blogs sorted by views (highest first)
    let blogs = Array.from(this.blogPosts.values())
      .filter(blog => blog.isFeatured)
      .sort((a, b) => b.views - a.views);
    
    if (blogs.length === 0) return undefined;
    
    const featuredBlog = blogs[0];
    const category = await this.getCategoryById(featuredBlog.categoryId);
    const author = await this.getUser(featuredBlog.authorId);
    
    return {
      ...featuredBlog,
      category: category?.name || 'Uncategorized',
      categoryColor: category?.bgColor ? `${category.bgColor} ${category.textColor}` : 'bg-gray-100 text-gray-800',
      author: {
        id: author?.id || 0,
        name: author?.name || 'Unknown Author',
        avatar: author?.avatar || 'https://i.pravatar.cc/150?img=0'
      },
      publishedDate: this.formatDate(featuredBlog.publishedAt)
    };
  }
  
  async getTrendingList(limit: number = 4): Promise<any[]> {
    // Get blogs sorted by views (highest first)
    let blogs = Array.from(this.blogPosts.values())
      .sort((a, b) => b.views - a.views)
      .slice(0, limit);
    
    // Format trending items
    const trendingItems = await Promise.all(blogs.map(async blog => {
      const category = await this.getCategoryById(blog.categoryId);
      
      return {
        id: blog.id,
        title: blog.title,
        category: category?.name || 'Uncategorized',
        categoryColor: category?.bgColor ? `${category.bgColor} ${category.textColor}` : 'bg-gray-100 text-gray-800',
        views: `${blog.views < 1000 ? blog.views : (blog.views / 1000).toFixed(1) + 'K'} views`
      };
    }));
    
    return trendingItems;
  }

  // Web story operations
  async getWebStories(options: { category?: string; search?: string } = {}): Promise<WebStory[]> {
    let stories = Array.from(this.webStories.values());
    
    // Filter by category if provided
    if (options.category && options.category !== 'all') {
      const category = await this.getCategoryBySlug(options.category);
      if (category) {
        stories = stories.filter(story => story.categoryId === category.id);
      }
    }
    
    // Filter by search term if provided
    if (options.search) {
      const searchTerm = options.search.toLowerCase();
      stories = stories.filter(story => 
        story.title.toLowerCase().includes(searchTerm) || 
        story.excerpt.toLowerCase().includes(searchTerm)
      );
    }
    
    // Sort by published date (newest first)
    stories.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    
    // Enrich web stories with category and author info
    const enrichedStories = await Promise.all(stories.map(async story => {
      const category = await this.getCategoryById(story.categoryId);
      const author = await this.getUser(story.authorId);
      
      return {
        ...story,
        category: category?.name || 'Uncategorized',
        author: {
          id: author?.id || 0,
          name: author?.name || 'Unknown Author',
          avatar: author?.avatar || 'https://i.pravatar.cc/150?img=0'
        }
      };
    }));
    
    return enrichedStories;
  }
  
  async getWebStoryById(id: number): Promise<WebStory | undefined> {
    const story = this.webStories.get(id);
    
    if (!story) return undefined;
    
    const category = await this.getCategoryById(story.categoryId);
    const author = await this.getUser(story.authorId);
    
    return {
      ...story,
      category: category?.name || 'Uncategorized',
      author: {
        id: author?.id || 0,
        name: author?.name || 'Unknown Author',
        avatar: author?.avatar || 'https://i.pravatar.cc/150?img=0'
      }
    };
  }

  // Comment operations
  async getCommentsByBlogPostId(blogPostId: number): Promise<Comment[]> {
    return Array.from(this.comments.values())
      .filter(comment => comment.blogPostId === blogPostId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  
  async getCommentsByWebStoryId(webStoryId: number): Promise<Comment[]> {
    return Array.from(this.comments.values())
      .filter(comment => comment.webStoryId === webStoryId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  
  async createComment(insertComment: InsertComment): Promise<Comment> {
    const id = this.commentIdCounter++;
    const createdAt = new Date();
    const comment: Comment = { ...insertComment, id, createdAt };
    this.comments.set(id, comment);
    return comment;
  }
  
  // Helper methods
  private formatDate(date: Date): string {
    // Format date to "May 15, 2023" format
    return new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  }
  
  // Seed data
  private initializeData() {
    // Seed users
    const users = [
      {
        id: this.userIdCounter++,
        username: 'alexjohnson',
        email: 'alex@example.com',
        name: 'Alex Johnson',
        password: 'password123',
        avatar: 'https://i.pravatar.cc/150?img=1',
        bio: 'Tech writer and AI enthusiast',
        createdAt: new Date('2023-01-15')
      },
      {
        id: this.userIdCounter++,
        username: 'sophiachen',
        email: 'sophia@example.com',
        name: 'Sophia Chen',
        password: 'password123',
        avatar: 'https://i.pravatar.cc/150?img=5',
        bio: 'Fashion blogger and designer',
        createdAt: new Date('2023-01-20')
      },
      {
        id: this.userIdCounter++,
        username: 'marcusrivera',
        email: 'marcus@example.com',
        name: 'Marcus Rivera',
        password: 'password123',
        avatar: 'https://i.pravatar.cc/150?img=8',
        bio: 'Food critic and travel blogger',
        createdAt: new Date('2023-02-05')
      },
      {
        id: this.userIdCounter++,
        username: 'jamierodriguez',
        email: 'jamie@example.com',
        name: 'Jamie Rodriguez',
        password: 'password123',
        avatar: 'https://i.pravatar.cc/150?img=3',
        bio: 'Tech reviewer and gadget enthusiast',
        createdAt: new Date('2023-02-10')
      },
      {
        id: this.userIdCounter++,
        username: 'leilakim',
        email: 'leila@example.com',
        name: 'Leila Kim',
        password: 'password123',
        avatar: 'https://i.pravatar.cc/150?img=4',
        bio: 'Productivity coach and lifestyle blogger',
        createdAt: new Date('2023-02-15')
      }
    ];
    
    users.forEach(user => this.users.set(user.id, user));
    
    // Seed categories
    const categories = [
      {
        id: this.categoryIdCounter++,
        name: 'Technology',
        slug: 'technology',
        description: 'Latest news and insights from the tech world',
        icon: 'ri-computer-line',
        bgColor: 'bg-blue-100',
        textColor: 'text-blue-800 dark:bg-blue-900/50 dark:text-blue-200'
      },
      {
        id: this.categoryIdCounter++,
        name: 'Fashion',
        slug: 'fashion',
        description: 'Style tips, trends, and fashion insights',
        icon: 'ri-shirt-line',
        bgColor: 'bg-pink-100',
        textColor: 'text-pink-800 dark:bg-pink-900/50 dark:text-pink-200'
      },
      {
        id: this.categoryIdCounter++,
        name: 'Lifestyle',
        slug: 'lifestyle',
        description: 'Wellness, relationships, and everyday living',
        icon: 'ri-heart-pulse-line',
        bgColor: 'bg-green-100',
        textColor: 'text-green-800 dark:bg-green-900/50 dark:text-green-200'
      },
      {
        id: this.categoryIdCounter++,
        name: 'Food',
        slug: 'food',
        description: 'Recipes, cooking tips, and culinary experiences',
        icon: 'ri-restaurant-line',
        bgColor: 'bg-yellow-100',
        textColor: 'text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200'
      },
      {
        id: this.categoryIdCounter++,
        name: 'Entertainment',
        slug: 'entertainment',
        description: 'Movies, music, books, and more',
        icon: 'ri-game-line',
        bgColor: 'bg-purple-100',
        textColor: 'text-purple-800 dark:bg-purple-900/50 dark:text-purple-200'
      },
      {
        id: this.categoryIdCounter++,
        name: 'Travel',
        slug: 'travel',
        description: 'Destinations, travel tips, and adventures',
        icon: 'ri-flight-takeoff-line',
        bgColor: 'bg-red-100',
        textColor: 'text-red-800 dark:bg-red-900/50 dark:text-red-200'
      },
      {
        id: this.categoryIdCounter++,
        name: 'Business',
        slug: 'business',
        description: 'Entrepreneurship, careers, and business trends',
        icon: 'ri-briefcase-line',
        bgColor: 'bg-indigo-100',
        textColor: 'text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200'
      },
      {
        id: this.categoryIdCounter++,
        name: 'Productivity',
        slug: 'productivity',
        description: 'Tips and tools for better productivity',
        icon: 'ri-rocket-line',
        bgColor: 'bg-orange-100',
        textColor: 'text-orange-800 dark:bg-orange-900/50 dark:text-orange-200'
      }
    ];
    
    categories.forEach(category => this.categories.set(category.id, category));
    
    // Seed blog posts
    const blogPosts = [
      {
        id: this.blogPostIdCounter++,
        title: 'The Future of AI: How Machine Learning is Transforming Industries',
        slug: 'future-of-ai-machine-learning-transforming-industries',
        excerpt: 'Explore how artificial intelligence is reshaping business landscapes and creating new opportunities across various sectors.',
        content: `
          <p>Artificial Intelligence (AI) and Machine Learning (ML) have moved from academic research to practical applications that impact our daily lives. From healthcare to finance, manufacturing to customer service, AI is revolutionizing how industries operate and compete.</p>
          
          <h2>Transforming Healthcare</h2>
          <p>In healthcare, AI algorithms are helping doctors diagnose diseases earlier and with greater accuracy. Machine learning models trained on vast datasets of medical images can detect patterns invisible to the human eye, potentially saving countless lives through early detection of conditions like cancer.</p>
          
          <h2>Revolutionizing Finance</h2>
          <p>Financial institutions are using AI for fraud detection, algorithmic trading, and personalized financial advice. Machine learning models can analyze transaction patterns to identify potentially fraudulent activity in real-time, protecting both companies and consumers.</p>
          
          <h2>Enhancing Manufacturing</h2>
          <p>In manufacturing, AI-powered predictive maintenance can anticipate equipment failures before they occur, reducing downtime and saving millions in lost productivity. Smart factories use computer vision and robotics to automate quality control processes with superhuman precision.</p>
          
          <h2>The Future Landscape</h2>
          <p>As AI continues to evolve, we can expect to see more industries transformed by its capabilities. However, this transformation also brings challenges related to ethics, privacy, and job displacement that society will need to address.</p>
          
          <p>What's clear is that AI is not just a technological tool but a fundamental shift in how businesses operate. Companies that successfully integrate AI into their operations will likely have a significant competitive advantage in the coming decades.</p>
        `,
        imageUrl: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        categoryId: 1, // Technology
        authorId: 1, // Alex Johnson
        publishedAt: new Date('2023-05-15'),
        isFeatured: false,
        views: 1240
      },
      {
        id: this.blogPostIdCounter++,
        title: 'Sustainable Fashion: Eco-Friendly Trends Taking Over 2023',
        slug: 'sustainable-fashion-eco-friendly-trends-2023',
        excerpt: 'Discover how the fashion industry is embracing sustainability with innovative materials and ethical practices.',
        content: `
          <p>The fashion industry has long been criticized for its environmental impact and labor practices. However, a revolution is underway as more designers, brands, and consumers prioritize sustainability.</p>
          
          <h2>Innovative Materials</h2>
          <p>One of the most exciting developments in sustainable fashion is the emergence of innovative, eco-friendly materials. From fabrics made from pineapple leaves (Piñatex) to mushroom leather, these alternatives offer the look and feel of traditional materials without the environmental impact.</p>
          
          <h2>Circular Fashion</h2>
          <p>The concept of circular fashion—where garments are designed to be reused, recycled, or biodegraded—is gaining momentum. Brands are implementing take-back programs and designing clothes with their end-of-life in mind, reducing waste and extending the lifecycle of fashion items.</p>
          
          <h2>Ethical Production</h2>
          <p>Transparency in the supply chain is becoming a priority for conscious consumers. Brands are responding by providing more information about where and how their products are made, ensuring fair labor practices and safe working conditions.</p>
          
          <h2>Consumer Mindset Shift</h2>
          <p>Perhaps the most significant change is in consumer attitudes. There's a growing movement away from fast fashion towards quality pieces that last longer. Thrifting, clothing rental, and capsule wardrobes are all trending as people seek to reduce their fashion footprint.</p>
          
          <p>As we move through 2023, sustainable fashion is no longer just a niche market—it's becoming the expectation. By supporting brands that prioritize the planet and people alongside profit, consumers are helping to shape a more sustainable future for fashion.</p>
        `,
        imageUrl: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        categoryId: 2, // Fashion
        authorId: 2, // Sophia Chen
        publishedAt: new Date('2023-05-12'),
        isFeatured: false,
        views: 950
      },
      {
        id: this.blogPostIdCounter++,
        title: 'Culinary Adventures: Exploring Global Flavors From Your Kitchen',
        slug: 'culinary-adventures-global-flavors-kitchen',
        excerpt: 'Learn how to bring international cuisine to your dining table with simple techniques and accessible ingredients.',
        content: `
          <p>You don't need to travel the world to experience its diverse culinary traditions. With some basic techniques and a sense of adventure, you can create authentic global flavors in your own kitchen.</p>
          
          <h2>Building a Global Pantry</h2>
          <p>Start by stocking your pantry with versatile international ingredients. Items like coconut milk, curry pastes, miso, various spice blends, and quality oils can form the foundation of dishes from Thai to Moroccan, Japanese to Indian.</p>
          
          <h2>Essential Techniques</h2>
          <p>Many global cuisines share fundamental cooking techniques. Learning to properly toast spices, make a sofrito or mirepoix base, or create a simple curry can unlock hundreds of recipes across different cultures.</p>
          
          <h2>Regional Specialties Made Simple</h2>
          <p>Even complex-seeming dishes can be adapted for the home cook. A simplified pad thai, weeknight-friendly paella, or quick butter chicken can capture the essence of these beloved dishes without requiring hours in the kitchen or specialty equipment.</p>
          
          <h2>Embracing Fusion</h2>
          <p>Don't be afraid to blend traditions and create your own fusion cuisine. Korean-Mexican tacos, Italian-Indian pasta, or Middle Eastern-inspired pizzas can lead to delicious discoveries that reflect your personal taste and available ingredients.</p>
          
          <p>Cooking global cuisine at home is more than just preparing a meal—it's a way to connect with cultures around the world, learn about different traditions, and bring a sense of travel and discovery to your everyday life. So grab your apron and passport to flavor—your culinary adventure awaits!</p>
        `,
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        categoryId: 3, // Lifestyle
        authorId: 3, // Marcus Rivera
        publishedAt: new Date('2023-05-10'),
        isFeatured: false,
        views: 820
      },
      {
        id: this.blogPostIdCounter++,
        title: 'The Most Anticipated Tech Gadgets of 2023',
        slug: 'most-anticipated-tech-gadgets-2023',
        excerpt: 'Our comprehensive guide to the revolutionary devices launching this year that promise to change how we interact with technology.',
        content: `
          <p>Each year brings a new wave of innovative tech products that push the boundaries of what's possible. 2023 is shaping up to be an exceptional year for gadget enthusiasts, with groundbreaking devices across multiple categories.</p>
          
          <h2>Foldable Revolution</h2>
          <p>After years of development, foldable devices are finally coming into their own. Next-generation foldable phones and tablets offer improved durability, reduced creasing, and more intuitive software experiences that take advantage of their flexible displays.</p>
          
          <h2>AR Glasses Go Mainstream</h2>
          <p>Several major tech companies are set to release augmented reality glasses that are both stylish and functional. These devices will overlay digital information onto the real world, potentially changing how we navigate, shop, learn, and entertain ourselves.</p>
          
          <h2>AI-Powered Home Assistants</h2>
          <p>The next generation of smart home devices features significantly more powerful on-device AI, enabling more complex tasks, better natural language understanding, and enhanced privacy as more processing happens locally rather than in the cloud.</p>
          
          <h2>Sustainable Tech</h2>
          <p>Environmental concerns are driving innovation in eco-friendly gadgets. From solar-powered chargers to devices made from recycled materials with modular, repairable designs, sustainability is becoming a key feature rather than an afterthought.</p>
          
          <p>As these technologies mature and become more accessible, they promise to transform our daily routines and interactions. While not every product will live up to its hype, the overall direction is clear: our devices are becoming more intelligent, seamless, and integrated into every aspect of our lives.</p>
        `,
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        categoryId: 1, // Technology
        authorId: 4, // Jamie Rodriguez
        publishedAt: new Date('2023-05-08'),
        isFeatured: true,
        views: 2400
      },
      {
        id: this.blogPostIdCounter++,
        title: '5 Wellness Practices That Can Transform Your Daily Routine',
        slug: 'wellness-practices-transform-daily-routine',
        excerpt: 'Simple but effective wellness habits that can improve your physical and mental health when incorporated into your everyday life.',
        content: `
          <p>In our busy lives, it's easy to put wellness on the back burner. However, small, consistent practices can make a significant difference to both physical and mental health over time.</p>
          
          <h2>1. Mindful Morning Routine</h2>
          <p>How you start your day sets the tone for everything that follows. Instead of immediately reaching for your phone, try spending the first 10 minutes in mindfulness. This could be meditation, gentle stretching, or simply sitting with a cup of tea and setting intentions for the day.</p>
          
          <h2>2. Strategic Movement Breaks</h2>
          <p>Sitting for long periods is detrimental to health. Set a timer to stand up and move every hour, even if just for a minute or two. Simple stretches, a quick walk, or a few bodyweight exercises can reset your body and mind.</p>
          
          <h2>3. Hydration With Intention</h2>
          <p>Rather than gulping water mindlessly, try drinking with awareness. Feel the sensation of the water, notice how your body responds, and take a moment to appreciate this simple act of nourishment.</p>
          
          <h2>4. Digital Sunset</h2>
          <p>Set a time each evening to disconnect from screens, ideally 1-2 hours before bed. This helps your brain produce melatonin naturally, leading to better sleep quality and a more rested feeling the next day.</p>
          
          <h2>5. Gratitude Practice</h2>
          <p>End each day by noting three specific things you're grateful for. Research shows this simple practice can significantly improve mental health, reduce stress, and help shift your focus from what's lacking to what's abundant in your life.</p>
          
          <p>The key to transforming your wellbeing isn't dramatic lifestyle overhauls, but rather consistent, small practices that compound over time. By incorporating even one or two of these habits into your daily routine, you may notice significant improvements in your overall sense of wellness.</p>
        `,
        imageUrl: 'https://images.unsplash.com/photo-1545205528-2d560fe6d11f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        categoryId: 3, // Lifestyle
        authorId: 5, // Leila Kim
        publishedAt: new Date('2023-05-05'),
        isFeatured: false,
        views: 1800
      },
      {
        id: this.blogPostIdCounter++,
        title: 'Understanding Web3: The Next Generation of the Internet',
        slug: 'understanding-web3-next-generation-internet',
        excerpt: 'A beginner-friendly guide to Web3 technologies, decentralized applications, and how they might reshape our online experience.',
        content: `
          <p>Web3 represents a vision for the next evolution of the internet—one built on decentralized protocols and putting users in control of their own data and digital interactions.</p>
          
          <h2>From Web1 to Web3</h2>
          <p>Web1 was read-only, with static pages and minimal interaction. Web2 brought social platforms and user-generated content but concentrated power in a few tech giants. Web3 aims to redistribute that power through decentralization.</p>
          
          <h2>Key Components of Web3</h2>
          <p>At the heart of Web3 are blockchain technologies, which provide transparent, tamper-resistant record-keeping without central authorities. Cryptocurrencies, smart contracts, and decentralized autonomous organizations (DAOs) build on this foundation to enable new economic and governance models.</p>
          
          <h2>Practical Applications</h2>
          <p>Decentralized finance (DeFi) applications are already providing banking-like services without traditional banks. Non-fungible tokens (NFTs) are revolutionizing digital ownership of art and content. Decentralized social networks are being developed where users control their data and content.</p>
          
          <h2>Challenges and Criticisms</h2>
          <p>Web3 faces significant obstacles, including technical scalability, environmental concerns with some consensus mechanisms, usability issues, and regulatory uncertainty. Critics also question whether new power structures are simply replacing old ones rather than truly democratizing the internet.</p>
          
          <p>While Web3 is still in its early stages, it represents a fascinating reimagining of the internet's underlying architecture and incentive structures. Whether it will fulfill its proponents' visions of a more equitable, user-controlled online world remains to be seen, but the experiments underway are already yielding innovative approaches to longstanding digital problems.</p>
        `,
        imageUrl: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        categoryId: 1, // Technology
        authorId: 1, // Alex Johnson
        publishedAt: new Date('2023-05-03'),
        isFeatured: false,
        views: 1500
      }
    ];
    
    blogPosts.forEach(post => this.blogPosts.set(post.id, post));
    
    // Seed web stories
    const webStories = [
      {
        id: this.webStoryIdCounter++,
        title: '7 Morning Habits of Highly Productive People',
        slug: 'morning-habits-productive-people',
        excerpt: 'Start your day right with these proven habits that boost productivity and wellbeing.',
        content: `
          <div class="story-page">
            <h1>7 Morning Habits of Highly Productive People</h1>
            <p>The way you start your morning sets the tone for the entire day.</p>
          </div>
          
          <div class="story-page">
            <h2>1. Wake up early</h2>
            <p>Most successful people start their day before 6 AM, giving them quiet time before the world demands their attention.</p>
          </div>
          
          <div class="story-page">
            <h2>2. Avoid digital devices</h2>
            <p>Resist checking email or social media for the first hour to maintain mental clarity.</p>
          </div>
          
          <div class="story-page">
            <h2>3. Hydrate immediately</h2>
            <p>Drink a glass of water first thing to rehydrate after sleep and kickstart metabolism.</p>
          </div>
          
          <div class="story-page">
            <h2>4. Move your body</h2>
            <p>Exercise, even just for 10 minutes, releases endorphins and increases energy levels.</p>
          </div>
          
          <div class="story-page">
            <h2>5. Meditate or practice mindfulness</h2>
            <p>Even 5 minutes of meditation can improve focus and reduce stress throughout the day.</p>
          </div>
          
          <div class="story-page">
            <h2>6. Set daily intentions</h2>
            <p>Define your most important tasks and set clear intentions for what you want to accomplish.</p>
          </div>
          
          <div class="story-page">
            <h2>7. Eat a nutritious breakfast</h2>
            <p>Fuel your body with protein and healthy fats to maintain energy and focus until lunch.</p>
          </div>
        `,
        imageUrl: 'https://images.unsplash.com/photo-1600081728723-e9b3c9e5d145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=80',
        categoryId: 8, // Productivity
        authorId: 5, // Leila Kim
        publishedAt: new Date('2023-05-15'),
        views: 1200
      },
      {
        id: this.webStoryIdCounter++,
        title: 'Exploring the Latest Breakthroughs in AI',
        slug: 'exploring-latest-breakthroughs-ai',
        excerpt: 'Visual tour of the most exciting recent advances in artificial intelligence and their potential impact.',
        content: `
          <div class="story-page">
            <h1>Exploring the Latest Breakthroughs in AI</h1>
            <p>Artificial intelligence is evolving at an unprecedented pace. Here are the developments changing our world.</p>
          </div>
          
          <div class="story-page">
            <h2>Large Language Models</h2>
            <p>Systems like GPT-4 can now generate human-quality text, code, and creative content with remarkable coherence.</p>
          </div>
          
          <div class="story-page">
            <h2>AI-Generated Art</h2>
            <p>Tools like DALL-E, Midjourney, and Stable Diffusion are transforming visual creation, allowing anyone to generate images from text descriptions.</p>
          </div>
          
          <div class="story-page">
            <h2>Multimodal AI</h2>
            <p>New systems can process multiple types of data—text, images, audio—simultaneously, better mimicking human understanding.</p>
          </div>
          
          <div class="story-page">
            <h2>Medical Diagnostics</h2>
            <p>AI systems now outperform human doctors in detecting certain conditions from medical images.</p>
          </div>
          
          <div class="story-page">
            <h2>Self-Driving Vehicles</h2>
            <p>Autonomous driving technology continues to advance, with several companies now offering driverless taxi services in select cities.</p>
          </div>
          
          <div class="story-page">
            <h2>AI in Scientific Discovery</h2>
            <p>AI tools like AlphaFold have revolutionized protein structure prediction, potentially accelerating drug development.</p>
          </div>
          
          <div class="story-page">
            <h2>The Future of AI</h2>
            <p>As these technologies mature, they'll continue to transform industries, create new opportunities, and raise important ethical questions we must address.</p>
          </div>
        `,
        imageUrl: 'https://images.unsplash.com/photo-1570824104453-508955ab713e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=80',
        categoryId: 1, // Technology
        authorId: 1, // Alex Johnson
        publishedAt: new Date('2023-05-12'),
        views: 980
      },
      {
        id: this.webStoryIdCounter++,
        title: 'Summer 2023 Fashion Trends You Need to Know',
        slug: 'summer-2023-fashion-trends',
        excerpt: 'Visual guide to the hottest styles, colors, and accessories for the upcoming summer season.',
        content: `
          <div class="story-page">
            <h1>Summer 2023 Fashion Trends You Need to Know</h1>
            <p>The season's most influential styles that will dominate wardrobes everywhere.</p>
          </div>
          
          <div class="story-page">
            <h2>Bold Dopamine Dressing</h2>
            <p>Vibrant, mood-boosting colors continue to trend, with electric blues, hot pinks, and sunny yellows leading the charge.</p>
          </div>
          
          <div class="story-page">
            <h2>Sheer Layers</h2>
            <p>Transparent fabrics paired with strategic undergarments create an ethereal yet wearable look for summer evenings.</p>
          </div>
          
          <div class="story-page">
            <h2>Elevated Crochet</h2>
            <p>No longer just a beach cover-up, crochet appears in sophisticated dresses, tops, and even accessories this season.</p>
          </div>
          
          <div class="story-page">
            <h2>Low-Rise Returns</h2>
            <p>The controversial Y2K trend is back, with low-rise pants and skirts making a definitive comeback.</p>
          </div>
          
          <div class="story-page">
            <h2>Maximalist Accessories</h2>
            <p>Statement jewelry, especially oversized earrings and layered necklaces, add personality to summer outfits.</p>
          </div>
          
          <div class="story-page">
            <h2>Platform Sandals</h2>
            <p>Comfort meets height with chunky platform sandals in metallic finishes and bold colors.</p>
          </div>
          
          <div class="story-page">
            <h2>Sustainable Options</h2>
            <p>Eco-conscious fashion continues to grow, with brands emphasizing natural dyes, organic materials, and ethical production.</p>
          </div>
        `,
        imageUrl: 'https://images.unsplash.com/photo-1445384763658-0400939829cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=80',
        categoryId: 2, // Fashion
        authorId: 2, // Sophia Chen
        publishedAt: new Date('2023-05-10'),
        views: 1050
      },
      {
        id: this.webStoryIdCounter++,
        title: 'Remote Work Success: Setting Up Your Perfect Home Office',
        slug: 'remote-work-success-home-office',
        excerpt: 'Transform your workspace with these practical tips for comfort, productivity, and wellbeing.',
        content: `
          <div class="story-page">
            <h1>Remote Work Success: Setting Up Your Perfect Home Office</h1>
            <p>Create a space that supports your health, focus, and productivity with these essential elements.</p>
          </div>
          
          <div class="story-page">
            <h2>Ergonomic Chair</h2>
            <p>Invest in a quality chair that supports your back and promotes good posture during long workdays.</p>
          </div>
          
          <div class="story-page">
            <h2>Proper Desk Height</h2>
            <p>Your desk should allow your arms to rest at a 90-degree angle when typing to prevent strain.</p>
          </div>
          
          <div class="story-page">
            <h2>Monitor Position</h2>
            <p>Position your screen at eye level and an arm's length away to reduce neck strain and eye fatigue.</p>
          </div>
          
          <div class="story-page">
            <h2>Natural Light</h2>
            <p>Set up near a window if possible, as natural light improves mood and regulates your circadian rhythm.</p>
          </div>
          
          <div class="story-page">
            <h2>Plants & Personal Touches</h2>
            <p>Add greenery and meaningful objects to create a space that feels pleasant and personalized.</p>
          </div>
          
          <div class="story-page">
            <h2>Cable Management</h2>
            <p>Organize cables with clips or sleeves to reduce visual clutter and prevent accidents.</p>
          </div>
          
          <div class="story-page">
            <h2>Designated Work Zone</h2>
            <p>If possible, create a separate space solely for work to help maintain boundaries between professional and personal life.</p>
          </div>
        `,
        imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=80',
        categoryId: 8, // Productivity
        authorId: 4, // Jamie Rodriguez
        publishedAt: new Date('2023-05-08'),
        views: 880
      },
      {
        id: this.webStoryIdCounter++,
        title: 'Plant-Based Eating: A Beginner\'s Guide',
        slug: 'plant-based-eating-beginners-guide',
        excerpt: 'Simple steps to incorporate more plant-based meals into your diet for health and sustainability.',
        content: `
          <div class="story-page">
            <h1>Plant-Based Eating: A Beginner's Guide</h1>
            <p>Transitioning to a more plant-focused diet doesn't have to be overwhelming. Start with these simple approaches.</p>
          </div>
          
          <div class="story-page">
            <h2>Start With What You Know</h2>
            <p>Begin by making plant-based versions of familiar meals, like veggie chili or bean burritos.</p>
          </div>
          
          <div class="story-page">
            <h2>Build a Better Plate</h2>
            <p>Aim for half your plate to be vegetables, one-quarter whole grains, and one-quarter protein (beans, tofu, tempeh).</p>
          </div>
          
          <div class="story-page">
            <h2>Explore Global Cuisines</h2>
            <p>Many traditional dishes from Mediterranean, Indian, and East Asian cuisines are naturally plant-based and full of flavor.</p>
          </div>
          
          <div class="story-page">
            <h2>Essential Nutrients</h2>
            <p>Focus on sources of protein (legumes, tofu), iron (leafy greens, lentils), calcium (fortified plant milks, tofu), and B12 (nutritional yeast or supplements).</p>
          </div>
          
          <div class="story-page">
            <h2>Meal Prep Basics</h2>
            <p>Batch cook grains, roast vegetables, and prepare sauces at the beginning of the week for easy meal assembly.</p>
          </div>
          
          <div class="story-page">
            <h2>Plant-Based Swaps</h2>
            <p>Try plant milks, nutritional yeast for cheesy flavor, and lentils or mushrooms for meaty textures in familiar recipes.</p>
          </div>
          
          <div class="story-page">
            <h2>Progress, Not Perfection</h2>
            <p>Even incorporating a few plant-based meals weekly has positive impacts on health and the environment. Start where you can and build from there.</p>
          </div>
        `,
        imageUrl: 'https://images.unsplash.com/photo-1545914595-d768c15f2708?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=80',
        categoryId: 4, // Food
        authorId: 3, // Marcus Rivera
        publishedAt: new Date('2023-05-05'),
        views: 760
      }
    ];
    
    webStories.forEach(story => this.webStories.set(story.id, story));
    
    // Seed comments
    const comments = [
      {
        id: this.commentIdCounter++,
        content: 'This article really opened my eyes to the potential of AI in healthcare. Great insights!',
        authorId: 2,
        blogPostId: 1,
        webStoryId: null,
        createdAt: new Date('2023-05-16')
      },
      {
        id: this.commentIdCounter++,
        content: 'I\'ve been trying to make my wardrobe more sustainable. These tips are exactly what I needed!',
        authorId: 5,
        blogPostId: 2,
        webStoryId: null,
        createdAt: new Date('2023-05-13')
      },
      {
        id: this.commentIdCounter++,
        content: 'The recipe for Thai curry mentioned in this article is amazing! I tried it last night and my family loved it.',
        authorId: 1,
        blogPostId: 3,
        webStoryId: null,
        createdAt: new Date('2023-05-11')
      },
      {
        id: this.commentIdCounter++,
        content: 'I can\'t wait for those AR glasses to come out. The potential applications are mind-blowing!',
        authorId: 3,
        blogPostId: 4,
        webStoryId: null,
        createdAt: new Date('2023-05-09')
      },
      {
        id: this.commentIdCounter++,
        content: 'I\'ve been implementing the digital sunset idea for a week now and my sleep has improved dramatically. Thanks for the tip!',
        authorId: 4,
        blogPostId: 5,
        webStoryId: null,
        createdAt: new Date('2023-05-06')
      }
    ];
    
    comments.forEach(comment => this.comments.set(comment.id, comment));
  }
}

export const storage = new MemStorage();
