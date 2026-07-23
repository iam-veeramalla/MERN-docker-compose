import express from "express";
import { createDepartment, listDepartments } from "../controllers/departmentController.js";

const router = express.Router();

router.get("/", listDepartments);
router.post("/", createDepartment);

export default router;
