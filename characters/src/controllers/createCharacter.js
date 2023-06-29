import Character from '../data/index.js'
import response from "../utils/response.js"


export default async (req,res) => {
    const newCharacter = await Character.create()
    response(res, 201,newCharacter)
    
}