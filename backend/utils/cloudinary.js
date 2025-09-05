import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv"
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  if (!localFilePath) return null; // safety check

  try {
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto", // supports images, videos, etc.
    });

    console.log("File uploaded to Cloudinary:", response.secure_url);

    // Delete temp file safely
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return response.secure_url; // just return URL
  } catch (error) {
    console.error("Cloudinary upload error:", error);

    // Delete temp file safely even if upload fails
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    throw error; // propagate error to controller
  }
};

export { uploadOnCloudinary };
