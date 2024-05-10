import mongoose from "mongoose";
require("dotenv").config()

const MONGODB_URI="mongodb://0.0.0.0:27017/Lms"

const dbUrl:string = `${MONGODB_URI}`;

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl).then((data:any) => {
            console.log(`Database connected with ${data.connection.host}`)
        })
    } catch (error:any) {
        console.log(error.message);
        setTimeout(connectDB, 5000);
    }
}

export default connectDB;