import mongoose from "mongoose";
import mongouri from '../config/envs.js'
import Characters from "./schemas/characterSchema.js"

const conn = mongoose.createConnection(
    mongouri.MONGO_URI
);

const Character = conn.model('Characters', Characters)
console.log(Characters)
 Character.find().then((res)=> console.log(res))

