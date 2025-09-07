import express from "express";
import { addCity, getCities, getMoviesByCity } from "../controllers/city.controller.js";

const router = express.Router();

router.post("/addcity", addCity);
router.get("/getcities", getCities);
router.get("/:cityId/movies", getMoviesByCity);

export default router;
