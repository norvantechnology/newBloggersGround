import { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import WebStoryCard from "@/components/WebStoryCard";
import { useQuery } from "@tanstack/react-query";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Grid, LayoutGrid } from "lucide-react";

export default function WebStoriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const { data: webStories = [] } = useQuery({
    queryKey: ["/api/web-stories", { category, search: searchTerm }],
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["/api/categories"],
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <MainLayout>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4">Web Stories</h1>
            <p className="text-slate-600 dark:text-slate-300 max-w-3xl">
              Explore our collection of visually engaging web stories on various topics.
            </p>
          </div>

          {/* Filters and Search */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="flex flex-wrap gap-4 items-center md:w-3/4">
                <form onSubmit={handleSearch} className="flex gap-2 w-full md:w-auto">
                  <Input
                    type="text"
                    placeholder="Search stories..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-grow"
                  />
                  <Button type="submit">Search</Button>
                </form>

                <Select value={category} onValueChange={setCategory} className="w-full md:w-auto">
                  <SelectTrigger className="min-w-[180px]">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.slug}>{cat.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-600 dark:text-slate-400">View:</span>
                <Button 
                  variant={viewMode === "grid" ? "default" : "outline"} 
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid size={18} />
                </Button>
                <Button 
                  variant={viewMode === "list" ? "default" : "outline"} 
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <LayoutGrid size={18} />
                </Button>
              </div>
            </div>
          </div>

          {/* Web Stories Listing */}
          {webStories.length > 0 ? (
            viewMode === "grid" ? (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {webStories.map((story) => (
                  <div key={story.id} className="max-w-full h-auto aspect-[3/4]">
                    <WebStoryCard story={story} variant="grid" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {webStories.map((story) => (
                  <div key={story.id} className="bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 h-64 md:h-auto">
                        <img 
                          src={story.imageUrl} 
                          alt={story.title} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6 md:w-3/4">
                        <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">{story.excerpt}</p>
                        <div className="flex items-center gap-2">
                          <img 
                            src={story.author.avatar} 
                            alt={story.author.name} 
                            className="w-8 h-8 rounded-full"
                          />
                          <span className="text-sm font-medium">{story.author.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-bold mb-2">No web stories found</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Try changing your search or filter options.
              </p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
