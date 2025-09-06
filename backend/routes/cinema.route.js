import express from "express";
import { addCinema } from "../controllers/cinema.controller.js";
const router = express.Router();

// POST /api/cities  → add a new city
router.post("/addcinema", addCinema);

export default router;
