"use client";

import type React from "react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for form lifecycle
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (message: string, type: "success" | "error") => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), 5000); // Hide after 5 seconds
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://submit-form.com/BzpjCsfI", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Reset form
        showToast(
          "Message sent successfully! I'll get back to you soon.",
          "success"
        );
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      setStatus("error");
      showToast("Something went wrong. Please try again later.", "error");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      {/* --- Custom Toast Notification --- */}
      {toastMessage && (
        <div className="fixed top-20 left-5 z-50 animate-in slide-in-from-bottom-5">
          <div
            className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-2xl border ${
              status === "success"
                ? "bg-background border-green-500 text-green-500"
                : "bg-background border-destructive text-destructive"
            }`}
          >
            {status === "success" ? (
              <CheckCircle2 size={20} />
            ) : (
              <XCircle size={20} />
            )}
            <span className="text-sm font-medium text-foreground">
              {toastMessage}
            </span>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-base md:text-lg">
            {"// Let's build something amazing together"}
          </p>

          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="mailto:s.mehedi2022@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="p-4 glass-effect flex flex-col items-center gap-3 hover:border-primary/50 hover:bg-primary/5 hover:scale-105 transition-all cursor-pointer h-full">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail size={24} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-medium text-sm break-all">
                      s.mehedi2022@gmail.com
                    </p>
                  </div>
                </Card>
              </a>

              <a
                href="https://github.com/mehedi1dev"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="p-4 glass-effect flex flex-col items-center gap-3 hover:border-primary/50 hover:bg-primary/5 hover:scale-105 transition-all cursor-pointer h-full">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Github size={24} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">GitHub</p>
                    <p className="font-medium text-sm">@mehedi1dev</p>
                  </div>
                </Card>
              </a>

              <a
                href="https://linkedin.com/in/mehedi1dev"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="p-4 glass-effect flex flex-col items-center gap-3 hover:border-primary/50 hover:bg-primary/5 hover:scale-105 transition-all cursor-pointer h-full">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Linkedin size={24} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">
                      LinkedIn
                    </p>
                    <p className="font-medium text-sm">/in/mehedi1dev</p>
                  </div>
                </Card>
              </a>
            </div>

            {/* Contact Form */}
            <Card className="p-6 md:p-8 glass-effect">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      disabled={status === "loading"}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      disabled={status === "loading"}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    disabled={status === "loading"}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full px-8 group"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      Sending...
                      <Loader2 className="ml-2 animate-spin" size={16} />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                        size={16}
                      />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-border text-center text-muted-foreground">
            <p className="font-mono text-xs md:text-sm">
              {"<Built with Next.js, TypeScript, and Tailwind CSS />"}
            </p>
            <p className="mt-2 text-xs md:text-sm">
              © {new Date().getFullYear()} S M Mehedi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
