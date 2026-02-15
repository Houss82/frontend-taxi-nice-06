"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function AnimatedServiceCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 bg-green-50 rounded-xl p-4 border-l-4 border-green-500"
    >
      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
      <span className="text-lg font-semibold text-gray-800">{item}</span>
    </motion.div>
  );
}
