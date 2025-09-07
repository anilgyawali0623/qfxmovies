import { City } from "../models/city.model.js";
import { ApiError } from "../utils/ApiError.js";
import ApiResponse from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addCity = asyncHandler(async (req, res, next) => {
  const { name } = req.body;

  if (!name || name === "") {
    throw new ApiError(400, "city name is required");
  }

  const existingCity = await City.findOne({ name });
  if (existingCity) {
    throw new ApiError(400, "city already exist");
  }

  const city = await City.create({
    name,
  });

  return res.status(201).json(new ApiResponse(201, city, "new city is added"));
});

const getCities = asyncHandler(async (req, res, next) => {
  const cities = await City.find({}, "name");
  if (!cities.length) {
    throw new ApiError(404, "no cities found");
  }
  return res.status(200).json(new ApiResponse(200, cities, "cities feteched"));
});

const getMoviesByCity = asyncHandler(async (req, res) => {
  const { cityId } = req.params;

  if (!cityId) {
    throw new ApiError(400, "City ID is required");
  }

  const cinemas = await Cinema.find({ city: cityId }).populate(
    "schedule.movie",
    "title genre language"
  );

  if (!cinemas.length) {
    throw new ApiError(404, "No cinemas found in this city");
  }

  let movies = [];
  cinemas.forEach((cinema) => {
    cinema.schedule.forEach((scheduleItem) => {
      if (scheduleItem.movie) {
        movies.push(scheduleItem.movie);
      }
    });
  });

  const uniqueMovies = [...new Map(movies.map((m) => [m._id, m])).values()];

  return res
    .status(200)
    .json(new ApiResponse(200, uniqueMovies, "Movies fetched successfully"));
});

export { addCity, getCities, getMoviesByCity };
