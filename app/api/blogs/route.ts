import { NextRequest, NextResponse } from 'next/server';
import { blogPosts } from '@/data/blog-posts';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category');
  const sort = searchParams.get('sort') || 'recent';
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  const search = searchParams.get('search');
  
  let filteredBlogs = [...blogPosts];
  
  // Filter by category
  if (category) {
    filteredBlogs = filteredBlogs.filter(blog => 
      blog.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  // Filter by search term
  if (search) {
    const searchLower = search.toLowerCase();
    filteredBlogs = filteredBlogs.filter(blog => 
      blog.title.toLowerCase().includes(searchLower) ||
      blog.excerpt.toLowerCase().includes(searchLower) ||
      blog.content.toLowerCase().includes(searchLower)
    );
  }
  
  // Sort blogs
  if (sort === 'popular') {
    filteredBlogs.sort((a, b) => b.views - a.views);
  } else if (sort === 'trending') {
    filteredBlogs = filteredBlogs.filter(blog => blog.trending).sort((a, b) => b.views - a.views);
  } else {
    // Default: most recent
    filteredBlogs.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
  
  // Pagination
  const totalPages = Math.ceil(filteredBlogs.length / limit);
  const startIndex = (page - 1) * limit;
  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + limit);
  
  return NextResponse.json({
    blogs: paginatedBlogs,
    totalPages
  });
}