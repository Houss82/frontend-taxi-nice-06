import { NextResponse } from "next/server";

/**
 * API Route pour la publication automatique des articles
 * 
 * Cette route peut être appelée par :
 * - Vercel Cron Jobs
 * - GitHub Actions avec schedule
 * - Services externes (cron-job.org, etc.)
 * 
 * URL: /api/cron/auto-publish
 * Méthode: GET ou POST
 */

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request) {
  return handleRequest(request);
}

export async function POST(request) {
  return handleRequest(request);
}

async function handleRequest(request) {
  // Vérifier l'authentification si nécessaire (optionnel)
  // Vous pouvez ajouter une clé secrète pour sécuriser l'endpoint
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    // Exécuter le script de publication automatique
    const { exec } = require("child_process");
    const path = require("path");
    const scriptPath = path.join(process.cwd(), "scripts/auto-publish-articles.js");

    return new Promise((resolve) => {
      exec(`node ${scriptPath}`, (error, stdout, stderr) => {
        if (error) {
          console.error("Erreur lors de l'exécution du script:", error);
          resolve(
            NextResponse.json(
              {
                success: false,
                error: error.message,
                output: stderr,
              },
              { status: 500 }
            )
          );
          return;
        }

        resolve(
          NextResponse.json({
            success: true,
            message: "Script exécuté avec succès",
            output: stdout,
            timestamp: new Date().toISOString(),
          })
        );
      });
    });
  } catch (error) {
    console.error("Erreur dans l'API route:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}

