import { useCallback } from "react";
import { useLocation } from "wouter";
import { WebStory } from "@shared/schema";

type WebStoryCardProps = {
  story: WebStory;
  variant?: "default" | "grid";
};

export default function WebStoryCard({ story, variant = "default" }: WebStoryCardProps) {
  const [, navigate] = useLocation();
  
  const handleClick = useCallback(() => {
    navigate(`/web-stories/${story.id}`);
  }, [navigate, story.id]);
  
  return (
    <div 
      onClick={handleClick}
      className={`story-card snap-start flex-shrink-0 cursor-pointer ${variant === "default" ? "w-64 h-96" : "w-full h-full"} rounded-xl overflow-hidden relative`}
    >
      <img 
        src={story.imageUrl} 
        alt={story.title} 
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
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
    </div>
  );
}
