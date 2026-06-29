async function sendEmail(type, data) {
  const response = await fetch("/api/email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, data }),
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(result.error || `Erreur envoi email (${response.status})`);
  }

  return result;
}

export const emailService = {
  sendReservation: (data) => sendEmail("reservation", data),
  sendContact: (data) => sendEmail("contact", data),
  sendQuickBooking: (data) => sendEmail("quick-booking", data),
};
