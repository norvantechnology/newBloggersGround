import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { categories } from '../data/categories';
import { trendingItems } from '../data/trending';

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Discover, Learn, and Share Knowledge
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A modern platform for tech enthusiasts, creators, and knowledge seekers.
              Explore the latest insights in technology, design, and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Blog <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/webstories">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Web Stories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Explore Categories</h2>
              <p className="text-muted-foreground">Discover content across various topics</p>
            </div>
            <Link href="/blog" className="text-primary font-medium flex items-center hover:underline">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 6).map((category) => (
              <Link 
                href={`/blog?category=${category.slug}`}
                key={category.id}
                className="group relative overflow-hidden rounded-lg border border-border p-6 hover:border-primary transition-all"
              >
                <div 
                  className="absolute top-0 left-0 w-2 h-full transition-all group-hover:w-full opacity-10 group-hover:opacity-20" 
                  style={{ backgroundColor: category.color }}
                />
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span 
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: category.color }}
                    ></span>
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">
                      {category.articleCount} {category.articleCount === 1 ? 'Article' : 'Articles'}
                    </span>
                    <span className="text-primary text-sm font-medium flex items-center group-hover:underline">
                      Explore <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Trending Now</h2>
              <p className="text-muted-foreground">Most popular content based on views</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Featured item (larger) */}
            <div className="bg-background rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6">
              <Link 
                href={`/blog/${trendingItems[0].slug}`}
                className="block"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <span 
                    className="text-xs font-medium px-2.5 py-0.5 rounded-full" 
                    style={{ 
                      backgroundColor: `${trendingItems[0].categoryColor}20`, 
                      color: trendingItems[0].categoryColor 
                    }}
                  >
                    {trendingItems[0].category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center">
                    {trendingItems[0].views} views
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors">
                  {trendingItems[0].title}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-primary font-medium hover:underline">
                    Read article <ArrowRight className="inline-block ml-1 h-3 w-3" />
                  </span>
                </div>
              </Link>
            </div>
            
            {/* List of other trending items */}
            <div className="bg-background rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow divide-y divide-border">
              {trendingItems.slice(1, 5).map((item) => (
                <Link 
                  key={item.id}
                  href={`/blog/${item.slug}`}
                  className="block p-4 hover:bg-muted/40 transition-colors"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <span 
                      className="text-xs font-medium px-2 py-0.5 rounded-full" 
                      style={{ 
                        backgroundColor: `${item.categoryColor}20`, 
                        color: item.categoryColor 
                      }}
                    >
                      {item.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center">
                      {item.views} views
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold hover:text-primary transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
            <div className="mb-6 inline-flex items-center justify-center p-2 bg-primary/10 rounded-full">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our community of tech enthusiasts and start exploring the world of technology, design, and development today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Sign Up Now
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}