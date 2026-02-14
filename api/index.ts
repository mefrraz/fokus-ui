import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "../server/routes";
import { serveStatic } from "../server/static";

const app = express();

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  })
);

app.use(express.urlencoded({ extended: false }));

// Register API routes
registerRoutes(app, null);

// Serve static files in production
serveStatic(app);

export default app;