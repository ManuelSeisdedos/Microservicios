import Character from '../data/index.js'
import response from "../utils/response.js"
import axios from 'axios'

export default async (req,res) => {
    
    const body = req.body
    const newCharacter = await axios.post("http://localhost:8004/Characters", body)
    response(res, 201,newCharacter.data)
}