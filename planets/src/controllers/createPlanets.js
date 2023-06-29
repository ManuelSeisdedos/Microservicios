import Planets from '../data/index.js'
import response from "../utils/response.js"

export default async (req,res) => {
    const newPlanet = await Planets.create()
    response(res, 201,newPlanet)
}