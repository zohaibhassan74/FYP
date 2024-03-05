require('dotenv').config()
import express, { Request,Response,NextFunction } from 'express'
export const app = express()
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { ErrorMiddleware } from './middleware/error'

app.use(express.json({limit: "50mb"}))

//cookie parser, this is used to collect cookies from frontend

app.use(cookieParser())

//cors = cross origin resource sharing
app.use(cors({
    origin: process.env.ORIGIN
}))


app.get("/test",(req:Request,res:Response,next:NextFunction)=>{
    res.status(200).json({
        success:true,
        message:"API is working"
    })
})

app.all("*",(req:Request,res:Response,next:NextFunction)=>{
    const err = new Error(`Route ${req.originalUrl} not found`) as any;
    err.statusCode = 404
    next(err)
} )

app.use(ErrorMiddleware)