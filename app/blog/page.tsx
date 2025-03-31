import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { blogPosts } from '@/data/blog-posts';
import { categories } from '@/data/categories';

export default function BlogPage() {
  return (
    <MainLayout>
      {/* Header */}
      <div className="bg-gradient-to-b from-background to-secondary/10 py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover the latest insights and stories from our community
          </p>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mt-6">
            <Link
              href="/blog"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              All Posts
            </Link>
            {categories.map(category => (
              <Link
                key={category.id}
                href={`/blog/category/${category.slug}`}
                className="px-4 py-2 bg-secondary/30 text-foreground rounded-full hover:bg-secondary/50 transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map(post => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div className="bg-card border rounded-lg overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${post.coverImage})` }}
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div 
                      className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full self-start"
                      style={{ backgroundColor: post.categoryColor + '20', color: post.categoryColor }}
                    >
                      {post.category}
                    </div>
                    <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center mt-auto text-sm">
                      <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-foreground/80">{post.author.name}</span>
                      <span className="mx-2">•</span>
                      <span className="text-muted-foreground">{post.publishedDate}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Pagination (static for now) */}
          <div className="mt-12 flex justify-center">
            <nav className="flex space-x-2" aria-label="Pagination">
              <span className="px-4 py-2 border rounded-md bg-primary text-white">
                1
              </span>
              <a
                href="#"
                className="px-4 py-2 border rounded-md hover:bg-secondary/20 transition-colors"
              >
                2
              </a>
              <a
                href="#"
                className="px-4 py-2 border rounded-md hover:bg-secondary/20 transition-colors"
              >
                3
              </a>
              <span className="px-4 py-2 border rounded-md">
                ...
              </span>
              <a
                href="#"
                className="px-4 py-2 border rounded-md hover:bg-secondary/20 transition-colors"
              >
                10
              </a>
              <a
                href="#"
                className="px-4 py-2 border rounded-md hover:bg-secondary/20 transition-colors"
              >
                Next
              </a>
            </nav>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}