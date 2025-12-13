"use client"

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { BlogSection } from "@/components/blog-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { ColorPicker } from "@/components/color-picker"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider>
      <main className="relative min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <EducationSection />
        <ContactSection />
        <ColorPicker />
      </main>
    </ThemeProvider>
  )
}
