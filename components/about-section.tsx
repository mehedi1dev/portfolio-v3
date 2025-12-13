import { Card } from "@/components/ui/card"
import { Code2, Lightbulb, Rocket } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">About Me</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            {"// Passionate about building exceptional digital experiences"}
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-medium">Full-Stack Web Developer</span> with a passion for
                creating elegant solutions to complex problems. I specialize in building modern, responsive web
                applications that provide exceptional user experiences.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                With expertise in both <span className="text-foreground font-medium">frontend</span> and{" "}
                <span className="text-foreground font-medium">backend</span> technologies, I bring ideas to life through
                clean code, thoughtful design, and attention to detail.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <Card className="p-4 glass-effect text-center">
                  <Code2 className="mx-auto mb-2 text-primary" size={24} />
                  <p className="text-sm font-medium">Clean Code</p>
                </Card>
                <Card className="p-4 glass-effect text-center">
                  <Lightbulb className="mx-auto mb-2 text-accent" size={24} />
                  <p className="text-sm font-medium">Problem Solver</p>
                </Card>
                <Card className="p-4 glass-effect text-center">
                  <Rocket className="mx-auto mb-2 text-primary" size={24} />
                  <p className="text-sm font-medium">Fast Learner</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
