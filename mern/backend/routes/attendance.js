import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.status(200).json([
    { id: 1, name: "Ava Patel", status: "Present" },
    { id: 2, name: "Marcus Lee", status: "Present" },
    { id: 3, name: "Sofia Chen", status: "Present" },
  ]);
});

export default router;
