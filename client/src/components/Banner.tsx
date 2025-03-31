import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      <motion.div 
        initial={{ scale: 1.1, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" 
          alt="Desk with laptop and notebook" 
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container mx-auto px-4 py-20 md:py-28 relative z-10"
      >
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 leading-tight"
          >
            Where Ideas <motion.span
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-primary-400 inline-block"
            >
              Find Their Voice
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl mb-8 text-slate-200"
          >
            Discover fresh perspectives on tech, fashion, lifestyle, and more from our community of passionate writers.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link href="/blogs" className="py-3 px-6 bg-primary text-white font-medium rounded-full hover:bg-primary-600 transition-colors text-center inline-block">
                Start Reading
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link href="/signup" className="py-3 px-6 bg-white/10 backdrop-blur-sm hover:bg-white/20 font-medium rounded-full transition-colors text-center inline-block">
                Join Our Community
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* 3D floating elements for decoration */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ 
          y: [-20, 20, -20],
          opacity: 0.2
        }}
        transition={{ 
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut"
        }}
        className="absolute top-[15%] right-[15%] w-20 h-20 bg-primary-400 rounded-full filter blur-[60px]"
      />
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ 
          y: [10, -10, 10],
          opacity: 0.15
        }}
        transition={{ 
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-[20%] left-[15%] w-16 h-16 bg-blue-500 rounded-full filter blur-[50px]"
      />
    </section>
  );
}
