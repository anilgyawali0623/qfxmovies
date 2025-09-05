import { Router } from "express";
import { addMovies } from "../controllers/movie.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();
router.route("/addmovie").post(
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
    {
      name: "poster",
      maxCount: 1,
    },
  ]),
  addMovies
);
export default router;
