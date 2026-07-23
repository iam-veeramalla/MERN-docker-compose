import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.status(200).json([
    { id: 1, employee: "Sofia Chen", type: "Sick Leave", status: "Pending" },
    { id: 2, employee: "Marcus Lee", type: "Annual Leave", status: "Pending" },
  ]);
});

export default router;
