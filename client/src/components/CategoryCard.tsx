import { Link } from "wouter";
import { Category } from "@shared/schema";

type CategoryCardProps = {
  category: Category;
};

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/blogs?category=${category.slug}`}>
      <a className="group bg-white dark:bg-slate-800 hover:bg-primary-50 dark:hover:bg-slate-700 rounded-xl overflow-hidden shadow-sm transition-colors p-6 flex flex-col items-center text-center">
        <div className={`w-16 h-16 flex items-center justify-center rounded-full ${category.bgColor} ${category.textColor} mb-4`}>
          <i className={`${category.icon} text-3xl`}></i>
        </div>
        <h3 className="font-bold mb-1">{category.name}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">{category.articleCount} articles</p>
      </a>
    </Link>
  );
}
