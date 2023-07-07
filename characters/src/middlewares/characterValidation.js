import ClientError from "../utils/errors/index.js"

export default (req,res,next) => {
    
    console.log(req)
    const name = req.body.name

    if (name) {
        next()
    } else { 
       throw new ClientError("Error en el nombre.", 401)
    }
}