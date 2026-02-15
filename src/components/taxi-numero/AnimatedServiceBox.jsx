"use client";

import { motion } from "framer-motion";

export default function AnimatedServiceBox({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-primary hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start gap-4 mb-4">
        <div
          className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-md`}
        >
          {service.icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {service.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">{service.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
