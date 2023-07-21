import axios from "axios"

export default async (req,res,next) => {
    const {homeworld} = req.body
    
    const value = await axios.get("http://localhost:8004/Planets")
    const element = []
    for (let index = 0; index < value.data.length; index++) {
        element.push( value.data[index].name);
    }
    console.log(!element.includes(homeworld))
    if (!req.body.hasOwnProperty("homeworld") || !element.includes(homeworld)) {
        return null
    } else {
        if (typeof homeworld === "string" && homeworld.length > 1) {
            return homeworld
        }
    }
}