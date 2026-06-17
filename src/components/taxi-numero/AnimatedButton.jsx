"use client";

import { motion } from "framer-motion";

export default function AnimatedButton({ href, children, className }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}
