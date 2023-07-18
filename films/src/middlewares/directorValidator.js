import ClientError from "../utils/errors";

export default (req,res,validator) => {
    const {director} = req.body
    
    if (director) {
        validator.director = director
        return validator
    } else { 
        return new ClientError ("Error en el director", 401)
    }
}