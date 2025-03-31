import { Link } from "wouter";
import { BlogPost } from "@shared/schema";

type BlogCardProps = {
  article: BlogPost;
};

export default function BlogCard({ article }: BlogCardProps) {
  return (
    <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex gap-2 mb-3">
          <span className={`px-3 py-1 text-xs font-medium ${article.categoryColor} rounded-full`}>
            {article.category}
          </span>
        </div>
        <Link href={`/blogs/${article.id}`}>
          <a className="block">
            <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-primary dark:hover:text-primary-400 transition-colors">{article.title}</h3>
          </a>
        </Link>
        <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={article.author.avatar} 
              alt={article.author.name} 
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium">{article.author.name}</span>
          </div>
          <span className="text-sm text-slate-500 dark:text-slate-400">{article.publishedDate}</span>
        </div>
      </div>
    </article>
  );
}
