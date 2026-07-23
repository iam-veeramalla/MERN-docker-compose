import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.status(200).json({ companyName: "Northstar HR", theme: "light", notifications: true });
});

export default router;
