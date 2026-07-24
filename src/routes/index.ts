import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to GastroCore API",
  });
});

router.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "gastrocore-api",
  });
});

export default router;
