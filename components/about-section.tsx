"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Code2, Lightbulb, Rocket } from "lucide-react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">About Me</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              {"// Passionate about building exceptional digital experiences"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center">
                <div className="text-8xl animate-bounce-slow">👨‍💻</div>
              </div>
            </div>

            <div
              className={`space-y-6 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">S M Mehedi</h3>

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
                <Card className="p-4 glass-effect text-center hover:scale-105 transition-transform duration-300">
                  <Code2 className="mx-auto mb-2 text-primary" size={24} />
                  <p className="text-sm font-medium">Clean Code</p>
                </Card>
                <Card className="p-4 glass-effect text-center hover:scale-105 transition-transform duration-300">
                  <Lightbulb className="mx-auto mb-2 text-accent" size={24} />
                  <p className="text-sm font-medium">Problem Solver</p>
                </Card>
                <Card className="p-4 glass-effect text-center hover:scale-105 transition-transform duration-300">
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
