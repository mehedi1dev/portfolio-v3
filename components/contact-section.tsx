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
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Get In Touch</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            {"// Let's build something amazing together"}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's talk</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                  visions.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="p-4 glass-effect flex items-center gap-3 hover:border-primary/50 transition-all">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">hello@developer.com</p>
                  </div>
                </Card>

                <Card className="p-4 glass-effect flex items-center gap-3 hover:border-primary/50 transition-all">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Github size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="font-medium">@yourusername</p>
                  </div>
                </Card>

                <Card className="p-4 glass-effect flex items-center gap-3 hover:border-primary/50 transition-all">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-medium">/in/yourprofile</p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-6 glass-effect">
              <form onSubmit={handleSubmit} className="space-y-4">
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

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full group">
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </form>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-border text-center text-muted-foreground">
            <p className="font-mono text-sm">{"<Built with Next.js, TypeScript, and Tailwind CSS />"}</p>
            <p className="mt-2 text-sm">© 2025 Full-Stack Developer. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
