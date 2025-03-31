import { Link } from "wouter";
import { TrendingItem } from "@shared/schema";

type TrendingListProps = {
  trendingList: TrendingItem[];
};

export default function TrendingList({ trendingList }: TrendingListProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-6">
      <h3 className="text-lg font-bold mb-4 flex items-center">
        <i className="ri-fire-fill text-red-500 mr-2"></i>
        Trending This Week
      </h3>
      
      <div className="space-y-4">
        {trendingList.map((item, index) => (
          <Link key={item.id} href={`/blogs/${item.id}`}>
            <a className="flex gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
              <span className="text-2xl font-bold text-slate-300 dark:text-slate-600">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <div>
                <h4 className="font-medium mb-1 hover:text-primary dark:hover:text-primary-400 transition-colors">{item.title}</h4>
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <span className={`px-2 py-0.5 ${item.categoryColor} rounded-full text-xs mr-2`}>
                    {item.category}
                  </span>
                  <span>{item.views} views</span>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
