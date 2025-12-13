import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "Advanced React Patterns: Compound Components",
    summary: "Learn how to create flexible and reusable React components using the compound component pattern.",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    category: "React",
    image: "/react-code-editor.jpg",
  },
  {
    title: "Building Type-Safe APIs with TypeScript",
    summary: "Discover best practices for creating fully type-safe APIs using TypeScript and modern tooling.",
    date: "Nov 28, 2024",
    readTime: "8 min read",
    category: "TypeScript",
    image: "/typescript-code.jpg",
  },
  {
    title: "Optimizing Next.js Performance",
    summary: "Practical tips and techniques to make your Next.js applications blazingly fast.",
    date: "Nov 15, 2024",
    readTime: "6 min read",
    category: "Next.js",
    image: "/performance-optimization.jpg",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Latest Articles</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">{"// Thoughts on web development"}</p>

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
                  <Badge variant="secondary" className="mb-3 text-xs font-mono w-fit">
                    {post.category}
                  </Badge>

                  <h3 className="text-lg font-bold mb-2 line-clamp-2 text-pretty">{post.title}</h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">{post.summary}</p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    <a href="#" className="flex items-center gap-1 text-primary hover:gap-2 transition-all font-medium">
                      Read more
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
