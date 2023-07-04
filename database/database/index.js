import mongoose from "mongoose";
import mongouri from '../config/envs.js'
import Characters from "./schemas/characterSchema.js"
console.log(mongouri)
const conn = mongoose.createConnection(
    mongouri.MONGO_URI
);

const Character = conn.model('Characters', Characters)
async () => {
    let res = await Character.find()
    console.log (res)
}