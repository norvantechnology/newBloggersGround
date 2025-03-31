import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import BlogCard from "@/components/BlogCard";
import CategoryCard from "@/components/CategoryCard";
import Newsletter from "@/components/Newsletter";
import TrendingList from "@/components/TrendingList";
import WebStoryCard from "@/components/WebStoryCard";
import { blogPosts } from "@/data/blog-posts";
import { categories } from "@/data/categories";
import { trendingItems } from "@/data/trending";
import { webStories } from "@/data/web-stories";
import Link from "next/link";

export default function Home() {
  const newArrivals = blogPosts.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  }).slice(0, 3);

  const featuredPost = blogPosts.find(post => post.featured);
  
  const popularWebStories = webStories.slice(0, 5);

  return (
    <Layout>
      <Banner />
      
      {/* New Arrivals Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">New Arrivals</h2>
          <Link 
            href="/blog" 
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
          >
            View All
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newArrivals.map((post) => (
            <BlogCard key={post.id} article={post} />
          ))}
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.slice(0, 6).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            {featuredPost && (
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src={featuredPost.coverImage} 
                  alt={featuredPost.title}
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3" 
                    style={{ backgroundColor: featuredPost.categoryColor }}>
                    {featuredPost.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{featuredPost.title}</h3>
                  <p className="mb-3 text-gray-200">{featuredPost.excerpt.substring(0, 120)}...</p>
                  <div className="flex items-center text-sm">
                    <img 
                      src={featuredPost.author.avatar} 
                      alt={featuredPost.author.name}
                      className="w-10 h-10 rounded-full mr-3 object-cover" 
                    />
                    <div>
                      <p className="font-medium">{featuredPost.author.name}</p>
                      <p className="text-gray-300">{featuredPost.publishedDate} · {featuredPost.timeToRead}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Trending Now</h3>
              <Link href="/blog?sort=trending" className="text-blue-600 dark:text-blue-400 hover:underline">
                See All
              </Link>
            </div>
            <TrendingList trendingList={trendingItems} />
          </div>
        </div>
      </section>

      {/* Web Stories */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Web Stories</h2>
            <Link 
              href="/webstories" 
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
            >
              View All
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="flex space-x-4 overflow-x-auto pb-4 web-story-scroll">
            {popularWebStories.map((story) => (
              <div key={story.id} className="flex-shrink-0 w-64">
                <WebStoryCard story={story} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <Newsletter />
    </Layout>
  );
}