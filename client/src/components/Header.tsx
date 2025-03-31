import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import MobileMenu from "@/components/MobileMenu";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-white">
            <i className="ri-quill-pen-line text-xl"></i>
          </div>
          <span className="text-xl font-bold font-heading">Bloggers Ground</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className={`font-medium ${isActive('/') ? 'text-primary dark:text-primary-400' : 'hover:text-primary dark:hover:text-primary-400 transition-colors'}`}>
            Home
          </Link>
          <Link href="/blogs" className={`font-medium ${isActive('/blogs') ? 'text-primary dark:text-primary-400' : 'hover:text-primary dark:hover:text-primary-400 transition-colors'}`}>
            Blogs
          </Link>
          <Link href="/web-stories" className={`font-medium ${isActive('/web-stories') ? 'text-primary dark:text-primary-400' : 'hover:text-primary dark:hover:text-primary-400 transition-colors'}`}>
            Web Stories
          </Link>
          <Link href="/about" className={`font-medium ${isActive('/about') ? 'text-primary dark:text-primary-400' : 'hover:text-primary dark:hover:text-primary-400 transition-colors'}`}>
            About
          </Link>
        </nav>
        
        {/* Right Side Controls */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <ThemeToggle />
          
          {/* Search Button */}
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-700">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Link href="/login" className="py-2 px-4 font-medium hover:text-primary dark:hover:text-primary-400 transition-colors">
              Login
            </Link>
            <Link href="/signup" className="py-2 px-4 rounded-full bg-primary text-white font-medium hover:bg-primary-600 transition-colors">
              Sign Up
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden rounded-full hover:bg-slate-100 dark:hover:bg-slate-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <i className="ri-menu-line text-xl"></i>
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
