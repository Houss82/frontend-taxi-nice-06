"use client";

import { MapPin } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export default function AddressAutocomplete({
  name,
  value,
  onChange,
  placeholder,
  className = "",
}) {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const timeoutRef = useRef(null);

  // Identifiant unique pour ce composant
  const componentId = `address-autocomplete-${name}`;

  // Fonction pour rechercher des adresses avec l'API Adresse.data.gouv.fr
  const searchAddresses = useCallback(async (query) => {
    console.log(`🔍 [${name}] Recherche d'adresses pour:`, query);

    if (query.length < 3) {
      console.log(`❌ [${name}] Requête trop courte (< 3 caractères)`);
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    console.log(`⏳ [${name}] Chargement en cours...`);

    try {
      const apiUrl = `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(
        query
      )}&limit=5&type=housenumber&autocomplete=1`;

      console.log(`🌐 [${name}] URL API:`, apiUrl);

      // Utiliser l'API Adresse.data.gouv.fr
      const response = await fetch(apiUrl);

      console.log(
        `📡 [${name}] Réponse API:`,
        response.status,
        response.statusText
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la recherche d'adresses");
      }

      const data = await response.json();
      console.log(`📦 [${name}] Données reçues:`, data);

      if (data.features && data.features.length > 0) {
        const formattedSuggestions = data.features.map((feature) => ({
          description: feature.properties.label,
          context: feature.properties.context,
          postcode: feature.properties.postcode,
          city: feature.properties.city,
          score: feature.properties.score,
        }));
        console.log(
          `✅ [${name}] Suggestions formatées:`,
          formattedSuggestions
        );
        setSuggestions(formattedSuggestions);
      } else {
        console.log(`❌ [${name}] Aucune adresse trouvée`);
        setSuggestions([]);
      }
    } catch (error) {
      console.error("❌ Erreur lors de la recherche d'adresses:", error);

      // Ne pas afficher l'erreur à l'utilisateur, utiliser le fallback silencieusement
      console.log("🔄 [${name}] Utilisation du mode hors ligne");

      // Fallback vers des adresses locales en cas d'erreur
      const mockAddresses = [
        "Aéroport Nice Côte d'Azur, 06200 Nice",
        "Gare de Nice-Ville, 06000 Nice",
        "Promenade des Anglais, 06000 Nice",
        "Place Masséna, 06000 Nice",
        "Vieux Nice, 06300 Nice",
        "Port de Nice, 06300 Nice",
        "Colline du Château, 06300 Nice",
        "Musée Matisse, 06000 Nice",
        "Cathédrale Sainte-Réparate, 06300 Nice",
        "Marché aux Fleurs, 06300 Nice",
        "Hôtel Negresco, 06000 Nice",
        "Palais des Festivals, 06400 Cannes",
        "Promenade de la Croisette, 06400 Cannes",
        "Gare de Cannes, 06400 Cannes",
        "Aéroport de Cannes-Mandelieu, 06210 Mandelieu-la-Napoule",
        "Monaco-Ville, 98000 Monaco",
        "Casino de Monte-Carlo, 98000 Monaco",
        "Gare de Monaco, 98000 Monaco",
        "Port de Monaco, 98000 Monaco",
        "Palais Princier, 98000 Monaco",
      ];

      const filteredAddresses = mockAddresses
        .filter((addr) => addr.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 5);

      console.log(`🔄 [${name}] Utilisation du fallback:`, filteredAddresses);
      setSuggestions(filteredAddresses);
    } finally {
      setIsLoading(false);
      console.log(`✅ [${name}] Chargement terminé`);
    }
  }, []);

  // Gérer la saisie avec debounce
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    console.log(`⌨️ [${name}] Saisie:`, newValue);
    onChange(e);

    // Annuler le timeout précédent
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Débounce de 500ms
    timeoutRef.current = setTimeout(() => {
      console.log(`⏰ [${name}] Débounce déclenché pour:`, newValue);
      searchAddresses(newValue);
    }, 500);
  };

  // Sélectionner une suggestion
  const selectSuggestion = (suggestion) => {
    const addressValue =
      typeof suggestion === "string" ? suggestion : suggestion.description;

    const event = {
      target: {
        name: name,
        value: addressValue,
      },
    };
    onChange(event);
    setShowSuggestions(false);
    setSuggestions([]);
  };

  // Gérer le focus/blur
  const handleFocus = () => {
    console.log(
      `🎯 [${name}] Focus sur l'input, suggestions:`,
      suggestions.length
    );
    if (suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleBlur = () => {
    console.log(`👋 [${name}] Blur sur l'input`);
    // Délai pour permettre le clic sur une suggestion
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
  };

  // Afficher les suggestions quand elles arrivent
  useEffect(() => {
    if (suggestions.length > 0) {
      console.log(
        `📋 [${name}] Affichage des suggestions:`,
        suggestions.length
      );
      setShowSuggestions(true);
    }
  }, [suggestions, name]);

  // Nettoyer le timeout au démontage
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          name={name}
          value={value}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={`w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none ${className}`}
          autoComplete="off"
        />
        {isLoading && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
          </div>
        )}
      </div>

      {/* Liste des suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {suggestions.map((suggestion, index) => {
            const displayText =
              typeof suggestion === "string"
                ? suggestion
                : suggestion.description;
            const context =
              typeof suggestion === "object" ? suggestion.context : "";

            return (
              <div
                key={index}
                onClick={() => selectSuggestion(suggestion)}
                className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 flex items-start"
              >
                <MapPin className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-gray-700 font-medium truncate">
                    {displayText}
                  </div>
                  {context && (
                    <div className="text-xs text-gray-500 truncate mt-1">
                      {context}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Message si aucune suggestion */}
      {showSuggestions &&
        suggestions.length === 0 &&
        value.length >= 3 &&
        !isLoading && (
          <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
            <p className="text-sm text-gray-500 text-center">
              Aucune adresse trouvée pour "{value}"
            </p>
          </div>
        )}
    </div>
  );
}
