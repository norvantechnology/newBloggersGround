import { useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Sheet, SheetContent } from "@/components/ui/sheet";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [location] = useLocation();
  const previousPath = useRef(location);

  // Close menu when path changes
  useEffect(() => {
    if (isOpen && previousPath.current !== location) {
      onClose();
    }
    previousPath.current = location;
  }, [location, isOpen, onClose]);

  const isActive = (path: string) => location === path;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="p-0 w-full max-w-xs bg-white dark:bg-slate-800">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b dark:border-slate-700">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-white">
                <i className="ri-quill-pen-line text-xl"></i>
              </div>
              <span className="text-xl font-bold font-heading">Bloggers Ground</span>
            </Link>
          </div>
          
          <div className="flex-1 overflow-auto">
            <div className="p-4">
              <nav className="flex flex-col space-y-1">
                <Link href="/" className={`py-3 px-3 rounded-lg font-medium ${isActive('/') ? 'bg-primary/10 text-primary dark:text-primary-400' : 'hover:bg-slate-100 dark:hover:bg-slate-700'}`}>
                  Home
                </Link>
                <Link href="/blogs" className={`py-3 px-3 rounded-lg font-medium ${isActive('/blogs') ? 'bg-primary/10 text-primary dark:text-primary-400' : 'hover:bg-slate-100 dark:hover:bg-slate-700'}`}>
                  Blogs
                </Link>
                <Link href="/web-stories" className={`py-3 px-3 rounded-lg font-medium ${isActive('/web-stories') ? 'bg-primary/10 text-primary dark:text-primary-400' : 'hover:bg-slate-100 dark:hover:bg-slate-700'}`}>
                  Web Stories
                </Link>
                <Link href="/about" className={`py-3 px-3 rounded-lg font-medium ${isActive('/about') ? 'bg-primary/10 text-primary dark:text-primary-400' : 'hover:bg-slate-100 dark:hover:bg-slate-700'}`}>
                  About
                </Link>
              </nav>
            </div>
          </div>
          
          <div className="p-4 border-t dark:border-slate-700">
            <div className="grid grid-cols-2 gap-2">
              <Link href="/login" className="py-2 text-center font-medium hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                Login
              </Link>
              <Link href="/signup" className="py-2 text-center font-medium bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
