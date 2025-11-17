"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ParallaxImage from "@/components/ui/ParallaxImage";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Image from "next/image";

const principles = [
  {
    title: "Materialer",
    subtitle: "Vi vælger materialer der har lav miljøbelastning og lang holdbarhed",
    description:
      "Vi samarbejder med leverandører der er certificerede og kendt for høj kvalitet. Alle materialer vælges omhyggeligt ud fra deres miljøpåvirkning, holdbarhed og certificeringer. Vi prioriterer lokale leverandører hvor det er muligt og sikrer fuld sporbarhed i vores forsyningskæde.",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2940&auto=format&fit=crop",
  },
  {
    title: "Ressourceforbrug",
    subtitle: "Vi planlægger vores arbejde så spild minimeres og ressourcer udnyttes bedst muligt",
    description:
      "Det gælder både energi, tid og materialer. Gennem præcis planlægning og moderne værktøjer sikrer vi at hver ressource udnyttes optimalt. Vi måler og dokumenterer vores forbrug på hvert projekt og arbejder løbende med at reducere spild gennem bedre processer.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2940&auto=format&fit=crop",
  },
  {
    title: "Langsigtet kvalitet",
    subtitle: "Bæredygtighed handler også om at bygge noget der holder",
    description:
      "Derfor fokuserer vi på konstruktioner der kræver minimal vedligeholdelse gennem mange år. Vi designer med holdbarhed for øje og vælger løsninger der modstår tidens tand. Det betyder færre reparationer, mindre spild og lavere samlet miljøpåvirkning over hele byggeriets levetid.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2940&auto=format&fit=crop",
  },
  {
    title: "Tydelig kommunikation",
    subtitle: "Vi gør det nemt for kunderne at se hvilke bæredygtige valg der er taget",
    description:
      "Ingen tomme løfter. Ingen grøn maling. Bare konkret ansvarlighed. Vi dokumenterer alle bæredygtige valg og deler åbent information om materialer, processer og miljøpåvirkning. Vores kunder får adgang til certificeringer og kan følge med i projektets klimaaftryk.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2953&auto=format&fit=crop",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-sage-900/80 to-sage-900/50 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2940&auto=format&fit=crop"
            alt="Sustainable construction materials"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 container mx-auto px-6 lg:px-12 text-center"
        >
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-6">
            Sådan arbejder vi <span className="text-sage-300">bæredygtigt</span>
          </h1>
          <p className="text-xl lg:text-2xl text-sand-100 max-w-3xl mx-auto">
            Bæredygtighed er ikke en tilføjelse men et grundprincip i alt vi gør
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-24 lg:py-32 bg-sand-50">
        <AnimatedSection className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-earth-900 mb-8">
            Fra første skitse til sidste skrue
          </h2>
          <p className="text-xl text-earth-700 leading-relaxed">
            Vi tænker miljø og kvalitet ind fra første skitse til sidste skrue.
            Vi vælger certificerede materialer, reducerer affald og planlægger
            arbejdet så CO2 aftrykket bliver lavest muligt. For os handler
            bæredygtighed om langsigtede løsninger der gør en reel forskel for
            både kunder og miljø.
          </p>
        </AnimatedSection>
      </section>

      {/* Principles */}
      {principles.map((principle, index) => (
        <section
          key={index}
          className={`py-24 lg:py-32 ${
            index % 2 === 0 ? "bg-sand-50" : "bg-gradient-to-br from-sage-50 to-sand-100"
          }`}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <motion.div variants={staggerItem}>
                  <span className="inline-block px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-medium mb-6">
                    Princip {index + 1}
                  </span>
                </motion.div>

                <motion.h2
                  variants={staggerItem}
                  className="text-4xl lg:text-5xl font-serif font-bold text-earth-900 mb-4"
                >
                  {principle.title}
                </motion.h2>

                <motion.p
                  variants={staggerItem}
                  className="text-xl text-sage-700 font-medium mb-6"
                >
                  {principle.subtitle}
                </motion.p>

                <motion.p
                  variants={staggerItem}
                  className="text-lg text-earth-700 leading-relaxed"
                >
                  {principle.description}
                </motion.p>
              </motion.div>

              {/* Image */}
              <AnimatedSection
                className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <ParallaxImage
                    src={principle.image}
                    alt={principle.title}
                    className="w-full h-full"
                  />
                </div>
                <div
                  className={`absolute w-48 h-48 ${
                    index % 2 === 0
                      ? "-bottom-6 -right-6 bg-sage-200"
                      : "-top-6 -left-6 bg-earth-200"
                  } rounded-full -z-10 blur-3xl opacity-50`}
                />
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* Stats Section */}
      <section className="py-24 bg-earth-900 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-12 text-center"
          >
            {[
              { value: "100%", label: "Certificerede materialer" },
              { value: "30%", label: "Reduceret CO2 aftryk" },
              { value: "25+", label: "År holdbarhed minimum" },
            ].map((stat, index) => (
              <motion.div key={index} variants={staggerItem}>
                <div className="text-5xl lg:text-6xl font-serif font-bold text-sage-300 mb-4">
                  {stat.value}
                </div>
                <div className="text-xl text-sand-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-sage-700 to-sage-800">
        <AnimatedSection className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Vil du vide mere om vores tilgang?
          </h2>
          <p className="text-xl text-sage-100 mb-8 max-w-2xl mx-auto">
            Kontakt os for en samtale om hvordan vi kan gøre dit projekt mere
            bæredygtigt
          </p>
          <motion.a
            href="/kontakt"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-sage-800 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Kontakt os
          </motion.a>
        </AnimatedSection>
      </section>
    </>
  );
}
