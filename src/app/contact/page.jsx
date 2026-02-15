"use client";

import Footer from "@/components/Footer.jsx";
import GoogleMap from "@/components/GoogleMap.jsx";
import Navbar from "@/components/Navbar.jsx";
import SEOBreadcrumb from "@/components/SEOBreadcrumb.jsx";
import { formspreeService } from "@/lib/formspree.jsx";
import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  // Données en français
  const contactTitle = "Contact Taxi Nice 06 – Service Client 24h/24";
  const contactSubtitle = "Une équipe à votre écoute 24h/24";
  const contactDescription =
    "Notre équipe est disponible pour répondre à toutes vos questions et vous aider à organiser votre transport sur la Côte d'Azur.";
  const coordinatesTitle = "Nos Coordonnées";
  const coordinatesDesc =
    "Plusieurs moyens de nous contacter, choisissez celui qui vous convient le mieux.";
  const formTitle = "Envoyez-Nous un Message";
  const formDescription =
    "Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.";
  const formSuccess = "Message Envoyé !";
  const formSuccessMessage =
    "Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.";
  const formNewMessage = "Nouveau message";
  const mapTitle = "Où Nous Trouver";
  const mapDescription =
    "Découvrez notre localisation sur la Côte d'Azur et obtenez des indications pour nous rejoindre.";
  const ctaTitle = "Besoin d'un Transport Immédiat ?";
  const ctaDescription =
    "Contactez-nous maintenant pour réserver votre taxi et profitez d'un service professionnel.";
  const ctaEmailButton = "Envoyer un Email";
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    service: "",
    message: "",
    date: "",
    heure: "",
  });

  const breadcrumbItems = [
    {
      name: "Contact",
      url: "/contact",
      title: "Contact Taxi Nice 06",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await formspreeService.sendContact(formData);
      setIsSubmitted(true);
      setFormData({
        nom: "",
        email: "",
        telephone: "",
        service: "",
        message: "",
        date: "",
        heure: "",
      });
    } catch (error) {
      console.error("Erreur:", error);
      const errorMessage = error.message || "Erreur lors de l'envoi du message";
      alert(`Erreur: ${errorMessage}`);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      value: "06 51 68 36 87",
      description: "Appelez-nous maintenant",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact@taxi-nice-06.com",
      description: "Envoyez-nous un email",
      color: "from-green-500 to-green-700",
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "Nice, Côte d'Azur",
      description: "Service sur toute la région",
      color: "from-purple-500 to-purple-700",
      link: "https://maps.app.goo.gl/UzPCMHMeFYZaeZNH8",
    },
    {
      icon: Clock,
      title: "Horaires",
      value: "24/7",
      description: "Disponible jour et nuit",
      color: "from-orange-500 to-orange-700",
    },
  ];

  const services = [
    "Réservation de taxi",
    "Demande de devis",
    "Question générale",
    "Réclamation",
    "Partenariat",
    "Autre",
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-20 sm:mt-0">
      {/* Navigation */}
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <SEOBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/contact.jpg"
          alt="Contact Taxi Nice 06 - Service client 24h/24"
          fill
          className="object-cover"
          priority={true}
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Contact Taxi Nice 06 – Service Client 24h/24
            </h1>
            <div className="w-24 h-1 bg-white rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl leading-relaxed">
              Notre équipe est disponible pour répondre à toutes vos questions et vous aider à organiser votre transport sur la Côte d'Azur.{" "}
              <Link
                href="/"
                className="text-white underline hover:text-blue-200 transition-colors font-semibold"
              >
                Découvrez notre service de taxi à Nice
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bloc SEO Principal - Comment contacter */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-primary/5 to-purple-50">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comment contacter un taxi à Nice ?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primaryDark rounded-full mx-auto mb-8"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-t-4 border-primary"
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primaryDark rounded-full mb-4">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4">
                Pour contacter Taxi Nice 06, appelez le{" "}
                <a
                  href="tel:+33651683687"
                  className="text-primary hover:text-primaryDark font-bold text-2xl md:text-3xl transition-colors underline decoration-2 underline-offset-4 whitespace-nowrap inline-block"
                >
                  06 51 68 36 87
                </a>{" "}
                ou utilisez le formulaire de contact.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 rounded-full">
                <Clock className="w-5 h-5 text-green-600" />
                <span className="text-green-800 font-semibold">
                  Service disponible 24h/24 et 7j/7
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bloc SEO Services */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contacter Taxi Nice pour :
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primaryDark rounded-full mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
          >
            {[
              "Réservation taxi Nice",
              "Transfert aéroport Nice Côte d'Azur",
              "Transport gare Nice Ville",
              "Transport longue distance",
              "Taxi conventionné",
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-primaryDark rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-gray-800 pt-1">
                    {service}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Link
              href="/taxi-nice-numero"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primaryDark text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              Voir le numéro direct du taxi à Nice
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {coordinatesTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {coordinatesDesc}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const CardContent = (
                <>
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  <p className="text-2xl font-bold text-gray-800 mb-2">
                    {info.value}
                  </p>
                  <p className="text-gray-600">{info.description}</p>
                </>
              );

              return info.link ? (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer block"
                >
                  {CardContent}
                </motion.a>
              ) : (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  {CardContent}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {formTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {formDescription}
            </p>
          </motion.div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-12 text-center shadow-lg"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-green-600 mb-4">
                {formSuccess}
              </h3>
              <p className="text-lg text-gray-600 mb-6">{formSuccessMessage}</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primaryDark transition-colors"
              >
                {formNewMessage}
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Nom *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Téléphone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Sujet
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Heure
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="time"
                        name="heure"
                        value={formData.heure}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                      placeholder="Votre message..."
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-primary to-primaryDark text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le message
                </motion.button>
              </form>
            </motion.div>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {mapTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {mapDescription}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <GoogleMap />
            <div className="mt-4 text-center">
              <a
                href="https://maps.app.goo.gl/UzPCMHMeFYZaeZNH8"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primaryDark transition-colors duration-300 font-semibold"
              >
                <MapPin className="w-5 h-5" />
                Voir sur Google Maps
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-12 grid md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Zone d'Intervention
              </h3>
              <p className="text-gray-600">
                Nice, Cannes, Monaco et toute la Côte d'Azur
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Disponibilité
              </h3>
              <p className="text-gray-600">
                Service disponible 24 heures sur 24 et 7 jours sur 7
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Réservation
              </h3>
              <p className="text-gray-600">
                Réservation en ligne ou par téléphone
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-primary to-primaryDark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {ctaTitle}
            </h2>
            <p className="text-xl text-white/90 mb-8">{ctaDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+33651683687"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center whitespace-nowrap"
              >
                <Phone className="w-5 h-5 mr-2" />
                06 51 68 36 87
              </motion.a>
              <motion.a
                href="mailto:contact@taxi-nice-06.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                {ctaEmailButton}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Taxi Nice 06",
            telephone: "+33651683687",
            email: "contact@taxi-nice-06.com",
            areaServed: {
              "@type": "City",
              name: "Nice",
            },
            url: "https://taxi-nice-06.com",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
            ],
          }),
        }}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
