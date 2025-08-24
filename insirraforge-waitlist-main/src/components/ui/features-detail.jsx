"use client"

import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import startupDashboard from "../../assets/startup.png"
import investorDashboard from "../../assets/investor.png"
import mentorDashboard from "../../assets/mentor.png"

gsap.registerPlugin(ScrollTrigger)

const dashboardTabs = [
  {
    id: 1,
    title: "Startup Dashboard",
    src: startupDashboard,
    alt: "Startup Dashboard - Track your growth metrics and investor readiness",
    description: "AI-powered startup readiness scoring, pitch deck analysis, and growth tracking"
  },
  {
    id: 2,
    title: "Investor Dashboard",
    src: investorDashboard,
    alt: "Investor Dashboard - Access exclusive deal flow and startup insights",
    description: "Curated startup pipeline, AI-powered due diligence, and market trend analysis"
  },
  {
    id: 3,
    title: "Mentor Dashboard",
    src: mentorDashboard,
    alt: "Mentor Dashboard - Connect with startups and share your expertise",
    description: "Smart matching system, session scheduling, and impact tracking"
  }
]

export default function FeaturesDetail() {
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const headingRef = useRef(null)
  const textRef = useRef(null)
  const ctaRef = useRef(null)
  const sliderRef = useRef(null)

  useEffect(() => {
    // Hero animation
    const tl = gsap.timeline()

    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        sliderRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ".hero-blur",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" },
        "-=1"
      )

    // Parallax effect on scroll
    gsap.to(".hero-blur", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })

    // Auto-slide interval
    const slideInterval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => {
      tl.kill()
      clearInterval(slideInterval)
    }
  }, []);

  // Function to go to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === dashboardTabs.length - 1 ? 0 : prev + 1))
  }

  // Function to go to a specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    // Animate feature items when they come into view
    gsap.fromTo(
      ".feature-item",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 75%",
        }
      }
    )

    // Animate tab content
    gsap.utils.toArray(".tabs-content").forEach((content) => {
      gsap.set(content, { opacity: 0, y: 20 })
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])



  return (
    <div ref={sectionRef} className="py-8 md:py-16 bg-black">
      <div className="mx-auto">
        <div>
          <div className="container mx-auto px-6">
            <h1 
              ref={headingRef}
              className="text-4xl text-left font-bold tracking-tight sm:text-5xl text-white"
            >
              Three Powerful Dashboards, <br /> One Smart Ecosystem
            </h1>
            <p 
              ref={textRef}
              className="mt-4 text-lg text-gray-300 text-left"
            >
              Experience the future of startup growth with AI-powered insights and smart matching.
            </p>
          </div>
          
          <div
            ref={sliderRef}
            className="relative h-[90vh] overflow-hidden mt-12"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {dashboardTabs.map((tab, index) => {
                const position = index - currentSlide;
                const isActive = position === 0;
                const zIndex = isActive ? 30 : 20 - Math.abs(position);
                const scale = isActive ? 1 : 1 - 0.1;

                const translateX = position * 100;

                return (
                  <div
                    key={tab.id}
                    className={`absolute transition-all duration-500 ease-in-out rounded-2xl`}
                    style={{
                      transform: `translateX(${translateX}%) scale(${scale})`,
                      zIndex
                    }}
                  >
                    <div className="relative aspect-[4/3] w-[75vw] max-w-5xl rounded-2xl overflow-hidden">
                      <div className="w-full h-full rounded-2xl relative">
                        <img
                          src={tab.src}
                          alt={tab.alt}
                          className="object-cover w-full h-full bg-gray-900 rounded-lg"
                          style={{ objectPosition: 'center' }}
                        />
                        {isActive && (
                          <div className="absolute inset-0 border-4 border-gray-300 rounded-2xl pointer-events-none shadow-2xl shadow-gray-300/40"></div>
                        )}
                      </div>
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl pointer-events-none">
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-xl font-bold text-white mb-2">{tab.title}</h3>
                            <p className="text-gray-200 text-sm">{tab.description}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center gap-8 mt-8">
            {dashboardTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => goToSlide(index)}
                className={`p-3 text-sm font-medium transition-all rounded-lg ${
                  currentSlide === index
                    ? "text-white bg-orange-600 px-4 py-2"
                    : "text-gray-400 hover:text-white hover:bg-gray-800 px-4 py-2"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
