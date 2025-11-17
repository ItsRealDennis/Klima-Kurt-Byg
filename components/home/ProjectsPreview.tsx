"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Image from "next/image";

const projects = [
  {
    title: "Energivenlig renovering",
    description:
      "Udskiftning af gamle materialer med moderne, isolerede og energivenlige løsninger",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop",
  },
  {
    title: "Nybyg med naturvenlige materialer",
    description:
      "Byggeri hvor hovedfokus var på lav CO2 påvirkning og holdbare materialer",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2953&auto=format&fit=crop",
  },
  {
    title: "Modernisering af ældre bygning",
    description:
      "Komplet opdatering hvor bæredygtighed og moderne funktionalitet blev kombineret",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2940&auto=format&fit=crop",
  },
];

export default function ProjectsPreview() {
  return (
    <section className="py-24 lg:py-32 bg-sand-50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-block px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-medium mb-6">
              Vores arbejde
            </span>
          </motion.div>

          <motion.h2
            variants={staggerItem}
            className="text-4xl lg:text-5xl font-serif font-bold text-earth-900 mb-6 leading-tight"
          >
            Udvalgte projekter
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-lg text-earth-700 leading-relaxed"
          >
            Her kan du se nogle af de opgaver hvor vores fokus på kvalitet og
            bæredygtighed kommer tydeligt frem. Hvert projekt viser hvordan vi
            kombinerer moderne byggeteknik, holdbare materialer og en ansvarlig
            tilgang.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-earth-900 mb-3 group-hover:text-sage-700 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-earth-600 leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection className="text-center">
          <Button href="/projekter" variant="primary">
            Se alle projekter
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
