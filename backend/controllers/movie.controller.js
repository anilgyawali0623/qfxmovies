import { Movie } from "../models/movie.model.js";
import { ApiError } from "../utils/ApiError.js";
import apiResponse from "../utils/apiResponse.js";

import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const addMovies = asyncHandler(async (req, res) => {
  const { name, runningTime, ageRating, description, language,director, genre, cast } =
    req.body;
  if (
    [name, runningTime, ageRating, description,director, language, genre, cast].some(
      (data) => data?.trim() === ""
    )
  ) {
    throw new ApiError(400, "all fields are required");
  }

  const existedMovie = await Movie.findOne({
    name,
  });

  if (existedMovie) {
    throw new ApiError(409, "movie already exist");
  }

  const imageLocalPath = req.files?.image[0]?.path;

  const posterLocalPath = req.files?.poster[0]?.path;
  if (!imageLocalPath || !posterLocalPath) {
    throw new ApiError(400, "images are required");
  }

  const poster = await uploadOnCloudinary(posterLocalPath);
  const image = await uploadOnCloudinary(imageLocalPath);

  const movie = await Movie.create({
    name,
    runningTime,
    ageRating,
    description,
    director,
    language,
    genre,
    cast,
    image,
    poster,
  });
  return res.status(201).json(new apiResponse(201, movie, "movie added"));
});

export { addMovies };
