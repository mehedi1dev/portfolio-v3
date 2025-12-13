"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"

const officeProjects = [
  {
    title: "Enterprise CRM System",
    description: "Full-featured CRM with analytics, reporting, and automation capabilities",
    image: "/enterprise-crm-dashboard.jpg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
    demo: "#",
    github: "#",
  },
  {
    title: "Internal HR Portal",
    description: "Employee management system with attendance, payroll, and leave tracking",
    image: "/hr-portal-interface.jpg",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    demo: "#",
    github: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics platform with custom metrics and visualizations",
    image: "/analytics-dashboard.png",
    technologies: ["Next.js", "D3.js", "Python", "Docker"],
    demo: "#",
    github: "#",
  },
  {
    title: "Supply Chain Manager",
    description: "End-to-end supply chain management with real-time tracking and inventory control",
    image: "/supply-chain-dashboard.png",
    technologies: ["Vue.js", "Express", "MySQL", "Redis"],
    demo: "#",
    github: "#",
  },
  {
    title: "Customer Support System",
    description: "Ticketing system with AI-powered responses and customer sentiment analysis",
    image: "/support-ticket-interface.jpg",
    technologies: ["React", "Python", "FastAPI", "PostgreSQL"],
    demo: "#",
    github: "#",
  },
]

const personalProjects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce with cart, payments, and admin dashboard",
    image: "/ecommerce-storefront.jpg",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    demo: "#",
    github: "#",
  },
  {
    title: "Blog Platform",
    description: "Modern blogging platform with markdown support and SEO optimization",
    image: "/blog-platform.jpg",
    technologies: ["Next.js", "MDX", "Prisma", "Vercel"],
    demo: "#",
    github: "#",
  },
  {
    title: "Portfolio Generator",
    description: "Tool to create beautiful developer portfolios with customizable templates",
    image: "/portfolio-builder.jpg",
    technologies: ["React", "TypeScript", "Tailwind", "Supabase"],
    demo: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description: "Kanban-style task manager with team collaboration and real-time updates",
    image: "/task-management-kanban.jpg",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
    demo: "#",
    github: "#",
  },
  {
    title: "Weather Forecast App",
    description: "Beautiful weather app with detailed forecasts and location-based alerts",
    image: "/weather-forecast-app.png",
    technologies: ["React Native", "TypeScript", "OpenWeather API"],
    demo: "#",
    github: "#",
  },
]

function ProjectCarousel({ projects }: { projects: typeof officeProjects }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating || currentIndex >= projects.length - 3) return
    setIsAnimating(true)
    setCurrentIndex((prev) => prev + 1)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating || currentIndex === 0) return
    setIsAnimating(true)
    setCurrentIndex((prev) => prev - 1)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const visibleProjects = projects.slice(currentIndex, currentIndex + 3)

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      {currentIndex > 0 && (
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous projects"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {currentIndex < projects.length - 3 && (
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next projects"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Carousel Container */}
      <div className="overflow-hidden px-2">
        <div
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / 3 + 2)}%)`,
          }}
        >
          {projects.map((project, index) => (
            <div key={index} className="flex-shrink-0 w-[calc(33.333%-1rem)]">
              <Card className="overflow-hidden glass-effect group h-full flex flex-col hover:shadow-xl transition-shadow">
                <div className="relative overflow-hidden bg-muted h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-3 text-sm leading-relaxed flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={14} className="mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: Math.max(1, projects.length - 2) }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true)
                setCurrentIndex(index)
                setTimeout(() => setIsAnimating(false), 500)
              }
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"office" | "personal">("office")

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Featured Projects</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">{"// Some of my recent work"}</p>

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

          <ProjectCarousel projects={activeTab === "office" ? officeProjects : personalProjects} />
        </div>
      </div>
    </section>
  )
}
