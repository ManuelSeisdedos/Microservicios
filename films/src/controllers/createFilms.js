import utils from '../utils/index.js'
import axios from 'axios'

export default async (req,res) => {
    console.log(req.body)
    const newFilm = await axios.post("http://localhost:8004/Films", req.body)
    utils.response(res, 201,newFilm.data)
}