import { app } from "./app";
require("dotenv").config()
import connectDB from "./utils/db";

app.listen(process.env.PORT, () => {
    console.log(`Server is connected with the PORT ${process.env.PORT}`)
     connectDB()
})
