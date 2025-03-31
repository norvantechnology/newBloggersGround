import { Link } from "wouter";

export default function Banner() {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" 
          alt="Desk with laptop and notebook" 
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
      </div>
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 leading-tight">
            Where Ideas <span className="text-primary-400">Find Their Voice</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-slate-200">
            Discover fresh perspectives on tech, fashion, lifestyle, and more from our community of passionate writers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/blogs">
              <a className="py-3 px-6 bg-primary text-white font-medium rounded-full hover:bg-primary-600 transition-colors text-center">
                Start Reading
              </a>
            </Link>
            <Link href="/signup">
              <a className="py-3 px-6 bg-white/10 backdrop-blur-sm hover:bg-white/20 font-medium rounded-full transition-colors text-center">
                Join Our Community
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
