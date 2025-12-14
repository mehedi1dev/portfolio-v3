"use client"

import { useState, useEffect } from "react"
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
    title: "Supply Chain Management",
    description: "End-to-end supply chain tracking and optimization system",
    image: "/supply-chain-dashboard.png",
    technologies: ["React", "GraphQL", "PostgreSQL", "Kubernetes"],
    demo: "#",
    github: "#",
  },
  {
    title: "Customer Support Platform",
    description: "Integrated ticketing system with live chat and knowledge base",
    image: "/support-ticket-interface.jpg",
    technologies: ["Next.js", "Socket.io", "Redis", "Elasticsearch"],
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
    description: "Kanban-style task board with drag-and-drop functionality",
    image: "/task-management-kanban.jpg",
    technologies: ["React", "DnD Kit", "Firebase", "Tailwind"],
    demo: "#",
    github: "#",
  },
  {
    title: "Weather Forecast App",
    description: "Beautiful weather app with detailed forecasts and location search",
    image: "/weather-forecast-app.png",
    technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
    demo: "#",
    github: "#",
  },
]

function ProjectCarousel({ projects }: { projects: typeof officeProjects }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const getCardsPerView = () => {
    if (typeof window === "undefined") return 3
    return window.innerWidth >= 1024 ? 3 : 1
  }

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView())

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView())
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalSlides = Math.ceil(projects.length / cardsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const visibleProjects = projects.slice(currentIndex * cardsPerView, currentIndex * cardsPerView + cardsPerView)

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, idx) => (
            <Card key={`${currentIndex}-${idx}`} className="overflow-hidden glass-effect group flex flex-col">
              <div className="relative overflow-hidden bg-muted h-48">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>

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
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {totalSlides > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 p-2 md:p-3 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg"
            aria-label="Previous projects"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 p-2 md:p-3 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg"
            aria-label="Next projects"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>
        </>
      )}

      {/* Carousel Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
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
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">Featured Projects</h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-base md:text-lg">
            {"// Some of my recent work"}
          </p>

          <div className="flex justify-center gap-2 mb-8 flex-wrap px-4">
            <button
              onClick={() => setActiveTab("office")}
              className={`px-4 md:px-6 py-2 rounded-lg font-medium transition-all text-sm md:text-base ${
                activeTab === "office"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Office Projects
            </button>
            <button
              onClick={() => setActiveTab("personal")}
              className={`px-4 md:px-6 py-2 rounded-lg font-medium transition-all text-sm md:text-base ${
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
