import MainLayout from '@/components/layout/MainLayout';

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="container py-12">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About Bloggers Ground
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A platform dedicated to sharing knowledge, inspiration, and stories 
              from our diverse community of writers and creators.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              At Bloggers Ground, we believe in the power of sharing knowledge and perspectives. 
              Our mission is to create a platform where diverse voices can come together to inform, 
              inspire, and engage readers from all walks of life.
            </p>
            <p className="text-muted-foreground mb-4">
              We're committed to fostering a community that values quality content, 
              thoughtful discussion, and the exploration of ideas across various domains 
              including technology, fashion, lifestyle, and more.
            </p>
            <p className="text-muted-foreground">
              Our platform is designed to be inclusive, accessible, and engaging, providing 
              both writers and readers with a seamless experience for creating and discovering content.
            </p>
          </div>
          <div className="relative h-72 md:h-full rounded-lg bg-muted overflow-hidden">
            {/* Placeholder for image - this would be replaced with actual image component */}
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              Mission Image Placeholder
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-10 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team members would be dynamically populated */}
            {[
              { name: 'Sarah Johnson', role: 'Founder & CEO', image: '' },
              { name: 'Alex Chen', role: 'Chief Editor', image: '' },
              { name: 'Michael Roberts', role: 'Technical Lead', image: '' },
              { name: 'Emily Wilson', role: 'Community Manager', image: '' }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Quality Content</h3>
              <p className="text-muted-foreground">
                We prioritize thoughtful, well-researched, and engaging content that provides 
                real value to our readers.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Diverse Perspectives</h3>
              <p className="text-muted-foreground">
                We celebrate the richness that comes from different viewpoints, backgrounds, 
                and areas of expertise.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Community Focus</h3>
              <p className="text-muted-foreground">
                We foster meaningful connections between writers and readers, creating 
                a vibrant ecosystem of shared knowledge.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
              <p className="text-muted-foreground">
                We strive to make our platform and content accessible to everyone, 
                regardless of background or ability.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace new technologies and formats to enhance how stories are told 
                and experienced.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-muted-foreground">
                We maintain high ethical standards in all our practices, from content 
                curation to community management.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-12 my-8 bg-primary/5 rounded-lg">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions, suggestions, or want to collaborate with us? 
              We'd love to hear from you.
            </p>
            <a 
              href="mailto:contact@bloggersground.com" 
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}