import mongoose from "mongoose";

const Schema = mongoose.Schema

const planetSchema = new Schema ({
    _id: String,
    name: {
        type: String,
        required: true
    },
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    residents: [{
        type:String,
        ref:"Character"}],
    films: [{
        type:String,
        ref:"Film"
    }] 
})

planetSchema.statics.list = async function () {
    return await this.find()
        .populate("residents",["_ids", "name"])
        .populate("films", ["_id", "title"])
}


planetSchema.statics.get = async function (_id) {
    return await this.findById(_id)
        .populate('residents',["_id", "name"])
        .populate('films', ["_id", "title"])
}

planetSchema.statics.insert = async function (planet) {
    await this.create(planet)
    return planet
}

const Planet = mongoose.model('Planet',planetSchema)

export default Planet;