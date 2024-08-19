import { Router } from "express";
import cardModel from "../models/cardModel.js";

const router = Router();

router.post("/cards", async (req, res) => {
  const { id, title, description } = req.body;

  if (!id || !title || !description) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const card = new cardModel({
      id,
      title,
      description,
    });

    await card.save();
    res.status(201).json(card);
  } catch (err) {
    res.status(500).json({ error: "Failed to create card" });
  }
});

router.get("/cards", async (req, res) => {
  try {
    const cards = await cardModel.find();
    res.status(200).json(cards);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve cards" });
  }
});

router.get("/cards/:title", async (req, res) => {
  try {
    const { title } = req.params;
    const card = await cardModel.findOne({ title });

    if (!card) {
      return res.status(404).json({ error: "Card not found" });
    }

    res.status(200).json(card);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve card" });
  }
});

export default router;
