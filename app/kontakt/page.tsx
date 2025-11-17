"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/forms/ContactForm";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Image from "next/image";

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Telefon",
    details: ["+45 12 34 56 78"],
    link: "tel:+4512345678",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email",
    details: ["kontakt@klimakurtbyg.dk"],
    link: "mailto:kontakt@klimakurtbyg.dk",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Adresse",
    details: ["Byggevej 123", "1234 København"],
    link: null,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Åbningstider",
    details: ["Man-Fre: 07:00-16:00", "Lør: Efter aftale", "Søn: Lukket"],
    link: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] lg:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-earth-900/80 to-earth-900/60 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2948&auto=format&fit=crop"
            alt="Contact us"
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
            Kontakt os
          </h1>
          <p className="text-xl lg:text-2xl text-sand-100 max-w-2xl mx-auto">
            Har du et projekt på vej eller vil du høre mere om hvordan vi arbejder
            bæredygtigt? Vi står klar til at hjælpe.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-24 lg:py-32 bg-sand-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info Sidebar */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-2 space-y-8"
            >
              <motion.div variants={staggerItem}>
                <h2 className="text-3xl font-serif font-bold text-earth-900 mb-4">
                  Lad os tale sammen
                </h2>
                <p className="text-lg text-earth-700 leading-relaxed">
                  Vi er altid klar til at diskutere dit næste projekt. Uanset om
                  det er en lille renovering eller et større nybyggeri, så hører
                  vi gerne fra dig.
                </p>
              </motion.div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center text-sage-700">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-earth-900 mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-earth-600 hover:text-sage-700 transition-colors duration-300"
                        >
                          {info.details.map((detail, i) => (
                            <div key={i}>{detail}</div>
                          ))}
                        </a>
                      ) : (
                        <div className="text-earth-600">
                          {info.details.map((detail, i) => (
                            <div key={i}>{detail}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div
                variants={staggerItem}
                className="relative aspect-video rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2948&auto=format&fit=crop"
                  alt="Office location"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-sage-900/20" />
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
                <h2 className="text-3xl font-serif font-bold text-earth-900 mb-2">
                  Send os en besked
                </h2>
                <p className="text-earth-600 mb-8">
                  Udfyld formularen nedenfor, så vender vi tilbage hurtigst
                  muligt
                </p>
                <ContactForm />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-sage-700 to-sage-800">
        <AnimatedSection className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                number: "100+",
                label: "Tilfredse kunder",
              },
              {
                number: "15+",
                label: "Års erfaring",
              },
              {
                number: "200+",
                label: "Projekter gennemført",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="text-5xl lg:text-6xl font-serif font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-xl text-sage-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
