import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

export function NavBar({ items, className }) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleNavigation = (item) => {
    setActiveTab(item.name)
    
    // Smooth scroll to section
    if (item.url && item.url.startsWith('#')) {
      const targetId = item.url.substring(1)
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-black/20 border border-neutral-700 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <button
              key={item.name}
              onClick={() => handleNavigation(item)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-gray-300 hover:text-white",
                isActive && "bg-neutral-800 text-white",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-orange-500/20 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-orange-500 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-orange-500/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-orange-500/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-orange-500/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
