import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.status(200).json([
    { name: "Ava Patel", month: "July", salary: "$7,200", bonus: "$600", deduction: "$120", net: "$7,680" },
    { name: "Marcus Lee", month: "July", salary: "$5,800", bonus: "$300", deduction: "$90", net: "$6,010" },
  ]);
});

export default router;
