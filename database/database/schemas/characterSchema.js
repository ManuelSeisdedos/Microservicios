import mongoose from "mongoose";

const Schema = mongoose.Schema

const characterSchema = new Schema({
    _id: String,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: {
        type: String,
        ref: "Planet"
    }, 
    films: [{
        type: String,
        ref: "Film"}] 
})

const Character = mongoose.model('Character', characterSchema)
export default Character;