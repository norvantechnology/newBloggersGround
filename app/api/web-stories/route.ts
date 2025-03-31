import { NextRequest, NextResponse } from 'next/server';
import { webStories } from '@/data/web-stories';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  
  let filteredStories = [...webStories];
  
  // Filter by category
  if (category) {
    filteredStories = filteredStories.filter(story => 
      story.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  // Filter by search term
  if (search) {
    const searchLower = search.toLowerCase();
    filteredStories = filteredStories.filter(story => 
      story.title.toLowerCase().includes(searchLower) ||
      story.excerpt.toLowerCase().includes(searchLower)
    );
  }
  
  // Sort by newest first
  filteredStories.sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  
  return NextResponse.json(filteredStories);
}