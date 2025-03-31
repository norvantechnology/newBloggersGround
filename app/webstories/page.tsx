import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { webStories } from '@/data/web-stories';
import { categories } from '@/data/categories';

export default function WebStoriesPage() {
  return (
    <MainLayout>
      {/* Header */}
      <div className="bg-gradient-to-b from-background to-secondary/10 py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Web Stories</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Explore bite-sized visual stories on various topics
          </p>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mt-6">
            <Link
              href="/webstories"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              All Stories
            </Link>
            {categories.map(category => (
              <Link
                key={category.id}
                href={`/webstories/category/${category.slug}`}
                className="px-4 py-2 bg-secondary/30 text-foreground rounded-full hover:bg-secondary/50 transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Web Stories Grid */}
      <div className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {webStories.map(story => (
              <Link key={story.id} href={`/webstories/${story.slug}`}>
                <div className="group bg-card border rounded-lg overflow-hidden h-[380px] hover:shadow-md transition-all relative">
                  <div 
                    className="w-full h-full bg-cover bg-center absolute"
                    style={{ backgroundImage: `url(${story.coverImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <div 
                      className="inline-block px-3 py-1 mb-2 text-xs font-medium rounded-full"
                      style={{ backgroundColor: story.category === 'Tech' ? '#3B82F6' : 
                                story.category === 'Fashion' ? '#EC4899' : 
                                story.category === 'Travel' ? '#10B981' : 
                                story.category === 'Food' ? '#F59E0B' : 
                                story.category === 'Health' ? '#6366F1' : '#6B7280' }}
                    >
                      {story.category}
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {story.title}
                    </h2>
                    <p className="text-white/80 text-sm line-clamp-2 mb-4">
                      {story.excerpt}
                    </p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                        <img 
                          src={story.author.avatar} 
                          alt={story.author.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm">{story.author.name}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <span>{story.slides.length}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Create Your Own Web Story</h2>
            <p className="text-muted-foreground mb-8">
              Share your experiences visually with our easy-to-use web story creator. Engage your audience with immersive, full-screen content.
            </p>
            <Link
              href="/create-story"
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors inline-block"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}