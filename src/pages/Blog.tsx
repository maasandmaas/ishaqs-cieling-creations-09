
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ChevronRight, 
  Search, 
  CalendarDays, 
  User, 
  Tag,
  Clock
} from "lucide-react";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

const Blog = () => {
  useRevealAnimation();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Blog data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "5 Popular False Ceiling Designs for Modern Homes",
      excerpt: "Discover the latest trends in false ceiling designs that can transform your living spaces into stunning showcases of style and elegance.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc.",
      author: "Muhammad Ishaq",
      date: "April 15, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      category: "design",
      tags: ["design trends", "home improvement", "modern interiors"],
      featured: true
    },
    {
      id: 2,
      title: "The Benefits of Gypsum Ceilings in Residential Spaces",
      excerpt: "Explore why gypsum ceilings have become the preferred choice for homeowners looking for versatility, durability, and aesthetic appeal.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc.",
      author: "Ali Hassan",
      date: "March 22, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      category: "materials",
      tags: ["gypsum", "materials", "residential"],
      featured: true
    },
    {
      id: 3,
      title: "Integrating Smart Lighting with Your Ceiling Design",
      excerpt: "Learn how to incorporate smart lighting solutions into your ceiling design for both functionality and ambiance.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc.",
      author: "Farhan Ahmed",
      date: "February 10, 2023",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1511578194003-00c80e42dc9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "technology",
      tags: ["smart home", "lighting", "automation"],
      featured: true
    },
    {
      id: 4,
      title: "Acoustic Ceiling Solutions for Noise Reduction",
      excerpt: "Discover how acoustic ceiling treatments can significantly reduce noise and improve the sound quality in your home or office.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc.",
      author: "Imran Khan",
      date: "January 5, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
      category: "acoustics",
      tags: ["acoustics", "noise reduction", "sound design"],
      featured: false
    },
    {
      id: 5,
      title: "Wooden Ceiling Designs: Adding Warmth to Your Space",
      excerpt: "Explore the timeless appeal of wooden ceilings and how they can add warmth, character, and natural beauty to any room.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc.",
      author: "Muhammad Ishaq",
      date: "December 18, 2022",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1615529162924-f8605388461d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
      category: "materials",
      tags: ["wood", "materials", "natural design"],
      featured: false
    },
    {
      id: 6,
      title: "POP Design Trends for Living Room Ceilings",
      excerpt: "Get inspired by the latest Plaster of Paris (POP) ceiling design trends that are perfect for making your living room stand out.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc.",
      author: "Bilal Malik",
      date: "November 30, 2022",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      category: "design",
      tags: ["POP", "living room", "design trends"],
      featured: false
    },
    {
      id: 7,
      title: "Budget-Friendly Ceiling Renovation Ideas",
      excerpt: "Discover practical and affordable ways to renovate your ceiling without breaking the bank, while still achieving a high-end look.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc.",
      author: "Ali Hassan",
      date: "October 12, 2022",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "tips",
      tags: ["budget", "renovation", "DIY"],
      featured: false
    },
    {
      id: 8,
      title: "Commercial Ceiling Solutions for Office Spaces",
      excerpt: "Learn about the most effective ceiling solutions for commercial and office environments that balance aesthetics with functionality.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc.",
      author: "Farhan Ahmed",
      date: "September 5, 2022",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "commercial",
      tags: ["office", "commercial", "workspace design"],
      featured: false
    },
    {
      id: 9,
      title: "The Impact of Ceiling Height on Room Perception",
      excerpt: "Understand how ceiling height affects the perception of space and how to optimize your ceiling design based on room dimensions.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc.",
      author: "Muhammad Ishaq",
      date: "August 22, 2022",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1551649001-7a2482d98d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      category: "design",
      tags: ["design psychology", "architecture", "spatial perception"],
      featured: false
    }
  ];

  // Filter categories
  const categories = [
    { id: "all", name: "All Posts" },
    { id: "design", name: "Design" },
    { id: "materials", name: "Materials" },
    { id: "technology", name: "Technology" },
    { id: "acoustics", name: "Acoustics" },
    { id: "tips", name: "Tips & Advice" },
    { id: "commercial", name: "Commercial" }
  ];

  // Featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);

  // Filter and search posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeFilter === "all" || post.category === activeFilter;
    const matchesSearch = !searchQuery.trim() || 
                          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-fixed opacity-20" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1551649001-7a2482d98d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center reveal">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
              Our Blog & Resources
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our collection of articles, tips, and insights about ceiling design, materials, trends, and best practices.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-midnight border-gray-700 focus:border-gold pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 md:py-24 bg-midnight-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16 reveal">
              <h6 className="text-gold mb-4 font-montserrat uppercase tracking-wider">Featured Articles</h6>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-gradient">
                Highlighted Resources
              </h2>
              <p className="text-gray-300">
                Discover our most informative and popular articles to help you with your ceiling project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <div key={post.id} className="bg-midnight rounded-xl fancy-border overflow-hidden reveal hover-glow transition-all duration-300 h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-gold text-black text-xs uppercase font-bold py-1 px-2 rounded">
                      Featured
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-xs text-gray-400 mb-4 space-x-4">
                      <div className="flex items-center">
                        <CalendarDays size={14} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-playfair font-bold text-white mb-3 hover:text-gold transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center text-sm">
                        <Tag size={14} className="text-gold mr-1" />
                        <span className="text-gold capitalize">{post.category}</span>
                      </div>
                      <Button 
                        variant="outline" 
                        className="border-gold hover:bg-gold/10 text-gold text-sm px-3 py-1 h-auto"
                      >
                        Read More
                        <ChevronRight size={14} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 reveal">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-gradient">
              Blog Articles
            </h2>
            <p className="text-gray-300">
              Browse our collection of informative articles about ceiling designs, materials, and industry insights.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                className={activeFilter === category.id 
                  ? "bg-gold hover:bg-gold-dark text-black" 
                  : "border-gold/30 text-gray-300 hover:text-gold hover:border-gold"}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-midnight-light rounded-xl fancy-border overflow-hidden reveal hover-glow transition-all duration-300 h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-midnight-accent text-white text-xs uppercase font-bold py-1 px-2 rounded">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center">
                      <CalendarDays size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-white mb-3 hover:text-gold transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-midnight-accent text-gray-300 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">
                      <Clock size={14} className="inline mr-1" />
                      {post.readTime}
                    </span>
                    <Button 
                      variant="outline" 
                      className="border-gold hover:bg-gold/10 text-gold text-sm px-3 py-1 h-auto"
                    >
                      Read More
                      <ChevronRight size={14} className="ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-300">No articles found matching your criteria.</p>
              <Button 
                className="mt-4 bg-gold hover:bg-gold-dark text-black"
                onClick={() => {
                  setActiveFilter("all");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-midnight-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-celestial rounded-xl p-8 md:p-12 text-center reveal fancy-border">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-gradient">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Stay updated with our latest articles, industry insights, and ceiling design trends. Subscribe to our newsletter for monthly updates.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-midnight border-gray-700 focus:border-gold"
              />
              <Button 
                className="bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black hover:from-gold hover:to-gold-dark transition-all duration-300 animate-glow"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-gray-400 text-xs mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center reveal">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-gradient">
              Have Questions About Your Ceiling Project?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team is ready to provide expert advice and answer any questions you might have about your ceiling design or installation project.
            </p>
            <Button 
              asChild 
              className="bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black hover:from-gold hover:to-gold-dark transition-all duration-300 animate-glow font-montserrat"
            >
              <Link to="/contact">
                Contact Our Experts
                <ChevronRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
