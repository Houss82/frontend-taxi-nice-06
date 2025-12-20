#!/bin/bash

# Script pour configurer le cron job local (macOS/Linux)
# 
# Ce script ajoute une tâche cron qui exécute le script de publication automatique
# tous les jours à 16h30
#
# Usage:
#   chmod +x scripts/setup-cron.sh
#   ./scripts/setup-cron.sh

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
CRON_SCRIPT="$PROJECT_DIR/scripts/auto-publish-articles.js"
CRON_LOG="$PROJECT_DIR/logs/cron-auto-publish.log"

# Créer le dossier logs s'il n'existe pas
mkdir -p "$PROJECT_DIR/logs"

# Chemin absolu du script Node.js
NODE_PATH=$(which node)

# Ligne cron (tous les jours à 16h30)
CRON_LINE="30 16 * * * cd $PROJECT_DIR && $NODE_PATH $CRON_SCRIPT >> $CRON_LOG 2>&1"

# Vérifier si le cron job existe déjà
if crontab -l 2>/dev/null | grep -q "$CRON_SCRIPT"; then
    echo "⚠️  Le cron job existe déjà."
    echo ""
    echo "Cron jobs actuels:"
    crontab -l | grep "$CRON_SCRIPT"
    echo ""
    read -p "Voulez-vous le remplacer? (y/n) " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Annulé."
        exit 1
    fi
    # Supprimer l'ancien cron job
    crontab -l 2>/dev/null | grep -v "$CRON_SCRIPT" | crontab -
fi

# Ajouter le nouveau cron job
(crontab -l 2>/dev/null; echo "$CRON_LINE") | crontab -

echo "✅ Cron job ajouté avec succès!"
echo ""
echo "📅 Programmation: Tous les jours à 16h30"
echo "📝 Script: $CRON_SCRIPT"
echo "📋 Logs: $CRON_LOG"
echo ""
echo "Pour voir les cron jobs:"
echo "  crontab -l"
echo ""
echo "Pour supprimer ce cron job:"
echo "  crontab -l | grep -v \"$CRON_SCRIPT\" | crontab -"
echo ""
echo "Pour tester le script maintenant:"
echo "  node $CRON_SCRIPT"

