"use client";

import { useLanguage } from "@/contexts/LanguageContext.jsx";
import LanguageToggle from "./LanguageToggle.jsx";

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="h-16 flex items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <span className="hidden md:block text-black font-bold text-lg">
            TAXI NICE-06.COM
          </span>
        </a>
        <nav className="hidden md:flex gap-8">
          <a
            href="#accueil"
            className="text-black hover:text-primary font-medium"
          >
            {t("navbar.home")}
          </a>
          <a
            href="#services"
            className="text-black hover:text-primary font-medium"
          >
            {t("navbar.services")}
          </a>
          <a
            href="#reservation"
            className="text-black hover:text-primary font-medium"
          >
            {t("navbar.reservation")}
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <a
            href="#reservation"
            className="bg-primary text-white px-6 py-2 rounded font-medium hover:bg-primaryDark transition-colors"
          >
            <span className="md:hidden">{t("navbar.bookNow")}</span>
            <span className="hidden md:inline">{t("navbar.bookNowFull")}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
