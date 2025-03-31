import { WebStory } from '@/data/schema';
import Link from 'next/link';

type WebStoryCardProps = {
  story: WebStory;
  variant?: "default" | "grid";
};

export default function WebStoryCard({ story, variant = "default" }: WebStoryCardProps) {
  return (
    <Link href={`/webstories/${story.slug}`}>
      <div className={`relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 story-card h-full
        ${variant === "grid" ? "aspect-[3/4]" : "aspect-[9/16]"}`}>
        <img 
          src={story.coverImage} 
          alt={story.title}
          className="w-full h-full object-cover" 
        />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <div 
            className="inline-block px-2 py-1 rounded-full text-xs font-medium text-white mb-2"
            style={{ backgroundColor: story.category === "Technology" ? "#3b82f6" : 
                    story.category === "Travel" ? "#84cc16" : 
                    story.category === "Photography" ? "#0ea5e9" : 
                    story.category === "Fashion" ? "#ec4899" : 
                    story.category === "Health" ? "#10b981" : "#8b5cf6" }}
          >
            {story.category}
          </div>
          
          <h3 className="text-white font-bold text-sm md:text-base line-clamp-2">
            {story.title}
          </h3>
          
          <div className="flex items-center mt-2">
            <img 
              src={story.author.avatar} 
              alt={story.author.name}
              className="w-6 h-6 rounded-full mr-2 object-cover" 
            />
            <p className="text-white text-xs">{story.author.name}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}