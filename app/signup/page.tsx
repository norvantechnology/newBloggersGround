'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import MainLayout from '@/components/layout/MainLayout';
import { Eye, EyeOff, Mail, Lock, User, AtSign } from 'lucide-react';

// Signup form schema
const signupSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    username: z.string().min(3, 'Username must be at least 3 characters')
      .regex(/^[a-zA-Z0-9_-]+$/, 'Username can only contain letters, numbers, underscores and hyphens'),
    password: z.string().min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number'),
    confirmPassword: z.string(),
    acceptTerms: z.boolean().refine(val => val === true, {
      message: 'You must accept the terms and conditions',
    }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type SignupFormValues = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
  });

  const onSubmit = async (data: SignupFormValues) => {
    setIsLoading(true);
    setError('');
    
    try {
      // For demonstration - in a real app, you would call your API
      console.log('Signup data:', data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to home page after successful signup
      router.push('/');
    } catch (err) {
      setError('There was an error creating your account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen py-12">
        <div className="container-custom">
          <div className="max-w-md mx-auto bg-card shadow rounded-lg border p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Create an Account</h1>
              <p className="text-muted-foreground">
                Join Bloggers Ground today
              </p>
            </div>

            {error && (
              <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-3 rounded-md mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-muted-foreground" />
                  </div>
                  <input
                    id="name"
                    type="text"
                    className={`w-full pl-10 pr-4 py-2 border rounded-md bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                      errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-input'
                    }`}
                    placeholder="John Doe"
                    {...register('name')}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-muted-foreground" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    className={`w-full pl-10 pr-4 py-2 border rounded-md bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                      errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-input'
                    }`}
                    placeholder="you@example.com"
                    {...register('email')}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="username" className="block text-sm font-medium">
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <AtSign size={18} className="text-muted-foreground" />
                  </div>
                  <input
                    id="username"
                    type="text"
                    className={`w-full pl-10 pr-4 py-2 border rounded-md bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                      errors.username ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-input'
                    }`}
                    placeholder="johndoe"
                    {...register('username')}
                  />
                </div>
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-muted-foreground" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    className={`w-full pl-10 pr-12 py-2 border rounded-md bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                      errors.password ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-input'
                    }`}
                    placeholder="••••••••"
                    {...register('password')}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff size={18} className="text-muted-foreground hover:text-foreground" />
                    ) : (
                      <Eye size={18} className="text-muted-foreground hover:text-foreground" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-medium">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-muted-foreground" />
                  </div>
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    className={`w-full pl-10 pr-12 py-2 border rounded-md bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                      errors.confirmPassword ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-input'
                    }`}
                    placeholder="••••••••"
                    {...register('confirmPassword')}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} className="text-muted-foreground hover:text-foreground" />
                    ) : (
                      <Eye size={18} className="text-muted-foreground hover:text-foreground" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    id="acceptTerms"
                    type="checkbox"
                    className="h-4 w-4 border border-input rounded bg-background focus:ring-2 focus:ring-primary"
                    {...register('acceptTerms')}
                  />
                  <label htmlFor="acceptTerms" className="ml-2 block text-sm">
                    I agree to the{' '}
                    <Link href="/terms-of-service" className="text-primary hover:text-primary/80 transition-colors">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy-policy" className="text-primary hover:text-primary/80 transition-colors">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {errors.acceptTerms && (
                  <p className="text-red-500 text-sm mt-1">{errors.acceptTerms.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? 'Creating account...' : 'Sign Up'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link href="/login" className="text-primary hover:text-primary/80 transition-colors">
                  Log in
                </Link>
              </p>
            </div>

            <div className="mt-8 pt-8 border-t text-center">
              <p className="text-sm text-muted-foreground mb-4">Or sign up with</p>
              <div className="flex justify-center space-x-4">
                <button className="flex items-center justify-center w-12 h-12 rounded-full border border-input bg-background hover:bg-secondary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#EA4335]"><path d="M15.547 8.303A5.148 5.148 0 0 0 12.11 7C9.287 7 7 9.239 7 12s2.287 5 5.11 5c3.627 0 4.943-2.405 5.143-3.652H12.11v-1.279h7.575c.074.328.115.68.115 1.138 0 4.323-3.343 7.793-7.69 7.793-4.465 0-8.084-3.537-8.084-8s3.619-8 8.084-8c2.118 0 3.98.712 5.436 1.893l-1.999 1.41z"/></svg>
                </button>
                <button className="flex items-center justify-center w-12 h-12 rounded-full border border-input bg-background hover:bg-secondary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1877F2]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </button>
                <button className="flex items-center justify-center w-12 h-12 rounded-full border border-input bg-background hover:bg-secondary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black dark:text-white"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}