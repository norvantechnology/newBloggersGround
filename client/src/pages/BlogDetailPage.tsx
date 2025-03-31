import { useState, useEffect, useRef } from "react";
import { useLocation, useRoute, Link } from "wouter";
import MainLayout from "@/layouts/MainLayout";
import { useQuery } from "@tanstack/react-query";
import { BlogPost, Comment } from "@shared/schema";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { apiRequest, getQueryFn } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogDetailPage() {
  const [, params] = useRoute("/blog/:id");
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const blogId = params?.id ? parseInt(params.id) : null;
  
  const [comment, setComment] = useState("");
  const [activeTab, setActiveTab] = useState<"classic" | "best">("classic");
  const [readingProgress, setReadingProgress] = useState(0);
  const articleRef = useRef<HTMLDivElement>(null);
  
  // Redirect if no ID is provided
  useEffect(() => {
    if (!blogId) {
      navigate("/blogs");
    }
  }, [blogId, navigate]);
  
  // Track reading progress
  useEffect(() => {
    const handleScroll = () => {
      // Fallback to using the entire document if the article reference isn't available
      if (!articleRef.current) {
        const totalHeight = document.body.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        
        // Avoid division by zero
        const denominator = totalHeight - windowHeight;
        const scrollPercent = denominator > 0 ? 
          (scrollTop / denominator) * 100 : 0;
        
        setReadingProgress(Math.min(100, Math.max(0, scrollPercent)));
        return;
      }
      
      // Use the article element if it's available
      const element = articleRef.current;
      const totalHeight = element.clientHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY - element.offsetTop;
      
      // Avoid division by zero
      const denominator = totalHeight - windowHeight;
      const scrollPercent = denominator > 0 ? 
        (scrollTop / denominator) * 100 : 0;
      
      setReadingProgress(Math.min(100, Math.max(0, scrollPercent)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Fetch blog post details
  const { data: blog, isLoading, isError } = useQuery<BlogPost>({
    queryKey: ["/api/blogs", blogId],
    queryFn: async () => {
      if (!blogId) return null;
      try {
        const response = await fetch(`/api/blogs/${blogId}`);
        if (!response.ok) {
          console.error('Blog post fetch error:', response.status);
          throw new Error('Blog post not found');
        }
        const data = await response.json();
        console.log('Blog data:', data);
        return data;
      } catch (error) {
        console.error('Error fetching blog post:', error);
        throw error;
      }
    },
    enabled: !!blogId,
  });
  
  // Fetch blog comments
  const { data: comments = [], refetch: refetchComments } = useQuery<Comment[]>({
    queryKey: [`/api/blogs/${blogId}/comments`],
    queryFn: getQueryFn({ on401: "returnNull" }),
    enabled: !!blogId,
  });
  
  // Calculate reading time based on content length
  const calculateReadingTime = (): string => {
    if (!blog) return "5 min read";
    // Estimate based on 200 words per minute
    const wordCount = 1200; // Approximate word count for demo
    const readingTime = Math.ceil(wordCount / 200);
    return `${readingTime} min read`;
  };
  
  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!comment.trim()) {
      toast({
        title: "Comment cannot be empty",
        variant: "destructive",
      });
      return;
    }
    
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: comment,
          blogPostId: blogId,
          authorId: 1, // For demo, we're using a fixed author ID
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to add comment");
      }
      
      setComment("");
      refetchComments();
      
      toast({
        title: "Comment added successfully",
      });
    } catch (error) {
      toast({
        title: "Failed to add comment",
        variant: "destructive",
      });
    }
  };
  
  if (isLoading) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded-md w-3/4 mb-4"></div>
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-md w-1/4 mb-8"></div>
              <div className="aspect-video bg-slate-200 dark:bg-slate-700 rounded-lg mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-md w-full"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-md w-full"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-md w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
  
  if (isError || !blog) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => navigate("/blogs")}>
              Back to All Blogs
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      {/* Reading progress bar */}
      <div 
        className="reading-progress-bar" 
        style={{ width: `${readingProgress}%` }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/blogs")}
              className="group flex items-center gap-2 hover:gap-3 transition-all"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="group-hover:-translate-x-1 transition-transform"
              >
                <path d="m15 18-6-6 6-6"/>
              </svg>
              Back to Blogs
            </Button>
          </div>
          
          {/* Blog Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-10"
          >
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src={blog.imageUrl} 
                alt={blog.title}
                className="w-full h-full object-cover animate-kenburns opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 text-white">
              <Badge 
                className="mb-4 self-start" 
                style={{ backgroundColor: blog.categoryColor }}
              >
                {blog.category}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                {blog.title}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-100 mb-6 max-w-3xl">
                {blog.excerpt}
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Avatar className="border-2 border-white">
                    <AvatarImage src={blog.author?.avatar || ''} alt={blog.author?.name || 'Author'} />
                    <AvatarFallback>{blog.author?.name?.substring(0, 2) || 'AU'}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-white">{blog.author?.name || 'Anonymous'}</p>
                    <p className="text-sm text-gray-200">{blog.publishedDate} • {calculateReadingTime()}</p>
                  </div>
                </div>
                
                <div className="flex gap-4 text-sm">
                  <span className="flex items-center gap-1 text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    {blog.views || "1.2K"} views
                  </span>
                  <span className="flex items-center gap-1 text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    {comments.length} comments
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Tags */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {['ai', 'technology', 'machine learning', 'future'].map(tag => (
              <Badge key={tag} variant="outline" className="rounded-full text-xs py-1 px-3 bg-slate-100 dark:bg-slate-800">
                #{tag}
              </Badge>
            ))}
          </motion.div>
          
          {/* Content Tabs */}
          <Tabs 
            defaultValue="classic" 
            className="mb-8"
            onValueChange={(value) => setActiveTab(value as "classic" | "best")}
          >
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
              <TabsTrigger 
                value="classic" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Classic View
              </TabsTrigger>
              <TabsTrigger 
                value="best" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Best Reading
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="classic" className="pt-4">
              <div className="grid grid-cols-1 gap-8">
                {/* Blog Content */}
                <motion.div 
                  ref={articleRef}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="blog-content prose prose-lg dark:prose-invert max-w-none mb-16"
                >
                  <p className="text-xl font-medium mb-6">{blog.excerpt}</p>
                  
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, 
                    nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia,
                    nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                  </p>
                  
                  <h2>The Rise of Modern Blogging</h2>
                  
                  <p>
                    Blogging has evolved significantly over the past decade. What started as simple online diaries 
                    has transformed into powerful platforms for sharing knowledge, building communities, and even 
                    launching careers.
                  </p>
                  
                  <p>
                    Today's bloggers are not just writers but content creators who utilize various mediums 
                    including text, images, videos, and interactive elements to engage their audience.
                  </p>
                  
                  <blockquote>
                    <p>
                      "The beautiful thing about blogging is that it gives everyone a voice. Whether you're a 
                      seasoned expert or just starting out, your unique perspective matters."
                    </p>
                  </blockquote>
                  
                  <h2>Why Blogging Remains Relevant</h2>
                  
                  <p>
                    Despite the rise of social media and video platforms, blogging continues to thrive for several reasons:
                  </p>
                  
                  <ul>
                    <li>Blogs provide in-depth content that social media posts cannot accommodate</li>
                    <li>Search engines favor well-written, comprehensive blog content</li>
                    <li>Blogs establish authority and expertise in specific niches</li>
                    <li>They create valuable assets that continue to generate traffic for years</li>
                  </ul>
                  
                  <p>
                    As we look to the future, blogging will likely continue to evolve, incorporating more 
                    multimedia elements and interactive features while maintaining its core strength: 
                    thoughtful, written content that informs and inspires.
                  </p>
                </motion.div>
              </div>
            </TabsContent>
            
            <TabsContent value="best" className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Table of Contents */}
                <div className="md:col-span-1 order-2 md:order-1">
                  <div className="blog-toc">
                    <h3>Table of Contents</h3>
                    <ul>
                      <li><a href="#intro">Introduction</a></li>
                      <li><a href="#rise">The Rise of Modern Blogging</a></li>
                      <li><a href="#relevant">Why Blogging Remains Relevant</a></li>
                      <li><a href="#future">The Future of Blogging</a></li>
                    </ul>
                  </div>
                </div>
                
                {/* Blog Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="md:col-span-3 order-1 md:order-2 blog-content prose prose-lg dark:prose-invert max-w-none mb-16"
                >
                  <p id="intro" className="text-xl font-medium mb-6">{blog.excerpt}</p>
                  
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, 
                    nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia,
                    nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                  </p>
                  
                  <h2 id="rise">The Rise of Modern Blogging</h2>
                  
                  <p>
                    Blogging has evolved significantly over the past decade. What started as simple online diaries 
                    has transformed into powerful platforms for sharing knowledge, building communities, and even 
                    launching careers.
                  </p>
                  
                  <p>
                    Today's bloggers are not just writers but content creators who utilize various mediums 
                    including text, images, videos, and interactive elements to engage their audience.
                  </p>
                  
                  <blockquote>
                    <p>
                      "The beautiful thing about blogging is that it gives everyone a voice. Whether you're a 
                      seasoned expert or just starting out, your unique perspective matters."
                    </p>
                  </blockquote>
                  
                  <h2 id="relevant">Why Blogging Remains Relevant</h2>
                  
                  <p>
                    Despite the rise of social media and video platforms, blogging continues to thrive for several reasons:
                  </p>
                  
                  <ul>
                    <li>Blogs provide in-depth content that social media posts cannot accommodate</li>
                    <li>Search engines favor well-written, comprehensive blog content</li>
                    <li>Blogs establish authority and expertise in specific niches</li>
                    <li>They create valuable assets that continue to generate traffic for years</li>
                  </ul>
                  
                  <h2 id="future">The Future of Blogging</h2>
                  
                  <p>
                    As we look to the future, blogging will likely continue to evolve, incorporating more 
                    multimedia elements and interactive features while maintaining its core strength: 
                    thoughtful, written content that informs and inspires.
                  </p>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Comments Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-t dark:border-slate-700 pt-10"
          >
            <h3 className="text-2xl font-bold mb-6">Comments ({comments.length})</h3>
            
            {/* Comment Form */}
            <form onSubmit={handleSubmitComment} className="mb-10">
              <Textarea
                placeholder="Share your thoughts..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="mb-3 min-h-[100px] transition-all focus:border-primary"
              />
              <Button type="submit" className="transition-transform hover:scale-105">
                Post Comment
              </Button>
            </form>
            
            {/* Comments List */}
            <div className="space-y-6">
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <motion.div 
                    key={comment.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl"
                  >
                    <div className="flex items-start gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          {comment.authorId.toString().substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium">User {comment.authorId}</p>
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            {new Date(comment.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300">{comment.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="text-center py-6 text-slate-500 dark:text-slate-400">
                  No comments yet. Be the first to share your thoughts!
                </p>
              )}
            </div>
          </motion.div>
          
          {/* Related Articles */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="border-t dark:border-slate-700 pt-10 mt-10"
          >
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <Link 
                  href={`/blog/${blog.id === i ? blog.id + 2 : i}`} 
                  key={i}
                  className="group block"
                >
                  <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden transition-shadow hover:shadow-lg">
                    <div className="aspect-video bg-slate-100 dark:bg-slate-700 overflow-hidden">
                      <div className="w-full h-full bg-slate-200 dark:bg-slate-700 group-hover:scale-105 transition-transform duration-500"></div>
                    </div>
                    <div className="p-4">
                      <Badge variant="outline" className="mb-2 text-xs py-0 px-2">
                        {blog.category}
                      </Badge>
                      <h4 className="font-bold group-hover:text-primary transition-colors">
                        Related article title goes here
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                        A brief excerpt of the related article would go here, giving readers a glimpse of the content...
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </MainLayout>
  );
}