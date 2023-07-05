import mongoose from "mongoose";

const Schema = mongoose.Schema

const filmSchema = new Schema(  {
    _id: String,
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: Date,
    characters: [{
        type: String,
        ref: "Character"
    }
    ],
    planets: [{
        type: String, 
        ref: "Planet"}]
  })

filmSchema.statics.list = async function () {
    return await this.find().populate("characters",["_ids", "name"]).populate("planets", ["_id", "name"])
}


filmSchema.statics.get = async function (_id) {
    return await this.findById(_id)
        .populate('characters',["_id", "name"])
        .populate('planets', ["_id", "name"])
}

filmSchema.statics.insert = async function (film) {
    await this.create(film)
    return film
}

const Film = mongoose.model("Film", filmSchema)
export default Film