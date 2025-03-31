import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Subscription successful!",
        description: "Thanks for subscribing to our newsletter.",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "An error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-primary text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400 opacity-50"></div>
          <div className="absolute right-0 bottom-0">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
              <path d="M180 60H160V40H180V60ZM180 100H160V80H180V100ZM180 140H160V120H180V140ZM180 180H160V160H180V180ZM140 60H120V40H140V60ZM140 100H120V80H140V100ZM140 140H120V120H140V140ZM140 180H120V160H140V180ZM100 60H80V40H100V60ZM100 100H80V80H100V100ZM100 140H80V120H100V140ZM100 180H80V160H100V180ZM60 60H40V40H60V60ZM60 100H40V80H60V100ZM60 140H40V120H60V140ZM60 180H40V160H60V180ZM20 60H0V40H20V60ZM20 100H0V80H20V100ZM20 140H0V120H20V140ZM20 180H0V160H20V180Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">Stay Updated with Weekly Insights</h2>
            <p className="mb-6 text-white/80">Join our newsletter to receive the latest trends, tips, and exclusive content directly in your inbox.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button 
                  type="submit" 
                  className="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-white/90 transition-colors"
                  disabled={loading}
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
              <p className="mt-3 text-sm text-white/60">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
