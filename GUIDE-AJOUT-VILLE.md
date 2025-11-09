Pas de souci : même si le rendu est un seul composant, chaque ville possède sa fiche dédiée dans frontend/src/app/secteurs/[slug]/data.js.
Tu peux donc ajouter, pour une ville précise, une section “Articles recommandés” (ou un simple paragraphe avec des liens) directement dans l’objet correspondant. Par exemple :
,
resource: { description: "Lectures utiles pour préparer votre séjour à Monaco :", links: [ { label: "Guide transfert aéroport Nice", url: "/blog/guide-transfert-aeroport-nice" }, { label: "Conseils luxe Monaco", url: "/blog/monaco-luxe" } ],},

Ensuite, tu adaptes le composant pour n’afficher ces liens que si la ville les possède. Résultat : Monaco peut pointer vers certains articles, Cannes vers d’autres, etc. Rien n’est imposé à toutes les villes ; tu contrôles chaque secteur individuellement via les données.
