import ClientError from "../utils/errors/index.js"

export default (req,res,next) => {
    const {title} = req.body
    if (title) {
        return next()
    } else { 
       throw new ClientError("Error en el nombre.", 401)
    }
}