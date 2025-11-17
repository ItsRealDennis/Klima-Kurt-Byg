"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ParallaxImage from "@/components/ui/ParallaxImage";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Image from "next/image";

const values = [
  {
    title: "Gennemsigtighed",
    description:
      "Vi arbejder med klare aftaler og åben kommunikation gennem hele projektet.",
    icon: "👁️",
  },
  {
    title: "Kvalitet",
    description:
      "Hvert projekt udføres med omhu og præcision fra start til slut.",
    icon: "⚡",
  },
  {
    title: "Ansvarlighed",
    description:
      "Vi tager ansvar for vores arbejde og dets påvirkning på miljøet.",
    icon: "🌱",
  },
  {
    title: "Langsigtede løsninger",
    description:
      "Vi bygger med tanke på fremtiden, så resultatet holder i mange år.",
    icon: "🏗️",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-earth-900/70 to-earth-900/40 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2940&auto=format&fit=crop"
            alt="Our team at work"
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
            Om os
          </h1>
          <p className="text-xl lg:text-2xl text-sand-100 max-w-2xl mx-auto">
            Byggeri med erfaring, omtanke og fokus på bæredygtige løsninger
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-24 lg:py-32 bg-sand-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                variants={staggerItem}
                className="text-4xl lg:text-5xl font-serif font-bold text-earth-900 mb-8 leading-tight"
              >
                En virksomhed med <span className="text-sage-700">solid erfaring</span>
              </motion.h2>

              <motion.div
                variants={staggerItem}
                className="space-y-6 text-lg text-earth-700 leading-relaxed"
              >
                <p>
                  Vi er en virksomhed med solid erfaring inden for moderne
                  byggeri. Vi tror på at godt håndværk og bæredygtighed går hånd
                  i hånd.
                </p>
                <p>
                  Vores mål er at levere langtidsholdbare løsninger der skaber
                  værdi for kunden år efter år. Vi arbejder med klare aftaler,
                  gennemsigtighed i hele processen og et fokus på kvalitet i alle
                  detaljer.
                </p>
                <p>
                  Gennem årene har vi hjulpet både private og erhvervskunder med
                  at realisere deres byggeprojekter. Fra mindre renoveringer til
                  større nybyggerier er vores tilgang den samme: omhyggelig
                  planlægning, kvalitetsmaterialer og bæredygtige løsninger.
                </p>
              </motion.div>
            </motion.div>

            <AnimatedSection className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <ParallaxImage
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2940&auto=format&fit=crop"
                  alt="Modern construction site"
                  className="w-full h-full"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Meet Klima Kurt */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <AnimatedSection className="relative lg:order-2">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/Klimakurt.png"
                  alt="Klima Kurt - Bæredygtig Byggeri"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-sage-200 rounded-full -z-10 blur-3xl opacity-50" />
            </AnimatedSection>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:order-1"
            >
              <motion.div variants={staggerItem}>
                <span className="inline-block px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-medium mb-6">
                  Mød grundlæggeren
                </span>
              </motion.div>

              <motion.h2
                variants={staggerItem}
                className="text-4xl lg:text-5xl font-serif font-bold text-earth-900 mb-6 leading-tight"
              >
                Klima <span className="text-sage-700">Kurt</span>
              </motion.h2>

              <motion.div
                variants={staggerItem}
                className="space-y-6 text-lg text-earth-700 leading-relaxed"
              >
                <p>
                  Med passion for bæredygtighed og kvalitetshåndværk har Klima Kurt
                  skabt en byggevirksomhed der sætter miljøet i centrum uden at gå
                  på kompromis med kvalitet.
                </p>
                <p>
                  Hans vision er klar: Moderne byggeri skal være både funktionelt,
                  holdbart og ansvarligt. Gennem årene har han udviklet metoder der
                  kombinerer traditionelt håndværk med innovative, miljøvenlige løsninger.
                </p>
                <p className="italic border-l-4 border-sage-600 pl-6">
                  &ldquo;Jeg tror på at vi kan bygge fremtidens huse uden at belaste
                  fremtidens miljø. Det handler om at træffe de rigtige valg fra
                  starten.&rdquo; - Klima Kurt
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Values Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={staggerItem} className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-earth-900 mb-6">
                Vores værdier
              </h2>
              <p className="text-lg text-earth-700 max-w-2xl mx-auto">
                Disse principper styrer alt vi gør og hver beslutning vi tager
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-500"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-serif font-bold text-earth-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-earth-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-sage-700 to-sage-800">
        <AnimatedSection className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Klar til at starte dit projekt?
          </h2>
          <p className="text-xl text-sage-100 mb-8 max-w-2xl mx-auto">
            Kontakt os i dag for en uforpligtende samtale om hvordan vi kan
            hjælpe dig
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
