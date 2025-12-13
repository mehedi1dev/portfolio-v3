import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    role: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    duration: "2022 - Present",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    role: "Full-Stack Developer",
    company: "Digital Solutions Ltd.",
    duration: "2020 - 2022",
    technologies: ["React", "TypeScript", "Express", "MongoDB", "Docker"],
  },
  {
    role: "Junior Web Developer",
    company: "StartUp Ventures",
    duration: "2019 - 2020",
    technologies: ["JavaScript", "React", "HTML", "CSS", "Git"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Professional Experience</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">{"// Journey through my career"}</p>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-5 glass-effect hover:border-primary/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground flex-shrink-0">
                    <Calendar size={14} />
                    {exp.duration}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="font-mono text-xs">
                      {tech}
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
