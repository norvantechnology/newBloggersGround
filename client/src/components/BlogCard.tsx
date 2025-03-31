import { Link } from "wouter";
import { BlogPost } from "@shared/schema";
import { motion } from "framer-motion";

type BlogCardProps = {
  article: BlogPost;
};

export default function BlogCard({ article }: BlogCardProps) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden group"
    >
      <Link href={`/blog/${article.id}`} className="block">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <div className="flex gap-2 mb-3">
            <span 
              className="px-3 py-1 text-xs font-medium rounded-full"
              style={{ backgroundColor: article.categoryColor }}
            >
              {article.category}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary dark:group-hover:text-primary-400 transition-colors">
            {article.title}
          </h3>
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
      </Link>
    </motion.article>
  );
}
