import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'About',
      links: [
        { label: 'Our Story', href: '/about' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
        { label: 'Contact', href: '#' }
      ]
    },
    {
      title: 'Categories',
      links: [
        { label: 'Technology', href: '/blogs?category=technology' },
        { label: 'Fashion', href: '/blogs?category=fashion' },
        { label: 'Lifestyle', href: '/blogs?category=lifestyle' },
        { label: 'Travel', href: '/blogs?category=travel' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Writer Guidelines', href: '#' },
        { label: 'FAQ', href: '#' },
        { label: 'Support', href: '#' },
        { label: 'API Documentation', href: '#' }
      ]
    }
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">Bloggers<span className="text-primary">Ground</span></span>
            </Link>
            <p className="text-muted-foreground mb-4">
              A modern platform for sharing knowledge, insights, and stories with readers around the world.
            </p>
            <div className="flex space-x-4 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="font-medium text-lg mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} Bloggers Ground. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
            <Link href="#" className="hover:text-primary">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}