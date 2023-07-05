import mongoose from "mongoose";
import mongouri from '../config/envs.js'
import Characters from "./schemas/characterSchema.js"
import Films from "./schemas/filmSchema.js";
import Planets from "./schemas/planetsSchema.js";



const conn = mongoose.connect(
    mongouri.MONGO_URL
);


export default {
    Characters,
    Films,
    Planets
}