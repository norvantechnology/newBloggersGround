import Link from 'next/link';
import MainLayout from '../components/layout/MainLayout';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
        <div className="text-9xl font-extrabold text-primary">404</div>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Page not found</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed in the first place.
        </p>
        <div className="mt-8">
          <Link href="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}