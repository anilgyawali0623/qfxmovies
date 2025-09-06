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

    return res
      .status(201)
      .json(new ApiResponse(201, city, "new city is added"));
  
});

export {addCity}