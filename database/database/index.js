import mongoose from "mongoose";
import mongouri from '../config/envs.js'
import Characters from "./schemas/characterSchema.js"


const conn = mongoose.connect(
    mongouri.MONGO_URL
);

Characters.find().then((res) => console.log(res))