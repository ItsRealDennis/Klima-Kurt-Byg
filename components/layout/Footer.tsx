"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-sand-100">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {/* Company Info */}
          <motion.div variants={staggerItem}>
            <h3 className="text-2xl font-serif font-bold text-sand-50 mb-4">
              Klima Kurt <span className="text-sage-400">Byg</span>
            </h3>
            <p className="text-sand-300 leading-relaxed mb-6">
              Vi kombinerer kvalitetshåndværk med bæredygtige løsninger der
              holder i mange år.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={staggerItem}>
            <h4 className="text-lg font-semibold text-sand-50 mb-4">
              Hurtige Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Hjem", href: "/" },
                { name: "Om Os", href: "/om-os" },
                { name: "Bæredygtighed", href: "/baeredygtighed" },
                { name: "Projekter", href: "/projekter" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sand-300 hover:text-sage-400 transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={staggerItem}>
            <h4 className="text-lg font-semibold text-sand-50 mb-4">
              Kontakt
            </h4>
            <ul className="space-y-3 text-sand-300">
              <li>
                <a
                  href="tel:+4512345678"
                  className="hover:text-sage-400 transition-colors duration-300"
                >
                  +45 12 34 56 78
                </a>
              </li>
              <li>
                <a
                  href="mailto:kontakt@klimakurtbyg.dk"
                  className="hover:text-sage-400 transition-colors duration-300"
                >
                  kontakt@klimakurtbyg.dk
                </a>
              </li>
              <li className="leading-relaxed">
                Byggevej 123
                <br />
                1234 København
              </li>
            </ul>
          </motion.div>

          {/* Opening Hours */}
          <motion.div variants={staggerItem}>
            <h4 className="text-lg font-semibold text-sand-50 mb-4">
              Åbningstider
            </h4>
            <ul className="space-y-2 text-sand-300">
              <li className="flex justify-between">
                <span>Man - Fre:</span>
                <span className="text-sage-400">07:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span>Lørdag:</span>
                <span className="text-sage-400">Efter aftale</span>
              </li>
              <li className="flex justify-between">
                <span>Søndag:</span>
                <span className="text-sand-400">Lukket</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-earth-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sand-400 text-sm">
            © {new Date().getFullYear()} Klima Kurt Byg. Alle rettigheder
            forbeholdes.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privatlivspolitik"
              className="text-sand-400 hover:text-sage-400 text-sm transition-colors duration-300"
            >
              Privatlivspolitik
            </Link>
            <Link
              href="/vilkar"
              className="text-sand-400 hover:text-sage-400 text-sm transition-colors duration-300"
            >
              Vilkår
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
