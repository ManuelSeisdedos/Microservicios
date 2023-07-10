import mongoose from "mongoose";

const Schema = mongoose.Schema

const characterSchema = new Schema({
    _id: {
        type:String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: {
        type: String,
        default: Date.toString()
    },
    gender: String,
    homeworld: {
        type: String,
        ref: "Planet"
    }, 
    films: [{
        type: String,
        ref: "Film"}] 
})

characterSchema.statics.list = async function () {
    return await this.find()
        .populate('homeworld',["_id", "name"])
        .populate('films', ["_id", "title"])
}

characterSchema.statics.get = async function (_id) {
    return await this.findById(_id)
        .populate('homeworld',["_id", "name"])
        .populate('films', ["_id", "title"])
}

characterSchema.statics.insert = async function (character) {
    await this.create(character)
    return character
}


const Character = mongoose.model('Character', characterSchema)
export default Character;