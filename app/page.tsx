import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <div className="container py-12">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Welcome to <span className="text-primary">Bloggers Ground</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Discover insightful articles, engaging stories, and the latest trends
              from our community of passionate writers.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/blog" 
                className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
              >
                Explore Blogs
              </a>
              <a 
                href="/webstories" 
                className="px-6 py-3 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 font-medium"
              >
                View Web Stories
              </a>
            </div>
          </div>
        </section>

        {/* Featured Categories Section (Placeholder) */}
        <section className="py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Explore Categories</h2>
            <p className="mt-4 text-muted-foreground">
              Find content that matches your interests
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category Cards will be populated here */}
            {[
              { name: 'Technology', color: 'bg-blue-500' },
              { name: 'Fashion', color: 'bg-pink-500' },
              { name: 'Lifestyle', color: 'bg-green-500' },
              { name: 'Travel', color: 'bg-amber-500' }
            ].map((category, index) => (
              <div key={index} className={`category-card group h-48 rounded-lg ${category.color} text-white`}>
                <div className="absolute inset-0 category-overlay bg-black bg-opacity-30 transition-all duration-300"></div>
                <div className="relative h-full flex flex-col items-center justify-center p-6">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm opacity-90">Discover {category.name} articles</p>
                  <a href={`/blog?category=${category.name.toLowerCase()}`} className="mt-4 px-4 py-2 rounded-md bg-white/20 hover:bg-white/30 transition-colors duration-300">
                    View Articles
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Blogs Section (Placeholder) */}
        <section className="py-12">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold">Featured Blogs</h2>
              <p className="mt-2 text-muted-foreground">
                Our most popular and trending articles
              </p>
            </div>
            <a 
              href="/blog" 
              className="hidden md:block px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 font-medium"
            >
              View All
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blog Cards will be populated here */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="blog-card rounded-lg border bg-card overflow-hidden shadow-sm">
                <div className="aspect-video w-full bg-muted"></div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                      Technology
                    </span>
                    <span className="text-xs text-muted-foreground">5 min read</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    A blog post title that catches your attention
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    A short excerpt from the blog post that gives the reader a quick overview of what the article is about...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-muted"></div>
                      <span className="text-sm">John Doe</span>
                    </div>
                    <span className="text-xs text-muted-foreground">March 28, 2025</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 md:hidden">
            <a 
              href="/blog" 
              className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 font-medium"
            >
              View All Blogs
            </a>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-12 my-12 bg-primary/5 rounded-lg">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Become a member of our growing community. Share your thoughts, discover new ideas,
              and connect with like-minded individuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/signup" 
                className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
              >
                Sign Up Now
              </a>
              <a 
                href="/login" 
                className="px-6 py-3 rounded-md bg-muted text-foreground hover:bg-muted/60 font-medium"
              >
                Log In
              </a>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}