export default (req,res,next) => {
    
    if (!req.body.hasOwnProperty("name")) {
        return null
    } else {
        if (typeof validator.name === "string" && validator.name.length > 1) {
            return req.body.name
        }
    }
}