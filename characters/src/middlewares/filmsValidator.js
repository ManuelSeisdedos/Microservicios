import ClientError from "../utils/errors/index.js"

export default async (req,res,next) => {
    const {films} = req.body
    const value = await axios.get(`http://localhost:8004/Films/${films}`)
    // Desarrollarlo, porque Films va a ser un array con strings de cada pelicula. 
    if (value.data._id) {
        return next()
    } else { 
       throw new ClientError("Error en el planeta.", 401)
    }
}