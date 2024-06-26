import { app } from "./app";
import {v2 as cloudinary} from "cloudinary";
require("dotenv").config()
import connectDB from "./utils/db";

const PORT = 8000

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_SECRET_KEY,
   });

app.listen(process.env.PORT, () => {
    console.log(`Server is connected with the PORT ${PORT}`)
     connectDB()
})
