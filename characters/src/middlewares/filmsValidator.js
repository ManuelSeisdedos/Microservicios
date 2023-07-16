import ClientError from "../utils/errors/index.js"
import axios from 'axios'

export default async (req,res,next,validator) => {
    const {films} = req.body
    let promesas = []
    for (let index = 0; index < films.length; index++) {
    promesas.push(axios.get(`http://localhost:8004/Films/${index}`))
    }
    const value = await Promise.all(promesas)
    for (let index = 0; index < array.length; index++) {
        if(value.data[i]) {
            validator.films = films
        } else {
            throw new ClientError("Error en las peliculas.", 401)
        }
        
    }
    return validator
}