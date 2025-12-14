import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, ExternalLink } from "lucide-react";

const blogPosts = [
  {
    title:
      "JavaScript vs Time: The Silent Bug That Ruins Production at 3 AM🕒💥",
    summary:
      "It’s 3:00 AM. Your phone vibrates. A user report just came in: My subscription expired yesterday… but today is yesterday?",
    date: "Dec 13, 2025",
    readTime: "2 min read",
    category: "Time Issue",
    image: "/blogOne.webp",
    url: "https://medium.com/@mehedi1dev/javascript-vs-time-the-silent-bug-that-ruins-production-at-3-am-f9e933456864",
  },
  {
    title: "🚀 Building Node.js Microservices: A Fun Beginner’s Guide",
    summary:
      "Microservices have become the go-to architecture for building scalable and flexible applications.",
    date: "Jan 26, 2025",
    readTime: "4 min read",
    category: "microServices",
    image: "/blogTwo.webp",
    url: "https://medium.com/@mehedi1dev/building-node-js-microservices-a-fun-beginners-guide-1f46f85434af",
  },
  {
    title: "Optimizing Performance in React with the Flyweight Pattern 🚀",
    summary:
      "In the world of software development, we’re always on a mission for efficiency — whether that’s in memory usage or performance.",
    date: "Oct 16, 2024",
    readTime: "4 min read",
    category: "Flyweight Pattern",
    image: "/blogThree.webp",
    url: "https://medium.com/@mehedi1dev/optimizing-performance-in-react-with-the-flyweight-pattern-af3ee858e6f4",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Latest Articles
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            {"// Thoughts on web development"}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden glass-effect group hover:border-primary/50 transition-all flex flex-col"
              >
                <div className="relative overflow-hidden bg-muted">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  {/* <Badge
                    variant="secondary"
                    className="mb-3 text-xs font-mono w-fit"
                  >
                    {post.category}
                  </Badge> */}

                  <h3 className="text-lg font-bold mb-2 line-clamp-2 text-pretty">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                    {post.summary}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    <a
                      href={post.url}
                      className="flex items-center gap-1 text-primary hover:gap-2 transition-all font-medium"
                      target="_blank"
                    >
                      Read more
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://medium.com/@mehedi1dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Articles on Medium
                <ExternalLink size={16} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
