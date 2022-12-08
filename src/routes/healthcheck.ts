import express from "express";

const healthcheckRouter = express.Router();

healthcheckRouter.get("/", async (_req, res, _next) => {
  const healthcheck = {
    message: "OK",
    timestamp: Date.now(),
    uptime: process.uptime(),
    processtime: process.hrtime(), //seconds and nanoseconds
  };
  try {
    res.send(healthcheck);
  } catch (error) {
    healthcheck.message = error as string;
    res.status(503).send();
  }
});

export { healthcheckRouter };
