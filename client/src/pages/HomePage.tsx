import { Link } from 'wouter';
import MainLayout from '@/components/layout/MainLayout';

export default function HomePage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-black/20 py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight animate-fadeIn">
              Welcome to Bloggers Ground
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fadeIn">
              A modern platform for writers, creators, and knowledge seekers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blogs" className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                Explore Blogs
              </Link>
              <Link href="/signup" className="px-6 py-3 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 font-medium">
                Join Our Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10 text-center">Explore Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Placeholder for categories. These would be dynamically populated */}
            {[
              { name: 'Technology', color: 'bg-blue-500', count: '125 Articles' },
              { name: 'Fashion', color: 'bg-pink-500', count: '98 Articles' },
              { name: 'Lifestyle', color: 'bg-green-500', count: '87 Articles' },
              { name: 'Travel', color: 'bg-yellow-500', count: '64 Articles' }
            ].map((category, index) => (
              <div key={index} className="category-card group">
                <div className={`h-32 rounded-lg flex items-center justify-center ${category.color} text-white`}>
                  <div className="text-center p-4">
                    <h3 className="text-xl font-bold mb-1 group-hover:transform group-hover:scale-105 transition-transform">
                      {category.name}
                    </h3>
                    <p className="text-sm opacity-90">{category.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Posts</h2>
            <Link href="/blogs" className="text-primary hover:underline">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for blog posts. These would be dynamically populated */}
            {[
              {
                title: 'The Future of AI in Everyday Life',
                category: 'Technology',
                excerpt: 'Explore how artificial intelligence is transforming our daily activities and what to expect in the coming years.'
              },
              {
                title: 'Sustainable Fashion Trends for 2025',
                category: 'Fashion',
                excerpt: 'Discover the eco-friendly materials and ethical practices shaping the fashion industry this year.'
              },
              {
                title: 'Working Remotely: A Digital Nomad\'s Guide',
                category: 'Lifestyle',
                excerpt: 'Tips and strategies for maintaining productivity and work-life balance while working from anywhere in the world.'
              }
            ].map((post, index) => (
              <div key={index} className="blog-card rounded-lg overflow-hidden border bg-card">
                <div className="h-48 bg-muted"></div>
                <div className="p-6">
                  <div className="text-sm text-primary mb-2">{post.category}</div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${index}`} className="text-primary hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Stories Preview Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Web Stories</h2>
            <Link href="/web-stories" className="text-primary hover:underline">
              View All
            </Link>
          </div>
          <div className="flex overflow-x-auto pb-4 space-x-4 scrollbar-hide">
            {/* Placeholder for web stories. These would be dynamically populated */}
            {[
              {
                title: '10 Must-Visit Destinations in 2025',
                category: 'Travel'
              },
              {
                title: 'A Day in the Life of a Tech Entrepreneur',
                category: 'Technology'
              },
              {
                title: 'Behind the Scenes: Fashion Week',
                category: 'Fashion'
              },
              {
                title: 'Mindfulness Practices for Busy Professionals',
                category: 'Lifestyle'
              }
            ].map((story, index) => (
              <div key={index} className="flex-shrink-0 w-64 h-80 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 p-4 z-20 text-white">
                  <div className="text-sm mb-1">{story.category}</div>
                  <h3 className="text-lg font-bold">{story.title}</h3>
                </div>
                <div className="h-full w-full bg-muted"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary/5 dark:bg-primary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter to receive the latest articles, stories, and updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-md border border-input bg-background flex-1"
              />
              <button className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}