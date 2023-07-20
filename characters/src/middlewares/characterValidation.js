import ClientError from "../utils/errors/index.js"

export default (req,res,next,validator) => {
    
    if (!req.body.hasOwnProperty("name")) {
        return null
    } else {
        if (typeof validator.name === "string" && validator.name.length > 1) {
            return req.body.name
        }
    }
}