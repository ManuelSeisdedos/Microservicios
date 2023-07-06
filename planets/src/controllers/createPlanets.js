import axios from 'axios';
import response from "../utils/response.js"

export default async (req,res) => {
    const newPlanet = await axios.post("http://database:8004/Planets", req.body)
    response(res, 201,newPlanet.data)
}