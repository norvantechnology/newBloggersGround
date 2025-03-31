import { ReactNode } from "react";
import { Link } from "wouter";

type AuthLayoutProps = {
  children: ReactNode;
  title: string;
  subtitle: string;
};

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-white">
            <i className="ri-quill-pen-line text-xl"></i>
          </div>
          <span className="text-xl font-bold font-heading">Bloggers Ground</span>
        </Link>
      </div>

      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold mb-2">{title}</h1>
              <p className="text-slate-600 dark:text-slate-400">{subtitle}</p>
            </div>
            {children}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 border-t dark:border-slate-700">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © 2023 Bloggers Ground. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
