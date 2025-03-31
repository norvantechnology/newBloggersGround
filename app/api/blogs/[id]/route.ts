import { NextRequest, NextResponse } from 'next/server';
import { blogPosts } from '@/data/blog-posts';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  
  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid blog ID' }, { status: 400 });
  }
  
  const blogPost = blogPosts.find(post => post.id === id);
  
  if (!blogPost) {
    return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
  }
  
  return NextResponse.json(blogPost);
}