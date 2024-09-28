import dotenv from "dotenv"
import connectDB from './db/indexDB.js'


dotenv.config({
    path:'./env'
})

connectDB();