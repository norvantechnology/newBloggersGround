import { NextRequest, NextResponse } from 'next/server';
import { webStories } from '@/data/web-stories';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  
  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid web story ID' }, { status: 400 });
  }
  
  const webStory = webStories.find(story => story.id === id);
  
  if (!webStory) {
    return NextResponse.json({ error: 'Web story not found' }, { status: 404 });
  }
  
  return NextResponse.json(webStory);
}