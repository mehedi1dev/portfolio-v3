"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const officeProjects = [
  {
    title: "Media Management System",
    description:
      "Next-generation Media Management System with advanced analytics, campaign tracking, and cross-platform performance metrics.",
    image: "/private.jpg",
    technologies: ["React.js", "TailWindCSS", "AntD", ".Net Core", "MSSQL"],
    demo: "#",
    showDemo: false,
    github: "#",
    showGithub: false,
  },
  {
    title: "Space Management System",
    description:
      "Intelligent Space Management Tool for booking meeting rooms, desks, and other workplace resources with ease and efficiency.",
    image: "/private.jpg",
    technologies: [
      "React.js",
      "TailWindCSS",
      "AntD",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
    ],
    demo: "#",
    showDemo: false,
    github: "#",
    showGithub: false,
  },
  {
    title: " IT Services Management",
    description:
      "Comprehensive IT Services Management platform for ticket management, service requests, and IT resource allocation. Get the support you need, when you need it.",
    image: "/private.jpg",
    technologies: ["React.js", "AntD", "Redux", ".Net Core", "MSSQL"],
    demo: "#",
    showDemo: false,
    github: "#",
    showGithub: false,
  },
  {
    title: "Requistion & Expense Management",
    description:
      "Manage all your requisitions and cash expenses efficiently in one centralized system. Track approvals, budgets, and expense reports in real-time.",
    image: "/private.jpg",
    technologies: [
      "React.js",
      "TailWindCSS",
      "Material UI",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
    ],
    demo: "#",
    showDemo: false,
    github: "#",
    showGithub: false,
  },
  {
    title: "Task Tracking System",
    description:
      "Comprehensive Task Tracking solution for teams with project management, deadline tracking, and team collaboration features.",
    image: "/private.jpg",
    technologies: ["React.js", "TailWindCSS", "AntD", ".Net Core", "MSSQL"],
    demo: "#",
    showDemo: false,
    github: "#",
    showGithub: false,
  },
];

const personalProjects = [
  {
    title: "Dealer Management System",
    description: "Dealer Management System",
    image: "/mojut.jpg",
    technologies: ["React.js", "TailWindCSS", "AntD", "NodeJS", "PostgreSQL"],
    demo: "https://mojut.com/",
    showDemo: true,
    github: "#",
    showGithub: false,
  },
  {
    title: "Link Share App",
    description: "Link Share App - UI Only",
    image: "/linkShareApp.png",
    technologies: ["React.js"],
    demo: "https://link-sharing-app-mehedi1dev.netlify.app/",
    showDemo: true,
    github: "https://github.com/mehedi1dev/link-sharing-app",
    showGithub: true,
  },
  {
    title: "Agency Landing Page",
    description: "Agency Landing Page - UI Only",
    image: "/agencyApp.png",
    technologies: ["React.js"],
    demo: "https://mehedi1dev.github.io/Agency-Website/",
    showDemo: true,
    github: "https://github.com/mehedi1dev/Agency-Website",
    showGithub: true,
  },
];

function ProjectCarousel({ projects }: { projects: typeof officeProjects }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getCardsPerView = () => {
    if (typeof window === "undefined") return 3;
    return window.innerWidth >= 1024 ? 3 : 1;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(projects.length / cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleProjects = projects.slice(
    currentIndex * cardsPerView,
    currentIndex * cardsPerView + cardsPerView
  );

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, idx) => (
            <Card
              key={`${currentIndex}-${idx}`}
              className="overflow-hidden glass-effect group flex flex-col"
            >
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
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs font-mono"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.showDemo && (
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.showGithub && (
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
                  )}
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
              index === currentIndex
                ? "w-8 bg-primary"
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"office" | "personal">("office");

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            Featured Projects
          </h2>
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
