import { Link } from "wouter";
import { motion } from "framer-motion";

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
              <motion.a 
                whileHover={{ scale: 1.1, y: -3 }}
                href="#" 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors"
              >
                <i className="ri-twitter-x-line"></i>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -3 }}
                href="#" 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors"
              >
                <i className="ri-facebook-fill"></i>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -3 }}
                href="#" 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors"
              >
                <i className="ri-instagram-line"></i>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -3 }}
                href="#" 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors"
              >
                <i className="ri-linkedin-fill"></i>
              </motion.a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/blogs" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                  Blogs
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/web-stories" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                  Web Stories
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/categories" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                  Categories
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/about" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/contact" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </motion.li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/blogs?category=technology" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                  Technology
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/blogs?category=fashion" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                  Fashion
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/blogs?category=lifestyle" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                  Lifestyle
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/blogs?category=food" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                  Food
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/blogs?category=travel" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                  Travel
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/blogs?category=business" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                  Business
                </Link>
              </motion.li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <motion.p 
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-slate-600 dark:text-slate-300"
              >
                <i className="ri-map-pin-line mt-1"></i>
                <span>123 Blogger Street, Digital City, 45678</span>
              </motion.p>
              <motion.p 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-slate-600 dark:text-slate-300"
              >
                <i className="ri-mail-line"></i>
                <span>info@bloggersground.com</span>
              </motion.p>
              <motion.p 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-slate-600 dark:text-slate-300"
              >
                <i className="ri-phone-line"></i>
                <span>+1 (555) 123-4567</span>
              </motion.p>
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
              <Link href="/privacy-policy" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
