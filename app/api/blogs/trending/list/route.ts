import { NextRequest, NextResponse } from 'next/server';
import { trendingItems } from '@/data/trending';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = parseInt(searchParams.get('limit') || '4');
  
  const trendingList = trendingItems.slice(0, limit);
  
  return NextResponse.json(trendingList);
}