import Footer from "@/components/landing/Footer";
import Navigation from "@/components/landing/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { posts } from "@/lib/const";
import Image from "next/image";

export default async function Posts({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!slug) notFound();
  const post = posts.find((p) => p.slug === slug) as {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    featured: boolean;
    slug: string;
    content: string;
  } | undefined;
  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Development":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Startup":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "Design":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      case "Community":
        return "bg-primary/10 text-primary border-primary/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
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

            <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4 text-glow">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>

            <div className="flex items-center space-x-2">
              <User className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">By {post.author}</span>
            </div>
          </div>

          <div className="mb-12 overflow-hidden rounded-lg">
            <Image

              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
              width={800}
              height={600}
            />
          </div>

          <div className="prose prose-lg prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-h2:text-glow prose-h3:text-primary">
            <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeHighlight]}>
              {post.content}
            </ReactMarkdown>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">Written by {post.author}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
