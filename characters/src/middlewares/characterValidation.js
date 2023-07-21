export default (req,res,next) => {
    
    if (!req.body.hasOwnProperty("name")) {
        return null
    } else {
        if (typeof req.body.name === "string" && req.body.name.length > 1) {
            return req.body.name
        }
    }
}