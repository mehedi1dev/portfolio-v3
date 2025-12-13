import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Vue.js"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "NestJS", "GraphQL", "REST APIs", "Microservices"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma", "Supabase"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Jest"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Skills & Technologies</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">{"// Tools I use to bring ideas to life"}</p>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 glass-effect hover:border-primary/50 transition-all">
                <h3 className="text-xl font-bold mb-4 text-primary">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
