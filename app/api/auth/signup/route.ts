import { NextRequest, NextResponse } from 'next/server';
import { users } from '@/data/users';
import { z } from 'zod';

// Signup validation schema
const signupSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  username: z.string().min(3, { message: 'Username must be at least 3 characters' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const result = signupSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: result.error.format() }, { status: 400 });
    }
    
    const { name, email, username, password } = result.data;
    
    // Check if email already exists
    const existingEmail = users.find(user => user.email === email);
    if (existingEmail) {
      return NextResponse.json({ error: 'Email already in use' }, { status: 409 });
    }
    
    // Check if username already exists
    const existingUsername = users.find(user => user.username === username);
    if (existingUsername) {
      return NextResponse.json({ error: 'Username already taken' }, { status: 409 });
    }
    
    // In a real application, we would create a new user in the database
    // For this demo, we'll return as if we created a user
    
    return NextResponse.json({
      user: {
        id: Math.floor(Math.random() * 1000) + 10, // Random ID for demo
        name,
        email,
        username,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`, // Generate avatar
        createdAt: new Date().toISOString(),
      }
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}