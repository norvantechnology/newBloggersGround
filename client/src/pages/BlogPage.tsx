import { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import BlogCard from "@/components/BlogCard";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { BlogPost, Category } from "@shared/schema";

export default function BlogPage() {
  const [location] = useLocation();
  const params = new URLSearchParams(location.split("?")[1] || "");
  
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState(params.get("category") || "all");
  const [sort, setSort] = useState(params.get("sort") || "recent");
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useQuery<{ blogs: BlogPost[]; totalPages: number }>({
    queryKey: ["/api/blogs", { category, sort, page: currentPage, search: searchTerm }],
  });

  const { data: categories = [] } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const blogs = data?.blogs || [];
  const totalPages = data?.totalPages || 1;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  return (
    <MainLayout>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4">All Blogs</h1>
            <p className="text-slate-600 dark:text-slate-300 max-w-3xl">
              Discover fresh perspectives on tech, fashion, lifestyle, and more from our community of passionate writers.
            </p>
          </div>

          {/* Filters and Search */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <form onSubmit={handleSearch} className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Search blogs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-grow"
                />
                <Button type="submit">Search</Button>
              </form>

              <Select value={category} onValueChange={(value) => {
                setCategory(value);
                setCurrentPage(1);
              }}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.slug}>{cat.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sort} onValueChange={(value) => {
                setSort(value);
                setCurrentPage(1);
              }}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="trending">Trending</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Blog Listing */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 bg-slate-200 dark:bg-slate-700"></div>
                  <div className="p-6 space-y-4">
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/4"></div>
                    <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-20 my-auto"></div>
                      </div>
                      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-16"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : blogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} article={blog} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-bold mb-2">No blogs found</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Try changing your search or filter options.
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex justify-center">
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                
                {[...Array(totalPages)].map((_, i) => (
                  <Button
                    key={i}
                    variant={currentPage === i + 1 ? "default" : "outline"}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </Button>
                ))}
                
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
