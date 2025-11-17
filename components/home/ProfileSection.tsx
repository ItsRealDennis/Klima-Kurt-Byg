"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ParallaxImage from "@/components/ui/ParallaxImage";
import Button from "@/components/ui/Button";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function ProfileSection() {
  return (
    <section className="py-24 lg:py-32 bg-sand-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimatedSection className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop"
                alt="Construction team working on sustainable building"
                className="w-full h-full"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-sage-200 rounded-full -z-10 blur-3xl opacity-50" />
          </AnimatedSection>

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={staggerItem}>
              <span className="inline-block px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-medium mb-6">
                Vores profil
              </span>
            </motion.div>

            <motion.h2
              variants={staggerItem}
              className="text-4xl lg:text-5xl font-serif font-bold text-earth-900 mb-6 leading-tight"
            >
              Hvem vi er
            </motion.h2>

            <motion.div variants={staggerItem} className="space-y-6 text-lg text-earth-700 leading-relaxed mb-8">
              <p>
                Vi er en byggevirksomhed der lægger vægt på gennemsigtighed,
                kvalitet og ansvarlighed. Vi tror på at moderne byggeri skal
                være både funktionelt og bæredygtigt.
              </p>
              <p>
                Derfor arbejder vi med materialer der har lang levetid og
                løsninger der reducerer spild og energiforbrug. Vi samarbejder
                tæt med både virksomheder og private og leverer altid håndværk i
                høj kvalitet.
              </p>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Button href="/om-os" variant="primary">
                Læs mere om os
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
