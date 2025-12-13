"use client"

import { useState } from "react"
import { Palette, X } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

const presetColors = [
  { name: "Cyan", value: "#06b6d4" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Purple", value: "#a855f7" },
  { name: "Pink", value: "#ec4899" },
  { name: "Green", value: "#10b981" },
  { name: "Orange", value: "#f59e0b" },
  { name: "Red", value: "#ef4444" },
  { name: "Teal", value: "#14b8a6" },
]

export function ColorPicker() {
  const [isOpen, setIsOpen] = useState(false)
  const { accentColor, setAccentColor } = useTheme()

  return (
    <>
      {/* Toggle Button - Bottom Right */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform"
        aria-label="Color picker"
      >
        <Palette size={20} />
      </button>

      {/* Color Picker Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 bg-card border border-border rounded-lg shadow-xl p-4 w-64">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold">Accent Color</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded hover:bg-muted transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {presetColors.map((color) => (
              <button
                key={color.value}
                onClick={() => setAccentColor(color.value)}
                className="relative group"
                aria-label={color.name}
              >
                <div
                  className="w-12 h-12 rounded-lg transition-transform hover:scale-110 border-2"
                  style={{
                    backgroundColor: color.value,
                    borderColor: accentColor === color.value ? color.value : "transparent",
                  }}
                />
                {accentColor === color.value && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                )}
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {color.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
