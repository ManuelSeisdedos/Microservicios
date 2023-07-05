export default function (req,res,next) {
    const {model} = req.params;
    if (["Characters", "Films", "Planets"].includes(model)){
        return next()
    } else {
        throw new Error ("Invalid model")
    }
}
