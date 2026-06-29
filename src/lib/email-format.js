function row(label, value) {
  if (value == null || value === "") return "";
  return `<tr><td style="padding:8px 12px;font-weight:bold;color:#374151;vertical-align:top;width:180px">${label}</td><td style="padding:8px 12px;color:#111827">${value}</td></tr>`;
}

function wrapEmail(title, rows) {
  return `
<!DOCTYPE html>
<html>
<body style="font-family:Arial,sans-serif;background:#f3f4f6;margin:0;padding:24px">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.1)">
    <div style="background:#1e40af;color:#fff;padding:20px 24px">
      <h1 style="margin:0;font-size:20px">${title}</h1>
      <p style="margin:8px 0 0;opacity:.9;font-size:14px">Taxi Nice Côte d'Azur — ${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}</p>
    </div>
    <table style="width:100%;border-collapse:collapse">${rows}</table>
    <div style="padding:16px 24px;background:#f9fafb;font-size:12px;color:#6b7280">
      Répondez directement à cet email pour contacter le client.
    </div>
  </div>
</body>
</html>`;
}

export function formatReservationEmail(data) {
  const telephone = `${data.indicatifPays || "+33"} ${data.telephone || ""}`.trim();
  const vehicule =
    data.typeVehicule === "van" ? "Van Premium (8 places)" : "Mercedes GLC";

  const rows = [
    row("Nom", data.nom),
    row("Email", data.email || "Non renseigné"),
    row("Téléphone", telephone),
    row("Date", data.date),
    row("Heure", data.heure),
    row("Départ", data.adresseDepart),
    row("Arrivée", data.adresseArrivee),
    row("Passagers", data.nombrePassagers),
    row("Bagages", data.nombreBagages),
    row("Véhicule", vehicule),
    row("N° de vol", data.numeroVol),
    row("Siège enfant", data.siegeEnfant ? "Oui" : "Non"),
    row("Commentaires", data.commentaires?.replace(/\n/g, "<br>")),
  ].join("");

  return {
    subject: `🚕 Nouvelle réservation — ${data.nom} — ${data.date} ${data.heure}`,
    html: wrapEmail("Nouvelle réservation", rows),
    replyTo: data.email || undefined,
  };
}

export function formatContactEmail(data) {
  const rows = [
    row("Nom", data.nom),
    row("Email", data.email),
    row("Téléphone", data.telephone),
    row("Service", data.service),
    row("Date souhaitée", data.date),
    row("Heure souhaitée", data.heure),
    row("Message", data.message?.replace(/\n/g, "<br>")),
  ].join("");

  return {
    subject: `📩 Contact — ${data.nom}`,
    html: wrapEmail("Nouveau message de contact", rows),
    replyTo: data.email || undefined,
  };
}

export function formatQuickBookingEmail(data) {
  const telephone = `${data.indicatifPays || "+33"} ${data.telephone || ""}`.trim();
  const vehicule =
    data.typeVehicule === "van" ? "Van Premium (8 places)" : "Mercedes GLC";

  const rows = [
    row("Nom", data.nom),
    row("Email", data.email || "Non renseigné"),
    row("Téléphone", telephone),
    row("Date", data.date),
    row("Heure", data.heure),
    row("Départ", data.adresseDepart),
    row("Arrivée", data.adresseArrivee),
    row("Véhicule", vehicule),
    row("N° de vol", data.numeroVol),
    row("Siège enfant", data.siegeEnfant ? "Oui" : "Non"),
    row("Notes", data.commentaires?.replace(/\n/g, "<br>")),
  ].join("");

  return {
    subject: `⚡ Réservation rapide — ${data.nom} — ${data.date} ${data.heure}`,
    html: wrapEmail("Réservation rapide (page d'accueil)", rows),
    replyTo: data.email || undefined,
  };
}

export function formatEmailByType(type, data) {
  switch (type) {
    case "reservation":
      return formatReservationEmail(data);
    case "contact":
      return formatContactEmail(data);
    case "quick-booking":
      return formatQuickBookingEmail(data);
    default:
      throw new Error("Type de formulaire invalide");
  }
}
