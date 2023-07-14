import ClientError from "../utils/errors/index.js"
import axios from 'axios'

export default async (req,res,next,validator) => {
    const {films} = req.body
    let promesas = []
    for (let index = 0; index < films.length; index++) {
    promesas.push(axios.get(`http://localhost:8004/Films/${index}`))
    }
    const value = await Promise.all(promesas)
    // Desarrollarlo, porque Films va a ser un array con strings de cada pelicula. 
    if (value.data._id) {
        validator.films = films
        return validator
    } else { 
       throw new ClientError("Error en el planeta.", 401)
    }
}