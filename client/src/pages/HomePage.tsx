import MainLayout from "@/layouts/MainLayout";
import Banner from "@/components/Banner";
import BlogCard from "@/components/BlogCard";
import TrendingList from "@/components/TrendingList";
import WebStoryCard from "@/components/WebStoryCard";
import CategoryCard from "@/components/CategoryCard";
import Newsletter from "@/components/Newsletter";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";

export default function HomePage() {
  const { data: newArrivals = [] } = useQuery({
    queryKey: ["/api/blogs/new-arrivals"],
  });

  const { data: trendingArticle } = useQuery({
    queryKey: ["/api/blogs/trending/featured"],
  });

  const { data: trendingList = [] } = useQuery({
    queryKey: ["/api/blogs/trending/list"],
  });

  const { data: webStories = [] } = useQuery({
    queryKey: ["/api/web-stories"],
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["/api/categories"],
  });

  return (
    <MainLayout>
      {/* Hero Section */}
      <Banner />

      {/* New Arrivals Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-heading">New Arrivals</h2>
            <Link href="/blogs" className="flex items-center text-primary dark:text-primary-400 font-medium hover:underline">
              View All <i className="ri-arrow-right-line ml-1"></i>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newArrivals.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-12 md:py-16 bg-slate-100 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-heading">Trending Now</h2>
            <Link href="/blogs?sort=trending" className="flex items-center text-primary dark:text-primary-400 font-medium hover:underline">
              View All <i className="ri-arrow-right-line ml-1"></i>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trendingArticle && (
              <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                  <img 
                    src={trendingArticle.imageUrl} 
                    alt={trendingArticle.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <span className={`px-3 py-1 text-xs font-medium ${trendingArticle.categoryColor} rounded-full`}>
                      {trendingArticle.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{trendingArticle.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{trendingArticle.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img 
                        src={trendingArticle.author.avatar} 
                        alt={trendingArticle.author.name} 
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm font-medium">{trendingArticle.author.name}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                      <i className="ri-fire-fill text-red-500"></i>
                      <span>{trendingArticle.views} views</span>
                    </div>
                  </div>
                </div>
              </article>
            )}
            
            <TrendingList trendingList={trendingList} />
          </div>
        </div>
      </section>

      {/* Web Stories Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-heading">Web Stories</h2>
            <Link href="/web-stories" className="flex items-center text-primary dark:text-primary-400 font-medium hover:underline">
              View All <i className="ri-arrow-right-line ml-1"></i>
            </Link>
          </div>
          
          {/* Stories Carousel */}
          <div className="web-story-scroll relative flex overflow-x-auto pb-6 gap-4 snap-x snap-mandatory">
            {webStories.map((story) => (
              <WebStoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 md:py-16 bg-slate-100 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8">Explore Categories</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </MainLayout>
  );
}
