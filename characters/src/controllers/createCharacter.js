import Character from '../data/index.js'
import response from "../utils/response.js"
import axios from 'axios'

export default async (req,res) => {
   console.log(req.body)

    const newCharacter = await axios.post("http://database:8004/Characters", req.body)
    response(res, 201,newCharacter.data)
    
}