'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { webStories } from '@/data/web-stories';
import { ChevronLeft, ChevronRight, X, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function WebStoryDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const story = webStories.find(story => story.slug === slug);
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState<number[]>([]);
  const [isControlsVisible, setIsControlsVisible] = useState(true);
  const [shareOpen, setShareOpen] = useState(false);

  useEffect(() => {
    if (story) {
      // Initialize progress array with zeros
      setProgress(new Array(story.slides.length).fill(0));
      
      // Auto-advance progress of current slide
      const interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = [...prev];
          if (newProgress[currentSlide] < 100) {
            newProgress[currentSlide] += 0.5;
            
            // Auto-advance to next slide when progress reaches 100%
            if (newProgress[currentSlide] >= 100 && currentSlide < story.slides.length - 1) {
              setCurrentSlide(prevSlide => prevSlide + 1);
            }
          }
          return newProgress;
        });
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [story, currentSlide]);

  if (!story) {
    return (
      <MainLayout>
        <div className="container-custom py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Web Story Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The web story you're looking for doesn't exist or has been removed.
          </p>
          <Link 
            href="/webstories" 
            className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Back to Web Stories
          </Link>
        </div>
      </MainLayout>
    );
  }

  const nextSlide = () => {
    if (currentSlide < story.slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      
      // Set progress of next slide to 0
      setProgress(prev => {
        const newProgress = [...prev];
        newProgress[currentSlide + 1] = 0;
        return newProgress;
      });
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      
      // Reset progress of the previous slide
      setProgress(prev => {
        const newProgress = [...prev];
        newProgress[currentSlide - 1] = 0;
        return newProgress;
      });
    }
  };

  const toggleControls = () => {
    setIsControlsVisible(!isControlsVisible);
  };

  const closeStory = () => {
    router.push('/webstories');
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    
    // Reset progress of selected slide
    setProgress(prev => {
      const newProgress = [...prev];
      newProgress[index] = 0;
      return newProgress;
    });
  };

  const toggleShare = () => {
    setShareOpen(!shareOpen);
  };

  const currentSlideData = story.slides[currentSlide];

  return (
    <div className="fixed inset-0 bg-black text-white z-50 overflow-hidden">
      {/* Exit button */}
      <button 
        onClick={closeStory} 
        className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
        aria-label="Close story"
      >
        <X size={24} />
      </button>
      
      {/* Share button */}
      <button 
        onClick={toggleShare} 
        className="absolute top-4 right-16 z-50 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
        aria-label="Share story"
      >
        <Share2 size={20} />
      </button>
      
      {/* Share options */}
      {shareOpen && (
        <div className="absolute top-16 right-4 z-50 bg-black/80 p-3 rounded-lg flex space-x-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2]/20 hover:bg-[#1877F2]/40 transition-colors">
            <Facebook size={20} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/40 transition-colors">
            <Twitter size={20} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0077B5]/20 hover:bg-[#0077B5]/40 transition-colors">
            <Linkedin size={20} />
          </button>
        </div>
      )}

      {/* Progress indicators */}
      <div className="absolute top-0 left-0 right-0 z-40 flex p-2 gap-1">
        {story.slides.map((_, index) => (
          <div 
            key={index}
            className="h-1 bg-white/30 flex-1 rounded-full overflow-hidden"
            onClick={() => goToSlide(index)}
          >
            <div 
              className="h-full bg-white rounded-full" 
              style={{ width: `${progress[index]}%` }}
            ></div>
          </div>
        ))}
      </div>

      {/* Main slide content */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        onClick={toggleControls}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 transform scale-105"
          style={{ backgroundImage: `url(${currentSlideData.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-md mx-auto p-6 text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fadeIn">{currentSlideData.heading}</h2>
          <p className="text-xl animate-fadeIn delay-100">{currentSlideData.content}</p>
        </div>
      </div>

      {/* Navigation controls - only visible when controls are shown */}
      {isControlsVisible && (
        <>
          {currentSlide > 0 && (
            <button 
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={28} />
            </button>
          )}
          
          {currentSlide < story.slides.length - 1 && (
            <button 
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </>
      )}

      {/* Story info at bottom */}
      <div className="absolute bottom-4 left-0 right-0 z-20 px-4">
        <div className="bg-black/60 p-3 rounded-lg flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
              <img 
                src={story.author.avatar} 
                alt={story.author.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-semibold">{story.title}</div>
              <div className="text-xs text-white/70">{story.author.name}</div>
            </div>
          </div>
          <div>
            <Link 
              href={`/blog/category/${story.category.toLowerCase()}`}
              className="text-xs py-1 px-2 rounded-full"
              style={{ 
                backgroundColor: story.category === 'Tech' ? '#3B82F6' : 
                              story.category === 'Fashion' ? '#EC4899' : 
                              story.category === 'Travel' ? '#10B981' : 
                              story.category === 'Food' ? '#F59E0B' : 
                              story.category === 'Health' ? '#6366F1' : '#6B7280' 
              }}
            >
              {story.category}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}