import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/tournaments", async (_req, res) => {
    const tournaments = await storage.getTournaments();
    res.json(tournaments);
  });

  app.get("/api/gallery", async (_req, res) => {
    const images = await storage.getGalleryImages();
    res.json(images);
  });

  return httpServer;
}
