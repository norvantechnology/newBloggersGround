import { NextRequest, NextResponse } from 'next/server';
import { users } from '@/data/users';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  
  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
  }
  
  const user = users.find(user => user.id === id);
  
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  
  // Return user without sensitive information
  const { password, ...safeUser } = user as any; // Type assertion for demo purposes
  
  return NextResponse.json(safeUser);
}