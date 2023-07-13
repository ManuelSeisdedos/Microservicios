import ClientError from "../utils/errors/index.js"

export default (req,res,next,validator) => {
    const name = req.body.name 
    if (name) {
        validator.name = name
        return validator
    } else { 
       validator.name = null
       return validator
    }
}