"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AnimatedButtons() {
  const [showButtons, setShowButtons] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Charger le composant après que la page soit interactive
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Utiliser requestAnimationFrame pour optimiser le scroll
    let rafId: ReturnType<typeof requestAnimationFrame> | null = null;
    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        setShowButtons(scrollPosition > windowHeight * 0.1);
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [mounted]);

  if (!mounted) {
    return null; // Ne pas rendre avant que le client soit prêt
  }

  // Ne pas afficher sur mobile pour améliorer les performances
  return (
    <AnimatePresence>
      {showButtons && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-[64px] left-0 right-0 bg-white/95 backdrop-blur-sm supports-[backdrop-filter]:bg-white/60 p-4 shadow-lg md:hidden z-40"
          role="navigation"
          aria-label="Actions rapides"
        >
          <div className="flex justify-between gap-4 max-w-md mx-auto">
            <Link
              href="/reservation"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm flex-1"
              aria-label="Réserver un taxi"
            >
              <motion.span
                initial={{ x: 0 }}
                animate={{
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex items-center gap-2"
              >
                <span>Réserver</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </motion.span>
            </Link>
            <a
              href="tel:+33651683687"
              className="bg-white text-blue-600 hover:text-blue-700 px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm border-2 border-blue-600 flex-1"
              aria-label="Appeler le +33 6 51 68 36 87"
            >
              <motion.div
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span className="font-bold">Appeler</span>
              </motion.div>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
