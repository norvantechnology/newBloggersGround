import { Link } from "wouter";
import { WebStory } from "@shared/schema";

type WebStoryCardProps = {
  story: WebStory;
  variant?: "default" | "grid";
};

export default function WebStoryCard({ story, variant = "default" }: WebStoryCardProps) {
  return (
    <Link href={`/web-stories/${story.id}`}>
      <a className={`story-card snap-start flex-shrink-0 ${variant === "default" ? "w-64 h-96" : "w-full h-full"} rounded-xl overflow-hidden relative`}>
        <img 
          src={story.imageUrl} 
          alt={story.title} 
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 z-10">
          <h3 className="text-lg font-bold text-white mb-1">{story.title}</h3>
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <img 
                src={story.author.avatar} 
                alt={story.author.name} 
                className="w-6 h-6 rounded-full"
              />
              <span className="text-sm font-medium text-white">{story.author.name}</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
