import mongoose from "mongoose";
import mongouri from '../config/envs.js'
import Characters from "./schemas/characterSchema.js"
import Film from "./schemas/filmSchema.js";
import Planet from "./schemas/planetsSchema.js";



const conn = mongoose.connect(
    mongouri.MONGO_URL
);


export default {
    Characters,
    Film,
    Planet
}