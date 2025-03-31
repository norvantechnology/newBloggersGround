import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import MobileMenu from "@/components/MobileMenu";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      className="sticky top-0 z-50 bg-white dark:bg-slate-800 shadow-sm"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-white">
              <i className="ri-quill-pen-line text-xl"></i>
            </div>
            <span className="text-xl font-bold font-heading">Bloggers Ground</span>
          </Link>
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {["Home", "Blogs", "Web Stories", "About"].map((item, i) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`;
            return (
              <motion.div 
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                <Link 
                  href={path} 
                  className={`font-medium ${isActive(path) ? 'text-primary dark:text-primary-400' : 'hover:text-primary dark:hover:text-primary-400 transition-colors'}`}
                >
                  {item}
                </Link>
              </motion.div>
            );
          })}
        </nav>
        
        {/* Right Side Controls */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <motion.div 
            whileHover={{ rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            <ThemeToggle />
          </motion.div>
          
          {/* Search Button */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-700">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </motion.div>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <motion.div whileHover={{ y: -2 }}>
              <Link href="/login" className="py-2 px-4 font-medium hover:text-primary dark:hover:text-primary-400 transition-colors">
                Login
              </Link>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link href="/signup" className="py-2 px-4 rounded-full bg-primary text-white font-medium hover:bg-primary-600 transition-colors">
                Sign Up
              </Link>
            </motion.div>
          </div>
          
          {/* Mobile Menu Button */}
          <motion.div 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
            className="md:hidden"
          >
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <i className="ri-menu-line text-xl"></i>
              <span className="sr-only">Open menu</span>
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </motion.header>
  );
}
