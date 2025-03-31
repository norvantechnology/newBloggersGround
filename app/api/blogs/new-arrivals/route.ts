import { NextRequest, NextResponse } from 'next/server';
import { blogPosts } from '@/data/blog-posts';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = parseInt(searchParams.get('limit') || '3');
  
  // Sort by creation date (newest first) and take the specified number
  const newArrivals = [...blogPosts]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
  
  return NextResponse.json(newArrivals);
}