import { Cinema } from "../models/cinema.model.js";
import { City } from "../models/city.model.js";
import { ApiError } from "../utils/ApiError.js";
import ApiResponse from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import generateRows from "../utils/generateRows.js";

const addCinema = asyncHandler(async (req, res) => {
  const { name, location, city, totalRows, seatsPerRow } = req.body;

  if (!name || !location || !city || !totalRows || !seatsPerRow) {
    throw new ApiError(400, "All fields must be filled.");
  }

  const existingCity = await City.findOne({ name: city });
  if (!existingCity) {
    throw new ApiError(404, "City not found");
  }

  const existingCinema = await Cinema.findOne({
    name,
    city: existingCity._id,
  });
  if (existingCinema) {
    throw new ApiError(400, "Cinema with this name already exists in the city");
  }

  const cinema = await Cinema.create({
    name,
    location,
    city: existingCity._id, // ✅ FIXED here
    rows: generateRows(totalRows, seatsPerRow),
    schedule: [],
  });

  return res
    .status(201)
    .json(new ApiResponse(201, cinema, "New cinema hall added"));
});

export { addCinema };
