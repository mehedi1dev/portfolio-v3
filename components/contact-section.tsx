"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">Get In Touch</h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-base md:text-lg">
            {"// Let's build something amazing together"}
          </p>

          <div className="space-y-8">
            {/* Contact Info Cards - 3 in a row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a href="mailto:hello@developer.com" className="block" target="_blank" rel="noopener noreferrer">
                <Card className="p-4 glass-effect flex flex-col items-center gap-3 hover:border-primary/50 hover:bg-primary/5 hover:scale-105 transition-all cursor-pointer h-full">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail size={24} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-medium text-sm break-all">hello@developer.com</p>
                  </div>
                </Card>
              </a>

              <a href="https://github.com/yourusername" className="block" target="_blank" rel="noopener noreferrer">
                <Card className="p-4 glass-effect flex flex-col items-center gap-3 hover:border-primary/50 hover:bg-primary/5 hover:scale-105 transition-all cursor-pointer h-full">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Github size={24} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">GitHub</p>
                    <p className="font-medium text-sm">@yourusername</p>
                  </div>
                </Card>
              </a>

              <a href="https://linkedin.com/in/yourprofile" className="block" target="_blank" rel="noopener noreferrer">
                <Card className="p-4 glass-effect flex flex-col items-center gap-3 hover:border-primary/50 hover:bg-primary/5 hover:scale-105 transition-all cursor-pointer h-full">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Linkedin size={24} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                    <p className="font-medium text-sm">/in/yourprofile</p>
                  </div>
                </Card>
              </a>
            </div>

            {/* Contact Form */}
            <Card className="p-6 md:p-8 glass-effect">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full px-8 group">
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </form>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-border text-center text-muted-foreground">
            <p className="font-mono text-xs md:text-sm">{"<Built with Next.js, TypeScript, and Tailwind CSS />"}</p>
            <p className="mt-2 text-xs md:text-sm">© 2025 Full-Stack Developer. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
