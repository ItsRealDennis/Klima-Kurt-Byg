"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  variants = fadeInUp,
  delay = 0,
}: AnimatedSectionProps) {
  const customVariants = delay > 0 ? {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...(variants.visible as any).transition,
        delay,
      },
    },
  } : variants;

  return (
    <motion.div
      variants={customVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
