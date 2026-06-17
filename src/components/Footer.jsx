"use client";

import { Clock, Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Footer() {
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
                <h3 className="font-bold text-xl">Taxi Nice-06.com</h3>
                <p className="text-white/80">Côte d'Azur</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Votre partenaire de confiance pour tous vos déplacements sur la
              Côte d'Azur depuis 2008.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white/90" />
                <a
                  href="/taxi-nice-numero"
                  className="hover:text-white/70 transition-colors underline underline-offset-2"
                >
                  +33 6 51 68 36 87
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white/90" />
                <span>taxiniceca@gmail.com</span>
              </div>
              <a
                href="https://maps.app.goo.gl/UzPCMHMeFYZaeZNH8"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex items-center space-x-3 hover:text-white/70 transition-colors"
              >
                <MapPin className="w-4 h-4 text-white/90" />
                <span>Nice, Côte d'Azur</span>
              </a>
              <Link
                href="/taxi-nice-numero"
                className="flex items-center space-x-3 hover:text-white/70 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-white/90" />
                <span>Voir la page numéro</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">Horaires</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-white/90" />
                <div>
                  <p>24h/24 - 7j/7</p>
                  <p className="text-sm text-white/80">Service continu</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">Réservation Rapide</h4>
            <p className="text-white/80">Besoin d'un taxi maintenant ?</p>
            <a
              href="tel:+33651683687"
              className="btn bg-white text-primary hover:bg-white/90 w-full flex items-center justify-center gap-2"
            >
              Appeler maintenant
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          {/* Liens légaux */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <Link
              href="/plan-du-site"
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
            >
              Plan du Site
            </Link>
            <Link
              href="/blog"
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
            >
              Blog
            </Link>
            <Link
              href="/partenaires"
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
            >
              Partenaires
            </Link>
            <Link
              href="/mentions-legales"
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
            >
              Politique de confidentialité
            </Link>
            <Link
              href="/cgv"
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
            >
              CGV
            </Link>
            <a
              href="https://maps.app.goo.gl/UzPCMHMeFYZaeZNH8"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm flex items-center gap-1"
            >
              <MapPin className="w-3 h-3" />
              Google Business
            </a>
            <a
              href="https://hoodspot.fr/taxi/taxi-nice-aeroport-et-conventionne-81921875100033/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
              title="Taxi Nice 06 sur Hoodspot"
            >
              Taxi Nice 06 sur Hoodspot
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/80">
              © {new Date().getFullYear()} Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
