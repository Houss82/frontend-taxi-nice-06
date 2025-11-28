"use client";

import { useEffect, useRef } from "react";

export default function ResponsiveTableWrapper({ 
  children, 
  className, 
  dangerouslySetInnerHTML 
}) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;

    // Trouver tous les tableaux dans le contenu
    const tables = contentRef.current.querySelectorAll("table");

    tables.forEach((table) => {
      // Vérifier si le tableau est déjà enveloppé
      if (table.parentElement?.classList.contains("table-wrapper")) {
        return;
      }

      // Créer un wrapper pour le tableau
      const wrapper = document.createElement("div");
      wrapper.className = "table-wrapper";

      // Envelopper le tableau
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
  }, [dangerouslySetInnerHTML]);

  return (
    <div 
      ref={contentRef} 
      className={className}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </div>
  );
}

