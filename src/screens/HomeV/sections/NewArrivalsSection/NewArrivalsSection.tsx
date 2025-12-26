"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

// Triple the projects to create a seamless infinite loop buffer
// [Set 1 (Buffer)] [Set 2 (Main)] [Set 3 (Buffer)]
const allProjects = [...projects, ...projects, ...projects];

export const NewArrivalsSection = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(projects.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cardStride, setCardStride] = useState(324);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive stride calculation
  useEffect(() => {
    const updateStride = () => {
      // Mobile: 280px card + 24px gap = 304px
      // Desktop: 300px card + 24px gap = 324px
      if (window.innerWidth < 768) {
        setCardStride(304);
      } else {
        setCardStride(324);
      }
    };

    updateStride();
    window.addEventListener("resize", updateStride);
    return () => window.removeEventListener("resize", updateStride);
  }, []);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, [isTransitioning]);

  // Auto-scroll
  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [nextSlide]);

  const startAutoScroll = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      nextSlide();
    }, 4000);
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  const handleTransitionEnd = () => {
    // Check if we've scrolled into the third set (end buffer)
    if (currentIndex >= 2 * projects.length) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - projects.length);
    }
    // Check if we've scrolled into the first set (start buffer)
    else if (currentIndex < projects.length) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + projects.length);
    }
  };

  return (
    <section className="w-full py-12 md:py-24 px-4 md:px-8 lg:px-[100px] overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">
        {/* Text Column */}
        <div className="flex flex-col gap-6 md:gap-8 lg:w-[350px] flex-shrink-0">
          <div className="flex flex-col gap-2">
            <span className="font-label-medium text-xs tracking-[0.2em] text-secondary-02 uppercase">
              Recent Works
            </span>
            <h2 className="font-heading-03 text-3xl md:text-4xl text-primary-01 italic">
              Signature Projects
            </h2>
          </div>

          <p className="font-body-02 text-secondary-01 text-sm leading-relaxed max-w-[300px]">
            A glimpse into our journey of transforming empty shells into vibrant, living stories across Hyderabad.
          </p>

          <Link href="/portfolio">
            <Button
              variant="link"
              className="h-auto p-0 font-button-01 text-primary-01 text-sm tracking-widest underline justify-start hover:text-primary-01/80"
            >
              VIEW PORTFOLIO
            </Button>
          </Link>

          <div className="flex items-center gap-4 mt-auto pt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                stopAutoScroll();
                prevSlide();
                // Restart auto-scroll after interactions is tricky without debounce, 
                // but leaving it stopped on interaction or relying on mouseEnter/Leave to pause is better.
                // For now, let's keep it simple: click stops it? Or simply pauses? 
                // Let's rely on hover to pause, and clicks just nudge.
              }}
              className="h-12 w-12 rounded-full border-primary-01/10 hover:bg-primary-01 hover:text-white transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                // stopAutoScroll(); // Optional: pause on interaction
                nextSlide();
              }}
              className="h-12 w-12 rounded-full border-primary-01/10 hover:bg-primary-01 hover:text-white transition-colors"
              aria-label="Next project"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Carousel Column */}
        <div
          className="flex-1 w-full min-w-0"
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          <div className="w-full overflow-hidden" ref={carouselRef}>
            <div
              className={`flex gap-6 ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
              style={{ transform: `translateX(-${currentIndex * cardStride}px)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {allProjects.map((project, index) => (
                <Link key={`${project.id}-idx-${index}`} href={`/projects/${project.slug}`} passHref className="block flex-shrink-0">
                  <div className="w-[280px] md:w-[300px] group cursor-pointer">
                    <div className="aspect-[3/4] w-full overflow-hidden bg-secondary-03/10 mb-4 relative">
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                      <img
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        alt={project.title}
                        src={project.heroImage}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-heading-07 text-lg text-primary-01 group-hover:underline decoration-1 underline-offset-4">
                        {project.title}
                      </h3>
                      <span className="text-secondary-02 text-xs tracking-wider uppercase">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};