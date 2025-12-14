import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Management Information Systems",
    institution: "Daffodil International University",
    year: "2024",
  },
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Bangladesh University of Business & Technology",
    year: "2018 - 2022",
  },
];

const certifications = [
  {
    name: "Next.js 15 & React - The Complete Guide",
    issuer: "Udemy",
    year: "Present",
  },
  {
    name: "The Complete Python Developer",
    issuer: "Udemy",
    year: "2024",
  },
  {
    name: "Web Hosting - Create And Host Your Website Online!",
    issuer: "Udemy - Free Course",
    year: "2024",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Education & Certifications
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            {"// Continuous learning and growth"}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="text-primary" size={28} />
                Education
              </h3>
              <div className="space-y-3">
                {education.map((edu, index) => (
                  <Card key={index} className="p-4 glass-effect">
                    <h4 className="font-bold text-base mb-1">{edu.degree}</h4>
                    <p className="text-muted-foreground text-sm mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-primary text-xs font-mono">{edu.year}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="text-accent" size={28} />
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="p-3.5 glass-effect hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="font-semibold text-sm mb-0.5">
                          {cert.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {cert.issuer}
                        </p>
                      </div>
                      <Badge
                        variant="secondary"
                        className="font-mono text-xs flex-shrink-0"
                      >
                        {cert.year}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
