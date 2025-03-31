import Layout from "@/components/Layout";
import Newsletter from "@/components/Newsletter";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Bloggers Ground</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Sharing knowledge, amplifying voices, and connecting communities through thoughtful content.
            </p>
          </div>
          
          {/* Our Story Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="prose dark:prose-invert prose-lg max-w-none">
              <p>
                Bloggers Ground was founded in 2022 with a simple mission: to create a platform where diverse voices could share knowledge, experiences, and ideas with the world. In an age of information overload, we saw the need for thoughtful, well-crafted content that could rise above the noise.
              </p>
              <p>
                What began as a small community of writers passionate about technology and creativity has grown into a thriving ecosystem covering a wide range of topics from tech innovations to sustainable fashion, travel adventures to health and wellness insights.
              </p>
              <p>
                Our platform is built on the belief that great content should be accessible, engaging, and enriching. We're dedicated to providing a space where both writers and readers can connect through stories that inform, inspire, and occasionally challenge conventional thinking.
              </p>
            </div>
          </section>
          
          {/* Mission & Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission & Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Quality Content</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We believe in substance over noise. Each article published on Bloggers Ground undergoes thorough review for accuracy, clarity, and value to our readers.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Diverse Perspectives</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We actively seek and amplify a wide range of voices and viewpoints, believing that diversity leads to richer conversations and deeper understanding.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Community Connection</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Beyond content, we're building a community where readers and writers can engage, learn from each other, and form meaningful connections.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We embrace new formats and technologies that enhance the reading experience, like our immersive web stories that bring content to life in new ways.
                </p>
              </div>
            </div>
          </section>
          
          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Alex Thompson"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">Alex Thompson</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">Founder & Editor-in-Chief</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Tech enthusiast and AI specialist with a passion for making complex topics accessible to everyone.
                </p>
              </div>
              <div className="text-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Sophia Martinez"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">Sophia Martinez</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">Content Director</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Fashion editor and sustainability advocate bringing ethical style discussions to the forefront.
                </p>
              </div>
              <div className="text-center">
                <img 
                  src="https://randomuser.me/api/portraits/men/22.jpg" 
                  alt="Marcus Johnson"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">Marcus Johnson</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">Marketing Lead</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Marketing strategist with a deep understanding of consumer psychology and digital engagement.
                </p>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/contact" 
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                Meet our extended team
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </section>
          
          {/* Join Us Section */}
          <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Whether you're a reader looking for insightful content or a writer wanting to share your expertise, Bloggers Ground has a place for you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/signup" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-colors"
                >
                  Create an Account
                </Link>
                <Link
                  href="/contact" 
                  className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Newsletter />
    </Layout>
  );
}