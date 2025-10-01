// Service Formspree pour gérer les envois de formulaires
const FORMPREE_ENDPOINT = "https://formspree.io/f/mvgwrgla";

// Fonction utilitaire pour gérer les réponses Formspree
const handleFormspreeResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || `Erreur Formspree! status: ${response.status}`
    );
  }
  return response.json();
};

// Service pour les réservations
export const formspreeService = {
  // Envoyer une réservation
  sendReservation: async (data) => {
    const formData = new FormData();

    // Ajouter tous les champs de la réservation
    formData.append("nom", data.nom || "");
    formData.append("email", data.email || "");
    formData.append(
      "telephone",
      `${data.indicatifPays || "+33"} ${data.telephone || ""}`
    );
    formData.append("date", data.date || "");
    formData.append("heure", data.heure || "");
    formData.append("adresse_depart", data.adresseDepart || "");
    formData.append("adresse_arrivee", data.adresseArrivee || "");
    formData.append("nombre_bagages", data.nombreBagages || "");
    formData.append("nombre_passagers", data.nombrePassagers || "");
    formData.append("commentaires", data.commentaires || "");
    formData.append("type_vehicule", data.typeVehicule || "");

    // Ajouter un sujet pour identifier le type de demande
    formData.append("_subject", "Nouvelle réservation - Taxi Nice Côte d'Azur");
    formData.append("_replyto", data.email || "");
    formData.append(
      "_next",
      window.location.origin + "/reservation?success=true"
    );

    const response = await fetch(FORMPREE_ENDPOINT, {
      method: "POST",
      body: formData,
      mode: "cors",
      headers: {
        Accept: "application/json",
      },
    });

    return handleFormspreeResponse(response);
  },

  // Envoyer un message de contact
  sendContact: async (data) => {
    const formData = new FormData();

    formData.append("nom", data.nom || "");
    formData.append("email", data.email || "");
    formData.append("telephone", data.telephone || "");
    formData.append("service", data.service || "");
    formData.append("message", data.message || "");
    formData.append("date", data.date || "");
    formData.append("heure", data.heure || "");

    formData.append(
      "_subject",
      "Nouveau message de contact - Taxi Nice Côte d'Azur"
    );
    formData.append("_replyto", data.email || "");
    formData.append("_next", window.location.origin + "/contact?success=true");

    const response = await fetch(FORMPREE_ENDPOINT, {
      method: "POST",
      body: formData,
      mode: "cors",
      headers: {
        Accept: "application/json",
      },
    });

    return handleFormspreeResponse(response);
  },

  // Envoyer une réservation rapide
  sendQuickBooking: async (data) => {
    const formData = new FormData();

    formData.append("nom", data.nom || "");
    formData.append("email", data.email || "");
    formData.append(
      "telephone",
      `${data.indicatifPays || "+33"} ${data.telephone || ""}`
    );
    formData.append("adresse_depart", data.adresseDepart || "");
    formData.append("adresse_arrivee", data.adresseArrivee || "");
    formData.append("date", data.date || "");
    formData.append("heure", data.heure || "");
    formData.append("type_vehicule", data.typeVehicule || "");
    formData.append("type_demande", "Réservation rapide");

    formData.append("_subject", "Réservation rapide - Taxi Nice Côte d'Azur");
    formData.append("_replyto", data.email || "");
    formData.append("_next", window.location.origin + "/?success=true");

    const response = await fetch(FORMPREE_ENDPOINT, {
      method: "POST",
      body: formData,
      mode: "cors",
      headers: {
        Accept: "application/json",
      },
    });

    return handleFormspreeResponse(response);
  },
};
