import { Link } from "wouter";
import { TrendingItem } from "@shared/schema";
import { motion } from "framer-motion";

type TrendingListProps = {
  trendingList: TrendingItem[];
};

export default function TrendingList({ trendingList }: TrendingListProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-6"
    >
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg font-bold mb-4 flex items-center"
      >
        <motion.i 
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut"
          }}
          className="ri-fire-fill text-red-500 mr-2"
        ></motion.i>
        Trending This Week
      </motion.h3>
      
      <div className="space-y-4">
        {trendingList.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            whileHover={{ 
              x: 5,
              transition: { duration: 0.2 }
            }}
          >
            <Link href={`/blog/${item.id}`} className="flex gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors block">
              <span className="text-2xl font-bold text-slate-300 dark:text-slate-600">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <div>
                <h4 className="font-medium mb-1 hover:text-primary dark:hover:text-primary-400 transition-colors">{item.title}</h4>
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <span 
                    className="px-2 py-0.5 rounded-full text-xs mr-2"
                    style={{ backgroundColor: item.categoryColor }}
                  >
                    {item.category}
                  </span>
                  <span>{item.views} views</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
