import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-800 border-t dark:border-slate-700">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-white">
                <i className="ri-quill-pen-line text-xl"></i>
              </div>
              <span className="text-xl font-bold font-heading">Bloggers Ground</span>
            </Link>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              A modern platform for passionate writers and avid readers to share and discover fresh perspectives on various topics.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors">
                <i className="ri-twitter-x-line"></i>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors">
                <i className="ri-linkedin-fill"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                    Blogs
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/web-stories">
                  <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                    Web Stories
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/categories">
                  <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                    Categories
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blogs?category=technology">
                  <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                    Technology
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blogs?category=fashion">
                  <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                    Fashion
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blogs?category=lifestyle">
                  <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                    Lifestyle
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blogs?category=food">
                  <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                    Food
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blogs?category=travel">
                  <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                    Travel
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blogs?category=business">
                  <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                    Business
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                <i className="ri-map-pin-line mt-1"></i>
                <span>123 Blogger Street, Digital City, 45678</span>
              </p>
              <p className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <i className="ri-mail-line"></i>
                <span>info@bloggersground.com</span>
              </p>
              <p className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <i className="ri-phone-line"></i>
                <span>+1 (555) 123-4567</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t dark:border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 dark:text-slate-400 text-sm text-center md:text-left">
              © 2023 Bloggers Ground. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/privacy-policy">
                <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
              </Link>
              <Link href="/terms-of-service">
                <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary-400 transition-colors">
                  Terms of Service
                </a>
              </Link>
              <Link href="/cookie-policy">
                <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary-400 transition-colors">
                  Cookie Policy
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
