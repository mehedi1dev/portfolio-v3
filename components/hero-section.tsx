import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 code-grid opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono">
            {"// Available for new opportunities"}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Full-Stack
            <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Web Developer
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto text-pretty">
            Building scalable & modern web applications with{" "}
            <span className="text-foreground font-medium">JavaScript</span>,{" "}
            <span className="text-foreground font-medium">TypeScript</span>,{" "}
            <span className="text-foreground font-medium">React</span>,{" "}
            <span className="text-foreground font-medium">Next.js</span>, and{" "}
            <span className="text-foreground font-medium">Node.js</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="group">
              View Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button size="icon" variant="ghost" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <a href="mailto:hello@example.com">
                <Mail size={20} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
