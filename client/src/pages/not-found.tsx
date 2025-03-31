import { Link } from 'wouter';
import MainLayout from '@/components/layout/MainLayout';

export default function NotFound() {
  return (
    <MainLayout>
      <div className="container flex items-center justify-center min-h-[70vh]">
        <div className="text-center max-w-md mx-auto py-16">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link 
            href="/" 
            className="inline-block px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}