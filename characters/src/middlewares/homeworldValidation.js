import axios from 'axios'
export default async (req,res,next,validator) => {
    const {homeworld} = req.body
    typeof homeworld === "string"? validator.homeworld = null : validator.homeworld === homeworld
    const value = await axios.get(`http://localhost:8004/Planets`)
    console.log(value)
    value.data._id? validator.homeworld = homeworld : validator.homeworld = null
    return validator
}