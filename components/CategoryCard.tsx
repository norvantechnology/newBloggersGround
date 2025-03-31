import { Category } from '@/data/schema';
import Link from 'next/link';

type CategoryCardProps = {
  category: Category;
};

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/blog?category=${category.slug}`}>
      <div 
        className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 dark:border-gray-700"
        style={{ borderLeft: `4px solid ${category.color}` }}
      >
        <div className="flex flex-col items-center text-center">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
            style={{ backgroundColor: `${category.color}20` }}
          >
            <svg className="w-6 h-6" fill="none" stroke={category.color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          </div>
          
          <h3 className="font-medium text-gray-900 dark:text-white mb-1">
            {category.name}
          </h3>
          
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {category.articleCount} articles
          </p>
        </div>
      </div>
    </Link>
  );
}