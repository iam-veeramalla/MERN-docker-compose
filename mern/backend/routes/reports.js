import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.status(200).json({ growth: 18.4, salary: 7200, attendance: 94.2, leave: 3 });
});

export default router;
