"use client"

import { useState } from "react"
import Image from "next/image"

export default function AboutSection() {
  const [videoPlaying, setVideoPlaying] = useState(false)

  return (
    <div className="container mx-auto px-4">
      
      <div className="text-center mb-16">
        <h2 className="text-center mb-6 overflow-visible z-10 py-2 flex flex-col gap-2 flex-wrap justify-center items-center">
          <span className="text-5xl sm:text-6xl text-transparent font-extrabold  bg-clip-text bg-gradient-to-b from-[#e09a4f] to-[#362e1a]">
            {`About`}
          </span>
          <span className="text-2xl sm:text-3xl font-bold text-neutral-300">
            {`E-Cell NIT Bhopal`}
          </span>
        
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-white/90 font-light max-w-2xl mx-auto italic">
          {`"Fostering innovation and entrepreneurship among students"`}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Video Section */}
        <div className="relative aspect-video border-2 border-[#956013] rounded-xl overflow-hidden shadow-lg">
          {!videoPlaying ? (
            <>
              {/* <Image
                src="/placeholder.svg?height=400&width=600"
                alt="E-Cell Video Thumbnail"
                fill
                className="object-cover"
              /> */}
              <button
                onClick={() => setVideoPlaying(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-transparent border-4 border-white flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#956013] border-b-8 border-b-transparent ml-1" />
                </div>
              </button>
            </>
          ) : (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ZesEJmDMlZI?autoplay=1"
              title="E-Cell NIT Bhopal Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          )}
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h3 className="font-montserrat text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#e09a4f] to-[#615844]">Our Mission</h3>
          <p className="font-roboto text-white">
          {`Entrepreneurship Cell MANIT Bhopal is a student-run voluntary organization aimed at fostering a dynamic startup culture within the student community and creating a thriving entrepreneurial ecosystem. E-Cell provides an exceptional platform to develop key skills and transform innovative ideas into successful ventures. 
`}
          </p>

          <h3 className="font-montserrat text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#e09a4f] to-[#615844]">What We Do?</h3>
          <p className="font-roboto text-white">
          {`Through prominent events like E-Summit and Pe-Charcha, it organizes engaging competitions that challenge creativity, along with expert-led sessions that lay the groundwork for shaping the aspiring entrepreneurial minds. 
        `}
        </p>
        </div>
      </div>

      {/* Stats Section */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
        <div className="p-6 glassmorphism rounded-xl">
          <div className="font-montserrat text-3xl font-bold text-primary mb-2">35K+</div>
          <div className="font-inter text-white">Enthusiastic attendees</div>
        </div>
        <div className="p-6 glassmorphism rounded-xl">
          <div className="font-montserrat text-3xl font-bold text-primary mb-2">20+</div>
          <div className="font-inter text-white">Guest speakers
          imparted valuable insights</div>
        </div>
        <div className="p-6 glassmorphism rounded-xl">
          <div className="font-montserrat text-3xl font-bold text-primary mb-2">20+</div>
          <div className="font-inter text-white">Investors
          played a pivotal role</div>
        </div>
        <div className="p-6 glassmorphism rounded-xl">
          <div className="font-montserrat text-3xl font-bold text-primary mb-2">80+</div>
          <div className="font-inter text-white">Media Outlets
          were key to event's success</div>
        </div>
      </div> */}
    </div>
  )
}

