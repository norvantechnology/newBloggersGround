import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Menu, X, Search } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Web Stories', href: '/web-stories' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-foreground">Bloggers<span className="text-primary">Ground</span></span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === item.href ? 'text-primary' : 'text-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-muted">
            <Search className="h-5 w-5" />
          </button>
          <ThemeToggle />
          <div className="flex items-center gap-2">
            <Link 
              href="/login" 
              className="text-sm font-medium px-4 py-2 rounded-md hover:bg-muted"
            >
              Log in
            </Link>
            <Link 
              href="/signup" 
              className="text-sm font-medium px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Sign up
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button 
            onClick={toggleMenu} 
            className="p-2 -m-2 text-muted-foreground"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4 space-y-4 border-t animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium ${
                    location === item.href ? 'text-primary' : 'text-foreground'
                  }`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col space-y-3 pt-4 border-t">
              <Link 
                href="/login" 
                className="w-full text-center text-sm font-medium px-4 py-2 rounded-md border hover:bg-muted"
                onClick={closeMenu}
              >
                Log in
              </Link>
              <Link 
                href="/signup" 
                className="w-full text-center text-sm font-medium px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={closeMenu}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}