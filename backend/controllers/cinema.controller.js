// controllers/cinema.controller.js
import { Cinema } from "../models/cinema.model.js";
import { City } from "../models/city.model.js";
import { ApiError } from "../utils/ApiError.js";
import ApiResponse from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import generateRows from "../utils/generateRows.js";

 const addCinema = asyncHandler(async (req, res) => {
  const { name, location, city, totalRows, seatsPerRow } = req.body;

  if (!name || !location || !city || !totalRows || !seatsPerRow) {
    throw new ApiError(400, "all fields must be filled.");
  }
  const existingCity = await City.findOne({ name: city });
  if (!existingCity) {
    throw new ApiError(404, "city not  found");
  }
  const existingCinema = await Cinema.findOne({ name, city: existingCity._id });
  if (existingCinema) {
    throw new ApiError(400, "cinema with name already exist in the city ");
  }

  const cinema = await Cinema.create({
    name,
    location,
    city: existingCinema._id,
    rows: generateRows(totalRows, seatsPerRow),
    schedule: [],
  });

  return res
    .status(201)
    .json(new ApiResponse(201, cinema, "new cinema hall added"));
});


 
export {addCinema};
