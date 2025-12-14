"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Database, Layers, Wrench } from "lucide-react"

const skillCategories = [
  {
    category: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Vue.js"],
  },
  {
    category: "Backend",
    icon: Layers,
    skills: ["Node.js", "Express", "NestJS", "GraphQL", "REST APIs", "Microservices"],
  },
  {
    category: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma", "Supabase"],
  },
  {
    category: "Tools & DevOps",
    icon: Wrench,
    skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Jest"],
  },
]

export function SkillsSection() {
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
    <section id="skills" className="py-16 md:py-24" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">Skills & Technologies</h2>
            <p className="text-center text-muted-foreground mb-8 md:mb-12 text-base md:text-lg">
              {"// Tools I use to bring ideas to life"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index}
                  className={`relative group p-6 rounded-xl bg-gradient-to-br from-primary/5 via-background to-background border border-border hover:border-primary/50 transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                  <div className="relative">
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{category.category}</h3>
                    <div className="space-y-2">
                      {category.skills.map((skill, i) => (
                        <div
                          key={i}
                          className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all font-mono"
                        >
                          • {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
