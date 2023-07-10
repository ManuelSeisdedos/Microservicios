import ClientError from "../utils/errors/index.js"

export default async (req,res,next) => {
    const {homeworld} = req.body
    const value = await axios.get(`http://localhost:8004/Planets/${homeworld}`)
    // Terminar la busqueda por nombre
    if (value.data._id) {
        return next()
    } else { 
       throw new ClientError("Error en el planeta.", 401)
    }
}