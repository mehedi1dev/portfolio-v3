import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior Executive, Software Development",
    company: "AML Media Group",
    duration: "2025 - Present",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      ".Net Core",
      "MS Sql Server",
    ],
  },
  {
    role: "Executive, Software Development",
    company: "AML Media Group",
    duration: "2023 - 2024",
    technologies: ["React", "JavaScript", "Express", "MongoDB", "Azure"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Professional Experience
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            {"// Journey through my career"}
          </p>

          <div className="space-y-3">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-4 glass-effect hover:border-primary/50 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <Briefcase size={16} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold">{exp.role}</h3>
                      <p className="text-xs text-muted-foreground">
                        {exp.company} • {exp.duration}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:ml-auto">
                    {exp.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="font-mono text-xs py-0 h-5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
