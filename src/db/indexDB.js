
import mongoose from 'mongoose';

import {DB_NAME} from "../constants.js"



const connectDB = async()=>{
    try {
      const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }); 
      console.log(`\n MongoDB connected!! DB HOST: ${connection.connection.host}`) //to know which dB is connected
    } catch (error) {
        console.log("MONGODB connection error",error);
        process.exit(1);
    }
}

  
  export default connectDB;
