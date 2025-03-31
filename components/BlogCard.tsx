import { BlogPost } from '@/data/schema';
import Link from 'next/link';

type BlogCardProps = {
  article: BlogPost;
};

export default function BlogCard({ article }: BlogCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link href={`/blog/${article.slug}`}>
        <div className="relative h-48 overflow-hidden">
          <img 
            src={article.coverImage} 
            alt={article.title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span 
              className="px-3 py-1 rounded-full text-xs font-semibold" 
              style={{ backgroundColor: article.categoryColor, color: 'white' }}
            >
              {article.category}
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-5">
        <Link href={`/blog/${article.slug}`}>
          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {article.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={article.author.avatar} 
              alt={article.author.name}
              className="w-8 h-8 rounded-full mr-2 object-cover" 
            />
            <div className="text-sm">
              <p className="text-gray-800 dark:text-white font-medium">{article.author.name}</p>
              <p className="text-gray-500 dark:text-gray-400">{article.publishedDate}</p>
            </div>
          </div>
          
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {article.timeToRead}
          </span>
        </div>
      </div>
    </div>
  );
}