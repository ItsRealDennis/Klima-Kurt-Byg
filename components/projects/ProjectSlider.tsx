"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  details: string;
  image: string;
  tags: string[];
}

interface ProjectSliderProps {
  projects: Project[];
}

export default function ProjectSlider({ projects }: ProjectSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
    duration: 30,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setShowDetails(false);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-earth-900">
      {/* Carousel */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {projects.map((project, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-earth-900/70 to-earth-900/30" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-end">
                <div className="container mx-auto px-6 lg:px-12 pb-24 lg:pb-32">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={
                      selectedIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 40 }
                    }
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-3xl"
                  >
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-4 py-2 bg-sage-600/80 backdrop-blur-sm text-white rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">
                      {project.title}
                    </h2>

                    <p className="text-xl lg:text-2xl text-sand-100 mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    <button
                      onClick={() => setShowDetails(!showDetails)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border-2 border-white/60 text-white rounded-full font-medium hover:bg-white hover:text-earth-900 transition-all duration-300"
                    >
                      {showDetails ? "Skjul detaljer" : "Se detaljer"}
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          showDetails ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Details Panel */}
                    <AnimatePresence>
                      {showDetails && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden"
                        >
                          <p className="text-sand-100 leading-relaxed">
                            {project.details}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-earth-900 transition-all duration-300"
        aria-label="Previous project"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-earth-900 transition-all duration-300"
        aria-label="Next project"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "w-12 h-3 bg-white"
                : "w-3 h-3 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-32 right-6 lg:right-12 z-30 text-white">
        <div className="text-5xl font-serif font-bold">
          {String(selectedIndex + 1).padStart(2, "0")}
        </div>
        <div className="text-white/60 text-lg">
          / {String(projects.length).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}
