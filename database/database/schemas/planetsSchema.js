import mongoose from "mongoose";

const Schema = mongoose.Schema

const planetSchema = new Schema ({
    
    _id: String,
    name: String,
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

const Planet = mongoose.model('Planet',planetSchema)

export default Planet;