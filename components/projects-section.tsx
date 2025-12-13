"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const officeProjects = [
  {
    title: "Enterprise CRM System",
    description:
      "Full-featured CRM with analytics, reporting, and automation capabilities",
    image: "/enterprise-crm-dashboard.jpg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
    demo: "#",
    github: "#",
  },
  {
    title: "Internal HR Portal",
    description:
      "Employee management system with attendance, payroll, and leave tracking",
    image: "/hr-portal-interface.jpg",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    demo: "#",
    github: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time analytics platform with custom metrics and visualizations",
    image: "/analytics-dashboard.png",
    technologies: ["Next.js", "D3.js", "Python", "Docker"],
    demo: "#",
    github: "#",
  },
];

const personalProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce with cart, payments, and admin dashboard",
    image: "/ecommerce-storefront.jpg",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    demo: "#",
    github: "#",
  },
  {
    title: "Blog Platform",
    description:
      "Modern blogging platform with markdown support and SEO optimization",
    image: "/blog-platform.jpg",
    technologies: ["Next.js", "MDX", "Prisma", "Vercel"],
    demo: "#",
    github: "#",
  },
  {
    title: "Portfolio Generator",
    description:
      "Tool to create beautiful developer portfolios with customizable templates",
    image: "/portfolio-builder.jpg",
    technologies: ["React", "TypeScript", "Tailwind", "Supabase"],
    demo: "#",
    github: "#",
  },
];

function ProjectCarousel({ projects }: { projects: typeof officeProjects }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentIndex];

  return (
    <div className="relative">
      <Card className="overflow-hidden glass-effect group">
        <div className="relative overflow-hidden bg-muted h-64">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />

          {/* Carousel Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
            aria-label="Next project"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <Badge key={i} variant="secondary" className="text-xs font-mono">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2">
            <Button size="sm" variant="outline" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" />
                Demo
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} className="mr-2" />
                Code
              </a>
            </Button>
          </div>
        </div>
      </Card>

      {/* Carousel Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-primary"
                : "w-2 bg-muted-foreground/30"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"office" | "personal">("office");

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            {"// Some of my recent work"}
          </p>

          <div className="flex justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab("office")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeTab === "office"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Office Projects
            </button>
            <button
              onClick={() => setActiveTab("personal")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeTab === "personal"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Personal & Client Projects
            </button>
          </div>

          <ProjectCarousel
            projects={
              activeTab === "office" ? officeProjects : personalProjects
            }
          />
        </div>
      </div>
    </section>
  );
}
