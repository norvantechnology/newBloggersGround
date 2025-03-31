'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { blogPosts } from '@/data/blog-posts';
import { formatDate } from '@/lib/utils';
import { Facebook, Twitter, Linkedin, Link as LinkIcon, Bookmark, Heart } from 'lucide-react';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <MainLayout>
        <div className="container-custom py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link 
            href="/blog" 
            className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </MainLayout>
    );
  }

  // Related posts (exclude current post, get 3 random posts or posts from same category)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.categoryId === post.categoryId)
    .slice(0, 3);

  return (
    <MainLayout>
      {/* Header with cover image */}
      <div className="relative h-[40vh] md:h-[60vh] bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${post.coverImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="container-custom relative h-full flex flex-col justify-end pb-12">
          <div className="max-w-3xl">
            <div 
              className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full"
              style={{ backgroundColor: post.categoryColor }}
            >
              {post.category}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center text-white/90 gap-x-4 gap-y-2">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>{post.author.name}</span>
              </div>
              <span className="text-white/70">•</span>
              <span>{post.publishedDate}</span>
              <span className="text-white/70">•</span>
              <span>{post.timeToRead} read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article content */}
      <div className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar (desktop) */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 flex flex-col items-center space-y-4">
                <button 
                  className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-foreground hover:bg-secondary/40 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook size={18} />
                </button>
                <button 
                  className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-foreground hover:bg-secondary/40 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter size={18} />
                </button>
                <button 
                  className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-foreground hover:bg-secondary/40 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin size={18} />
                </button>
                <button 
                  className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-foreground hover:bg-secondary/40 transition-colors"
                  aria-label="Copy link"
                >
                  <LinkIcon size={18} />
                </button>
                <div className="w-6 h-px bg-border my-2"></div>
                <button 
                  className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-foreground hover:bg-secondary/40 transition-colors"
                  aria-label="Bookmark this post"
                >
                  <Bookmark size={18} />
                </button>
                <button 
                  className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-foreground hover:bg-secondary/40 transition-colors"
                  aria-label="Like this post"
                >
                  <Heart size={18} />
                </button>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-8">
              <article className="prose dark:prose-invert max-w-none">
                <p className="text-xl leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              {/* Tags */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Link 
                      key={index} 
                      href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                      className="px-3 py-1 bg-secondary/20 text-foreground rounded-md hover:bg-secondary/40 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Author bio */}
              <div className="mt-8 pt-8 border-t">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Written by {post.author.name}</h3>
                    <p className="text-muted-foreground mb-4">
                      Content creator with a passion for technology and design. Sharing insights about web development, UX/UI, and the latest tech trends.
                    </p>
                    <div className="flex space-x-4">
                      <a 
                        href="#" 
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        View Profile
                      </a>
                      <a 
                        href="#" 
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        Follow
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social sharing (mobile) */}
              <div className="mt-8 pt-8 border-t lg:hidden">
                <h3 className="text-lg font-semibold mb-4">Share This Post</h3>
                <div className="flex space-x-4">
                  <button 
                    className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-foreground hover:bg-secondary/40 transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={18} />
                  </button>
                  <button 
                    className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-foreground hover:bg-secondary/40 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={18} />
                  </button>
                  <button 
                    className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-foreground hover:bg-secondary/40 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={18} />
                  </button>
                  <button 
                    className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-foreground hover:bg-secondary/40 transition-colors"
                    aria-label="Copy link"
                  >
                    <LinkIcon size={18} />
                  </button>
                </div>
              </div>

              {/* Comments section (simplified) */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-2xl font-semibold mb-6">Comments</h3>
                <div className="space-y-6">
                  <div className="border p-4 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                        <img 
                          src="https://randomuser.me/api/portraits/women/44.jpg" 
                          alt="Sarah Johnson" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium">Sarah Johnson</div>
                        <div className="text-xs text-muted-foreground">Posted on {formatDate(new Date().toISOString())}</div>
                      </div>
                    </div>
                    <p className="text-foreground">
                      Great article! I especially liked the insights on how this technology is evolving. Looking forward to more content like this.
                    </p>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                        <img 
                          src="https://randomuser.me/api/portraits/men/32.jpg" 
                          alt="Michael Chen" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium">Michael Chen</div>
                        <div className="text-xs text-muted-foreground">Posted on {formatDate(new Date().toISOString())}</div>
                      </div>
                    </div>
                    <p className="text-foreground">
                      I've been following this topic for a while now, and your perspective adds some valuable insights. Have you considered exploring the implications for smaller businesses?
                    </p>
                  </div>
                </div>

                {/* Comment form */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Add a Comment</h4>
                  <form className="space-y-4">
                    <textarea 
                      className="w-full p-3 border rounded-lg bg-background text-foreground"
                      rows={4}
                      placeholder="Write your comment here..."
                    ></textarea>
                    <button 
                      type="submit" 
                      className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Submit Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-3">
              <div className="sticky top-24 space-y-8">
                {/* Related posts */}
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Related Posts</h3>
                  <div className="space-y-4">
                    {relatedPosts.map(relatedPost => (
                      <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                        <div className="group flex gap-3">
                          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <div
                              className="w-full h-full bg-cover bg-center"
                              style={{ backgroundImage: `url(${relatedPost.coverImage})` }}
                            />
                          </div>
                          <div>
                            <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <div className="text-xs text-muted-foreground mt-1">
                              {relatedPost.publishedDate}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Subscribe to our Newsletter</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Get the latest posts and updates delivered to your inbox.
                  </p>
                  <form className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-3 py-2 rounded-md border bg-background text-foreground"
                      required
                    />
                    <button 
                      type="submit" 
                      className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}