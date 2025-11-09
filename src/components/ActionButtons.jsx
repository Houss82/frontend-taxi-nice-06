import Link from "next/link";

export default function ActionButtons({
  phoneNumber = "+33 6 51 68 36 87",
  whatsappNumber = "+33 6 51 68 36 87",
  className = "",
}) {
  const telHref = `tel:${phoneNumber.replace(/\s+/g, "")}`;
  const whatsappHref = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-center gap-3 px-4 py-4 sm:py-3 bg-white/95 backdrop-blur border-b border-gray-100 ${className}`}
    >
      <a
        href={telHref}
        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-white font-semibold text-center shadow-md hover:bg-primary/90 transition-colors"
        title="Appeler Taxi Nice 06"
      >
        📞 Appelez-nous
      </a>
      <Link
        href="/reservation"
        className="w-full sm:w-auto px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold text-center shadow-sm hover:bg-primary hover:text-white transition-colors"
        title="Réserver un taxi"
      >
        📝 Réserver en ligne
      </Link>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-green-500 text-white font-semibold text-center shadow-md hover:bg-green-600 transition-colors"
        title="Discuter sur WhatsApp"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}


