"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-sage-600 text-white hover:bg-sage-700 focus:ring-sage-500 shadow-lg hover:shadow-xl",
    secondary:
      "bg-earth-700 text-white hover:bg-earth-800 focus:ring-earth-500 shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-sage-600 text-sage-700 hover:bg-sage-600 hover:text-white focus:ring-sage-500",
  };

  const classes = cn(baseClasses, variants[variant], className);

  const content = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
