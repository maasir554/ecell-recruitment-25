"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface RecruitmentCardProps {
  title: string
  logo: string
  description: string
  applyLink: string
}

export default function RecruitmentCard({ title, logo, description, applyLink }: RecruitmentCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="h-[350px] perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? "rotate-y-180" : ""}`}
      >
        {/* Front of card - only logo and title */}
        <div 
        
        className={"absolute w-full h-full backface-hidden glassmorphism rounded-xl flex flex-col items-center justify-center p-6 border border-white/20" 
                  
                  }
        >
  {logo ? (
    <img 
      src={logo} 
      alt={`${title} logo`}
      className="mb-6 object-contain w-48 h-48" 
    />
  ) : (
    <img 
      src="/placeholder.svg" 
      alt="Placeholder"
      className="mb-6 object-contain w-48 h-48" 
    />
  )}
  <div className="flex flex-col items-center p-4">
    <h3 className="font-montserrat text-xl font-bold text-white mb-2">{title}</h3>
    <p className="font-inter text-white/70 text-sm">Hover to learn more</p>
  </div>
</div>

        {/* Back of card - description and apply button */}
        <div className="absolute w-full h-full backface-hidden bg-black/20 backdrop-blur-lg rounded-xl flex flex-col p-6 rotate-y-180 border border-white/20">
          <h3 className="font-montserrat text-xl font-bold text-white mb-4">{title}</h3>
          <p className="font-roboto text-white flex-grow mb-6">{description}</p>
          <Link
            href={applyLink}
            className="font-inter bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-center"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  )
}

