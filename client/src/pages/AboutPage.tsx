import MainLayout from "@/layouts/MainLayout";
import Newsletter from "@/components/Newsletter";

export default function AboutPage() {
  return (
    <MainLayout>
      {/* About Hero Section */}
      <section className="py-16 md:py-20 bg-slate-100 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold font-heading mb-6">About Bloggers Ground</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              A modern platform for passionate writers and avid readers to share and discover fresh perspectives on various topics.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">Our Mission</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                At Bloggers Ground, our mission is to create a vibrant community of writers and readers who share a passion for learning, discovery, and storytelling. We believe in the power of diverse perspectives and aim to provide a platform where ideas can flourish and reach audiences across the globe.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                We're committed to fostering meaningful conversations, inspiring creativity, and promoting knowledge sharing through well-crafted content that spans a wide range of topics from technology and fashion to lifestyle and beyond.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-slate-100 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">Meet Our Team</h2>
            <p className="text-slate-600 dark:text-slate-300">
              The passionate individuals behind Bloggers Ground who work tirelessly to bring you the best content and experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm text-center">
              <img 
                src="https://i.pravatar.cc/300?img=1" 
                alt="Sarah Johnson - Founder & Editor-in-Chief" 
                className="w-full h-64 object-cover object-center"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                <p className="text-primary dark:text-primary-400 mb-4">Founder & Editor-in-Chief</p>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  With over 10 years of experience in digital publishing, Sarah leads our editorial vision and content strategy.
                </p>
                <div className="flex justify-center gap-4">
                  <a href="#" className="text-slate-500 hover:text-primary transition-colors">
                    <i className="ri-twitter-x-line text-lg"></i>
                  </a>
                  <a href="#" className="text-slate-500 hover:text-primary transition-colors">
                    <i className="ri-linkedin-fill text-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm text-center">
              <img 
                src="https://i.pravatar.cc/300?img=3" 
                alt="David Chen - Technical Director" 
                className="w-full h-64 object-cover object-center"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">David Chen</h3>
                <p className="text-primary dark:text-primary-400 mb-4">Technical Director</p>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  David oversees our technology infrastructure and ensures our platform provides the best experience for our users.
                </p>
                <div className="flex justify-center gap-4">
                  <a href="#" className="text-slate-500 hover:text-primary transition-colors">
                    <i className="ri-github-fill text-lg"></i>
                  </a>
                  <a href="#" className="text-slate-500 hover:text-primary transition-colors">
                    <i className="ri-linkedin-fill text-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm text-center">
              <img 
                src="https://i.pravatar.cc/300?img=5" 
                alt="Olivia Martinez - Creative Director" 
                className="w-full h-64 object-cover object-center"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Olivia Martinez</h3>
                <p className="text-primary dark:text-primary-400 mb-4">Creative Director</p>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Olivia brings her eye for design and storytelling expertise to ensure our content is both beautiful and engaging.
                </p>
                <div className="flex justify-center gap-4">
                  <a href="#" className="text-slate-500 hover:text-primary transition-colors">
                    <i className="ri-instagram-line text-lg"></i>
                  </a>
                  <a href="#" className="text-slate-500 hover:text-primary transition-colors">
                    <i className="ri-behance-fill text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">Contact Us</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-8">
                  Have questions, feedback, or would like to work with us? We'd love to hear from you! Feel free to reach out using any of the methods below.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 text-primary dark:bg-primary-900/30 dark:text-primary-400">
                      <i className="ri-map-pin-line text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Address</h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        123 Blogger Street, Digital City, 45678
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 text-primary dark:bg-primary-900/30 dark:text-primary-400">
                      <i className="ri-mail-line text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        info@bloggersground.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 text-primary dark:bg-primary-900/30 dark:text-primary-400">
                      <i className="ri-phone-line text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 text-primary dark:bg-primary-900/30 dark:text-primary-400">
                      <i className="ri-share-line text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Social Media</h3>
                      <div className="flex gap-4 mt-2">
                        <a href="#" className="text-slate-500 hover:text-primary transition-colors">
                          <i className="ri-twitter-x-line text-xl"></i>
                        </a>
                        <a href="#" className="text-slate-500 hover:text-primary transition-colors">
                          <i className="ri-facebook-fill text-xl"></i>
                        </a>
                        <a href="#" className="text-slate-500 hover:text-primary transition-colors">
                          <i className="ri-instagram-line text-xl"></i>
                        </a>
                        <a href="#" className="text-slate-500 hover:text-primary transition-colors">
                          <i className="ri-linkedin-fill text-xl"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-96 bg-slate-100 dark:bg-slate-700 rounded-xl overflow-hidden">
                {/* Google Map Embed Placeholder */}
                <div className="w-full h-full flex items-center justify-center bg-slate-100 dark:bg-slate-700">
                  <p className="text-slate-500 dark:text-slate-400">Google Map would be embedded here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </MainLayout>
  );
}
