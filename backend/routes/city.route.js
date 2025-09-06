import express from "express";
import { addCity } from "../controllers/city.controller.js";

const router = express.Router();

// POST /api/cities  → add a new city
router.post("/addcity", addCity);

export default router;