"use client";

import { useLanguage } from "@/contexts/LanguageContext.jsx";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">{t("footer.brand")}</h3>
                <p className="text-white/80">Côte d'Azur</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">{t("footer.contact")}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white/90" />
                <span>{t("footer.phone")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white/90" />
                <span>{t("footer.email")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-white/90" />
                <span>{t("footer.location")}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">{t("footer.schedule")}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-white/90" />
                <div>
                  <p>{t("footer.hours")}</p>
                  <p className="text-sm text-white/80">
                    {t("footer.continuousService")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">
              {t("footer.quickReservation")}
            </h4>
            <p className="text-white/80">{t("footer.needTaxiNow")}</p>
            <a
              href="#reservation"
              className="btn bg-white text-primary hover:bg-white/90 w-full flex items-center justify-center gap-2"
            >
              {t("footer.callNow")}
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          {/* Liens légaux */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a
              href="/mentions-legales"
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
            >
              {t("footer.legalNotice")}
            </a>
            <a
              href="/politique-confidentialite"
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
            >
              {t("footer.privacyPolicy")}
            </a>
            <a
              href="/cgv"
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
            >
              {t("footer.terms")}
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/80">
              © {new Date().getFullYear()} {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
