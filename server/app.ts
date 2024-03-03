require('dotenv').config()
import express from 'express'
export const app = express()
import cors from 'cors'
import cookieParser from 'cookie-parser'

app.use(express.json({limit: "50mb"}))

//cookie parser, this is used to collect cookies from frontend

app.use(cookieParser())

//cors = cross origin resource sharing
app.use(cors({
    origin: process.env.ORIGIN
}))