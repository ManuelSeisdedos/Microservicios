import axios from 'axios'

export default async (req,res,next,validator) => {
    const {title} = req.body
    console.log(req.body)
    const value = await axios.get("http://localhost:8004/Films")
    const peliculas = []
    for (let index = 0; index < title.length; index++) {
        peliculas.push(value.data[index].title)
    }
    if (!req.body.hasOwnProperty("title")) {
        return null
    } else {
        if (typeof title === "object" ) {
            return title
        }
    }

}