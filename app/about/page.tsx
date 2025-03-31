import MainLayout from '@/components/layout/MainLayout';

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-background to-secondary/10 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Bloggers Ground</h1>
            <p className="text-xl text-muted-foreground mb-8">
              A modern platform for bloggers to share their insights and stories
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose dark:prose-invert">
            <h2>Our Mission</h2>
            <p>
              At Bloggers Ground, we believe in the power of sharing knowledge and stories. Our mission is to create a platform that empowers writers, thinkers, and content creators to reach audiences passionate about their topics.
            </p>
            <p>
              We're dedicated to fostering a community where diverse voices can thrive, providing tools and resources that make publishing accessible to everyone, regardless of technical expertise.
            </p>

            <h2>Our Story</h2>
            <p>
              Bloggers Ground began as a small project in 2023, founded by a group of writers and developers who felt that existing blogging platforms were either too technical or too limiting for creative expression.
            </p>
            <p>
              What started as a simple idea has grown into a vibrant community of writers and readers from around the world, covering topics from technology and business to travel and personal development.
            </p>

            <h2>Our Values</h2>
            <ul>
              <li><strong>Accessibility</strong> - We believe knowledge sharing should be open to everyone</li>
              <li><strong>Quality</strong> - We promote thoughtful, well-researched content</li>
              <li><strong>Community</strong> - We foster meaningful connections between writers and readers</li>
              <li><strong>Innovation</strong> - We continuously improve our platform to better serve creators</li>
              <li><strong>Diversity</strong> - We celebrate a wide range of perspectives and topics</li>
            </ul>

            <h2>The Team</h2>
            <p>
              Our team consists of passionate individuals with backgrounds in publishing, technology, design, and community building. Together, we work to create the best possible platform for bloggers and their audiences.
            </p>

            <h2>Join Our Community</h2>
            <p>
              Whether you're a seasoned writer or just getting started, Bloggers Ground offers the tools, audience, and support to help you succeed. We invite you to explore our platform, read our diverse content, and consider sharing your own voice.
            </p>
            <p>
              Have questions or feedback? We'd love to hear from you. Contact us at <a href="mailto:hello@bloggersground.com">hello@bloggersground.com</a>.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}