import { TrendingItem } from '@/data/schema';
import Link from 'next/link';

type TrendingListProps = {
  trendingList: TrendingItem[];
};

export default function TrendingList({ trendingList }: TrendingListProps) {
  return (
    <div className="space-y-5">
      {trendingList.map((item, index) => (
        <Link key={item.id} href={`/blog/${item.slug}`}>
          <div className="group flex items-start gap-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <div className="flex-shrink-0 w-8">
              <div className="bg-gray-100 dark:bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-gray-500 dark:text-gray-300">
                {index + 1}
              </div>
            </div>
            
            <div className="flex-grow">
              <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                {item.title}
              </h3>
              
              <div className="flex items-center mt-2">
                <span 
                  className="px-2 py-1 rounded-full text-xs font-medium"
                  style={{ 
                    backgroundColor: `${item.categoryColor}20`, 
                    color: item.categoryColor 
                  }}
                >
                  {item.category}
                </span>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 ml-3">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {item.views}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}