import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

function buildRecordFromBody(body) {
  return {
    name: body?.name?.trim() || "",
    position: body?.position?.trim() || "",
    level: body?.level?.trim() || "",
  };
}

function isValidRecord(record) {
  return Boolean(record.name && record.position && record.level);
}

router.get("/", async (_req, res) => {
  try {
    const collection = await db.collection("records");
    const results = await collection.find({}).sort({ _id: -1 }).toArray();
    res.status(200).json(results);
  } catch (err) {
    console.error("Failed to fetch records", err);
    res.status(500).json({ message: "Error fetching records" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid record id" });
    }

    const collection = await db.collection("records");
    const query = { _id: new ObjectId(req.params.id) };
    const result = await collection.findOne(query);

    if (!result) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json(result);
  } catch (err) {
    console.error("Failed to fetch record", err);
    res.status(500).json({ message: "Error fetching record" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newDocument = buildRecordFromBody(req.body);
    if (!isValidRecord(newDocument)) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const collection = await db.collection("records");
    const result = await collection.insertOne(newDocument);
    res.status(201).json({ insertedId: result.insertedId, ...newDocument });
  } catch (err) {
    console.error("Failed to add record", err);
    res.status(500).json({ message: "Error adding record" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid record id" });
    }

    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: buildRecordFromBody(req.body),
    };

    if (!isValidRecord(updates.$set)) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const collection = await db.collection("records");
    const result = await collection.updateOne(query, updates);

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json({ modifiedCount: result.modifiedCount });
  } catch (err) {
    console.error("Failed to update record", err);
    res.status(500).json({ message: "Error updating record" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid record id" });
    }

    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: buildRecordFromBody(req.body),
    };

    if (!isValidRecord(updates.$set)) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const collection = await db.collection("records");
    const result = await collection.updateOne(query, updates);

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json({ modifiedCount: result.modifiedCount });
  } catch (err) {
    console.error("Failed to update record", err);
    res.status(500).json({ message: "Error updating record" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid record id" });
    }

    const query = { _id: new ObjectId(req.params.id) };
    const collection = await db.collection("records");
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json({ deletedCount: result.deletedCount });
  } catch (err) {
    console.error("Failed to delete record", err);
    res.status(500).json({ message: "Error deleting record" });
  }
});

export default router;
