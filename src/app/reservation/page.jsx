"use client";

import AddressAutocomplete from "@/components/AddressAutocomplete.jsx";
import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import { reservationApi } from "@/lib/api.jsx";
import { formspreeService } from "@/lib/formspree.jsx";
import {
  Calendar,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";
import { useState } from "react";

export default function ReservationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    indicatifPays: "+33",
    telephone: "",
    email: "",
    date: "",
    heure: "",
    adresseDepart: "",
    adresseArrivee: "",
    nombreBagages: "",
    nombrePassagers: "",
    numeroVol: "",
    siegeEnfant: false,
    typeVehicule: "glc",
    commentaires: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation côté client
    if (!formData.nombreBagages || !formData.nombrePassagers) {
      alert("Veuillez sélectionner le nombre de bagages et de passagers");
      setIsSubmitting(false);
      return;
    }

    try {
      // Envoyer à la base de données (API backend)
      await reservationApi.create(formData);

      // Envoyer l'email via Formspree
      await formspreeService.sendReservation(formData);

      // Déclencher la conversion Google Ads
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-17599375066/_iwvCN665q8bENrNhMhB",
          value: 1.0,
          currency: "EUR",
          transaction_id: `reservation_${Date.now()}_${Math.random()
            .toString(36)
            .substr(2, 9)}`,
        });
        console.log("Conversion Google Ads déclenchée pour la réservation");
      }

      setIsSubmitted(true);
      setFormData({
        nom: "",
        indicatifPays: "+33",
        telephone: "",
        email: "",
        date: "",
        heure: "",
        adresseDepart: "",
        adresseArrivee: "",
        nombreBagages: "",
        nombrePassagers: "",
        numeroVol: "",
        siegeEnfant: false,
        typeVehicule: "glc",
        commentaires: "",
      });
    } catch (error) {
      console.error("Erreur:", error);
      const errorMessage =
        error.message || "Erreur lors de l'envoi de la réservation";
      alert(`Erreur: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const indicatifsPays = [
    // Europe
    { code: "+33", pays: "France" },
    { code: "+49", pays: "Allemagne" },
    { code: "+43", pays: "Autriche" },
    { code: "+32", pays: "Belgique" },
    { code: "+359", pays: "Bulgarie" },
    { code: "+385", pays: "Croatie" },
    { code: "+357", pays: "Chypre" },
    { code: "+45", pays: "Danemark" },
    { code: "+372", pays: "Estonie" },
    { code: "+358", pays: "Finlande" },
    { code: "+30", pays: "Grèce" },
    { code: "+36", pays: "Hongrie" },
    { code: "+353", pays: "Irlande" },
    { code: "+354", pays: "Islande" },
    { code: "+39", pays: "Italie" },
    { code: "+371", pays: "Lettonie" },
    { code: "+423", pays: "Liechtenstein" },
    { code: "+370", pays: "Lituanie" },
    { code: "+352", pays: "Luxembourg" },
    { code: "+356", pays: "Malte" },
    { code: "+377", pays: "Monaco" },
    { code: "+382", pays: "Monténégro" },
    { code: "+31", pays: "Pays-Bas" },
    { code: "+47", pays: "Norvège" },
    { code: "+48", pays: "Pologne" },
    { code: "+351", pays: "Portugal" },
    { code: "+420", pays: "République tchèque" },
    { code: "+40", pays: "Roumanie" },
    { code: "+44", pays: "Royaume-Uni" },
    { code: "+378", pays: "Saint-Marin" },
    { code: "+381", pays: "Serbie" },
    { code: "+421", pays: "Slovaquie" },
    { code: "+386", pays: "Slovénie" },
    { code: "+46", pays: "Suède" },
    { code: "+41", pays: "Suisse" },
    { code: "+380", pays: "Ukraine" },
    { code: "+375", pays: "Biélorussie" },
    { code: "+373", pays: "Moldavie" },
    { code: "+374", pays: "Arménie" },
    { code: "+376", pays: "Andorre" },
    { code: "+383", pays: "Kosovo" },
    { code: "+387", pays: "Bosnie-Herzégovine" },
    { code: "+389", pays: "Macédoine du Nord" },

    // Amérique du Nord
    { code: "+1", pays: "États-Unis/Canada" },

    // Amérique du Sud
    { code: "+54", pays: "Argentine" },
    { code: "+591", pays: "Bolivie" },
    { code: "+55", pays: "Brésil" },
    { code: "+56", pays: "Chili" },
    { code: "+57", pays: "Colombie" },
    { code: "+593", pays: "Équateur" },
    { code: "+592", pays: "Guyana" },
    { code: "+594", pays: "Guyane française" },
    { code: "+595", pays: "Paraguay" },
    { code: "+51", pays: "Pérou" },
    { code: "+597", pays: "Suriname" },
    { code: "+598", pays: "Uruguay" },
    { code: "+58", pays: "Venezuela" },

    // Asie
    { code: "+93", pays: "Afghanistan" },
    { code: "+880", pays: "Bangladesh" },
    { code: "+975", pays: "Bhoutan" },
    { code: "+673", pays: "Brunei" },
    { code: "+855", pays: "Cambodge" },
    { code: "+86", pays: "Chine" },
    { code: "+850", pays: "Corée du Nord" },
    { code: "+82", pays: "Corée du Sud" },
    { code: "+91", pays: "Inde" },
    { code: "+62", pays: "Indonésie" },
    { code: "+98", pays: "Iran" },
    { code: "+964", pays: "Irak" },
    { code: "+972", pays: "Israël" },
    { code: "+81", pays: "Japon" },
    { code: "+962", pays: "Jordanie" },
    { code: "+7", pays: "Russie/Kazakhstan" },
    { code: "+965", pays: "Koweït" },
    { code: "+996", pays: "Kirghizistan" },
    { code: "+856", pays: "Laos" },
    { code: "+961", pays: "Liban" },
    { code: "+60", pays: "Malaisie" },
    { code: "+960", pays: "Maldives" },
    { code: "+976", pays: "Mongolie" },
    { code: "+95", pays: "Myanmar" },
    { code: "+977", pays: "Népal" },
    { code: "+92", pays: "Pakistan" },
    { code: "+63", pays: "Philippines" },
    { code: "+974", pays: "Qatar" },
    { code: "+966", pays: "Arabie saoudite" },
    { code: "+65", pays: "Singapour" },
    { code: "+94", pays: "Sri Lanka" },
    { code: "+963", pays: "Syrie" },
    { code: "+886", pays: "Taïwan" },
    { code: "+992", pays: "Tadjikistan" },
    { code: "+66", pays: "Thaïlande" },
    { code: "+670", pays: "Timor oriental" },
    { code: "+90", pays: "Turquie" },
    { code: "+993", pays: "Turkménistan" },
    { code: "+971", pays: "Émirats arabes unis" },
    { code: "+998", pays: "Ouzbékistan" },
    { code: "+84", pays: "Vietnam" },
    { code: "+967", pays: "Yémen" },

    // Afrique
    { code: "+213", pays: "Algérie" },
    { code: "+244", pays: "Angola" },
    { code: "+229", pays: "Bénin" },
    { code: "+267", pays: "Botswana" },
    { code: "+226", pays: "Burkina Faso" },
    { code: "+257", pays: "Burundi" },
    { code: "+238", pays: "Cap-Vert" },
    { code: "+237", pays: "Cameroun" },
    { code: "+236", pays: "République centrafricaine" },
    { code: "+235", pays: "Tchad" },
    { code: "+269", pays: "Comores" },
    { code: "+242", pays: "République du Congo" },
    { code: "+243", pays: "République démocratique du Congo" },
    { code: "+225", pays: "Côte d'Ivoire" },
    { code: "+253", pays: "Djibouti" },
    { code: "+20", pays: "Égypte" },
    { code: "+291", pays: "Érythrée" },
    { code: "+268", pays: "Eswatini" },
    { code: "+251", pays: "Éthiopie" },
    { code: "+241", pays: "Gabon" },
    { code: "+220", pays: "Gambie" },
    { code: "+233", pays: "Ghana" },
    { code: "+224", pays: "Guinée" },
    { code: "+245", pays: "Guinée-Bissau" },
    { code: "+240", pays: "Guinée équatoriale" },
    { code: "+254", pays: "Kenya" },
    { code: "+266", pays: "Lesotho" },
    { code: "+231", pays: "Liberia" },
    { code: "+218", pays: "Libye" },
    { code: "+261", pays: "Madagascar" },
    { code: "+265", pays: "Malawi" },
    { code: "+223", pays: "Mali" },
    { code: "+222", pays: "Mauritanie" },
    { code: "+230", pays: "Maurice" },
    { code: "+212", pays: "Maroc" },
    { code: "+258", pays: "Mozambique" },
    { code: "+264", pays: "Namibie" },
    { code: "+227", pays: "Niger" },
    { code: "+234", pays: "Nigeria" },
    { code: "+250", pays: "Rwanda" },
    { code: "+262", pays: "Réunion" },
    { code: "+248", pays: "Seychelles" },
    { code: "+232", pays: "Sierra Leone" },
    { code: "+252", pays: "Somalie" },
    { code: "+27", pays: "Afrique du Sud" },
    { code: "+211", pays: "Soudan du Sud" },
    { code: "+249", pays: "Soudan" },
    { code: "+255", pays: "Tanzanie" },
    { code: "+228", pays: "Togo" },
    { code: "+216", pays: "Tunisie" },
    { code: "+256", pays: "Ouganda" },
    { code: "+260", pays: "Zambie" },
    { code: "+263", pays: "Zimbabwe" },

    // Océanie
    { code: "+61", pays: "Australie" },
    { code: "+679", pays: "Fidji" },
    { code: "+689", pays: "Polynésie française" },
    { code: "+687", pays: "Nouvelle-Calédonie" },
    { code: "+64", pays: "Nouvelle-Zélande" },
    { code: "+675", pays: "Papouasie-Nouvelle-Guinée" },
    { code: "+685", pays: "Samoa" },
    { code: "+676", pays: "Tonga" },
    { code: "+678", pays: "Vanuatu" },

    // Territoires français
    { code: "+590", pays: "Guadeloupe" },
    { code: "+596", pays: "Martinique" },
    { code: "+508", pays: "Saint-Pierre-et-Miquelon" },
    { code: "+681", pays: "Wallis-et-Futuna" },

    // Autres territoires
    { code: "+973", pays: "Bahreïn" },
    { code: "+968", pays: "Oman" },
    { code: "+970", pays: "Palestine" },
    { code: "+852", pays: "Hong Kong" },
    { code: "+853", pays: "Macao" },
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Contenu principal en deux sections verticales */}
      <div className="min-h-screen flex flex-col">
        {/* Section haute - Image avec titre */}
        <div className="w-full h-[50vh] relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/image-résa.jpeg')",
            }}
          />
          {/* Overlay pour améliorer la lisibilité du contenu */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Contenu de la section haute */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-white">
            <div className="text-center max-w-4xl">
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6">
                Réservation de Taxi
              </h1>
              <div className="w-24 h-1 bg-white mx-auto rounded-full mb-8"></div>
              <p className="text-lg lg:text-2xl leading-relaxed max-w-3xl mx-auto">
                Réservez votre transport en quelques clics. Remplissez le
                formulaire ci-dessous et nous vous confirmerons votre
                réservation rapidement.
              </p>
            </div>
          </div>
        </div>

        {/* Section basse - Formulaire */}
        <div className="flex-1 bg-gray-50 flex items-center justify-center p-4 md:p-8">
          <div className="w-full max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Formulaire de Réservation
            </h2>
            {/* Formulaire */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-200 p-4 md:p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-green-600 mb-4">
                    Réservation confirmée !
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Votre demande de réservation a été envoyée avec succès. Nous
                    vous contacterons sous peu pour confirmer les détails.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primaryDark transition-colors"
                  >
                    Nouvelle réservation
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 md:space-y-8"
                >
                  {/* Informations personnelles */}
                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl md:rounded-2xl p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-primary flex items-center">
                      <User className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                      Informations personnelles
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      {/* Nom complet */}
                      <div className="space-y-2">
                        <label className="text-gray-700 font-semibold">
                          Nom complet *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            placeholder="Votre nom complet"
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            required
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="text-gray-700 font-semibold">
                          Email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="votre.email@exemple.com"
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                          />
                        </div>
                      </div>

                      {/* Téléphone avec indicatif */}
                      <div className="space-y-2">
                        <label className="text-gray-700 font-semibold">
                          Téléphone *
                        </label>
                        <div className="flex gap-2">
                          <div className="relative w-32">
                            <select
                              name="indicatifPays"
                              value={formData.indicatifPays}
                              onChange={handleChange}
                              className="w-full pl-3 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none appearance-none"
                            >
                              {indicatifsPays.map((indicatif) => (
                                <option
                                  key={indicatif.code}
                                  value={indicatif.code}
                                >
                                  {indicatif.code}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="relative flex-1">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="tel"
                              name="telephone"
                              value={formData.telephone}
                              onChange={handleChange}
                              placeholder="06 12 34 56 78"
                              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Date et heure */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-primary flex items-center">
                      <Calendar className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                      Date et heure
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <label className="text-gray-700 font-semibold">
                          Date *
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none cursor-pointer"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-gray-700 font-semibold">
                          Heure *
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                          <input
                            type="time"
                            name="heure"
                            value={formData.heure}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none cursor-pointer"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Adresses */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl md:rounded-2xl p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-primary flex items-center">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                      Adresses
                    </h3>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-gray-700 font-semibold">
                          Adresse de départ *
                        </label>
                        <AddressAutocomplete
                          name="adresseDepart"
                          value={formData.adresseDepart}
                          onChange={handleChange}
                          placeholder="Adresse de départ"
                          className=""
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-gray-700 font-semibold">
                          Adresse d'arrivée *
                        </label>
                        <AddressAutocomplete
                          name="adresseArrivee"
                          value={formData.adresseArrivee}
                          onChange={handleChange}
                          placeholder="Adresse d'arrivée"
                          className=""
                        />
                      </div>
                    </div>
                  </div>

                  {/* Détails du voyage */}
                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl md:rounded-2xl p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-primary flex items-center">
                      <User className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                      Détails du voyage
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      {/* Nombre de bagages */}
                      <div className="space-y-2">
                        <label className="text-gray-700 font-semibold">
                          Nombre de bagages *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <select
                            name="nombreBagages"
                            value={formData.nombreBagages}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            required
                          >
                            <option value="">Sélectionner</option>
                            <option value="0">0 bagage</option>
                            <option value="1">1 bagage</option>
                            <option value="2">2 bagages</option>
                            <option value="3">3 bagages</option>
                            <option value="4">4 bagages</option>
                            <option value="5">5+ bagages</option>
                          </select>
                        </div>
                      </div>

                      {/* Nombre de passagers */}
                      <div className="space-y-2">
                        <label className="text-gray-700 font-semibold">
                          Nombre de passagers *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <select
                            name="nombrePassagers"
                            value={formData.nombrePassagers}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            required
                          >
                            <option value="">Sélectionner</option>
                            <option value="1">1 passager</option>
                            <option value="2">2 passagers</option>
                            <option value="3">3 passagers</option>
                            <option value="4">4 passagers</option>
                            <option value="5">5 passagers</option>
                            <option value="6">6 passagers</option>
                            <option value="7">7 passagers</option>
                            <option value="8">8+ passagers</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Numéro de vol et Siège enfant */}
                  <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl md:rounded-2xl p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-primary flex items-center">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                      Options supplémentaires
                    </h3>

                    <div className="space-y-6">
                      {/* Numéro de vol */}
                      <div className="space-y-2">
                        <label className="text-gray-700 font-semibold">
                          Numéro de vol (optionnel)
                        </label>
                        <input
                          type="text"
                          name="numeroVol"
                          value={formData.numeroVol}
                          onChange={handleChange}
                          placeholder="Ex: AF1234"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        />
                        <p className="text-xs text-gray-500">
                          Précisez votre numéro de vol pour un suivi en temps
                          réel
                        </p>
                      </div>

                      {/* Siège enfant */}
                      <div className="space-y-2">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="siegeEnfant"
                            checked={formData.siegeEnfant}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                siegeEnfant: e.target.checked,
                              }))
                            }
                            className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary"
                          />
                          <span className="text-gray-700 font-semibold">
                            Siège enfant (réhausseur)
                          </span>
                        </label>
                        <p className="text-xs text-gray-500 ml-8">
                          Disponible gratuitement sur demande
                        </p>
                      </div>

                      {/* Choix du véhicule */}
                      <div className="space-y-3">
                        <label className="text-gray-700 font-semibold">
                          Type de véhicule *
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          <label
                            className={`relative cursor-pointer rounded-xl border-2 p-4 transition-all ${
                              formData.typeVehicule === "glc"
                                ? "border-primary bg-primary/10"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <input
                              type="radio"
                              name="typeVehicule"
                              value="glc"
                              checked={formData.typeVehicule === "glc"}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <div className="text-center">
                              <h4 className="font-bold text-gray-800">
                                Mercedes GLC
                              </h4>
                              <p className="text-sm text-gray-600">
                                Jusqu'à 4 passagers
                              </p>
                            </div>
                          </label>

                          <label
                            className={`relative cursor-pointer rounded-xl border-2 p-4 transition-all ${
                              formData.typeVehicule === "van"
                                ? "border-primary bg-primary/10"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <input
                              type="radio"
                              name="typeVehicule"
                              value="van"
                              checked={formData.typeVehicule === "van"}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <div className="text-center">
                              <h4 className="font-bold text-gray-800">
                                Van Premium
                              </h4>
                              <p className="text-sm text-gray-600">
                                Jusqu'à 8 passagers
                              </p>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Commentaires */}
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl md:rounded-2xl p-4 md:p-6">
                    <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                      <MessageSquare className="w-6 h-6 mr-3" />
                      Commentaires
                    </h3>

                    <div className="space-y-2">
                      <label className="text-gray-700 font-semibold">
                        Informations supplémentaires
                      </label>
                      <textarea
                        name="commentaires"
                        value={formData.commentaires}
                        onChange={handleChange}
                        placeholder="Indiquez toute information supplémentaire (préférences, besoins spéciaux, etc.)"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                      />
                    </div>
                  </div>

                  {/* Bouton de soumission */}
                  <div className="text-center pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-12 py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                        isSubmitting
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-primary hover:bg-primaryDark hover:scale-105"
                      } text-white shadow-lg`}
                    >
                      {isSubmitting
                        ? "Envoi en cours..."
                        : "Réserver maintenant"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
