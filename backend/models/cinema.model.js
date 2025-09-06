import mongoose from "mongoose";
import { Movie } from "./movie.model.js";
import { City } from "./city.model.js";

const cinemaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
      required: true,
    },

    rows: [
      {
        rowLabel: {
          type: String,
          required: true,
        },
        seats: [
          {
            number: {
              type: Number,
              required: true,
            },
            isBooked: {
              type: Boolean,
              default: false,
            },
          },
        ],
      },
    ],

    schedule: [
      {
        movie: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Movie",
        },
        showtimes: [
          {
            day: {
              type: String,
            },
            times: [
              {
                type: String,
              },
            ],
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

export const Cinema = mongoose.model("Cinema", cinemaSchema);
