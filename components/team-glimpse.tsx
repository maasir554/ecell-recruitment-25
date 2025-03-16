"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const teamMembers = [
  { id: 1, image: "/team/as1.jpg" },
  { id: 2, image: "/team/as2.jpg" },
  { id: 3, image: "/team/san3.jpg" },
  { id: 4, image: "/team/g1.jpg" },
  { id: 5, image: "/team/ha1.jpg" },
  { id: 6, image: "/team/sac1.jpg" },
  { id: 7, image: "/team/sac2.jpg" },
  { id: 8, image: "/team/san1.jpg" },
  { id: 9, image: "/team/san2.jpg" },
  { id: 10, image: "/team/f1.jpg" },
  { id: 11, image: "/team/sann1.jpg" },
  { id: 12, image: "/team/hero.jpg" },
]

export default function TeamGlimpse() {
  const [visibleItems, setVisibleItems] = useState(4)
  const [scrollPosition, setScrollPosition] = useState(0)

  // Update visible items based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else if (window.innerWidth < 1280) {
        setVisibleItems(3)
      } else {
        setVisibleItems(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Create a duplicated array for infinite scrolling effect
  const duplicatedMembers = [...teamMembers, ...teamMembers]

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        // Reset position when we've scrolled through the first set
        if (prev >= teamMembers.length) {
          return 0
        }
        return prev + 0.005 // Small increment for smooth scrolling
      })
    }, 20)

    return () => clearInterval(interval)
  }, [teamMembers.length])

  const cardWidth = 100 / visibleItems

  return (
    <div className="overflow-hidden pb-8">
      <div
        className="flex transition-transform duration-500 ease-linear"
        style={{
          transform: `translateX(-${scrollPosition * cardWidth}%)`,
          width: `${duplicatedMembers.length * cardWidth}%`,
        }}
      >
        {duplicatedMembers.map((member, index) => (
          <div 
            key={`${member.id}-${index}`} 
            className="flex-shrink-0 px-2" 
            style={{ width: `${cardWidth}%` }}
          >
            <div className="glassmorphism rounded-lg overflow-hidden shadow-lg">
              <div className="relative aspect-video">
                <Image 
                  src={member.image || "/placeholder.svg"} 
                  alt={`Team member ${member.id}`}
                  fill
                  sizes="(max-width: 640px) 95vw, (max-width: 1024px) 45vw, (max-width: 1280px) 30vw, 22vw"
                  priority={index < visibleItems}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}