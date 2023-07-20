export default async (req,res,next) => {
    const {homeworld} = req.body
    if (!req.body.hasOwnProperty("homeworld")) {
        return null
    } else {
        if (typeof validator.homeworld === "string" && validator.name.length > 1) {
            return homeworld
        }
    }
}