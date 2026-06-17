export default function HospitalsList({ items = [] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((hospital, index) => (
        <div
          key={`${hospital.name}-${index}`}
          className="bg-white rounded-xl shadow-md border border-blue-100 p-5"
        >
          <h3 className="text-lg font-semibold text-blue-600 mb-2">
            {hospital.name}
          </h3>
          <p className="text-gray-600 mb-2">{hospital.description}</p>
          <div className="text-sm text-gray-500 space-y-1">
            <p>
              <span className="font-semibold text-gray-700">Ville :</span>{" "}
              {hospital.city}
            </p>
            {hospital.speciality && (
              <p>
                <span className="font-semibold text-gray-700">
                  Spécialités :
                </span>{" "}
                {hospital.speciality}
              </p>
            )}
            {hospital.phone && (
              <p>
                <span className="font-semibold text-gray-700">Téléphone :</span>{" "}
                <a
                  href={`tel:${hospital.phone.replace(/\s+/g, "")}`}
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  {hospital.phone}
                </a>
              </p>
            )}
            {hospital.website && (
              <p>
                <a
                  href={hospital.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  Site officiel →
                </a>
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}


