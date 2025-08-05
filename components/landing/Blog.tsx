import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import Link from 'next/link';
import { posts } from '@/lib/const';
import Image from 'next/image';

const Blog = () => {
  



type Category = 'Development' | 'Startup' | 'Design' | 'Community' | string;

const getCategoryColor = (category: Category): string => {
    switch (category) {
        case 'Development': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
        case 'Startup': return 'bg-green-500/10 text-green-400 border-green-500/20';
        case 'Design': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
        case 'Community': return 'bg-primary/10 text-primary border-primary/20';
        default: return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
};

  return (
    <section id="blog" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/50 bg-primary/10">
            Resources
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 text-glow">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, tutorials, and stories from the community
          </p>
        </div>

        {/* Featured Post */}
        {posts.filter(post => post.featured).map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <Card className="mb-12 overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group cursor-pointer">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 lg:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  Featured
                </Badge>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <Badge variant="outline" className={getCategoryColor(post.category)}>
                      {post.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-lg">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{post.author}</span>
                    </div>
                    <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
            </Card>
          </Link>
        ))}

        {/* Other Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.filter(post => !post.featured).map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow overflow-hidden cursor-pointer">
              <div className="relative overflow-hidden">
                <Image
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <Badge 
                  variant="outline" 
                  className={`absolute top-3 right-3 ${getCategoryColor(post.category)}`}
                >
                  {post.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{post.author}</span>
                    </div>
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button className="btn-outline-glow" size="lg">
            View All Posts
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;