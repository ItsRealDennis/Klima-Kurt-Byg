"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ParallaxImage from "@/components/ui/ParallaxImage";
import Button from "@/components/ui/Button";
import { staggerContainer, staggerItem } from "@/lib/animations";

const features = [
  {
    title: "Certificerede materialer",
    description: "Vi vælger kun materialer med lav miljøbelastning og høj holdbarhed",
  },
  {
    title: "Minimal spild",
    description: "Omhyggelig planlægning sikrer optimal ressourceudnyttelse",
  },
  {
    title: "Langsigtet kvalitet",
    description: "Byggeri der holder og kræver minimal vedligeholdelse",
  },
];

export default function SustainabilityPreview() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-sage-50 to-sand-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content - Left side on desktop */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:order-1"
          >
            <motion.div variants={staggerItem}>
              <span className="inline-block px-4 py-2 bg-earth-100 text-earth-700 rounded-full text-sm font-medium mb-6">
                Bæredygtig tilgang
              </span>
            </motion.div>

            <motion.h2
              variants={staggerItem}
              className="text-4xl lg:text-5xl font-serif font-bold text-earth-900 mb-6 leading-tight"
            >
              Vores tilgang til{" "}
              <span className="text-sage-700">bæredygtighed</span>
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="text-lg text-earth-700 leading-relaxed mb-8"
            >
              Bæredygtighed er ikke en tilføjelse men et grundprincip i alt vi
              gør. Vi tænker miljø og kvalitet ind fra første skitse til sidste
              skrue.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="space-y-6 mb-10"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sage-600 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-earth-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-earth-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={staggerItem}>
              <Button href="/baeredygtighed" variant="primary">
                Se hvordan vi arbejder
              </Button>
            </motion.div>
          </motion.div>

          {/* Image - Right side on desktop */}
          <AnimatedSection className="relative lg:order-2">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=1000&q=75&auto=format&fit=crop"
                alt="Sustainable building materials and construction"
                className="w-full h-full"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-earth-200 rounded-full -z-10 blur-3xl opacity-50" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
