import { ObjectId } from "mongodb";
import db from "../db/connection.js";

const collection = () => db.collection("employees");

export const listEmployees = async (_req, res) => {
  try {
    const employees = await collection().find({}).sort({ createdAt: -1 }).toArray();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createEmployee = async (req, res) => {
  try {
    const employee = {
      ...req.body,
      createdAt: new Date(),
    };
    const result = await collection().insertOne(employee);
    res.status(201).json({ ...employee, _id: result.insertedId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const result = await collection().deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({ message: "Employee deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
