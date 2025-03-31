import { NextResponse } from 'next/server';
import { blogPosts } from '@/data/blog-posts';

export async function GET() {
  // Find the featured trending post (should be both trending and featured)
  const trendingFeatured = blogPosts.find(post => post.trending && post.featured);
  
  if (!trendingFeatured) {
    // If none found, return the most viewed trending post
    const mostViewedTrending = [...blogPosts]
      .filter(post => post.trending)
      .sort((a, b) => b.views - a.views)[0];
      
    return NextResponse.json(mostViewedTrending || null);
  }
  
  return NextResponse.json(trendingFeatured);
}