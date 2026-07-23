import express from "express";
import { ObjectId } from "mongodb";
import { createEmployee, deleteEmployee, listEmployees } from "../controllers/employeeController.js";
import db from "../db/connection.js";

const router = express.Router();

router.get("/", listEmployees);
router.get("/:id", async (req, res) => {
  try {
    const employee = await db.collection("employees").findOne({ _id: new ObjectId(req.params.id) });
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post("/", createEmployee);
router.delete("/:id", deleteEmployee);

export default router;
